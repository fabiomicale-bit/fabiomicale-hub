import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";


import { posts, getPost, getPostsBySlug, getPostsByStep } from "@/lib/posts";
import ArticleStepBox from "@/components/ArticleStepBox";
import ArticleVerticalCTA from "@/components/ArticleVerticalCTA";
import NewsletterCTA from "@/components/NewsletterCTA";
import ReadingProgress from "./ReadingProgress";
import TableOfContents from "./TableOfContents";
import { injectHeadingIds } from "./headingUtils";
import ShareBar from "./ShareBar";
import CommentoForm from "@/components/CommentoForm";
import ArticleAuthorBox from "@/components/ArticleAuthorBox";
import ArticleSignature from "@/components/ArticleSignature";
import { getVideoMetadata } from "@/lib/videoMetadata";

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
    alternates: { canonical: `https://www.fabiomicale.com/blog/${post.slug}` },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      url: `https://www.fabiomicale.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.dataISO,
      authors: ["Fabio Micale"],
      images: [{ url: post.ogImage || "/fabio-hero.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.seoDescription,
      images: [post.ogImage || "/fabio-hero.jpg"],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const bySlug = getPostsBySlug(post.correlati);
  const correlati = bySlug.length > 0
    ? bySlug
    : getPostsByStep(post.step).filter((p) => p.slug !== post.slug).slice(0, 3);

  const stepSectionLabels: Record<string, string> = {
    "1": "Passo 1 — Ferma il Caos",
    "2": "Passo 2 — Rimetti Struttura",
    "3A": "Passo 3A — Mantieni il Controllo",
    "3B": "Passo 3B — Mantieni il Controllo",
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.titolo,
    description: post.seoDescription,
    keywords: post.keywords,
    image: `https://www.fabiomicale.com${post.ogImage || "/fabio-hero.jpg"}`,
    datePublished: post.dataISO,
    dateModified: post.dataISO,
    articleSection: stepSectionLabels[String(post.step)] ?? "Metodo Successo in 3 Passi",
    author: {
      "@type": "Person",
      "@id": "https://www.fabiomicale.com/#person",
      name: "Fabio Micale",
      url: "https://www.fabiomicale.com/chi-sono",
    },
    publisher: {
      "@type": "Person",
      "@id": "https://www.fabiomicale.com/#person",
      name: "Fabio Micale",
    },
    url: `https://www.fabiomicale.com/blog/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.fabiomicale.com/blog/${post.slug}`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.fabiomicale.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.fabiomicale.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.titolo,
        item: `https://www.fabiomicale.com/blog/${post.slug}`,
      },
    ],
  };

  const video = getVideoMetadata(post.contentHtml);
  const videoJsonLd = video
    ? {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: video.name,
        description: post.seoDescription,
        thumbnailUrl: [video.thumbnailUrl],
        uploadDate: video.uploadDate,
        duration: video.duration,
        embedUrl: video.embedUrl,
        mainEntityOfPage: `https://www.fabiomicale.com/blog/${post.slug}`,
      }
    : null;

  return (
    <>
      <ReadingProgress />
      <main className="min-h-screen bg-hub-bg text-hub-ink">
      

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {videoJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
        />
      )}

      {/* ── HEADER ARTICOLO ─────────────────────────────────────── */}
      <section className="relative pt-44 pb-20 px-6 overflow-hidden">
        
        {/* Detail ambient light */}
        <div className="absolute top-0 right-[-10%] w-[50%] h-[50%] bg-hub-gold/5 opacity-[0.2] blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-grid opacity-[0.02]" />

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 text-hub-ink-light hover:text-hub-gold text-xs font-bold uppercase tracking-widest mb-12 transition-all duration-300 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Torna all&apos;intelligence
          </Link>

          {/* Categoria */}
          <div className="badge-editorial mb-8">
            {post.categoria}
          </div>

          {/* Titolo */}
          <h1 className="text-4xl md:text-6xl font-light text-hub-ink leading-[1.1] tracking-tight mb-8 font-serif">
            {post.titolo}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-[0.2em] text-hub-ink-light mb-12">
            <span>{post.data}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-hub-border" />
            <span>{post.tempoLettura} di lettura</span>
          </div>

          {/* Immagine in evidenza */}
          {post.ogImage && (
            <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-hub-border mt-10">
              <Image 
                src={post.ogImage} 
                alt={post.coverAlt || post.titolo} 
                fill 
                className="object-cover scale-105" 
                priority 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hub-bg to-transparent opacity-20" />
            </div>
          )}
        </div>
      </section>

      {/* ── STEP BOX ────────────────────────────────────────────── */}
      <ArticleStepBox step={post.step} />

      {/* ── CONTENUTO ───────────────────────────────────────────── */}
      <section className="py-20 px-6 pb-32 relative">
        <div className="max-w-3xl mx-auto">
          
          {/* Article Sidebar style for wide screens */}
          <div className="relative">
            <div className="hidden xl:block absolute -left-48 top-0 w-40">
              <ShareBar titolo={post.titolo} slug={post.slug} />
            </div>

            <div className="bg-white border border-hub-border rounded-[40px] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
              <TableOfContents contentHtml={post.contentHtml} />
              
              <article
                className="blog-content prose prose-slate max-w-none prose-headings:font-serif prose-headings:italic prose-a:text-hub-gold hover:prose-a:text-hub-gold-dark"
                dangerouslySetInnerHTML={{ __html: injectHeadingIds(post.contentHtml) }}
              />

              <ArticleSignature />
              
              <div className="mt-20 pt-12 border-t border-hub-border">
                <div className="xl:hidden mb-12">
                  <ShareBar titolo={post.titolo} slug={post.slug} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORRELATI ───────────────────────────────────────────── */}
      {correlati.length > 0 && (
        <section className="py-32 px-6 bg-hub-bg-alt/30 border-t border-hub-border">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-6 mb-16">
              <div className="badge-editorial">Esplora l&apos;Ecosistema</div>
              <div className="flex-1 h-px bg-gradient-to-r from-hub-border to-transparent" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {correlati.map((rel) => (
                <a
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="card-editorial p-10 group flex flex-col bg-white"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-hub-gold mb-6">
                    {rel.categoria}
                  </span>
                  <h3 className="text-2xl font-medium text-hub-ink leading-tight mb-8 group-hover:text-hub-gold transition-colors font-serif italic">
                    {rel.titolo}
                  </h3>
                  <div className="mt-auto pt-6 border-t border-hub-border flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-hub-ink-light">{rel.tempoLettura}</span>
                    <span className="text-hub-ink font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-all">
                      Approfondisci
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

      {/* ── CTA VERTICALE + NEWSLETTER ──────────────────────────── */}
      <section className="py-16 px-6 bg-hub-bg">
        <div className="max-w-3xl mx-auto">
          <ArticleVerticalCTA step={post.step} />
        </div>
      </section>
      <NewsletterCTA variant="article" />
      <ArticleAuthorBox />

      {/* ── FORM COMMENTI ───────────────────────────────────────── */}
      <section className="py-32 px-6 bg-hub-bg">
        <div className="max-w-2xl mx-auto">
          <div className="p-12 rounded-[32px] bg-white border border-hub-border shadow-sm">
            <h3 className="text-2xl font-serif text-hub-ink italic mb-8 border-b border-hub-border pb-4">Confrontati con l&apos;Autore</h3>
            <CommentoForm articolo={post.titolo} />
          </div>
        </div>
      </section>

      
    </main>
    </>
  );
}
