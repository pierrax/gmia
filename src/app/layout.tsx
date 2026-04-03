import { SanityLive } from '@/sanity/live'
import { revalidateSyncTags } from '@/sanity/revalidateSyncTags'
import '@/styles/tailwind.css'
import type { Metadata } from 'next'

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
    <html lang="fr">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
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
