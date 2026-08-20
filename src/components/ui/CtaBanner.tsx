import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export function CtaBanner({
  title = "あなたに合う寿司スクールを、今すぐ検索",
  subtitle = "かんたん30秒で条件を指定",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="container-page mt-12">
      <div className="card p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5 justify-between bg-gradient-to-r from-white to-soft-blue">
        <div>
          <p className="text-sm text-blue font-bold">{subtitle}</p>
          <h2 className="text-xl md:text-2xl font-extrabold mt-1">{title}</h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/schools" className="btn-coral">
            <Icon name="search" size={16} className="text-white" />
            スクールを探す
          </Link>
          <Link href="/favorites" className="btn-outline">
            <Icon name="heart" size={16} className="text-coral" />
            お気に入り
          </Link>
        </div>
      </div>
    </section>
  );
}
