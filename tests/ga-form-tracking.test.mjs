import assert from "node:assert/strict";
import test from "node:test";

import {
  buildFormSubmitParams,
  trackFormSubmit,
  trackFormSubmitBeforeNavigation,
  sendPageView,
  ensureGtag,
  updateConsent,
} from "../src/lib/ga.ts";
import { submitSubscriptionOnce } from "../src/lib/subscriptionForm.ts";

function installWindow(consent, gtag, options = {}) {
  const fakeWindow = {
    location: {
      hostname: "www.fabiomicale.com",
      href: options.href || "https://www.fabiomicale.com/estratto",
      pathname: options.pathname || "/estratto",
    },
    localStorage: { getItem: () => consent ? "all" : "necessary" },
    document: {
      title: options.title || "Pagina di Test | Fabio Micale",
      referrer: options.referrer !== undefined ? options.referrer : "https://www.google.it/",
    },
    gtag,
    dataLayer: options.dataLayer || undefined,
    setTimeout,
    clearTimeout,
  };
  Object.defineProperty(globalThis, "window", { value: fakeWindow, configurable: true });
  Object.defineProperty(globalThis, "document", { value: fakeWindow.document, configurable: true });
}

function response(ok, success) {
  return new Response(JSON.stringify({ success }), {
    status: ok ? 200 : 500,
    headers: { "Content-Type": "application/json" },
  });
}

function validInput(kind) {
  return {
    email: "qa@example.invalid",
    name: "QA",
    honeypot: "",
    privacyConsent: true,
    newsletterConsent: kind === "newsletter",
    requiresNewsletterConsent: kind === "newsletter",
    payload: { variant: kind },
  };
}

test("estratto riuscito emette una sola conversione confermata", async () => {
  let events = 0;
  const result = await submitSubscriptionOnce({
    input: validInput("book-excerpt"),
    lock: { current: false },
    fetchImpl: async () => response(true, true),
    onAccepted: () => { events += 1; },
  });
  assert.equal(result, "accepted");
  assert.equal(events, 1);
});

test("errore API estratto non emette conversioni", async () => {
  let events = 0;
  const result = await submitSubscriptionOnce({
    input: validInput("book-excerpt"), lock: { current: false },
    fetchImpl: async () => response(false, false), onAccepted: () => { events += 1; },
  });
  assert.equal(result, "rejected");
  assert.equal(events, 0);
});

test("email non valida non chiama API e non emette conversioni", async () => {
  let requests = 0;
  let events = 0;
  const input = { ...validInput("book-excerpt"), email: "non-valida" };
  const result = await submitSubscriptionOnce({
    input, lock: { current: false },
    fetchImpl: async () => { requests += 1; return response(true, true); },
    onAccepted: () => { events += 1; },
  });
  assert.equal(result, "invalid");
  assert.equal(requests, 0);
  assert.equal(events, 0);
});

test("waitlist preserva il nome facoltativo preesistente", async () => {
  const input = {
    ...validInput("book-waitlist"),
    name: "",
    requiresName: false,
  };
  const result = await submitSubscriptionOnce({
    input,
    lock: { current: false },
    fetchImpl: async () => response(true, true),
    onAccepted: () => {},
  });
  assert.equal(result, "accepted");
});

test("honeypot compilato non chiama API e non emette conversioni", async () => {
  let events = 0;
  const result = await submitSubscriptionOnce({
    input: { ...validInput("book-excerpt"), honeypot: "bot" }, lock: { current: false },
    fetchImpl: async () => response(true, true), onAccepted: () => { events += 1; },
  });
  assert.equal(result, "honeypot");
  assert.equal(events, 0);
});

test("doppio invio concorrente produce al massimo una conversione", async () => {
  let release;
  const pending = new Promise((resolve) => { release = resolve; });
  const lock = { current: false };
  let events = 0;
  const options = {
    input: validInput("book-excerpt"), lock,
    fetchImpl: async () => pending,
    onAccepted: () => { events += 1; },
  };
  const first = submitSubscriptionOnce(options);
  const second = submitSubscriptionOnce(options);
  release(response(true, true));
  assert.equal(await second, "duplicate");
  assert.equal(await first, "accepted");
  assert.equal(events, 1);
});

test("consenso Analytics negato non emette e non genera errori", () => {
  installWindow(false, () => { throw new Error("non deve essere chiamato"); });
  const emitted = trackFormSubmit("newsletter_submit", buildFormSubmitParams({
    form_type: "newsletter", form_variant: "newsletter_page", page_path: "/newsletter",
    newsletter_consent: "granted",
  }));
  assert.equal(emitted, false);
});

test("gtag assente non blocca la navigazione estratto", () => {
  installWindow(true);
  let navigated = 0;
  trackFormSubmitBeforeNavigation("lead_estratto_submit", buildFormSubmitParams({
    form_type: "lead_magnet", form_variant: "book_excerpt", page_path: "/estratto",
    newsletter_consent: "not_granted",
  }), () => { navigated += 1; });
  assert.equal(navigated, 1);
});

