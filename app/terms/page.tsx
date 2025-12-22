const company = process.env.NEXT_PUBLIC_COMPANY_NAME ?? "FLUTTER HORIZON";
const appName = process.env.NEXT_PUBLIC_APP_NAME ?? "ReceiptOne";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-[var(--font-ibm)] text-3xl font-semibold">Terms of Service</h1>
      <p className="mt-3 text-sm opacity-80">Last updated: {new Date().toISOString().slice(0, 10)}</p>

      <div className="mt-8 space-y-6 leading-relaxed opacity-90">
        <p>
          These Terms govern your use of the <strong>{appName}</strong> website and lead forms operated by{" "}
          <strong>{company}</strong>.
        </p>

        <h2 className="font-[var(--font-ibm)] text-xl font-semibold">No tax or legal advice</h2>
        <p>
          {appName} provides tools to organize data and generate reports. We do not provide tax, accounting, or legal
          advice. You are responsible for validating outputs with your accountant or advisor.
        </p>

        <h2 className="font-[var(--font-ibm)] text-xl font-semibold">Acceptable use</h2>
        <ul className="list-disc pl-6">
          <li>Do not abuse the lead form or attempt to disrupt the service.</li>
          <li>Do not submit unlawful or harmful content.</li>
        </ul>

        <h2 className="font-[var(--font-ibm)] text-xl font-semibold">Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, {company} is not liable for indirect, incidental, special, or
          consequential damages arising from your use of the website.
        </p>

        <h2 className="font-[var(--font-ibm)] text-xl font-semibold">Contact</h2>
        <p>
          For questions: <strong>support@receipt-one.com</strong> (replace with your real mailbox).
        </p>
      </div>
    </div>
  );
}
