import type React from "react"
import type { Metadata, Viewport } from "next"
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HorizonCode | Agence Digitale Premium",
  description:
    "HorizonCode - Sites web modernes, performants et tendance a prix accessibles. Developpement web, audit technique et maintenance pour propulser votre business.",
  keywords:
    "developpement web, agence digitale, site web moderne, audit technique, maintenance, design tendance, prix accessibles",
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
