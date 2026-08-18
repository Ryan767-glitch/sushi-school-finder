export function yen(n: number) {
  return `¥${n.toLocaleString("ja-JP")}`;
}

export function yenFrom(n: number) {
  return `${yen(n)}〜`;
}

export function stars(score: number) {
  const full = Math.floor(score);
  const half = score - full >= 0.4;
  return { full, half, empty: 5 - full - (half ? 1 : 0) };
}

export function practiceLabel(score: number) {
  if (score >= 5) return "豊富";
  if (score >= 4) return "多い";
  if (score >= 3) return "標準";
  return "少なめ";
}

export function styleLabel(id: string) {
  if (id === "commute") return "通学";
  if (id === "online") return "オンライン";
  if (id === "hybrid") return "通学・オンライン";
  return id;
}

export function levelLabel(id: string) {
  if (id === "beginner") return "初心者向け";
  if (id === "intermediate") return "中級";
  if (id === "advanced") return "上級";
  return id;
}

export function typeLabel(id: string) {
  if (id === "vocational") return "認可専門学校";
  if (id === "academy") return "スクール";
  if (id === "classroom") return "教室";
  if (id === "online") return "オンライン";
  return id;
}

export function regionLabel(id: string) {
  const map: Record<string, string> = {
    "hokkaido-tohoku": "北海道・東北",
    kanto: "関東",
    koshinetsu: "甲信越・北陸",
    tokai: "東海",
    kansai: "関西",
    "chugoku-shikoku": "中国・四国",
    "kyushu-okinawa": "九州・沖縄",
    online: "オンライン",
  };
  return map[id] ?? id;
}

export const DATA_AS_OF = "2026年8月";
