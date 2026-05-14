"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { GA_ID, hasAnalyticsConsent } from "@/lib/ga";

export default function GAPageTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!hasAnalyticsConsent()) return;
    if (typeof window.gtag !== "function") return;
    window.gtag("config", GA_ID, {
      page_path: pathname,
      page_title: document.title,
    });
  }, [pathname]);

  return null;
}
