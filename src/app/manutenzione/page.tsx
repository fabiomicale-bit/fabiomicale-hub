"use client";

// Modalità manutenzione temporanea — rimuovere quando form/Beehiiv/Resend sono riallineati.
export default function MaintenancePage() {
    return (
        <div className="min-h-screen bg-dark-bg text-white flex flex-col items-center justify-center p-8 font-sans">
            <div className="max-w-md w-full text-center space-y-8">

                {/* Brand */}
                <div className="space-y-2">
                    <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-gray-500">
                        Fabio Micale
                    </h2>
                    <div className="h-[1px] w-12 bg-white/20 mx-auto"></div>
                </div>

                {/* Titolo */}
                <div className="space-y-4">
                    <h1 className="text-3xl font-extrabold tracking-tight">
                        Sito in aggiornamento operativo
                    </h1>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Stiamo aggiornando i percorsi di iscrizione, newsletter e download
                        dell&apos;estratto gratuito. Il sito tornerà online appena completati
                        i controlli.
                    </p>
                </div>

                {/* Firma */}
                <div className="pt-6 border-t border-white/10">
                    <p className="text-xs text-gray-600 tracking-widest uppercase">
                        Fabio Micale
                    </p>
                </div>

                {/* Indicatore visivo */}
                <div className="pt-4">
                    <div className="inline-flex items-center space-x-2 text-[10px] font-medium tracking-widest text-gray-600 uppercase">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/20 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white/40"></span>
                        </span>
                        <span>Aggiornamento in corso</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
