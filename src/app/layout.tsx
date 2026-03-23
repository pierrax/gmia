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
