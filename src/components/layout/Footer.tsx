import Link from "next/link";
import { schools } from "@/data/schools";
import { t, type Locale } from "@/lib/locale";

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="mt-20 border-t border-line bg-soft">
      <div className="container-page py-12 grid gap-10 md:grid-cols-4 text-sm">
        <div>
          <p className="font-extrabold inline-flex items-center gap-2">
            <span className="relative w-8 h-8 rounded-full overflow-hidden border border-line shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo-nigiri.jpg" alt="" className="w-full h-full object-cover" />
            </span>
            SUSHI SCHOOL FINDER
          </p>
          <p className="text-muted mt-2 leading-relaxed">{t(locale, "footerBlurb")}</p>
        </div>
        <div>
          <p className="font-bold mb-3">{t(locale, "footerFind")}</p>
          <ul className="space-y-2 text-muted">
            <li><Link href="/schools">{t(locale, "schoolList")}</Link></li>
            <li><Link href="/ranking">{t(locale, "navRanking")}</Link></li>
            <li><Link href="/compare">{t(locale, "navCompare")}</Link></li>
            <li><Link href="/reviews">{t(locale, "reviews")}</Link></li>
            <li><Link href="/beginner">{t(locale, "navBeginner")}</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold mb-3">{t(locale, "footerRead")}</p>
          <ul className="space-y-2 text-muted">
            <li><Link href="/articles">{t(locale, "navArticles")}</Link></li>
            <li><Link href="/inquiry">{t(locale, "officialInquiry")}</Link></li>
            <li><Link href="/about">{t(locale, "about")}</Link></li>
            <li><Link href="/contact">{t(locale, "contact")}</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold mb-3">{t(locale, "footerSchools")}</p>
          <ul className="space-y-2 text-muted">
            {schools.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/schools/${s.slug}`}>{s.shortName}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-page py-5 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-muted">
          <p>© {new Date().getFullYear()} SUSHI SCHOOL FINDER</p>
          <div className="flex gap-4">
            <Link href="/privacy">{t(locale, "privacy")}</Link>
            <Link href="/terms">{t(locale, "terms")}</Link>
            <Link href="/disclaimer">{t(locale, "disclaimer")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
