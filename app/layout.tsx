import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://manxautoglazing.com'),
  title: {
    default: "Manx Autoglazing | Professional Windscreen Repair & Replacement Isle of Man",
    template: "%s | Manx Autoglazing"
  },
  description: "Expert windscreen repair and replacement services on the Isle of Man. Insurance-friendly, mobile service available. 10+ years experience. Call +44 7624 304585 for a free quote.",
  keywords: [
    "windscreen repair Isle of Man",
    "windscreen replacement Isle of Man",
    "autoglass Isle of Man",
    "car glass repair IOM",
    "mobile windscreen repair",
    "insurance windscreen claims",
    "chip repair Isle of Man",
    "Manx Autoglazing",
    "vehicle glass repair",
    "auto glass replacement"
  ],
  authors: [{ name: "Manx Autoglazing" }],
  creator: "Manx Autoglazing",
  publisher: "Manx Autoglazing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://manxautoglazing.com",
    siteName: "Manx Autoglazing",
    title: "Manx Autoglazing | Professional Windscreen Repair & Replacement Isle of Man",
    description: "Expert windscreen repair and replacement services on the Isle of Man. Insurance-friendly, mobile service available. 10+ years experience.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Manx Autoglazing Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manx Autoglazing | Professional Windscreen Repair & Replacement Isle of Man",
    description: "Expert windscreen repair and replacement services on the Isle of Man. Insurance-friendly, mobile service available.",
    images: ["/logo.png"],
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'Manx Autoglazing',
  image: 'https://manxautoglazing.com/logo.png',
  '@id': 'https://manxautoglazing.com',
  url: 'https://manxautoglazing.com',
  telephone: '+447624304585',
  email: 'info@manxautoglazing.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Unit 22, Isle of Man Business Park, The Cooil',
    addressLocality: 'Braddan',
    addressRegion: 'Isle of Man',
    addressCountry: 'IM',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 54.152806,
    longitude: -4.532167,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '16:00',
    },
  ],
  priceRange: '££',
  areaServed: {
    '@type': 'Place',
    name: 'Isle of Man',
  },
  sameAs: [
    'https://www.facebook.com/ManxAutoglazing',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '500',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="canonical" href="https://manxautoglazing.com" />
        <meta name="geo.region" content="IM" />
        <meta name="geo.placename" content="Braddan, Isle of Man" />
        <meta name="geo.position" content="54.152806;-4.532167" />
        <meta name="ICBM" content="54.152806, -4.532167" />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
