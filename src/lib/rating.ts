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

export function sortByGoogle(a: School, b: School) {
  const ar = a.googleRating ?? -1;
  const br = b.googleRating ?? -1;
  if (br !== ar) return br - ar;
  return (b.googleReviewCount ?? 0) - (a.googleReviewCount ?? 0);
}
