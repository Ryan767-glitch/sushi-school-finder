import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata = { title: "免責事項" };

export default function DisclaimerPage() {
  return (
    <div className="container-page py-8 max-w-3xl">
      <Breadcrumb items={[{ href: "/", label: "ホーム" }, { label: "免責事項" }]} />
      <h1 className="text-3xl font-black mt-4">免責事項</h1>
      <p className="mt-4 leading-8">
        当サイトの総合評価はGoogleマップの公式スコアの再配信ではありません。地図上の最新評価は各校ページの「Googleマップで見る」から確認してください。掲載漏れの地域・学校がある場合、確認が取れるまで追加しません。
      </p>
    </div>
  );
}
