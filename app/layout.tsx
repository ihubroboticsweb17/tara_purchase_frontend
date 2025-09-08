import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins, Zen_Dots,Saira } from "next/font/google"
import "./globals.css"
import GlassCursor from "@/components/GlassCursor"
import { CartProvider } from "./contexts/CartContext"

const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })
const zendots = Zen_Dots({ subsets: ["latin"], weight: "400" })
const saira = Saira({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "Tara-Gen1",
  description: "With 20+ ",
  keywords: "",
  authors: [{ name: "Tara-Gen1" }],
  openGraph: {
    title: "Tara-Gen1",
    description: "",
    type: "website",
    locale: "en_US",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.className} ${zendots.className}  `}>
        <GlassCursor />
       <CartProvider>
        {children}
       </CartProvider>
        
      </body>
    </html>
  )
}
