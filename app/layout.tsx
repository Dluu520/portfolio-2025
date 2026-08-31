import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-dluu-dev.vercel.app"),
  title: "Dong Luu | Full-Stack Developer & QA/Data Focus",
  description:
    "Portfolio of Dong Luu, a recent Computer Science graduate with experience in full-stack web development, software QA, and data analytics-focused problem solving.",
  keywords: [
    "Dong Luu",
    "Full-Stack Developer",
    "Software Quality Assurance",
    "Computer Science",
    "Data Analytics",
    "Portfolio",
    "QA",
  ],
  openGraph: {
    title: "Dong Luu | Full-Stack Developer & QA/Data Focus",
    description:
      "Recent Computer Science graduate with experience in software development, QA, and data analytics-focused work.",
    url: "https://portfolio-dluu-dev.vercel.app",
    siteName: "Dong Luu Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white font-sans`}
      >
        {children}
        <GoogleAnalytics />
        <Analytics />
      </body>
    </html>
  );
}
