import assert from "node:assert/strict";
import test from "node:test";

import {
  buildFormSubmitParams,
  trackFormSubmit,
  trackFormSubmitBeforeNavigation,
} from "../src/lib/ga.ts";
import { submitSubscriptionOnce } from "../src/lib/subscriptionForm.ts";

function installWindow(consent, gtag) {
  const fakeWindow = {
    location: { hostname: "www.fabiomicale.com" },
    localStorage: { getItem: () => consent ? "all" : "necessary" },
    gtag,
    setTimeout,
    clearTimeout,
  };
  Object.defineProperty(globalThis, "window", { value: fakeWindow, configurable: true });
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

test("parametri conversione sono categorici, senza query o PII", () => {
  const params = buildFormSubmitParams({
    form_type: "lead_magnet", form_variant: "book_excerpt",
    page_path: "/estratto?email=qa@example.invalid&token=segreto",
    source: "qa@example.invalid", newsletter_consent: "granted",
  });
  assert.deepEqual(Object.keys(params).sort(), [
    "form_type", "form_variant", "newsletter_consent", "page_path", "source", "success_status",
  ]);
  assert.equal(params.page_path, "/estratto");
  assert.equal(params.source, "other");
  assert.doesNotMatch(JSON.stringify(params), /qa@example\.invalid|segreto|email|token/i);
});
