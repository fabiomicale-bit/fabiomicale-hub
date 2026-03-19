export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export function injectHeadingIds(contentHtml: string): string {
  return contentHtml.replace(/<h2([^>]*)>(.*?)<\/h2>/gi, (_m, attrs, inner) => {
    const text = inner.replace(/<[^>]+>/g, "");
    const id = slugify(text);
    return `<h2${attrs} id="${id}">${inner}</h2>`;
  });
}
