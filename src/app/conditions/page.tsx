import { V2Navbar } from '@/components/v2-navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Conditions d'utilisation",
  description: "Conditions générales d'utilisation de Good Morning IA.",
}

function V2Footer() {
  return (
    <footer className="bg-[#1c1c18] w-full py-16 px-8 mt-auto border-t border-stone-800">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto items-start text-center md:text-left">
        <div>
          <h4 className="text-xl font-bold text-white mb-6">Good Morning IA</h4>
          <p className="font-headline text-sm uppercase tracking-widest text-[#ff4d20] opacity-90 hover:opacity-100 transition-all">
            L&apos;IA au travail. Vous au pilotage.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-white font-bold mb-2">Navigation</h5>
          {[
            { label: 'Services', href: '/#ce-quon-automatise' },
            { label: 'Entreprise', href: '/#a-propos' },
            { label: 'Mentions légales', href: '/conditions' },
          ].map((link) => (
            <a
              key={link.label}
              className="text-stone-400 hover:text-white transition-colors font-headline text-sm uppercase tracking-widest"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div>
          <h5 className="text-white font-bold mb-6">Contact</h5>
          <p className="text-stone-400 text-sm tracking-widest uppercase mb-4 font-headline">
            Paris — Bordeaux — Remote
          </p>
          <p className="text-white font-bold hover:text-[#ff4d20] transition-colors cursor-pointer font-headline text-sm uppercase tracking-widest">
            hello@goodmorningia.com
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-800 text-center">
        <p className="font-headline text-sm uppercase tracking-widest text-stone-500">
          © {new Date().getFullYear()} Good Morning IA. L&apos;IA au travail. Vous au pilotage.
        </p>
      </div>
    </footer>
  )
}

export default function Conditions() {
  return (
    <div className="bg-background text-on-background font-body antialiased min-h-screen flex flex-col">
      <V2Navbar />
      <main className="flex-grow">
        <section className="py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-8">
            <h1 className="font-headline text-4xl md:text-5xl font-bold mb-6 max-w-3xl leading-tight">
              Conditions générales{' '}
              <span className="text-primary underline decoration-primary/20 underline-offset-8">
                d&apos;utilisation.
              </span>
            </h1>
            <p className="text-on-surface-variant text-lg mb-16 max-w-3xl">
              En utilisant ce site et les services Good Morning IA, vous acceptez
              les présentes conditions. Si vous n&apos;acceptez pas ces conditions,
              veuillez ne pas utiliser le service.
            </p>

            <div className="space-y-10 max-w-4xl">
              {[
                {
                  title: '1. Accès et disponibilité',
                  text: "Le service est fourni « tel quel ». Nous nous efforçons d'en assurer la disponibilité mais ne garantissons pas l'absence d'interruption ou d'erreur.",
                },
                {
                  title: '2. Données et confidentialité',
                  text: "Vous restez propriétaire de vos données. Nous ne les utilisons que pour fournir le service et améliorer nos fonctionnalités. Pour les aspects détaillés (collecte, conservation, suppression), veuillez consulter notre politique de confidentialité lorsqu'elle sera disponible.",
                },
                {
                  title: '3. Usage autorisé',
                  text: "Vous vous engagez à utiliser le service dans le respect des lois en vigueur et à ne pas compromettre la sécurité ou le bon fonctionnement de la plateforme.",
                },
                {
                  title: '4. Facturation et abonnement',
                  text: "Les modalités d'abonnement (tarifs, renouvellement, résiliation) sont précisées lors de la souscription. Aucune prestation n'est fournie sans accord explicite.",
                },
                {
                  title: '5. Propriété intellectuelle',
                  text: "Les éléments de marque, logos, contenus et logiciels liés à Good Morning IA sont protégés et ne peuvent être réutilisés sans autorisation.",
                },
                {
                  title: '6. Limitation de responsabilité',
                  text: "Dans la mesure permise par la loi, notre responsabilité est limitée aux sommes versées pour le service au cours des 12 derniers mois.",
                },
                {
                  title: '7. Contact',
                  text: "Pour toute question sur ces conditions, contactez-nous par email à l'adresse maxime@goodmorningia.com.",
                },
              ].map((section, i) => (
                <div key={i} className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10">
                  <h2 className="text-xl font-bold text-on-surface mb-3">{section.title}</h2>
                  <p className="text-on-surface-variant leading-relaxed">{section.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <V2Footer />
    </div>
  )
}
