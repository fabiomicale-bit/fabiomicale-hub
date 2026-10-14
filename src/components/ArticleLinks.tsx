import Link from "next/link";
import { getPostsBySlug } from "@/lib/posts";

// Sezione di link HTML verso articoli selezionati, usata dalle pagine principali.
// Titolo, categoria e tempo di lettura arrivano da posts.ts: restano allineati agli articoli.
type Props = {
  slugs: string[];
  eyebrow: string;
  title: string;
  intro?: string;
  className?: string;
};

export default function ArticleLinks({ slugs, eyebrow, title, intro, className = "" }: Props) {
  const articles = getPostsBySlug(slugs);
  if (articles.length === 0) return null;

  return (
    <section className={`py-24 px-6 border-t border-hub-border/50 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start mb-12">
          <p className="text-2xl font-serif italic text-hub-gold">{eyebrow}</p>
          <div className="space-y-4">
            <h2 className="text-3xl font-serif font-medium leading-snug">{title}</h2>
            {intro && (
              <p className="text-hub-ink-muted text-lg leading-relaxed font-light">{intro}</p>
            )}
          </div>
        </div>
        <ul className="grid md:grid-cols-2 gap-6">
          {articles.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="card-editorial p-8 h-full flex flex-col bg-white group"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-hub-gold mb-4">
                  {post.categoria}
                </span>
                <span className="text-lg font-serif font-medium text-hub-ink leading-snug mb-6 group-hover:text-hub-gold-dark transition-colors">
                  {post.titolo}
                </span>
                <span className="mt-auto text-[10px] font-bold uppercase tracking-widest text-hub-ink-light">
                  {post.tempoLettura} di lettura →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
