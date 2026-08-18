import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata = { title: "運営について" };

export default function AboutPage() {
  return (
    <div className="container-page py-8 max-w-3xl">
      <Breadcrumb items={[{ href: "/", label: "ホーム" }, { label: "運営について" }]} />
      <h1 className="text-3xl font-black mt-4">運営について</h1>
      <p className="mt-4 leading-8">
        SUSHI SCHOOL FINDERは、日本全国の実在する寿司スクール・専門学校・教室の公開情報を整理し、比較しやすくするサイトです。掲載校への送客や資料請求をサポートしますが、学校そのものを運営しているわけではありません。
      </p>
      <h2 className="text-xl font-extrabold mt-8">情報の出典</h2>
      <p className="mt-3 leading-8">
        学費・住所・コースは各校公式サイトおよび公開されている比較記事（2026年8月時点）に基づきます。総合評価はGoogleマップAPIのライブ取得ではなく、公開情報を編集部が整理した参考値です。各校のGoogleマップへのリンクから、最新の地図評価をご確認ください。
      </p>
      <h2 className="text-xl font-extrabold mt-8">掲載について</h2>
      <p className="mt-3 leading-8">
        実在が確認できない学校、閉校の可能性がある学校は掲載していません。中国・四国、沖縄など、寿司特化スクールの公開情報が十分でない地域は、無理に架空校を作らず空欄としています。
      </p>
    </div>
  );
}
