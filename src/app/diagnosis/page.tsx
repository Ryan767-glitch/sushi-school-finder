import { redirect } from "next/navigation";

export const metadata = { title: "スクールを探す" };

export default function DiagnosisPage() {
  redirect("/schools");
}
