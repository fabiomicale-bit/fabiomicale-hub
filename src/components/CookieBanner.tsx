'use client'
import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'all')
    setVisible(false)
  }

  const necessary = () => {
    localStorage.setItem('cookie-consent', 'necessary')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#E5E5E5] shadow-lg">
      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-sm text-[#555555] max-w-2xl">
          Questo sito usa cookie tecnici e di analytics per migliorare l&apos;esperienza.
          Nessuna pubblicità, nessuna profilazione.{' '}
          <a href="/privacy" className="text-[#2E7D32] underline hover:text-[#1B5E20]">
            Cookie Policy
          </a>
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={necessary}
            className="px-4 py-2 text-sm border border-[#E5E5E5] rounded-lg text-[#555555] hover:bg-[#F7F7F7] transition-colors font-medium"
          >
            Solo necessari
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm bg-[#2E7D32] text-white rounded-lg hover:bg-[#1B5E20] transition-colors font-medium"
          >
            Accetta tutti
          </button>
        </div>
      </div>
    </div>
  )
}
