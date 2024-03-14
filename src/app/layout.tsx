import '@/styles/global.css'
import type { Metadata } from 'next'

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Next Starter',
  description: 'A simple starter to get up and developing quickly with Next',
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
