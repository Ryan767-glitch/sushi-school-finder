import { NextResponse } from "next/server";
import { sanitizeInquiry, validateInquiry } from "@/lib/validation";
import { rateLimit } from "@/lib/rate-limit";
import { getSchool } from "@/data/schools";

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!rateLimit(`inq:${ip}`)) {
    return NextResponse.json({ message: "送信が集中しています。しばらくしてから再度お試しください。" }, { status: 429 });
  }

  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  if (origin && host) {
    try {
      const o = new URL(origin);
      if (o.host !== host) {
        return NextResponse.json({ message: "不正なリクエストです。" }, { status: 403 });
      }
    } catch {
      return NextResponse.json({ message: "不正なリクエストです。" }, { status: 403 });
    }
  }

  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ message: "リクエストの形式が正しくありません。" }, { status: 400 });
  }
  if (!raw || typeof raw !== "object") {
    return NextResponse.json({ message: "リクエストの形式が正しくありません。" }, { status: 400 });
  }

  const data = sanitizeInquiry(raw as Record<string, unknown>);
  if (data.website) {
    return NextResponse.json({ ok: true });
  }
  const errors = validateInquiry(data);
  if (Object.keys(errors).length) {
    return NextResponse.json({ message: "入力内容を確認してください。", errors }, { status: 400 });
  }

  const names = data.schoolSlugs.map((s) => getSchool(s)?.name).filter(Boolean);

  const webhook = process.env.INQUIRY_WEBHOOK_URL;
  if (webhook && webhook.startsWith("https://")) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "sushi-school-finder",
          schools: names,
          name: `${data.lastName} ${data.firstName}`,
          email: data.email,
          phone: data.phone,
          areas: data.areas,
          style: data.style,
          start: data.start,
          hope: data.hope,
          contact: data.contact,
          note: data.note,
        }),
      });
    } catch {
      return NextResponse.json({ message: "送信先への連携に失敗しました。" }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true });
}
