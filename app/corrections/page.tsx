export const metadata = {
  title: "Corrections & Tips | CityLine Sports",
  description: "How to submit corrections, clarifications, or news tips to CityLine Sports.",
};

export default function CorrectionsPage() {
  return (
    <main className="w-full bg-white">
      <section className="max-w-3xl mx-auto px-4 md:px-8 py-12 space-y-6 text-sm text-zinc-700">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-red-600">Accountability</p>
          <h1 className="text-4xl font-black text-zinc-900">Corrections & Tip Line</h1>
          <p>
            If you spot an error or have additional context for a story, please reach out immediately. We review every
            submission and update articles with a timestamped correction note when warranted.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900">How to contact us</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Email the desk: <a href="mailto:corrections@citylinesports.com" className="text-red-600">corrections@citylinesports.com</a>
            </li>
            <li>
              Include the article headline, URL, and a brief note describing the issue.
            </li>
            <li>
              Provide supporting documentation (box score, photo, credential, etc.) if available.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900">Response window</h2>
          <p>
            We acknowledge every correction request within one business day. Urgent factual errors tied to breaking news are
            triaged immediately. Once verified, the story is updated and the change logged at the end of the article.
          </p>
        </div>
      </section>
    </main>
  );
}
