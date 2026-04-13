import { SanityLive } from '@/sanity/live'
import { revalidateSyncTags } from '@/sanity/revalidateSyncTags'
import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { Noto_Serif, Space_Grotesk, Inter } from 'next/font/google'
import Script from 'next/script'

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
  metadataBase: new URL('https://goodmorningia.com'),
  title: {
    template: '%s | Good Morning IA',
    default: 'Good Morning IA - Agents IA sur-mesure pour PME et professions libérales',
  },
  description:
    "Good Morning IA automatise les tâches répétitives des PME et professions libérales avec des agents IA sur-mesure. Déployés en 15 jours, sans formation, sans changer vos outils.",
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Good Morning IA',
    title: 'Good Morning IA - Agents IA sur-mesure pour PME et professions libérales',
    description:
      "Good Morning IA automatise les tâches répétitives des PME et professions libérales avec des agents IA sur-mesure. Déployés en 15 jours, sans formation, sans changer vos outils.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Good Morning IA - Agents IA pour PME',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Good Morning IA - Agents IA sur-mesure pour PME',
    description:
      "Automatisez vos tâches répétitives avec des agents IA sur-mesure. Déployés en 15 jours, sans formation.",
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: '/',
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Good Morning IA',
              url: 'https://goodmorningia.com',
              logo: 'https://goodmorningia.com/gmai_logo_color.png',
              email: 'hello@goodmorningia.com',
              description:
                "Good Morning IA automatise les tâches répétitives des PME et professions libérales avec des agents IA sur-mesure.",
              areaServed: 'FR',
              address: [
                {
                  '@type': 'PostalAddress',
                  addressLocality: 'Paris',
                  addressCountry: 'FR',
                },
                {
                  '@type': 'PostalAddress',
                  addressLocality: 'Bordeaux',
                  addressCountry: 'FR',
                },
              ],
            }),
          }}
        />
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5NF3T7GB');`}
        </Script>
      </head>
      <body className="bg-background text-on-background font-body antialiased min-h-screen flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5NF3T7GB"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <SanityLive revalidateSyncTags={revalidateSyncTags} />
      </body>
    </html>
  )
}
