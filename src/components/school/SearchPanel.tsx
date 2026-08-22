"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toSearchParams, type SearchQuery } from "@/lib/search";
import { Icon } from "@/components/ui/Icon";
import { t, type Locale } from "@/lib/locale";

const selectCls = "w-full px-3 py-2.5 text-sm";

export function SearchPanel({
  initial,
  locale = "ja",
  actionLabel,
}: {
  initial?: SearchQuery;
  locale?: Locale;
  actionLabel?: string;
}) {
  const router = useRouter();
  const [q, setQ] = useState(initial?.q || "");
  const [style, setStyle] = useState<NonNullable<SearchQuery["style"]>>(initial?.style || "all");
  const [tuition, setTuition] = useState<NonNullable<SearchQuery["tuition"]>>(initial?.tuition || "all");
  const [duration, setDuration] = useState<NonNullable<SearchQuery["duration"]>>(initial?.duration || "all");
  const [level, setLevel] = useState<NonNullable<SearchQuery["level"]>>(initial?.level || "all");
  const [english, setEnglish] = useState<NonNullable<SearchQuery["english"]>>(initial?.english || "all");
  const [more, setMore] = useState(false);
  const [trial, setTrial] = useState(!!initial?.trial);
  const [job, setJob] = useState(!!initial?.job);
  const [open, setOpen] = useState(!!initial?.open);
  const [intensive, setIntensive] = useState(!!initial?.intensive);

  function submit(e?: React.FormEvent) {
    e?.preventDefault();
    const qs = toSearchParams({
      q,
      style,
      tuition,
      duration,
      level,
      english,
      trial,
      job,
      open,
      intensive,
    });
    router.push(qs ? `/schools?${qs}` : "/schools");
  }

  return (
    <form onSubmit={submit} className="card p-4 md:p-5 shadow-sm">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        <label className="text-xs font-bold text-muted">
          <span className="inline-flex items-center gap-1"><Icon name="commute" size={14} />{t(locale, "style")}</span>
          <select className={`${selectCls} mt-1`} value={style} onChange={(e) => setStyle(e.target.value as NonNullable<SearchQuery["style"]>)}>
            <option value="all">{t(locale, "any")}</option>
            <option value="commute">{t(locale, "commute")}</option>
            <option value="online">{t(locale, "online")}</option>
            <option value="hybrid">{t(locale, "hybrid")}</option>
          </select>
        </label>
        <label className="text-xs font-bold text-muted">
          <span className="inline-flex items-center gap-1"><Icon name="yen" size={14} />{t(locale, "tuition")}</span>
          <select className={`${selectCls} mt-1`} value={tuition} onChange={(e) => setTuition(e.target.value as NonNullable<SearchQuery["tuition"]>)}>
            <option value="all">{t(locale, "any")}</option>
            <option value="lt30">{t(locale, "lt30")}</option>
            <option value="30to80">{t(locale, "t30to80")}</option>
            <option value="80to150">{t(locale, "t80to150")}</option>
            <option value="gt150">{t(locale, "gt150")}</option>
          </select>
        </label>
        <label className="text-xs font-bold text-muted">
          <span className="inline-flex items-center gap-1"><Icon name="calendar" size={14} />{t(locale, "duration")}</span>
          <select className={`${selectCls} mt-1`} value={duration} onChange={(e) => setDuration(e.target.value as NonNullable<SearchQuery["duration"]>)}>
            <option value="all">{t(locale, "any")}</option>
            <option value="lt3">{t(locale, "lt3")}</option>
            <option value="3to6">{t(locale, "d3to6")}</option>
            <option value="gt6">{t(locale, "gt6")}</option>
          </select>
        </label>
        <label className="text-xs font-bold text-muted">
          <span className="inline-flex items-center gap-1"><Icon name="chart" size={14} />{t(locale, "level")}</span>
          <select className={`${selectCls} mt-1`} value={level} onChange={(e) => setLevel(e.target.value as NonNullable<SearchQuery["level"]>)}>
            <option value="all">{t(locale, "any")}</option>
            <option value="beginner">{t(locale, "beginner")}</option>
            <option value="intermediate">{t(locale, "intermediate")}</option>
            <option value="advanced">{t(locale, "advanced")}</option>
          </select>
        </label>
        <label className="text-xs font-bold text-muted">
          <span className="inline-flex items-center gap-1"><Icon name="globe" size={14} />{t(locale, "english")}</span>
          <select className={`${selectCls} mt-1`} value={english} onChange={(e) => setEnglish(e.target.value as NonNullable<SearchQuery["english"]>)}>
            <option value="all">{t(locale, "englishAny")}</option>
            <option value="yes">{t(locale, "englishYes")}</option>
            <option value="no">{t(locale, "englishNo")}</option>
          </select>
        </label>
      </div>
      <div className="mt-3 flex flex-col md:flex-row gap-3">
        <input
          className="flex-1 px-3 py-2.5 text-sm"
          placeholder={t(locale, "keywordPh")}
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <button type="button" className="text-sm text-blue font-bold px-2" onClick={() => setMore((v) => !v)}>
          {t(locale, "moreFilters")}
        </button>
        <button type="submit" className="btn-coral whitespace-nowrap">
          <Icon name="search" size={16} className="text-white" />
          {actionLabel ?? t(locale, "searchNow")}
        </button>
      </div>
      {more ? (
        <div className="mt-3 flex flex-wrap gap-4 text-sm">
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" checked={trial} onChange={(e) => setTrial(e.target.checked)} />
            {t(locale, "trialFilter")}
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" checked={job} onChange={(e) => setJob(e.target.checked)} />
            {t(locale, "jobFilter")}
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" checked={open} onChange={(e) => setOpen(e.target.checked)} />
            {t(locale, "openFilter")}
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" checked={intensive} onChange={(e) => setIntensive(e.target.checked)} />
            {t(locale, "intensiveFilter")}
          </label>
        </div>
      ) : null}
    </form>
  );
}
