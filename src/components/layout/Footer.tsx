import Link from "next/link";
import { schools } from "@/data/schools";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-soft">
      <div className="container-page py-12 grid gap-10 md:grid-cols-4 text-sm">
        <div>
          <p className="font-extrabold inline-flex items-center gap-2">
            <span className="relative w-8 h-8 rounded-full overflow-hidden border border-line shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo-nigiri.jpg" alt="" className="w-full h-full object-cover" />
            </span>
            SUSHI SCHOOL FINDER
          </p>
          <p className="text-muted mt-2 leading-relaxed">
            日本全国の実在する寿司スクール・専門学校を、公開情報をもとに比較できるサイトです。学費・評価は目安です。最新情報は各校公式サイトでご確認ください。
          </p>
        </div>
        <div>
          <p className="font-bold mb-3">探す</p>
          <ul className="space-y-2 text-muted">
            <li><Link href="/schools">スクール一覧</Link></li>
            <li><Link href="/ranking">ランキング</Link></li>
            <li><Link href="/compare">比較する</Link></li>
            <li><Link href="/reviews">口コミ</Link></li>
            <li><Link href="/beginner">はじめての方へ</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold mb-3">読む</p>
          <ul className="space-y-2 text-muted">
            <li><Link href="/articles">特集・コラム</Link></li>
            <li><Link href="/inquiry">公式サイトで資料請求</Link></li>
            <li><Link href="/about">運営について</Link></li>
            <li><Link href="/contact">お問い合わせ</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold mb-3">掲載校（一部）</p>
          <ul className="space-y-2 text-muted">
            {schools.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/schools/${s.slug}`}>{s.shortName}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-page py-5 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-muted">
          <p>© {new Date().getFullYear()} SUSHI SCHOOL FINDER</p>
          <div className="flex gap-4">
            <Link href="/privacy">プライバシーポリシー</Link>
            <Link href="/terms">利用規約</Link>
            <Link href="/disclaimer">免責事項</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
