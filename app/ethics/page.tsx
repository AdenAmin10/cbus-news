export const metadata = {
  title: "Editorial Standards | CityLine Sports",
  description: "CityLine Sports code of ethics and reporting standards.",
};

const pillars = [
  {
    title: "Accuracy",
    text: "Every stat, quotation, and caption is verified with original documents, official scorers, or on-site observation. We correct errors promptly and transparently.",
  },
  {
    title: "Independence",
    text: "CityLine editors do not accept gifts or coverage directives from teams, leagues, or sponsors. Editorial floors remain separate from revenue operations.",
  },
  {
    title: "Accountability",
    text: "We publish corrections and updates in-line, note when a story has been changed, and welcome feedback from readers and sources.",
  },
  {
    title: "Transparency",
    text: "Reporters identify themselves when interviewing sources, disclose credentialed access, and label opinion or sponsored content.",
  },
];

export default function EthicsPage() {
  return (
    <main className="w-full bg-white">
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-12 space-y-8">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-red-600">CityLine Standards</p>
          <h1 className="text-4xl font-black">Code of Ethics</h1>
          <p className="text-sm md:text-base text-zinc-600">
            Our newsroom follows SPJ-inspired guidelines tailored to sports reporting in Columbus. We also align with
            AP style for writing and adhere to credential agreements for every league we cover.
          </p>
        </div>

        <div className="grid gap-6">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="p-6 border border-zinc-200 rounded-2xl bg-white">
              <h2 className="text-xl font-semibold text-zinc-900">{pillar.title}</h2>
              <p className="text-sm text-zinc-600 mt-2">{pillar.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
