import '@/styles/global.css'

import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'NextJS Starter',
  description: 'A simple starter to get up and developing quickly with NextJS',
}

interface LayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="es-MX" className="h-full">
      <body className="h-full">
        <main>{children}</main>
      </body>
    </html>
  )
}
