import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import DesktopNavigation from "./components/DesktopNavigation";
import LoadingOverlay from "./components/LoadingOverlay";
import { PageTransitionProvider } from "./components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = 'https://muhammadshamil.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Shamil — Portfolio",
  description: "Freelance MERN stack developer with real client experience, focused on building scalable and maintainable web applications.",
  keywords: ['Muhammad Shamil', 'MERN Stack Developer', 'Freelance Developer', 'Full-stack Developer', 'Web Developer', 'Portfolio', 'React', 'Next.js', 'Node.js'],
  authors: [{ name: 'Muhammad Shamil' }],
  robots: 'index, follow',

  // Open Graph — Facebook, LinkedIn, WhatsApp, etc.
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Muhammad Shamil — Full-stack Web Developer',
    description: 'Freelance MERN stack developer with real client experience, focused on building scalable and maintainable web applications.',
    siteName: 'Shamil — Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Muhammad Shamil — Full-stack Web Developer Portfolio',
      },
    ],
    locale: 'en_US',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Shamil — Full-stack Web Developer',
    description: 'Freelance MERN stack developer with real client experience, focused on building scalable and maintainable web applications.',
    images: ['/og-image.png'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorantGaramond.variable} antialiased`}
      >
        <PageTransitionProvider>
          <LoadingOverlay>
            {/* Desktop Navigation */}
            <DesktopNavigation />

            {/* Main Content */}
            <div>
              {children}
            </div>
          </LoadingOverlay>
        </PageTransitionProvider>
      </body>
    </html>
  );
}