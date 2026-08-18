"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { schools } from "@/data/schools";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SchoolCard } from "@/components/school/SchoolCard";

export default function DiagnosisPage() {
  const [goal, setGoal] = useState("job");
  const [place, setPlace] = useState("kanto");
  const [budget, setBudget] = useState("mid");
  const [time, setTime] = useState("short");
  const result = useMemo(() => {
    return [...schools]
      .map((s) => {
        let score = s.editorialScore;
        if (goal === "open" && s.openSupport) score += 0.4;
        if (goal === "job" && s.jobSupport) score += 0.3;
        if (goal === "hobby" && s.tuitionFrom < 700000) score += 0.3;
        if (goal === "overseas" && s.englishSupport) score += 0.4;
        if (place !== "any" && s.region === place) score += 0.4;
        if (place === "online" && s.onlineAvailable) score += 0.5;
        if (budget === "low" && s.tuitionFrom <= 600000) score += 0.3;
        if (budget === "mid" && s.tuitionFrom > 600000 && s.tuitionFrom <= 1500000) score += 0.2;
        if (budget === "high" && s.type === "vocational") score += 0.3;
        if (time === "short" && s.durationMonthsFrom <= 3) score += 0.3;
        if (time === "long" && s.durationMonthsTo >= 12) score += 0.3;
        return { s, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((x) => x.s);
  }, [goal, place, budget, time]);

  return (
    <div className="container-page py-8">
      <Breadcrumb items={[{ href: "/", label: "ホーム" }, { label: "スクール診断" }]} />
      <h1 className="text-3xl font-black mt-4">スクール診断</h1>
      <p className="text-muted mt-2">4つの質問に答えると、掲載校の中から相性の良い学校を3校提案します。</p>
      <div className="card p-5 mt-6 grid md:grid-cols-2 gap-4">
        <label className="text-sm font-bold">
          目的
          <select className="w-full mt-1 px-3 py-2" value={goal} onChange={(e) => setGoal(e.target.value)}>
            <option value="job">就職したい</option>
            <option value="open">独立したい</option>
            <option value="hobby">趣味で学びたい</option>
            <option value="overseas">海外で働きたい</option>
          </select>
        </label>
        <label className="text-sm font-bold">
          通いたいエリア
          <select className="w-full mt-1 px-3 py-2" value={place} onChange={(e) => setPlace(e.target.value)}>
            <option value="any">どこでも</option>
            <option value="hokkaido-tohoku">北海道・東北</option>
            <option value="kanto">関東</option>
            <option value="tokai">東海</option>
            <option value="kansai">関西</option>
            <option value="kyushu-okinawa">九州・沖縄</option>
            <option value="online">オンライン</option>
          </select>
        </label>
        <label className="text-sm font-bold">
          予算感
          <select className="w-full mt-1 px-3 py-2" value={budget} onChange={(e) => setBudget(e.target.value)}>
            <option value="low">できるだけ抑えたい</option>
            <option value="mid">標準（〜150万円）</option>
            <option value="high">専門学校も含めて検討</option>
          </select>
        </label>
        <label className="text-sm font-bold">
          期間
          <select className="w-full mt-1 px-3 py-2" value={time} onChange={(e) => setTime(e.target.value)}>
            <option value="short">短期で身につけたい</option>
            <option value="long">じっくり学びたい</option>
          </select>
        </label>
      </div>
      <h2 className="text-xl font-extrabold mt-8">あなたへの提案</h2>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        {result.map((s) => (
          <SchoolCard key={s.slug} school={s} />
        ))}
      </div>
      <Link href="/inquiry" className="btn-coral mt-8 inline-flex">
        この3校にまとめて資料請求
      </Link>
    </div>
  );
}
