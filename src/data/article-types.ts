import type { Loc } from "@/lib/locale";

export type Source = {
  title: string;
  url: string;
  publisher: string;
  summary?: Loc;
  quote?: Loc;
};

export type ArticleSection = {
  heading: Loc;
  body: Loc[];
  quote?: {
    text: Loc;
    speaker?: Loc;
    sourceTitle: string;
    sourceUrl?: string;
    sourcePublisher: string;
  };
  bullets?: Loc[];
  tip?: Loc;
  sourceLink?: {
    label: Loc;
    url: string;
    publisher: string;
  };
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
  intro?: Loc[];
  keyPoints?: Loc[];
  sections: ArticleSection[];
};

export const L = (ja: string, en: string): Loc => ({ ja, en });
