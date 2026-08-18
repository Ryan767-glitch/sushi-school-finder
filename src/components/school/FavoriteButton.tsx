"use client";

import { useAppState } from "@/context/AppState";

export function FavoriteButton({
  slug,
  compact = false,
}: {
  slug: string;
  compact?: boolean;
}) {
  const { favorites, toggleFavorite } = useAppState();
  const on = favorites.includes(slug);
  return (
    <button
      type="button"
      onClick={() => toggleFavorite(slug)}
      className={
        compact
          ? `w-9 h-9 rounded-full border grid place-items-center ${on ? "border-coral text-coral bg-red-50" : "border-line text-muted bg-white"}`
          : `inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm ${on ? "border-coral text-coral bg-red-50" : "border-line text-muted"}`
      }
      aria-pressed={on}
      aria-label={on ? "お気に入りから外す" : "お気に入りに追加"}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill={on ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
        <path d="M12 21s-7-4.6-9.5-8.2C.4 9.8 2.2 6 6 6c2 0 3.3 1 4 2 .7-1 2-2 4-2 3.8 0 5.6 3.8 3.5 6.8C19 16.4 12 21 12 21z" />
      </svg>
      {compact ? null : on ? "お気に入り済み" : "お気に入りに追加"}
    </button>
  );
}
