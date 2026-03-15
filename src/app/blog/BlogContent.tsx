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
    <div className="py-8 px-6 pb-24">
      <div className="max-w-5xl mx-auto">

        {/* ── Filtro categorie ──────────────────────────────────── */}
        <div className="flex flex-wrap gap-2 mb-14 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm px-4 py-2 rounded-full border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-blue-600 border-blue-500 text-white"
                  : "bg-white/[0.03] border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Letture Fondamentali ──────────────────────────────── */}
        {filteredManifesto.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-amber-500/60" />
              <span className="text-amber-400/80 text-xs font-semibold tracking-widest uppercase flex items-center gap-1.5">
                <StarIcon />
                Letture Fondamentali
              </span>
              <div className="flex-1 h-px bg-amber-500/10" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredManifesto.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-gradient-to-b from-amber-500/5 to-transparent border border-amber-500/15 rounded-2xl p-7 hover:border-amber-500/35 hover:-translate-y-1 transition-all duration-300"
                  style={{ boxShadow: "0 0 0 0 transparent" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 0 30px rgba(245,158,11,0.08)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow = "0 0 0 0 transparent")
                  }
                >
                  {/* Badge manifesto + categoria */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full border bg-amber-500/10 text-amber-400 border-amber-500/25 flex items-center gap-1.5">
                      <StarIcon />
                      Manifesto
                    </span>
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full border ${post.categoriaClasses}`}
                    >
                      {post.categoria}
                    </span>
                  </div>

                  {/* Titolo */}
                  <h2 className="text-white font-semibold text-lg leading-snug mb-3 group-hover:text-amber-50 transition-colors duration-200 flex-1">
                    {post.titolo}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta + CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex items-center gap-3 text-xs text-slate-600">
                      <span>{post.data}</span>
                      <span>·</span>
                      <span>{post.tempoLettura}</span>
                    </div>
                    <span className="text-amber-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
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

        {/* ── Separatore + Ultimi articoli ─────────────────────── */}
        {filteredRegular.length > 0 && (
          <>
            {filteredManifesto.length > 0 && (
              <div className="flex items-center gap-4 mb-10">
                <div className="flex-1 h-px bg-white/5" />
                <span className="text-slate-600 text-xs font-semibold tracking-widest uppercase">
                  Ultimi articoli
                </span>
                <div className="flex-1 h-px bg-white/5" />
              </div>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRegular.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="card-glow group flex flex-col bg-white/[0.03] border border-white/8 rounded-2xl p-7 hover:border-blue-500/25 hover:-translate-y-1 transition-all duration-300"
                >
                  <span
                    className={`self-start text-xs font-medium px-3 py-1 rounded-full border mb-5 ${post.categoriaClasses}`}
                  >
                    {post.categoria}
                  </span>

                  <h2 className="text-white font-semibold text-lg leading-snug mb-3 group-hover:text-blue-100 transition-colors duration-200 flex-1">
                    {post.titolo}
                  </h2>

                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex items-center gap-3 text-xs text-slate-600">
                      <span>{post.data}</span>
                      <span>·</span>
                      <span>{post.tempoLettura}</span>
                    </div>
                    <span className="text-blue-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                      Leggi
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </>
        )}

        {/* ── Nessun risultato ──────────────────────────────────── */}
        {filteredManifesto.length === 0 && filteredRegular.length === 0 && (
          <p className="text-center text-slate-600 py-12">
            Nessun articolo in questa categoria.
          </p>
        )}
      </div>
    </div>
  );
}
