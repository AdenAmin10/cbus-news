import type { ReactNode } from "react";
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

export const metadata = {
  title: "Cbus News",
  description: "Columbus sports news aggregator",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-[var(--surface-bg)]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[var(--surface-bg)] text-zinc-900 antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-1 w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
