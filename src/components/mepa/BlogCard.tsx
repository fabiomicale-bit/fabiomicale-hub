"use client";

import Link from "next/image";
import LinkNext from "next/link";
import { BlogPost } from "@/lib/mepaBlogData";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <LinkNext 
      href={`/mepa-elite/aggiornamenti/${post.slug}`} 
      className="group bg-white rounded-[48px] p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-8">
          <span className="text-[9px] font-black uppercase tracking-[0.3em] bg-blue-50 text-brand-blue px-3 py-1 rounded-full px-4 py-2">
            {post.category}
          </span>
          <span className="text-[10px] text-slate-400 font-medium">{post.date}</span>
        </div>
        
        <h3 className="text-2xl font-black text-slate-900 mb-6 leading-tight group-hover:text-brand-blue transition-colors font-serif italic">
          {post.title}
        </h3>
        
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-8">
          {post.excerpt}
        </p>
      </div>
      
      <div className="flex items-center gap-2 text-brand-blue font-black text-[10px] uppercase tracking-widest mt-auto group-hover:gap-4 transition-all">
        Leggi Articolo <span>→</span>
      </div>
    </LinkNext>
  );
}
