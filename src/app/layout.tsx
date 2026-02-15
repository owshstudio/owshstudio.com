import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EasterEgg } from "@/components/EasterEgg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "OWSH Studio | Websites for Local Businesses",
    template: "%s | OWSH Studio",
  },
  description:
    "We build beautiful, fast websites for local businesses. Free build, $185/month. No contracts, cancel anytime. Based in Buffalo, NY.",
  keywords: [
    "web design",
    "Buffalo NY",
    "local business websites",
    "affordable web design",
    "business websites",
    "website design Buffalo",
    "web development",
    "OWSH Studio",
  ],
  authors: [{ name: "Noah Owsiany", url: "https://owshstudio.com" }],
  creator: "OWSH Studio",
  publisher: "OWSH Studio",
  metadataBase: new URL("https://owshstudio.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OWSH Studio | Websites for Local Businesses",
    description:
      "We build beautiful, fast websites for local businesses. Free build, $185/month. No contracts, cancel anytime.",
    url: "https://owshstudio.com",
    siteName: "OWSH Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OWSH Studio - Websites for Local Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OWSH Studio | Websites for Local Businesses",
    description:
      "We build beautiful, fast websites for local businesses. Free build, $185/month. No contracts, cancel anytime.",
    images: ["/og-image.png"],
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-owsh-dark text-white min-h-screen`}
      >
        <EasterEgg />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
