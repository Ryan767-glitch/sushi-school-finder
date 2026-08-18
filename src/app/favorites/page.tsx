"use client";

import Link from "next/link";
import { useAppState } from "@/context/AppState";
import { getSchool } from "@/data/schools";
import { SchoolListItem } from "@/components/school/SchoolListItem";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default function FavoritesPage() {
  const { favorites } = useAppState();
  const list = favorites.map(getSchool).filter(Boolean);
  return (
    <div className="container-page py-8">
      <Breadcrumb items={[{ href: "/", label: "ホーム" }, { label: "お気に入り" }]} />
      <h1 className="text-3xl font-black mt-4">お気に入り</h1>
      <p className="text-muted mt-2">この端末に保存されます。サーバーには送信しません。</p>
      <div className="mt-6 space-y-4">
        {list.map((s) => (
          <SchoolListItem key={s!.slug} school={s!} />
        ))}
        {list.length === 0 ? (
          <div className="card p-8 text-center">
            <p>まだお気に入りがありません。</p>
            <Link href="/schools" className="btn-coral mt-4 inline-flex">
              スクールを探す
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
