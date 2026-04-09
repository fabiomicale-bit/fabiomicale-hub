"use client";

import { useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

const STEPS_TOTAL = 6; // step 0..5

export default function QuestionarioForm() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<FormStatus>("idle");

  // Dati
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [situazione, setSituazione] = useState("");
  const [problema, setProblema] = useState<string[]>([]);
  const [esperienze, setEsperienze] = useState("");
  const [obiettivo, setObiettivo] = useState("");
  const [tempo, setTempo] = useState("");

  const progress = Math.round((step / (STEPS_TOTAL - 1)) * 100);

  const toggleProblema = (val: string) => {
    setProblema((prev) => {
      if (prev.includes(val)) return prev.filter((v) => v !== val);
      if (prev.length >= 2) return prev; // max 2
      return [...prev, val];
    });
  };

  const canNext = () => {
    if (step === 0) return nome.trim() !== "" && email.includes("@");
    if (step === 1) return situazione !== "";
    if (step === 2) return problema.length > 0;
    if (step === 3) return esperienze.trim() !== "";
    if (step === 4) return obiettivo.trim() !== "";
    if (step === 5) return tempo !== "";
    return true;
  };

  const handleSubmit = async () => {
    setStatus("loading");
    try {
      const res = await fetch("/api/questionario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, situazione, problema, esperienze, obiettivo, tempo }),
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

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="btn-gold w-full py-5 text-[10px] tracking-[0.3em] font-bold uppercase shadow-[0_20px_50px_rgba(245,166,35,0.15)]"
      >
        INIZIA L&apos;AUDIT STRATEGICO →
      </button>
    );
  }

  if (status === "success") {
    return (
      <div className="bg-white/[0.02] border border-white/5 rounded-[32px] px-10 py-16 text-center animate-fade-in">
        <div className="text-5xl mb-6">🎯</div>
        <p className="text-2xl font-serif text-white mb-4">Analisi in coda di elaborazione.</p>
        <p className="text-white/40 text-sm leading-relaxed max-w-sm mx-auto font-light">
          Fabio riceverà i tuoi dati e ti risponderà personalmente all&apos;indirizzo <span className="text-[#F5A623] font-bold">{email}</span> entro le prossime 48 ore.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/[0.01] border border-white/5 rounded-[32px] overflow-hidden backdrop-blur-md animate-fade-in">
      {/* Progress bar */}
      <div className="px-8 pt-8 pb-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest">
            Fase {step + 1} di {STEPS_TOTAL}
          </span>
          <span className="text-[10px] text-[#F5A623] font-bold tracking-widest">{progress}% COMPLETATO</span>
        </div>
        <div className="w-full bg-white/5 rounded-full h-1">
          <div
            className="bg-[#F5A623] h-1 rounded-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(245,166,35,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="p-8 md:p-12">
        {/* STEP 0 — Dati di contatto */}
        {step === 0 && (
          <div className="space-y-8">
            <h3 className="text-xl font-serif italic text-white mb-6">Identifichiamo il profilo operativo</h3>
            <div className="grid gap-6">
               <div className="relative group">
                 <label className="block text-[10px] text-white/20 mb-2 font-bold uppercase tracking-widest group-focus-within:text-[#F5A623] transition-colors">Nome Completo *</label>
                 <input
                   type="text"
                   value={nome}
                   onChange={(e) => setNome(e.target.value)}
                   placeholder="Es. Mario Rossi"
                   className="w-full bg-white/[0.03] border border-white/10 focus:border-[#F5A623]/30 text-white placeholder-white/10 px-0 py-3 rounded-none border-t-0 border-x-0 outline-none transition-all text-sm font-light"
                 />
               </div>
               <div className="relative group">
                 <label className="block text-[10px] text-white/20 mb-2 font-bold uppercase tracking-widest group-focus-within:text-[#F5A623] transition-colors">Email Diretta *</label>
                 <input
                   type="email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   placeholder="email@professionale.com"
                   className="w-full bg-white/[0.03] border border-white/10 focus:border-[#F5A623]/30 text-white placeholder-white/10 px-0 py-3 rounded-none border-t-0 border-x-0 outline-none transition-all text-sm font-light"
                 />
               </div>
            </div>
          </div>
        )}

        {/* STEP 1 — Situazione */}
        {step === 1 && (
          <div>
            <h3 className="text-xl font-serif italic text-white mb-8">Qual è la tua attuale configurazione professionale?</h3>
            <div className="grid gap-4">
              {[
                "Libero professionista / Consulente",
                "Imprenditore / Titolare d'azienda",
                "Manager / Dipendente senior",
                "In transizione professionale",
                "Altro",
              ].map((opt) => (
                <label
                  key={opt}
                  className={`flex items-center gap-4 p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    situazione === opt
                      ? "border-[#F5A623]/50 bg-[#F5A623]/5"
                      : "border-white/5 bg-white/[0.02] hover:border-white/20"
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${situazione === opt ? "border-[#F5A623]" : "border-white/20"}`}>
                    {situazione === opt && <div className="w-2 h-2 rounded-full bg-[#F5A623]" />}
                  </div>
                  <input
                    type="radio"
                    name="situazione"
                    value={opt}
                    checked={situazione === opt}
                    onChange={() => setSituazione(opt)}
                    className="sr-only"
                  />
                  <span className="text-sm text-white/70 font-light">{opt}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2 — Problema */}
        {step === 2 && (
          <div>
            <h3 className="text-xl font-serif italic text-white mb-2">Qual è la sfida critica oggi?</h3>
            <p className="text-[10px] text-white/20 mb-8 uppercase tracking-widest font-bold">Scegli al massimo 2 opzioni per l&apos;analisi di precisione.</p>
            <div className="grid gap-4">
              {[
                "Non so come usare l'AI concretamente",
                "Perdo troppo tempo in task ripetitivi",
                "Non riesco a stare al passo con i cambiamenti digitali",
                "Ho paura di diventare obsoleto nel mio settore",
                "Voglio reinventarmi ma non so da dove iniziare",
                "Ho provato l'AI ma non ho ottenuto risultati",
              ].map((opt) => (
                <label
                  key={opt}
                  className={`flex items-center gap-4 p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    problema.includes(opt)
                      ? "border-[#F5A623]/50 bg-[#F5A623]/5"
                      : problema.length >= 2
                      ? "border-white/5 opacity-30 cursor-not-allowed"
                      : "border-white/5 bg-white/[0.02] hover:border-white/20"
                  }`}
                >
                  <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${problema.includes(opt) ? "border-[#F5A623] bg-[#F5A623]" : "border-white/20"}`}>
                    {problema.includes(opt) && <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>}
                  </div>
                  <input
                    type="checkbox"
                    checked={problema.includes(opt)}
                    onChange={() => toggleProblema(opt)}
                    disabled={!problema.includes(opt) && problema.length >= 2}
                    className="sr-only"
                  />
                  <span className="text-sm text-white/70 font-light">{opt}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3 — Esperienze */}
        {step === 3 && (
          <div className="animate-fade-in">
            <h3 className="text-xl font-serif italic text-white mb-2">Analisi dei tentativi precedenti</h3>
            <p className="text-[10px] text-white/20 mb-8 uppercase tracking-widest font-bold">Cosa ha funzionato? Cosa no? Sii specifico.</p>
            <textarea
              value={esperienze}
              onChange={(e) => setEsperienze(e.target.value.slice(0, 500))}
              placeholder="Es. ho provato ChatGPT ma le risposte sono generiche..."
              rows={6}
              className="w-full bg-white/[0.02] border border-white/10 focus:border-[#F5A623]/30 text-white placeholder-white/5 p-6 rounded-2xl outline-none transition-all text-sm font-light resize-none leading-relaxed"
            />
            <div className="text-[9px] text-white/10 text-right mt-3 font-bold tracking-widest uppercase">{esperienze.length}/500 caratteri</div>
          </div>
        )}

        {/* STEP 4 — Obiettivo */}
        {step === 4 && (
          <div className="animate-fade-in">
            <h3 className="text-xl font-serif italic text-white mb-2">Punto di Arrivo (3-6 mesi)</h3>
            <p className="text-[10px] text-white/20 mb-8 uppercase tracking-widest font-bold">Qual è il risultato concreto che validerebbe l&apos;investimento?</p>
            <textarea
              value={obiettivo}
              onChange={(e) => setObiettivo(e.target.value.slice(0, 500))}
              placeholder="Es. automatizzare l'80% della gestione mail e reportistica..."
              rows={6}
              className="w-full bg-white/[0.02] border border-white/10 focus:border-[#F5A623]/30 text-white placeholder-white/5 p-6 rounded-2xl outline-none transition-all text-sm font-light resize-none leading-relaxed"
            />
            <div className="text-[9px] text-white/10 text-right mt-3 font-bold tracking-widest uppercase">{obiettivo.length}/500 caratteri</div>
          </div>
        )}

        {/* STEP 5 — Disponibilità */}
        {step === 5 && (
          <div>
            <h3 className="text-xl font-serif italic text-white mb-8">Risorsa Tempo: disponibilità settimanale per l&apos;implementazione</h3>
            <div className="grid gap-4">
              {[
                "Meno di 1 ora",
                "1-3 ore",
                "3-5 ore",
                "Più di 5 ore",
              ].map((opt) => (
                <label
                  key={opt}
                  className={`flex items-center gap-4 p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    tempo === opt
                      ? "border-[#F5A623]/50 bg-[#F5A623]/5"
                      : "border-white/5 bg-white/[0.02] hover:border-white/20"
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${tempo === opt ? "border-[#F5A623]" : "border-white/20"}`}>
                    {tempo === opt && <div className="w-2 h-2 rounded-full bg-[#F5A623]" />}
                  </div>
                  <input
                    type="radio"
                    name="tempo"
                    value={opt}
                    checked={tempo === opt}
                    onChange={() => setTempo(opt)}
                    className="sr-only"
                  />
                  <span className="text-sm text-white/70 font-light">{opt}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Navigazione */}
        <div className={`flex gap-4 mt-12 ${step > 0 ? "justify-between" : "justify-end"}`}>
          {step > 0 && (
            <button
              onClick={() => setStep((s) => s - 1)}
              className="text-[10px] text-white/40 hover:text-white font-bold uppercase tracking-[0.2em] px-8 py-4 transition-all"
            >
              ← Precedente
            </button>
          )}

          {step < STEPS_TOTAL - 1 ? (
            <button
              onClick={() => setStep((s) => s + 1)}
              disabled={!canNext()}
              className="btn-gold px-10 py-4 text-[10px] font-bold tracking-[0.2em] uppercase disabled:opacity-20 transition-all"
            >
              Prossima Fase →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!canNext() || status === "loading"}
              className="btn-gold px-10 py-4 text-[10px] font-bold tracking-[0.2em] uppercase disabled:opacity-20 shadow-[0_15px_40px_rgba(245,166,35,0.2)]"
            >
              {status === "loading" ? "Elaborazione..." : "INVIA AUDIT STRATEGICO →"}
            </button>
          )}
        </div>

        {status === "error" && (
          <p className="text-red-400 text-[10px] mt-8 text-center font-bold tracking-widest uppercase">
            Errore critico durante l&apos;invio. Riprova o contatta il <a href="mailto:info@fabiomicale.com" className="underline">supporto tecnico</a>.
          </p>
        )}
      </div>
    </div>
  );
}
