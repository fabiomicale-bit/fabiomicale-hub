"use client";

import React, { useEffect, useState } from 'react';

export default function MaintenancePage() {
    const [status, setStatus] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStatus(prev => (prev < 100 ? prev + 1 : 100));
        }, 150);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative min-h-screen bg-[#020205] text-white flex flex-col items-center justify-center overflow-hidden font-sans">
            {/* Background Image with Overlay */}
            <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ 
                    backgroundImage: 'url("/reset-bg.png")', 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center' 
                }}
            />
            
            {/* Scanlines Effect */}
            <div className="absolute inset-0 pointer-events-none z-10" 
                 style={{ 
                    background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03))',
                    backgroundSize: '100% 4px, 4px 100%' 
                 }} 
            />

            <div className="relative z-20 max-w-4xl px-8 text-center">
                <div className="mb-8 inline-block px-4 py-1 border border-[#00f0ff]/30 rounded-full text-[#00f0ff] text-xs font-bold tracking-[0.3em] uppercase animate-pulse">
                    System Protocol: Strategic Reset
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter leading-none">
                    STIAMO FERMANDO IL <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#8a2be2]">CAOS.</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Il sito fabiomicale.com è in fase di riconfigurazione totale. <br/>
                    Stiamo iniettando l'<b>Ingegneria dell'Assenza</b> per trasformare il rumore operativo in dominio sistemico.
                </p>

                {/* Progress Bar Container */}
                <div className="w-full max-w-md mx-auto bg-gray-900 h-2 rounded-full mb-4 relative overflow-hidden border border-white/5">
                    <div 
                        className="h-full bg-gradient-to-r from-[#00f0ff] to-[#8a2be2] transition-all duration-300 ease-out"
                        style={{ width: `${status}%` }}
                    />
                </div>
                
                <div className="flex justify-between max-w-md mx-auto text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                    <span>Inizializzazione Asset</span>
                    <span>{status}%</span>
                    <span>Dominio Attivo</span>
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-white/10 pt-12">
                    <div>
                        <div className="text-[#00f0ff] font-bold mb-2">01. DIAGNOSI</div>
                        <p className="text-xs text-gray-500">Analisi spietata dei colli di bottiglia e dei blocchi alla crescita.</p>
                    </div>
                    <div>
                        <div className="text-[#00f0ff] font-bold mb-2">02. INNESTO</div>
                        <p className="text-xs text-gray-500">Installazione dei protocolli agentici per la libertà professionale.</p>
                    </div>
                    <div>
                        <div className="text-[#00f0ff] font-bold mb-2">03. DOMINIO</div>
                        <p className="text-xs text-gray-500">Ritorno online con un'architettura pronta a scalare senza di te.</p>
                    </div>
                </div>
            </div>

            {/* Footer / Contact */}
            <div className="absolute bottom-8 text-gray-600 text-[10px] tracking-[0.2em] uppercase">
                &copy; 2026 Fabio Micale Hub | Powered by Nexus Agentic Engine
            </div>
        </div>
    );
}
