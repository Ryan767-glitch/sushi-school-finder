import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { schools } from "@/data/schools";
import { getInquiryUrl, schoolPhoto } from "@/lib/school-media";

export const metadata = { title: "公式サイトで資料請求" };

export default function InquiryPage() {
  const list = schools.filter((s) => getInquiryUrl(s));
  return (
    <div className="container-page py-8">
      <Breadcrumb items={[{ href: "/", label: "ホーム" }, { label: "公式サイトで資料請求" }]} />
      <h1 className="text-3xl font-black mt-4">公式サイトで資料請求</h1>
      <p className="text-muted mt-3 max-w-2xl leading-7">
        当サイトは学校の代理で資料請求を受け付けていません。下のリンクは、公式サイトで入学相談・資料請求・申込ができるページです。入力内容は各校に直接届きます。
      </p>
      <p className="text-sm mt-2">掲載 {list.length}校 ／ 電話や店頭のみの学校は詳細ページをご覧ください。</p>
      <ul className="mt-8 space-y-3">
        {list.map((s) => (
          <li key={s.slug} className="card p-4 flex flex-col sm:flex-row sm:items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={schoolPhoto(s)} alt="" className="w-full sm:w-40 h-24 object-cover rounded-lg bg-soft" />
            <div className="flex-1 min-w-0">
              <p className="font-extrabold">{s.name}</p>
              <p className="text-xs text-muted mt-1">{s.areaLabel}</p>
            </div>
            <a href={getInquiryUrl(s)} target="_blank" rel="noopener noreferrer" className="btn-coral !py-2 text-sm shrink-0">
              公式で資料請求
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
