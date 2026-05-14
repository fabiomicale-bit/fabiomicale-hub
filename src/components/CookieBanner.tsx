'use client'
import { useState, useEffect } from 'react'
import { updateConsent } from '@/lib/ga'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'all')
    updateConsent(true)
    setVisible(false)
  }

  const necessary = () => {
    localStorage.setItem('cookie-consent', 'necessary')
    updateConsent(false)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-hub-border shadow-lg">
      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-sm text-hub-ink-muted max-w-2xl">
          Questo sito usa cookie tecnici e di analytics per migliorare l&apos;esperienza.
          Nessuna pubblicità, nessuna profilazione.{' '}
          <a href="/cookies" className="text-hub-gold underline hover:text-hub-gold-dark">
            Cookie Policy
          </a>
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={necessary}
            className="px-4 py-2 text-sm border border-hub-border rounded-lg text-hub-ink-muted hover:bg-hub-bg-alt transition-colors font-medium"
          >
            Solo necessari
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm bg-hub-charcoal text-white rounded-lg hover:bg-hub-ink transition-colors font-medium"
          >
            Accetta tutti
          </button>
        </div>
      </div>
    </div>
  )
}
