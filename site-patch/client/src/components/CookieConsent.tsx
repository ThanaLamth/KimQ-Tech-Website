import { useEffect, useState } from "react";
import { Link } from "wouter";
import { GA4_ID } from "@/lib/site-config";

const STORAGE_KEY = "kq_consent";
const OPEN_EVENT = "kq:open-cookie-settings";
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

type Choice = "granted" | "denied";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function readChoice(): Choice | null {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!saved || Date.now() - saved.at > MAX_AGE_MS) return null;
    return saved.analytics === "granted" ? "granted" : "denied";
  } catch {
    return null;
  }
}

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtagShim() {
      window.dataLayer.push(arguments);
    };
  }
}

function gtag(...args: unknown[]) {
  ensureGtag();
  window.gtag!(...args);
}

let loaded = false;
function loadAnalytics() {
  if (loaded || !GA4_ID) return;
  loaded = true;
  gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    wait_for_update: 500,
  });
  const choice = readChoice();
  if (choice) gtag("consent", "update", { analytics_storage: choice });
  gtag("js", new Date());
  gtag("config", GA4_ID, { anonymize_ip: true });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA4_ID)}`;
  document.head.appendChild(script);
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export default function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!GA4_ID) return;
    loadAnalytics();
    if (!readChoice()) setOpen(true);
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  if (!GA4_ID || !open) return null;

  const save = (analytics: Choice) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ analytics, at: Date.now() }));
    gtag("consent", "update", { analytics_storage: analytics });
    setOpen(false);
  };

  return (
    <div role="dialog" aria-live="polite" aria-label="Cài đặt cookie" className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-xl rounded-xl border border-[#0F2C59]/15 bg-white p-4 text-sm text-[#0F2C59] shadow-xl md:inset-x-auto md:right-4">
      <p>
        KimQ muốn dùng cookie phân tích (Google Analytics) để biết trang nào hữu ích. Không dùng cho quảng cáo.
        Xem <Link href="/chinh-sach-cookie" className="underline underline-offset-2">Chính sách cookie</Link>.
      </p>
      <div className="mt-3 flex gap-2">
        <button type="button" onClick={() => save("denied")} className="min-h-11 flex-1 rounded-lg border border-[#0F2C59]/30 px-4 font-semibold">Từ chối</button>
        <button type="button" onClick={() => save("granted")} className="min-h-11 flex-1 rounded-lg bg-[#0F2C59] px-4 font-semibold text-[#F9F7F0]">Đồng ý</button>
      </div>
    </div>
  );
}
