import { schools } from "@/data/schools";
import { sortByGoogle } from "@/lib/rating";
import type { School } from "@/types";

export type RankTab = "all" | "beginner" | "intensive" | "open" | "online";

export function rankSchools(tab: RankTab = "all"): School[] {
  let list = [...schools];
  if (tab === "beginner") list = list.filter((s) => s.levels.includes("beginner"));
  if (tab === "intensive") list = list.filter((s) => s.durationMonthsFrom <= 3 && s.courses.some((c) => c.intensive));
  if (tab === "open") list = list.filter((s) => s.openSupport);
  if (tab === "online") list = list.filter((s) => s.onlineAvailable);
  return list.sort(sortByGoogle);
}

export function composite(s: School) {
  const b = s.editorialBreakdown;
  return Number(
    (b.satisfaction * 0.3 + b.curriculum * 0.25 + b.support * 0.2 + b.value * 0.15 + b.reputation * 0.1).toFixed(2),
  );
}
