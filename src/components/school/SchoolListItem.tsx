import Link from "next/link";
import type { School } from "@/types";
import { yenFrom, styleLabel, levelLabel } from "@/lib/format";
import { Pill } from "@/components/ui/Badge";
import { FavoriteButton } from "./FavoriteButton";
import { CompareButton } from "./CompareButton";
import { GoogleRating } from "@/components/ui/GoogleRating";
import { OfficialInquiry } from "./OfficialInquiry";
import { schoolPhoto } from "@/lib/school-media";

export function SchoolListItem({ school }: { school: School }) {
  return (
    <article className="card p-3 md:p-4 flex flex-col md:flex-row gap-4">
      <div className="relative md:w-56 shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={schoolPhoto(school)} alt={`${school.name}の写真`} className="h-40 md:h-full w-full object-cover rounded-xl bg-soft" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h2 className="text-lg font-extrabold">
              <Link href={`/schools/${school.slug}`} className="hover:text-blue">
                {school.name}
              </Link>
            </h2>
            <p className="text-xs text-muted mt-0.5">
              {school.prefecture}
              {school.city} {school.areaLabel}
            </p>
          </div>
          <FavoriteButton slug={school.slug} compact />
        </div>
        <p className="text-sm text-muted mt-2 line-clamp-2">{school.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {school.trialLesson ? <Pill>体験あり</Pill> : null}
          {school.jobSupport ? <Pill>就職支援</Pill> : null}
          {school.openSupport ? <Pill>開業支援</Pill> : null}
          {school.englishSupport ? <Pill>英語対応</Pill> : null}
          {school.styles.map((s) => (
            <Pill key={s}>{styleLabel(s)}</Pill>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
          <div className="flex flex-wrap gap-5 text-sm">
            <div>
              <p className="text-[11px] text-muted">受講料</p>
              <p className="font-extrabold">{yenFrom(school.tuitionFrom)}</p>
            </div>
            <div>
              <p className="text-[11px] text-muted">期間</p>
              <p className="font-bold">
                {school.durationMonthsFrom === school.durationMonthsTo
                  ? `${school.durationMonthsFrom}ヶ月`
                  : `${school.durationMonthsFrom}〜${school.durationMonthsTo}ヶ月`}
              </p>
            </div>
            <div>
              <p className="text-[11px] text-muted">レベル</p>
              <p className="font-bold">{school.levels.map(levelLabel).join("〜")}</p>
            </div>
            <div>
              <p className="text-[11px] text-muted">Google評価</p>
              <GoogleRating school={school} compact />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CompareButton slug={school.slug} />
            <Link href={`/schools/${school.slug}`} className="text-sm font-bold text-blue">
              詳細を見る
            </Link>
            <OfficialInquiry school={school} className="btn-coral !py-2 !px-4 text-sm" />
          </div>
        </div>
      </div>
    </article>
  );
}
