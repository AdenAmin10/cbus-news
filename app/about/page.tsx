export const metadata = {
  title: "About CityLine Sports",
  description: "Masthead and mission for CityLine Sports, Columbus' dedicated sports newsroom.",
};

const staff = [
  { role: "Editor-in-Chief", name: "Nick Wright" },
  { role: "Senior Editor", name: "Miles Porter" },
  { role: "Investigations Editor", name: "Grant Whitfield" },
  { role: "Features Editor", name: "Landon Pierce" },
  { role: "Digital Editor", name: "Cole Matthews" },
];

export default function AboutPage() {
  return (
    <main className="w-full bg-white">
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-12 space-y-8">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-red-600">About CityLine Sports</p>
          <h1 className="text-4xl font-black">Our Mission & Masthead</h1>
          <p className="text-sm md:text-base text-zinc-600">
            CityLine Sports is an independent newsroom based in Columbus, Ohio. We cover Buckeye athletics, the
            Columbus Crew, the Blue Jackets, and every professional storyline that matters to fans across the 614.
            Our team believes in accountability, reporting with context, and being present at the venues where news
            happens.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Editorial Leadership</h2>
          <ul className="space-y-2">
            {staff.map((person) => (
              <li key={person.name} className="flex justify-between border-b border-zinc-200 pb-2 text-sm md:text-base">
                <span className="font-medium text-zinc-800">{person.name}</span>
                <span className="text-zinc-500">{person.role}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 text-sm text-zinc-600">
          <h2 className="text-2xl font-semibold text-zinc-900">Press & Partnerships</h2>
          <p>
            Looking to collaborate, request media credentials, or invite us to cover an event? Email
            <a href="mailto:partners@citylinesports.com" className="text-red-600"> partners@citylinesports.com</a>
            or visit our credentials page for guidelines.
          </p>
        </div>
      </section>
    </main>
  );
}
