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
    <div className="py-8 px-6 pb-24 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* ── Filtro categorie ──────────────────────────────────── */}
        <div className="flex flex-wrap gap-2 mb-14 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm px-4 py-2 rounded-full border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#2E7D32] border-[#2E7D32] text-white"
                  : "bg-white border-[#D4E4D4] text-[#5A6B5A] hover:border-[#43A047] hover:text-[#2E7D32]"
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
              <div className="w-8 h-px bg-[#F9A825]/60" />
              <span className="text-[#F9A825]/80 text-xs font-semibold tracking-widest uppercase flex items-center gap-1.5">
                <StarIcon />
                Letture Fondamentali
              </span>
              <div className="flex-1 h-px bg-[#F9A825]/10" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredManifesto.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-[#FFFBF0] border border-[#F9A825]/20 rounded-2xl p-7 hover:border-[#F9A825]/50 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  {/* Badge manifesto + categoria */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full border bg-[#FFF8E1] text-[#F9A825] border-[#F9A825]/30 flex items-center gap-1.5">
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
                  <h2 className="text-[#1A1A1A] font-semibold text-lg leading-snug mb-3 group-hover:text-[#5A3E00] transition-colors duration-200 flex-1">
                    {post.titolo}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-[#5A6B5A] text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta + CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#D4E4D4]">
                    <div className="flex items-center gap-3 text-xs text-[#5A6B5A]/70">
                      <span>{post.data}</span>
                      <span>·</span>
                      <span>{post.tempoLettura}</span>
                    </div>
                    <span className="text-[#F9A825] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
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
                <div className="flex-1 h-px bg-[#D4E4D4]" />
                <span className="text-[#5A6B5A] text-xs font-semibold tracking-widest uppercase">
                  Ultimi articoli
                </span>
                <div className="flex-1 h-px bg-[#D4E4D4]" />
              </div>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRegular.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="card-glow group flex flex-col bg-white border border-[#D4E4D4] rounded-2xl p-7 hover:border-[#43A047] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <span
                    className={`self-start text-xs font-medium px-3 py-1 rounded-full border mb-5 ${post.categoriaClasses}`}
                  >
                    {post.categoria}
                  </span>

                  <h2 className="text-[#1A1A1A] font-semibold text-lg leading-snug mb-3 group-hover:text-[#2E7D32] transition-colors duration-200 flex-1">
                    {post.titolo}
                  </h2>

                  <p className="text-[#5A6B5A] text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-[#D4E4D4]">
                    <div className="flex items-center gap-3 text-xs text-[#5A6B5A]/70">
                      <span>{post.data}</span>
                      <span>·</span>
                      <span>{post.tempoLettura}</span>
                    </div>
                    <span className="text-[#2E7D32] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
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
          <p className="text-center text-[#5A6B5A] py-12">
            Nessun articolo in questa categoria.
          </p>
        )}
      </div>
    </div>
  );
}
