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
        className="w-full bg-[#111111] hover:bg-[#222222] text-white font-semibold px-6 py-4 rounded-xl transition-all duration-200 hover:shadow-lg text-sm"
      >
        Compila il questionario gratuito →
      </button>
    );
  }

  if (status === "success") {
    return (
      <div className="bg-[#E8F5E9] border border-[#E5E5E5] rounded-2xl px-6 py-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <p className="text-[#111111] font-bold text-lg mb-2">Questionario inviato!</p>
        <p className="text-[#555555] text-sm leading-relaxed">
          Fabio risponderà entro 48 ore a{" "}
          <span className="font-semibold text-[#2E7D32]">{email}</span>
        </p>
      </div>
    );
  }

  return (
    <div className="border border-[#E5E5E5] rounded-2xl overflow-hidden">
      {/* Progress bar */}
      <div className="bg-[#F7F7F7] px-5 py-3 border-b border-[#E5E5E5]">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-[#555555] font-medium">
            Step {step + 1} di {STEPS_TOTAL}
          </span>
          <span className="text-xs text-[#2E7D32] font-semibold">{progress}%</span>
        </div>
        <div className="w-full bg-[#E5E5E5] rounded-full h-1.5">
          <div
            className="bg-[#2E7D32] h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="p-5">
        {/* STEP 0 — Dati di contatto */}
        {step === 0 && (
          <div className="space-y-4">
            <p className="text-sm font-semibold text-[#111111] mb-3">Come ti chiami?</p>
            <div>
              <label className="block text-xs text-[#555555] mb-1 font-medium">Nome *</label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Il tuo nome"
                className="w-full border border-[#E5E5E5] focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/20 text-[#111111] placeholder-[#AAAAAA] px-4 py-3 rounded-xl outline-none transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-[#555555] mb-1 font-medium">
                Email * <span className="font-normal">(dove riceverai la tua analisi)</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="La tua email"
                className="w-full border border-[#E5E5E5] focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/20 text-[#111111] placeholder-[#AAAAAA] px-4 py-3 rounded-xl outline-none transition-colors text-sm"
              />
            </div>
          </div>
        )}

        {/* STEP 1 — Situazione */}
        {step === 1 && (
          <div>
            <p className="text-sm font-semibold text-[#111111] mb-4">
              Qual è la tua situazione professionale?
            </p>
            <div className="space-y-2">
              {[
                "Libero professionista / Consulente",
                "Imprenditore / Titolare d'azienda",
                "Manager / Dipendente senior",
                "In transizione professionale",
                "Altro",
              ].map((opt) => (
                <label
                  key={opt}
                  className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                    situazione === opt
                      ? "border-[#2E7D32] bg-[#E8F5E9]"
                      : "border-[#E5E5E5] hover:border-[#2E7D32]/40"
                  }`}
                >
                  <input
                    type="radio"
                    name="situazione"
                    value={opt}
                    checked={situazione === opt}
                    onChange={() => setSituazione(opt)}
                    className="accent-[#2E7D32]"
                  />
                  <span className="text-sm text-[#111111]">{opt}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2 — Problema */}
        {step === 2 && (
          <div>
            <p className="text-sm font-semibold text-[#111111] mb-1">
              Qual è la sfida più grande che stai affrontando?
            </p>
            <p className="text-xs text-[#555555] mb-4">Scegli al massimo 2 opzioni.</p>
            <div className="space-y-2">
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
                  className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                    problema.includes(opt)
                      ? "border-[#2E7D32] bg-[#E8F5E9]"
                      : problema.length >= 2
                      ? "border-[#E5E5E5] opacity-50 cursor-not-allowed"
                      : "border-[#E5E5E5] hover:border-[#2E7D32]/40"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={problema.includes(opt)}
                    onChange={() => toggleProblema(opt)}
                    disabled={!problema.includes(opt) && problema.length >= 2}
                    className="accent-[#2E7D32]"
                  />
                  <span className="text-sm text-[#111111]">{opt}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3 — Esperienze */}
        {step === 3 && (
          <div>
            <p className="text-sm font-semibold text-[#111111] mb-1">
              Hai già provato qualcosa per risolvere questo problema?
            </p>
            <p className="text-xs text-[#555555] mb-3">
              Cosa ha funzionato? Cosa no?
            </p>
            <textarea
              value={esperienze}
              onChange={(e) => setEsperienze(e.target.value.slice(0, 500))}
              placeholder="Es. ho fatto un corso online, ho provato ChatGPT, ho letto libri..."
              rows={5}
              className="w-full border border-[#E5E5E5] focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/20 text-[#111111] placeholder-[#AAAAAA] px-4 py-3 rounded-xl outline-none transition-colors text-sm resize-none"
            />
            <p className="text-xs text-[#AAAAAA] text-right mt-1">{esperienze.length}/500</p>
          </div>
        )}

        {/* STEP 4 — Obiettivo */}
        {step === 4 && (
          <div>
            <p className="text-sm font-semibold text-[#111111] mb-1">
              Cosa vorresti ottenere nei prossimi 3–6 mesi?
            </p>
            <p className="text-xs text-[#555555] mb-3">
              Descrivi il risultato concreto che vuoi raggiungere.
            </p>
            <textarea
              value={obiettivo}
              onChange={(e) => setObiettivo(e.target.value.slice(0, 500))}
              placeholder="Es. risparmiare 5 ore a settimana, trovare nuovi clienti, cambiare settore..."
              rows={5}
              className="w-full border border-[#E5E5E5] focus:border-[#2E7D32] focus:ring-2 focus:ring-[#2E7D32]/20 text-[#111111] placeholder-[#AAAAAA] px-4 py-3 rounded-xl outline-none transition-colors text-sm resize-none"
            />
            <p className="text-xs text-[#AAAAAA] text-right mt-1">{obiettivo.length}/500</p>
          </div>
        )}

        {/* STEP 5 — Disponibilità */}
        {step === 5 && (
          <div>
            <p className="text-sm font-semibold text-[#111111] mb-4">
              Quanto tempo puoi dedicare ogni settimana a migliorare questa situazione?
            </p>
            <div className="space-y-2">
              {[
                "Meno di 1 ora",
                "1-3 ore",
                "3-5 ore",
                "Più di 5 ore",
              ].map((opt) => (
                <label
                  key={opt}
                  className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                    tempo === opt
                      ? "border-[#2E7D32] bg-[#E8F5E9]"
                      : "border-[#E5E5E5] hover:border-[#2E7D32]/40"
                  }`}
                >
                  <input
                    type="radio"
                    name="tempo"
                    value={opt}
                    checked={tempo === opt}
                    onChange={() => setTempo(opt)}
                    className="accent-[#2E7D32]"
                  />
                  <span className="text-sm text-[#111111]">{opt}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Navigazione */}
        <div className={`flex gap-3 mt-5 ${step > 0 ? "justify-between" : "justify-end"}`}>
          {step > 0 && (
            <button
              onClick={() => setStep((s) => s - 1)}
              className="text-sm text-[#555555] hover:text-[#111111] font-medium px-4 py-2 rounded-xl border border-[#E5E5E5] hover:border-[#111111] transition-all"
            >
              ← Indietro
            </button>
          )}

          {step < STEPS_TOTAL - 1 ? (
            <button
              onClick={() => setStep((s) => s + 1)}
              disabled={!canNext()}
              className="text-sm bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold px-6 py-2.5 rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Avanti →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!canNext() || status === "loading"}
              className="text-sm bg-[#111111] hover:bg-[#222222] text-white font-semibold px-6 py-2.5 rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Invio in corso..." : "Invia e ricevi la tua analisi →"}
            </button>
          )}
        </div>

        {status === "error" && (
          <p className="text-red-600 text-xs mt-3 text-center">
            Errore nell&apos;invio. Riprova o scrivi a{" "}
            <a href="mailto:info@fabiomicale.com" className="underline">
              info@fabiomicale.com
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
