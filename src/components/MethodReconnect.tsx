interface MethodReconnectProps {
  step: 1 | 2 | "3A" | "3B";
  domain: string;
}

export default function MethodReconnect({ step, domain }: MethodReconnectProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="border-l-2 border-hub-gold pl-6 py-1 max-w-2xl">
        <p className="text-sm font-serif text-hub-ink-muted leading-relaxed">
          Questo è il{" "}
          <strong className="text-hub-ink font-semibold">
            Metodo Successo in 3 Passi
          </strong>{" "}
          applicato {domain}.{" "}
          <span className="text-hub-ink-light">
            [{step === "3A" || step === "3B" ? `Passo ${step}` : `Passo ${step}`}]
          </span>
        </p>
      </div>
    </div>
  );
}
