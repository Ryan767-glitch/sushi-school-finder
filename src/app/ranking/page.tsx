import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { StarRating } from "@/components/ui/StarRating";
import { Pill } from "@/components/ui/Badge";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { rankSchools, type RankTab } from "@/lib/ranking";
import { yenFrom, DATA_AS_OF } from "@/lib/format";
import { schoolCount } from "@/data/schools";

export const metadata = { title: "人気の寿司スクールランキング" };

const tabs: { id: RankTab; label: string }[] = [
  { id: "all", label: "総合" },
  { id: "beginner", label: "初心者向け" },
  { id: "intensive", label: "短期集中" },
  { id: "open", label: "開業支援" },
  { id: "online", label: "オンライン対応" },
];

export default async function RankingPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const { tab } = await searchParams;
  const active = (tabs.some((t) => t.id === tab) ? tab : "all") as RankTab;
  const list = rankSchools(active);
  const top = list.slice(0, 3);
  const rest = list.slice(3);

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero-nigiri.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/30" />
        </div>
        <div className="container-page relative py-10">
          <Breadcrumb items={[{ href: "/", label: "ホーム" }, { label: "ランキング" }]} />
          <h1 className="text-3xl md:text-4xl font-black mt-4">
            人気の<span className="text-coral">寿司スクール</span>ランキング
          </h1>
          <p className="text-muted mt-3 max-w-xl">
            公開情報をもとに、カリキュラム・支援・費用対効果・実績を総合して編集部が並べています。Googleの公式ランキングではありません。
          </p>
          <p className="text-sm mt-3">更新：{DATA_AS_OF} ／ 調査対象：{schoolCount()}校</p>
        </div>
      </section>

      <div className="container-page mt-6">
        <div className="card p-2 flex flex-wrap gap-1">
          {tabs.map((t) => (
            <Link
              key={t.id}
              href={`/ranking?tab=${t.id}`}
              className={`px-4 py-2 rounded-lg text-sm font-bold ${active === t.id ? "bg-navy text-white" : "text-muted hover:bg-soft"}`}
            >
              {t.label}
            </Link>
          ))}
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {top.map((s, i) => (
            <article key={s.slug} className="card overflow-hidden">
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.image} alt="" className="h-40 w-full object-cover" />
                <span className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white grid place-items-center font-black">
                  {i + 1}
                </span>
                <span className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
                  総合 {s.editorialScore.toFixed(2)}
                </span>
              </div>
              <div className="p-4">
                <h2 className="font-extrabold">{s.name}</h2>
                <p className="text-xs text-muted">{s.areaLabel}</p>
                <div className="mt-1">
                  <StarRating value={s.editorialScore} showValue />
                </div>
                <p className="text-sm text-muted mt-2 line-clamp-2">{s.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {s.levels.includes("beginner") ? <Pill>初心者向け</Pill> : null}
                  {s.jobSupport ? <Pill>就職支援</Pill> : null}
                  {s.openSupport ? <Pill>開業支援</Pill> : null}
                </div>
                <p className="font-extrabold mt-3">{yenFrom(s.tuitionFrom)}</p>
                <div className="flex gap-2 mt-3">
                  <Link href={`/schools/${s.slug}`} className="btn-outline !py-2 text-sm flex-1">詳細を見る</Link>
                  <Link href={`/inquiry?schools=${s.slug}`} className="btn-coral !py-2 text-sm flex-1">資料請求</Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="card mt-6 divide-y divide-line">
          {rest.map((s, i) => (
            <div key={s.slug} className="p-3 md:p-4 flex flex-wrap items-center gap-3">
              <span className="w-8 font-black text-muted">{i + 4}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.image} alt="" className="w-16 h-12 object-cover rounded-lg" />
              <div className="flex-1 min-w-[160px]">
                <p className="font-extrabold">{s.name}</p>
                <p className="text-xs text-muted">{s.prefecture}{s.city}</p>
              </div>
              <StarRating value={s.editorialScore} showValue />
              <Link href={`/schools/${s.slug}`} className="text-sm font-bold text-blue">詳細</Link>
              <Link href={`/inquiry?schools=${s.slug}`} className="btn-coral !py-1.5 !px-3 text-sm">資料請求</Link>
            </div>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <div className="card p-5">
            <h2 className="font-extrabold">ランキングの評価基準</h2>
            <p className="text-sm text-muted mt-2">5つの評価項目をもとに総合スコアを算出しています。</p>
            <ul className="mt-3 text-sm space-y-1">
              <li>受講生の満足度 30%</li>
              <li>カリキュラム・指導 25%</li>
              <li>サポート体制 20%</li>
              <li>費用の納得感 15%</li>
              <li>実績・信頼性 10%</li>
            </ul>
            <p className="text-xs text-muted mt-3">※小数点第3位を四捨五入。Googleマップの星そのものではありません。</p>
          </div>
          <div className="card p-5">
            <h2 className="font-extrabold">編集部コメント</h2>
            <p className="text-sm leading-relaxed mt-3">
              今回の並びは、公開されているカリキュラム・学費・支援制度・卒業生の発信を総合したものです。自分の目的やライフスタイルに合った学校選びの参考にしてください。必ず公式サイトとGoogleマップで最新情報を確認してください。
            </p>
          </div>
        </div>
        <CtaBanner title="上位スクールを一度に比較できます" />
      </div>
    </div>
  );
}
