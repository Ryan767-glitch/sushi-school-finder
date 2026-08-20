import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata = { title: "お問い合わせ" };

export default function ContactPage() {
  return (
    <div className="container-page py-8 max-w-3xl">
      <Breadcrumb items={[{ href: "/", label: "ホーム" }, { label: "お問い合わせ" }]} />
      <h1 className="text-3xl font-black mt-4">お問い合わせ</h1>
      <p className="mt-4 leading-8">
        掲載内容の修正依頼、学校の追加掲載、サイト全般のご質問は、GitHubのリポジトリ、または各校の公式サイトへご連絡ください。学校への資料請求は当サイトでは受け付けていません。
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/inquiry" className="btn-coral">
          公式の資料請求一覧
        </Link>
        <a href="https://github.com/Ryan767-glitch/sushi-school-finder" target="_blank" rel="noopener noreferrer" className="btn-outline">
          GitHub
        </a>
      </div>
    </div>
  );
}
