"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { getSchool, schools } from "@/data/schools";
import { sanitizeInquiry, validateInquiry, type InquiryInput } from "@/lib/validation";

const areas = ["北海道・東北", "関東", "東海", "関西", "中国・四国", "九州・沖縄", "オンライン", "未定"];
const starts = ["できるだけ早く", "1ヶ月以内", "3ヶ月以内", "半年以内", "1年以内", "未定"];

export function InquiryForm() {
  const sp = useSearchParams();
  const initialSlugs = (sp.get("schools") || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, 5);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [data, setData] = useState<InquiryInput>({
    lastName: "",
    firstName: "",
    lastKana: "",
    firstKana: "",
    email: "",
    phone: "",
    areas: [],
    style: "通学",
    start: "",
    hope: "体験レッスンを希望",
    contact: ["メール"],
    note: "",
    privacy: false,
    notice: false,
    schoolSlugs: initialSlugs.length ? initialSlugs : [],
    website: "",
  });

  const selected = useMemo(() => data.schoolSlugs.map(getSchool).filter(Boolean), [data.schoolSlugs]);

  function set<K extends keyof InquiryInput>(k: K, v: InquiryInput[K]) {
    setData((d) => ({ ...d, [k]: v }));
  }

  function toggleArr(k: "areas" | "contact" | "schoolSlugs", v: string) {
    setData((d) => {
      const cur = d[k];
      const next = cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v].slice(0, k === "schoolSlugs" ? 5 : 8);
      return { ...d, [k]: next };
    });
  }

  function goConfirm(e: React.FormEvent) {
    e.preventDefault();
    const cleaned = sanitizeInquiry(data);
    const errs = validateInquiry(cleaned);
    setFieldErrors(errs);
    if (Object.keys(errs).length) {
      setError("入力内容を確認してください。");
      return;
    }
    setError("");
    setData(cleaned);
    setStep(2);
  }

  async function submit() {
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.message || "送信に失敗しました。");
        setSending(false);
        return;
      }
      setStep(3);
    } catch {
      setError("通信に失敗しました。時間をおいて再度お試しください。");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="grid lg:grid-cols-[1fr_320px] gap-6 mt-6">
      <div className="card p-5 md:p-7">
        <ol className="flex items-center gap-4 text-sm font-bold mb-6">
          {[1, 2, 3].map((n) => (
            <li key={n} className={step === n ? "text-blue" : "text-muted"}>
              <span className={`inline-grid place-items-center w-7 h-7 rounded-full mr-1 ${step === n ? "bg-blue text-white" : "bg-soft"}`}>{n}</span>
              {n === 1 ? "入力" : n === 2 ? "確認" : "完了"}
            </li>
          ))}
        </ol>

        {step === 1 ? (
          <form onSubmit={goConfirm} className="space-y-4" noValidate>
            <div>
              <p className="font-bold">選択中のスクール {selected.length}校</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {schools.map((s) => (
                  <label key={s.slug} className={`text-xs border rounded-full px-2 py-1 cursor-pointer ${data.schoolSlugs.includes(s.slug) ? "border-coral bg-red-50" : "border-line"}`}>
                    <input type="checkbox" className="sr-only" checked={data.schoolSlugs.includes(s.slug)} onChange={() => toggleArr("schoolSlugs", s.slug)} />
                    {s.shortName}
                  </label>
                ))}
              </div>
              {fieldErrors.schoolSlugs ? <p className="text-xs text-coral mt-1">{fieldErrors.schoolSlugs}</p> : null}
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <Field label="姓" required err={fieldErrors.lastName}>
                <input className="w-full px-3 py-2" value={data.lastName} onChange={(e) => set("lastName", e.target.value)} autoComplete="family-name" />
              </Field>
              <Field label="名" required err={fieldErrors.firstName}>
                <input className="w-full px-3 py-2" value={data.firstName} onChange={(e) => set("firstName", e.target.value)} autoComplete="given-name" />
              </Field>
              <Field label="せい" required err={fieldErrors.lastKana}>
                <input className="w-full px-3 py-2" value={data.lastKana} onChange={(e) => set("lastKana", e.target.value)} />
              </Field>
              <Field label="めい" required err={fieldErrors.firstKana}>
                <input className="w-full px-3 py-2" value={data.firstKana} onChange={(e) => set("firstKana", e.target.value)} />
              </Field>
            </div>
            <Field label="メールアドレス" required err={fieldErrors.email}>
              <input className="w-full px-3 py-2" type="email" value={data.email} onChange={(e) => set("email", e.target.value)} autoComplete="email" />
            </Field>
            <Field label="電話番号" required err={fieldErrors.phone}>
              <input className="w-full px-3 py-2" value={data.phone} onChange={(e) => set("phone", e.target.value)} autoComplete="tel" inputMode="numeric" />
            </Field>
            <Field label="希望エリア" required err={fieldErrors.areas}>
              <div className="flex flex-wrap gap-2">
                {areas.map((a) => (
                  <label key={a} className="text-sm">
                    <input type="checkbox" className="mr-1" checked={data.areas.includes(a)} onChange={() => toggleArr("areas", a)} />
                    {a}
                  </label>
                ))}
              </div>
            </Field>
            <Field label="学び方" required>
              <div className="flex flex-wrap gap-3 text-sm">
                {["通学", "オンライン", "通学・オンラインどちらも検討"].map((v) => (
                  <label key={v}>
                    <input type="radio" name="style" className="mr-1" checked={data.style === v} onChange={() => set("style", v)} />
                    {v}
                  </label>
                ))}
              </div>
            </Field>
            <Field label="希望開始時期" required err={fieldErrors.start}>
              <select className="w-full px-3 py-2" value={data.start} onChange={(e) => set("start", e.target.value)}>
                <option value="">選択してください</option>
                {starts.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </Field>
            <Field label="見学・体験の希望" required>
              <div className="flex flex-wrap gap-3 text-sm">
                {["資料請求を希望", "体験レッスンを希望", "見学を希望", "未定"].map((v) => (
                  <label key={v}>
                    <input type="radio" name="hope" className="mr-1" checked={data.hope === v} onChange={() => set("hope", v)} />
                    {v}
                  </label>
                ))}
              </div>
            </Field>
            <Field label="ご希望の連絡方法" required err={fieldErrors.contact}>
              <div className="flex gap-3 text-sm">
                {["メール", "電話", "どちらでも可"].map((v) => (
                  <label key={v}>
                    <input type="checkbox" className="mr-1" checked={data.contact.includes(v)} onChange={() => toggleArr("contact", v)} />
                    {v}
                  </label>
                ))}
              </div>
            </Field>
            <Field label="備考・ご質問など">
              <textarea className="w-full px-3 py-2 min-h-28" maxLength={500} value={data.note} onChange={(e) => set("note", e.target.value)} />
              <p className="text-xs text-muted text-right">{data.note.length}/500</p>
            </Field>
            <div className="hidden" aria-hidden>
              <label>
                ホームページ
                <input value={data.website} onChange={(e) => set("website", e.target.value)} tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            <label className="flex items-start gap-2 text-sm">
              <input type="checkbox" checked={data.privacy} onChange={(e) => set("privacy", e.target.checked)} />
              <span>
                <Link href="/privacy" className="text-blue underline" target="_blank">
                  プライバシーポリシー
                </Link>
                に同意の上、送信します。
              </span>
            </label>
            {fieldErrors.privacy ? <p className="text-xs text-coral">{fieldErrors.privacy}</p> : null}
            <label className="flex items-start gap-2 text-sm">
              <input type="checkbox" checked={data.notice} onChange={(e) => set("notice", e.target.checked)} />
              スクールからのご案内（メール・電話を含む）を受け取ることに同意します。
            </label>
            {error ? <p className="text-sm text-coral">{error}</p> : null}
            <button type="submit" className="btn-coral w-full">
              入力内容を確認する
            </button>
          </form>
        ) : null}

        {step === 2 ? (
          <div className="space-y-3 text-sm">
            <Row k="氏名" v={`${data.lastName} ${data.firstName}（${data.lastKana} ${data.firstKana}）`} />
            <Row k="メール" v={data.email} />
            <Row k="電話" v={data.phone} />
            <Row k="エリア" v={data.areas.join("、")} />
            <Row k="学び方" v={data.style} />
            <Row k="開始" v={data.start} />
            <Row k="希望" v={data.hope} />
            <Row k="連絡" v={data.contact.join("、")} />
            <Row k="スクール" v={selected.map((s) => s!.name).join("、")} />
            <Row k="備考" v={data.note || "なし"} />
            {error ? <p className="text-coral">{error}</p> : null}
            <div className="flex gap-3 pt-3">
              <button type="button" className="btn-outline flex-1" onClick={() => setStep(1)}>
                戻る
              </button>
              <button type="button" className="btn-coral flex-1" disabled={sending} onClick={submit}>
                {sending ? "送信中..." : "送信する"}
              </button>
            </div>
          </div>
        ) : null}

        {step === 3 ? (
          <div className="text-center py-8">
            <h2 className="text-2xl font-black">送信が完了しました</h2>
            <p className="text-muted mt-3">内容を受け付けました。運営または各校からの連絡をお待ちください。ドメイン設定後はメール通知に切り替えられます。</p>
            <Link href="/schools" className="btn-coral mt-6 inline-flex">
              スクール一覧へ
            </Link>
          </div>
        ) : null}
      </div>

      <aside className="space-y-4">
        <div className="card p-4">
          <h2 className="font-extrabold">資料請求のメリット</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>最新のパンフレットをお届け</li>
            <li>比較検討に役立つ</li>
            <li>体験レッスンの予約がスムーズ</li>
            <li>入力は約1分。もちろん費用は一切かかりません。</li>
          </ul>
        </div>
        <div className="card p-4">
          <h2 className="font-extrabold">安心・安全の取り組み</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>ご入力いただいた個人情報は、資料送付・体験予約の目的以外には使用しません。</li>
            <li>通信はHTTPSで暗号化されます。</li>
            <li>各スクールへは、必要最小限の情報のみ提供します。</li>
          </ul>
          <Link href="/privacy" className="text-sm text-blue mt-2 inline-block">
            プライバシーポリシーを見る
          </Link>
        </div>
      </aside>
    </div>
  );
}

function Field({
  label,
  required,
  err,
  children,
}: {
  label: string;
  required?: boolean;
  err?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-bold">
        {label} {required ? <span className="text-coral text-xs">必須</span> : <span className="text-muted text-xs">任意</span>}
      </span>
      <div className="mt-1">{children}</div>
      {err ? <span className="text-xs text-coral">{err}</span> : null}
    </label>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex gap-4 border-b border-line py-2">
      <dt className="w-24 text-muted shrink-0">{k}</dt>
      <dd>{v}</dd>
    </div>
  );
}
