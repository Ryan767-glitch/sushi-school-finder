import Link from "next/link";
import type { School } from "@/types";
import { yenFrom, styleLabel } from "@/lib/format";
import { Pill, SchoolBadge } from "@/components/ui/Badge";
import { GoogleRating } from "@/components/ui/GoogleRating";
import { FavoriteButton } from "./FavoriteButton";
import { schoolPhoto } from "@/lib/school-media";
import { Icon } from "@/components/ui/Icon";

export function SchoolCard({ school }: { school: School }) {
  return (
    <article className="card overflow-hidden flex flex-col">
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={schoolPhoto(school)} alt={`${school.name}の写真`} className="h-44 w-full object-cover bg-soft" />
        <div className="absolute top-3 left-3 flex gap-1.5">
          {school.badges.map((b) => (
            <SchoolBadge key={b} id={b} />
          ))}
        </div>
        <div className="absolute top-3 right-3">
          <FavoriteButton slug={school.slug} compact />
        </div>
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-extrabold text-[16px] leading-snug">
          <Link href={`/schools/${school.slug}`} className="hover:text-blue">
            {school.name}
          </Link>
        </h3>
        <p className="text-xs text-muted">{school.areaLabel}</p>
        <GoogleRating school={school} compact />
        <div className="flex flex-wrap gap-1.5">
          {school.trialLesson ? <Pill>体験あり</Pill> : null}
          {school.jobSupport ? <Pill>就職支援</Pill> : null}
          {school.englishSupport ? <Pill>英語対応</Pill> : null}
        </div>
        <div className="mt-auto pt-3 flex items-center justify-between text-sm">
          <span className="text-muted inline-flex items-center gap-1">
            <Icon name="commute" size={14} />
            {school.styles.map(styleLabel).join("・")}
          </span>
          <span className="font-extrabold">{yenFrom(school.tuitionFrom)}</span>
        </div>
      </div>
    </article>
  );
}
