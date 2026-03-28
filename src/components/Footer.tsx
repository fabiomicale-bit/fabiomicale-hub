import Link from "next/link";
import Image from "next/image";

const navSections = [
  {
    title: "Esplora",
    links: [
      { label: "Chi sono", href: "/chi-sono" },
      { label: "Il Metodo", href: "/il-metodo" },
      { label: "Il Libro", href: "/il-libro" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Lavora con me",
    links: [
      { label: "Consulenza 1:1", href: "/lavora-con-me" },
      { label: "Servizi AI", href: "/lavora-con-me" },
      { label: "Newsletter", href: "/#newsletter" },
      { label: "Contatti", href: "/contatti" },
    ],
  },
  {
    title: "Connettiti",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/fabiomicale/", external: true },
      { label: "Instagram", href: "https://www.instagram.com/fabiomicale1/", external: true },
      { label: "YouTube", href: "https://www.youtube.com/@FabioMicale", external: true },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contatti" className="bg-[#1A2E1A] border-t border-[#2E7D32]/30 pt-16 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo-fabio-micale.svg" width={40} height={40} alt="Fabio Micale" />
              <span className="font-semibold text-white">Fabio Micale</span>
            </div>
            <p className="text-[#A5D6A7] text-sm leading-relaxed max-w-[240px]">
              Coach, imprenditore, autore. Ti aiuto a reinventarti nell&apos;era AI.
            </p>
            <a
              href="mailto:info@fabiomicale.com"
              className="inline-flex items-center gap-2 text-sm text-[#A5D6A7] hover:text-white mt-4 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              info@fabiomicale.com
            </a>
          </div>

          {/* Nav sections */}
          {navSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-sm font-semibold mb-4 tracking-wide">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#A5D6A7] hover:text-white transition-colors inline-flex items-center gap-1"
                      >
                        {link.label}
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-[#A5D6A7] hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="border-t border-[#2E7D32]/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#A5D6A7]/60 text-sm">
            © {currentYear} Fabio Micale. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-[#A5D6A7]/60 hover:text-[#A5D6A7] text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="/cookie" className="text-[#A5D6A7]/60 hover:text-[#A5D6A7] text-xs transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
