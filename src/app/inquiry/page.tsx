import { Suspense } from "react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InquiryForm } from "./InquiryForm";

export const metadata = { title: "資料請求・体験予約" };

export default function InquiryPage() {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 h-56 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/hero-nigiri.jpg" alt="" className="w-full h-full object-cover opacity-30" />
      </div>
      <div className="container-page relative py-8">
        <Breadcrumb items={[{ href: "/", label: "ホーム" }, { label: "資料請求・体験予約フォーム" }]} />
        <h1 className="text-3xl font-black mt-4">資料請求・体験予約フォーム</h1>
        <p className="text-muted mt-2">資料請求や体験レッスンの予約を受け付けています。以下のフォームにご入力ください。</p>
        <Suspense fallback={<p className="mt-8">読み込み中...</p>}>
          <InquiryForm />
        </Suspense>
        <section className="mt-10 grid md:grid-cols-3 gap-4">
          {[
            ["未経験からでも安心", "多くのスクールが未経験者向けのカリキュラムを用意しています。"],
            ["学費やサポートを比較", "学費の目安や奨学金、就職サポートなど気になるポイントを比較検討。"],
            ["プロの道をサポート", "現役の寿司職人講師や就職支援で、あなたの夢の実現を応援します。"],
          ].map(([t, d]) => (
            <div key={t} className="card p-4">
              <h2 className="font-extrabold">{t}</h2>
              <p className="text-sm text-muted mt-2">{d}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
