"use client";

import { blogPosts } from "@/lib/mepaBlogData";
import { useParams } from "next/navigation";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function BlogPostDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white pt-40 pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Post Meta */}
        <div className="flex items-center gap-6 mb-12">
          <Link 
            href="/fatturato-garantito/aggiornamenti" 
            className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white transition-all group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
          </Link>
          <div className="h-px bg-slate-100 flex-grow" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-blue">{post.category}</span>
          <span className="text-[10px] text-slate-400 font-medium">{post.date}</span>
        </div>

        {/* Post Title */}
        <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-16 leading-tight font-serif italic tracking-tighter">
          {post.title}
        </h1>

        {/* Post Content */}
        <article className="prose prose-slate prose-xl max-w-none mb-32">
          <div className="text-xl text-slate-500 font-light leading-relaxed whitespace-pre-wrap">
            {post.content}
          </div>
        </article>

        {/* Final CTA in Article */}
        <div className="bg-slate-900 rounded-[48px] p-16 text-center text-white relative overflow-hidden group">
           <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none" />
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 blur-[100px] rounded-full group-hover:scale-125 transition-transform" />
           
           <div className="relative z-10">
              <span className="text-brand-green font-black text-[10px] tracking-[0.5em] uppercase mb-8 block italic">Vuoi approfondire?</span>
              <h2 className="text-3xl font-serif italic mb-10 tracking-tighter">Abbiamo una strategia personalizzata <br className="hidden md:block" /> per la tua azienda.</h2>
              <Link 
                href="/fatturato-garantito/contatti" 
                className="inline-block bg-brand-blue text-white px-12 py-5 rounded-2xl text-xs font-black shadow-2xl hover:bg-blue-600 transition-all hover:scale-105 uppercase tracking-widest"
              >
                Analisi Fattibilità Gratis →
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
}
