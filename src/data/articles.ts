export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  authorRole: string;
  image: string;
  readMinutes: number;
  related: string[];
  sections: { heading: string; body: string[]; tip?: string }[];
};

export const articles: Article[] = [
  {
    slug: "how-to-become-sushi-chef",
    title: "未経験から寿司職人になるには？スクール選びのコツを徹底解説",
    excerpt:
      "寿司職人を目指すなら、店での修行・スクール・独学の3ルートがあります。未経験者が学校を選ぶときに見るべきポイントを整理しました。",
    date: "2026-08-01",
    category: "スクール選び",
    author: "SUSHI SCHOOL FINDER 編集部",
    authorRole: "公開情報の調査・編集",
    image: "/images/nigiri-real.jpg",
    readMinutes: 8,
    related: ["sushi-school-types", "tuition-guide", "career-paths"],
    sections: [
      {
        heading: "未経験から寿司職人は目指せる？",
        body: [
          "結論から言えば、未経験から寿司職人になることは十分に可能です。多くのスクールや飲食店が未経験者を受け入れ、基礎から丁寧に育てる環境を整えています。",
          "重要なのは「継続すること」と「基礎をしっかり学ぶこと」です。寿司は繊細な技術と経験の積み重ねが求められる世界ですが、正しい環境で学べば着実にステップアップできます。",
        ],
        tip: "年齢や学歴は関係ありません。やる気と学ぶ姿勢があれば、誰でもスタートラインに立てます。",
      },
      {
        heading: "寿司職人に必要なスキルと心構え",
        body: [
          "魚の知識と目利きの力、正確な包丁技術と美しい握り、衛生管理や清潔感の徹底、集中力・忍耐力・向上心。技術だけでなく、お客様に満足していただくための心構えも大切です。",
          "プロの現場では「毎日の小さな積み重ねが、自信と信頼につながる」と繰り返し語られます。焦らず、一つひとつの工程を大切にしましょう。",
        ],
      },
      {
        heading: "寿司スクールで学べること",
        body: [
          "学校では握りだけでなく、魚の捌き、シャリ、巻物、仕込み、衛生、原価、接客までを短期間で整理して学べます。店での見習いだけだと雑務が長く、技術に届くまでに年単位かかることもあります。",
          "逆に学校だけでは反復量が足りないことが多いので、卒業後に店で働く・自分で魚を買って練習する、という二段構えが現実的です。",
        ],
      },
      {
        heading: "スクール選びの5つのコツ",
        body: [
          "1. 目的を決める（就職／独立／趣味／海外）。2. 通える場所と期間。3. 総額（入学金・教材・包丁）。4. 実習量と人数。5. 卒業後の支援。",
          "口コミはGoogleマップや公式の卒業生紹介、取材記事を横断して見ると偏りが減ります。必ず体験や説明会で教室の空気を確認してください。",
        ],
      },
      {
        heading: "通学型とオンライン型の違い",
        body: [
          "通学型は手の感触や魚の状態をその場で修正してもらえます。オンラインは知識・経営・予習に強く、実技の主戦場にはなりにくいです。併用がもっとも無駄が少ない使い方です。",
        ],
      },
      {
        heading: "費用や期間の目安",
        body: [
          "趣味・入門は10万〜30万円、基礎〜中級の短期は30万〜80万円、プロ養成は80万〜150万円以上、認可専門学校は2年で300万〜400万円台が公開情報の目安です。",
          "分割払いや教育ローン、専門学校の奨学金に対応している学校もあります。",
        ],
      },
    ],
  },
  {
    slug: "sushi-school-types",
    title: "寿司スクールの種類と選び方 完全ガイド",
    excerpt: "認可専門学校、短期アカデミー、教室型、オンライン。4タイプの違いを目的別に整理します。",
    date: "2026-03-28",
    category: "スクール選び",
    author: "SUSHI SCHOOL FINDER 編集部",
    authorRole: "公開情報の調査・編集",
    image: "/images/counter-real.jpg",
    readMinutes: 6,
    related: ["how-to-become-sushi-chef", "tuition-guide"],
    sections: [
      {
        heading: "認可制専門学校",
        body: [
          "調理師免許や学歴、奨学金、長い就職支援が強みです。東京すし和食調理専門学校や京都調理師専門学校が代表例です。時間と費用をかけられる進学層に向きます。",
        ],
      },
      {
        heading: "短期アカデミー",
        body: [
          "2〜6ヶ月で技術に特化します。東京すしアカデミーや飲食人大学がこの型です。転職・独立・海外を急ぐ人の主戦場です。",
        ],
      },
      {
        heading: "教室・回数券型",
        body: [
          "寿司日本橋やすし銀座おのでらアカデミーのように、1回から通える柔軟さがあります。仕事を辞めずに基礎を試したい人に向きます。",
        ],
      },
      {
        heading: "オンライン",
        body: [
          "寿司大学のように知識と資格、開業の座学を安く学べます。実技の主コースにはせず、補助教材として使うのがおすすめです。",
        ],
      },
    ],
  },
  {
    slug: "tuition-guide",
    title: "寿司学校の学費はいくらか？全国の公開料金を比較",
    excerpt: "5万円台のオンラインから400万円の専門学校まで。総額で見るための考え方をまとめました。",
    date: "2026-04-18",
    category: "費用",
    author: "SUSHI SCHOOL FINDER 編集部",
    authorRole: "公開情報の調査・編集",
    image: "/images/nigiri-real.jpg",
    readMinutes: 5,
    related: ["how-to-become-sushi-chef", "career-paths"],
    sections: [
      {
        heading: "学費だけを見ない",
        body: [
          "入学金、教材、包丁、白衣、住居、仕事を休む期間の生活費まで含めると、授業料の数字だけでは比べられません。",
          "当サイトの金額は2026年8月時点の公開情報に基づく目安です。必ず公式で最新額を確認してください。",
        ],
      },
      {
        heading: "安い学校が悪いわけではない",
        body: [
          "1ヶ月50万円前後の学校は「基礎の点火」として優秀です。ただしプロとして食べていくには、その後の現場経験が必要です。高い学校は時間と支援が長い、と捉えると選びやすくなります。",
        ],
      },
    ],
  },
  {
    slug: "career-paths",
    title: "寿司職人の一日の流れは？仕事内容を詳しく解説",
    excerpt: "仕入れ、仕込み、昼営業、夜のおまかせ。学校を出たあとに待っている仕事の実態を整理します。",
    date: "2026-04-10",
    category: "職業ガイド",
    author: "SUSHI SCHOOL FINDER 編集部",
    authorRole: "公開情報の調査・編集",
    image: "/images/hero-real.jpg",
    readMinutes: 6,
    related: ["how-to-become-sushi-chef", "who-fits"],
    sections: [
      {
        heading: "朝は仕入れと仕込み",
        body: [
          "高級店や個人店では市場や業者からの仕入れ、米炊き、ネタの仕込みから一日が始まります。チェーン店では仕込み済みのネタが届くこともあり、学べる範囲が店によって全く違います。",
        ],
      },
      {
        heading: "昼と夜で求められるものが違う",
        body: [
          "昼は回転が速く、夜はおまかせや一品、接客の質が問われやすいです。学校で握りだけを学んでも、現場では掃除・発注・原価・会話が同時に求められます。",
        ],
      },
    ],
  },
  {
    slug: "who-fits",
    title: "寿司職人に向いている人の特徴5選",
    excerpt: "手先の器用さより、清潔さ・反復・お客様への関心が続く人の方が長く残ります。",
    date: "2026-04-10",
    category: "職業ガイド",
    author: "SUSHI SCHOOL FINDER 編集部",
    authorRole: "公開情報の調査・編集",
    image: "/images/nigiri-real.jpg",
    readMinutes: 4,
    related: ["career-paths", "how-to-become-sushi-chef"],
    sections: [
      {
        heading: "向いている人",
        body: [
          "同じ工程を丁寧に繰り返せる人、清潔感を保てる人、季節の魚に興味が続く人、立ち仕事と不規則な時間に耐える人、お客様の顔を見て調整できる人。",
        ],
      },
      {
        heading: "向かないわけではないが、覚悟がいること",
        body: [
          "夜型の生活、週末休みの少なさ、最初の数年の収入、立ちっぱなし。学校のパンフレットだけでは見えにくい部分なので、体験と店での食事・観察をセットにしてください。",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
