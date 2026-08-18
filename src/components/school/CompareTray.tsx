"use client";

import Link from "next/link";
import { useAppState } from "@/context/AppState";
import { getSchool } from "@/data/schools";

export function CompareTray() {
  const { compare, toggleCompare, clearCompare } = useAppState();
  if (compare.length === 0) return null;
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[min(720px,calc(100%-24px))] card shadow-lg p-3 flex flex-wrap items-center gap-3">
      <p className="text-sm font-bold">比較 {compare.length}/5</p>
      <div className="flex flex-1 flex-wrap gap-2">
        {compare.map((slug) => {
          const s = getSchool(slug);
          return (
            <button key={slug} type="button" className="text-xs bg-soft rounded-full px-2 py-1" onClick={() => toggleCompare(slug)}>
              {s?.shortName ?? slug} ×
            </button>
          );
        })}
      </div>
      <Link href="/compare" className="btn-coral !py-2 !px-3 text-sm">
        比較する
      </Link>
      <button type="button" className="text-xs text-muted" onClick={clearCompare}>
        クリア
      </button>
    </div>
  );
}
