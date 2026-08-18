import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/data/articles";
import { featuredSchools } from "@/data/schools";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SchoolCard } from "@/components/school/SchoolCard";
import type { Metadata } from "next";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return { title: a.title, description: a.excerpt };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
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
          <Breadcrumb items={[{ href: "/", label: "ホーム" }, { href: "/articles", label: "特集・コラム" }, { label: a.title }]} />
          <span className="badge-rec mt-4 inline-block">特集・コラム</span>
          <h1 className="text-3xl md:text-4xl font-black mt-3 max-w-3xl">{a.title}</h1>
          <p className="text-muted mt-3 max-w-2xl">{a.excerpt}</p>
          <p className="text-sm mt-4">
            {a.author} ／ 公開 {a.date} ／ {a.readMinutes}分
          </p>
        </div>
      </div>
      <div className="container-page py-10 grid lg:grid-cols-[240px_1fr] gap-8">
        <aside className="card p-4 h-fit">
          <p className="font-bold mb-3">この記事の目次</p>
          <ol className="space-y-2 text-sm">
            {a.sections.map((s, i) => (
              <li key={s.heading}>
                <a href={`#s${i}`} className="hover:text-blue">
                  {i + 1}. {s.heading}
                </a>
              </li>
            ))}
          </ol>
        </aside>
        <article className="max-w-3xl">
          {a.sections.map((s, i) => (
            <section key={s.heading} id={`s${i}`} className="mb-10">
              <h2 className="text-2xl font-extrabold">
                <span className="text-blue mr-2">{i + 1}</span>
                {s.heading}
              </h2>
              {s.body.map((p) => (
                <p key={p} className="mt-3 leading-8">
                  {p}
                </p>
              ))}
              {s.tip ? (
                <div className="mt-4 rounded-xl bg-soft-blue p-4 text-sm">
                  <p className="font-bold">ポイント</p>
                  <p className="mt-1">{s.tip}</p>
                </div>
              ) : null}
            </section>
          ))}
        </article>
      </div>
      <section className="container-page">
        <h2 className="text-xl font-extrabold mb-4">おすすめの寿司スクール</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {featuredSchools().slice(0, 3).map((s) => (
            <SchoolCard key={s.slug} school={s} />
          ))}
        </div>
        <h2 className="text-xl font-extrabold mt-10 mb-4">関連記事</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {related.map((r) => (
            <Link key={r.slug} href={`/articles/${r.slug}`} className="card overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={r.image} alt="" className="h-32 w-full object-cover" />
              <p className="p-4 font-bold">{r.title}</p>
            </Link>
          ))}
        </div>
        <div className="card p-6 mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-extrabold">あなたに合うスクールを見つけよう</p>
          <div className="flex gap-3">
            <Link href="/schools" className="btn-coral">スクールを探す</Link>
            <Link href="/compare" className="btn-outline">スクールを比較する</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
