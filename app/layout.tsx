import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manx Autoglazing | Windscreen Repair & Replacement Isle of Man",
  description: "Trusted autoglass specialists on the Isle of Man. Professional windscreen repairs, replacements, and custom glazing services. Fast turnaround, insurance-friendly. Call +44 7624 304585",
  keywords: ["autoglass", "windscreen repair", "windscreen replacement", "Isle of Man", "car glass", "Manx Autoglazing"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
