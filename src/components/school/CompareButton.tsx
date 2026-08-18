"use client";

import { useAppState } from "@/context/AppState";
import { useState } from "react";

export function CompareButton({ slug, label = "比較に追加" }: { slug: string; label?: string }) {
  const { compare, toggleCompare } = useAppState();
  const on = compare.includes(slug);
  const [msg, setMsg] = useState("");
  return (
    <div className="inline-flex flex-col items-start">
      <button
        type="button"
        className={`text-sm font-bold ${on ? "text-coral" : "text-blue"}`}
        onClick={() => {
          const ok = toggleCompare(slug);
          setMsg(ok ? "" : "比較は最大5校です");
        }}
      >
        {on ? "比較から外す" : label}
      </button>
      {msg ? <span className="text-xs text-coral">{msg}</span> : null}
    </div>
  );
}
