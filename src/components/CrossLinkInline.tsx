import Link from "next/link";

export default function CrossLinkInline() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-4">
      <p className="text-sm text-hub-ink-muted font-light italic">
        Non sei sicuro che questo sia il tuo problema principale?{" "}
        <Link
          href="/#metodo"
          className="text-hub-gold hover:text-hub-gold-dark underline underline-offset-2 transition-colors not-italic font-medium"
        >
          Torna alla diagnosi dei 3 Passi →
        </Link>
      </p>
    </div>
  );
}
