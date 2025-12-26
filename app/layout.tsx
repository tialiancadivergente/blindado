import type React from "react"
import type { Metadata } from "next"
import './globals.css'
import {
  Spectral,
  Bebas_Neue,
  Roboto,
  Battambang,
  Inter,
  Mulish,
  Darker_Grotesque,
} from 'next/font/google'
import "./globals.css"
import GoogleTagManager from "./components/GoogleTagManager"
import MicrosoftClarity from "./components/MicrosoftClarity"
import AliancaTrackingScript from "./components/AliancaTrackingScript"
const GTM_ID = "GTM-NC7GGZBX"; // Substitua pelo seu GTM ID

const spectral = Spectral({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-spectral',
  weight: ['400', '500', '600', '700']
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas-neue',
  weight: ['400']
})

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700']
})

const battambang = Battambang({
  // preload: false permite não depender de subsets (evita erro se o subset variar)
  preload: false,
  display: 'swap',
  variable: '--font-battambang',
  weight: ['400'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const mulish = Mulish({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mulish',
})

const darkerGrotesque = Darker_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-darker-grotesque',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: "O Resgate dos Otimistas - Diagnóstico de Dependência Emocional",
  description:
    "Faça seu diagnóstico de dependência emocional gratuito e descubra como aumentar seu nível de permissão.",
  icons: {
    icon: '/images/cropped-Alianca-Divergente-Logotipo-Favicon-32x32.png',
    shortcut: '/images/cropped-Alianca-Divergente-Logotipo-Favicon-32x32.png',
    apple: '/images/cropped-Alianca-Divergente-Logotipo-Favicon-32x32.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/images/cropped-Alianca-Divergente-Logotipo-Favicon-32x32.png" type="image/png" />
        <link rel="shortcut icon" href="/cropped-Alianca-Divergente-Logotipo-Favicon-32x32.png" type="image/png" />
        <link rel="apple-touch-icon" href="/cropped-Alianca-Divergente-Logotipo-Favicon-32x32.png" type="image/png" />
      </head>
      <body
        className={`${spectral.className} ${bebasNeue.variable} ${roboto.variable} ${battambang.variable} ${inter.variable} ${mulish.variable} ${darkerGrotesque.variable}`}
      >
        <GoogleTagManager />
        <MicrosoftClarity />
        <AliancaTrackingScript />
        {children}
      </body>
    </html>
  )
}
