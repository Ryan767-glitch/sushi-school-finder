import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/data/articles";
import { featuredSchools } from "@/data/schools";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SchoolCard } from "@/components/school/SchoolCard";
import { t, tx } from "@/lib/locale";
import { getLocale } from "@/lib/get-locale";
import type { Metadata } from "next";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  const locale = await getLocale();
  return { title: tx(locale, a.title), description: tx(locale, a.excerpt) };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locale = await getLocale();
  const a = getArticle(slug);
  if (!a) notFound();
  const related = articles.filter((x) => a.related.includes(x.slug));
  return (
    <div>
      <div className="relative">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={a.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-white/88" />
        </div>
        <div className="container-page relative py-10">
          <Breadcrumb
            items={[
              { href: "/", label: t(locale, "home") },
              { href: "/articles", label: t(locale, "articlesTitle") },
              { label: tx(locale, a.title) },
            ]}
          />
          <span className="badge-rec mt-4 inline-block">{tx(locale, a.category)}</span>
          <h1 className="text-3xl md:text-4xl font-black mt-3 max-w-3xl">{tx(locale, a.title)}</h1>
          <p className="text-muted mt-3 max-w-2xl">{tx(locale, a.excerpt)}</p>
          <p className="text-sm mt-4">
            {t(locale, "author")} ／ {t(locale, "published")} {a.date} ／ {a.readMinutes}
            {t(locale, "minutes")}
          </p>
        </div>
      </div>
      <div className="container-page py-10 grid lg:grid-cols-[240px_1fr] gap-8">
        <aside className="card p-4 h-fit sticky top-20">
          <p className="font-bold mb-3">{t(locale, "toc")}</p>
          <ol className="space-y-2 text-sm">
            {a.sections.map((s, i) => (
              <li key={tx("ja", s.heading)}>
                <a href={`#s${i}`} className="hover:text-blue">
                  {i + 1}. {tx(locale, s.heading)}
                </a>
              </li>
            ))}
            {a.sources?.length ? (
              <li className="pt-2 border-t border-line">
                <a href="#sources" className="text-blue font-bold hover:underline">
                  🔗 {t(locale, "sources")}
                </a>
              </li>
            ) : null}
          </ol>
        </aside>
        <article className="max-w-3xl">
          {a.intro?.length ? (
            <div className="mb-8">
              {a.intro.map((p) => (
                <p key={p.ja} className="mt-3 leading-8 text-[17px]">
                  {tx(locale, p)}
                </p>
              ))}
            </div>
          ) : null}
          {a.keyPoints?.length ? (
            <div className="mb-10 rounded-2xl border border-line bg-soft p-5">
              <p className="font-extrabold text-ink flex items-center gap-2">
                <span className="text-blue">📌</span>
                {t(locale, "keyPoints")}
              </p>
              <ul className="mt-3 space-y-2 text-[15px] leading-7">
                {a.keyPoints.map((p) => (
                  <li key={p.ja} className="flex gap-2">
                    <span className="text-blue font-black mt-[2px]">・</span>
                    <span>{tx(locale, p)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {a.sections.map((s, i) => (
            <section key={tx("ja", s.heading)} id={`s${i}`} className="mb-12">
              <h2 className="text-2xl font-extrabold pb-2 border-b border-line/60">
                <span className="text-blue mr-2">{i + 1}</span>
                {tx(locale, s.heading)}
              </h2>
              {s.body.map((p) => (
                <p key={p.ja} className="mt-4 leading-8 text-[16px]">
                  {tx(locale, p)}
                </p>
              ))}
              {s.quote ? (
                <blockquote className="my-5 rounded-xl border-l-4 border-blue bg-soft p-4 text-[15px] leading-7">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue mb-1">
                    <span>💬 {t(locale, "quote")}</span>
                    {s.quote.speaker ? <span>({tx(locale, s.quote.speaker)})</span> : null}
                  </div>
                  <p className="italic text-ink font-medium">“{tx(locale, s.quote.text)}”</p>
                  <p className="text-xs text-muted mt-2 text-right">
                    出典: {s.quote.sourceUrl ? (
                      <a href={s.quote.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-blue hover:underline font-bold">
                        {s.quote.sourceTitle}（{s.quote.sourcePublisher}）↗
                      </a>
                    ) : (
                      <span>{s.quote.sourceTitle}（{s.quote.sourcePublisher}）</span>
                    )}
                  </p>
                </blockquote>
              ) : null}
              {s.bullets?.length ? (
                <ul className="mt-4 space-y-2 leading-7 pl-1 bg-soft/60 rounded-xl p-4">
                  {s.bullets.map((b) => (
                    <li key={b.ja} className="flex gap-2 text-[15px]">
                      <span className="text-blue font-black mt-[2px]">・</span>
                      <span>{tx(locale, b)}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {s.tip ? (
                <div className="mt-4 rounded-xl bg-soft-blue p-4 text-sm">
                  <p className="font-bold text-blue flex items-center gap-1">💡 {t(locale, "point")}</p>
                  <p className="mt-1 leading-6">{tx(locale, s.tip)}</p>
                </div>
              ) : null}
              {s.sourceLink ? (
                <div className="mt-4 p-3 rounded-xl border border-line bg-white flex items-center justify-between gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-muted text-xs font-bold px-2 py-0.5 rounded bg-soft">{s.sourceLink.publisher}</span>
                    <span className="font-bold text-ink">{tx(locale, s.sourceLink.label)}</span>
                  </div>
                  <a
                    href={s.sourceLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-xs py-1 px-3 whitespace-nowrap shrink-0 hover:border-blue hover:text-blue"
                  >
                    元記事を見る ↗
                  </a>
                </div>
              ) : null}
            </section>
          ))}
          {a.sources?.length ? (
            <section id="sources" className="mt-14 rounded-2xl border border-line bg-soft p-6">
              <div className="flex items-center gap-2">
                <span className="text-xl">📰</span>
                <h2 className="text-xl font-extrabold">{t(locale, "sources")}</h2>
              </div>
              <p className="text-xs text-muted mt-2 leading-6">{t(locale, "sourcesNote")}</p>
              <div className="mt-5 space-y-4">
                {a.sources.map((src) => (
                  <div key={src.url} className="p-4 rounded-xl border border-line bg-white shadow-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="text-[11px] font-bold text-blue uppercase tracking-wider px-2 py-0.5 rounded bg-soft-blue">
                          {src.publisher}
                        </span>
                        <h3 className="font-bold text-base mt-1 text-ink">
                          {src.title}
                        </h3>
                      </div>
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-coral text-xs py-2 px-4 shrink-0 text-center flex items-center justify-center gap-1.5"
                      >
                        <span>{t(locale, "openOriginal")}</span>
                        <span className="text-xs">↗</span>
                      </a>
                    </div>
                    {src.quote ? (
                      <div className="mt-3 pt-3 border-t border-line/60 text-xs text-ink bg-soft/50 p-2.5 rounded-lg leading-relaxed">
                        <span className="font-bold text-muted mr-1.5">【{t(locale, "quote")}】</span>
                        <span>“{tx(locale, src.quote)}”</span>
                      </div>
                    ) : null}
                    {src.summary ? (
                      <p className="mt-2 text-xs text-muted leading-relaxed">
                        <span className="font-bold mr-1">概要:</span>
                        {tx(locale, src.summary)}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>
          ) : null}
        </article>
      </div>
      <section className="container-page">
        <h2 className="text-xl font-extrabold mb-4">{t(locale, "recSchools")}</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {featuredSchools().slice(0, 3).map((s) => (
            <SchoolCard key={s.slug} school={s} />
          ))}
        </div>
        <h2 className="text-xl font-extrabold mt-10 mb-4">{t(locale, "related")}</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {related.map((r) => (
            <Link key={r.slug} href={`/articles/${r.slug}`} className="card overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={r.image} alt="" className="h-32 w-full object-cover" />
              <p className="p-4 font-bold">{tx(locale, r.title)}</p>
            </Link>
          ))}
        </div>
        <div className="card p-6 mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-extrabold">{t(locale, "findCta")}</p>
          <div className="flex gap-3">
            <Link href="/schools" className="btn-coral">{t(locale, "searchSchools")}</Link>
            <Link href="/compare" className="btn-outline">{t(locale, "compareSchools")}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
