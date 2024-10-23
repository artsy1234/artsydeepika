// src/app/layout.js
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ArtsyDeepika | Handcrafted Scented Candles',
  description: 'Discover uniquely crafted scented candles inspired by tradition',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        
        <main>{children}</main>
        
        <Footer />
      </body>
    </html>
  )
}