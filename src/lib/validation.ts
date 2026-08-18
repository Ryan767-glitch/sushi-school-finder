export type InquiryInput = {
  lastName: string;
  firstName: string;
  lastKana: string;
  firstKana: string;
  email: string;
  phone: string;
  areas: string[];
  style: string;
  start: string;
  hope: string;
  contact: string[];
  note: string;
  privacy: boolean;
  notice: boolean;
  schoolSlugs: string[];
  website?: string;
};

export type FieldErrors = Partial<Record<keyof InquiryInput, string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /^0\d{9,10}$/;
const kanaRe = /^[ぁ-んァ-ンー\s]+$/;

function clean(s: string, max: number) {
  return s.replace(/[\u0000-\u001F\u007F]/g, "").trim().slice(0, max);
}

export function sanitizeInquiry(raw: Record<string, unknown>): InquiryInput {
  const str = (k: string, max: number) => clean(typeof raw[k] === "string" ? (raw[k] as string) : "", max);
  const arr = (k: string, maxItems: number, maxLen: number) => {
    const v = raw[k];
    if (!Array.isArray(v)) return [];
    return v
      .filter((x): x is string => typeof x === "string")
      .slice(0, maxItems)
      .map((x) => clean(x, maxLen));
  };
  return {
    lastName: str("lastName", 30),
    firstName: str("firstName", 30),
    lastKana: str("lastKana", 30),
    firstKana: str("firstKana", 30),
    email: str("email", 120).toLowerCase(),
    phone: str("phone", 20).replace(/[-\s]/g, ""),
    areas: arr("areas", 8, 40),
    style: str("style", 40),
    start: str("start", 40),
    hope: str("hope", 40),
    contact: arr("contact", 3, 20),
    note: str("note", 500),
    privacy: raw.privacy === true,
    notice: raw.notice === true,
    schoolSlugs: arr("schoolSlugs", 5, 80),
    website: str("website", 120),
  };
}

export function validateInquiry(d: InquiryInput): FieldErrors {
  const e: FieldErrors = {};
  if (!d.lastName) e.lastName = "姓を入力してください";
  if (!d.firstName) e.firstName = "名を入力してください";
  if (!d.lastKana || !kanaRe.test(d.lastKana)) e.lastKana = "せいをひらがなまたはカタカナで入力してください";
  if (!d.firstKana || !kanaRe.test(d.firstKana)) e.firstKana = "めいをひらがなまたはカタカナで入力してください";
  if (!emailRe.test(d.email)) e.email = "メールアドレスの形式が正しくありません";
  if (!phoneRe.test(d.phone)) e.phone = "電話番号は0から始まる10〜11桁で入力してください";
  if (d.areas.length === 0) e.areas = "希望エリアを選択してください";
  if (!d.style) e.style = "学び方を選択してください";
  if (!d.start) e.start = "希望開始時期を選択してください";
  if (!d.hope) e.hope = "見学・体験の希望を選択してください";
  if (d.contact.length === 0) e.contact = "希望の連絡方法を選択してください";
  if (!d.privacy) e.privacy = "プライバシーポリシーへの同意が必要です";
  if (!d.notice) e.notice = "案内への同意が必要です";
  if (d.schoolSlugs.length === 0) e.schoolSlugs = "スクールを1校以上選択してください";
  return e;
}
