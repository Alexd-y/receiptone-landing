const canonical = process.env.NEXT_PUBLIC_CANONICAL_URL ?? "https://receipt-one.com";
const company = process.env.NEXT_PUBLIC_COMPANY_NAME ?? "FLUTTER HORIZON";
const appName = process.env.NEXT_PUBLIC_APP_NAME ?? "ReceiptOne";

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-[var(--font-ibm)] text-3xl font-semibold">Privacy Policy</h1>
      <p className="mt-3 text-sm opacity-80">Last updated: {new Date().toISOString().slice(0, 10)}</p>

      <div className="mt-8 space-y-6 leading-relaxed opacity-90">
        <p>
          This Privacy Policy explains how <strong>{company}</strong> (“we”, “us”) collects and uses information when you
          visit the <strong>{appName}</strong> website at <strong>{canonical}</strong>.
        </p>

        <h2 className="font-[var(--font-ibm)] text-xl font-semibold">Information we collect</h2>
        <ul className="list-disc pl-6">
          <li>
            Lead form data: email (required), name (optional), persona selection (optional), and your consent choices.
          </li>
          <li>Technical data: user agent, approximate location/country (if available), and anti-abuse signals.</li>
        </ul>

        <h2 className="font-[var(--font-ibm)] text-xl font-semibold">How we use information</h2>
        <ul className="list-disc pl-6">
          <li>To respond to your request for early access, demo, or product updates.</li>
          <li>To operate and secure the site (fraud/abuse prevention).</li>
          <li>To improve the product and user experience (only if you consent to analytics).</li>
        </ul>

        <h2 className="font-[var(--font-ibm)] text-xl font-semibold">Data retention</h2>
        <p>
          We retain lead information as long as necessary for the purposes above, or as required by law. You can request
          deletion by contacting us.
        </p>

        <h2 className="font-[var(--font-ibm)] text-xl font-semibold">Contact</h2>
        <p>
          For privacy requests, contact: <strong>privacy@receipt-one.com</strong> (replace with your real mailbox).
        </p>
      </div>
    </div>
  );
}
