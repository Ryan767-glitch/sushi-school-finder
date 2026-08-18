import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page py-20 text-center">
      <p className="text-sm font-bold text-coral">404</p>
      <h1 className="text-3xl font-black mt-2">ページが見つかりません</h1>
      <p className="text-muted mt-3">URLをご確認いただくか、トップから探してください。</p>
      <Link href="/" className="btn-coral mt-6 inline-flex">
        トップへ戻る
      </Link>
    </div>
  );
}
