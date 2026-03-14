const points = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    text: "Senti che il mercato sta cambiando troppo velocemente e hai paura di restare indietro",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    text: "Hai esperienza e competenze ma non sai come valorizzarle nel nuovo mondo del lavoro",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    text: "Cerchi una guida concreta — non teorie, non promesse vuote — per reinventarti con l'AI",
  },
];

export default function PerChiE() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-blue-500" />
          <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Per chi è</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-16 leading-tight">
          Questo spazio è per te se<span className="text-blue-400">...</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {points.map((point, i) => (
            <div
              key={i}
              className="card-glow group relative bg-white/[0.03] hover:bg-white/[0.06] border border-white/8 hover:border-blue-500/30 rounded-2xl p-8 transition-all duration-300"
            >
              {/* Number */}
              <div className="absolute top-6 right-6 text-5xl font-bold text-white/[0.04] select-none">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500/15 transition-colors">
                {point.icon}
              </div>

              {/* Text */}
              <p className="text-slate-300 leading-relaxed text-[1.05rem]">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
