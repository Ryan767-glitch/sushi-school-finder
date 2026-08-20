import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { GoogleRating } from "@/components/ui/GoogleRating";
import { Pill } from "@/components/ui/Badge";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { rankSchools, type RankTab } from "@/lib/ranking";
import { yenFrom } from "@/lib/format";
import { MAPS_CHECKED } from "@/lib/rating";
import { schoolCount } from "@/data/schools";
import { schoolPhoto } from "@/lib/school-media";
import { OfficialInquiry } from "@/components/school/OfficialInquiry";
import { Icon, type IconName } from "@/components/ui/Icon";

export const metadata = { title: "人気の寿司スクールランキング" };

const tabs: { id: RankTab; label: string; icon: IconName }[] = [
  { id: "all", label: "総合", icon: "trophy" },
  { id: "beginner", label: "初心者向け", icon: "person" },
  { id: "intensive", label: "短期集中", icon: "bolt" },
  { id: "open", label: "開業支援", icon: "handshake" },
  { id: "online", label: "オンライン対応", icon: "laptop" },
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
          <img src="/images/hero-real.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/30" />
        </div>
        <div className="container-page relative py-10">
          <Breadcrumb items={[{ href: "/", label: "ホーム" }, { label: "ランキング" }]} />
          <h1 className="text-3xl md:text-4xl font-black mt-4">
            人気の<span className="text-coral">寿司スクール</span>ランキング
          </h1>
          <p className="text-muted mt-3 max-w-xl">
            Googleマップの星と口コミ件数を組み合わせて並べています（件数が極端に少ない5.0が上位に来ないようにしています）。APIは使わず、{MAPS_CHECKED}にブラウザで一件ずつ確認しました。
          </p>
          <p className="text-sm mt-3 inline-flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-1"><Icon name="calendar" size={14} />確認日：{MAPS_CHECKED}</span>
            <span className="inline-flex items-center gap-1"><Icon name="school" size={14} />調査対象：{schoolCount()}校</span>
          </p>
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
              <span className="inline-flex items-center gap-1.5">
                <Icon name={t.icon} size={15} className={active === t.id ? "text-white" : "text-blue"} />
                {t.label}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {top.map((s, i) => (
            <article key={s.slug} className="card overflow-hidden">
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={schoolPhoto(s)} alt="" className="h-40 w-full object-cover bg-soft" />
                <span className={`absolute top-3 left-3 w-8 h-8 rounded-full grid place-items-center font-black text-white ${i === 0 ? "bg-[#d4af37]" : i === 1 ? "bg-[#9aa3ad]" : "bg-[#c08a54]"}`}>
                  {i + 1}
                </span>
                <span className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
                  {s.googleRating != null ? `Google ${s.googleRating.toFixed(1)}` : "Google評価なし"}
                </span>
              </div>
              <div className="p-4">
                <h2 className="font-extrabold">{s.name}</h2>
                <p className="text-xs text-muted">{s.areaLabel}</p>
                <div className="mt-1">
                  <GoogleRating school={s} compact />
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
                  <OfficialInquiry school={s} className="btn-coral !py-2 text-sm flex-1" />
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
              <img src={schoolPhoto(s)} alt="" className="w-16 h-12 object-cover rounded-lg bg-soft" />
              <div className="flex-1 min-w-[160px]">
                <p className="font-extrabold">{s.name}</p>
                <p className="text-xs text-muted">{s.prefecture}{s.city}</p>
              </div>
              <GoogleRating school={s} compact />
              <Link href={`/schools/${s.slug}`} className="text-sm font-bold text-blue">詳細</Link>
              <OfficialInquiry school={s} className="btn-coral !py-1.5 !px-3 text-sm" />
            </div>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <div className="card p-5">
            <h2 className="font-extrabold">ランキングの評価基準</h2>
            <p className="text-sm text-muted mt-2">星評価と口コミ件数を組み合わせたスコアで並べています。口コミが少ない高評価は、件数が増えるまで順位を抑えます。</p>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
              <div><Icon name="star" size={22} className="mx-auto text-gold" /><p className="mt-1 font-bold">Google評価</p></div>
              <div><Icon name="chat" size={22} className="mx-auto" /><p className="mt-1 font-bold">口コミ件数</p></div>
              <div><Icon name="shield" size={22} className="mx-auto" /><p className="mt-1 font-bold">学校掲載のみ</p></div>
            </div>
            <ul className="mt-3 text-sm space-y-1">
              <li>学校としてのGoogle掲載がある校を対象</li>
              <li>口コミ件数が多いほど星の信頼度を高く見る</li>
              <li>掲載なし・口コミ0件は下位</li>
            </ul>
            <p className="text-xs text-muted mt-3">※店の評価は学校評価に使いません。最新値は各校のGoogleマップで確認してください。</p>
          </div>
          <div className="card p-5">
            <h2 className="font-extrabold">確認メモ</h2>
            <p className="text-sm leading-relaxed mt-3">
              {MAPS_CHECKED}にブラウザで全校を検索しました。口コミが提供実習の試食客中心の学校や、学校ページがなく店だけある学校があります。数字は参考値です。
            </p>
          </div>
        </div>
        <CtaBanner title="上位スクールを一度に比較できます" subtitle="気になるスクールをまとめて比較しよう" />
      </div>
    </div>
  );
}
