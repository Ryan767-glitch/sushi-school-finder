import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata = { title: "プライバシーポリシー" };

export default function PrivacyPage() {
  return (
    <div className="container-page py-8 max-w-3xl">
      <Breadcrumb items={[{ href: "/", label: "ホーム" }, { label: "プライバシーポリシー" }]} />
      <h1 className="text-3xl font-black mt-4">プライバシーポリシー</h1>
      <p className="text-sm text-muted mt-2">最終更新: 2026年8月18日</p>
      <div className="prose-like space-y-4 mt-6 leading-8">
        <p>SUSHI SCHOOL FINDER（以下「当サイト」）は、資料請求その他の問い合わせで取得する個人情報を、次のとおり取り扱います。</p>
        <h2 className="text-xl font-extrabold">1. 取得する情報</h2>
        <p>氏名、ふりがな、メールアドレス、電話番号、希望条件、お問い合わせ内容。お気に入り・比較リストはお使いの端末内にのみ保存し、サーバーへは送りません。</p>
        <h2 className="text-xl font-extrabold">2. 利用目的</h2>
        <p>資料・体験案内の取り次ぎ、お問い合わせ対応、サイト改善、不正利用の防止に限ります。目的外利用はしません。</p>
        <h2 className="text-xl font-extrabold">3. 第三者提供</h2>
        <p>ご本人が選択したスクールへの取り次ぎ、法令に基づく場合を除き、同意なく第三者へ提供しません。</p>
        <h2 className="text-xl font-extrabold">4. 安全管理</h2>
        <p>通信はHTTPSで暗号化します。入力値はサーバー側で検証・サニタイズします。不要な権限はブラウザに要求しません。</p>
        <h2 className="text-xl font-extrabold">5. 保存期間</h2>
        <p>問い合わせは対応に必要な期間保存し、不要になり次第削除します。Webhook未設定時はサーバーに永続保存しません。</p>
        <h2 className="text-xl font-extrabold">6. 開示等の請求</h2>
        <p>ご自身の情報の開示・訂正・削除はお問い合わせフォームよりご請求ください。</p>
        <h2 className="text-xl font-extrabold">7. 改定</h2>
        <p>本方針は必要に応じて改定します。重要な変更はサイト上で告知します。</p>
      </div>
    </div>
  );
}
