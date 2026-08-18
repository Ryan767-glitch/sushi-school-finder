import type { BadgeId } from "@/types";

export function SchoolBadge({ id }: { id: BadgeId }) {
  if (id === "recommended") return <span className="badge-rec">おすすめ</span>;
  if (id === "popular") return <span className="badge-pop">人気</span>;
  return <span className="badge-val">コスパ</span>;
}

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-soft-blue text-blue text-xs font-bold px-2.5 py-1">
      {children}
    </span>
  );
}
