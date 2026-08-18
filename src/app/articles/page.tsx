import Link from "next/link";
import { articles } from "@/data/articles";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata = { title: "特集・コラム" };

export default function ArticlesPage() {
  return (
    <div className="container-page py-8">
      <Breadcrumb items={[{ href: "/", label: "ホーム" }, { label: "特集・コラム" }]} />
      <h1 className="text-3xl font-black mt-4">特集・コラム</h1>
      <p className="text-muted mt-2">寿司職人を目指す人のための、学校選びと仕事の基礎知識。</p>
      <div className="mt-6 grid md:grid-cols-2 gap-5">
        {articles.map((a) => (
          <article key={a.slug} className="card overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={a.image} alt="" className="h-44 w-full object-cover" />
            <div className="p-5">
              <p className="text-xs text-blue font-bold">{a.category}</p>
              <h2 className="font-extrabold text-lg mt-1">
                <Link href={`/articles/${a.slug}`} className="hover:text-blue">
                  {a.title}
                </Link>
              </h2>
              <p className="text-sm text-muted mt-2">{a.excerpt}</p>
              <p className="text-xs text-muted mt-3">
                {a.date} ／ {a.readMinutes}分
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
