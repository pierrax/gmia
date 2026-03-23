'use client'

import { useState, useEffect } from 'react'
import {
  Bot,
  CheckCircle2,
} from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  { title: '📋 Formulaire reçu', sub: 'Lead qualifié via Typeform' },
  { title: '🗂️ Fiche CRM créée', sub: 'Données injectées dans HubSpot' },
  { title: '✉️ Email envoyé', sub: 'Rédaction personnalisée via Claude 3.5' },
  { title: '🔁 Relance programmée', sub: 'J+3 si aucune réponse détectée' },
]

function AgentCard() {
  // activeIndex = the step currently processing (spinner). All before are done (green).
  // Once all are done, pause briefly then reset.
  const [activeIndex, setActiveIndex] = useState(0)
  const [allDone, setAllDone] = useState(false)

  useEffect(() => {
    if (allDone) {
      // Pause 2s with all green, then reset
      const timeout = setTimeout(() => {
        setActiveIndex(0)
        setAllDone(false)
      }, 2000)
      return () => clearTimeout(timeout)
    }

    // Each step: show spinner for 1.5s, then mark as done
    const timeout = setTimeout(() => {
      if (activeIndex < steps.length - 1) {
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
          <p className="font-bold text-sm">Agent Relances Clients</p>
          <p className="text-xs text-on-surface-variant">Statut : Opérationnel</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="w-3 h-3 rounded-full animate-blink bg-red-500"></div>
          <span className="text-xs font-bold uppercase text-red-500">Live</span>
        </div>
      </div>
      <div className="space-y-6">
        {steps.map((step, i) => {
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

const tools = [
  { name: 'Outlook', logo: '/logo-cloud/outlook.png' },
  { name: 'Shopify', logo: '/logo-cloud/shopify.png' },
  { name: 'Axonault', logo: '/logo-cloud/axonault.png' },
  { name: 'HubSpot', logo: '/logo-cloud/hubspot.png' },
  { name: 'Google Drive', logo: '/logo-cloud/drive.png' },
  { name: 'Gmail', logo: '/logo-cloud/gmail.png' },
  { name: 'Excel', logo: '/logo-cloud/excel.png' },
  { name: 'Brevo', logo: '/logo-cloud/brevo.png' },
  { name: 'Google Ads', logo: '/logo-cloud/google-ads.png' },
  { name: 'Qonto', logo: '/logo-cloud/qonto.png' },
]

export function V2Hero() {
  return (
    <header className="relative overflow-hidden pt-20 blueprint-grid">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <span className="font-label text-sm uppercase tracking-widest text-primary font-bold mb-6 block">
            Agents IA pour PME et professions libérales
          </span>
          <h1 className="font-headline text-6xl md:text-8xl font-black text-on-background leading-tight mb-8">
            On automatise le travail.{' '}
            <span className="text-primary italic">Vous gérez votre activité.</span>
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed mb-12 max-w-2xl">
            Libérez votre équipe des tâches répétitives grâce à nos agents IA sur-mesure. Une
            infrastructure d&apos;automatisation robuste qui s&apos;intègre à vos outils actuels en moins de 15
            jours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ02NUaO7doQ4PH96KwW2ogos8yAdKJ0Pvv1rooYcnQ8_OJmK_xRfOquqDGSQGhJIaTjqep24m_N" target="_blank" rel="noopener noreferrer" className="bg-accent-yellow text-on-background px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all shadow-xl accent-glow">
              Réserver mon audit gratuit
            </a>
            <button className="border border-primary px-10 py-5 rounded-full font-bold text-lg text-primary hover:bg-primary-fixed transition-all">
              Voir nos solutions
            </button>
          </div>
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
              <p className="text-sm font-bold text-on-background">7 heures / semaine</p>
              <p className="text-xs text-green-500 font-semibold">économisées</p>
            </div>
          </motion.div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-tertiary/10 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </div>

      <div className="mt-12 border-y border-outline-variant/10 py-12 overflow-hidden bg-[#0F172A] relative z-10">
        <p className="text-center font-label text-xs uppercase tracking-widest mb-10 text-white/70">
          Nos agents maîtrisent vos outils préférés
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="flex animate-marquee items-center w-max">
            {[0, 1].map((dupeIdx) => (
              <div key={dupeIdx} className="flex items-center gap-16 shrink-0 px-8">
                {tools.map((tool) => (
                  <span
                    key={tool.name}
                    className="flex items-center gap-3 text-2xl font-bold font-label text-white hover:text-tertiary transition-colors cursor-default whitespace-nowrap"
                  >
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="h-8 max-w-16 object-contain"
                    />
                    {tool.name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
