import type { School } from "@/types";
import { googleLabel, MAPS_CHECKED } from "@/lib/rating";
import { StarRating } from "./StarRating";

export function GoogleRating({ school, compact = false }: { school: School; compact?: boolean }) {
  const g = googleLabel(school);
  if (g.kind === "rated" && g.value != null) {
    return (
      <span className="inline-flex flex-wrap items-center gap-1.5">
        <StarRating value={g.value} showValue />
        <span className="text-xs text-muted">
          Google（{g.count}件{compact ? "" : `・${MAPS_CHECKED}`}）
        </span>
      </span>
    );
  }
  return <span className="text-xs text-muted">{g.text}</span>;
}
