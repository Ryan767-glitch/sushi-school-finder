import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata = { title: "運営について" };

export default function AboutPage() {
  return (
    <div className="container-page py-8 max-w-3xl">
      <Breadcrumb items={[{ href: "/", label: "ホーム" }, { label: "運営について" }]} />
      <h1 className="text-3xl font-black mt-4">運営について</h1>
      <p className="mt-4 leading-8">
        SUSHI SCHOOL FINDERは、日本全国の実在する寿司スクール・専門学校・教室の公開情報を整理し、比較しやすくするサイトです。学校を運営しておらず、資料請求の代理送信も行いません。問い合わせは各校の公式ページへ進みます。
      </p>
      <h2 className="text-xl font-extrabold mt-8">情報の出典</h2>
      <p className="mt-3 leading-8">
        学費・住所・コースは各校公式サイト（2026年8月19日再確認）に基づきます。Google評価はAPIではなく、同日にブラウザで一件ずつ確認した参考値です。学校写真は公式サイトの公開画像を使用しています。最新情報は必ず公式サイトとGoogleマップでご確認ください。
      </p>
      <h2 className="text-xl font-extrabold mt-8">掲載について</h2>
      <p className="mt-3 leading-8">
        公式サイトで募集が確認できない学校（関西すし学院、なでしこ寿司スクールなど）は掲載していません。寿司塾大阪校は公式アクセスから校舎案内が消えたため除外しました。塩釜港寿司スクールは公式ページが確認できず未掲載です。中国・四国・沖縄の寿司特化校は、確認できた範囲では未掲載です。
      </p>
    </div>
  );
}
