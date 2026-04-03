import { SanityLive } from '@/sanity/live'
import { revalidateSyncTags } from '@/sanity/revalidateSyncTags'
import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { Noto_Serif, Space_Grotesk, Inter } from 'next/font/google'

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-noto-serif',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Good Morning IA',
    default: 'Good Morning IA - Agents IA pour PME et professions libérales',
  },
  description:
    "L'IA au travail. Vous au pilotage.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${notoSerif.variable} ${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Good Morning IA Blog"
          href="/blog/feed.xml"
        />
      </head>
      <body className="bg-background text-on-background font-body antialiased min-h-screen flex flex-col">
        {children}
        <SanityLive revalidateSyncTags={revalidateSyncTags} />
      </body>
    </html>
  )
}
