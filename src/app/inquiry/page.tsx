import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { schools } from "@/data/schools";
import { getInquiryUrl, schoolPhoto } from "@/lib/school-media";
import { Icon } from "@/components/ui/Icon";
import { OfficialInquiry } from "@/components/school/OfficialInquiry";

export const metadata = { title: "資料請求・体験予約" };

export default function InquiryPage() {
  const list = schools.filter((s) => getInquiryUrl(s));
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero-real.jpg" alt="" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="container-page relative py-10">
          <Breadcrumb items={[{ href: "/", label: "ホーム" }, { label: "資料請求・体験予約" }]} />
          <h1 className="text-3xl font-black mt-4">資料請求・体験予約</h1>
          <p className="text-muted mt-2 max-w-xl">
            公式サイトで資料請求・入学相談ができる学校です。当サイトは代理送信せず、各校の公式ページへ進みます。
          </p>
        </div>
      </section>
      <div className="container-page py-8 grid lg:grid-cols-[1fr_320px] gap-6">
        <ul className="space-y-3">
          {list.map((s) => (
            <li key={s.slug} className="card p-4 flex flex-col sm:flex-row sm:items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={schoolPhoto(s)} alt="" className="w-full sm:w-40 h-24 object-cover rounded-lg bg-soft" />
              <div className="flex-1 min-w-0">
                <p className="font-extrabold">{s.name}</p>
                <p className="text-xs text-muted mt-1">{s.areaLabel}</p>
              </div>
              <OfficialInquiry school={s} className="btn-coral !py-2 text-sm shrink-0" />
            </li>
          ))}
        </ul>
        <aside className="space-y-4">
          <div className="card p-5">
            <p className="font-extrabold inline-flex items-center gap-2"><Icon name="gift" size={20} />資料請求のメリット</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-2"><Icon name="mail" size={16} /><span>最新のパンフレットや学費を公式から受け取れます。</span></li>
              <li className="flex gap-2"><Icon name="scale" size={16} /><span>複数校の資料を見比べて、自分に合う学校を選べます。</span></li>
              <li className="flex gap-2"><Icon name="person" size={16} /><span>体験レッスンの予約がスムーズになります。</span></li>
              <li className="flex gap-2"><Icon name="check" size={16} /><span>多くの学校で資料請求は無料です。</span></li>
            </ul>
          </div>
          <div className="card p-5">
            <p className="font-extrabold inline-flex items-center gap-2"><Icon name="shield" size={20} />安心・安全の取り組み</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>個人情報は各校の公式フォームに直接入力します。</li>
              <li>当サイトは学校への代理送信を行いません。</li>
              <li>通信はHTTPSで暗号化しています。</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
