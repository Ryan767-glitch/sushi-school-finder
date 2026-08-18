export type Review = {
  id: string;
  schoolSlug: string;
  schoolName: string;
  course: string;
  rating: number;
  title: string;
  body: string;
  goods: string[];
  bads: string[];
  persona: string;
  sourceLabel: string;
  dateLabel: string;
  helpful: number;
  tags: ("beginner" | "job" | "teacher" | "tuition" | "atmosphere")[];
  avatar: string;
};

export const reviews: Review[] = [
  {
    id: "r1",
    schoolSlug: "tokyo-sushi-academy",
    schoolName: "東京すしアカデミー",
    course: "集中特訓コース（2ヶ月）",
    rating: 5,
    title: "未経験でも段取りよく技術が身につく",
    body: "公開されている卒業生ノートや取材では、未経験から2ヶ月で基礎を固め、就職や間借り開業につなげた事例が多く見られます。授業密度と就職支援を評価する声が目立ちます。一方で学費の高さを指摘する声もあります。",
    goods: ["カリキュラムが体系的", "就職・開業の事例が多い"],
    bads: ["学費は安くない"],
    persona: "20代・転職",
    sourceLabel: "公開卒業生体験談・取材記事の要約",
    dateLabel: "2026年調査",
    helpful: 23,
    tags: ["beginner", "job", "tuition"],
    avatar: "/images/portrait-chef-m20.jpg",
  },
  {
    id: "r2",
    schoolSlug: "insyokujin-osaka",
    schoolName: "飲食人大学 大阪",
    course: "寿司マイスター専科（3ヶ月）",
    rating: 4,
    title: "実習が多く、短期で現場感覚がつかめる",
    body: "実習比率の高さと関西での就職事例が繰り返し紹介されています。短期集中のため生活を学校に合わせる必要があり、夜間は経験条件がある点に注意が必要です。",
    goods: ["実習が多い", "短期で区切りがつく"],
    bads: ["通学期は忙しい"],
    persona: "30代・独立志向",
    sourceLabel: "公式案内と公開比較記事の要約",
    dateLabel: "2026年調査",
    helpful: 18,
    tags: ["beginner", "job", "atmosphere"],
    avatar: "/images/portrait-chef-m30.jpg",
  },
  {
    id: "r3",
    schoolSlug: "tokyo-sushi-washoku",
    schoolName: "東京すし和食調理専門学校",
    course: "和食調理科（2年制）",
    rating: 5,
    title: "免許と和食全体の土台を作りたい人向き",
    body: "専門学校ならではの設備・資格・奨学金が評価されています。期間と学費はスクール型より大きいため、「早く現場に出たい」人より「土台を長く作りたい」人の満足度が高い傾向です。",
    goods: ["資格・学歴", "和食全体を学べる"],
    bads: ["期間と総額が大きい"],
    persona: "10〜20代・進学",
    sourceLabel: "公式カリキュラムと進学比較記事の要約",
    dateLabel: "2026年調査",
    helpful: 21,
    tags: ["teacher", "tuition"],
    avatar: "/images/portrait-chef-f20.jpg",
  },
  {
    id: "r4",
    schoolSlug: "masazushi-dojo",
    schoolName: "政寿司道場",
    course: "寿司職人養成コース",
    rating: 5,
    title: "老舗の店で少人数、海外も見据えられる",
    body: "実店舗での研修と少人数指導、英語・海外就職の案内が特徴として繰り返し取り上げられています。北海道に通えるかが最大のハードルです。",
    goods: ["現場そのもので学べる", "海外サポート"],
    bads: ["通える地域が限られる"],
    persona: "海外就職希望",
    sourceLabel: "公式サイトと紹介記事の要約",
    dateLabel: "2026年調査",
    helpful: 16,
    tags: ["job", "atmosphere", "teacher"],
    avatar: "/images/portrait-woman.jpg",
  },
  {
    id: "r5",
    schoolSlug: "sushi-juku-tokyo",
    schoolName: "寿司塾 東京校",
    course: "1ヶ月最短コース",
    rating: 4,
    title: "費用を抑えて短期間で基礎を試したい",
    body: "1ヶ月約49万円は東京の短期校の中では比較的手が届きやすい部類です。期間が短い分、卒業後の自己練習や就職先での積み上げが前提になります。",
    goods: ["費用対効果", "池袋で通いやすい"],
    bads: ["期間が短い"],
    persona: "社会人・週末以外も確保できる人",
    sourceLabel: "公開学費と比較記事の要約",
    dateLabel: "2026年調査",
    helpful: 12,
    tags: ["tuition", "beginner"],
    avatar: "/images/portrait-chef-m40.jpg",
  },
  {
    id: "r6",
    schoolSlug: "kyoto-sushi-academy",
    schoolName: "京都寿司アカデミー",
    course: "2ヶ月養成コース",
    rating: 4,
    title: "京都で59万円台、週3〜4日で続けやすい",
    body: "関西の短期校として学費のわかりやすさが評価されています。週3〜4日のため、完全な合宿型より生活と両立しやすい構成です。",
    goods: ["学費が明確", "少人数"],
    bads: ["総授業時間は120時間と短め"],
    persona: "関西在住・未経験",
    sourceLabel: "公式学費と紹介記事の要約",
    dateLabel: "2026年調査",
    helpful: 11,
    tags: ["tuition", "beginner", "atmosphere"],
    avatar: "/images/portrait-chef-f20.jpg",
  },
  {
    id: "r7",
    schoolSlug: "ginza-onodera",
    schoolName: "GINZA ONODERA 鮨アカデミー",
    course: "100コマコース",
    rating: 4,
    title: "自分のペースで高級店ブランドのもと学べる",
    body: "回数券制のため仕事を続けやすい、という点が最大の利点です。系列店就職や還元制度は条件確認が必須ですが、ブランドと柔軟性を両立したい人に選ばれています。",
    goods: ["予約の自由度", "系列の就職"],
    bads: ["通い切るには自己管理が必要"],
    persona: "働きながら学びたい",
    sourceLabel: "公式制度案内の要約",
    dateLabel: "2026年調査",
    helpful: 14,
    tags: ["job", "teacher"],
    avatar: "/images/portrait-chef-m30.jpg",
  },
  {
    id: "r8",
    schoolSlug: "sushi-university",
    schoolName: "寿司大学（オンライン）",
    course: "オンライン講座",
    rating: 4,
    title: "知識の先取りや開業の予習に向く",
    body: "5万円台で体系的な知識に触れられる点は支持されています。実技の反復は別途必要、という前提を理解した人の満足度が高い内容です。",
    goods: ["価格", "場所を選ばない"],
    bads: ["実技量は通学に劣る"],
    persona: "地方在住・予習目的",
    sourceLabel: "公式発表と紹介記事の要約",
    dateLabel: "2026年調査",
    helpful: 9,
    tags: ["tuition", "beginner"],
    avatar: "/images/portrait-woman.jpg",
  },
];

export const reviewHighlights = [
  {
    quote: "未経験からでも、段取りよく基礎を積める学校が増えています。",
    meta: "公開卒業生体験談より",
    avatar: "/images/portrait-chef-m30.jpg",
  },
  {
    quote: "短期集中は効率的。その分、卒業後に現場で繰り返す覚悟が必要です。",
    meta: "編集部コメント",
    avatar: "/images/portrait-chef-f20.jpg",
  },
  {
    quote: "就職や開業の支援があるかどうかで、卒業後の動きやすさが変わります。",
    meta: "公開比較記事より",
    avatar: "/images/portrait-chef-m40.jpg",
  },
];
