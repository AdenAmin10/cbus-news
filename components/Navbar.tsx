import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white/80 backdrop-blur border-b border-zinc-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-red-600 flex items-center justify-center text-[10px] font-bold text-white">
            CLS
          </div>
          <span className="text-lg md:text-xl font-extrabold tracking-tight">
            CityLine Sports
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-700">
          <Link href="/" className="hover:text-red-600 transition">Home</Link>
          <Link href="/osu" className="hover:text-red-600 transition">Ohio State</Link>
          <Link href="/crew" className="hover:text-red-600 transition">Crew</Link>
          <Link href="/cbj" className="hover:text-red-600 transition">Blue Jackets</Link>
          <Link href="/contact" className="hover:text-red-600 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
