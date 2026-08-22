import Link from "next/link";
import { SearchPanel } from "@/components/school/SearchPanel";
import { SchoolCard } from "@/components/school/SchoolCard";
import { JapanMap } from "@/components/school/JapanMap";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { featuredSchools, schoolCount } from "@/data/schools";
import { stats } from "@/lib/search";
import { DATA_AS_OF } from "@/lib/format";
import { Icon, type IconName } from "@/components/ui/Icon";
import { t } from "@/lib/locale";
import { getLocale } from "@/lib/get-locale";

export default async function HomePage() {
  const locale = await getLocale();
  const featured = featuredSchools();
  const unit = locale === "ja" ? "校" : "";
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero-real.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/20" />
        </div>
        <div className="container-page relative py-14 md:py-20">
          <h1 className="text-3xl md:text-5xl font-black leading-tight max-w-xl">
            {t(locale, "hero1")}
            <br />
            <span className="text-coral">{t(locale, "hero2")}</span>
            {locale === "ja" ? t(locale, "hero3") : " "}
            <br />
            {t(locale, "hero4")}
          </h1>
          <p className="mt-4 text-muted max-w-lg">{t(locale, "heroLead", { n: schoolCount() })}</p>
          <div className="mt-8 max-w-4xl">
            <SearchPanel locale={locale} />
          </div>
        </div>
      </section>

      <section className="bg-soft-blue/70">
        <div className="container-page py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <Stat icon="school" label={t(locale, "statSchools")} value={`${stats.schools}${unit}`} note={t(locale, "asOf", { d: DATA_AS_OF })} />
          <Stat icon="person" label={t(locale, "statTrial")} value={`${stats.trial}${unit}`} note={`${Math.round((stats.trial / stats.schools) * 100)}%`} />
          <Stat icon="handshake" label={t(locale, "statJob")} value={`${stats.job}${unit}`} note={`${Math.round((stats.job / stats.schools) * 100)}%`} />
        </div>
      </section>

      <section className="container-page mt-14">
        <div className="flex items-end justify-between mb-5">
          <h2 className="text-xl font-extrabold inline-flex items-center gap-2">
            <Icon name="star" size={18} />
            {t(locale, "featured")}
          </h2>
          <Link href="/schools" className="text-sm font-bold text-blue">
            {t(locale, "seeAll")}
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {featured.slice(0, 3).map((s) => (
            <SchoolCard key={s.slug} school={s} />
          ))}
        </div>
      </section>

      <section className="container-page mt-16">
        <div className="mb-5">
          <h2 className="text-xl font-extrabold">{t(locale, "areaTitle")}</h2>
          <p className="text-sm text-muted mt-1">{t(locale, "areaLead")}</p>
        </div>
        <JapanMap locale={locale} />
      </section>

      <section className="container-page mt-16">
        <h2 className="text-xl font-extrabold mb-5">{t(locale, "stepsTitle")}</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { n: "1", icon: "clipboard" as const, t: t(locale, "step1t"), d: t(locale, "step1d") },
            { n: "2", icon: "scale" as const, t: t(locale, "step2t"), d: t(locale, "step2d") },
            { n: "3", icon: "envelope" as const, t: t(locale, "step3t"), d: t(locale, "step3d") },
            { n: "4", icon: "sushi" as const, t: t(locale, "step4t"), d: t(locale, "step4d") },
          ].map((s) => (
            <div key={s.n} className="card p-5 text-center">
              <span className="inline-grid place-items-center w-8 h-8 rounded-full bg-blue text-white font-bold">{s.n}</span>
              <div className="mt-3 flex justify-center">
                <Icon name={s.icon} size={36} />
              </div>
              <h3 className="font-extrabold mt-3">{s.t}</h3>
              <p className="text-sm text-muted mt-2 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner locale={locale} />
    </div>
  );
}

function Stat({ icon, label, value, note }: { icon: IconName; label: string; value: string; note: string }) {
  return (
    <div className="flex flex-col items-center">
      <Icon name={icon} size={40} />
      <p className="text-sm text-muted mt-2">{label}</p>
      <p className="text-3xl font-black text-navy mt-1">{value}</p>
      <p className="text-xs text-muted mt-1">{note}</p>
    </div>
  );
}
