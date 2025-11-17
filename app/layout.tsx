import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://citylinesports.com"),
  title: {
    default: "CityLine Sports",
    template: "%s | CityLine Sports",
  },
  description: "CityLine Sports delivers Columbus sports headlines across Ohio State, Crew, and Blue Jackets.",
  keywords: [
    "Columbus sports",
    "CityLine Sports",
    "Ohio State news",
    "Columbus Crew",
    "Blue Jackets",
  ],
  authors: [{ name: "CityLine Sports" }],
  openGraph: {
    title: "CityLine Sports",
    description: "Live Columbus sports news: Ohio State, Crew, Blue Jackets, and more.",
    url: "https://citylinesports.com",
    siteName: "CityLine Sports",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://citylinesports.com/cityline-favicon.svg",
        width: 1200,
        height: 630,
        alt: "CityLine Sports",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CityLine Sports",
    description: "Columbus sports coverage: Ohio State, Crew, Blue Jackets.",
    images: ["https://citylinesports.com/cityline-favicon.svg"],
  },
  icons: {
    icon: "/cityline-favicon.svg",
    shortcut: "/cityline-favicon.svg",
    apple: "/cityline-favicon.svg",
  },
  alternates: {
    canonical: "https://citylinesports.com",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-[var(--surface-bg)]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[var(--surface-bg)] text-zinc-900 antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-1 w-full bg-white">{children}</div>
          <footer className="border-t border-zinc-200 bg-white text-sm text-zinc-600">
            <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 grid gap-6 md:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-red-600 mb-2">CityLine Sports</p>
                <p className="text-lg font-semibold text-zinc-900">Columbus Sports Intelligence</p>
                <p className="mt-2">
                  Daily analysis covering Ohio State, Columbus Crew, and the broader Ohio sports scene.
                </p>
              </div>
              <div>
                <p className="font-semibold text-zinc-900 mb-2">Contact</p>
                <p>
                  Editorial tips:{" "}
                  <a href="mailto:tips@citylinesports.com" className="text-red-600 hover:underline">
                    tips@citylinesports.com
                  </a>
                </p>
                <p>
                  Partnerships:{" "}
                  <a href="mailto:partners@citylinesports.com" className="text-red-600 hover:underline">
                    partners@citylinesports.com
                  </a>
                </p>
              </div>
              <div>
                <p className="font-semibold text-zinc-900 mb-2">Follow</p>
                <p>LinkedIn · X · Instagram</p>
                <p className="text-xs mt-3">© {new Date().getFullYear()} CityLine Sports. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
