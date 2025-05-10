import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import HydratedThemeProvider from "./components/hydrated-theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Apollo 24/7 - Healthcare Services",
  description: "Consult with doctors online, buy medicines, book lab tests and more",
  keywords: "healthcare, doctors, online consultation, medicine, lab tests, Apollo",
  authors: [{ name: "Apollo 24/7" }],
  creator: "Apollo 24/7",
  publisher: "Apollo 24/7",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <HydratedThemeProvider>{children}</HydratedThemeProvider>
      </body>
    </html>
  )
}
