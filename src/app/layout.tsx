import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
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

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    "We build beautiful, fast websites for local businesses. Free build, starting at $75/month. No contracts, cancel anytime. Based in Buffalo, NY.",
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
      "We build beautiful, fast websites for local businesses. Free build, starting at $75/month. No contracts, cancel anytime.",
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
      "We build beautiful, fast websites for local businesses. Free build, starting at $75/month. No contracts, cancel anytime.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "OWSH Studio",
  "description": "Web design studio building beautiful, fast websites for local businesses. Free build, starting at $75/month. No contracts, cancel anytime.",
  "url": "https://owshstudio.com",
  "logo": "https://owshstudio.com/logo.png",
  "image": "https://owshstudio.com/og-image.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Buffalo",
    "addressRegion": "NY",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 42.8864,
    "longitude": -78.8784
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 42.8864,
      "longitude": -78.8784
    },
    "geoRadius": "100 mi"
  },
  "priceRange": "$75-$400/month",
  "openingHours": "Mo-Fr 09:00-18:00",
  "email": "hello@owshunlimited.com",
  "founder": {
    "@type": "Person",
    "name": "Noah Owsiany"
  },
  "sameAs": [
    "https://instagram.com/owshstudio",
    "https://facebook.com/owshstudio",
    "https://linkedin.com/company/owshstudio"
  ],
  "serviceType": ["Web Design", "Web Development", "SEO", "Local Business Websites"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Design Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Landing Page",
          "description": "1 page website with contact form"
        },
        "price": "75",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "75",
          "priceCurrency": "USD",
          "billingDuration": "P1M"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Standard Website",
          "description": "5-7 page website with full SEO"
        },
        "price": "185",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "185",
          "priceCurrency": "USD",
          "billingDuration": "P1M"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Full CMS Website",
          "description": "10+ page website with content management"
        },
        "price": "400",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "400",
          "priceCurrency": "USD",
          "billingDuration": "P1M"
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q05B4W3D82" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-Q05B4W3D82');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased bg-owsh-dark text-white min-h-screen noise`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-owsh-dark focus:text-white focus:rounded-lg focus:border focus:border-white/20"
        >
          Skip to main content
        </a>
        <EasterEgg />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
