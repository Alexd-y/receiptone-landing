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

export function leadStorage(): "postgres" | "firebase" {
  const v = (process.env.LEAD_STORAGE ?? "postgres").toLowerCase();
  if (v === "firebase") return "firebase";
  return "postgres";
}
