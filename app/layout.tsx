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

export const metadata: Metadata = {
  title: "Shamil — Portfolio",
  description: "Personal portfolio of Muhammad Shamil",
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