"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const EBOOK_URL =
  "https://drive.google.com/file/d/1JS-3VRJWN0KplcxaaHFlq3G-HP4f1JpP/view?usp=sharing";

export default function EbookForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  const canSubmit = nome.length > 1 && email.includes("@") && privacy;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, utm_source: "risorse_ebook" }),
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

  if (status === "success") {
    return (
      <div className="bg-[#F5A623]/5 border border-[#F5A623]/20 rounded-2xl px-8 py-12 text-center animate-fade-in shadow-2xl">
        <div className="text-5xl mb-6">🗝️</div>
        <p className="text-white font-serif italic text-xl mb-6 leading-relaxed">
          Accesso Autorizzato. <br />
          <span className="text-white/40 text-sm not-italic font-sans">La Soglia è aperta. Controlla la tua email, {nome}.</span>
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="space-y-4">
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Il tuo nome *"
            required
            disabled={status === "loading"}
            className="w-full bg-white/[0.03] border border-white/10 focus:border-[#F5A623]/50 focus:ring-4 focus:ring-[#F5A623]/5 text-white placeholder-white/20 px-5 py-4 rounded-xl outline-none transition-all text-sm disabled:opacity-50 font-light"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="La tua email migliore *"
            required
            disabled={status === "loading"}
            className="w-full bg-white/[0.03] border border-white/10 focus:border-[#F5A623]/50 focus:ring-4 focus:ring-[#F5A623]/5 text-white placeholder-white/20 px-5 py-4 rounded-xl outline-none transition-all text-sm disabled:opacity-50 font-light"
          />
        </div>

        {/* Checkbox privacy */}
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative mt-1">
            <input
              type="checkbox"
              checked={privacy}
              onChange={(e) => setPrivacy(e.target.checked)}
              disabled={status === "loading"}
              className="peer sr-only"
            />
            <div className="w-5 h-5 border border-white/20 rounded-md bg-white/[0.02] peer-checked:bg-[#F5A623] peer-checked:border-[#F5A623] transition-all flex items-center justify-center">
              <svg className="w-3 h-3 text-black opacity-0 peer-checked:opacity-100" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <span className="text-[11px] text-white/30 leading-relaxed group-hover:text-white/50 transition-colors">
            Accetto la{" "}
            <a
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#F5A623] transition-colors"
            >
              Privacy Policy
            </a>{" "}
            per l&apos;invio di materiale strategico. Nessuno spam, solo valore.
          </span>
        </label>

        <button
          type="submit"
          disabled={!canSubmit || status === "loading"}
          className="btn-gold w-full py-5 text-[10px] tracking-[0.2em] font-bold uppercase transition-all disabled:opacity-30 disabled:grayscale"
        >
          {status === "loading" ? "Elaborazione..." : "Accedi allo Zero"}
        </button>
        <p className="text-[9px] text-white/20 mt-2 text-center uppercase tracking-[0.2em] font-bold">
          Oltre 1.500 utenti hanno già attraversato la soglia
        </p>
      </form>
    </div>
  );
}
