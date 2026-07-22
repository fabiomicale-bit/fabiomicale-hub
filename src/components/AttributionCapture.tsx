"use client";
import { useEffect } from "react";
import { captureAttribution } from "@/lib/attribution";

// Monta una sola volta nel layout radice. Il layout non si rimonta durante
// la navigazione client-side di Next, quindi questo effect gira una sola
// volta per sessione di navigazione — esattamente il comportamento first-touch voluto.
export default function AttributionCapture() {
  useEffect(() => {
    captureAttribution();
  }, []);

  return null;
}
