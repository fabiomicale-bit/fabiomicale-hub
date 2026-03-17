"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.open(
        `https://governarelab.it/?email=${encodeURIComponent(email)}`,
        "_blank",
        "noopener,noreferrer"
      );
      setSubmitted(true);
    }
  };

  return (
    <section id="newsletter" className="py-24 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/8 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-2xl mx-auto relative text-center">
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-2xl mx-auto mb-6">
          ✉️
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
          La newsletter che ti tiene{" "}
          <span className="gradient-text">un passo avanti</span>
        </h2>
        <p className="text-slate-400 leading-relaxed mb-10 text-lg">
          Ogni settimana: strategie concrete, strumenti AI selezionati, riflessioni dirette.
          Solo per professionisti over 40 che vogliono fare sul serio. Gratis.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="La tua email"
              required
              className="flex-1 bg-white/[0.05] border border-white/10 focus:border-blue-500/50 text-white placeholder-slate-500 px-5 py-3.5 rounded-xl outline-none transition-colors text-sm"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 text-sm whitespace-nowrap"
            >
              Iscriviti gratis
            </button>
          </form>
        ) : (
          <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-8 py-5 rounded-2xl max-w-md mx-auto">
            <div className="text-2xl mb-2">✓</div>
            <p className="font-medium">Perfetto! Ti ho iscritto.</p>
            <p className="text-sm text-emerald-500/80 mt-1">Controlla la tua email per confermare.</p>
          </div>
        )}

        <p className="text-slate-600 text-xs mt-4">
          Nessuno spam. Disiscrizione con un click. Privacy garantita.
        </p>
      </div>
    </section>
  );
}
