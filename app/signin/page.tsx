import Link from "next/link";
import Brand from "@/components/Brand";

export default function SignInPage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-16">
      <div className="mb-8 text-center">
        <Brand />
        <h1 className="mt-6 font-[var(--font-ibm)] text-3xl font-semibold">Sign in</h1>
        <p className="mt-2 text-sm opacity-80">Welcome back to ReceiptOne</p>
      </div>

      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            className="w-full rounded-xl bg-white/80 px-4 py-3 text-sm shadow-glass ring-1 ring-black/10 outline-none transition focus:ring-2 focus:ring-accent-primary/40 dark:bg-black/20 dark:ring-white/10"
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="mb-2 block text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            required
            className="w-full rounded-xl bg-white/80 px-4 py-3 text-sm shadow-glass ring-1 ring-black/10 outline-none transition focus:ring-2 focus:ring-accent-primary/40 dark:bg-black/20 dark:ring-white/10"
            placeholder="••••••••"
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex cursor-pointer items-center gap-2">
            <input type="checkbox" className="h-4 w-4" />
            <span className="opacity-80">Remember me</span>
          </label>
          <a href="/forgot-password" className="text-accent-primary opacity-80 hover:opacity-100">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-accent-primary px-5 py-3 font-medium text-white shadow-soft transition hover:translate-y-[-1px] hover:opacity-95"
        >
          Sign in
        </button>
      </form>

      <div className="mt-6 text-center text-sm opacity-80">
        Don't have an account?{" "}
        <Link href="/signup" className="text-accent-primary hover:underline">
          Sign up
        </Link>
      </div>

      <div className="mt-8 border-t border-black/10 pt-6 dark:border-white/10">
        <p className="text-center text-xs opacity-70">
          By signing in, you agree to our{" "}
          <Link href="/terms" className="underline">
            Terms
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}

