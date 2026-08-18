import { schools } from "@/data/schools";
import type { LevelId, RegionId, School, StyleId } from "@/types";

export type SearchQuery = {
  q?: string;
  style?: StyleId | "all";
  tuition?: "all" | "lt30" | "30to80" | "80to150" | "gt150";
  duration?: "all" | "lt3" | "3to6" | "gt6";
  level?: LevelId | "all";
  english?: "all" | "yes" | "no";
  region?: RegionId | "all";
  trial?: boolean;
  job?: boolean;
  open?: boolean;
  intensive?: boolean;
  online?: boolean;
  sort?: "recommended" | "tuition-asc" | "duration-asc" | "score-desc";
};

export function parseSearch(sp: Record<string, string | string[] | undefined>): SearchQuery {
  const g = (k: string) => {
    const v = sp[k];
    return Array.isArray(v) ? v[0] : v;
  };
  return {
    q: g("q") || "",
    style: (g("style") as SearchQuery["style"]) || "all",
    tuition: (g("tuition") as SearchQuery["tuition"]) || "all",
    duration: (g("duration") as SearchQuery["duration"]) || "all",
    level: (g("level") as SearchQuery["level"]) || "all",
    english: (g("english") as SearchQuery["english"]) || "all",
    region: (g("region") as SearchQuery["region"]) || "all",
    trial: g("trial") === "1",
    job: g("job") === "1",
    open: g("open") === "1",
    intensive: g("intensive") === "1",
    online: g("online") === "1",
    sort: (g("sort") as SearchQuery["sort"]) || "recommended",
  };
}

export function filterSchools(query: SearchQuery, list: School[] = schools) {
  const q = (query.q || "").trim().toLowerCase();
  let out = list.filter((s) => {
    if (q) {
      const hay = [s.name, s.nameKana, s.prefecture, s.city, s.areaLabel, s.description, ...s.features, ...s.learnItems]
        .join(" ")
        .toLowerCase();
      if (!hay.includes(q)) return false;
    }
    if (query.style && query.style !== "all") {
      if (query.style === "hybrid") {
        if (!(s.styles.includes("hybrid") || (s.styles.includes("commute") && s.styles.includes("online")))) {
          if (!s.styles.includes("hybrid")) return false;
        }
      } else if (!s.styles.includes(query.style) && !(query.style === "online" && s.onlineAvailable)) {
        return false;
      }
    }
    if (query.tuition && query.tuition !== "all") {
      const t = s.tuitionFrom;
      if (query.tuition === "lt30" && t >= 300000) return false;
      if (query.tuition === "30to80" && (t < 300000 || t > 800000)) return false;
      if (query.tuition === "80to150" && (t < 800000 || t > 1500000)) return false;
      if (query.tuition === "gt150" && t <= 1500000) return false;
    }
    if (query.duration && query.duration !== "all") {
      if (query.duration === "lt3" && s.durationMonthsFrom > 2) return false;
      if (query.duration === "3to6" && (s.durationMonthsTo < 3 || s.durationMonthsFrom > 6)) return false;
      if (query.duration === "gt6" && s.durationMonthsTo <= 6) return false;
    }
    if (query.level && query.level !== "all" && !s.levels.includes(query.level)) return false;
    if (query.english === "yes" && !s.englishSupport) return false;
    if (query.english === "no" && s.englishSupport) return false;
    if (query.region && query.region !== "all" && s.region !== query.region) return false;
    if (query.trial && !s.trialLesson) return false;
    if (query.job && !s.jobSupport) return false;
    if (query.open && !s.openSupport) return false;
    if (query.intensive && !s.courses.some((c) => c.intensive)) return false;
    if (query.online && !s.onlineAvailable) return false;
    return true;
  });

  const sort = query.sort || "recommended";
  out = [...out].sort((a, b) => {
    if (sort === "tuition-asc") return a.tuitionFrom - b.tuitionFrom;
    if (sort === "duration-asc") return a.durationMonthsFrom - b.durationMonthsFrom;
    if (sort === "score-desc") return b.editorialScore - a.editorialScore;
    const ab = a.badges.length - b.badges.length;
    if (ab !== 0) return -ab;
    return b.editorialScore - a.editorialScore;
  });
  return out;
}

export function toSearchParams(query: SearchQuery) {
  const p = new URLSearchParams();
  const set = (k: string, v?: string | boolean) => {
    if (v === undefined || v === "" || v === "all" || v === false) return;
    p.set(k, v === true ? "1" : String(v));
  };
  set("q", query.q);
  set("style", query.style);
  set("tuition", query.tuition);
  set("duration", query.duration);
  set("level", query.level);
  set("english", query.english);
  set("region", query.region);
  set("trial", query.trial);
  set("job", query.job);
  set("open", query.open);
  set("intensive", query.intensive);
  set("online", query.online);
  set("sort", query.sort);
  return p.toString();
}

export const stats = {
  schools: schools.length,
  trial: schools.filter((s) => s.trialLesson).length,
  job: schools.filter((s) => s.jobSupport).length,
};
