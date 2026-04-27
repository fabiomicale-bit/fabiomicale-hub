"use client";

import React, { useState } from "react";

type Status = "idle" | "open" | "loading" | "success" | "error";

const CAPITOLO_URL =
  "https://drive.google.com/file/d/1_68po3qufRO90yVx1tbFORMRzs3UUip9/view?usp=sharing";

export default function CapitoloForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [sitoweb, setSitoweb] = useState("");
  const [privacy, setPrivacy] = useState(false);

  const canSubmit =
    nome.trim() !== "" && cognome.trim() !== "" && email.includes("@") && telefono.trim() !== "" && privacy;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          cognome,
          email,
          telefono,
          sitoweb,
          utm_source: "capitolo1",
          utm_medium: "organic",
          notify: "capitolo1",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  /* ── STATO 1: solo bottone ─────────────────────────────────────── */
  if (status === "idle") {
    return (
      <button
        onClick={() => setStatus("open")}
        className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white font-medium px-7 py-4 rounded-xl transition-all duration-200 text-base"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Scarica il Capitolo 1 gratis →
      </button>
    );
  }

  /* ── STATO 3: successo ─────────────────────────────────────────── */
  if (status === "success") {
    return (
      <div className="bg-white/10 border border-white/20 rounded-2xl px-7 py-6 text-center max-w-md">
        <div className="text-3xl mb-3">✅</div>
        <p className="text-white font-semibold text-base mb-4">
          Eccolo! Clicca qui sotto per scaricare il Capitolo 1.
        </p>
        <a
          href={CAPITOLO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold px-6 py-3 rounded-xl transition-all text-sm"
        >
          📄 Scarica il Capitolo 1 →
        </a>
        <p className="text-[#AAAAAA] text-xs mt-4">
          Controlla anche la tua email — ti ho mandato il link per ritrovarlo sempre.
        </p>
      </div>
    );
  }

  /* ── STATI 2 + 4: form (open / loading / error) ────────────────── */
  return (
    <div className="bg-white/10 border border-white/20 rounded-2xl px-7 py-6 max-w-md text-left">
      <p className="text-white font-semibold text-sm mb-4">
        Dove ti mando il link?
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome *"
            required
            disabled={status === "loading"}
            className="w-full bg-white/10 border border-white/20 focus:border-white/50 focus:ring-2 focus:ring-white/10 text-white placeholder-white/40 px-4 py-3 rounded-xl outline-none transition-colors text-sm disabled:opacity-60"
          />
          <input
            type="text"
            value={cognome}
            onChange={(e) => setCognome(e.target.value)}
            placeholder="Cognome *"
            required
            disabled={status === "loading"}
            className="w-full bg-white/10 border border-white/20 focus:border-white/50 focus:ring-2 focus:ring-white/10 text-white placeholder-white/40 px-4 py-3 rounded-xl outline-none transition-colors text-sm disabled:opacity-60"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email *"
            required
            disabled={status === "loading"}
            className="w-full bg-white/10 border border-white/20 focus:border-white/50 focus:ring-2 focus:ring-white/10 text-white placeholder-white/40 px-4 py-3 rounded-xl outline-none transition-colors text-sm disabled:opacity-60"
          />
          <input
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="Telefono *"
            required
            disabled={status === "loading"}
            className="w-full bg-white/10 border border-white/20 focus:border-white/50 focus:ring-2 focus:ring-white/10 text-white placeholder-white/40 px-4 py-3 rounded-xl outline-none transition-colors text-sm disabled:opacity-60"
          />
        </div>

        <input
          type="url"
          value={sitoweb}
          onChange={(e) => setSitoweb(e.target.value)}
          placeholder="Sito Web (opzionale)"
          disabled={status === "loading"}
          className="w-full bg-white/10 border border-white/20 focus:border-white/50 focus:ring-2 focus:ring-white/10 text-white placeholder-white/40 px-4 py-3 rounded-xl outline-none transition-colors text-sm disabled:opacity-60"
        />

        {/* Checkbox privacy */}
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={privacy}
            onChange={(e) => setPrivacy(e.target.checked)}
            disabled={status === "loading"}
            className="mt-0.5 w-4 h-4 accent-[#2E7D32] shrink-0 disabled:opacity-60"
          />
          <span className="text-xs text-white/70 leading-relaxed">
            Accetto la{" "}
            <a
              href="/contatti"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              Privacy Policy
            </a>{" "}
            e il trattamento dei dati personali. *
          </span>
        </label>

        <button
          type="submit"
          disabled={!canSubmit || status === "loading"}
          className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold px-6 py-3 rounded-xl transition-all text-sm disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Invio in corso..." : "Invia e scarica →"}
        </button>
      </form>


      {status === "error" && (
        <p className="text-red-400 text-xs mt-3">
          Errore nell&apos;invio. Riprova o scrivi a{" "}
          <a href="mailto:info@fabiomicale.com" className="underline">
            info@fabiomicale.com
          </a>
        </p>
      )}
    </div>
  );
}
