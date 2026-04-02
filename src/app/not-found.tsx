import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pagina non trovata | Fabio Micale',
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#111111] flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <div className="text-[#F5A623] font-mono text-6xl font-bold mb-4">404</div>
        <h1 className="text-white text-3xl font-serif mb-4">
          Questa pagina non esiste più.
        </h1>
        <p className="text-[#AAAAAA] text-lg mb-8">
          Potrebbe essere stata spostata o rimossa.
          Torna alla homepage per trovare quello che cerchi.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#2E7D32] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1B5E20] transition-colors"
        >
          Torna alla homepage →
        </Link>
        <div className="mt-6">
          <Link href="/risorse" className="text-[#2E7D32] hover:underline text-sm">
            Oppure scopri le risorse gratuite
          </Link>
        </div>
      </div>
    </main>
  )
}
