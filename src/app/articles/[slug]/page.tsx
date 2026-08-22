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
        <aside className="card p-4 h-fit">
          <p className="font-bold mb-3">{t(locale, "toc")}</p>
          <ol className="space-y-2 text-sm">
            {a.sections.map((s, i) => (
              <li key={tx("ja", s.heading)}>
                <a href={`#s${i}`} className="hover:text-blue">
                  {i + 1}. {tx(locale, s.heading)}
                </a>
              </li>
            ))}
          </ol>
        </aside>
        <article className="max-w-3xl">
          {a.sections.map((s, i) => (
            <section key={tx("ja", s.heading)} id={`s${i}`} className="mb-10">
              <h2 className="text-2xl font-extrabold">
                <span className="text-blue mr-2">{i + 1}</span>
                {tx(locale, s.heading)}
              </h2>
              {s.body.map((p) => (
                <p key={p.ja} className="mt-3 leading-8">
                  {tx(locale, p)}
                </p>
              ))}
              {s.tip ? (
                <div className="mt-4 rounded-xl bg-soft-blue p-4 text-sm">
                  <p className="font-bold">{t(locale, "point")}</p>
                  <p className="mt-1">{tx(locale, s.tip)}</p>
                </div>
              ) : null}
            </section>
          ))}
          {a.sources?.length ? (
            <section className="mt-12 rounded-2xl border border-line bg-soft p-5">
              <h2 className="text-lg font-extrabold">{t(locale, "sources")}</h2>
              <p className="text-sm text-muted mt-2 leading-7">{t(locale, "sourcesNote")}</p>
              <ol className="mt-4 space-y-2 text-sm list-decimal pl-5">
                {a.sources.map((src) => (
                  <li key={src.url}>
                    <a href={src.url} target="_blank" rel="noopener noreferrer" className="text-blue font-bold hover:underline">
                      {src.title}
                    </a>
                    <span className="text-muted"> — {src.publisher}</span>
                  </li>
                ))}
              </ol>
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
