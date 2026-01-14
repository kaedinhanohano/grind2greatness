import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://grind2greatness.org"),
  title: {
    default: "Grind2Greatness | Elite Soccer Coaching in Oahu, Hawaii",
    template: "%s | Grind2Greatness",
  },
  description:
    "Transform your soccer skills with Adrian Cardenas. Elite 1-on-1 private training in Oahu focusing on ball control, dribbling, and technique. All ages welcome. Book your free consultation today.",
  keywords: [
    "soccer coaching Oahu",
    "private soccer training Hawaii",
    "soccer lessons Honolulu",
    "youth soccer coach",
    "1 on 1 soccer training",
    "ball control training",
    "dribbling coach",
    "soccer fundamentals",
    "Adrian Cardenas soccer",
    "Grind2Greatness",
  ],
  authors: [{ name: "Adrian Cardenas" }],
  creator: "Adrian Cardenas",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://grind2greatness.org",
    siteName: "Grind2Greatness",
    title: "Grind2Greatness | Elite Soccer Coaching in Oahu",
    description:
      "Master ball control, dribbling, and technique with personalized 1-on-1 soccer coaching. All ages welcome.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Grind2Greatness Soccer Coaching",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grind2Greatness | Elite Soccer Coaching in Oahu",
    description:
      "Transform your soccer skills with Adrian Cardenas. Private 1-on-1 training for all ages.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-dark-950 text-dark-50`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
