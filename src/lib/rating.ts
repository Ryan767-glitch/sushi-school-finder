import type { School } from "@/types";

export const MAPS_CHECKED = "2026年8月19日";

export function googleLabel(school: School) {
  if (school.googleStatus === "rated" && school.googleRating != null) {
    return {
      kind: "rated" as const,
      value: school.googleRating,
      count: school.googleReviewCount ?? 0,
      text: `Googleマップ ${school.googleRating.toFixed(1)}（${school.googleReviewCount ?? 0}件）`,
    };
  }
  if (school.googleStatus === "no_reviews") {
    return { kind: "empty" as const, value: null, count: 0, text: "Googleマップ掲載あり・口コミなし" };
  }
  return { kind: "none" as const, value: null, count: 0, text: "学校としてのGoogleマップ掲載なし" };
}

/** Bayesian average so 5.0 (1件) does not outrank 4.8 (100件). */
export function googleRankScore(school: School) {
  if (school.googleStatus !== "rated" || school.googleRating == null) return -1;
  const v = school.googleReviewCount ?? 0;
  if (v <= 0) return -1;
  const m = 12;
  const C = 4;
  return (v / (v + m)) * school.googleRating + (m / (v + m)) * C;
}

export function sortByGoogle(a: School, b: School) {
  const as = googleRankScore(a);
  const bs = googleRankScore(b);
  if (bs !== as) return bs - as;
  return (b.googleReviewCount ?? 0) - (a.googleReviewCount ?? 0);
}
