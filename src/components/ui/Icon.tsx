import type { ReactNode } from "react";

type Props = { name: IconName; className?: string; size?: number };

export type IconName =
  | "school"
  | "person"
  | "handshake"
  | "yen"
  | "calendar"
  | "chart"
  | "globe"
  | "commute"
  | "search"
  | "pin"
  | "clock"
  | "bolt"
  | "store"
  | "heart"
  | "scale"
  | "mail"
  | "book"
  | "utensils"
  | "laptop"
  | "level"
  | "chat"
  | "trophy"
  | "star"
  | "check"
  | "phone"
  | "train"
  | "list"
  | "chef"
  | "target"
  | "clipboard"
  | "gift"
  | "shield"
  | "users"
  | "award"
  | "sushi"
  | "camera"
  | "quote"
  | "envelope"
  | "trash"
  | "home"
  | "menu";

export function Icon({ name, className = "text-blue", size = 20 }: Props) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };
  switch (name) {
    case "school":
      return (
        <svg {...common}>
          <path d="M3 21h18" />
          <path d="M5 21V8l7-4 7 4v13" />
          <path d="M9 21v-6h6v6" />
        </svg>
      );
    case "person":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.2" />
          <path d="M5 20c1.2-3.5 3.6-5.2 7-5.2S17.8 16.5 19 20" />
        </svg>
      );
    case "handshake":
      return (
        <svg {...common}>
          <path d="M8 13l2.5 2.5a2 2 0 0 0 2.8 0L17 12" />
          <path d="M4 12l4-4 3 3" />
          <path d="M20 12l-4-4-2 2" />
          <path d="M9 16.5 7.5 18" />
        </svg>
      );
    case "yen":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 8l4 5 4-5M12 13v5M8 13h8M8 16h8" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="15" rx="2" />
          <path d="M8 3v4M16 3v4M4 10h16" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M4 19V5M4 19h16" />
          <path d="M8 16v-5M12 16V8M16 16v-8" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
        </svg>
      );
    case "commute":
      return (
        <svg {...common}>
          <path d="M4 20V9l8-5 8 5v11" />
          <path d="M9 20v-6h6v6" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="6.5" />
          <path d="m16 16 4 4" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
          <circle cx="12" cy="10" r="2.2" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v6l4 2" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...common}>
          <path d="M13 3 6 13h6l-1 8 7-10h-6l1-8z" />
        </svg>
      );
    case "store":
      return (
        <svg {...common}>
          <path d="M4 10h16v10H4z" />
          <path d="M4 10 6 5h12l2 5" />
          <path d="M10 20v-5h4v5" />
        </svg>
      );
    case "heart":
      return (
        <svg {...common}>
          <path d="M12 20s-7-4.4-9.2-8.1C.8 8.6 2.6 5 6.2 5c1.9 0 3.2 1 3.8 2 .6-1 1.9-2 3.8-2 3.6 0 5.4 3.6 3.4 6.9C19 15.6 12 20 12 20z" />
        </svg>
      );
    case "scale":
      return (
        <svg {...common}>
          <path d="M12 4v16M6 20h12" />
          <path d="M12 6 6 12h6M12 6l6 6H12" />
        </svg>
      );
    case "mail":
    case "envelope":
      return (
        <svg {...common}>
          <rect x="3.5" y="6" width="17" height="12" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H20v16H7.5A2.5 2.5 0 0 0 5 21.5z" />
          <path d="M5 5.5v16" />
        </svg>
      );
    case "utensils":
      return (
        <svg {...common}>
          <path d="M8 3v8M6 3v5a2 2 0 0 0 4 0V3M8 11v10M16 3c0 4 3 5 3 8v10M16 3v8" />
        </svg>
      );
    case "laptop":
      return (
        <svg {...common}>
          <rect x="5" y="5" width="14" height="10" rx="1.5" />
          <path d="M3 19h18M8 19l1-4h6l1 4" />
        </svg>
      );
    case "level":
      return (
        <svg {...common}>
          <path d="M4 18V8M4 18h16" />
          <path d="M8 14l4-6 3 4 5-7" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common}>
          <path d="M5 16.5 3 21l5-2c1.2.6 2.6.9 4 .9 4.4 0 8-3.1 8-7s-3.6-7-8-7-8 3.1-8 7c0 1.4.5 2.7 1.3 3.8z" />
        </svg>
      );
    case "trophy":
      return (
        <svg {...common}>
          <path d="M8 4h8v5a4 4 0 0 1-8 0V4z" />
          <path d="M8 6H5a3 3 0 0 0 3 5M16 6h3a3 3 0 0 1-3 5M12 13v3M9 20h6M10 16h4" />
        </svg>
      );
    case "star":
      return (
        <svg {...common}>
          <path d="m12 3 2.5 6.3L21 10l-4.5 4.2L17.8 21 12 17.6 6.2 21l1.3-6.8L3 10l6.5-.7z" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="m5 13 4 4 10-11" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M7 3h4l1 4-2 2a12 12 0 0 0 5 5l2-2 4 1v4c0 1-1 2-2 2C10 19 5 14 5 5c0-1 1-2 2-2z" />
        </svg>
      );
    case "train":
      return (
        <svg {...common}>
          <rect x="6" y="3" width="12" height="14" rx="2" />
          <path d="M6 17 4 21M18 17l2 4M9 20h6M8 8h8M8 12h8" />
        </svg>
      );
    case "list":
      return (
        <svg {...common}>
          <path d="M8 7h12M8 12h12M8 17h12M4 7h.01M4 12h.01M4 17h.01" />
        </svg>
      );
    case "chef":
      return (
        <svg {...common}>
          <path d="M8 10c-2 0-3-1.6-3-3.2S7 4 8.5 5c.6-1.5 2-2.5 3.5-2.5S15 3.5 15.5 5C17 4 19 5.2 19 6.8S18 10 16 10" />
          <path d="M8 10v10h8V10" />
        </svg>
      );
    case "target":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="1.2" fill="currentColor" />
        </svg>
      );
    case "clipboard":
      return (
        <svg {...common}>
          <rect x="6" y="5" width="12" height="16" rx="2" />
          <path d="M9 5V4h6v1M9 11h6M9 15h4" />
        </svg>
      );
    case "gift":
      return (
        <svg {...common}>
          <rect x="4" y="11" width="16" height="9" rx="1" />
          <path d="M4 11h16M12 11v9M12 11c0-3-2.5-5-4.5-3S10 11 12 11c0-3 2.5-5 4.5-3S14 11 12 11" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20c.8-3.2 2.8-5 6-5s5.2 1.8 6 5" />
          <circle cx="17" cy="9" r="2.4" />
          <path d="M16 20c.4-2 1.4-3.4 3.4-4.2" />
        </svg>
      );
    case "award":
      return (
        <svg {...common}>
          <circle cx="12" cy="9" r="5" />
          <path d="m9 13-1 8 4-2 4 2-1-8" />
        </svg>
      );
    case "sushi":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="16" rx="8" ry="4" />
          <path d="M4 16c0-2 3.6-6 8-6s8 4 8 6" />
          <ellipse cx="12" cy="10" rx="3" ry="2" />
        </svg>
      );
    case "camera":
      return (
        <svg {...common}>
          <path d="M4 8h3l2-2h6l2 2h3v11H4z" />
          <circle cx="12" cy="13" r="3.2" />
        </svg>
      );
    case "quote":
      return (
        <svg {...common}>
          <path d="M8 17c-2 0-4-2-4-5 0-3 2-6 5-7l.5 1.8C8 7.5 7 9 7 11h3v6H8zm9 0c-2 0-4-2-4-5 0-3 2-6 5-7l.5 1.8c-1.5.7-2.5 2.2-2.5 3.2h3v6h-2z" />
        </svg>
      );
    case "trash":
      return (
        <svg {...common}>
          <path d="M5 7h14M9 7V5h6v2M8 7l1 13h6l1-13" />
        </svg>
      );
    case "home":
      return (
        <svg {...common}>
          <path d="m4 11 8-7 8 7v9H4z" />
          <path d="M10 20v-6h4v6" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common}>
          <path d="M5 7h14M5 12h14M5 17h14" />
        </svg>
      );
    default:
      return null;
  }
}

export function IconLabel({
  name,
  children,
  className = "",
}: {
  name: IconName;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <Icon name={name} size={16} />
      {children}
    </span>
  );
}
