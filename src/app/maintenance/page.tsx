import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stiamo rinnovando tutto — Fabio Micale",
  description: "Il sito è temporaneamente in aggiornamento. Torno presto con qualcosa di nuovo.",
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-[#111111] flex flex-col items-center justify-center px-6 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#2E7D32]/10 blur-[120px] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-xl w-full text-center">

        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] flex items-center justify-center text-white font-bold text-sm">
            FM
          </div>
          <span className="text-white font-semibold text-lg tracking-wide">Fabio Micale</span>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#2E7D32]/10 border border-[#2E7D32]/20 text-[#2E7D32] text-xs font-medium px-4 py-2 rounded-full mb-8 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32] animate-pulse" />
          Rinnovamento in corso
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
          Sto riprogettando il futuro della{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #F5A623 0%, #D4AF37 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            tua impresa.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-slate-400 leading-relaxed mb-12">
          Fabio Micale — Advisor in Sistemi Operativi & AI.
          <br />
          Il nuovo Hub per scalare fatturato e organizzazione attraverso l&apos;intelligenza applicata è in arrivo.
        </p>

        {/* Divider */}
        <div className="w-16 h-px bg-white/10 mx-auto mb-10" />

        {/* Contact */}
        <p className="text-slate-500 text-sm mb-3">
          Hai urgenza di contattarmi?
        </p>
        <a
          href="mailto:info@fabiomicale.com"
          className="inline-flex items-center gap-2 text-[#F5A623] hover:text-[#D4AF37] font-medium text-base transition-colors group"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="group-hover:underline underline-offset-4">info@fabiomicale.com</span>
        </a>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 text-slate-700 text-xs">
        © 2026 Fabio Micale — Metodologo della Crescita
      </div>
    </main>
  );
}
