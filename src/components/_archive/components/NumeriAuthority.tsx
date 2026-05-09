"use client";

import { useEffect, useRef, useState } from "react";

const numeri = [
  { valore: 13, suffisso: "M+", label: "Budget Gestito (€)", descrizione: "Amministrazione risorse ad alto rischio" },
  { valore: 150, suffisso: "+", label: "Cantieri & Progetti", descrizione: "Realizzati come GM/PM sul campo" },
  { valore: 30, suffisso: "+", label: "Appalti Pubblici", descrizione: "Ciclo completo: bando → incasso" },
  { valore: 25, suffisso: "+", label: "Anni di Management", descrizione: "Esperienza operativa reale" },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, start]);

  return count;
}

function CounterCard({ item, index }: { item: typeof numeri[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(item.valore, 2000, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="text-center group"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="mb-4">
        <span className="editorial-number group-hover:text-hub-gold transition-colors duration-700">
          {count}
        </span>
        <span className="text-3xl font-serif text-hub-gold ml-1">{item.suffisso}</span>
      </div>
      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-hub-gold mb-3">{item.label}</p>
      <p className="text-hub-ink-muted text-sm font-light italic max-w-[200px] mx-auto">{item.descrizione}</p>
    </div>
  );
}

export default function NumeriAuthority() {
  return (
    <section className="py-32 px-6 bg-hub-bg-alt relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hub-gold/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="section-label justify-center mb-6">Risultati Concreti</div>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-hub-ink leading-tight">
            I numeri parlano{" "}
            <span className="italic text-hub-gold">da soli.</span>
          </h2>
        </div>

        {/* Counters Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {numeri.map((n, i) => (
            <CounterCard key={i} item={n} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
