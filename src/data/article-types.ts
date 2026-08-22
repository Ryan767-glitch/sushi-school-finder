import type { Loc } from "@/lib/locale";

export type Source = {
  title: string;
  url: string;
  publisher: string;
};

export type Article = {
  slug: string;
  kind: "guide" | "feature";
  title: Loc;
  excerpt: Loc;
  date: string;
  category: Loc;
  image: string;
  readMinutes: number;
  related: string[];
  sources?: Source[];
  sections: { heading: Loc; body: Loc[]; tip?: Loc }[];
};

export const L = (ja: string, en: string): Loc => ({ ja, en });
