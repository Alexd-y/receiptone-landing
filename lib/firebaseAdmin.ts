import { getEnv, optionalEnv } from "@/lib/env";
import admin from "firebase-admin";

let cached: admin.firestore.Firestore | null = null;

/**
 * Инициализирует и возвращает экземпляр Firestore
 * Использует ту же базу данных, что и мобильное приложение ReceiptOne
 */
export async function getFirestore(): Promise<admin.firestore.Firestore> {
  if (cached) return cached;

  const projectId = getEnv("FIREBASE_PROJECT_ID");
  const clientEmail = getEnv("FIREBASE_CLIENT_EMAIL");
  const privateKeyRaw = getEnv("FIREBASE_PRIVATE_KEY");

  const privateKey = privateKeyRaw.replace(/\\n/g, "\n");

  // Инициализация Firebase Admin SDK
  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId,
        clientEmail,
        privateKey
      })
    });
  }

  cached = admin.firestore();
  return cached;
}
