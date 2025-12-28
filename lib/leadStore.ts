import { getFirestore } from "@/lib/firebaseAdmin";
import { normalizeEmail, safeString } from "@/lib/sanitize";
import type { LeadInput } from "@/lib/validators";
import type { Lead } from "@/lib/types/firebase";
import crypto from "crypto";

function hashIp(ip: string): string {
  return crypto.createHash("sha256").update(ip).digest("hex");
}

/**
 * Сохраняет лид в Firebase Firestore коллекцию "leads"
 * Использует ту же базу данных, что и мобильное приложение ReceiptOne
 */
export async function storeLead(params: {
  input: LeadInput;
  userAgent: string | null;
  ip: string | null;
  country: string | null;
}) {
  const email = normalizeEmail(params.input.email);

  const record: Omit<Lead, "created_time"> = {
    email,
    name: safeString(params.input.name ?? null),
    persona: safeString(params.input.persona ?? null),
    consentMarketing: params.input.consentMarketing,
    consentAnalytics: params.input.consentAnalytics,
    source: safeString(params.input.source ?? "landing"),
    userAgent: safeString(params.userAgent ?? null),
    ipHash: params.ip ? hashIp(params.ip) : null,
    country: safeString(params.country ?? null),
    message: safeString(params.input.message ?? null),
    createdAt: new Date().toISOString()
  };

  try {
    const db = await getFirestore();
    await db.collection("leads").add(record);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    if (errorMessage.includes("firebase-admin") || errorMessage.includes("Cannot find module")) {
      throw new Error("Firebase not configured. Check FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY.");
    }
    throw error;
  }
}
