"use client";

import { useRouter } from "next/navigation";
import type { Locale } from "@/lib/locale";

export function LanguageSwitch({ locale }: { locale: Locale }) {
  const router = useRouter();

  function setLocale(next: Locale) {
    document.cookie = `ssf-locale=${next};path=/;max-age=31536000;samesite=lax`;
    document.documentElement.lang = next === "en" ? "en" : "ja";
    router.refresh();
  }

  return (
    <div className="flex items-center rounded-full border border-line bg-white p-0.5 text-[12px] font-extrabold shrink-0" role="group" aria-label="Language">
      <button
        type="button"
        onClick={() => setLocale("ja")}
        className={`px-2.5 py-1 rounded-full ${locale === "ja" ? "bg-navy text-white" : "text-muted hover:text-ink"}`}
      >
        日本語
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`px-2.5 py-1 rounded-full ${locale === "en" ? "bg-navy text-white" : "text-muted hover:text-ink"}`}
      >
        EN
      </button>
    </div>
  );
}
