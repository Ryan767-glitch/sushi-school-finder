export type RegionId =
  | "hokkaido-tohoku"
  | "kanto"
  | "koshinetsu"
  | "tokai"
  | "kansai"
  | "chugoku-shikoku"
  | "kyushu-okinawa"
  | "online";

export type StyleId = "commute" | "online" | "hybrid";
export type LevelId = "beginner" | "intermediate" | "advanced";
export type SchoolType = "vocational" | "academy" | "classroom" | "online";
export type BadgeId = "recommended" | "popular" | "value";

export type Course = {
  id: string;
  name: string;
  summary: string;
  durationLabel: string;
  sessionsLabel: string;
  contents: string;
  tuitionFrom: number;
  enrollmentFee: number;
  popular?: boolean;
  intensive?: boolean;
  weekend?: boolean;
  image: string;
};

export type Instructor = {
  name: string;
  title: string;
  bio: string;
  verified: boolean;
};

export type School = {
  slug: string;
  name: string;
  nameKana: string;
  shortName: string;
  type: SchoolType;
  prefecture: string;
  city: string;
  areaLabel: string;
  region: RegionId;
  address: string;
  nearestStation: string;
  phone?: string;
  officialUrl: string;
  mapsQuery: string;
  foundedYear?: number;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  badges: BadgeId[];
  styles: StyleId[];
  levels: LevelId[];
  englishSupport: boolean;
  trialLesson: boolean;
  trialFee?: number;
  trialMinutes?: number;
  jobSupport: boolean;
  openSupport: boolean;
  onlineAvailable: boolean;
  tuitionFrom: number;
  durationMonthsFrom: number;
  durationMonthsTo: number;
  practiceScore: number;
  googleRating?: number;
  googleReviewCount?: number;
  googleStatus: "rated" | "no_reviews" | "no_listing";
  ratingSource: string;
  editorialScore: number;
  editorialBreakdown: {
    satisfaction: number;
    curriculum: number;
    support: number;
    value: number;
    reputation: number;
  };
  features: string[];
  learnItems: string[];
  jobSupportDetails: string[];
  hours?: string;
  campuses: string[];
  courses: Course[];
  instructors: Instructor[];
  faqs: { q: string; a: string }[];
};
