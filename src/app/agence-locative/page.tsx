'use client'

import { useState, useEffect } from 'react'
import { V2Navbar } from '@/components/v2-navbar'
import { ContactForm } from '@/components/contact-form'
import { ArrowRight, Bot, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const BOOKING_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ02NUaO7doQ4PH96KwW2ogos8yAdKJ0Pvv1rooYcnQ8_OJmK_xRfOquqDGSQGhJIaTjqep24m_N'

const agentSteps = [
  { title: '📩 Loyer non reçu à J+2', sub: 'Détection automatique via rapprochement bancaire' },
  { title: '⚡ Relance envoyée', sub: 'Email personnalisé au locataire' },
  { title: '📊 Propriétaire notifié', sub: 'Récap mensuel généré et envoyé' },
  { title: '📄 Quittance émise', sub: 'PDF généré et envoyé au locataire' },
]

function AgentCard() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [allDone, setAllDone] = useState(false)

  useEffect(() => {
    if (allDone) {
      const timeout = setTimeout(() => {
        setActiveIndex(0)
        setAllDone(false)
      }, 2000)
      return () => clearTimeout(timeout)
    }
    const timeout = setTimeout(() => {
      if (activeIndex < agentSteps.length - 1) {
        setActiveIndex(activeIndex + 1)
      } else {
        setAllDone(true)
      }
    }, 1500)
    return () => clearTimeout(timeout)
  }, [activeIndex, allDone])

  return (
    <div className="bg-white p-8 rounded-xl editorial-shadow border border-outline-variant/20 relative z-10">
      <div className="flex items-center gap-3 mb-8 pb-4 border-b border-surface-container">
        <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center">
          <Bot className="text-primary w-5 h-5" />
        </div>
        <div>
          <p className="font-bold text-sm">Agent Gestion Locative</p>
          <p className="text-xs text-on-surface-variant">Statut : Opérationnel</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="w-3 h-3 rounded-full animate-blink bg-red-500"></div>
          <span className="text-xs font-bold uppercase text-red-500">Live</span>
        </div>
      </div>
      <div className="space-y-6">
        {agentSteps.map((step, i) => {
          const isDone = allDone || i < activeIndex
          const isActive = !allDone && i === activeIndex
          const isPending = !allDone && i > activeIndex

          return (
            <div
              key={i}
              className={`flex items-start gap-4 transition-opacity duration-500 ${isPending ? 'opacity-40' : 'opacity-100'}`}
            >
              <div className="w-5 h-5 shrink-0 mt-0.5">
                {isDone && (
                  <CheckCircle2 className="w-5 h-5 text-green-500 animate-[fadeIn_0.3s_ease-in]" />
                )}
                {isActive && (
                  <div className="w-5 h-5 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                )}
                {isPending && (
                  <div className="w-5 h-5 rounded-full border-2 border-outline-variant/40" />
                )}
              </div>
              <div>
                <p
                  className={`text-sm font-semibold transition-colors duration-300 ${
                    isActive ? 'text-primary' : isDone ? 'text-green-500' : 'text-on-surface-variant'
                  }`}
                >
                  {step.title}
                </p>
                <p className="text-xs text-on-surface-variant">{step.sub}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function Hero() {
  return (
    <header className="relative overflow-hidden pt-20 blueprint-grid">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <span className="font-label text-sm uppercase tracking-widest text-primary font-bold mb-6 block">
            Pour les agences avec pôle gestion locative
          </span>
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black text-on-background leading-tight mb-8">
            Vous payez des experts &agrave;{' '}
            <span className="text-primary italic font-normal">envoyer des quittances.</span>
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-2xl">
            J&apos;automatise les relances d&apos;impayés, les quittances et les communications
            propriétaires,{' '}
            <strong className="text-on-surface">
              sans changer vos outils, sans former vos équipes.
            </strong>{' '}
            Premier résultat visible en 30 jours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-yellow text-on-background px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all shadow-xl accent-glow"
            >
              Voir les gains dans votre agence
            </a>
            <a
              href="#rdv"
              className="border border-primary px-10 py-5 rounded-full font-bold text-lg text-primary hover:bg-primary-fixed transition-all"
            >
              Voir le calculateur ROI
            </a>
          </div>
          <p className="text-sm text-on-surface-variant max-w-md leading-relaxed">
            Pas de pitch. Je regarde avec vous ce qui est automatisable dans votre agence et
            j&apos;estime le temps libérable. Sans engagement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <AgentCard />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 -right-6 z-20 bg-white px-5 py-3 rounded-xl editorial-shadow border border-outline-variant/20 flex items-center gap-3"
          >
            <span className="text-2xl">⏱️</span>
            <div>
              <p className="text-sm font-bold text-on-background">10 heures / semaine</p>
              <p className="text-xs text-green-500 font-semibold">économisées par gestionnaire</p>
            </div>
          </motion.div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-tertiary/10 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </div>
    </header>
  )
}

function StatsBar() {
  const stats = [
    { num: '30', suffix: 'j', label: 'Premiers agents actifs en production' },
    { num: '0', suffix: '', label: 'Heure de formation imposée à vos équipes' },
    { num: '-40', suffix: '%', label: 'De tâches répétitives dès le premier mois' },
  ]

  return (
    <section className="bg-[#0F172A] py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="px-8 py-6 md:py-0">
              <div className="font-headline text-5xl font-bold text-white mb-2">
                {stat.num}
                {stat.suffix && (
                  <span className="italic font-normal text-[#f7a882]">{stat.suffix}</span>
                )}
              </div>
              <p className="text-sm text-white/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Problem() {
  const scenes = [
    {
      time: '17h un mardi',
      text: (
        <>
          Votre gestionnaire a encore{' '}
          <strong className="text-on-surface">12 emails de locataires en attente</strong>.
          Quittances, attestations CAF, confirmations de loyer. Il les traitera demain. Peut-être.
        </>
      ),
    },
    {
      time: 'Fin de mois',
      text: (
        <>
          Les relances d&apos;impayés :{' '}
          <strong className="text-on-surface">14 cette semaine</strong>. Toutes identiques à deux
          données près. Il les a tapées une par une, entre deux rendez-vous et trois appels
          propriétaires.
        </>
      ),
    },
    {
      time: 'Un jeudi matin',
      text: (
        <>
          Un propriétaire appelle :{' '}
          <strong className="text-on-surface">&laquo; Mon locataire a-t-il payé ? &raquo;</strong>{' '}
          Votre gestionnaire ouvre le logiciel, vérifie, rappelle. Quatrième fois ce mois pour ce
          propriétaire.
        </>
      ),
    },
    {
      time: 'Après chaque état des lieux',
      text: (
        <>
          45 minutes d&apos;admin : rapport formaté, calcul du dépôt de garantie, lettre au
          locataire, mise à jour du dossier.{' '}
          <strong className="text-on-surface">Chaque entrée, chaque sortie.</strong> Sans exception.
        </>
      ),
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-4">
            {scenes.map((scene, i) => (
              <div
                key={i}
                className="p-8 bg-surface-container-low border-l-2 border-primary rounded-r-lg"
              >
                <p className="text-xs font-label uppercase tracking-widest text-primary font-bold mb-3">
                  {scene.time}
                </p>
                <p className="text-on-surface-variant leading-relaxed">{scene.text}</p>
              </div>
            ))}
          </div>
          <div className="lg:sticky lg:top-24">
            <p className="text-sm font-label uppercase tracking-widest text-primary font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-primary inline-block"></span>
              Le constat
            </p>
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Aucune de ces tâches ne demande l&apos;expertise d&apos;un{' '}
              <span className="text-primary italic font-normal">
                professionnel de l&apos;immobilier.
              </span>
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-5">
              Elles sont là parce que personne ne les a encore retirées du planning. Pas parce
              qu&apos;elles ont besoin d&apos;un humain pour exister.
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Vos gestionnaires sont recrutés et payés pour leur connaissance du marché, leur sens du
              contact, leur capacité à gérer des situations complexes. Pas pour faire du
              copier-coller avec un prénom et un montant qui change à chaque fois.
            </p>
            <div className="bg-[#0F172A] p-8 rounded-2xl relative overflow-hidden">
              <span className="absolute top-0 left-4 font-headline text-[100px] text-white/5 leading-none pointer-events-none select-none">
                &ldquo;
              </span>
              <p className="font-headline text-lg text-white/90 italic leading-relaxed relative">
                La vraie question n&apos;est pas &laquo; comment former mes équipes à l&apos;IA
                &raquo;, c&apos;est &laquo; quelles tâches est-ce que je leur retire dès ce
                mois-ci. &raquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Tasks() {
  const tasks = [
    {
      num: '01',
      name: "Relances d'impayés",
      desc: "Dès qu'un virement n'arrive pas à J+2, le locataire reçoit un message personnalisé. Vous n'intervenez que si pas de réponse à J+5.",
      gain: '~3h libérées/semaine',
    },
    {
      num: '02',
      name: 'Envoi de quittances',
      desc: 'Le 1er de chaque mois, chaque locataire reçoit sa quittance automatiquement. Zéro demande traitée manuellement.',
      gain: '~1h30 libérée/semaine',
    },
    {
      num: '03',
      name: 'Récap propriétaires',
      desc: 'Chaque propriétaire reçoit son récap mensuel. Loyer perçu, charges, travaux en cours. Zéro appel "est-ce que mon loyer est tombé ?"',
      gain: '~2h libérées/semaine',
    },
    {
      num: '04',
      name: 'Questions locataires',
      desc: 'CAF, attestations, coordonnées, règlement de copropriété, réponse automatique 24h/24 sans mobiliser votre équipe.',
      gain: '~1h30 libérée/semaine',
    },
    {
      num: '05',
      name: 'Suivi états des lieux',
      desc: 'Entrée ou sortie : convocation, rapport formaté, calcul dépôt de garantie, lettre au locataire. Tout part automatiquement.',
      gain: '~2h libérées/mouvement',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-sm font-label uppercase tracking-widest text-primary font-bold mb-6 flex items-center gap-3">
          <span className="w-8 h-0.5 bg-primary inline-block"></span>
          Ce qui disparaît en premier
        </p>
        <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          Les 5 t&acirc;ches r&eacute;p&eacute;titives
          <br />
          de la gestion locative
        </h2>
        <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed mb-12">
          Classées par volume horaire libérable. Sur un portefeuille de 150 lots, elles représentent
          10h par semaine par gestionnaire.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {tasks.map((task, i) => (
            <div
              key={i}
              className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 hover:shadow-lg transition-all group"
            >
              <div className="font-headline text-4xl font-bold text-surface-container-highest mb-4">
                {task.num}
              </div>
              <h3 className="text-base font-bold mb-3 leading-snug">{task.name}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">{task.desc}</p>
              <p className="text-primary text-sm font-bold">{task.gain}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-[#0F172A] p-10 md:p-14 rounded-2xl text-center">
          <p className="font-headline text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
            Ce temps peut être automatisé{' '}
            <span className="text-primary italic">sans recruter.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

function Calculator() {
  const [lots, setLots] = useState(150)
  const [gest, setGest] = useState(3)
  const [sal, setSal] = useState(32000)

  const heuresAdmin = Math.round(lots * 0.08 * 12 * 0.4 + gest * 1.5 * 52)
  const tauxHoraire = (sal * 1.45) / (35 * 52)
  const coutAnnuel = Math.round((heuresAdmin * tauxHoraire) / 100) * 100
  const heuresSemaine = Math.round(heuresAdmin / 52)

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-label uppercase tracking-widest text-primary font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-primary inline-block"></span>
              La facture 2026
            </p>
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Calculez ce que vous investissez dans du copier-coller
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-4">
              Pas en heures perdues. En euros. Sur la base du coût chargé de vos gestionnaires et du
              volume de tâches admin de votre portefeuille.
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Un chiffre qu&apos;on calcule soi-même à plus de poids que n&apos;importe quel
              argument commercial. Faites-le.
            </p>
          </div>
          <div className="bg-surface-container-low p-10 rounded-2xl">
            <div className="mb-8">
              <label className="flex justify-between text-sm text-on-surface-variant mb-3">
                <span>Nombre de lots en gestion</span>
                <strong className="text-on-surface font-medium">{lots} lots</strong>
              </label>
              <input
                type="range"
                min={50}
                max={500}
                step={10}
                value={lots}
                onChange={(e) => setLots(Number(e.target.value))}
                className="w-full h-1 bg-surface-container-highest rounded-full appearance-none cursor-pointer accent-primary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer"
              />
            </div>
            <div className="mb-8">
              <label className="flex justify-between text-sm text-on-surface-variant mb-3">
                <span>Nombre de gestionnaires</span>
                <strong className="text-on-surface font-medium">
                  {gest} gestionnaire{gest > 1 ? 's' : ''}
                </strong>
              </label>
              <input
                type="range"
                min={1}
                max={12}
                step={1}
                value={gest}
                onChange={(e) => setGest(Number(e.target.value))}
                className="w-full h-1 bg-surface-container-highest rounded-full appearance-none cursor-pointer accent-primary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer"
              />
            </div>
            <div className="mb-8">
              <label className="flex justify-between text-sm text-on-surface-variant mb-3">
                <span>Salaire brut moyen</span>
                <strong className="text-on-surface font-medium">
                  {sal.toLocaleString('fr-FR')} &euro;
                </strong>
              </label>
              <input
                type="range"
                min={26000}
                max={45000}
                step={1000}
                value={sal}
                onChange={(e) => setSal(Number(e.target.value))}
                className="w-full h-1 bg-surface-container-highest rounded-full appearance-none cursor-pointer accent-primary [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer"
              />
            </div>
            <div className="bg-[#0F172A] p-8 rounded-xl">
              <p className="text-xs font-label uppercase tracking-widest text-white/40 mb-2">
                Coût annuel de l&apos;admin manuelle
              </p>
              <p className="font-headline text-4xl md:text-5xl font-bold text-white mb-1">
                {coutAnnuel.toLocaleString('fr-FR')}{' '}
                <span className="italic font-normal text-[#f7a882]">&euro;</span>
              </p>
              <p className="text-sm text-white/50 mb-6">
                investis chaque année dans des tâches automatisables
              </p>
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                <div>
                  <p className="text-xs text-white/40 mb-1">Heures admin/semaine</p>
                  <p className="text-lg font-medium text-white">{heuresSemaine} h</p>
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-1">Coût sur 3 ans</p>
                  <p className="text-lg font-medium text-white">
                    {(coutAnnuel * 3).toLocaleString('fr-FR')} &euro;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Solution() {
  const beforeItems = [
    "Relance envoyée à la main à J+2, J+5, J+15, si on n'a pas oublié",
    'Quittance envoyée quand le locataire la demande',
    'Propriétaire qui appelle pour savoir si son loyer est tombé',
    'CRM rempli "plus tard", donc mal, ou pas du tout',
    "45 min d'admin après chaque état des lieux",
  ]

  const afterItems = [
    'Relances parties automatiquement . gestionnaire alerté uniquement si pas de réponse',
    'Quittance envoyée le 1er du mois à tous les locataires . aucune demande traitée',
    'Récap propriétaire envoyé automatiquement . zéro appel de vérification',
    'CRM mis à jour en temps réel sans intervention humaine',
    "Documents générés et envoyés automatiquement depuis la date d'état des lieux",
  ]

  const timeline = [
    {
      day: 'Jour 1',
      name: 'Observer',
      desc: '2h sur site pour identifier les 5 tâches répétitives prioritaires et estimer le temps libérable',
    },
    {
      day: 'Semaines 1-2',
      name: 'Modéliser',
      desc: "Construction des agents en coulisses. Vos équipes ne savent pas encore qu'ils existent.",
    },
    {
      day: 'Semaines 3-4',
      name: 'Basculer',
      desc: "Déploiement silencieux. Les outputs arrivent là où il y avait des tâches manuelles avant.",
    },
    {
      day: 'Jour 30',
      name: 'Mesurer',
      desc: 'Bilan "heures robot éliminées". On chiffre, on documente, on décide de la suite.',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-label uppercase tracking-widest text-primary font-bold mb-6 flex items-center justify-center gap-3">
            <span className="w-8 h-0.5 bg-primary inline-block"></span>
            Comment ça marche
          </p>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Ce qui change, et ce qui ne change pas
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Vos gestionnaires ne font pas de formation. Ne changent pas leurs outils. Ne modifient
            pas leurs habitudes. Les tâches répétitives disparaissent juste de leur planning.
          </p>
        </div>

        {/* Before / After */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-16 rounded-2xl overflow-hidden">
          <div className="bg-surface-container-highest p-10">
            <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant font-bold mb-6">
              Aujourd&apos;hui
            </p>
            <div className="space-y-4">
              {beforeItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 pb-4 border-b border-on-surface/5 last:border-b-0 last:pb-0"
                >
                  <span className="w-6 h-6 rounded-full bg-surface-container flex items-center justify-center text-xs text-on-surface-variant shrink-0 mt-0.5">
                    &times;
                  </span>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#0F172A] p-10">
            <p className="text-xs font-label uppercase tracking-widest text-white/30 font-bold mb-6">
              Après déploiement
            </p>
            <div className="space-y-4">
              {afterItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 pb-4 border-b border-white/5 last:border-b-0 last:pb-0"
                >
                  <span className="w-6 h-6 rounded-full bg-[#f7a882]/15 flex items-center justify-center text-xs text-[#f7a882] shrink-0 mt-0.5">
                    &rarr;
                  </span>
                  <p className="text-white/70 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t-2 border-surface-container-highest">
          {timeline.map((step, i) => (
            <div key={i} className="p-8 relative">
              {i < timeline.length - 1 && (
                <span className="hidden lg:block absolute right-0 top-10 text-surface-container-highest text-lg">
                  &rarr;
                </span>
              )}
              <p className="text-xs font-label uppercase tracking-widest text-primary font-bold mb-2">
                {step.day}
              </p>
              <h3 className="font-headline text-xl font-bold mb-2">{step.name}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Fomo() {
  return (
    <section className="py-16 md:py-24 bg-[#0F172A] relative overflow-hidden">
      <span className="absolute top-[-40px] left-5 font-headline text-[300px] text-white/[.02] leading-none pointer-events-none select-none">
        &ldquo;
      </span>
      <div className="max-w-5xl mx-auto px-8 relative">
        <p className="text-sm font-label uppercase tracking-widest text-white/35 font-bold mb-8 flex items-center gap-3">
          <span className="w-8 h-0.5 bg-white/20 inline-block"></span>
          Ce qui se passe en ce moment
        </p>
        <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8 max-w-2xl">
          L&apos;IA ne remplacera pas les gestionnaires locatifs.
          <br />
          <span className="text-[#f7a882] italic font-normal">
            Elle remplacera ceux qui n&apos;en ont pas.
          </span>
        </h2>
        <p className="text-white/65 text-lg leading-relaxed max-w-2xl mb-8">
          Sur les 12 derniers mois, j&apos;ai eu des échanges avec une trentaine de responsables de
          gestion locative en France. Ceux qui ont avancé sur le sujet ont tous dit la même chose
          après coup.
        </p>
        <div className="border-l-[3px] border-primary px-8 py-6 my-10 max-w-2xl">
          <p className="font-headline italic text-xl md:text-2xl text-white leading-relaxed">
            &laquo; J&apos;aurais dû regarder ça six mois plus tôt. On gère maintenant{' '}
            <strong className="not-italic text-[#f7a882]">30% de lots supplémentaires</strong> avec
            la même équipe, et mes gestionnaires ne parlent plus de partir. &raquo;
          </p>
        </div>
        <p className="text-white/65 text-lg leading-relaxed max-w-2xl">
          Ce n&apos;est pas une question de taille d&apos;agence ni de budget. C&apos;est une
          question de timing.{' '}
          <strong className="text-white">
            Les agences qui automatisent maintenant creusent un écart qui sera difficile à rattraper.
          </strong>{' '}
          Celles qui attendent ne perdent pas de temps. Elles laissent juste l&apos;avantage
          à leurs voisins.
        </p>
      </div>
    </section>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      q: 'Ça va perturber mes équipes ?',
      a: "Non, et c'est le point central de la méthode. Vos gestionnaires ne voient rien changer dans leur façon de travailler. Les tâches admin disparaissent juste de leur planning. Pas de formation, pas de nouveaux outils à apprendre. Certains ne réalisent le changement qu'au bout de 2 semaines, quand ils constatent qu'ils n'ont plus rien dans leur file de relances.",
    },
    {
      q: 'Ça fonctionne avec notre logiciel de gestion ?',
      a: "Oui. Je travaille avec ICS, Crypto, Galaxie et la plupart des logiciels du marché français. La connexion se fait en coulisses, vous n'avez rien à configurer. Si vous avez un logiciel moins répandu, je le vérifie lors de l'appel découverte avant de m'engager.",
    },
    {
      q: "On est une petite structure, c'est adapté à notre taille ?",
      a: "La méthode est pensée pour des portefeuilles de 80 à 500 lots. En dessous de 80 lots, le ROI est moins évident, je vous le dirai honnêtement en appel plutôt que de vous vendre quelque chose qui ne vaut pas le coût. Entre 80 et 150 lots, on commence généralement par 2 ou 3 automatisations prioritaires.",
    },
    {
      q: 'Combien ça coûte ?',
      a: "L'audit terrain (Jour 1, sur site) est à 990\u20AC. L'abonnement mensuel tourne entre 490\u20AC et 990\u20AC selon la taille du portefeuille et le nombre d'automatisations actives. Le calcul de ROI qu'on fait ensemble en appel est généralement sans ambiguïté : si le coût mensuel est inférieur au temps libéré x coût horaire chargé de vos gestionnaires, ça vaut le coup.",
    },
    {
      q: 'Et si les résultats ne sont pas au rendez-vous ?',
      a: "Le déploiement dure 30 jours. À l'issue du premier mois, on mesure ensemble les heures libérées. Si le résultat est inférieur à ce qu'on avait estimé ensemble, on ajuste ou on s'arrête là, sans frais supplémentaires. Je suis payé sur des résultats, pas sur des promesses.",
    },
    {
      q: 'Nos données locataires sont-elles en sécurité ?',
      a: "Toutes les données restent dans vos outils existants. Je n'accède pas aux données personnelles de vos locataires, j'automatise les flux entre vos outils existants sans les stocker ailleurs. Le déploiement est conforme au RGPD. Je peux vous fournir un document de synthèse technique si votre DPO le demande.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-8">
        <p className="text-sm font-label uppercase tracking-widest text-primary font-bold mb-6 flex items-center gap-3">
          <span className="w-8 h-0.5 bg-primary inline-block"></span>
          Vos questions
        </p>
        <h2 className="font-headline text-3xl md:text-4xl font-bold leading-tight mb-12">
          Ce que vous vous demandez
          <br />
          avant d&apos;appeler
        </h2>
        <div>
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-outline-variant/30">
              <button
                className="flex justify-between items-start w-full py-6 text-left gap-4"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-base font-medium text-on-surface leading-snug">
                  {faq.q}
                </span>
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-base shrink-0 mt-0.5 transition-colors ${openIndex === i ? 'bg-primary text-white' : 'bg-surface-container-highest text-on-surface-variant'}`}
                >
                  {openIndex === i ? '\u2013' : '+'}
                </span>
              </button>
              {openIndex === i && (
                <p className="pb-6 text-on-surface-variant leading-relaxed max-w-2xl">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="py-16 md:py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
          <div className="relative">
            <img
              className="rounded-3xl shadow-2xl border-2 border-primary/20 w-full object-cover aspect-[4/5]"
              src="/maxime.jpg"
              alt="Maxime Pierrot - Good Morning IA"
              loading="lazy"
              width={400}
              height={500}
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-yellow rounded-full -z-10 mix-blend-multiply opacity-50"></div>
          </div>
          <div>
            <p className="text-sm font-label uppercase tracking-widest text-primary font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-primary inline-block"></span>
              Qui je suis
            </p>
            <h2 className="font-headline text-3xl md:text-4xl font-bold leading-tight mb-8">
              Maxime,{' '}
              <span className="text-primary italic font-normal">Good Morning IA</span>
            </h2>
            <div className="space-y-5 text-on-surface-variant text-lg leading-relaxed">
              <p>
                Je travaille depuis plusieurs années sur l&apos;automatisation des process des PME
                françaises avec des outils IA. J&apos;ai commencé à travailler avec des agences
                immobilieres parce que j&apos;ai vu quelque chose d&apos;absurde sur le terrain.
              </p>
              <p>
                Des professionnels très bien payés pour leur expertise du marché et leurs relations
                clients, qui passent un tiers de leur journée à faire du copier-coller. Ce
                n&apos;est pas un problème de compétence.{' '}
                <strong className="text-on-surface">C&apos;est un probleme d&apos;outillage.</strong>
              </p>
              <p>
                Je ne vends pas de formation IA. Je ne change pas votre façon de travailler. Je
                retire les tâches répétitives du planning de vos gestionnaires, en silence, en
                coulisses, pendant que votre agence continue de tourner normalement.
              </p>
              <p>
                Good Morning IA est basé à Bordeaux. Je travaille avec des agences sur toute la
                France.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTAFinal() {
  return (
    <section className="py-16 md:py-24 bg-[#0F172A]" id="rdv">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <p className="text-sm font-label uppercase tracking-widest text-white/30 font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-0.5 bg-white/20 inline-block"></span>
            Par où commencer
          </p>
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            20 minutes pour savoir ce que ça vaut{' '}
            <span className="text-[#f7a882] italic font-normal">chez vous.</span>
          </h2>
          <p className="text-white/55 text-lg leading-relaxed mb-12">
            Pas de pitch. Je regarde avec vous les 3 tâches les plus chronophages et j&apos;estime le
            temps libérable, avec vos vrais chiffres, pas des moyennes de secteur.
          </p>
          <div className="space-y-6">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-accent-yellow text-on-background px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all shadow-xl accent-glow"
            >
              Voir les gains dans votre agence
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-sm text-white/40 leading-relaxed">
              Mardi ou jeudi &middot; 20 minutes &middot; visio ou téléphone
              <br />
              Sans engagement &middot; Je vous dirai honnêtement si ça vaut le coup.
            </p>
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
            Paris &middot; Bordeaux &middot; Remote
          </p>
          <p className="text-white font-bold hover:text-[#ff4d20] transition-colors cursor-pointer font-headline text-sm uppercase tracking-widest">
            hello@goodmorningia.com
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-800 text-center">
        <p className="font-headline text-sm uppercase tracking-widest text-stone-500">
          &copy; {new Date().getFullYear()} Good Morning IA. L&apos;IA au travail. Vous au pilotage.
        </p>
      </div>
    </footer>
  )
}

export default function AgenceLocativePage() {
  return (
    <div className="bg-background text-on-background font-body antialiased min-h-screen flex flex-col">
      <V2Navbar />
      <main className="flex-grow">
        <Hero />
        <StatsBar />
        <Problem />
        <Tasks />
        <Calculator />
        <Solution />
        <Fomo />
        <FAQ />
        <About />
        <CTAFinal />
      </main>
      <V2Footer />
    </div>
  )
}
