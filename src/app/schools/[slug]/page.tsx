import { notFound } from "next/navigation";
import { getSchool, mapsUrl, embedMapsUrl, schools } from "@/data/schools";
import { reviews } from "@/data/reviews";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { StarRating } from "@/components/ui/StarRating";
import { GoogleRating } from "@/components/ui/GoogleRating";
import { Pill } from "@/components/ui/Badge";
import { FavoriteButton } from "@/components/school/FavoriteButton";
import { yen, yenFrom, styleLabel, levelLabel, DATA_AS_OF } from "@/lib/format";
import { schoolPhoto, getInquiryUrl } from "@/lib/school-media";
import { OfficialInquiry } from "@/components/school/OfficialInquiry";
import type { Metadata } from "next";

export function generateStaticParams() {
  return schools.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getSchool(slug);
  if (!s) return {};
  return { title: s.name, description: s.description };
}

export default async function SchoolDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getSchool(slug);
  if (!s) notFound();
  const schoolReviews = reviews.filter((r) => r.schoolSlug === s.slug);
  return (
    <div className="container-page py-8">
      <Breadcrumb items={[{ href: "/", label: "ホーム" }, { href: "/schools", label: "スクールを探す" }, { label: s.name }]} />
      <div className="mt-5 grid lg:grid-cols-[1fr_340px] gap-6">
        <div>
          <h1 className="text-3xl font-black mt-2">{s.name}</h1>
          <p className="text-sm text-muted mt-2">{s.areaLabel} / {s.nearestStation}</p>
          <div className="mt-2 flex flex-col gap-1">
            <GoogleRating school={s} />
            <span className="text-xs text-muted">{s.ratingSource}</span>
          </div>
          <p className="mt-4 leading-relaxed">{s.description}</p>
          <div className="mt-3">
            <FavoriteButton slug={s.slug} />
          </div>
        </div>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={schoolPhoto(s)} alt={`${s.name}の写真`} className="w-full h-64 object-cover rounded-xl bg-soft" />
          <p className="text-[11px] text-muted mt-1">写真は公式サイトまたはGoogleマップの公開画像です。最新の様子は公式と地図でご確認ください。</p>
        </div>
      </div>

      <div className="mt-6 card p-4 grid grid-cols-2 md:grid-cols-7 gap-3 text-center">
        <Info k="学費目安" v={yenFrom(s.tuitionFrom)} />
        <Info k="受講スタイル" v={s.styles.map(styleLabel).join("・")} />
        <Info k="期間" v={`${s.durationMonthsFrom}〜${s.durationMonthsTo}ヶ月`} />
        <Info k="対象レベル" v={s.levels.map(levelLabel).join("〜")} />
        <Info k="就職支援" v={s.jobSupport ? "あり" : "なし"} />
        <Info k="体験レッスン" v={s.trialLesson ? "あり" : "要確認"} />
        <div className="col-span-2 md:col-span-1 flex flex-col gap-2">
          {getInquiryUrl(s) ? <OfficialInquiry school={s} className="btn-coral !py-2 text-sm" /> : <a href={s.officialUrl} target="_blank" rel="noopener noreferrer" className="btn-outline !py-2 text-sm">公式サイト</a>}
        </div>
      </div>

      <div className="mt-8 grid lg:grid-cols-[1fr_320px] gap-6">
        <div className="space-y-8">
          <section className="card p-6">
            <h2 className="text-xl font-extrabold">概要</h2>
            <p className="mt-3 leading-relaxed text-[15px]">{s.longDescription}</p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-2">
              {s.features.map((f) => (
                <li key={f} className="text-sm before:content-['✓'] before:text-blue before:mr-2">{f}</li>
              ))}
            </ul>
          </section>

          <section className="card p-6">
            <h2 className="text-xl font-extrabold">カリキュラム・コース</h2>
            <div className="mt-4 grid md:grid-cols-3 gap-4">
              {s.courses.map((c) => (
                <article key={c.id} className="border border-line rounded-xl overflow-hidden">
                  <div className="p-3">
                    <h3 className="font-extrabold mt-1">{c.name}</h3>
                    <p className="text-xs text-muted mt-1">{c.summary}</p>
                    <p className="text-xs mt-2">期間 {c.durationLabel} / {c.sessionsLabel}</p>
                    <p className="font-extrabold mt-2">{yen(c.tuitionFrom)}〜</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="card p-6 overflow-x-auto">
            <h2 className="text-xl font-extrabold">料金一覧（目安）</h2>
            <table className="w-full text-sm mt-4 min-w-[520px]">
              <thead className="bg-soft text-left">
                <tr>
                  <th className="p-2">コース</th>
                  <th className="p-2">期間</th>
                  <th className="p-2">入学金</th>
                  <th className="p-2">受講料</th>
                </tr>
              </thead>
              <tbody>
                {s.courses.map((c) => (
                  <tr key={c.id} className="border-t border-line">
                    <td className="p-2">{c.name}</td>
                    <td className="p-2">{c.durationLabel}</td>
                    <td className="p-2">{c.enrollmentFee ? yen(c.enrollmentFee) : "公式確認"}</td>
                    <td className="p-2 font-bold">{yen(c.tuitionFrom)}〜</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-muted mt-3">※{DATA_AS_OF}の公開情報に基づく目安です。教材費・包丁代が別途かかる場合があります。</p>
          </section>

          {s.instructors.length > 0 ? (
            <section className="card p-6">
              <h2 className="text-xl font-extrabold">講師紹介</h2>
              <div className="mt-4 grid sm:grid-cols-3 gap-4">
                {s.instructors.map((i) => (
                  <article key={i.name}>
                    <p className="text-xs text-muted">{i.title}</p>
                    <p className="font-extrabold">{i.name}</p>
                    <p className="text-sm text-muted mt-1">{i.bio}</p>
                    {i.verified ? <p className="text-[11px] text-blue mt-1">公式公開情報に基づく</p> : null}
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          <section className="card p-6">
            <h2 className="text-xl font-extrabold">公開口コミの要約</h2>
            {schoolReviews.length === 0 ? (
              <p className="text-sm text-muted mt-3">この学校の個別要約はまだありません。Googleマップと公式の卒業生紹介をご確認ください。</p>
            ) : (
              <div className="mt-4 space-y-3">
                {schoolReviews.map((r) => (
                  <article key={r.id} className="border border-line rounded-xl p-4">
                    <div className="flex items-center gap-2">
                      <StarRating value={r.rating} />
                      <span className="font-bold">{r.title}</span>
                    </div>
                    <p className="text-sm mt-2">{r.body}</p>
                    <p className="text-xs text-muted mt-2">{r.sourceLabel}</p>
                  </article>
                ))}
              </div>
            )}
          </section>

          <section className="card p-6">
            <h2 className="text-xl font-extrabold">よくある質問</h2>
            <div className="mt-3 divide-y divide-line">
              {s.faqs.map((f) => (
                <details key={f.q} className="py-3">
                  <summary className="font-bold cursor-pointer">{f.q}</summary>
                  <p className="text-sm text-muted mt-2">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-4">
          <div className="card p-4">
            <h2 className="font-extrabold">スクールへのアクセス</h2>
            <div className="mt-3 rounded-xl overflow-hidden h-40 bg-soft">
              <iframe
                title={`${s.name}の地図`}
                src={embedMapsUrl(s)}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-sm mt-3">{s.address}</p>
            <p className="text-sm text-muted">{s.nearestStation}</p>
            {s.phone ? <p className="text-sm mt-1">電話 {s.phone}</p> : null}
            {s.hours ? <p className="text-sm text-muted">{s.hours}</p> : null}
            <a href={mapsUrl(s)} target="_blank" rel="noopener noreferrer" className="btn-outline w-full mt-3 text-sm">
              Googleマップで見る
            </a>
            <a href={s.officialUrl} target="_blank" rel="noopener noreferrer" className="btn-coral w-full mt-2 text-sm">
              公式サイト
            </a>
          </div>
          <div className="card p-4 bg-soft-blue">
            <h2 className="font-extrabold">就職・独立サポート</h2>
            <ul className="mt-3 space-y-1 text-sm">
              {s.jobSupportDetails.length ? s.jobSupportDetails.map((d) => <li key={d}>✓ {d}</li>) : <li>公式サイトでご確認ください</li>}
            </ul>
          </div>
          <div className="card p-4">
            <p className="text-sm">学べる内容</p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {s.learnItems.map((x) => (
                <Pill key={x}>{x}</Pill>
              ))}
            </div>
            <p className="text-xs text-muted mt-3">実習量の目安は公式の授業時間・回数でご確認ください。</p>
          </div>
        </aside>
      </div>

      <section className="mt-10 card p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-extrabold text-lg">最新の学費・空き・体験は公式サイトで確認してください</p>
        <div className="flex gap-3">
          <OfficialInquiry school={s} className="btn-coral" />
          <a href={s.officialUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">公式サイトを開く</a>
        </div>
      </section>
    </div>
  );
}

function Info({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <p className="text-[11px] text-muted">{k}</p>
      <p className="font-extrabold text-sm mt-1">{v}</p>
    </div>
  );
}
