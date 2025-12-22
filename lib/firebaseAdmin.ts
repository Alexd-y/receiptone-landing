import { optionalEnv } from "@/lib/env";

let cached: any = null;

export async function getFirestore() {
  if (cached) return cached;

  const projectId = optionalEnv("FIREBASE_PROJECT_ID");
  const clientEmail = optionalEnv("FIREBASE_CLIENT_EMAIL");
  const privateKeyRaw = optionalEnv("FIREBASE_PRIVATE_KEY");

  if (!projectId || !clientEmail || !privateKeyRaw) {
    throw new Error("Firebase env vars missing. Set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY.");
  }

  const privateKey = privateKeyRaw.replace(/\\n/g, "\n");

  // Dynamic import to avoid build errors if firebase-admin is not installed
  // Using eval to prevent TypeScript from checking at compile time
  let admin: any;
  try {
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    const importFn = new Function('return import("firebase-admin")');
    admin = await importFn();
  } catch (error) {
    throw new Error("firebase-admin package not installed. Run: npm i firebase-admin");
  }

  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: admin.credential.cert({ projectId, clientEmail, privateKey })
    });
  }

  cached = admin.firestore();
  return cached;
}
