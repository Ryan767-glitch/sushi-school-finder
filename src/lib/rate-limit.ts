const hits = new Map<string, number[]>();

export function rateLimit(key: string, limit = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const prev = (hits.get(key) || []).filter((t) => now - t < windowMs);
  if (prev.length >= limit) return false;
  prev.push(now);
  hits.set(key, prev);
  if (hits.size > 2000) {
    for (const [k, v] of hits) {
      if (v.every((t) => now - t >= windowMs)) hits.delete(k);
    }
  }
  return true;
}
