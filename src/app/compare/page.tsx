"use client";

import Link from "next/link";
import { useMemo, type ReactNode } from "react";
import { useAppState } from "@/context/AppState";
import { getSchool, schools } from "@/data/schools";
import { yenFrom, styleLabel, levelLabel } from "@/lib/format";
import { googleLabel } from "@/lib/rating";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { schoolPhoto, getInquiryUrl } from "@/lib/school-media";

const rows: { key: string; label: string; get: (s: NonNullable<ReturnType<typeof getSchool>>) => ReactNode }[] = [
  { key: "tuition", label: "学費", get: (s) => yenFrom(s.tuitionFrom) },
  { key: "duration", label: "期間", get: (s) => `${s.durationMonthsFrom}〜${s.durationMonthsTo}ヶ月` },
  { key: "learn", label: "学べる内容", get: (s) => s.learnItems.join(" / ") },
  { key: "job", label: "就職支援", get: (s) => (s.jobSupport ? "あり" : "なし") },
  { key: "open", label: "開業支援", get: (s) => (s.openSupport ? "あり" : "なし") },
  { key: "trial", label: "体験レッスン", get: (s) => (s.trialLesson ? "あり" : "要確認") },
  { key: "online", label: "オンライン対応", get: (s) => (s.onlineAvailable ? "あり" : "なし") },
  { key: "level", label: "対象レベル", get: (s) => s.levels.map(levelLabel).join("〜") },
  { key: "area", label: "エリア", get: (s) => s.areaLabel },
  { key: "style", label: "受講スタイル", get: (s) => s.styles.map(styleLabel).join("・") },
  { key: "score", label: "Google評価", get: (s) => <span className="text-xl font-black">{googleLabel(s).text}</span> },
];

export default function ComparePage() {
  const { compare, toggleCompare, clearCompare } = useAppState();
  const list = useMemo(() => compare.map(getSchool).filter(Boolean), [compare]);

  return (
    <div className="container-page py-8">
      <Breadcrumb items={[{ href: "/", label: "ホーム" }, { label: "比較する" }]} />
      <h1 className="text-3xl font-black mt-4">人気スクールをまとめて比較</h1>
      <p className="text-muted mt-2">気になるスクールを選んで、学費・期間・サポート内容などをまとめて比較できます。</p>

      {list.length === 0 ? (
        <div className="card p-8 mt-6 text-center">
          <p>比較中のスクールはありません。学校ページから最大5校まで追加できます。</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {schools.slice(0, 5).map((s) => (
              <button key={s.slug} type="button" className="btn-outline text-sm" onClick={() => toggleCompare(s.slug)}>
                {s.shortName}を追加
              </button>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm">比較中 {list.length}校</p>
            <button type="button" className="text-sm text-muted" onClick={clearCompare}>
              比較をクリア
            </button>
          </div>
          <div className="mt-4 overflow-x-auto card">
            <table className="w-full text-sm min-w-[720px]">
              <thead>
                <tr>
                  <th className="p-3 text-left w-36"> </th>
                  {list.map((s) => (
                    <th key={s!.slug} className="p-3 align-top">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={schoolPhoto(s!)} alt="" className="h-24 w-full object-cover rounded-lg bg-soft" />
                      <p className="font-extrabold mt-2">{s!.name}</p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.key} className="border-t border-line">
                    <th className="p-3 text-left text-muted font-medium">{row.label}</th>
                    {list.map((s) => (
                      <td key={s!.slug + row.key} className="p-3">
                        {row.get(s!)}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t border-line">
                  <th className="p-3 text-left">詳細・資料</th>
                  {list.map((s) => (
                    <td key={s!.slug + "cta"} className="p-3">
                      <Link href={`/schools/${s!.slug}`} className="btn-coral w-full !py-2 text-sm">
                        詳細を見る
                      </Link>
                      {getInquiryUrl(s!) ? (
                        <a href={getInquiryUrl(s!)} target="_blank" rel="noopener noreferrer" className="btn-outline w-full !py-2 text-sm mt-2">
                          公式で資料請求
                        </a>
                      ) : null}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 grid md:grid-cols-4 gap-3">
            {[
              ["学費と期間のバランス", "予算と学習期間のバランスを比較。"],
              ["実践力を身につける", "実習量やカリキュラムの内容を確認。"],
              ["サポート体制を確認", "就職・開業サポートの有無は将来の安心に直結。"],
              ["通いやすさも大切", "エリアや通学のしやすさも最終のポイント。"],
            ].map(([t, d]) => (
              <div key={t} className="card p-4">
                <p className="font-bold">{t}</p>
                <p className="text-sm text-muted mt-1">{d}</p>
              </div>
            ))}
          </div>
        </>
      )}

      <section className="mt-10 card p-6 flex flex-col md:flex-row items-center justify-between gap-4 bg-soft-blue">
        <div>
          <h2 className="text-xl font-extrabold">資料請求は各校の公式サイトへ</h2>
          <p className="text-sm text-muted mt-1">当サイトは代理請求しません。公式フォームがある学校だけ案内しています。</p>
        </div>
        <Link href="/inquiry" className="btn-coral">公式の資料請求一覧</Link>
      </section>
    </div>
  );
}
