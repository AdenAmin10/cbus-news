export const metadata = {
  title: "Request Credentials | CityLine Sports",
  description: "Submit media credential requests to CityLine Sports.",
};

export default function CredentialsPage() {
  return (
    <main className="w-full bg-white">
      <section className="max-w-3xl mx-auto px-4 md:px-8 py-12 space-y-6 text-sm text-zinc-700">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-red-600">Media Access</p>
          <h1 className="text-4xl font-black text-zinc-900">Credential Requests</h1>
          <p>
            CityLine Sports provides limited press credentials for freelance photographers, videographers, and writers on a
            case-by-case basis. Use the guidance below to request access to Ohio events we cover.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900">Submission Checklist</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Full name, outlet, and role (writer, photographer, etc.).</li>
            <li>Event you wish to cover, date, and venue.</li>
            <li>Examples of prior work or portfolio links.</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900">Where to send</h2>
          <p>
            Email <a href="mailto:credentials@citylinesports.com" className="text-red-600">credentials@citylinesports.com</a> at least two weeks prior to the event.
          </p>
        </div>
      </section>
    </main>
  );
}
