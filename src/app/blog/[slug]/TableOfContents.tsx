"use client";

import { useEffect, useState } from "react";
import { slugify } from "./headingUtils";

type Heading = { id: string; text: string };

function extractHeadings(contentHtml: string): Heading[] {
  const regex = /<h2[^>]*>(.*?)<\/h2>/gi;
  const headings: Heading[] = [];
  let match;
  while ((match = regex.exec(contentHtml)) !== null) {
    const text = match[1].replace(/<[^>]+>/g, "");
    headings.push({ id: slugify(text), text });
  }
  return headings;
}

export default function TableOfContents({ contentHtml }: { contentHtml: string }) {
  const headings = extractHeadings(contentHtml);
  const [activeId, setActiveId] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (headings.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "0px 0px -70% 0px" }
    );
    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="mb-10">
      {/* ── Desktop ── */}
      <div
        className="hidden md:block border-l pl-4"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">
          In questo articolo
        </p>
        <ul className="flex flex-col gap-2">
          {headings.map(({ id, text }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`text-sm transition-colors duration-200 ${
                  activeId === id ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Mobile collassabile ── */}
      <div
        className="md:hidden rounded-lg p-4"
        style={{ background: "rgba(255,255,255,0.03)" }}
      >
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between text-sm text-slate-400"
        >
          <span>In questo articolo</span>
          <span>{open ? "▴" : "▾"}</span>
        </button>
        {open && (
          <ul className="flex flex-col gap-2 mt-3 pt-3 border-t border-white/8">
            {headings.map(({ id, text }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`text-sm transition-colors duration-200 ${
                    activeId === id ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
