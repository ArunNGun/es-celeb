import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Charm, Playfair_Display } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat"
})

const charm = Charm({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-charm",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "ES Celebrations - Luxury Event Planning & Wedding Coordination",
    template: "%s | ES Celebrations"
  },
  description: "ES Celebrations specializes in creating unforgettable weddings and social celebrations. With over 100+ successful events, we bring your dreams to life with creative concepts, flawless execution, and personalized touch.",
  keywords: ["event planning", "wedding coordination", "luxury events", "destination weddings", "social celebrations", "event management", "wedding planner", "event designer"],
  authors: [{ name: "ES Celebrations" }],
  creator: "ES Celebrations",
  publisher: "ES Celebrations",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://escelebrations.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "ES Celebrations - Luxury Event Planning & Wedding Coordination",
    description: "Creating unforgettable weddings and social celebrations with creative concepts, flawless execution, and personalized touch.",
    url: 'https://escelebrations.com',
    siteName: 'ES Celebrations',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ES Celebrations - Luxury Event Planning',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "ES Celebrations - Luxury Event Planning",
    description: "Creating unforgettable weddings and social celebrations",
    images: ['/og-image.jpg'],
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
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${charm.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  )
}
