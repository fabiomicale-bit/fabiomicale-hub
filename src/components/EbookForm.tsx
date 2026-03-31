"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const EBOOK_URL =
  "https://drive.google.com/file/d/1JS-3VRJWN0KplcxaaHFlq3G-HP4f1JpP/view?usp=sharing";

export default function EbookForm() {
  const [email, setEmail] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  const canSubmit = email.includes("@") && privacy;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, utm_source: "risorse_ebook" }),
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
      <div className="bg-[#E8F5E9] border border-[#E5E5E5] rounded-xl px-5 py-5 text-center">
        <div className="text-2xl mb-2">✅</div>
        <p className="text-[#111111] font-semibold text-sm mb-3">
          Iscritto! Scarica subito l&apos;ebook:
        </p>
        <a
          href={EBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#F5A623] hover:bg-[#E6951A] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all"
        >
          Scarica gratis →
        </a>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="La tua email *"
          required
          disabled={status === "loading"}
          className="w-full border border-[#E5E5E5] focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/20 text-[#111111] placeholder-[#AAAAAA] px-4 py-3 rounded-xl outline-none transition-colors text-sm disabled:opacity-60"
        />

        {/* Checkbox privacy */}
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={privacy}
            onChange={(e) => setPrivacy(e.target.checked)}
            disabled={status === "loading"}
            className="mt-0.5 w-4 h-4 accent-[#2E7D32] shrink-0 disabled:opacity-60"
          />
          <span className="text-xs text-[#555555] leading-relaxed">
            Accetto la{" "}
            <a
              href="/contatti"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#2E7D32] transition-colors"
            >
              Privacy Policy
            </a>{" "}
            e il trattamento dei miei dati. Nessuno spam, cancellazione in un click.
          </span>
        </label>

        <button
          type="submit"
          disabled={!canSubmit || status === "loading"}
          className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold px-6 py-3 rounded-xl transition-all text-sm disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Invio in corso..." : "Scarica gratis →"}
        </button>
      </form>

      {status === "error" && (
        <p className="text-red-600 text-xs mt-2">
          Errore. Riprova o scrivi a{" "}
          <a href="mailto:info@fabiomicale.com" className="underline">
            info@fabiomicale.com
          </a>
        </p>
      )}

      <p className="text-xs text-[#555555]/60 mt-2 text-center">
        Gratis per sempre. Nessuno spam.
      </p>
    </>
  );
}
