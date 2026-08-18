import Link from "next/link";

export function Breadcrumb({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav aria-label="パンくず" className="text-xs text-muted flex flex-wrap gap-1.5">
      {items.map((it, i) => (
        <span key={it.label} className="inline-flex items-center gap-1.5">
          {i > 0 ? <span aria-hidden>›</span> : null}
          {it.href ? (
            <Link href={it.href} className="hover:text-ink">
              {it.label}
            </Link>
          ) : (
            <span className="text-ink">{it.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
