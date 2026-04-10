"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function Newsletter() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [ebookUrl, setEbookUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, utm_source: "newsletter_footer" }),
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
            Manuale PuntoZero™ <br />
            <span className="italic text-[#F5A623]">Il Reset Strategico.</span>
          </h2>
          
          <p className="text-white/40 leading-relaxed mb-12 text-lg max-w-xl mx-auto">
            Ricevi la REV.0.1 del manuale per il reset e la sequenza email &ldquo;Il Porto&rdquo;. Strategie reali per professionisti che hanno smesso di credere all&apos;hype.
          </p>


          {status === "success" ? (
            <div className="bg-[#F5A623]/5 border border-[#F5A623]/10 rounded-2xl p-10 max-w-md mx-auto animate-fade-in shadow-2xl">
              <div className="text-4xl mb-6">🗝️</div>
              <h4 className="text-xl font-bold text-white mb-2 italic font-serif">Benvenuto nel Porto, {nome}.</h4>
              <p className="text-white/40 text-sm italic">Accesso autorizzato. Riceverai presto le prime riflessioni strategiche.</p>
            </div>
          ) : (
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Il tuo nome *"
                  required
                  disabled={status === "loading"}
                  className="w-full bg-white/[0.02] border border-white/10 focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623]/20 text-white placeholder-white/20 px-6 py-4 rounded-xl outline-none transition-all text-base disabled:opacity-60 font-light"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="La tua email migliore *"
                  required
                  disabled={status === "loading"}
                  className="w-full bg-white/[0.02] border border-white/10 focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623]/20 text-white placeholder-white/20 px-6 py-4 rounded-xl outline-none transition-all text-base disabled:opacity-60 font-light"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-gold w-full justify-center py-5 text-xs tracking-[0.2em] font-bold uppercase transition-all"
                >
                  {status === "loading" ? "Elaborazione..." : "Scarica il Manuale"}
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
