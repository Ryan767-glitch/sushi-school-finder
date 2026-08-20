import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata = { title: "プライバシーポリシー" };

export default function PrivacyPage() {
  return (
    <div className="container-page py-8 max-w-3xl">
      <Breadcrumb items={[{ href: "/", label: "ホーム" }, { label: "プライバシーポリシー" }]} />
      <h1 className="text-3xl font-black mt-4">プライバシーポリシー</h1>
      <p className="text-sm text-muted mt-2">最終更新: 2026年8月20日</p>
      <div className="prose-like space-y-4 mt-6 leading-8">
        <p>SUSHI SCHOOL FINDER（以下「当サイト」）は、閲覧に必要な範囲で情報を取り扱います。学校への資料請求は各校公式サイトで行われ、当サイトは個人情報を代理送信しません。</p>
        <h2 className="text-xl font-extrabold">1. 取得する情報</h2>
        <p>お気に入り・比較リストはお使いの端末内（localStorage）にのみ保存し、サーバーへは送りません。アクセスログ等の通信記録はホスティング事業者が通常の範囲で処理する場合があります。</p>
        <h2 className="text-xl font-extrabold">2. 利用目的</h2>
        <p>サイトの表示、不正利用の防止、掲載情報の改善に限ります。</p>
        <h2 className="text-xl font-extrabold">3. 第三者提供</h2>
        <p>法令に基づく場合を除き、個人情報を第三者へ提供しません。公式サイトへ進んだあとの入力は、各校のプライバシーポリシーが適用されます。</p>
        <h2 className="text-xl font-extrabold">4. 安全管理</h2>
        <p>通信はHTTPSで暗号化します。不要な権限はブラウザに要求しません。</p>
        <h2 className="text-xl font-extrabold">5. 開示等の請求</h2>
        <p>掲載内容の訂正はお問い合わせページからご連絡ください。</p>
        <h2 className="text-xl font-extrabold">6. 改定</h2>
        <p>本方針は必要に応じて改定します。重要な変更はサイト上で告知します。</p>
      </div>
    </div>
  );
}
