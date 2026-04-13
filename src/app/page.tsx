import { V2Navbar } from '@/components/v2-navbar'
import { ContactForm } from '@/components/contact-form'
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
    "Agents IA sur-mesure déployés en 15 jours pour les PME et professions libérales. On identifie et automatise les tâches répétitives qui ont un impact direct sur votre revenu.",
  alternates: {
    canonical: '/',
  },
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
          De la description du problème à l&apos;agent opérationnel,{' '}
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

function MethodeOmbre() {
  const steps = [
    {
      letter: 'O',
      phase: 'Jour 1 · Diagnostic terrain',
      name: 'Observer',
      body: "J\u2019arrive dans votre entreprise et je fais ce que personne ne fait jamais : je regarde vraiment comment travaillent vos équipes. Pas depuis un questionnaire. Dans le vif, au quotidien. Je cherche les tâches robot, tout ce qui se répète, ne demande aucun jugement humain, et coûte du temps à des gens trop bien payés pour faire ça.",
      tag: 'Les 5 tâches robot prioritaires · estimation du temps libérable par semaine',
    },
    {
      letter: 'M',
      phase: 'Semaines 1–2 · En coulisses',
      name: 'Modéliser',
      badge: 'Modules prêts à l\u2019emploi',
      body: "Je n\u2019invente pas la roue à chaque mission. J\u2019ai une bibliothèque d\u2019agents IA pré-construits pour les cas d\u2019usage PME les plus fréquents : qualification de leads, comptes-rendus automatiques, fiches produit, réponses SAV, consolidation de données. Je les adapte à votre contexte en quelques jours, pas en quelques mois. Vos équipes ne savent même pas que les agents existent encore. C\u2019est intentionnel.",
      tag: '3 agents IA construits, testés, prêts à basculer',
    },
    {
      letter: 'B',
      phase: 'Semaines 3–4 · Déploiement silencieux',
      name: 'Basculer',
      body: "Les agents prennent les tâches robot une par une. Vos équipes ne changent rien à leur façon de travailler. Elles reçoivent simplement des outputs déjà traités là où il y avait une tâche manuelle avant. Un email de qualification pré-analysé à l\u2019ouverture. Un compte-rendu rédigé automatiquement en sortie de réunion. Une fiche produit générée en trente secondes. L\u2019ombre commence à travailler à leur place.",
      tag: 'Agents actifs en production · zéro friction pour les équipes',
    },
    {
      letter: 'R',
      phase: 'Fin de mission · Bilan & réinvestissement',
      name: 'Récolter',
      body: "On mesure ensemble : combien d\u2019heures par semaine ont disparu du planning humain. On documente, on chiffre, on rend ça visible. Mais surtout, on décide où va ce temps libéré. Pas dans plus de tâches administratives. Dans ce qui renforce votre entreprise : une nouvelle offre, plus de clients, une meilleure qualité de service. Le temps robot devient du temps stratégique.",
      tag: 'Rapport "Heures robot éliminées" · plan de réinvestissement du temps gagné',
    },
    {
      letter: 'E',
      phase: 'Abonnement mensuel · La machine récurrente',
      name: 'Étendre',
      body: "Chaque mois, on identifie les prochaines tâches robot. On déploie de nouveaux agents depuis la bibliothèque. L\u2019ombre grandit, et le temps libéré cumulé aussi. Dans 12 mois, ce n\u2019est plus la même entreprise. Les mêmes équipes, les mêmes personnes, mais elles font un tout autre niveau de travail. Le travail robot a progressivement disparu de leur quotidien.",
      tag: 'Nouveaux agents chaque mois · tableau de bord "heures robot éliminées" cumulées',
    },
  ]

  const stats = [
    { num: '30', suffix: 'j', label: 'Premiers agents actifs en production' },
    { num: '0', suffix: '', label: 'Heure de formation imposée à vos équipes' },
    { num: '–40', suffix: '%', label: 'De tâches répétitives dès le premier mois' },
  ]

  return (
    <section className="py-16 bg-surface-container-low" id="methode-ombre">
      <div className="max-w-7xl mx-auto px-8">
        {/* POV */}
        <div className="mb-20">
          <p className="text-sm font-label uppercase tracking-widest text-primary font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-0.5 bg-primary inline-block"></span>
            Le constat qui change tout
          </p>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 max-w-4xl">
            80% des projets IA échouent.
            <br />
            Pas à cause de la technologie.
            <br />
            À cause{' '}
            <span className="text-primary italic font-normal">
              des gens qu&apos;on essaie de changer.
            </span>
          </h2>
          <div className="max-w-2xl text-on-surface-variant text-lg leading-relaxed space-y-4">
            <p>
              On forme des équipes qui font la même chose depuis 15 ans. On leur impose de nouveaux
              outils, de nouveaux réflexes. On leur promet que ça va &laquo;&nbsp;les
              libérer&nbsp;&raquo;.
            </p>
            <p>
              <strong className="text-on-surface">
                Résultat : résistance, abandon, retour à l&apos;ancien mode.
              </strong>{' '}
              Et l&apos;investissement part avec.
            </p>
            <p>
              C&apos;est pourquoi je ne forme personne. Je ne change rien à la façon dont vos
              équipes travaillent.{' '}
              <strong className="text-on-surface">
                Je retire les tâches robot, en silence, en coulisses.
              </strong>
            </p>
          </div>
        </div>

        {/* Analogy */}
        <div className="bg-[#0F172A] p-10 md:p-14 rounded-2xl mb-20 relative overflow-hidden">
          <span className="absolute top-0 left-6 font-headline text-[120px] text-white/5 leading-none pointer-events-none select-none">
            &ldquo;
          </span>
          <p className="font-headline text-lg md:text-xl text-white/90 italic leading-relaxed mb-6 relative max-w-3xl">
            Pensez au moment où votre cabinet a adopté la signature électronique. Vos équipes
            n&apos;ont pas appris à signer différemment. Elles ont juste{' '}
            <strong className="not-italic text-[#f7a882]">
              arrêté d&apos;imprimer, de scanner, d&apos;envoyer par courrier.
            </strong>{' '}
            Le contrat était signé. La corvée avait disparu. Personne n&apos;avait changé de métier.
            <br />
            <br />
            C&apos;est exactement ça, la méthode OMBRE, mais appliquée à toutes vos tâches robot,
            une par une, chaque mois.
          </p>
          <p className="text-xs font-label uppercase tracking-widest text-white/30 relative">
            La philosophie derrière la méthode
          </p>
        </div>

        {/* Method header */}
        <div className="mb-16">
          <p className="text-sm font-label uppercase tracking-widest text-primary font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-0.5 bg-primary inline-block"></span>
            La méthode
          </p>
          <h2 className="font-headline text-4xl md:text-5xl font-bold leading-tight mb-4 max-w-3xl">
            <span className="italic font-normal">OMBRE</span>, cinq étapes pour éliminer le
            travail robot
          </h2>
          <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed">
            Déployée en 30 jours. Sans réunion de cadrage. Sans formation imposée. Sans rien casser
            à ce qui fonctionne.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col">
          {steps.map((step, i) => (
            <div
              key={i}
              className="grid grid-cols-[56px_1fr] md:grid-cols-[72px_1fr] gap-x-6 md:gap-x-8 pb-12 group relative"
            >
              {i < steps.length - 1 && (
                <div className="absolute left-[28px] md:left-[36px] top-[64px] md:top-[72px] bottom-0 w-px bg-outline-variant/30"></div>
              )}
              <div className="flex justify-center">
                <div className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-full bg-primary text-surface font-headline text-2xl md:text-3xl font-bold flex items-center justify-center shrink-0">
                  {step.letter}
                </div>
              </div>
              <div className="pt-1 md:pt-3">
                <p className="text-xs font-label uppercase tracking-widest text-primary font-bold mb-1">
                  {step.phase}
                </p>
                <h3 className="font-headline text-2xl md:text-3xl font-bold mb-3">{step.name}</h3>
                {step.badge && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/5 border border-primary/20 text-xs font-medium text-primary tracking-wide mb-3">
                    {step.badge}
                  </span>
                )}
                <p className="text-on-surface-variant leading-relaxed max-w-2xl mb-4">
                  {step.body}
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-surface-container-lowest border-l-2 border-primary text-sm text-on-surface-variant rounded-r-lg">
                  Livrable :{' '}
                  <strong className="text-on-surface font-medium">{step.tag}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-y border-outline-variant/30 my-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`p-8 ${i < stats.length - 1 ? 'md:border-r border-b md:border-b-0 border-outline-variant/30' : ''}`}
            >
              <div className="font-headline text-5xl font-bold mb-2">
                {stat.num}
                {stat.suffix && (
                  <span className="italic font-normal text-primary">{stat.suffix}</span>
                )}
              </div>
              <p className="text-sm text-on-surface-variant">{stat.label}</p>
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
            Les process qui prennent tout{' '}
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
          Recruter, externaliser, utiliser un outil SaaS, chaque option a ses compromis. Voilà pourquoi des PME et professions libérales choisissent une autre voie.
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
            Identifier vos pertes cachées en 15 minutes
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
                Je suis <strong>Maxime Pierrot</strong>, développeur full-stack et spécialiste en automatisation IA.
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
    <section className="py-16 md:py-24 bg-[#0F172A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="font-headline text-5xl font-black mb-8 leading-tight text-white">
            Prêt à reprendre le contrôle de{' '}
            <span className="text-[#f7a882] italic font-normal">votre temps ?</span>
          </h2>
          <p className="text-xl text-white/55 mb-12">
            L&apos;audit est gratuit, sans engagement, et vous repartirez avec une cartographie de vos
            opportunités d&apos;automatisation.
          </p>
          <div className="space-y-6">
            <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ02NUaO7doQ4PH96KwW2ogos8yAdKJ0Pvv1rooYcnQ8_OJmK_xRfOquqDGSQGhJIaTjqep24m_N" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-accent-yellow text-on-background px-12 py-6 rounded-full font-black text-xl hover:bg-white transition-all flex items-center justify-center gap-4 editorial-shadow accent-glow">
              Identifier vos pertes cachées en 15 minutes
              <ArrowRight />
            </a>
          </div>
        </div>
        <ContactForm />
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
            Pas de projet IA, que des résultats.
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
            Paris, Bordeaux, Remote
          </p>
          <p className="text-white font-bold hover:text-[#ff4d20] transition-colors cursor-pointer font-headline text-sm uppercase tracking-widest">
            hello@goodmorningia.com
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-800 text-center">
        <p className="font-headline text-sm uppercase tracking-widest text-stone-500">
          © {new Date().getFullYear()} Good Morning IA. Pas de projet IA, que des résultats.
        </p>
      </div>
    </footer>
  )
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien coûte une automatisation pour une PME ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "La plupart des missions se situent entre 3 000 et 10 000 €. On vous remet un devis fixe à l'issue de l'audit gratuit. Pas de TJM variable, pas de surprise.",
      },
    },
    {
      '@type': 'Question',
      name: "Combien de temps avant d'être opérationnel ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: '1 à 3 semaines selon la complexité. Le calendrier précis est défini dans le devis, avant tout démarrage.',
      },
    },
    {
      '@type': 'Question',
      name: "Est-ce que je possède l'automatisation après livraison ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, entièrement. Contrairement aux outils SaaS qui facturent chaque mois, on vous livre et vous possédez. Aucuns frais récurrents obligatoires.',
      },
    },
    {
      '@type': 'Question',
      name: 'Est-ce que je dois être technique ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non. Vous décrivez votre activité en français. On fait la traduction en automatisation.',
      },
    },
    {
      '@type': 'Question',
      name: "En quoi c'est différent de le faire moi-même sur Zapier ou Make ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Zapier et Make sont des outils. Nous sommes les constructeurs. Les vrais process métier impliquent une logique complexe, de la gestion d'erreurs et des décisions IA que ces outils seuls ne gèrent pas.",
      },
    },
    {
      '@type': 'Question',
      name: 'Que se passe-t-il si un workflow plante ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '30 jours de support sont inclus dans chaque mission. Au-delà, la maintenance mensuelle (optionnelle) couvre les corrections.',
      },
    },
    {
      '@type': 'Question',
      name: "Que se passe-t-il pendant l'audit gratuit ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "30 minutes. On passe en revue votre workflow, on identifie ce qui peut être automatisé, et on vous donne une estimation chiffrée pendant l'appel. Pas de proposition vague envoyée après. Pas de pression commerciale.",
      },
    },
    {
      '@type': 'Question',
      name: 'Mon process ne correspond à aucune de vos offres listées ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Prenez un appel et décrivez-nous votre cas. Si c'est répétitif et basé sur des règles, on peut très probablement l'automatiser.",
      },
    },
  ],
}

export default function Home() {
  return (
    <div className="bg-background text-on-background font-body antialiased min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <V2Navbar />
      <main className="flex-grow">
        <V2Hero />
        <HowItWorks />
        <MethodeOmbre />
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
