import Link from "next/link";
import { SearchPanel } from "@/components/school/SearchPanel";
import { SchoolCard } from "@/components/school/SchoolCard";
import { JapanMap } from "@/components/school/JapanMap";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { featuredSchools, schoolCount } from "@/data/schools";
import { stats } from "@/lib/search";
import { DATA_AS_OF } from "@/lib/format";
import { Icon, type IconName } from "@/components/ui/Icon";

export default function HomePage() {
  const featured = featuredSchools();
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero-real.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/20" />
        </div>
        <div className="container-page relative py-14 md:py-20">
          <h1 className="text-3xl md:text-5xl font-black leading-tight max-w-xl">
            あなたに合う
            <br />
            <span className="text-coral">寿司スクール</span>を、
            <br />
            全国から見つけよう
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
          <Stat icon="handshake" label="就職支援あり" value={`${stats.job}校`} note={`${Math.round((stats.job / stats.schools) * 100)}%`} />
        </div>
      </section>

      <section className="container-page mt-14">
        <div className="flex items-end justify-between mb-5">
          <h2 className="text-xl font-extrabold inline-flex items-center gap-2">
            <Icon name="star" size={18} />
            注目の寿司スクール
          </h2>
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

      <section className="container-page mt-16">
        <div className="mb-5">
          <h2 className="text-xl font-extrabold">エリアから探す</h2>
          <p className="text-sm text-muted mt-1">日本地図の地方を選ぶと、そのエリアのスクール一覧へ移動します。</p>
        </div>
        <JapanMap />
      </section>

      <section className="container-page mt-16">
        <h2 className="text-xl font-extrabold mb-5">スクール探しの4ステップ</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { n: "1", icon: "clipboard" as const, t: "条件を選ぶ", d: "希望の学び方や期間、費用などの条件を選択します。" },
            { n: "2", icon: "scale" as const, t: "スクールを比較", d: "気になる学校を比較して、自分に合う学校を見つけます。" },
            { n: "3", icon: "envelope" as const, t: "資料請求・体験予約", d: "公式サイトから資料請求や体験レッスンを申し込みます。" },
            { n: "4", icon: "sushi" as const, t: "学ぶ・未来へ", d: "スキルを身につけて、憧れの寿司職人へ。" },
          ].map((s) => (
            <div key={s.n} className="card p-5 text-center">
              <span className="inline-grid place-items-center w-8 h-8 rounded-full bg-blue text-white font-bold">{s.n}</span>
              <div className="mt-3 flex justify-center">
                <Icon name={s.icon} size={36} />
              </div>
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

function Stat({ icon, label, value, note }: { icon: IconName; label: string; value: string; note: string }) {
  return (
    <div className="flex flex-col items-center">
      <Icon name={icon} size={40} />
      <p className="text-sm text-muted mt-2">{label}</p>
      <p className="text-3xl font-black text-navy mt-1">{value}</p>
      <p className="text-xs text-muted mt-1">{note}</p>
    </div>
  );
}
