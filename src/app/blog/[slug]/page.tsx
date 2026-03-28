import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts, getPost, getPostsBySlug } from "@/lib/posts";
import ReadingProgress from "./ReadingProgress";
import TableOfContents from "./TableOfContents";
import { injectHeadingIds } from "./headingUtils";
import ShareBar from "./ShareBar";

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
      images: [{ url: "/fabio-hero.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.seoDescription,
      images: ["/fabio-hero.jpg"],
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

  return (
    <>
      <ReadingProgress />
      <main className="min-h-screen bg-white">
      <Navbar />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HEADER ARTICOLO ─────────────────────────────────────── */}
      <section className="relative pt-36 pb-12 px-6 overflow-hidden bg-[#1A2E1A]">
        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Back */}
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-[#A5D6A7]/70 hover:text-[#A5D6A7] text-sm mb-8 transition-colors duration-200"
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
          <div className="flex items-center gap-4 text-sm text-[#A5D6A7]/60">
            <span>{post.data}</span>
            <span>·</span>
            <span>{post.tempoLettura} di lettura</span>
          </div>
        </div>
      </section>

      {/* ── CONTENUTO ───────────────────────────────────────────── */}
      <section className="py-10 px-6 pb-20 bg-white">
        <div className="max-w-2xl mx-auto">
          <ShareBar titolo={post.titolo} slug={post.slug} />
          <TableOfContents contentHtml={post.contentHtml} />
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: injectHeadingIds(post.contentHtml) }}
          />
        </div>
      </section>

      {/* ── CORRELATI ───────────────────────────────────────────── */}
      {correlati.length > 0 && (
        <section className="py-16 px-6 border-t border-[#D4E4D4] bg-[#F4F7F4]">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#2E7D32]" />
              <span className="text-[#2E7D32] text-sm font-medium tracking-widest uppercase">
                Continua a leggere
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {correlati.map((rel) => (
                <a
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="card-glow group flex flex-col bg-white border border-[#D4E4D4] rounded-2xl p-6 hover:border-[#43A047] transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <span
                    className={`self-start text-xs font-medium px-3 py-1 rounded-full border mb-4 ${rel.categoriaClasses}`}
                  >
                    {rel.categoria}
                  </span>
                  <h3 className="text-[#1A1A1A] font-semibold leading-snug mb-3 group-hover:text-[#2E7D32] transition-colors duration-200 flex-1">
                    {rel.titolo}
                  </h3>
                  <div className="flex items-center justify-between pt-3 border-t border-[#D4E4D4] mt-2">
                    <span className="text-xs text-[#5A6B5A]">{rel.tempoLettura}</span>
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
          </div>
        </section>
      )}

      <Footer />
    </main>
    </>
  );
}
