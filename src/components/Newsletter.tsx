"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Iscrizione Beehiiv in background
      fetch(`https://governarelab.it/?email=${encodeURIComponent(email)}`, {
        method: "GET",
        mode: "no-cors",
      }).catch(() => {});
      setSubmitted(true);
    }
  };

  return (
    <section id="newsletter" className="py-24 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-violet-600/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-blue-600/8 rounded-full blur-[60px]" />
      </div>

      <div className="max-w-2xl mx-auto relative text-center">
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-2xl mx-auto mb-6">
          ✉️
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
          Un Passo Avanti —{" "}
          <span className="gradient-text">la newsletter gratuita</span>
        </h2>
        <p className="text-slate-400 leading-relaxed mb-8 text-lg">
          Ogni mercoledì: mindset, tecnologia e sistemi per professionisti over 40.
        </p>

        {/* Omaggio box */}
        <div className="bg-white/[0.04] border border-violet-500/20 rounded-2xl px-6 py-5 mb-8 flex items-start gap-4 text-left">
          <div className="text-2xl mt-0.5 shrink-0">🎁</div>
          <p className="text-slate-300 text-sm leading-relaxed">
            <span className="text-white font-semibold">Iscriviti gratis e ricevi subito l&apos;ebook:</span>{" "}
            <span className="text-violet-400 font-medium">I 3 Passi per Iniziare con l&apos;AI</span>
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="La tua email"
              required
              className="flex-1 bg-white/[0.05] border border-white/10 focus:border-violet-500/50 text-white placeholder-slate-500 px-5 py-3.5 rounded-xl outline-none transition-colors text-sm"
            />
            <button
              type="submit"
              className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25 text-sm whitespace-nowrap"
            >
              Iscriviti e ricevi l&apos;ebook
            </button>
          </form>
        ) : (
          <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-8 py-5 rounded-2xl max-w-md mx-auto">
            <div className="text-2xl mb-2">✓</div>
            <p className="font-medium">Perfetto! Sei iscritto.</p>
            <p className="text-sm text-emerald-500/80 mt-1 mb-4">Scarica subito il tuo ebook gratuito:</p>
            <a
              href="https://drive.google.com/file/d/1JS-3VRJWN0KplcxaaHFlq3G-HP4f1JpP/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm"
            >
              Scarica subito il tuo ebook gratuito →
            </a>
          </div>
        )}

        <p className="text-slate-600 text-xs mt-4">
          Nessuno spam. Disiscrizione con un click. Privacy garantita.
        </p>
      </div>
    </section>
  );
}
