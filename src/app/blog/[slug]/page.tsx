import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts, getPost, getPostsBySlug } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.seoTitle,
    description: post.seoDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      url: `https://fabiomicale.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.dataISO,
      authors: ["Fabio Micale"],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const correlati = getPostsBySlug(post.correlati);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.titolo,
    description: post.seoDescription,
    keywords: post.keywords,
    datePublished: post.dataISO,
    author: {
      "@type": "Person",
      name: "Fabio Micale",
      url: "https://fabiomicale.com/chi-sono",
    },
    publisher: {
      "@type": "Person",
      name: "Fabio Micale",
    },
    url: `https://fabiomicale.com/blog/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://fabiomicale.com/blog/${post.slug}`,
    },
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HEADER ARTICOLO ─────────────────────────────────────── */}
      <section className="relative pt-36 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full bg-blue-600/8 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Back */}
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-400 text-sm mb-8 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Blog
          </a>

          {/* Categoria */}
          <span
            className={`inline-block text-xs font-medium px-3 py-1 rounded-full border mb-5 ${post.categoriaClasses}`}
          >
            {post.categoria}
          </span>

          {/* Titolo */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {post.titolo}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span>{post.data}</span>
            <span>·</span>
            <span>{post.tempoLettura} di lettura</span>
          </div>
        </div>
      </section>

      {/* ── CONTENUTO ───────────────────────────────────────────── */}
      <section className="py-10 px-6 pb-20">
        <div className="max-w-2xl mx-auto">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </section>

      {/* ── CORRELATI ───────────────────────────────────────────── */}
      {correlati.length > 0 && (
        <section className="py-16 px-6 border-t border-white/5">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-blue-500" />
              <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">
                Continua a leggere
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {correlati.map((rel) => (
                <a
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="card-glow group flex flex-col bg-white/[0.03] border border-white/8 rounded-2xl p-6 hover:border-blue-500/25 transition-all duration-300"
                >
                  <span
                    className={`self-start text-xs font-medium px-3 py-1 rounded-full border mb-4 ${rel.categoriaClasses}`}
                  >
                    {rel.categoria}
                  </span>
                  <h3 className="text-white font-semibold leading-snug mb-3 group-hover:text-blue-100 transition-colors duration-200 flex-1">
                    {rel.titolo}
                  </h3>
                  <div className="flex items-center justify-between pt-3 border-t border-white/5 mt-2">
                    <span className="text-xs text-slate-600">{rel.tempoLettura}</span>
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
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
