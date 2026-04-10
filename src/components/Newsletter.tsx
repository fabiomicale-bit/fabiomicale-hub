"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [ebookUrl, setEbookUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        setEbookUrl(data.ebookUrl);
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="newsletter" className="relative py-32 px-6 bg-[#0D0D0D] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid opacity-[0.02]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-[#2E7D32] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="card-premium p-10 md:p-16 text-center shadow-2xl">
          
          {/* Section label */}
          <div className="badge mb-8 mx-auto">Accesso Riservato</div>

          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight font-serif text-balance">
            Protocollo della Crescita <br />
            <span className="italic text-[#F5A623]">Strategie per menti libere.</span>
          </h2>
          
          <p className="text-white/40 leading-relaxed mb-12 text-lg max-w-xl mx-auto">
            Ogni mercoledì, ricevi protocolli operativi e analisi strategiche per far evolvere il tuo business. Niente fumo, solo metodo.
          </p>

          {/* Lead Magnet Preview Box */}
          <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 mb-12 flex items-center justify-center gap-6 max-w-lg mx-auto text-left group hover:border-[#F5A623]/20 transition-all duration-300">
            <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">🎁</div>
            <div>
              <p className="text-white font-bold text-sm mb-1 italic">Omaggio immediato:</p>
              <p className="text-white/40 text-xs leading-relaxed uppercase tracking-widest">Manuale d&apos;Azione — Il Metodo Fabio Micale</p>
            </div>
          </div>

          {status === "success" ? (
            <div className="bg-[#2E7D32]/10 border border-[#2E7D32]/20 rounded-2xl p-10 max-w-md mx-auto animate-fade-in">
              <div className="w-16 h-16 bg-[#2E7D32]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#2E7D32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Benvenuto nel Protocollo</h4>
              <p className="text-white/40 text-sm mb-8">Controlla la tua email, il materiale sta arrivando.</p>
              <a
                href={ebookUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full flex justify-center"
              >
                Scarica ora
              </a>
            </div>
          ) : (
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Il tuo indirizzo email migliore"
                    required
                    disabled={status === "loading"}
                    className="w-full bg-white/[0.02] border border-white/10 focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623]/20 text-white placeholder-white/20 px-6 py-4 rounded-xl outline-none transition-all text-base disabled:opacity-60"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-gold w-full justify-center py-4 text-sm tracking-[0.1em]"
                >
                  {status === "loading" ? "Elaborazione..." : "Accedi al Protocollo"}
                </button>
              </form>

              {status === "error" && (
                <p className="text-red-400 text-xs mt-4 animate-fade-in">
                  Qualcosa è andato storto. Contattaci a info@fabiomicale.com
                </p>
              )}
              
              <p className="text-white/20 text-[10px] uppercase tracking-widest mt-8 font-bold">
                Assenza totale di spam · Disiscrizione istantanea
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
