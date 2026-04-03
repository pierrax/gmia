'use client'

import { useState, useRef, useEffect, useCallback } from 'react'

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: { sitekey: string; callback: (token: string) => void; 'expired-callback': () => void },
      ) => string
      reset: (widgetId: string) => void
    }
  }
}

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [turnstileToken, setTurnstileToken] = useState('')
  const turnstileRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | undefined>(undefined)

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

  const renderTurnstile = useCallback(() => {
    if (siteKey && window.turnstile && turnstileRef.current && !widgetIdRef.current) {
      widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
        sitekey: siteKey,
        callback: (token: string) => setTurnstileToken(token),
        'expired-callback': () => setTurnstileToken(''),
      })
    }
  }, [siteKey])

  useEffect(() => {
    if (!siteKey) return

    if (window.turnstile) {
      renderTurnstile()
      return
    }

    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad'
    script.async = true
    ;(window as unknown as Record<string, () => void>).onTurnstileLoad = renderTurnstile
    document.head.appendChild(script)

    return () => {
      delete (window as unknown as Record<string, () => void>).onTurnstileLoad
    }
  }, [siteKey, renderTurnstile])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prenom: formData.get('prenom'),
          email: formData.get('email'),
          message: formData.get('message'),
          website: formData.get('website'),
          turnstileToken,
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Erreur inconnue')
      }

      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : "Erreur lors de l'envoi.")
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.reset(widgetIdRef.current)
        setTurnstileToken('')
      }
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-surface-container p-10 rounded-3xl border-2 border-primary/5">
        <div className="text-center py-8">
          <p className="font-headline text-2xl font-bold text-primary mb-2">Message envoy&eacute; !</p>
          <p className="text-on-surface-variant">
            Merci, je reviens vers vous tr&egrave;s vite.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-surface-container p-10 rounded-3xl border-2 border-primary/5">
      <h3 className="font-headline text-2xl font-bold mb-8">
        Option 2 : Envoyer un message
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot - hidden from real users */}
        <input
          type="text"
          name="website"
          autoComplete="off"
          tabIndex={-1}
          aria-hidden="true"
          className="absolute opacity-0 h-0 w-0 pointer-events-none"
        />
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="font-label text-xs uppercase font-bold text-on-surface-variant">
              Pr&eacute;nom
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
        {siteKey && <div ref={turnstileRef} />}
        {status === 'error' && (
          <p className="text-red-600 text-sm">{errorMessage}</p>
        )}
        <button
          className="w-full bg-[#0F172A] text-white py-5 rounded-lg font-bold hover:bg-primary transition-all disabled:opacity-50"
          type="submit"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Envoi en cours...' : 'Envoyer ma demande'}
        </button>
      </form>
    </div>
  )
}
