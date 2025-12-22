import { NextRequest, NextResponse } from "next/server";
import { LeadSchema } from "@/lib/validators";
import { storeLead } from "@/lib/leadStore";
import { rateLimit } from "@/lib/rateLimit";

function getClientIp(req: NextRequest): string | null {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim() ?? null;
  const xrip = req.headers.get("x-real-ip");
  return xrip?.trim() ?? null;
}

export async function POST(req: NextRequest) {
  // Origin/Host check for security
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  const referer = req.headers.get("referer");
  const canonical = process.env.NEXT_PUBLIC_CANONICAL_URL;
  
  // Allow same-origin requests and requests from canonical domain
  if (canonical) {
    const canonicalHost = new URL(canonical).hostname;
    const isAllowedOrigin = 
      origin === canonical ||
      origin === `https://${host}` ||
      origin === `http://${host}` ||
      host === canonicalHost ||
      (referer && new URL(referer).hostname === canonicalHost);
    
    // In production, enforce origin check (allow localhost for dev)
    if (process.env.NODE_ENV === "production" && !isAllowedOrigin && host !== "localhost" && !host?.startsWith("127.0.0.1")) {
      return NextResponse.json({ error: "Invalid origin" }, { status: 403 });
    }
  }

  // Content-Type check
  const contentType = req.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    return NextResponse.json({ error: "Invalid content type" }, { status: 400 });
  }

  const ip = getClientIp(req);
  const key = ip ? `ip:${ip}` : `anon:${req.headers.get("user-agent") ?? "ua"}`;

  const rl = rateLimit(key, 8, 10 * 60 * 1000); // 8 requests / 10 minutes
  if (!rl.ok) {
    return NextResponse.json(
      { error: `Too many requests. Retry after ${rl.retryAfterSec}s.` },
      { status: 429, headers: { "Retry-After": String(rl.retryAfterSec) } }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = LeadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const input = parsed.data;

  // Honeypot check: if website field is filled, it's a bot
  if (input.website && input.website.trim().length > 0) {
    // Silently reject (don't reveal it's a honeypot)
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  if (!input.consentMarketing) {
    return NextResponse.json({ error: "Marketing consent is required to request early access." }, { status: 400 });
  }

  const userAgent = req.headers.get("user-agent");
  const country = req.headers.get("x-vercel-ip-country");

  try {
    await storeLead({
      input,
      userAgent,
      ip,
      country
    });
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Server error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
