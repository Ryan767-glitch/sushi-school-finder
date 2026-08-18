import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata = { title: "利用規約" };

export default function TermsPage() {
  return (
    <div className="container-page py-8 max-w-3xl">
      <Breadcrumb items={[{ href: "/", label: "ホーム" }, { label: "利用規約" }]} />
      <h1 className="text-3xl font-black mt-4">利用規約</h1>
      <div className="space-y-4 mt-6 leading-8">
        <p>本サイトの閲覧・資料請求により、本規約に同意したものとみなします。</p>
        <h2 className="text-xl font-extrabold">禁止事項</h2>
        <ul className="list-disc pl-5">
          <li>不正アクセス、過度な連続送信、スクレイピングによる負荷</li>
          <li>虚偽の問い合わせ</li>
          <li>掲載内容の無断転載（引用の範囲を超えるもの）</li>
        </ul>
        <h2 className="text-xl font-extrabold">免責</h2>
        <p>学費・日程・評価は公開情報に基づく目安であり、正確性を保証しません。入学契約は各校と利用者の間で成立します。</p>
      </div>
    </div>
  );
}
