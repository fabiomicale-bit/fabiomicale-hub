export type SubmissionLock = { current: boolean };

export type SubmissionResult =
  | "accepted"
  | "duplicate"
  | "honeypot"
  | "invalid"
  | "rejected";

type SubscriptionInput = {
  email: string;
  name: string;
  honeypot?: string;
  privacyConsent: boolean;
  newsletterConsent: boolean;
  requiresNewsletterConsent: boolean;
  requiresName?: boolean;
  payload: Record<string, unknown>;
};

type SubmitSubscriptionOptions = {
  input: SubscriptionInput;
  lock: SubmissionLock;
  onStarted?: () => void;
  onAccepted: () => void;
  fetchImpl?: typeof fetch;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidSubscriptionInput(input: SubscriptionInput): boolean {
  if (input.requiresName !== false && !input.name.trim()) return false;
  if (!EMAIL_PATTERN.test(input.email.trim())) return false;
  if (!input.privacyConsent) return false;
  return !input.requiresNewsletterConsent || input.newsletterConsent;
}

export async function submitSubscriptionOnce({
  input,
  lock,
  onStarted,
  onAccepted,
  fetchImpl = fetch,
}: SubmitSubscriptionOptions): Promise<SubmissionResult> {
  if (lock.current) return "duplicate";
  if (input.honeypot?.trim()) return "honeypot";
  if (!isValidSubscriptionInput(input)) return "invalid";

  lock.current = true;
  onStarted?.();

  let response: Response;
  try {
    response = await fetchImpl("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input.payload),
    });
  } catch {
    lock.current = false;
    return "rejected";
  }

  const body = await response.json().catch(() => null) as { success?: unknown } | null;
  if (!response.ok || body?.success !== true) {
    lock.current = false;
    return "rejected";
  }

  onAccepted();
  return "accepted";
}
