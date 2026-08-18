import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata = { title: "はじめての方へ" };

export default function BeginnerPage() {
  return (
    <div className="container-page py-8">
      <Breadcrumb items={[{ href: "/", label: "ホーム" }, { label: "はじめての方へ" }]} />
      <div className="mt-4 grid lg:grid-cols-[1fr_280px] gap-8 items-start">
        <div>
          <h1 className="text-4xl font-black">はじめての方へ</h1>
          <p className="text-xl font-bold mt-2">寿司職人への第一歩を、ここから。</p>
          <p className="text-muted mt-4 leading-relaxed">
            寿司スクール選びに迷っていませんか？このページでは、学校の選び方や学び方の種類、費用の目安など、はじめての方に役立つ情報をわかりやすくご紹介します。
          </p>
        </div>
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/portrait-chef-m30.jpg" alt="" className="rounded-2xl w-full object-cover" />
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-extrabold mb-4">スクール選びの4ステップ</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            ["1", "目的を決める", "趣味で学びたいのか、転職・独立を目指したいのか。まずは目的を明確にしましょう。"],
            ["2", "条件を整理する", "通学エリアや学習期間、費用、サポート体制など、希望条件を洗い出しましょう。"],
            ["3", "スクールを比較する", "複数の学校を比較して、カリキュラムや実績、口コミをチェックしましょう。"],
            ["4", "体験・資料請求をする", "気になる学校は体験入学や資料請求で、実際の雰囲気や内容を確認しましょう。"],
          ].map(([n, t, d]) => (
            <div key={n} className="card p-5">
              <span className="inline-grid place-items-center w-8 h-8 rounded-full bg-blue text-white font-bold">{n}</span>
              <h3 className="font-extrabold mt-3">{t}</h3>
              <p className="text-sm text-muted mt-2">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-extrabold mb-4">はじめての方がチェックしたいポイント</h2>
        <div className="grid md:grid-cols-5 gap-3">
          {[
            ["カリキュラム内容", "基礎から学べるか、実践中心かなど自分の目的に合っているかを確認。"],
            ["講師・実績", "現役の職人や経験豊富な講師が在籍しているか、卒業生の進路もチェック。"],
            ["学習スタイル・期間", "通学・オンライン・短期集中など、自分のライフスタイルに合った学び方を。"],
            ["就職・独立サポート", "就職支援や独立サポートの有無。卒業後のサポート体制も重要なポイントです。"],
            ["費用・支払い方法", "授業料の総額や支払い方法、分割払いの有無も忘れずに確認しましょう。"],
          ].map(([t, d]) => (
            <div key={t} className="card p-4">
              <h3 className="font-extrabold">{t}</h3>
              <p className="text-sm text-muted mt-2">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid lg:grid-cols-3 gap-6">
        <div className="card p-5">
          <h2 className="font-extrabold">学び方のスタイル</h2>
          <ul className="mt-3 space-y-3 text-sm">
            <li><b>通学スタイル</b><br />実技をしっかり学びたい方におすすめ。</li>
            <li><b>オンラインスタイル</b><br />全国どこからでも学べる講座。</li>
            <li><b>短期集中スタイル</b><br />短期間で基礎を学びたい方に最適。</li>
          </ul>
        </div>
        <div className="card p-5">
          <h2 className="font-extrabold">費用の目安</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex justify-between"><span>趣味・入門コース</span><b>10万円〜30万円</b></li>
            <li className="flex justify-between"><span>基礎〜中級コース</span><b>30万円〜80万円</b></li>
            <li className="flex justify-between"><span>プロ・独立コース</span><b>80万円〜150万円以上</b></li>
          </ul>
          <p className="text-xs text-muted mt-3">※費用は学校や地域、コース内容により異なります。</p>
        </div>
        <div className="card p-5">
          <h2 className="font-extrabold">比較のポイント</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>カリキュラム・内容</li>
            <li>サポート・実績</li>
            <li>費用・通いやすさ</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-extrabold mb-4">こんな人におすすめ</h2>
        <div className="grid md:grid-cols-5 gap-3">
          {[
            ["寿司職人を目指したい方", "/images/portrait-chef-m20.jpg"],
            ["転職・キャリアチェンジしたい方", "/images/portrait-woman.jpg"],
            ["独立・開業を目指したい方", "/images/portrait-chef-m40.jpg"],
            ["趣味で学びたい方", "/images/portrait-chef-f20.jpg"],
            ["海外で活躍したい方", "/images/portrait-chef-m30.jpg"],
          ].map(([t, img]) => (
            <div key={t} className="card p-4 text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img} alt="" className="w-20 h-20 rounded-full object-cover mx-auto" />
              <p className="font-bold mt-3 text-sm">{t}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid lg:grid-cols-2 gap-6">
        <div className="card p-5">
          <h2 className="font-extrabold mb-3">用語ミニ解説</h2>
          {[
            ["シャリ", "寿司のごはん部分。酢飯のこと。"],
            ["ネタ", "寿司の上にのせる魚介や具材のこと。"],
            ["握り", "シャリとネタを一体にして握る寿司の基本スタイル。"],
            ["仕込み", "営業前に行う下ごしらえや準備のこと。"],
          ].map(([k, v]) => (
            <details key={k} className="border-b border-line py-3">
              <summary className="font-bold cursor-pointer">{k}</summary>
              <p className="text-sm text-muted mt-1">{v}</p>
            </details>
          ))}
        </div>
        <div className="card p-5">
          <h2 className="font-extrabold mb-3">よくあるご質問</h2>
          {[
            ["未経験でもスクールに通えますか？", "はい。多くの学校が未経験者向けのカリキュラムを用意しています。"],
            ["どのくらいの期間で学べますか？", "費用や目標により異なります。数ヶ月の短期コースから1年以上の本格コースまであります。"],
            ["費用の支払い方法は？", "一括払いのほか、分割払いや教育ローンに対応している学校もあります。"],
          ].map(([q, a]) => (
            <div key={q} className="border-b border-line py-3">
              <p className="font-bold">Q. {q}</p>
              <p className="text-sm text-muted mt-1">A. {a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-6 mt-10 flex flex-col md:flex-row items-center justify-between gap-4 bg-soft-blue">
        <h2 className="text-xl font-extrabold">あなたにぴったりの寿司スクールを見つけよう</h2>
        <div className="flex gap-3">
          <Link href="/schools" className="btn-coral">スクールを探す</Link>
          <Link href="/favorites" className="btn-outline">お気に入り</Link>
        </div>
      </section>
    </div>
  );
}
