import Link from "next/link";

export const metadata = {
  title: "Contact | CityLine Sports",
  description: "Reach the CityLine Sports newsroom and advertising teams.",
};

export default function ContactPage() {
  return (
    <main className="w-full bg-white">
      <section className="w-full py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-10">
          <header className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-red-600">CityLine Sports</p>
            <h1 className="text-4xl md:text-5xl font-black">Contact the Newsroom</h1>
            <p className="text-sm md:text-base text-zinc-600">
              Send tips, interview requests, or advertising inquiries directly to our editorial and partnerships teams.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold">Editorial</h2>
              <p className="text-sm text-zinc-600">
                Email: <a href="mailto:tips@citylinesports.com" className="text-red-600 hover:underline">tips@citylinesports.com</a>
              </p>
              <p className="text-sm text-zinc-600">Desk phone: (614) 555-0176</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold">Partnerships</h2>
              <p className="text-sm text-zinc-600">
                Email: <a href="mailto:partners@citylinesports.com" className="text-red-600 hover:underline">partners@citylinesports.com</a>
              </p>
              <p className="text-sm text-zinc-600">Sales: (614) 555-0123</p>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Mailing address</h2>
            <p className="text-sm text-zinc-600">
              CityLine Sports<br />
              123 Arena District Blvd<br />
              Columbus, OH 43215
            </p>
          </div>

          <Link href="/" className="inline-flex items-center text-sm font-semibold text-red-600 hover:text-red-500">
            ← Back to headlines
          </Link>
        </div>
      </section>
    </main>
  );
}
