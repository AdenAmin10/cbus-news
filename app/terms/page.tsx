export const metadata = {
  title: "Terms of Service | CityLine Sports",
  description: "Usage agreement for CityLine Sports digital platforms.",
};

export default function TermsPage() {
  return (
    <main className="w-full bg-white">
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-12 space-y-6 text-sm text-zinc-700">
        <h1 className="text-4xl font-black text-zinc-900">Terms of Service</h1>
        <p>Effective date: November 16, 2023</p>
        <p>
          CityLine Sports provides digital news services subject to the following terms. By accessing citylinesports.com,
          you agree to these conditions and to all applicable laws and regulations.
        </p>
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900">Use of Content</h2>
          <p>
            Content published on CityLine Sports is protected by copyright. You may share excerpts for personal use with
            attribution. Commercial republication requires written consent from CityLine Media LLC.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900">User Conduct</h2>
          <p>
            Visitors agree not to post defamatory, discriminatory, or infringing material on comment platforms or contact
            forms. We reserve the right to moderate or remove submissions that violate these standards.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900">Liability</h2>
          <p>
            CityLine Sports is not liable for damages arising from site interruptions or third-party links. All coverage is
            provided “as is” without warranties beyond those required by Ohio law.
          </p>
        </div>
        <p>
          Questions about these terms can be directed to legal@citylinesports.com. These terms are reviewed annually or
          whenever products materially change.
        </p>
      </section>
    </main>
  );
}
