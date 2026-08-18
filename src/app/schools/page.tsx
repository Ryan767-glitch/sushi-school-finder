import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SearchPanel } from "@/components/school/SearchPanel";
import { SchoolListItem } from "@/components/school/SchoolListItem";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { filterSchools, parseSearch } from "@/lib/search";
import { schools } from "@/data/schools";

export const metadata = { title: "スクールを探す" };

export default async function SchoolsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const query = parseSearch(sp);
  const list = filterSchools(query);
  return (
    <div className="container-page py-8">
      <Breadcrumb items={[{ href: "/", label: "ホーム" }, { label: "検索結果一覧" }]} />
      <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
        <h1 className="text-3xl font-black">
          条件に合う<span className="text-coral">寿司スクール</span> {list.length}件
        </h1>
      </div>
      <div className="mt-5">
        <SearchPanel initial={query} actionLabel="この条件で再検索" />
      </div>
      <div className="mt-8 grid lg:grid-cols-[240px_1fr] gap-6">
        <aside className="space-y-4">
          <div className="card p-4">
            <p className="font-bold mb-3">人気の条件から探す</p>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/schools?q=東京" className="text-blue">東京</Link>
              <Link href="/schools?intensive=1" className="text-blue">短期集中</Link>
              <Link href="/schools?level=beginner" className="text-blue">初心者向け</Link>
              <Link href="/schools?open=1" className="text-blue">開業支援あり</Link>
              <Link href="/schools?english=yes" className="text-blue">英語対応</Link>
            </div>
          </div>
          <div className="card p-4">
            <p className="font-bold mb-2">比較リスト</p>
            <p className="text-sm text-muted">気になる学校を最大5校まで追加して、一覧で比べられます。</p>
            <Link href="/compare" className="btn-outline w-full mt-3 text-sm">比較リストを見る</Link>
          </div>
        </aside>
        <div>
          <p className="text-sm text-muted mb-3">
            {schools.length}校中 {list.length}件を表示
          </p>
          <div className="space-y-4">
            {list.map((s) => (
              <SchoolListItem key={s.slug} school={s} />
            ))}
            {list.length === 0 ? <p className="card p-8 text-center text-muted">条件に合う学校がありません。条件を緩めて再検索してください。</p> : null}
          </div>
        </div>
      </div>
      <CtaBanner title="気になる学校を比較して、あなたに最適な一校を見つけましょう。" />
    </div>
  );
}
