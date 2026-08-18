import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AppStateProvider } from "@/context/AppState";
import { CompareTray } from "@/components/school/CompareTray";

const jp = Noto_Sans_JP({
  variable: "--font-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const site = process.env.NEXT_PUBLIC_SITE_URL || "https://sushi-school-finder.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: {
    default: "SUSHI SCHOOL FINDER | 寿司スクール比較・検索",
    template: "%s | SUSHI SCHOOL FINDER",
  },
  description:
    "日本全国の実在する寿司スクール・専門学校を比較。学費・期間・就職支援・公開評価をもとに、あなたに合う学校を探せます。",
  openGraph: {
    title: "SUSHI SCHOOL FINDER",
    description: "全国の寿司スクールを比較・検索",
    locale: "ja_JP",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className={`${jp.variable} antialiased min-h-screen flex flex-col`}>
        <AppStateProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CompareTray />
        </AppStateProvider>
      </body>
    </html>
  );
}
