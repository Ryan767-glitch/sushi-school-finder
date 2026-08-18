"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type AppState = {
  favorites: string[];
  compare: string[];
  toggleFavorite: (slug: string) => void;
  toggleCompare: (slug: string) => boolean;
  clearCompare: () => void;
  hydrated: boolean;
};

const Ctx = createContext<AppState | null>(null);
const FKEY = "ssf:fav";
const CKEY = "ssf:cmp";

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [compare, setCompare] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const f = JSON.parse(localStorage.getItem(FKEY) || "[]");
      const c = JSON.parse(localStorage.getItem(CKEY) || "[]");
      if (Array.isArray(f)) setFavorites(f.filter((x) => typeof x === "string").slice(0, 50));
      if (Array.isArray(c)) setCompare(c.filter((x) => typeof x === "string").slice(0, 5));
    } catch {
      /* ignore broken storage */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(FKEY, JSON.stringify(favorites));
  }, [favorites, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(CKEY, JSON.stringify(compare));
  }, [compare, hydrated]);

  const value = useMemo<AppState>(
    () => ({
      favorites,
      compare,
      hydrated,
      toggleFavorite: (slug) => {
        setFavorites((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
      },
      toggleCompare: (slug) => {
        let ok = true;
        setCompare((prev) => {
          if (prev.includes(slug)) return prev.filter((s) => s !== slug);
          if (prev.length >= 5) {
            ok = false;
            return prev;
          }
          return [...prev, slug];
        });
        return ok;
      },
      clearCompare: () => setCompare([]),
    }),
    [favorites, compare, hydrated],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAppState() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useAppState must be used within AppStateProvider");
  return v;
}
