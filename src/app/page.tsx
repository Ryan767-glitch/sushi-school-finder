import Link from "next/link";
import { SearchPanel } from "@/components/school/SearchPanel";
import { SchoolCard } from "@/components/school/SchoolCard";
import { JapanMap } from "@/components/school/JapanMap";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { featuredSchools, schoolCount } from "@/data/schools";
import { reviewHighlights } from "@/data/reviews";
import { stats } from "@/lib/search";
import { DATA_AS_OF } from "@/lib/format";

export default function HomePage() {
  const featured = featuredSchools();
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero-nigiri.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/20" />
        </div>
        <div className="container-page relative py-14 md:py-20">
          <h1 className="text-3xl md:text-5xl font-black leading-tight max-w-xl">
            あなたに合う
            <br />
            寿司スクールを、
            <br />
            <span className="text-coral">全国から見つけよう</span>
          </h1>
          <p className="mt-4 text-muted max-w-lg">
            学び方・費用・サポートをまとめて比較。実在する{schoolCount()}校の公開情報をもとに、理想の学校選びをサポートします。
          </p>
          <div className="mt-8 max-w-4xl">
            <SearchPanel />
          </div>
        </div>
      </section>

      <section className="bg-soft-blue/70">
        <div className="container-page py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <Stat icon="school" label="スクール掲載数" value={`${stats.schools}校`} note={`※${DATA_AS_OF}時点`} />
          <Stat icon="person" label="体験レッスンあり" value={`${stats.trial}校`} note={`${Math.round((stats.trial / stats.schools) * 100)}%`} />
          <Stat icon="hands" label="就職支援あり" value={`${stats.job}校`} note={`${Math.round((stats.job / stats.schools) * 100)}%`} />
        </div>
      </section>

      <section className="container-page mt-14">
        <div className="flex items-end justify-between mb-5">
          <h2 className="text-xl font-extrabold">注目の寿司スクール</h2>
          <Link href="/schools" className="text-sm font-bold text-blue">
            すべてのスクールを見る →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {featured.slice(0, 3).map((s) => (
            <SchoolCard key={s.slug} school={s} />
          ))}
        </div>
      </section>

      <section className="container-page mt-16 grid lg:grid-cols-2 gap-8">
        <div>
          <div className="flex items-end justify-between mb-4">
            <h2 className="text-xl font-extrabold">受講生の声</h2>
            <Link href="/reviews" className="text-sm font-bold text-blue">
              すべての口コミを見る →
            </Link>
          </div>
          <div className="space-y-3">
            {reviewHighlights.map((r) => (
              <article key={r.quote} className="card p-4 flex gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={r.avatar} alt="" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-bold">{r.quote}</p>
                  <p className="text-xs text-muted mt-1">{r.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-extrabold mb-4">エリアから探す</h2>
          <JapanMap />
        </div>
      </section>

      <section className="container-page mt-16">
        <h2 className="text-xl font-extrabold mb-5">スクール探しの4ステップ</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { n: "1", t: "条件を選ぶ", d: "希望の学び方や期間、費用などの条件を選択します。" },
            { n: "2", t: "スクールを比較", d: "気になる学校を比較して、自分に合う学校を見つけます。" },
            { n: "3", t: "資料請求・体験予約", d: "資料請求や体験レッスンの予約で、さらに詳しい情報をチェック。" },
            { n: "4", t: "学ぶ・未来へ", d: "スキルを身につけて、憧れの寿司職人へ。" },
          ].map((s) => (
            <div key={s.n} className="card p-5">
              <span className="inline-grid place-items-center w-8 h-8 rounded-full bg-blue text-white font-bold">{s.n}</span>
              <h3 className="font-extrabold mt-3">{s.t}</h3>
              <p className="text-sm text-muted mt-2 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

function Stat({ label, value, note }: { icon: string; label: string; value: string; note: string }) {
  return (
    <div>
      <p className="text-sm text-muted">{label}</p>
      <p className="text-3xl font-black text-navy mt-1">{value}</p>
      <p className="text-xs text-muted mt-1">{note}</p>
    </div>
  );
}
