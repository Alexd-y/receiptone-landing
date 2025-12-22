import Link from "next/link";
import Brand from "@/components/Brand";

export default function SignUpPage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6 py-16">
      <div className="mb-8 text-center">
        <Brand />
        <h1 className="mt-6 font-[var(--font-ibm)] text-3xl font-semibold">Sign up</h1>
        <p className="mt-2 text-sm opacity-80">Create your ReceiptOne account</p>
      </div>

      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            required
            className="w-full rounded-xl bg-white/80 px-4 py-3 text-sm shadow-glass ring-1 ring-black/10 outline-none transition focus:ring-2 focus:ring-accent-primary/40 dark:bg-black/20 dark:ring-white/10"
            placeholder="Your name"
          />
        </div>

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
            autoComplete="new-password"
            required
            className="w-full rounded-xl bg-white/80 px-4 py-3 text-sm shadow-glass ring-1 ring-black/10 outline-none transition focus:ring-2 focus:ring-accent-primary/40 dark:bg-black/20 dark:ring-white/10"
            placeholder="••••••••"
          />
          <p className="mt-1 text-xs opacity-70">At least 8 characters</p>
        </div>

        <div>
          <label className="flex cursor-pointer items-start gap-3 text-sm">
            <input type="checkbox" required className="mt-1 h-4 w-4" />
            <span className="opacity-90">
              I agree to the{" "}
              <Link href="/terms" className="text-accent-primary underline">
                Terms
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-accent-primary underline">
                Privacy Policy
              </Link>
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-accent-primary px-5 py-3 font-medium text-white shadow-soft transition hover:translate-y-[-1px] hover:opacity-95"
        >
          Create account
        </button>
      </form>

      <div className="mt-6 text-center text-sm opacity-80">
        Already have an account?{" "}
        <Link href="/signin" className="text-accent-primary hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  );
}

