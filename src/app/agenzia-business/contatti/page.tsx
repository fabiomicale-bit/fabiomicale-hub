import React from "react";
import type { Metadata } from "next";
import AgencyContactForm from "@/components/agency/ContactForm";

export const metadata: Metadata = {
  title: "Contatti Agenzia Business | Richiedi Audit Strategico — Fabio Micale",
  description: "Entra in contatto con noi per analizzare il tuo business e implementare sistemi di acquisizione clienti basati su AI e Performance Marketing.",
};

export default function AgencyContactPage() {
  return (
    <div className="bg-agency-bg text-agency-text selection:bg-agency-accent/10">

      {/* ── HEADER ──────────────────────────────────────────────── */}
      <section className="pt-44 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-agency-accent/5 border border-agency-accent/10 text-agency-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-8 animate-fade-in">
            Contatto Diretto B2B
          </div>
          <h1 className="agency-title text-5xl md:text-7xl mb-8 animate-reveal-up">
            Parliamo di <span className="italic text-agency-accent font-light">Risultati</span>, <br /> 
            non di promesse.
          </h1>
          <p className="agency-text-lead max-w-2xl mx-auto mb-12 animate-reveal-up delay-100">
            Compila il form per richiedere un audit gratuito della tua attuale infrastruttura di acquisizione. Valuteremo la fattibilità dell&apos;integrazione del Sistema Unico nel tuo business.
          </p>
        </div>
      </section>

      {/* ── FORM SECTION ────────────────────────────────────────── */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <AgencyContactForm />
        </div>
      </section>

      {/* ── INFO SECTION ────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-agency-bg-alt border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <h4 className="text-agency-navy font-bold text-xs uppercase tracking-[0.3em] mb-6">Email Diretta</h4>
            <a href="mailto:info@fabiomicale.com" className="text-xl font-serif italic text-agency-accent hover:text-agency-navy transition-colors">
              info@fabiomicale.com
            </a>
          </div>
          <div>
            <h4 className="text-agency-navy font-bold text-xs uppercase tracking-[0.3em] mb-6">Orari Operativi</h4>
            <p className="text-agency-text-muted text-sm font-medium">
              Lunedì — Venerdì <br /> 
              09:00 — 18:30 (CET)
            </p>
          </div>
          <div>
            <h4 className="text-agency-navy font-bold text-xs uppercase tracking-[0.3em] mb-6">Tempo di Risposta</h4>
            <p className="text-agency-text-muted text-sm font-medium italic">
              Entro le 24 ore lavorative <br /> 
              per lead qualificati.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
