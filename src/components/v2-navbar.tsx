'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: "Comment ça marche", href: '/#comment-ca-marche' },
  { label: "Ce qu'on automatise", href: '/#ce-quon-automatise' },
  { label: 'Tarifs', href: '/#tarifs' },
  { label: 'À propos', href: '/#a-propos' },
]

export function V2Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0F172A]/95 backdrop-blur-md shadow-sm' : 'bg-[#0F172A]'}`}
    >
      <div className="flex justify-between items-center px-8 py-6 max-w-screen-2xl mx-auto">
        <Link className="text-2xl font-black italic text-primary font-headline" href="/">
          Good Morning IA
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((item) => (
            <a
              key={item.label}
              className="font-body antialiased text-base font-medium tracking-tight text-white/80 hover:text-tertiary transition-colors"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ02NUaO7doQ4PH96KwW2ogos8yAdKJ0Pvv1rooYcnQ8_OJmK_xRfOquqDGSQGhJIaTjqep24m_N" target="_blank" rel="noopener noreferrer" className="hidden sm:block bg-accent-yellow hover:bg-white text-on-background px-8 py-3 rounded-full font-bold transition-all duration-300 scale-100 hover:scale-105">
            Audit gratuit
          </a>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0F172A] border-t border-white/10 px-8 py-6"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  className="font-body text-base font-medium text-white/80"
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ02NUaO7doQ4PH96KwW2ogos8yAdKJ0Pvv1rooYcnQ8_OJmK_xRfOquqDGSQGhJIaTjqep24m_N" target="_blank" rel="noopener noreferrer" className="bg-accent-yellow text-on-background px-8 py-3 rounded-full font-bold w-full text-center block">
                Audit gratuit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
