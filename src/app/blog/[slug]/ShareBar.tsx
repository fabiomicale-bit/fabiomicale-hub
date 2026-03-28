"use client";

import { useState } from "react";

type Props = { titolo: string; slug: string };

export default function ShareBar({ titolo, slug }: Props) {
  const url = `https://fabiomicale.com/blog/${slug}`;
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const btnClass =
    "text-xs px-3 py-1.5 rounded-full border border-[#D4E4D4] text-[#5A6B5A] hover:text-[#2E7D32] hover:border-[#43A047] transition-all duration-200 cursor-pointer";

  return (
    <div className="flex items-center gap-2 mb-8">
      <button onClick={copyLink} className={btnClass}>
        {copied ? "✓ Copiato" : "Copia link"}
      </button>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={btnClass}
      >
        LinkedIn
      </a>
    </div>
  );
}
