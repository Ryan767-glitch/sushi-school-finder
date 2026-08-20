import type { School } from "@/types";

/** Real photo saved from official site or Maps listing. */
export function schoolPhoto(school: Pick<School, "slug">) {
  return `/images/schools/${school.slug}.jpg`;
}

/** Official pages that accept 資料請求・入学相談・申込（当サイトは代理送信しない） */
export const inquiryUrls: Record<string, string> = {
  "tokyo-sushi-academy": "https://www.sushiacademy.co.jp/otoiawase",
  "tokyo-sushi-washoku": "https://www.sushi-tokyo.jp/apply",
  "insyokujin-tokyo": "https://insyokujin.ac/request",
  "insyokujin-osaka": "https://insyokujin.ac/request",
  "insyokujin-awaji": "https://insyokujin.ac/request",
  "insyokujin-fukuoka": "https://insyokujin.ac/request",
  "ginza-onodera": "https://onodera-sushiacademy.com/inquiry/",
  "sushi-juku-tokyo": "https://jsatokyo.com/",
  "sushi-college-tokyo": "https://season2-group.com/sushi-college/contact",
  "tokyo-sushi-school": "https://sushi-school.tokyo/",
  tssa: "https://tssa.jp/contact/",
  jsla: "https://jsla.academy/contact",
  inshokujuku: "https://gf-support.com/inshokujyuku/course/sushi",
  "kyoto-chorishi": "https://www.kyoto-chorishi.ac.jp/request/",
  "kyoto-sushi-academy": "https://kyoto-sushiacademy.jp/",
  "masazushi-dojo": "https://masazushi.co.jp/masazushidojo/",
  "sushi-labo": "https://www.sushi-lab.jp/contact.html",
  "osuno-sushi": "https://www.osunosushi.com/apply-now",
  "sushi-university": "https://sushi-university.com/apply",
  "lecole-vantan": "https://www.lecole.jp/",
  "hokuriku-sushi-academy": "https://hokuriku-sushiacademy.jp/admission/",
  "sushi-school-narita": "https://www.sushischoolnarita.com/entry",
  "all-japan-sushi-academy": "https://www.alljapan-sushi-academy.com/contact/",
};

export function getInquiryUrl(school: Pick<School, "slug">) {
  return inquiryUrls[school.slug];
}

export function inquirySchools<T extends Pick<School, "slug">>(list: T[]) {
  return list.filter((s) => getInquiryUrl(s));
}
