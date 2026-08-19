import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata = { title: "免責事項" };

export default function DisclaimerPage() {
  return (
    <div className="container-page py-8 max-w-3xl">
      <Breadcrumb items={[{ href: "/", label: "ホーム" }, { label: "免責事項" }]} />
      <h1 className="text-3xl font-black mt-4">免責事項</h1>
      <p className="mt-4 leading-8">
        Google評価はAPIの再配信ではなく、調査日に画面で確認した参考値です。掲載は公式サイトで実在と募集が確認できた学校に限っています。中国・四国・沖縄の寿司特化校、および公式ページが確認できない東北の寿司特化校は未掲載です。
      </p>
    </div>
  );
}
