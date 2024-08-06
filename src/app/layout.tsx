import '@/styles/global.css'
import type { Metadata } from 'next'

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'NextJS Starter',
  description: 'A simple starter to get up and developing quickly with NextJS',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es-MX">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
