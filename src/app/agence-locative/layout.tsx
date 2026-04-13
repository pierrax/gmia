import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Automatisation Gestion Locative pour Agences Immobilières',
  description:
    "Automatisez vos relances d'impayés, quittances et communications propriétaires. Agents IA déployés en 30 jours, sans formation, sans changer vos outils. Premier résultat visible en 30 jours.",
  openGraph: {
    title: 'Automatisation Gestion Locative pour Agences | Good Morning IA',
    description:
      "Automatisez vos relances d'impayés, quittances et communications propriétaires. Premier résultat visible en 30 jours.",
    url: '/agence-locative',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Good Morning IA - Automatisation Gestion Locative',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automatisation Gestion Locative pour Agences | Good Morning IA',
    description:
      "Automatisez vos relances d'impayés, quittances et communications propriétaires. Premier résultat visible en 30 jours.",
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: '/agence-locative',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Automatisation Gestion Locative',
    provider: {
      '@type': 'Organization',
      name: 'Good Morning IA',
      url: 'https://goodmorningia.com',
    },
    description:
      "Automatisation des relances d'impayés, quittances, communications propriétaires et suivi des états des lieux pour agences de gestion locative.",
    areaServed: 'FR',
    serviceType: 'Automatisation IA',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Ça va perturber mes équipes ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non, et c'est le point central de la méthode. Vos gestionnaires ne voient rien changer dans leur façon de travailler. Les tâches admin disparaissent juste de leur planning.",
        },
      },
      {
        '@type': 'Question',
        name: 'Ça fonctionne avec notre logiciel de gestion ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui. Je travaille avec ICS, Crypto, Galaxie et la plupart des logiciels du marché français. La connexion se fait en coulisses, vous n'avez rien à configurer.",
        },
      },
      {
        '@type': 'Question',
        name: "On est une petite structure, c'est adapté à notre taille ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La méthode est pensée pour des portefeuilles de 80 à 500 lots. En dessous de 80 lots, le ROI est moins évident.',
        },
      },
      {
        '@type': 'Question',
        name: 'Combien ça coûte ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "L'audit terrain (Jour 1, sur site) est à 990€. L'abonnement mensuel tourne entre 490€ et 990€ selon la taille du portefeuille et le nombre d'automatisations actives.",
        },
      },
      {
        '@type': 'Question',
        name: 'Et si les résultats ne sont pas au rendez-vous ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le déploiement dure 30 jours. À l'issue du premier mois, on mesure ensemble les heures libérées. Si le résultat est inférieur à ce qu'on avait estimé, on ajuste ou on s'arrête là, sans frais supplémentaires.",
        },
      },
      {
        '@type': 'Question',
        name: 'Nos données locataires sont-elles en sécurité ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Toutes les données restent dans vos outils existants. Le déploiement est conforme au RGPD.",
        },
      },
    ],
  },
]

export default function AgenceLocativeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {children}
    </>
  )
}
