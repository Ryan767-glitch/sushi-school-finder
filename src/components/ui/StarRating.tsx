export function StarRating({
  value,
  size = 14,
  showValue = false,
}: {
  value: number;
  size?: number;
  showValue?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-1 text-gold" aria-label={`評価 ${value}`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = value >= i + 1;
        const half = !filled && value >= i + 0.4;
        return (
          <svg key={i} width={size} height={size} viewBox="0 0 20 20" aria-hidden>
            <path
              d="M10 1.6 12.5 7l6 .5-4.6 3.9 1.5 5.8L10 13.8 4.6 17.2 6.1 11.4 1.5 7.5 7.5 7 10 1.6z"
              fill={filled ? "#f0b429" : half ? "url(#h)" : "#e6e6e6"}
            />
            <defs>
              <linearGradient id="h">
                <stop offset="50%" stopColor="#f0b429" />
                <stop offset="50%" stopColor="#e6e6e6" />
              </linearGradient>
            </defs>
          </svg>
        );
      })}
      {showValue ? <span className="text-ink font-bold ml-0.5">{value.toFixed(1)}</span> : null}
    </span>
  );
}
