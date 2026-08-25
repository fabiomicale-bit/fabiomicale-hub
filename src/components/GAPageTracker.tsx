"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { sendPageView } from "@/lib/ga";

export default function GAPageTracker() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      sendPageView(pathname, { isInitial: true });
    } else {
      sendPageView(pathname, { isInitial: false });
    }
  }, [pathname]);

  return null;
}
