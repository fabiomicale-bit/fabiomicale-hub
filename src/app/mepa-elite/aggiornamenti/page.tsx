"use client";

import { blogPosts } from "@/lib/mepaBlogData";
import BlogCard from "@/components/mepa/BlogCard";

export default function AggiornamentiPage() {
  return (
    <div className="bg-white pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Section */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <span className="text-brand-blue font-black text-[10px] tracking-[0.5em] uppercase mb-8 block italic">Aggiornamenti Operativi</span>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-10 font-serif italic tracking-tighter">
            News & <br className="hidden md:block" /> Strategie MEPA.
          </h1>
          <p className="text-xl text-slate-500 font-light leading-relaxed">
            Resta sempre informato sulle ultime scadenze burocratiche, i cambiamenti normativi di ANAC e le strategie per vincere appalti pubblici senza errori formali.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        
        {/* Empty State / Bottom Note */}
        <div className="mt-32 p-16 bg-slate-50 rounded-[48px] text-center border border-slate-100 italic font-serif text-2xl text-slate-400">
          Nuovi approfondimenti ogni settimana.
        </div>
      </div>
    </div>
  );
}
