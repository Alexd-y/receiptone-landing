export function getEnv(name: string, required = true): string {
  const v = process.env[name];
  if (!v || !v.trim()) {
    if (required) throw new Error(`Missing env: ${name}`);
    return "";
  }
  return v;
}

export function optionalEnv(name: string): string | undefined {
  const v = process.env[name];
  return v && v.trim() ? v : undefined;
}

export function leadStorage(): "firebase" {
  // ReceiptOne использует Firebase Firestore как основную БД
  return "firebase";
}
