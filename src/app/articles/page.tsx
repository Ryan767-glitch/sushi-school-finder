import Link from "next/link";
import { articles } from "@/data/articles";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { t, tx } from "@/lib/locale";
import { getLocale } from "@/lib/get-locale";

export const metadata = { title: "特集・コラム" };

export default async function ArticlesPage() {
  const locale = await getLocale();
  const sorted = [...articles].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <div className="container-page py-8">
      <Breadcrumb items={[{ href: "/", label: t(locale, "home") }, { label: t(locale, "articlesTitle") }]} />
      <h1 className="text-3xl font-black mt-4">{t(locale, "articlesTitle")}</h1>
      <p className="text-muted mt-2">{t(locale, "articlesLead")}</p>
      <div className="mt-6 grid md:grid-cols-2 gap-5">
        {sorted.map((a) => (
          <article key={a.slug} className="card overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={a.image} alt="" className="h-44 w-full object-cover" />
            <div className="p-5">
              <p className="text-xs text-blue font-bold">{tx(locale, a.category)}</p>
              <h2 className="font-extrabold text-lg mt-1">
                <Link href={`/articles/${a.slug}`} className="hover:text-blue">
                  {tx(locale, a.title)}
                </Link>
              </h2>
              <p className="text-sm text-muted mt-2">{tx(locale, a.excerpt)}</p>
              <p className="text-xs text-muted mt-3">
                {a.date} ／ {a.readMinutes}
                {t(locale, "minutes")}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
