const navSections = [
  {
    title: "Esplora",
    links: [
      { label: "Chi sono", href: "#chi-sono" },
      { label: "Come posso aiutarti", href: "#come-aiuto" },
      { label: "Il libro", href: "#libro" },
      { label: "Corsi e Masterclass", href: "#corsi" },
    ],
  },
  {
    title: "Lavora con me",
    links: [
      { label: "Consulenza 1:1", href: "#consulenza" },
      { label: "Servizi AI", href: "#servizi-ai" },
      { label: "Newsletter", href: "#newsletter" },
      { label: "Contatti", href: "#contatti" },
    ],
  },
  {
    title: "Connettiti",
    links: [
      { label: "LinkedIn", href: "https://linkedin.com/in/fabiomicale", external: true },
      { label: "Instagram", href: "https://instagram.com/fabiomicale", external: true },
      { label: "YouTube", href: "https://youtube.com/@fabiomicale", external: true },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contatti" className="border-t border-white/[0.06] pt-16 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm">
                FM
              </div>
              <span className="font-semibold text-white">Fabio Micale</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-[240px]">
              Coach, imprenditore, autore. Ti aiuto a reinventarti nell&apos;era AI.
            </p>
            <a
              href="mailto:ciao@fabiomicale.com"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white mt-4 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              ciao@fabiomicale.com
            </a>
          </div>

          {/* Nav sections */}
          {navSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-sm font-semibold mb-4 tracking-wide">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={"external" in link && link.external ? "_blank" : undefined}
                      rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-slate-500 hover:text-slate-300 transition-colors inline-flex items-center gap-1"
                    >
                      {link.label}
                      {"external" in link && link.external && (
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © {currentYear} Fabio Micale. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="/cookie" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
