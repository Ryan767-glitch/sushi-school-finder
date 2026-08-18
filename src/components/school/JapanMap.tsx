import Link from "next/link";

const regions = [
  { id: "hokkaido-tohoku", label: "北海道・東北", top: "8%", left: "72%" },
  { id: "kanto", label: "関東", top: "42%", left: "72%" },
  { id: "koshinetsu", label: "甲信越・北陸", top: "34%", left: "48%" },
  { id: "tokai", label: "東海", top: "52%", left: "58%" },
  { id: "kansai", label: "関西", top: "56%", left: "38%" },
  { id: "chugoku-shikoku", label: "中国・四国", top: "58%", left: "18%" },
  { id: "kyushu-okinawa", label: "九州・沖縄", top: "72%", left: "8%" },
];

export function JapanMap() {
  return (
    <div className="relative min-h-[280px] rounded-2xl bg-soft-blue overflow-hidden">
      <svg viewBox="0 0 280 320" className="w-full h-[280px] opacity-90" aria-hidden>
        <path
          d="M170 20c20 8 38 28 42 48 4 18-6 28-2 42 6 18 28 22 30 40 2 16-14 26-10 42 4 14 22 18 18 34-6 22-40 20-58 28-16 6-18 24-36 28-22 6-36-10-52-8-18 2-28 20-46 16-16-4-18-24-12-38 6-14 24-16 28-32 4-14-8-22-4-38 4-16 24-18 30-34 6-16-6-28 4-44 10-16 32-22 68-14z"
          fill="#7eb0ff"
        />
        <circle cx="210" cy="48" r="18" fill="#9ec4ff" />
        <ellipse cx="48" cy="292" rx="22" ry="10" fill="#9ec4ff" />
      </svg>
      {regions.map((r) => (
        <Link
          key={r.id}
          href={`/schools?region=${r.id}`}
          className="absolute -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-navy bg-white/90 border border-white rounded-full px-2.5 py-1 shadow-sm hover:bg-blue hover:text-white"
          style={{ top: r.top, left: r.left }}
        >
          {r.label}
        </Link>
      ))}
    </div>
  );
}
