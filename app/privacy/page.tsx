export const metadata = {
  title: "Privacy Policy | CityLine Sports",
  description: "How CityLine Sports collects and uses reader data.",
};

export default function PrivacyPage() {
  return (
    <main className="w-full bg-white">
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-12 space-y-6 text-sm text-zinc-700">
        <h1 className="text-4xl font-black text-zinc-900">Privacy Policy</h1>
        <p>Effective date: November 16, 2023</p>
        <p>
          We collect limited personal information—such as email addresses submitted through contact forms—to respond to
          inquiries and deliver newsroom updates. We do not sell reader data, and we only share information when required by
          law or to defend our legal rights.
        </p>
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900">Cookies & Analytics</h2>
          <p>
            CityLine Sports uses privacy-friendly analytics to measure traffic trends. Cookies are employed solely to
            maintain site preferences. You can disable cookies in your browser settings without losing access to our articles.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900">Reader Submissions</h2>
          <p>
            Tips, corrections, and credential requests submitted through forms are routed to our editorial inbox. We retain
            submissions for up to one year for quality assurance.
          </p>
        </div>
        <p>
          For privacy questions or data requests, contact privacy@citylinesports.com. We aim to respond within 72 hours.
        </p>
      </section>
    </main>
  );
}
