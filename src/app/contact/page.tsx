import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata = { title: "お問い合わせ" };

export default function ContactPage() {
  return (
    <div className="container-page py-8 max-w-3xl">
      <Breadcrumb items={[{ href: "/", label: "ホーム" }, { label: "お問い合わせ" }]} />
      <h1 className="text-3xl font-black mt-4">お問い合わせ</h1>
      <p className="mt-4 leading-8">
        掲載内容の修正依頼、学校の追加掲載、サイト全般のご質問は資料請求フォームの備考欄、またはドメイン設定後の公式メールアドレスへご連絡ください。
      </p>
      <Link href="/inquiry" className="btn-coral mt-6 inline-flex">
        フォームから連絡する
      </Link>
    </div>
  );
}
