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
    <section id="newsletter" className="py-24 px-6 bg-[#F7F7F7]">
      <div className="max-w-2xl mx-auto text-center">
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-[#E8F5E9] border border-[#E5E5E5] flex items-center justify-center text-2xl mx-auto mb-6">
          ✉️
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-[#111111] mb-4 leading-tight">
          Un Passo Avanti —{" "}
          <span className="gradient-text">la newsletter gratuita</span>
        </h2>
        <p className="text-[#555555] leading-relaxed mb-8 text-lg">
          Ogni mercoledì: mindset, tecnologia e sistemi per professionisti over 40.
        </p>

        {/* Omaggio box */}
        <div className="bg-white border border-[#E5E5E5] rounded-2xl px-6 py-5 mb-8 flex items-start gap-4 text-left shadow-sm">
          <div className="text-2xl mt-0.5 shrink-0">🎁</div>
          <p className="text-[#555555] text-sm leading-relaxed">
            <span className="text-[#111111] font-semibold">Iscriviti gratis e ricevi subito l&apos;ebook:</span>{" "}
            <span className="text-[#2E7D32] font-medium">I 3 Passi per Iniziare con l&apos;AI</span>
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-[#E8F5E9] border border-[#E5E5E5] rounded-2xl px-8 py-8 max-w-md mx-auto">
            <div className="text-3xl mb-3">✅</div>
            <p className="text-[#111111] font-bold text-xl mb-2">Sei dentro!</p>
            <p className="text-[#555555] text-sm mb-6 leading-relaxed">
              La tua prima newsletter arriva mercoledì alle 9:00.<br />
              Intanto, scarica subito il tuo ebook gratuito:
            </p>
            <a
              href={ebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 text-sm text-white hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: "#F9A825" }}
            >
              Scarica &ldquo;I 3 Passi per Iniziare con l&apos;AI&rdquo; →
            </a>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="La tua email"
                required
                disabled={status === "loading"}
                className="flex-1 bg-white border border-[#E5E5E5] focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/20 text-[#111111] placeholder-[#5A6B5A] px-5 py-3.5 rounded-xl outline-none transition-colors text-sm disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#2E7D32]/25 text-sm whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Iscrizione in corso..." : "Iscriviti e ricevi l\u2019ebook"}
              </button>
            </form>

            {status === "error" && (
              <p className="text-red-600 text-sm mt-3">
                Ops, qualcosa non ha funzionato. Riprova o scrivi a{" "}
                <a href="mailto:info@fabiomicale.com" className="underline">
                  info@fabiomicale.com
                </a>
              </p>
            )}
          </>
        )}

        <p className="text-[#555555]/60 text-xs mt-4">
          Nessuno spam. Disiscrizione con un click. Privacy garantita.
        </p>
      </div>
    </section>
  );
}
