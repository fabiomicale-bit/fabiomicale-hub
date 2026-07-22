"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { sendPageView } from "@/lib/ga";

export default function GAPageTracker() {
  const pathname = usePathname();

  useEffect(() => {
    sendPageView(pathname);
  }, [pathname]);

  return null;
}
