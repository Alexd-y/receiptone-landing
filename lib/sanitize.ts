export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function safeString(v: string | null | undefined): string | null {
  if (!v) return null;
  const s = v.trim();
  if (!s) return null;
  return s;
}
