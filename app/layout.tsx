import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Product Suggestion Wall',
  description: 'Submit and vote for product ideas',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black">{children}</body>
    </html>
  )
}
