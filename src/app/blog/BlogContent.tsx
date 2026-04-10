"use client";

import { useState } from "react";
import type { Post } from "@/lib/posts";

type Props = {
  manifestoPosts: Post[];
  regularPosts: Post[];
};

const StarIcon = () => (
  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
  </svg>
);

export default function BlogContent({ manifestoPosts, regularPosts }: Props) {
  const [activeCategory, setActiveCategory] = useState("Tutti");

  const allPosts = [...manifestoPosts, ...regularPosts];
  const categories = [
    "Tutti",
    ...Array.from(new Set(allPosts.map((p) => p.categoria))),
  ];

  const filteredManifesto =
    activeCategory === "Tutti"
      ? manifestoPosts
      : manifestoPosts.filter((p) => p.categoria === activeCategory);

  const filteredRegular =
    activeCategory === "Tutti"
      ? regularPosts
      : regularPosts.filter((p) => p.categoria === activeCategory);

  return (
    <div className="py-20 px-6 pb-40 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto">

        {/* ── Filtro categorie Premium ──────────────────────────── */}
        <div className="flex flex-wrap gap-4 mb-24 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-4 rounded-xl border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#F5A623] border-[#F5A623] text-[#0D0D0D]"
                  : "bg-white/[0.02] border-white/10 text-white/40 hover:border-[#F5A623]/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Letture Fondamentali (Manifesto) ─────────────────── */}
        {filteredManifesto.length > 0 && (
          <div className="mb-32">
            <div className="flex items-center gap-6 mb-12">
              <div className="badge border-[#F5A623]/30 text-[#F5A623] flex items-center gap-2">
                <StarIcon />
                Manifesto dell&apos;Evoluzione
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-[#F5A623]/20 to-transparent" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredManifesto.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="card-premium p-10 group flex flex-col hover:border-[#F5A623]/30 transition-all duration-500"
                >
                  <div className="flex items-center justify-between mb-8 opacity-60">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#F5A623]">
                      Letture Prioritarie
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                      {post.categoria}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-6 group-hover:text-[#F5A623] transition-colors leading-tight font-serif italic">
                    {post.titolo}
                  </h2>

                  <p className="text-white/30 text-base leading-relaxed mb-10 flex-1 line-clamp-3 font-light">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-8 border-t border-white/5">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/20">
                      {post.data}
                    </div>
                    <span className="text-[#F5A623] text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                      Leggi
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* ── Ultimi Articoli ───────────────────────────────────── */}
        {filteredRegular.length > 0 && (
          <>
            <div className="flex items-center gap-6 mb-12">
              <div className="badge border-white/10 text-white/40">Approfondimenti Strategici</div>
              <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRegular.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="card-premium p-10 group flex flex-col hover:bg-white/[0.03] transition-all duration-500"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#2E7D32] mb-8">
                    {post.categoria}
                  </span>

                  <h2 className="text-xl font-bold text-white mb-4 group-hover:text-[#F5A623] transition-colors leading-tight">
                    {post.titolo}
                  </h2>

                  <p className="text-white/30 text-sm leading-relaxed mb-8 flex-1 line-clamp-3 font-light">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-8 border-t border-white/5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/20">
                      {post.data}
                    </span>
                    <span className="text-white/40 text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-[#F5A623] transition-colors">
                      Esplora
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </>
        )}

        {/* ── No Results ────────────────────────────────────────── */}
        {filteredManifesto.length === 0 && filteredRegular.length === 0 && (
          <div className="text-center py-40">
            <p className="text-white/20 text-lg italic serif">Nessuna analisi strategica disponibile per questa selezione.</p>
          </div>
        )}
      </div>
    </div>
  );
}
