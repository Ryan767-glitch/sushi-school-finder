import Link from "next/link";
import { reviews, reviewHighlights } from "@/data/reviews";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { StarRating } from "@/components/ui/StarRating";
import { DATA_AS_OF } from "@/lib/format";

export const metadata = { title: "受講生の口コミ・評判" };

export default function ReviewsPage() {
  const avg = Number((reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1));
  const dist = [5, 4, 3, 2, 1].map((n) => ({ n, c: reviews.filter((r) => r.rating === n).length }));
  return (
    <div className="container-page py-8">
      <Breadcrumb items={[{ href: "/", label: "ホーム" }, { label: "口コミ・評判" }]} />
      <h1 className="text-3xl font-black mt-4">受講生の口コミ・評判</h1>
      <p className="text-muted mt-2">
        実際の学校に通った人の公開体験談・取材・公式発表を編集部が要約しました。個人の実名投稿の転載ではありません。
      </p>

      <section className="card p-5 mt-6 grid md:grid-cols-3 gap-6">
        <div className="text-center">
          <p className="text-sm text-muted">要約サンプルの平均</p>
          <p className="text-5xl font-black text-navy mt-1">{avg}</p>
          <StarRating value={avg} />
          <p className="text-xs text-muted mt-2">{reviews.length}件 ／ {DATA_AS_OF}</p>
        </div>
        <div>
          <p className="font-bold mb-2">評価の内訳</p>
          {dist.map((d) => (
            <div key={d.n} className="flex items-center gap-2 text-sm mb-1">
              <span className="w-6">{d.n}</span>
              <div className="flex-1 h-2 bg-soft rounded">
                <div className="h-2 bg-gold rounded" style={{ width: `${(d.c / reviews.length) * 100}%` }} />
              </div>
              <span className="w-8 text-right">{d.c}</span>
            </div>
          ))}
        </div>
        <div>
          <p className="font-bold mb-2">よく評価されているポイント</p>
          <ul className="text-sm space-y-1">
            <li>講師の質</li>
            <li>実践的なカリキュラム</li>
            <li>就職・独立サポート</li>
            <li>雰囲気・人間関係</li>
          </ul>
        </div>
      </section>

      <div className="mt-8 grid lg:grid-cols-[1fr_300px] gap-6">
        <div className="space-y-4">
          {reviews.map((r) => (
            <article key={r.id} className="card p-5">
              <div className="flex gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={r.avatar} alt="" className="w-14 h-14 rounded-full object-cover" />
                <div className="flex-1">
                  <Link href={`/schools/${r.schoolSlug}`} className="font-extrabold hover:text-blue">
                    {r.schoolName}
                  </Link>
                  <p className="text-xs text-muted">{r.course} ／ {r.persona}</p>
                  <div className="mt-1">
                    <StarRating value={r.rating} />
                  </div>
                  <h2 className="font-bold mt-2">{r.title}</h2>
                  <p className="text-sm mt-2 leading-relaxed">{r.body}</p>
                  <div className="flex flex-wrap gap-2 mt-3 text-xs">
                    {r.goods.map((g) => (
                      <span key={g} className="bg-soft-blue text-blue px-2 py-1 rounded-full">良かった点 {g}</span>
                    ))}
                    {r.bads.map((g) => (
                      <span key={g} className="bg-red-50 text-coral px-2 py-1 rounded-full">気になった点 {g}</span>
                    ))}
                  </div>
                  <p className="text-xs text-muted mt-3">{r.sourceLabel} ／ {r.dateLabel}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <aside className="space-y-4">
          <div className="card p-4">
            <h2 className="font-extrabold">受講生の声（ハイライト）</h2>
            {reviewHighlights.map((h) => (
              <blockquote key={h.quote} className="mt-4 text-sm">
                「{h.quote}」
                <footer className="text-xs text-muted mt-1">{h.meta}</footer>
              </blockquote>
            ))}
          </div>
          <div className="card p-4 bg-soft-blue">
            <p className="font-bold">口コミは参考に、最終確認は公式と現地で</p>
            <p className="text-sm mt-2">体験レッスンとGoogleマップの最新口コミを必ず見てください。</p>
            <Link href="/inquiry" className="btn-coral w-full mt-3 text-sm">資料請求する</Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
