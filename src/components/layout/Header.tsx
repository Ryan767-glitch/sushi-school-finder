"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAppState } from "@/context/AppState";

const nav = [
  { href: "/schools", label: "スクールを探す" },
  { href: "/compare", label: "比較する" },
  { href: "/ranking", label: "ランキング" },
  { href: "/articles", label: "特集・コラム" },
  { href: "/beginner", label: "はじめての方へ" },
];

export function Header() {
  const path = usePathname();
  const { favorites } = useAppState();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-line">
      <div className="container-page flex items-center justify-between h-[68px] gap-4">
        <Link href="/" className="flex items-center gap-2.5 min-w-0">
          <span className="relative w-9 h-9 rounded-full overflow-hidden border border-line shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo-nigiri.jpg" alt="" className="w-full h-full object-cover" />
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-extrabold tracking-wide">SUSHI SCHOOL FINDER</span>
            <span className="block text-[10px] text-muted">寿司スクール比較・検索サイト</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-[14px] font-medium">
          {nav.map((n) => {
            const active = path === n.href || path.startsWith(n.href + "/");
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`relative py-2 ${active ? "text-ink font-bold" : "text-muted hover:text-ink"}`}
              >
                {n.label}
                {active ? <span className="absolute left-0 right-0 -bottom-[18px] h-[3px] bg-blue rounded-full" /> : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/favorites" className="btn-outline !py-2 !px-3 text-sm">
            <HeartIcon />
            <span className="hidden sm:inline">お気に入り</span>
            <span className="min-w-5 h-5 rounded-full bg-coral text-white text-[11px] grid place-items-center">
              {favorites.length}
            </span>
          </Link>
          <button
            type="button"
            className="lg:hidden w-10 h-10 rounded-lg border border-line grid place-items-center"
            aria-label="メニュー"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex flex-col gap-1.5">
              <span className="block w-4 h-0.5 bg-ink" />
              <span className="block w-4 h-0.5 bg-ink" />
              <span className="block w-4 h-0.5 bg-ink" />
            </span>
          </button>
        </div>
      </div>
      {open ? (
        <div className="lg:hidden border-t border-line bg-white">
          <nav className="container-page py-3 flex flex-col">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="py-3 border-b border-line" onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            ))}
            <Link href="/reviews" className="py-3 border-b border-line" onClick={() => setOpen(false)}>
              口コミ
            </Link>
            <Link href="/inquiry" className="py-3" onClick={() => setOpen(false)}>
              資料請求
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function HeartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 21s-7-4.6-9.5-8.2C.4 9.8 2.2 6 6 6c2 0 3.3 1 4 2 .7-1 2-2 4-2 3.8 0 5.6 3.8 3.5 6.8C19 16.4 12 21 12 21z" />
    </svg>
  );
}
