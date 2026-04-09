const points = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Vittima del proprio successo",
    text: "Fatturi, ma non hai più tempo per vivere. Il business ha smesso di essere uno strumento per diventare la tua prigione.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Soffitto di Fatturato",
    text: "Hai raggiunto un limite che non riesci a superare. Senti che manca un sistema scalabile per passare al livello successivo.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0012 18.75c-1.03 0-1.9-.4-2.59-1.177L8.863 17z" />
      </svg>
    ),
    title: "Caos Strategico",
    text: "Manca chiarezza. Corri tutto il giorno a spegnere incendi invece di guidare la visione della tua azienda verso il 2030.",
  },
];

export default function PerChiE() {
  return (
    <section className="relative py-32 px-6 bg-[#141414]">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#F5A623] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="badge mb-6">Profilo Ideale</div>
          <h2 className="text-4xl md:text-5xl font-light text-white leading-tight font-serif">
            Costruito per l&apos;imprenditore <br />
            <span className="italic text-[#F5A623]">che vuole evolvere.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, i) => (
            <div
              key={i}
              className="card-premium group p-10 flex flex-col items-start transition-all duration-500 hover:bg-white/[0.04]"
            >
              {/* Vertical ID */}
              <div className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em] mb-10 border-l border-[#F5A623]/30 pl-4">
                Symptom 0{i + 1}
              </div>

              {/* Icon with subtle glow */}
              <div className="w-16 h-16 rounded-2xl bg-[#F5A623]/5 flex items-center justify-center text-[#F5A623] mb-8 group-hover:scale-110 group-hover:bg-[#F5A623]/10 transition-all duration-500">
                {point.icon}
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#F5A623] transition-colors">{point.title}</h3>
              <p className="text-white/40 leading-relaxed text-base">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