test("callback gtag completa la navigazione una sola volta", () => {
  let callback;
  installWindow(true, (...args) => { callback = args[2].event_callback; });
  let navigated = 0;
  trackFormSubmitBeforeNavigation("lead_estratto_submit", buildFormSubmitParams({
    form_type: "lead_magnet", form_variant: "book_excerpt", page_path: "/estratto",
    newsletter_consent: "not_granted",
  }), () => { navigated += 1; }, 10_000);
  callback();
  callback();
  assert.equal(navigated, 1);
});

test("newsletter riuscita emette una sola conversione", async () => {
  let events = 0;
  const result = await submitSubscriptionOnce({
    input: validInput("newsletter"), lock: { current: false },
    fetchImpl: async () => response(true, true), onAccepted: () => { events += 1; },
  });
  assert.equal(result, "accepted");
  assert.equal(events, 1);
});

test("newsletter fallita non emette conversioni", async () => {
  let events = 0;
  const result = await submitSubscriptionOnce({
    input: validInput("newsletter"), lock: { current: false },
    fetchImpl: async () => response(true, false), onAccepted: () => { events += 1; },
  });
  assert.equal(result, "rejected");
  assert.equal(events, 0);
});

test("parametri conversione usano traffic_origin, non source riservato, senza PII", () => {
  const params = buildFormSubmitParams({
    form_type: "lead_magnet", form_variant: "book_excerpt",
    page_path: "/estratto?email=qa@example.invalid&token=segreto",
    traffic_origin: "qa@example.invalid", newsletter_consent: "granted",
  });
  assert.deepEqual(Object.keys(params).sort(), [
    "form_type", "form_variant", "newsletter_consent", "page_path", "success_status", "traffic_origin",
  ]);
  assert.equal(params.page_path, "/estratto");
  assert.equal(params.traffic_origin, "other");
  assert.equal("source" in params, false);
  assert.doesNotMatch(JSON.stringify(params), /qa@example\.invalid|segreto|email|token/i);
});

test("sendPageView emette page_view con page_location, page_title e page_referrer sul first load", () => {
  const calls = [];
  installWindow(true, (...args) => { calls.push(args); }, {
    href: "https://www.fabiomicale.com/blog/10-task-delegare-ai-lavoro?utm_source=linkedin",
    pathname: "/blog/10-task-delegare-ai-lavoro",
    title: "10 Task | Fabio Micale",
    referrer: "https://www.google.it/",
  });

  sendPageView("/blog/10-task-delegare-ai-lavoro", { isInitial: true });

  assert.equal(calls.length, 1);
  assert.equal(calls[0][0], "event");
  assert.equal(calls[0][1], "page_view");
  assert.equal(calls[0][2].page_path, "/blog/10-task-delegare-ai-lavoro");
  assert.equal(calls[0][2].page_location, "https://www.fabiomicale.com/blog/10-task-delegare-ai-lavoro?utm_source=linkedin");
  assert.equal(calls[0][2].page_title, "10 Task | Fabio Micale");
  assert.equal(calls[0][2].page_referrer, "https://www.google.it/");
});

test("sendPageView su navigazione SPA successiva non ripete page_referrer della landing", () => {
  const calls = [];
  installWindow(true, (...args) => { calls.push(args); }, {
    href: "https://www.fabiomicale.com/chi-sono",
    pathname: "/chi-sono",
    title: "Chi Sono | Fabio Micale",
    referrer: "https://www.google.it/",
  });

  sendPageView("/chi-sono", { isInitial: false });

  assert.equal(calls.length, 1);
  assert.equal(calls[0][0], "event");
  assert.equal(calls[0][1], "page_view");
  assert.equal(calls[0][2].page_path, "/chi-sono");
  assert.equal(calls[0][2].page_referrer, undefined);
});

test("sendPageView con consenso negato non invia nessun evento", () => {
  const calls = [];
  installWindow(false, (...args) => { calls.push(args); });

  sendPageView("/blog", { isInitial: true });

  assert.equal(calls.length, 0);
});

test("ensureGtag inizializza window.gtag se assente accodando comandi in dataLayer senza errori", () => {
  installWindow(true, undefined, {});
  delete window.gtag;
  delete window.dataLayer;

  const gtag = ensureGtag();
  assert.equal(typeof gtag, "function");
  assert.equal(typeof window.gtag, "function");
  assert.ok(Array.isArray(window.dataLayer));

  sendPageView("/successo-in-3-passi", { isInitial: true });
  assert.equal(window.dataLayer.length, 1);
  assert.equal(window.dataLayer[0][0], "event");
  assert.equal(window.dataLayer[0][1], "page_view");
});
