import type { Metadata } from "next";
import { Geist, Geist_Mono, Unbounded } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ietsmetai - Portfolio",
  description: "Portfolio website van Milan van Bruggen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${unbounded.variable} antialiased`}
      >
        <Navigation />
        {children}
        <footer className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="max-w-6xl mx-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600 dark:text-gray-400">
            <p className="font-medium text-gray-700 dark:text-gray-300">
              &copy; {new Date().getFullYear()} ietsmetai. Alle rechten voorbehouden.
            </p>
            <div className="flex gap-3 text-gray-600 dark:text-gray-400">
              <a className="hover:text-gray-900 dark:hover:text-white transition-colors" href="mailto:info@milanvanbruggen.nl">
                info@milanvanbruggen.nl
              </a>
              <span className="text-gray-400">•</span>
              <a
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
                href="https://linkedin.com/in/milanvanbruggen"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
