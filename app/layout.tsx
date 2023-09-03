import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "normal",
  preload: true,
  variable: "--font-Roboto",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Instagram",
  description: "Instagram-Clone with Next13",
  icons: {
    icon: "favico.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
