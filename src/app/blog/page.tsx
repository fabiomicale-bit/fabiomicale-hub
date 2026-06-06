import BlogContent from "./BlogContent";
import { getManifestoPosts, getRegularPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog",
  description:
    "Appunti, strumenti e riflessioni per applicare il Metodo Successo in 3 Passi alla crescita professionale Over 40 nell’era dell’AI.",
  alternates: { canonical: "https://www.fabiomicale.com/blog" },
};

type BlogPageProps = {
  searchParams?: Promise<{
    step?: string;
    format?: string;
  }>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const manifestoPosts = getManifestoPosts();
  const regularPosts = getRegularPosts();
  const params = await searchParams;
  const activeStep = params?.step ?? "Tutti";
  const activeFormats = params?.format?.split(",").filter(Boolean) ?? [];

  return (
    <main className="min-h-screen bg-hub-bg text-hub-ink">
      

      {/* ── HERO BLOG ─────────────────────────────────────────── */}
      <section className="relative pt-44 pb-20 px-6 overflow-hidden">
        
        {/* Background visual */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-editorial opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-hub-bg via-hub-bg/80 to-hub-bg"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="badge-editorial mb-8 mx-auto">Laboratorio Pubblico</div>
          <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1.05] tracking-tight mb-8">
            Blog
          </h1>
          <p className="text-xl text-hub-ink-muted leading-relaxed max-w-2xl mx-auto font-light mb-10">
            Appunti, strumenti e riflessioni per applicare il Metodo Successo in 3 Passi alla crescita professionale Over 40 nell’era dell’AI.
          </p>
        </div>
      </section>

      {/* ── CONTENUTO BLOG ────────────────────────────────────── */}
      <BlogContent
        manifestoPosts={manifestoPosts}
        regularPosts={regularPosts}
        activeStep={activeStep}
        activeFormats={activeFormats}
      />

      
    </main>
  );
}
