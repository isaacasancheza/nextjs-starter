import '@/styles/global.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NextJS Starter',
  description: 'A simple starter to get up and developing quickly with NextJS',
}

interface Layout {
  children: React.ReactNode
}

export default function Layout({ children }: Layout) {
  return (
    <html lang="es-MX" className="h-full">
      <body className="h-full">
        <main>{children}</main>
      </body>
    </html>
  )
}
