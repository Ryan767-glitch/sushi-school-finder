"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toSearchParams, type SearchQuery } from "@/lib/search";

const selectCls = "w-full px-3 py-2.5 text-sm";

export function SearchPanel({
  initial,
  actionLabel = "この条件で探す",
}: {
  initial?: SearchQuery;
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
          受講スタイル
          <select className={`${selectCls} mt-1`} value={style} onChange={(e) => setStyle(e.target.value as NonNullable<SearchQuery["style"]>)}>
            <option value="all">指定なし</option>
            <option value="commute">通学</option>
            <option value="online">オンライン</option>
            <option value="hybrid">通学・オンライン</option>
          </select>
        </label>
        <label className="text-xs font-bold text-muted">
          費用
          <select className={`${selectCls} mt-1`} value={tuition} onChange={(e) => setTuition(e.target.value as NonNullable<SearchQuery["tuition"]>)}>
            <option value="all">指定なし</option>
            <option value="lt30">30万円未満</option>
            <option value="30to80">30万〜80万円</option>
            <option value="80to150">80万〜150万円</option>
            <option value="gt150">150万円超</option>
          </select>
        </label>
        <label className="text-xs font-bold text-muted">
          期間
          <select className={`${selectCls} mt-1`} value={duration} onChange={(e) => setDuration(e.target.value as NonNullable<SearchQuery["duration"]>)}>
            <option value="all">指定なし</option>
            <option value="lt3">3ヶ月未満</option>
            <option value="3to6">3〜6ヶ月</option>
            <option value="gt6">6ヶ月超</option>
          </select>
        </label>
        <label className="text-xs font-bold text-muted">
          対象レベル
          <select className={`${selectCls} mt-1`} value={level} onChange={(e) => setLevel(e.target.value as NonNullable<SearchQuery["level"]>)}>
            <option value="all">指定なし</option>
            <option value="beginner">初心者向け</option>
            <option value="intermediate">中級</option>
            <option value="advanced">上級</option>
          </select>
        </label>
        <label className="text-xs font-bold text-muted">
          英語対応
          <select className={`${selectCls} mt-1`} value={english} onChange={(e) => setEnglish(e.target.value as NonNullable<SearchQuery["english"]>)}>
            <option value="all">問わない</option>
            <option value="yes">あり</option>
            <option value="no">なし</option>
          </select>
        </label>
      </div>
      <div className="mt-3 flex flex-col md:flex-row gap-3">
        <input
          className="flex-1 px-3 py-2.5 text-sm"
          placeholder="フリーワード（例：東京 短期集中 夜間）"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <button type="button" className="text-sm text-blue font-bold px-2" onClick={() => setMore((v) => !v)}>
          こだわり条件を追加
        </button>
        <button type="submit" className="btn-coral whitespace-nowrap">
          {actionLabel}
        </button>
      </div>
      {more ? (
        <div className="mt-3 flex flex-wrap gap-4 text-sm">
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" checked={trial} onChange={(e) => setTrial(e.target.checked)} />
            体験レッスンあり
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" checked={job} onChange={(e) => setJob(e.target.checked)} />
            就職支援あり
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" checked={open} onChange={(e) => setOpen(e.target.checked)} />
            開業支援あり
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" checked={intensive} onChange={(e) => setIntensive(e.target.checked)} />
            短期集中
          </label>
        </div>
      ) : null}
    </form>
  );
}
