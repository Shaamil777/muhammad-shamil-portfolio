import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DesktopNavigation from "./components/DesktopNavigation";
import LoadingOverlay from "./components/LoadingOverlay";
import { PageTransitionProvider } from "./components/PageTransition";
import ClarityProvider from "./components/ClarityProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = 'https://muhammadshamil.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Muhammad Shamil — Full-stack Web Developer | Portfolio',
    template: '%s | Shamil',
  },
  description: 'Freelance MERN stack developer with real client experience, focused on building scalable and maintainable web applications.',
  applicationName: 'Muhammad Shamil Portfolio',
  keywords: [
    'Muhammad Shamil', 'MERN Stack Developer', 'Freelance Developer', 'Full-stack Developer', 'Web Developer', 'Portfolio',
    'React', 'Next.js', 'Node.js', 'MongoDB', 'Express.js',
    'Web Development India', 'Freelance Web Developer', 'Freelance Web Developer in Kerala', 'Freelance Web Developer in Calicut',
    'Web Designer Kerala', 'Software Developer Calicut', 'Frontend Developer', 'Backend Developer', 'React Developer Kerala', 'Next.js Developer India',
    'best developer in malappuram', 'full stack developer in malappuram', 'freelance developer in malappuram',
    'frontend dev in malappuram', 'backend dev in malappuram', 'best freelance developer in malappuram',
    'frontend developer in malappuram', 'backend developer in malappuram'
  ],
  authors: [{ name: 'Muhammad Shamil' }],
  creator: 'Muhammad Shamil',
  publisher: 'Muhammad Shamil',
  robots: 'index, follow',
  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Muhammad Shamil — Full-stack Web Developer',
    description: 'Freelance MERN stack developer with real client experience, focused on building scalable and maintainable web applications.',
    siteName: 'Muhammad Shamil — Portfolio',
    locale: 'en_US',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Shamil — Full-stack Web Developer',
    description: 'Freelance MERN stack developer with real client experience, focused on building scalable and maintainable web applications.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Muhammad Shamil',
      url: siteUrl,
      jobTitle: 'Full-stack Web Developer',
      description: 'Freelance MERN stack developer with real client experience, focused on building scalable and maintainable web applications.',
      knowsAbout: ['React', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'TypeScript', 'MERN Stack', 'Full-stack Development'],
      sameAs: [
        'https://github.com/Shaamil777',
        'https://www.linkedin.com/in/muhammad-shamil-4b42a8329/',
        'https://www.instagram.com/_sh4mill/',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Muhammad Shamil Portfolio',
      alternateName: ['Muhammad Shamil', 'Shamil Portfolio'],
      description: 'Personal portfolio of Muhammad Shamil, a freelance MERN stack developer.',
      publisher: { '@id': `${siteUrl}/#person` },
      inLanguage: 'en-US',
    },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-inter antialiased`}>
              <ClarityProvider />
        <PageTransitionProvider>
          <LoadingOverlay>
            <DesktopNavigation />

            <div>
              {children}
            </div>
          </LoadingOverlay>
        </PageTransitionProvider>
      </body>
    </html>
  );
}