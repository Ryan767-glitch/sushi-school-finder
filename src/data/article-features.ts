import { L, type Article } from "./article-types";

const catStory = L("転身ストーリー", "Career stories");
const catDebate = L("業界のいま", "Industry now");
const catPath = L("進路の現実", "Career paths");
const catForeign = L("外国人・海外", "For foreigners");

export const featureArticles: Article[] = [
  {
    slug: "is-ten-year-apprenticeship-required",
    kind: "feature",
    title: L("「飯炊き3年、握り8年」は今も必要か", "Is a 10-year sushi apprenticeship still required?"),
    excerpt: L(
      "「一人前まで10年」は今も語られます。学校側は数ヶ月で基礎を教えられると主張し、現場は別の時計で動いています。公開情報から、何が変わって何が変わっていないかを整理します。",
      "The saying that it takes ten years to become a sushi chef is still common. Schools say fundamentals can be taught in months. Shops run on a different clock. Here is what public reporting actually shows.",
    ),
    date: "2026-08-22",
    category: catDebate,
    image: "/images/forming-nigiri.jpg",
    readMinutes: 8,
    related: ["school-then-shop-hybrid", "how-to-read-school-marketing", "three-months-vs-two-years"],
    sources: [
      { title: "FAQ〈よくある質問〉", url: "https://www.sushiacademy.co.jp/faq", publisher: "東京すしアカデミー" },
      { title: "寿司職人になるには10年必要か？", url: "https://note.com/insyokujin_ac/n/nd5f361a90dd1", publisher: "飲食人大学 note" },
      { title: "“飯炊き3年 握り8年”今は昔…数カ月で技術学べる『寿司職人の養成学校』", url: "https://www.youtube.com/watch?v=qg0iAHhpCdo", publisher: "テレビ報道（YouTube公開）" },
    ],
    sections: [
      {
        heading: L("ことわざが指していたもの", "What the proverb actually meant"),
        body: [
          L("「飯炊き3年、握り8年」は、雑務から入って飯、仕込み、握りの順に任される徒弟制の時計です。技術そのものに10年かかる、という計測結果ではありません。", "The proverb described a shop hierarchy: chores, rice, prep, then nigiri. It was not a lab result that the craft needs a decade."),
          L("東京すしアカデミーのFAQは、技術は正しい手順の反復で身につく身体技能だと説明しています。同校は数ヶ月のカリキュラムで魚を最初から最後まで一人で扱う実習を掲げています。", "Tokyo Sushi Academy's FAQ describes the skill as a body technique learned by repeating the right sequence. The school advertises months of practice in which a student breaks down a whole fish."),
        ],
      },
      {
        heading: L("学校が言っていること、店が求めていること", "What schools promise vs what shops hire for"),
        body: [
          L("飲食人大学は公式・noteで、社会人の転職や海外就職には短期アカデミーが合理的だと主張しています。一方、高級店の二番手や独立までの話は、取材を読むと学校のあとに年単位の店修行が続きます。", "Inshokujin College argues on its site and note that a short academy is rational for career changers and overseas jobs. Profiles of chefs who reach a number-two post or open a shop still show years in restaurants after school."),
          L("つまり「10年いらない」は「基礎の入り口に10年かけなくてよい」に近く、「名前の出る店の大将まで数ヶ月」ではありません。", "“You don’t need ten years” is closer to “you need not spend ten years on the doorway.” It is not “you can run a famous counter in a few months.”"),
        ],
        tip: L("学校の期間は「基礎の圧縮」、店の年数は「責任の圧縮」です。二つを足した数字で考えた方が現実に近いです。", "Treat school length as compressed basics and shop years as compressed responsibility. Add them together."),
      },
      {
        heading: L("見るべき数字", "Numbers that actually help"),
        body: [
          L("比較するなら「何ヶ月か」より総授業時間、一人で捌く魚の種類、卒業後に立つ場所です。公開情報では短期校で約200〜420時間、2年制専門学校で数千時間、という幅があります。", "Compare total hours, how many fish you break down yourself, and where graduates stand. Public figures range from about 200–420 hours at short academies to thousands at two-year colleges."),
        ],
      },
    ],
  },
  {
    slug: "career-change-at-35-sushi-yuko",
    kind: "feature",
    title: L("35歳で寿司職人へ。会社員12年のあとに店を持った話", "She became a sushi chef at 35 after 12 years in an office"),
    excerpt: L(
      "食品メーカー勤務から東京すしアカデミーへ。決断に3年、学校は2ヶ月、高級店で約5年。週2日の間借り店「鮨ゆう子」が取材で繰り返し取り上げられています。",
      "From a food manufacturer to Tokyo Sushi Academy. Three years to decide, two months of school, about five years in a high-end shop. Her twice-weekly pop-up, Sushi Yuko, has been widely profiled.",
    ),
    date: "2026-08-22",
    category: catStory,
    image: "/images/counter-real.jpg",
    readMinutes: 7,
    related: ["borrowed-counter-startups", "women-sushi-chefs", "weekend-sushi-at-38"],
    sources: [
      { title: "12年勤めた会社員の安定手放し、35歳で寿司職人に", url: "https://chanto.jp.net/articles/-/1009023", publisher: "CHANTO WEB" },
      { title: "Yahoo!ニュース転載", url: "https://news.yahoo.co.jp/articles/9bf2f3696a432922690c67ed2c755e7d47c053ab", publisher: "Yahoo!ニュース / CHANTO" },
      { title: "女性寿司職人の間借り店がオープン2カ月で予約困難との噂", url: "https://magazine.tabelog.com/articles/308459", publisher: "食べログマガジン" },
      { title: "『鮨ゆう子』女性寿司職人が自然体でいられるワケ", url: "https://woman-type.jp/wt/feature/33369/", publisher: "woman type" },
    ],
    sections: [
      {
        heading: L("公開されている経緯", "The public timeline"),
        body: [
          L("CHANTO WEB（Yahoo!ニュース転載、2026年8月）によると、鈴木裕子さんは食品メーカーに約12年勤め、35歳で寿司職人養成学校へ進みました。同記事は、決断まで約3年悩んだと伝えています。", "CHANTO WEB (also on Yahoo News, August 2026) reports that Yuko Suzuki spent about 12 years at a food manufacturer and entered a sushi academy at 35. The piece says she spent about three years deciding."),
          L("woman typeの取材では、学校は東京すしアカデミー、期間は2ヶ月。その後、恵比寿の『鮨竹半 若槻』で約5年修業し、2023年6月に『鮨ゆう子』を開業したとあります。", "woman type reports the school as Tokyo Sushi Academy for two months, then about five years at Sushi Takehan Wakatsuki in Ebisu, and the opening of Sushi Yuko in June 2023."),
        ],
      },
      {
        heading: L("学校は始まりで、店が本番", "School was the start. The shop was the job."),
        body: [
          L("この話が興味深いのは「学校2ヶ月で独立」ではない点です。公開年表は、学校 → 名店での年単位の修業 → 間借り、です。学校は入口、信用と技術の厚みは店で積んでいます。", "The story is interesting because it is not “two months of school, then a shop.” The public timeline is school, then years in a respected restaurant, then a borrowed counter."),
        ],
        tip: L("転職記事の見出しは短くなりがちです。本文の年数を足すと、学校のパンフレットとは違う時計が見えます。", "Headlines compress time. Adding the years in the body shows a different clock from a school brochure."),
      },
      {
        heading: L("週2日という開き方", "Opening two days a week"),
        body: [
          L("食べログマガジンは、浅草のビストロを間借りした週2営業で、オープン直後から予約が取りにくいと伝えています。フル店舗を最初から持たない独立の型として、後の記事でも引用されています。", "Tabelog Magazine described a twice-weekly pop-up in an Asakusa bistro that became hard to book soon after opening. Later stories still cite this as a way to open without a full-time lease."),
        ],
      },
    ],
  },
  {
    slug: "school-then-shop-hybrid",
    kind: "feature",
    title: L("学校のあとに店で何年か。いちばん多い現実ルート", "School, then years in a shop: the most common real path"),
    excerpt: L(
      "取材に出る成功例の多くは、短期校のあとに店で働いています。学校か修行かの二択ではなく、順番の問題です。",
      "Most public success stories put a shop after a short school. It is not school versus apprenticeship. It is order.",
    ),
    date: "2026-08-22",
    category: catPath,
    image: "/images/classroom.jpg",
    readMinutes: 6,
    related: ["is-ten-year-apprenticeship-required", "career-change-at-35-sushi-yuko", "mei-no-after-academy"],
    sources: [
      { title: "寿司職人になるには｜修行ルート・学校・資格", url: "https://careergarden.jp/sushishokunin/naruniha/", publisher: "キャリアガーデン" },
      { title: "CHANTO WEB 鈴木裕子さん取材", url: "https://chanto.jp.net/articles/-/1009023", publisher: "CHANTO WEB" },
      { title: "読売新聞 幸後綿衣さん", url: "https://www.yomiuri.co.jp/otekomachi/20240416-OYT8T50050/", publisher: "読売新聞" },
    ],
    sections: [
      {
        heading: L("三つの入口", "Three doors"),
        body: [
          L("キャリアガーデンは入口を、個人店への弟子入り、チェーンのOJT、学校のあとに現場、の三つに整理しています。必須の国家資格はない、とも明記しています。", "Career Garden lists three doors: apprenticeship in a small shop, chain-store OJT, and school then a kitchen. It also notes there is no required national license."),
        ],
      },
      {
        heading: L("記事になる人の共通点", "What the people in magazines share"),
        body: [
          L("35歳転身の鈴木さんも、大学からアカデミーへ進んだ幸後綿衣さんも、公開プロフィールでは学校のあとに名店での年数があります。学校が不要だった話ではありません。学校だけで完結した話でもありません。", "Both Yuko Suzuki and Mei Kogo have school plus years in known restaurants on their public profiles. Neither story says school was useless. Neither says school was the whole career."),
        ],
        tip: L("体験レッスンでは「卒業後に何ヶ月でカウンターに立つか」より、「卒業生が最初の1年で何をしているか」を聞いてください。", "At a trial class, ask what graduates do in year one, not only how fast they reach the counter."),
      },
    ],
  },
  {
    slug: "women-sushi-chefs",
    kind: "feature",
    title: L("女性の寿司職人はまだ少ない。それでも記事になる理由", "Women sushi chefs are still rare. That is why the stories travel."),
    excerpt: L(
      "店主の肌感として「1割に満たない」と語られた取材があります。希少性だけで選ぶ必要はありませんが、進路の現実を見る材料にはなります。",
      "One chef has said women are still under 10 percent in her experience. Rarity is not a reason to choose the job. It is a reason the media keeps returning.",
    ),
    date: "2026-08-22",
    category: catStory,
    image: "/images/portrait-woman.jpg",
    readMinutes: 6,
    related: ["career-change-at-35-sushi-yuko", "mei-no-after-academy", "michelin-in-eleven-months"],
    sources: [
      { title: "『鮨ゆう子』女性寿司職人が自然体でいられるワケ", url: "https://woman-type.jp/wt/feature/33369/", publisher: "woman type" },
      { title: "寿司職人・幸後綿衣さんがこの道を目指した理由", url: "https://www.fujingaho.jp/gourmet/chef/a46300426/mei-kougo-20230117/", publisher: "婦人画報" },
      { title: "女性鮨職人、厳しい道の先にあったもの", url: "https://forbesjapan.com/articles/detail/85449", publisher: "Forbes JAPAN" },
    ],
    sections: [
      {
        heading: L("数字は公式統計ではない", "The figure is not an official census"),
        body: [
          L("woman typeの記事で、鮨ゆう子の店主は「女性の寿司職人は全体の1割にも満たない」という肌感を語っています。官庁の全数調査ではありません。現場の実感として読むべき数字です。", "In woman type, the owner of Sushi Yuko said women chefs still feel like less than 10 percent. That is not a government census. Treat it as shop-floor sense."),
        ],
      },
      {
        heading: L("希少性とメディア", "Rarity and the press"),
        body: [
          L("婦人画報やForbes JAPANが幸後綿衣さんを取り上げるとき、技術だけでなく「まだ少ない」ことが見出しに入ります。本人のインタビューでは、少ない世界だからこそ可能性がある、という動機も語られています。", "Fujingaho and Forbes JAPAN cover Mei Kogo for the craft and for the fact that women remain few. In interviews she has also said the scarcity itself looked like an opening."),
        ],
        tip: L("学校選びでは「女性がいるか」より、更衣室・深夜・体力・ハラスメントへの対応を具体的に聞いた方が役立ちます。", "When touring a school, ask about lockers, late hours, stamina, and harassment policy. That is more useful than a headcount."),
      },
    ],
  },
  {
    slug: "borrowed-counter-startups",
    kind: "feature",
    title: L("間借り・週2日・キッチンカー。独立の形が変わっている", "Borrowed counters, two-day weeks, kitchen cars"),
    excerpt: L(
      "最初から路面店を持たない独立が、取材で目立つようになりました。開業資金と失敗の大きさを小さくする型です。",
      "Opening without a full street shop shows up more often in reporting. It shrinks the first bet.",
    ),
    date: "2026-08-22",
    category: catPath,
    image: "/images/interior.jpg",
    readMinutes: 6,
    related: ["career-change-at-35-sushi-yuko", "fifty-and-a-three-day-bar", "how-to-read-school-marketing"],
    sources: [
      { title: "女性寿司職人の間借り店がオープン2カ月で予約困難との噂", url: "https://magazine.tabelog.com/articles/308459", publisher: "食べログマガジン" },
      { title: "2024年すし業界10大ニュース", url: "https://www.sushiacademy.co.jp/archives", publisher: "東京すしアカデミー ブログ" },
    ],
    sections: [
      {
        heading: L("なぜ間借りが記事になるか", "Why borrowed space gets coverage"),
        body: [
          L("食べログマガジンは、鮨ゆう子を「ビストロの間借り、週2日」と紹介し、オープン2ヶ月で予約が難しいと書きました。家賃と人件費を抑えた独立は、読者の「自分にもできるかも」に接続します。", "Tabelog Magazine described Sushi Yuko as a twice-weekly pop-up in a bistro and hard to book within two months. A cheaper first shop is easier for readers to imagine for themselves."),
          L("東京すしアカデミーの2024年業界まとめでも、間借り・出張・キッチンカーがトピックの一つに入っています。学校側も、独立の形が一つではないと認識しています。", "Tokyo Sushi Academy’s 2024 industry roundup listed borrowed counters, pop-ups, and kitchen cars as a trend. Schools now treat “opening a shop” as more than one model."),
        ],
        tip: L("開業支援のある学校でも、最初の物件が路面店前提とは限りません。卒業生の独立例を「店舗形態」まで聞いてください。", "Even schools with startup support may not assume a street-level lease. Ask what form graduates actually open."),
      },
    ],
  },
  {
    slug: "mei-no-after-academy",
    kind: "feature",
    title: L("アカデミーのあと10年。幸後綿衣と『鮨めい乃』", "Ten years after academy: Mei Kogo and Sushi Mei-no"),
    excerpt: L(
      "大学卒業後に東京すしアカデミーへ。すし匠、西麻布拓、鮨あらい、フランス、ソムリエ。2023年に麻布十番で独立し、食べログアワードにも名前が出ました。",
      "After university she entered Tokyo Sushi Academy, then Sushi Sho, Nishi-Azabu Taku, Sushi Arai, France, and a sommelier credential. She opened in Azabu-Juban in 2023 and later appeared in Tabelog Awards coverage.",
    ),
    date: "2026-08-22",
    category: catStory,
    image: "/images/nigiri-platter.jpg",
    readMinutes: 8,
    related: ["school-then-shop-hybrid", "women-sushi-chefs", "is-ten-year-apprenticeship-required"],
    sources: [
      { title: "寿司職人・幸後綿衣さんがこの道を目指した理由", url: "https://www.fujingaho.jp/gourmet/chef/a46300426/mei-kougo-20230117/", publisher: "婦人画報" },
      { title: "すしとワインの二刀流でお客様に幸せな時間を", url: "https://www.yomiuri.co.jp/otekomachi/20240416-OYT8T50050/", publisher: "読売新聞" },
      { title: "情熱大陸：鮨職人／幸後綿衣", url: "https://mainichi.jp/articles/20240105/org/00m/200/016000c", publisher: "毎日新聞" },
      { title: "The Tabelog Award 2025 Best New Entry", url: "https://news.livedoor.com/article/detail/28242522/", publisher: "食べログアワード関連報道" },
    ],
    sections: [
      {
        heading: L("公開プロフィールの骨格", "The public skeleton"),
        body: [
          L("読売新聞は、上智大学卒業後に東京すしアカデミーで基礎を学び、すし匠・西麻布拓・銀座の鮨あらいで計約10年、2023年11月に独立と書いています。毎日新聞の情熱大陸紹介も同趣旨です。", "The Yomiuri Shimbun reports Sophia University, Tokyo Sushi Academy, then about ten years at Sushi Sho, Nishi-Azabu Taku, and Sushi Arai in Ginza, with independence in November 2023. Mainichi’s coverage of the TV documentary Jounetsu Tairiku matches that outline."),
          L("婦人画報は、父から寿司職人を勧められたこと、海外でも通用する仕事として寿司を選んだことを本人の言葉で伝えています。", "Fujingaho quotes her father suggesting the job, and her sense that sushi could travel internationally."),
        ],
      },
      {
        heading: L("学校は短く、修業は長い", "Short school, long kitchen"),
        body: [
          L("Forbes JAPANとの対談では、三軒目の店で個室を任されるまで7、8年かかった、と語っています。アカデミーは出発点で、責任あるカウンターは別の年数です。", "In a Forbes JAPAN conversation she said it took seven or eight years before she was trusted with a private room in her third restaurant. The academy was a start. A serious counter was another clock."),
        ],
        tip: L("「学校出身の有名店主」を探すときは、学校名のあとに何年の店名が続くかを数えてください。", "When a famous owner “went to school,” count the restaurant years after the school name."),
      },
    ],
  },
  {
    slug: "weekend-sushi-at-38",
    kind: "feature",
    title: L("38歳会社員が日曜だけ寿司を学ぶ。仕事がむしろ整った話", "A 38-year-old office worker who studies sushi on Sundays"),
    excerpt: L(
      "雑誌UOMOの企画で、会社員の田村峻哉さんが週末コースに通う理由を語っています。独立前夜の話ではなく、学びが日常を引き締めた話です。",
      "In a UOMO feature, office worker Shunya Tamura explained why he joined a weekend course. It is not a pre-opening story. It is about study tightening ordinary days.",
    ),
    date: "2026-08-22",
    category: catStory,
    image: "/images/rice-hands.jpg",
    readMinutes: 5,
    related: ["career-change-at-35-sushi-yuko", "how-to-read-school-marketing", "sushi-school-types"],
    sources: [
      { title: "「寿司を握ること」をはじめてみたら、仕事も休みも輝きを増した", url: "https://www.webuomo.jp/life/topic/1XkpqA/", publisher: "UOMO" },
      { title: "受講生の田村峻哉さんが雑誌『UOMO』で紹介されました", url: "https://www.sushiacademy.co.jp/archives/c536", publisher: "東京すしアカデミー" },
    ],
    sections: [
      {
        heading: L("公開されている動機", "The stated motive"),
        body: [
          L("UOMO（2025年3月）によると、田村さんはテレビで幸後綿衣さんの仕事を見て「自分も握れるようになりたい」と思い、東京すしアカデミーの週末コース（毎週日曜、1年）に入ったとあります。当時38歳、会社員です。", "UOMO (March 2025) says Tamura watched Mei Kogo on television, wanted to learn nigiri, and joined Tokyo Sushi Academy’s year-long Sunday course. He was 38 and employed."),
          L("恩返し、料理、普段会わない人と会う、という動機が同記事に並んでいます。転職の決断記事ではありません。", "The piece lists giving back, cooking, and meeting people outside daily life. It is not a resignation story."),
        ],
        tip: L("短期の全日コースだけが学校の使い方ではありません。仕事を辞めずに適性を見る週末型は、公開コース表にも実在します。", "Full-time months are not the only use of school. Weekend tracks exist on public course lists for people who keep their jobs."),
      },
    ],
  },
  {
    slug: "michelin-in-eleven-months",
    kind: "feature",
    title: L("開店11ヶ月でミシュラン掲載。『鮨千陽』が示した実験", "Michelin-listed in 11 months: the Sushi Chiharu experiment"),
    excerpt: L(
      "3ヶ月の養成校の卒業生と在校生だけで店を回し、開店から11ヶ月でガイドに載った、と運営会社が発表しています。読むときは「ビブグルマン」の意味と、学校の宣伝であることもセットです。",
      "The operator says a shop staffed only by a three-month school’s students and alumni reached a Michelin guide 11 months after opening. Read the Bib Gourmand label and the fact that the school is also the messenger.",
    ),
    date: "2026-08-22",
    category: catDebate,
    image: "/images/nigiri-real.jpg",
    readMinutes: 7,
    related: ["is-ten-year-apprenticeship-required", "how-to-read-school-marketing", "teenage-chef-at-michelin-counter"],
    sources: [
      { title: "開店からわずか11ヶ月！「鮨 千陽」がミシュランガイドに掲載", url: "https://prtimes.jp/main/html/rd/p/000000007.000013181.html", publisher: "PR TIMES / RETOWN" },
      { title: "オープン11ヵ月でミシュランに掲載されたノウハウで学校運営", url: "https://news.nissyoku.co.jp/restaurant/goushi20220816095233295", publisher: "日本食糧新聞" },
      { title: "たった３か月でデビュー!? 飲食人大学に、てつじが潜入", url: "https://www.mbs.jp/mbs-column/mint/archive/2020/08/17/020927.shtml", publisher: "MBSコラム" },
    ],
    sections: [
      {
        heading: L("発表されている事実", "What was announced"),
        body: [
          L("運営会社RETOWN HUMANのPR TIMES（2015年）は、大阪・福島区の『鮨千陽』が開店11ヶ月で『ミシュランガイド京都・大阪2016』のビブグルマンに掲載されたと発表しています。スタッフは飲食人大学の卒業生と生徒、とあります。", "In a 2015 PR TIMES release, RETOWN HUMAN said Sushi Chiharu in Fukushima-ku, Osaka, was listed as a Bib Gourmand in Michelin Kyoto/Osaka 2016, 11 months after opening. Staff were Inshokujin College alumni and students."),
          L("日本食糧新聞は後年、最初から掲載を狙った設計だった、という運営者の回顧を伝えています。星ではなく、コストパフォーマンス部門です。", "Nihon Shokuryo Shimbun later reported that the operator designed the shop aiming for a listing. It was Bib Gourmand, not a star."),
        ],
      },
      {
        heading: L("実験として読む", "Read it as an experiment"),
        body: [
          L("「3ヶ月でミシュラン」は正確ではありません。正確には、3ヶ月で基礎を習った集団が、店を設計して11ヶ月後に特定のガイド枠へ入った、です。再現性は学校の宣伝だけでは判断できません。", "“Michelin in three months” is not accurate. A group trained for three months ran a designed shop and entered a specific guide category 11 months later. A press release cannot prove it is repeatable."),
        ],
        tip: L("ガイド掲載は味の証明書ではありますが、学校の入学案内そのものではありません。", "A guide listing is evidence about a restaurant, not a brochure for a school."),
      },
    ],
  },
  {
    slug: "teenage-chef-at-michelin-counter",
    kind: "feature",
    title: L("10代でミシュラン掲載店のカウンターへ。発表された「最年少」の話", "A teenager at a Michelin-listed counter, according to the school"),
    excerpt: L(
      "飲食人大学側は、高校卒業後すぐ入学し、19歳で『鮨千陽』のカウンターに立った女性職人がいると発表しています。例外を平均にしないための読み方です。",
      "The school announced a woman who enrolled right after high school and stood at Sushi Chiharu’s counter at 19. Here is how to read an exception without turning it into an average.",
    ),
    date: "2026-08-22",
    category: catStory,
    image: "/images/cutting-tuna.jpg",
    readMinutes: 5,
    related: ["michelin-in-eleven-months", "women-sushi-chefs", "how-to-read-school-marketing"],
    sources: [
      { title: "業界の最年少記録！？１０代の女性寿司職人がミシュランガイド掲載店で誕生", url: "https://www.nikkan.co.jp/releases/view/4068", publisher: "日刊工業新聞 電子版（企業リリース）" },
    ],
    sections: [
      {
        heading: L("一次情報は企業リリース", "The primary source is a company release"),
        body: [
          L("日刊工業新聞電子版に載った企業リリースによると、高井虹歩さんは18歳で寿司を始め、19歳でミシュラン掲載店『鮨千陽』のカウンターに立った、と運営会社が発表しています。第三者の長い追跡取材ではなく、学校側の発表です。", "A company release republished by Nikkan Kogyo Shimbun says Koharu Takai began sushi at 18 and stood at Michelin-listed Sushi Chiharu at 19. That is the operator speaking, not a long independent profile."),
        ],
        tip: L("最年少・最速の話は、入学後の平均年収や就職先分布より先に目に入ります。平均は学校に数字を求めてください。", "Youngest and fastest stories appear before average outcomes. Ask the school for the middle of the class, not the edge."),
      },
    ],
  },
  {
    slug: "overseas-jobs-and-the-fine-print",
    kind: "feature",
    title: L("海外で寿司職人は本当に高年収か。宣伝と現場のあいだ", "Do sushi chefs abroad really earn more? Marketing vs the fine print"),
    excerpt: L(
      "学校やメディアは海外年収の数字を出します。ビザ、英語、現地の雇用契約、滞在の長さは別問題です。公開されている注意点を集めました。",
      "Schools and media quote overseas salaries. Visas, English, contracts, and how long you can stay are separate problems. Here are the caveats that are already public.",
    ),
    date: "2026-08-22",
    category: catForeign,
    image: "/images/hero-nigiri.jpg",
    readMinutes: 7,
    related: ["english-schools-for-foreigners", "is-ten-year-apprenticeship-required", "working-holiday-and-sushi"],
    sources: [
      { title: "寿司職人になるには10年必要か？", url: "https://note.com/insyokujin_ac/n/nd5f361a90dd1", publisher: "飲食人大学 note" },
      { title: "ワーホリで30歳までに海外へ", url: "https://www.sushiacademy.co.jp/__/tags/t03", publisher: "東京すしアカデミー" },
      { title: "業界で話題の『飲食人大学』３カ月修行の寿司職人が海外へ挑戦", url: "https://prtimes.jp/main/html/rd/p/000000035.000013181.html", publisher: "PR TIMES" },
    ],
    sections: [
      {
        heading: L("よく見る数字", "The numbers you keep seeing"),
        body: [
          L("学校の発信では、海外では寿司職人が不足し、日本より高い報酬になりうる、と繰り返し書かれます。東京すしアカデミーは就労ビザが取りやすい職種の一つ、と説明しています。", "School pages repeat that sushi chefs are scarce abroad and can be paid more than in Japan. Tokyo Sushi Academy describes it as a job for which work visas can be comparatively available."),
          L("飲食人大学の卒業生店がシンガポールへ出た、という2017年の発表もあります。これは「誰でも高年収」ではなく、特定の店舗プロジェクトです。", "A 2017 release said an Inshokujin-linked restaurant opened in Singapore. That is a specific shop project, not a salary for every graduate."),
        ],
      },
      {
        heading: L("欠けやすい情報", "What is usually missing"),
        body: [
          L("英語力、現地の労働時間、チップ文化、滞在資格の更新、家族帯同は、年収の見出しの外にあります。比較サイトとして言えるのは、海外就職支援の有無は学校ページで確認し、数字は公式の求人票で確認する、という手順だけです。", "English, hours, tipping, visa renewal, and family visas sit outside the salary headline. The only honest comparison-site advice is: check whether a school lists overseas support, then verify numbers on an actual job offer."),
        ],
      },
    ],
  },
  {
    slug: "english-schools-for-foreigners",
    kind: "feature",
    title: L("英語で学べる寿司の学校。外国人が最初に見るべき点", "Sushi school in English: what foreigners should check first"),
    excerpt: L(
      "東京すしアカデミーは英語の相談窓口と国際コースを公式に出しています。観光の握り体験と、職人コースは別物です。",
      "Tokyo Sushi Academy publicly offers English consultations and an international chef course. A tourist rolling class is not the same product.",
    ),
    date: "2026-08-22",
    category: catForeign,
    image: "/images/schools/tokyo-sushi-academy.jpg",
    readMinutes: 6,
    related: ["overseas-jobs-and-the-fine-print", "foreigners-who-train-in-tokyo", "how-to-read-school-marketing"],
    sources: [
      { title: "WELCOME TO TOKYO SUSHI ACADEMY", url: "https://www.sushischool.jp/", publisher: "Tokyo Sushi Academy (English)" },
      { title: "Sushi School in Tokyo | Ginza Onodera Chefs", url: "https://www.kudan-japanese-school.com/en/sushi_course.php", publisher: "Kudan Institute / Onodera" },
    ],
    sections: [
      {
        heading: L("公式に英語を出している例", "Schools that actually publish English"),
        body: [
          L("東京すしアカデミー英語サイトは、英語でのGoogle Meet相談やWhatsApp、インターナショナルコースを案内しています。創業以来、英語でプロ向けに教えてきたと自己紹介しています。", "The English Tokyo Sushi Academy site advertises Google Meet consultations, WhatsApp, and an international course. It presents itself as teaching professionals in English since founding."),
          L("九段日本語学校と鮨 銀座おのでらは、日本語レッスンと寿司実習を組み合わせた1ヶ月プログラムを英語ページで出しています。語学学校＋寿司であり、2年の専門学校とは目的が違います。", "Kudan Japanese Institute and Sushi Ginza Onodera publish a one-month mix of language class and sushi practice. That is language school plus sushi, not a two-year culinary college."),
        ],
        tip: L("「English OK」と「授業が英語」は違います。シラバスの言語、講師、査証の書類、宿泊まで英語で出るか確認してください。", "“English OK” is not “classes in English.” Check the language of the syllabus, teachers, visa paperwork, and housing."),
      },
    ],
  },
  {
    slug: "three-months-vs-two-years",
    kind: "feature",
    title: L("3ヶ月か、2年か。調理師免許が分岐点になる", "Three months or two years? The cook’s license is the fork"),
    excerpt: L(
      "短期校は速さ、専門学校は免許と時間。飲食人大学の比較記事も、免許が欲しい人には2年制、急ぐ社会人には短期、と分けています。",
      "Short schools sell speed. Colleges sell a license and time. Even Inshokujin’s own comparison splits the market that way.",
    ),
    date: "2026-08-22",
    category: catPath,
    image: "/images/classroom.jpg",
    readMinutes: 6,
    related: ["is-ten-year-apprenticeship-required", "no-license-required", "tuition-guide"],
    sources: [
      { title: "【2025年版】寿司専門学校の真実", url: "https://insyokujin.ac/recommend/5985/", publisher: "飲食人大学" },
      { title: "FAQ〈よくある質問〉", url: "https://www.sushiacademy.co.jp/faq", publisher: "東京すしアカデミー" },
    ],
    sections: [
      {
        heading: L("免許が付く学校、付かない学校", "License vs no license"),
        body: [
          L("飲食人大学の解説記事は、認可専門学校は1〜3年で調理師免許や専門士が取りやすい、短期アカデミーは技術特化で免許は原則つかない、と対比しています。東京すしアカデミーのFAQも、専修学校ではないため卒業だけでは調理師免許は出ない、と書いています。", "Inshokujin’s explainer contrasts licensed colleges (one to three years, cook’s license / diploma) with short academies that focus on technique and generally do not grant the license. Tokyo Sushi Academy’s FAQ states it is not a senmon gakko, so graduation alone does not confer the license."),
        ],
        tip: L("国内のホテルや給食、一部の就職票は免許を見ます。海外の寿司店は技術と英語を見ることが多い、というのが公開されている大きな分岐です。", "Domestic hotels and some job ads look at the license. Overseas sushi bars more often look at skill and English. That split is already public."),
      },
    ],
  },
  {
    slug: "no-license-required",
    kind: "feature",
    title: L("寿司職人に必須資格はない。それでも免許が効く場面", "No license is required. A license still helps in some rooms"),
    excerpt: L(
      "法律上、寿司を握る国家資格はありません。独立時の食品衛生責任者、ふぐ、採用票の「調理師」欄は別です。",
      "Japanese law does not require a national license to make sushi. A food-hygiene manager, a pufferfish permit, and job ads that list “licensed cook” are separate issues.",
    ),
    date: "2026-08-22",
    category: catPath,
    image: "/images/cutting-tuna.jpg",
    readMinutes: 5,
    related: ["three-months-vs-two-years", "how-to-become-sushi-chef", "tuition-guide"],
    sources: [
      { title: "寿司職人に必要な資格は？", url: "https://sushiworks.jp/career/qualification/", publisher: "SUSHI WORKS" },
      { title: "寿司職人になるには｜キャリアガーデン", url: "https://careergarden.jp/sushishokunin/naruniha/", publisher: "キャリアガーデン" },
    ],
    sections: [
      {
        heading: L("必須ではない、役に立つ", "Not required, sometimes useful"),
        body: [
          L("SUSHI WORKSは、寿司職人に必須の国家資格はないとしたうえで、調理師免許、食品衛生責任者、ふぐ調理師を「場面によって必要」と整理しています。キャリアガーデンも必須資格はないと書いています。", "SUSHI WORKS states there is no required national license, then lists the cook’s license, food-hygiene manager certificate, and pufferfish permit as situationally needed. Career Garden also says no license is mandatory."),
        ],
        tip: L("学校パンフレットの「資格」欄は、国家資格・民間認定・修了証が混ざることがあります。名前を分解して聞いてください。", "A school’s “qualification” box may mix national licenses, private badges, and certificates of completion. Ask which is which."),
      },
    ],
  },
  {
    slug: "consultant-who-changed-careers",
    kind: "feature",
    title: L("コンサルを辞めて寿司へ。公開インタビューで語られた分岐", "Leaving consulting for sushi, in a public interview"),
    excerpt: L(
      "YouTube番組で、アクセンチュア勤務後に寿司店へ移った経緯が本人から語られています。年収の数字は番組側の見出しです。原典で確認してください。",
      "In a YouTube interview, a former Accenture consultant describes moving into a sushi restaurant. Salary figures are the show’s headline. Check the original.",
    ),
    date: "2026-08-22",
    category: catStory,
    image: "/images/portrait-chef-m30.jpg",
    readMinutes: 5,
    related: ["career-change-at-35-sushi-yuko", "school-then-shop-hybrid", "is-ten-year-apprenticeship-required"],
    sources: [
      { title: "【辞めアクセンチュア】年収約900万から寿司職人に転身した理由", url: "https://www.youtube.com/watch?v=H12_euXIpLg", publisher: "YouTube / Pivotter" },
    ],
    sections: [
      {
        heading: L("本人が語っている範囲", "What he says on camera"),
        body: [
          L("公開されている動画説明と字幕によると、話し手は山梨出身、慶應義塾大学湘南藤沢キャンパスを経てアクセンチュアに約4年半勤め、2023年初めから寿司店で働き始めたと述べています。大学時代から寿司職人に関心があった、とも語っています。", "According to the public description and captions, the speaker is from Yamanashi, attended Keio SFC, spent about four and a half years at Accenture, and began work at a sushi restaurant in early 2023. He also says the interest started in university."),
          L("番組タイトルの年収は番組側の要約です。当サイトは給与明細を確認していません。転身の動機として「世界で戦える仕事」を寿司に見た、という語りが中心です。", "The salary in the title is the show’s summary. We have not seen a payslip. The core of the talk is seeing sushi as work that can travel."),
        ],
        tip: L("高年収からの転身記事は再生されやすいです。同じ動画の中の労働時間や初期給与も、可能ならメモしてください。", "Pay-cut stories travel. If the same video mentions hours and starting pay, write those down too."),
      },
    ],
  },
  {
    slug: "fifty-and-a-three-day-bar",
    kind: "feature",
    title: L("50歳から週3日の寿司屋。長く続けるための独立", "A sushi bar three days a week, starting around 50"),
    excerpt: L(
      "東京すしアカデミーの紹介記事は、早期退職後に自宅兼店舗を開いた上田厚太郎さんの例を伝えています。フルタイムの修行物語ではない働き方です。",
      "A Tokyo Sushi Academy post describes Kotaro Ueda opening a home shop after early retirement. It is not a full-time apprenticeship tale.",
    ),
    date: "2026-08-22",
    category: catStory,
    image: "/images/interior.jpg",
    readMinutes: 5,
    related: ["borrowed-counter-startups", "weekend-sushi-at-38", "career-change-at-35-sushi-yuko"],
    sources: [
      { title: "ワンオペ、週3日だけの鮨屋。50歳から「無理なく、自分らしく、長く続ける」働き方", url: "https://www.sushiacademy.co.jp/archives", publisher: "東京すしアカデミー ブログ" },
    ],
    sections: [
      {
        heading: L("学校ブログが伝えていること", "What the school blog says"),
        body: [
          L("東京すしアカデミーは、51歳の上田さんが長年の仕事を早期退職し、自宅兼店舗の寿司屋を開いたと紹介しています。見出しはワンオペ、週3日です。詳細な収支は記事見出しからは分かりません。", "Tokyo Sushi Academy introduced 51-year-old Kotaro Ueda as someone who took early retirement and opened a sushi shop attached to his home. The headline is one-person operation, three days a week. The post does not give a full P&L in the listing blurb."),
        ],
        tip: L("セカンドキャリアは「若くして海外」と同じくらい、学校の顧客層です。夜間・週末・短期のコース表は、その需要に合わせて作られています。", "Second careers are as real a customer as “young and overseas.” Night, weekend, and short courses exist for that demand."),
      },
    ],
  },
  {
    slug: "engineer-to-toyama-sushi",
    kind: "feature",
    title: L("元エンジニアが富山の寿司店へ。地方と「すし県」", "An engineer who moved to a Toyama sushi shop"),
    excerpt: L(
      "群馬で機械エンジニアをしていた逸見祐輔さんが富山の店で働き始めた、と養成校が紹介しています。都市の学校だけが選択肢ではありません。",
      "A school post says Yusuke Henmi, formerly a mechanical engineer in Gunma, started at a sushi shop in Toyama. City schools are not the only door.",
    ),
    date: "2026-08-22",
    category: catStory,
    image: "/images/schools/hokuriku-sushi-academy.jpg",
    readMinutes: 5,
    related: ["english-schools-for-foreigners", "school-then-shop-hybrid", "working-holiday-and-sushi"],
    sources: [
      { title: "群馬から富山へ移住。元エンジニアが寿司職人としての人生をスタート", url: "https://www.sushiacademy.co.jp/archives", publisher: "東京すしアカデミー ブログ" },
      { title: "北陸すしアカデミー", url: "https://hokuriku-sushiacademy.jp/", publisher: "北陸すしアカデミー" },
    ],
    sections: [
      {
        heading: L("地方の学校と県のブランド", "Regional schools and prefecture brands"),
        body: [
          L("養成校のブログは、富山県が「寿司と言えば、富山」と打ち出している時期に、元エンジニアが現地の店で働き始めたと書いています。北陸すしアカデミーは東京すしアカデミー連携校として2026年に開校を案内しています。", "The academy blog places a former engineer in a Toyama shop during the prefecture’s “sushi means Toyama” branding. Hokuriku Sushi Academy, linked with Tokyo Sushi Academy, announced 2026 courses."),
        ],
        tip: L("東京に出る以外に、魚の産地側で働く、という進路も公開例があります。", "Public examples now include working on the fish-producing side of the country, not only moving to Tokyo."),
      },
    ],
  },
  {
    slug: "working-holiday-and-sushi",
    kind: "feature",
    title: L("ワーホリと寿司。30歳までの海外を学校がどう語るか", "Working holiday and sushi: how schools talk about leaving by 30"),
    excerpt: L(
      "東京すしアカデミーは、ワーキングホリデーと寿司技能の組み合わせを公式に案内しています。年齢制限のある制度なので、学校期間の取り方が論点になります。",
      "Tokyo Sushi Academy publicly pairs working-holiday visas with sushi skill. Because the visa is age-capped, when you attend school matters.",
    ),
    date: "2026-08-22",
    category: catForeign,
    image: "/images/hero-real.jpg",
    readMinutes: 5,
    related: ["overseas-jobs-and-the-fine-print", "english-schools-for-foreigners", "is-ten-year-apprenticeship-required"],
    sources: [
      { title: "ワーホリで30歳までに海外へ！未経験から寿司職人で海外移住", url: "https://www.sushiacademy.co.jp/__/tags/t03", publisher: "東京すしアカデミー" },
    ],
    sections: [
      {
        heading: L("制度の時計と学校の時計", "Visa clock vs school clock"),
        body: [
          L("同校の特集ページは、寿司職人は現地の雇用を奪いにくい技能職としてビザが通りやすい、と説明しています。ワーホリは国によって年齢上限があります。2年の専門学校に通うと、出国の期限に間に合わない人が出ます。", "The school’s feature page argues sushi is a skilled job that does not easily displace local workers, so visas can be relatively available. Working-holiday schemes have age caps. A two-year college can push some people past the deadline."),
        ],
        tip: L("国ごとの年齢と、学校の開講月を先に重ねてください。技術の比較は二番目です。", "Overlay the country’s age cap and the school’s start month first. Compare technique second."),
      },
    ],
  },
  {
    slug: "drama-and-real-schools",
    kind: "feature",
    title: L("ドラマの舞台になった養成学校。フィクションと入学案内の境", "When a TV drama uses a real sushi school"),
    excerpt: L(
      "CHANTOの記事は、鈴木さんの通った学校をTBSドラマ『時すでにおスシ!?』の舞台にもなった養成学校と紹介しています。ドラマ視聴後の検索は増えます。入学条件はドラマでは決まりません。",
      "CHANTO notes that Suzuki’s school was also used in a TBS drama. Search spikes after TV. Admission rules do not come from the script.",
    ),
    date: "2026-08-22",
    category: catDebate,
    image: "/images/counter-real.jpg",
    readMinutes: 4,
    related: ["career-change-at-35-sushi-yuko", "how-to-read-school-marketing", "how-to-become-sushi-chef"],
    sources: [
      { title: "12年勤めた会社員の安定手放し、35歳で寿司職人に", url: "https://chanto.jp.net/articles/-/1009023", publisher: "CHANTO WEB" },
    ],
    sections: [
      {
        heading: L("視聴と進路は別", "Watching is not enrollment"),
        body: [
          L("テレビは学校名を一気に知らせます。比較するときは、ドラマの感動より、総時間、学費、卒業後の就職先の公開例に戻ってください。", "Television can make a school famous in a week. When you compare, return to hours, tuition, and published graduate paths, not the plot."),
        ],
      },
    ],
  },
  {
    slug: "how-to-read-school-marketing",
    kind: "feature",
    title: L("「3ヶ月でプロ」の読み方。宣伝を分解する", "How to read “pro in three months”"),
    excerpt: L(
      "学校の言葉は短く、現場の年数は長い。公開されている成功例を分解すると、ほとんどが学校＋店です。",
      "School copy is short. Kitchen years are long. Almost every public success story is school plus a shop.",
    ),
    date: "2026-08-22",
    category: catDebate,
    image: "/images/forming-nigiri.jpg",
    readMinutes: 6,
    related: ["is-ten-year-apprenticeship-required", "michelin-in-eleven-months", "three-months-vs-two-years"],
    sources: [
      { title: "FAQ〈よくある質問〉", url: "https://www.sushiacademy.co.jp/faq", publisher: "東京すしアカデミー" },
      { title: "寿司職人になるには10年必要か？", url: "https://note.com/insyokujin_ac/n/nd5f361a90dd1", publisher: "飲食人大学 note" },
      { title: "CHANTO WEB 鈴木裕子さん取材", url: "https://chanto.jp.net/articles/-/1009023", publisher: "CHANTO WEB" },
    ],
    sections: [
      {
        heading: L("短い言葉の中身", "What the short phrase contains"),
        body: [
          L("「プロ」が、見習いとして雇われることなのか、カウンターで一貫を任されることなのか、店を持って予約が埋まることなのかで、必要な年数は全く違います。学校は前者までを授業時間で語り、メディアは後者の写真を使いがちです。", "“Pro” can mean hired as a junior, trusted with nigiri, or booked solid in your own shop. Those clocks are different. Schools talk about the first in classroom hours. Media often show photos of the last."),
        ],
        tip: L("体験で聞く一文。「御校の卒業生が、最初の職場で最初の半年間に任される仕事は何ですか。」", "One question for a trial visit: “What work are your graduates trusted with in their first six months on the job?”"),
      },
    ],
  },
  {
    slug: "foreigners-who-train-in-tokyo",
    kind: "feature",
    title: L("東京まで来る外国人受講生。観光クラスとの線引き", "Foreigners who fly to Tokyo to train, not just to roll"),
    excerpt: L(
      "英語サイトやTripAdvisorでは、プロ向け英語授業を求めて来日する声があります。2時間の体験と、数週間のコースは料金も査証も違います。",
      "English sites and TripAdvisor reviews describe people who come to Japan for professional classes. A two-hour tourist roll and a multi-week course differ in price and visa.",
    ),
    date: "2026-08-22",
    category: catForeign,
    image: "/images/nigiri-color.jpg",
    readMinutes: 5,
    related: ["english-schools-for-foreigners", "overseas-jobs-and-the-fine-print", "working-holiday-and-sushi"],
    sources: [
      { title: "WELCOME TO TOKYO SUSHI ACADEMY", url: "https://www.sushischool.jp/", publisher: "Tokyo Sushi Academy" },
      { title: "Tokyo Sushi Academy reviews", url: "https://www.tripadvisor.com/Attraction_Review-g14129610-d8779915-Reviews-Tokyo_Sushi_Academy-Tsukiji_Chuo_Tokyo_Tokyo_Prefecture_Kanto.html", publisher: "Tripadvisor" },
    ],
    sections: [
      {
        heading: L("来日の目的を先に書く", "Write the purpose first"),
        body: [
          L("英語公式は、ナイフの扱いから魚の下処理まで、プロ向けに教えると謳っています。Tripadvisor上でも「英語で教えるプロの学校」という言及があります。一方、観光客向けの握り体験は全国にあり、金額も時間も桁が違います。", "The English official site says it teaches professionals from knife work to fish prep. Tripadvisor reviews also call it a professional school that teaches in English. Tourist roll classes exist all over Japan at a different price and length."),
        ],
        tip: L("観光ビザで長期の職人コースに入ろうとしないこと。学校に査証の種類を文書で確認するのが最初の手続きです。", "Do not try to sit a long chef course on a tourist visa. The first email should ask, in writing, which visa the school expects."),
      },
    ],
  },
];
