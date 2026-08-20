import { getInquiryUrl } from "@/lib/school-media";
import type { School } from "@/types";
import { Icon } from "@/components/ui/Icon";

export function OfficialInquiry({
  school,
  className = "btn-coral text-sm",
  label = "公式サイトで資料請求",
}: {
  school: Pick<School, "slug" | "name">;
  className?: string;
  label?: string;
}) {
  const href = getInquiryUrl(school);
  if (!href) return null;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      <Icon name="envelope" size={14} className="text-current" />
      {label}
    </a>
  );
}
