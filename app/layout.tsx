import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UAE Property Guide - Find Your Dream Property in Dubai, Abu Dhabi & UAE",
  description: "Discover the best properties for sale and rent in UAE. Expert property guides, market insights, and listings for Dubai, Abu Dhabi, Sharjah and more. Your trusted UAE real estate partner.",
  keywords: "UAE property, Dubai real estate, Abu Dhabi properties, property for sale UAE, rent property Dubai, UAE property guide, real estate Dubai",
  authors: [{ name: "UAE Property Guide" }],
  creator: "UAE Property Guide",
  publisher: "UAE Property Guide",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://uaepropertyguide.vercel.app',
    title: 'UAE Property Guide - Find Your Dream Property in Dubai, Abu Dhabi & UAE',
    description: 'Discover the best properties for sale and rent in UAE. Expert property guides, market insights, and listings for Dubai, Abu Dhabi, Sharjah and more.',
    siteName: 'UAE Property Guide',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UAE Property Guide - Find Your Dream Property in Dubai, Abu Dhabi & UAE',
    description: 'Discover the best properties for sale and rent in UAE. Expert property guides, market insights, and listings for Dubai, Abu Dhabi, Sharjah and more.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
