'use client'
import { useState } from 'react'

interface CommentoFormProps {
  articolo: string
}

export default function CommentoForm({ articolo }: CommentoFormProps) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [messaggio, setMessaggio] = useState('')
  const [stato, setStato] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errore, setErrore] = useState('')

  const handleSubmit = async () => {
    if (!nome || !email || !messaggio) {
      setErrore('Compila tutti i campi.')
      return
    }

    setStato('loading')
    setErrore('')

    try {
      const res = await fetch('/api/commento', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, messaggio, articolo }),
      })

      const data = await res.json()

      if (data.success) {
        setStato('success')
        setNome('')
        setEmail('')
        setMessaggio('')
      } else {
        setErrore(data.error || 'Qualcosa non ha funzionato. Riprova.')
        setStato('error')
      }
    } catch {
      setErrore('Errore di connessione. Riprova.')
      setStato('error')
    }
  }

  if (stato === 'success') {
    return (
      <div className="bg-[#E8F5E9] border border-[#2E7D32]/20 rounded-2xl p-8 text-center">
        <div className="text-3xl mb-3">✅</div>
        <h3 className="text-xl font-bold text-[#111111] mb-2">
          Messaggio ricevuto!
        </h3>
        <p className="text-[#555555]">
          Grazie per aver scritto. Rispondo personalmente entro 48 ore.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-[#F7F7F7] rounded-2xl p-8 border border-[#E5E5E5]">
      <h3 className="text-2xl font-serif text-[#111111] mb-2">
        Hai una domanda o vuoi condividere la tua esperienza?
      </h3>
      <p className="text-[#555555] mb-6 text-sm">
        Scrivi qui sotto. Leggo e rispondo personalmente a ogni messaggio.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-[#111111] mb-1">
            Nome *
          </label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Il tuo nome"
            className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg text-[#111111] placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/20 bg-white text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#111111] mb-1">
            Email *{' '}
            <span className="text-[#AAAAAA] font-normal">(non verrà pubblicata)</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="la.tua@email.com"
            className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg text-[#111111] placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/20 bg-white text-sm"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-[#111111] mb-1">
          Il tuo messaggio *
        </label>
        <textarea
          value={messaggio}
          onChange={(e) => setMessaggio(e.target.value)}
          placeholder="Scrivi qui la tua domanda, la tua esperienza, o quello che pensi dell'articolo..."
          rows={5}
          className="w-full px-4 py-3 border border-[#E5E5E5] rounded-lg text-[#111111] placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/20 bg-white text-sm resize-none"
        />
        <p className="text-xs text-[#AAAAAA] mt-1 text-right">
          {messaggio.length}/2000
        </p>
      </div>

      {errore && (
        <p className="text-red-600 text-sm mb-4">{errore}</p>
      )}

      <button
        onClick={handleSubmit}
        disabled={stato === 'loading'}
        className="bg-[#2E7D32] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1B5E20] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {stato === 'loading' ? 'Invio in corso...' : 'Invia messaggio →'}
      </button>

      <p className="text-xs text-[#AAAAAA] mt-3">
        Inviando accetti che i tuoi dati vengano usati per risponderti. Nessun marketing, nessuna cessione a terzi.
      </p>
    </div>
  )
}
