import { leadStorage } from "@/lib/env";
import { normalizeEmail, safeString } from "@/lib/sanitize";
import type { LeadInput } from "@/lib/validators";
import crypto from "crypto";

function hashIp(ip: string): string {
  return crypto.createHash("sha256").update(ip).digest("hex");
}

export async function storeLead(params: {
  input: LeadInput;
  userAgent: string | null;
  ip: string | null;
  country: string | null;
}) {
  const storage = leadStorage();
  const email = normalizeEmail(params.input.email);

  const record = {
    email,
    name: safeString(params.input.name ?? null),
    persona: safeString(params.input.persona ?? null),
    consentMarketing: params.input.consentMarketing,
    consentAnalytics: params.input.consentAnalytics,
    source: safeString(params.input.source ?? null),
    userAgent: safeString(params.userAgent ?? null),
    ipHash: params.ip ? hashIp(params.ip) : null,
    country: safeString(params.country ?? null),
    message: safeString(params.input.message ?? null)
  };

  if (storage === "firebase") {
    try {
      // Dynamic import only at runtime to avoid build-time errors
      const firebaseAdminModule = await import("@/lib/firebaseAdmin");
      const db = await firebaseAdminModule.getFirestore();
      await db.collection("leads").add({
        ...record,
        createdAt: new Date().toISOString()
      });
      return;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      if (errorMessage.includes("firebase-admin") || errorMessage.includes("Cannot find module")) {
        throw new Error("Firebase not configured. Install firebase-admin: npm i firebase-admin");
      }
      throw error;
    }
  }

  const { PrismaClient } = await import("@prisma/client");
  const prisma = new PrismaClient();
  try {
    await prisma.lead.create({ data: record });
  } finally {
    await prisma.$disconnect();
  }
}
