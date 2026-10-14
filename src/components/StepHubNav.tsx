import Link from "next/link";
import { stepHubs, type StepHubKey } from "@/content/step-hubs";

// Navigazione fra i tre archivi dei Passi, in fondo a ogni pagina hub.
export default function StepHubNav({ current }: { current: StepHubKey }) {
  return (
    <nav aria-label="Archivi dei tre Passi" className="px-6 pb-24">
      <div className="max-w-6xl mx-auto border-t border-hub-border pt-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-hub-gold mb-6">
          Gli altri Passi del Metodo
        </p>
        <ul className="flex flex-col md:flex-row gap-4 md:gap-10">
          {(Object.keys(stepHubs) as StepHubKey[])
            .filter((key) => key !== current)
            .map((key) => (
              <li key={key}>
                <Link
                  href={stepHubs[key].href}
                  className="text-hub-ink text-sm font-medium underline underline-offset-4 hover:text-hub-gold transition-colors"
                >
                  {stepHubs[key].label}
                </Link>
              </li>
            ))}
          <li>
            <Link
              href="/il-metodo"
              className="text-hub-ink text-sm font-medium underline underline-offset-4 hover:text-hub-gold transition-colors"
            >
              Il Metodo Successo in 3 Passi
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
