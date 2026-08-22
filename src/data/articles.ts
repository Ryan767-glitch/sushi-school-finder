import { L, type Article } from "./article-types";
import { featureArticles } from "./article-features";

const catGuide = L("スクール選び", "Choosing a school");
const catFee = L("費用", "Tuition");
const catJob = L("職業ガイド", "The job");

const guides: Article[] = [
  {
    slug: "how-to-become-sushi-chef",
    kind: "guide",
    title: L("未経験から寿司職人になるには？スクール選びのコツ", "How to become a sushi chef from zero"),
    excerpt: L(
      "店での修行・スクール・独学の3ルート。未経験者が学校を選ぶときに見るべきポイントを整理しました。",
      "Shop apprenticeship, school, or self-study. What beginners should check before paying tuition.",
    ),
    date: "2026-08-01",
    category: catGuide,
    image: "/images/nigiri-real.jpg",
    readMinutes: 8,
    related: ["sushi-school-types", "tuition-guide", "is-ten-year-apprenticeship-required"],
    sections: [
      {
        heading: L("未経験から目指せるか", "Can beginners actually do this?"),
        body: [
          L("多くの短期校と一部の店は未経験を受け入れています。重要なのは継続と、基礎を誰かに直してもらう環境です。", "Many short schools and some shops accept beginners. What matters is staying with it, and having someone correct the basics."),
        ],
        tip: L("年齢や学歴より、通える時間と卒業後の働き方が先です。", "Hours you can attend and what you will do after graduation matter more than age or degrees."),
      },
      {
        heading: L("学校で学べること、学べないこと", "What school teaches, and what it does not"),
        body: [
          L("捌き、シャリ、握り、衛生、原価の入口までは圧縮できます。お客様の前での責任と、毎日の仕込みの量は店で積むものです。", "Schools can compress fish work, rice, nigiri, hygiene, and a first look at food cost. Responsibility in front of guests and daily prep volume still come from a shop."),
        ],
      },
    ],
  },
  {
    slug: "sushi-school-types",
    kind: "guide",
    title: L("寿司スクールの種類と選び方", "Types of sushi schools"),
    excerpt: L("認可専門学校、短期アカデミー、教室型、オンライン。4タイプの違いです。", "Licensed colleges, short academies, drop-in studios, and online. Four different products."),
    date: "2026-03-28",
    category: catGuide,
    image: "/images/counter-real.jpg",
    readMinutes: 6,
    related: ["how-to-become-sushi-chef", "three-months-vs-two-years", "tuition-guide"],
    sections: [
      {
        heading: L("4タイプ", "Four types"),
        body: [
          L("専門学校は免許と時間。短期アカデミーは技術の圧縮。教室型は仕事を辞めずに試す。オンラインは知識の補助です。", "Colleges sell licenses and time. Academies compress technique. Studios let you try without quitting work. Online is backup knowledge."),
        ],
      },
    ],
  },
  {
    slug: "tuition-guide",
    kind: "guide",
    title: L("寿司学校の学費はいくらか", "What sushi school actually costs"),
    excerpt: L("5万円台のオンラインから400万円の専門学校まで。総額で見る考え方です。", "From cheap online courses to four-million-yen colleges. Look at the full bill."),
    date: "2026-04-18",
    category: catFee,
    image: "/images/nigiri-real.jpg",
    readMinutes: 5,
    related: ["how-to-become-sushi-chef", "three-months-vs-two-years"],
    sections: [
      {
        heading: L("授業料以外", "Beyond tuition"),
        body: [
          L("入学金、教材、包丁、白衣、住居、休職中の生活費を足してください。当サイトの金額は2026年8月の公開情報の目安です。", "Add enrollment fees, tools, whites, housing, and lost salary. Figures on this site are public-information estimates as of August 2026."),
        ],
      },
    ],
  },
  {
    slug: "career-paths",
    kind: "guide",
    title: L("寿司職人の一日。学校のあとに待っている仕事", "A sushi chef’s day after school"),
    excerpt: L("仕入れ、仕込み、昼、夜。握り以外が大半です。", "Buying fish, prep, lunch, dinner. Nigiri is only part of the shift."),
    date: "2026-04-10",
    category: catJob,
    image: "/images/hero-real.jpg",
    readMinutes: 6,
    related: ["who-fits", "school-then-shop-hybrid"],
    sections: [
      {
        heading: L("朝と夜", "Morning and night"),
        body: [
          L("個人店は仕入れと仕込みから始まります。夜はおまかせと接客の比重が上がります。学校の握り練習だけでは足りない理由です。", "Independent shops start with buying and prep. Night service adds omakase and hospitality. That is why nigiri drills at school are not the whole job."),
        ],
      },
    ],
  },
  {
    slug: "who-fits",
    kind: "guide",
    title: L("向いている人、覚悟がいること", "Who lasts, and what is hard"),
    excerpt: L("器用さより、清潔と反復が続く人の方が残ります。", "Clean habits and repetition outlast “good hands.”"),
    date: "2026-04-10",
    category: catJob,
    image: "/images/nigiri-real.jpg",
    readMinutes: 4,
    related: ["career-paths", "how-to-become-sushi-chef"],
    sections: [
      {
        heading: L("続く人", "Who stays"),
        body: [
          L("同じ工程を丁寧に繰り返せる、清潔、立ち仕事、不規則な時間。夜型と最初の数年の収入はパンフレットに出にくいので、店で食事して観察してください。", "People who repeat a process carefully, stay clean, and stand for long irregular hours. Night work and early pay are rarely on brochures. Eat in a shop and watch."),
        ],
      },
    ],
  },
];

export const articles: Article[] = [...featureArticles, ...guides];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export type { Article, Source } from "./article-types";
