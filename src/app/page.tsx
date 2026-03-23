import { V2Navbar } from '@/components/v2-navbar'
import { V2Hero } from '@/components/v2-hero'
import { ROICalculator } from '@/components/roi-calculator'
import {
  Map as MapIcon,
  Construction,
  FlaskConical,
  Rocket,
  Receipt,
  Headset,
  UserSearch,
  BarChart3,
  Calendar,
  UserPlus,
  CheckCircle2,
  PenLine,
  ChevronDown,
  ArrowRight,
} from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    "L'IA au travail. Vous au pilotage.",
}

function HowItWorks() {
  const steps = [
    { step: '01', icon: <MapIcon />, title: 'Cartographie', desc: "Audit de vos process actuels et identification des goulots d'étranglement." },
    { step: '02', icon: <Construction />, title: 'Construction', desc: 'Développement itératif de vos workflows avec n8n ou Make.' },
    { step: '03', icon: <FlaskConical />, title: 'Test', desc: 'Mise en situation réelle et ajustement des prompts IA.' },
    { step: '04', icon: <Rocket />, title: 'Livraison', desc: "Mise en production, formation de l'équipe et monitoring." },
  ]

  return (
    <section className="py-16 bg-surface" id="comment-ca-marche">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-20 max-w-3xl leading-tight">
          De la description du problème à l&apos;agent opérationnel —{' '}
          <span className="text-primary italic">en 2 semaines.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((item, i) => (
            <div
              key={i}
              className="group border-l-2 border-outline-variant/30 pl-8 py-4 hover:border-primary transition-colors"
            >
              <span className="font-label text-sm text-primary font-bold mb-4 block">
                {item.step}
              </span>
              <div className="text-primary mb-3">{item.icon}</div>
              <h3 className="font-headline text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  const services = [
    { icon: <Receipt />, title: 'Facturation', desc: 'Génération automatique, relance et rapprochement bancaire.', gain: '+12h' },
    { icon: <Headset />, title: 'Support client', desc: 'Réponse instantanée aux questions fréquentes via chat intelligent.', gain: '+25h' },
    { icon: <UserSearch />, title: 'Qualification leads', desc: 'Enrichissement data et scoring automatique des prospects.', gain: '+18h' },
    { icon: <BarChart3 />, title: 'Reporting', desc: 'Agrégation de données multi-sources et synthèses hebdomadaires.', gain: '+8h' },
    { icon: <Calendar />, title: 'Prise RDV', desc: 'Coordination automatique des agendas et rappels SMS.', gain: '+10h' },
    { icon: <UserPlus />, title: 'Onboarding clients', desc: "Envoi de contrats, collecte de docs et création d'espaces dédiés.", gain: '+20h' },
    { icon: <PenLine />, title: 'Création de contenu', desc: 'Rédaction automatisée pour réseaux sociaux, newsletters et articles de blog.', gain: '+15h' },
  ]

  return (
    <section className="py-16 bg-surface-container-low" id="ce-quon-automatise">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 className="font-headline text-4xl md:text-5xl font-bold max-w-2xl leading-tight">
            Les process qui mangent{' '}
            <span className="text-primary underline decoration-primary/20 underline-offset-8">
              votre temps.
            </span>
          </h2>
          <p className="text-on-surface-variant font-medium mb-2 italic">
            Gains moyens constatés par mois
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <div className="text-primary">{service.icon}</div>
              </div>
              <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                <CheckCircle2 className="text-green-500 w-4 h-4" />
                {service.title}
              </h4>
              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                {service.desc}
              </p>
              <div className="pt-6 border-t border-surface-container flex justify-between items-center">
                <span className="text-xs font-label uppercase text-on-surface-variant">
                  Gain estimé
                </span>
                <span className="text-primary font-bold text-lg">{service.gain}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-[#0F172A] p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 border-b-4 border-tertiary">
          <div>
            <h3 className="text-white text-2xl font-bold mb-2 font-headline">
              Un process métier spécifique ?
            </h3>
            <p className="text-neutral-400">
              Nous construisons des agents sur-mesure pour vos besoins uniques.
            </p>
          </div>
          <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ02NUaO7doQ4PH96KwW2ogos8yAdKJ0Pvv1rooYcnQ8_OJmK_xRfOquqDGSQGhJIaTjqep24m_N" target="_blank" rel="noopener noreferrer" className="bg-accent-yellow text-on-background px-8 py-4 rounded-full font-bold hover:bg-white transition-all shadow-lg accent-glow">
            Parlons de votre projet
          </a>
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const plans = [
    { step: '01', title: 'Cadrage', desc: 'On définit ensemble le périmètre exact, les outils et les indicateurs de succès (KPI).', foot: 'Offert' },
    { step: '02', title: 'Devis fixe', desc: "Un montant forfaitaire validé avant le début du chantier. Aucune rallonge possible.", foot: 'Engagement contractuel' },
    { step: '03', title: 'Livraison', desc: "Transfert de propriété, formation de vos équipes et documentation technique complète.", foot: 'Sous 15 jours' },
  ]

  return (
    <section className="py-16 bg-[#0F172A] text-white" id="tarifs">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-24">
          <h2 className="font-headline text-5xl md:text-6xl font-black mb-6 italic">
            Prix fixe. Zéro surprise.
          </h2>
          <p className="text-neutral-400 text-xl max-w-2xl mx-auto">
            Pas de facturation à l&apos;heure qui s&apos;éternise. Un engagement sur le résultat. On est aligné avec vous.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((item, i) => (
            <div
              key={i}
              className="group relative p-10 border border-neutral-800 bg-neutral-900/50 rounded-2xl transition-all duration-300 ease-out hover:border-primary hover:bg-neutral-900 hover:shadow-2xl hover:scale-105 hover:z-10"
            >
              <span className="font-black text-6xl absolute top-4 right-8 text-primary/20 group-hover:text-green-500 transition-colors duration-300">
                {item.step}
              </span>
              <h3 className="text-2xl font-bold mb-6 font-headline">{item.title}</h3>
              <p className="text-neutral-400 leading-relaxed mb-8">{item.desc}</p>
              <p className="text-sm font-label uppercase text-neutral-500 group-hover:text-green-500 group-hover:font-bold transition-colors duration-300">
                {item.foot}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Comparison() {
  const rows = [
    ['Modèle de prix', 'Salaire fixe', 'TJM variable', 'Régie ou forfait flou', 'Devis fixe · Prix verrouillé'],
    ['Délai de livraison', '2–6 mois', '3–8 semaines', '2–6 mois', '1–3 semaines'],
    ['Spécialisation IA & automatisation', 'Rarement', 'Généraliste', 'Partielle', '100% dédié'],
    ['Vous possédez le livrable', 'Oui', 'Pas toujours', 'Dépendance fréquente', 'Toujours · Sans condition'],
    ['Frais récurrents obligatoires', 'Salaire + charges', 'Variables', 'Souvent', 'Aucun (maintenance optionnelle)'],
    ['Interlocuteur dédié', 'Oui', 'Oui', 'Junior souvent', 'Fondateur directement'],
    ['Documentation & passation', 'Variable', 'Rare', 'Variable', 'Systématique · Vidéo + doc écrit'],
    ['Sans charge fixe si pas de projet', 'Non', 'Oui', 'Oui', 'Oui'],
  ]

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 max-w-3xl leading-tight">
          Pourquoi{' '}
          <span className="text-primary underline decoration-primary/20 underline-offset-8">
            Good Morning IA
          </span>
          {' '}?
        </h2>
        <p className="text-on-surface-variant text-lg mb-16 max-w-3xl">
          Recruter, externaliser, utiliser un outil SaaS — chaque option a ses compromis. Voilà pourquoi des PME et professions libérales choisissent une autre voie.
        </p>
        <div className="overflow-x-auto border border-outline-variant/30 rounded-2xl">
          <table className="w-full text-left min-w-[800px]">
            <thead className="bg-surface-container-high border-b border-outline-variant/30">
              <tr>
                <th className="p-5 font-bold uppercase text-xs font-label">Critère</th>
                <th className="p-5 font-bold uppercase text-xs font-label">Dév. interne</th>
                <th className="p-5 font-bold uppercase text-xs font-label">Freelance généraliste</th>
                <th className="p-5 font-bold uppercase text-xs font-label">Agence digitale</th>
                <th className="p-5 font-bold uppercase text-xs font-label text-green-600">
                  Good Morning IA
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {rows.map(([crit, dev, free, agence, gmia], i) => (
                <tr key={i}>
                  <td className="p-5 font-semibold">{crit}</td>
                  <td className="p-5 text-on-surface-variant">{dev}</td>
                  <td className="p-5 text-on-surface-variant">{free}</td>
                  <td className="p-5 text-on-surface-variant">{agence}</td>
                  <td className="p-5 font-bold text-green-600">{gmia}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-10 text-center">
          <a
            href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ02NUaO7doQ4PH96KwW2ogos8yAdKJ0Pvv1rooYcnQ8_OJmK_xRfOquqDGSQGhJIaTjqep24m_N"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent-yellow text-on-background px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all shadow-lg accent-glow"
          >
            Obtenir mon audit gratuit
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const testimonials = [
    { name: 'Franck Le Meur', role: 'CEO, TechToMed', text: "Nous avons automatisé notre veille scientifique et la production de contenus. Nous avons clairement gagné en efficacité sur notre communication.", img: '/testimonials/francklemeur.jpg' },
    { name: 'Joss Roulet', role: 'Media Strategy for Global Brands', text: "Je passais beaucoup de temps à simplement transmettre des infos entre médias et annonceurs. On a automatisé ensemble l'analyse des briefs clients et je peux me concentrer sur la relation clients.", img: '/testimonials/jossroulet.jpeg' },
    { name: 'Grégoire de Pins', role: 'Consultant indépendant', text: "Je dois régulièrement monter des dossiers pour mes clients. On a automatisé la réalisation et le formatage de documents. J'ai gagné près de 10 heures par mois en éliminant ces tâches répétitives.", img: '/testimonials/gregroiredepins.jpeg' },
    { name: 'Cédric Le Moign', role: 'Gérant de SCI', text: "Avec plusieurs dizaines de locataires, le support clients prenait une part énorme de mon temps. On a automatisé les demandes de niveau 1, grâce à un agent IA enrichi avec les conversations passées. Les réponses sont immédiates et encore plus pertinentes.", img: '/testimonials/cedric.jpeg' },
  ]

  return (
    <section className="py-16 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-16 max-w-3xl leading-tight">
          Ils ont automatisé. Voici ce que ça a{' '}
          <span className="text-primary underline decoration-primary/20 underline-offset-8">
            changé.
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl editorial-shadow border border-transparent hover:border-tertiary transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src={t.img}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-on-surface-variant">{t.role}</p>
                </div>
              </div>
              <p className="text-on-surface leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  const blocs = [
    { emoji: '🏛️', title: 'Expertise technique, livraison rapide', desc: "Des années d'expérience en automatisation et développement IA. On construit des systèmes qui tiennent, en semaines et non en mois." },
    { emoji: '🔒', title: 'Vous possédez tout', desc: "Ce qu'on livre vous appartient. Pas de vendor lock-in, pas d'abonnement obligatoire pour que ça continue de fonctionner." },
    { emoji: '📋', title: 'Prix transparent et fixe', desc: "Chaque projet démarre avec un périmètre fixe et un prix verrouillé. Vous approuvez avant qu'on commence. La facture correspond au devis." },
    { emoji: '⚡', title: 'Livraison en 1 à 3 semaines', desc: "De la découverte à la mise en production en 1 à 3 semaines. On connaît ces sujets. On n'a pas besoin de mois pour trouver l'approche." },
  ]

  return (
    <section className="py-16 bg-surface" id="a-propos">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="font-headline text-4xl md:text-5xl font-bold max-w-3xl leading-tight mb-20">
          Expertise entreprise, réactivité d&apos;un{' '}
          <span className="text-primary underline decoration-primary/20 underline-offset-8">
            partenaire dédié.
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="relative mb-10">
              <img
                className="rounded-3xl shadow-2xl border-2 border-primary/20 w-full object-cover aspect-4/3"
                src="/maxime.jpg"
                alt="Maxime - Good Morning IA"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-yellow rounded-full -z-10 mix-blend-multiply opacity-50"></div>
            </div>
            <div className="bg-surface-container p-8 rounded-2xl border border-outline-variant/10">
              <p className="text-lg text-on-surface leading-relaxed mb-6">
                Je suis <strong>Maxime Pierrot</strong> — développeur full-stack et spécialiste en automatisation IA.
                Pas d&apos;intermédiaire, pas de junior sur votre dossier. Vous travaillez directement avec moi.
              </p>
              <div className="flex flex-wrap gap-6 text-sm font-label text-on-surface-variant">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  70+ workflows déployés
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  12 ans d&apos;expérience
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Expert automatisation
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {blocs.map((item, i) => (
              <div key={i} className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 hover:shadow-lg transition-all">
                <div className="flex items-start gap-5">
                  <span className="text-3xl shrink-0">{item.emoji}</span>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-on-surface">{item.title}</h4>
                    <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const faqs = [
    { q: 'Combien coûte une automatisation pour une PME ?', a: "La plupart des missions se situent entre 3 000 et 10 000 €. On vous remet un devis fixe à l'issue de l'audit gratuit. Pas de TJM variable, pas de surprise." },
    { q: "Combien de temps avant d'être opérationnel ?", a: "1 à 3 semaines selon la complexité. Le calendrier précis est défini dans le devis, avant tout démarrage." },
    { q: "Est-ce que je possède l'automatisation après livraison ?", a: "Oui, entièrement. Contrairement aux outils SaaS qui facturent chaque mois, on vous livre et vous possédez. Aucuns frais récurrents obligatoires." },
    { q: 'Est-ce que je dois être technique ?', a: "Non. Vous décrivez votre activité en français. On fait la traduction en automatisation." },
    { q: "En quoi c'est différent de le faire moi-même sur Zapier ou Make ?", a: "Zapier et Make sont des outils. Nous sommes les constructeurs. Les vrais process métier impliquent une logique complexe, de la gestion d'erreurs et des décisions IA que ces outils seuls ne gèrent pas." },
    { q: "Que se passe-t-il si un workflow plante ?", a: "30 jours de support sont inclus dans chaque mission. Au-delà, la maintenance mensuelle (optionnelle) couvre les corrections." },
    { q: "Que se passe-t-il pendant l'audit gratuit ?", a: "30 minutes. On passe en revue votre workflow, on identifie ce qui peut être automatisé, et on vous donne une estimation chiffrée pendant l'appel. Pas de proposition vague envoyée après. Pas de pression commerciale." },
    { q: "Mon process ne correspond à aucune de vos offres listées ?", a: "Prenez un appel et décrivez-nous votre cas. Si c'est répétitif et basé sur des règles, on peut très probablement l'automatiser." },
  ]

  return (
    <section className="py-16 bg-surface-container-high">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-16 max-w-3xl leading-tight">
          Les questions qu&apos;on nous pose{' '}
          <span className="text-primary underline decoration-primary/20 underline-offset-8">
            souvent.
          </span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-white rounded-xl overflow-hidden border border-outline-variant/30 transition-all hover:border-primary/50"
            >
              <summary className="p-6 cursor-pointer font-bold flex justify-between items-center list-none">
                {faq.q}
                <ChevronDown className="group-open:rotate-180 transition-transform text-primary" />
              </summary>
              <div className="p-6 pt-0 text-on-surface-variant border-t border-surface-container">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="font-headline text-5xl font-black mb-8 leading-tight">
            Prêt à reprendre le contrôle de{' '}
            <span className="text-primary italic">votre temps ?</span>
          </h2>
          <p className="text-xl text-on-surface-variant mb-12">
            L&apos;audit est gratuit, sans engagement, et vous repartirez avec une cartographie de vos
            opportunités d&apos;automatisation.
          </p>
          <div className="space-y-6">
            <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ02NUaO7doQ4PH96KwW2ogos8yAdKJ0Pvv1rooYcnQ8_OJmK_xRfOquqDGSQGhJIaTjqep24m_N" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-accent-yellow text-on-background px-12 py-6 rounded-full font-black text-xl hover:bg-white transition-all flex items-center justify-center gap-4 editorial-shadow accent-glow">
              Réserver un appel gratuit
              <ArrowRight />
            </a>
            {/* <p className="text-on-surface-variant text-sm italic">
              Plus de 40 entreprises automatisées en 2023.
            </p> */}
          </div>
        </div>
        <div className="bg-surface-container p-10 rounded-3xl border-2 border-primary/5">
          <h3 className="font-headline text-2xl font-bold mb-8">
            Option 2 : Envoyer un message
          </h3>
          <form action="https://formsubmit.co/maxime@goodmorningia.com" method="POST" className="space-y-6">
            <input type="hidden" name="_subject" value="Nouveau message depuis Good Morning IA" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://goodmorningia.com" />
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="font-label text-xs uppercase font-bold text-on-surface-variant">
                  Prénom
                </label>
                <input
                  name="prenom"
                  required
                  className="w-full bg-white border border-outline-variant/30 rounded-lg p-4 focus:ring-2 focus:ring-primary transition-all outline-none"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs uppercase font-bold text-on-surface-variant">
                  Email
                </label>
                <input
                  name="email"
                  required
                  className="w-full bg-white border border-outline-variant/30 rounded-lg p-4 focus:ring-2 focus:ring-primary transition-all outline-none"
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-label text-xs uppercase font-bold text-on-surface-variant">
                Votre besoin en 2 mots
              </label>
              <textarea
                name="message"
                required
                className="w-full bg-white border border-outline-variant/30 rounded-lg p-4 focus:ring-2 focus:ring-primary transition-all outline-none"
                rows={4}
              ></textarea>
            </div>
            <button
              className="w-full bg-[#0F172A] text-white py-5 rounded-lg font-bold hover:bg-primary transition-all"
              type="submit"
            >
              Envoyer ma demande
            </button>
          </form>
        </div>
      </div>
    </section>
  )
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
            { label: 'Services', href: '#ce-quon-automatise' },
            { label: 'Entreprise', href: '#a-propos' },
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

export default function Home() {
  return (
    <div className="bg-background text-on-background font-body antialiased min-h-screen flex flex-col">
      <V2Navbar />
      <main className="flex-grow">
        <V2Hero />
        <HowItWorks />
        <Services />
        <ROICalculator />
        <Pricing />
        <Comparison />
        <Testimonials />
        <About />
        <FAQ />
        <CTASection />
      </main>
      <V2Footer />
    </div>
  )
}
