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
