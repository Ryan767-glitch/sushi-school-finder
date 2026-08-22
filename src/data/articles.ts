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
    readMinutes: 10,
    related: ["sushi-school-types", "tuition-guide", "is-ten-year-apprenticeship-required"],
    sources: [
      {
        title: "寿司職人になるには｜修行ルート・学校・資格",
        url: "https://careergarden.jp/sushishokunin/naruniha/",
        publisher: "キャリアガーデン",
        summary: L("未経験から寿司職人を目指す3大ルート（弟子入り・専門学校・短期スクール）の特徴と選び方の総合解説。", "Comprehensive guide on three major routes (apprenticeship, college, academy) from zero experience."),
      },
      {
        title: "東京すしアカデミー 公式サイト",
        url: "https://www.sushiacademy.co.jp/",
        publisher: "東京すしアカデミー",
        summary: L("未経験から2ヶ月で基礎を固める集中コースや週末専科コースの募集要項と就職支援制度。", "Official syllabus and career support details for 2-month intensive and weekend courses."),
      },
    ],
    intro: [
      L(
        "未経験から寿司職人を目指す入口は、大きく三つです。店に弟子入りする、学校に通う、独学で始める。法律上の必須資格はないので、どれでも「握ること」自体は始められます。違うのは、誰が基礎を直してくれるか、学費と生活費の出方、卒業（または就職）のあとに立つ場所です。",
        "There are three doors from zero: a shop apprenticeship, a school, or teaching yourself. No license is required to make sushi, so any door can start the work. What changes is who corrects your basics, how money leaves, and where you stand afterward.",
      ),
    ],
    keyPoints: [
      L("多くの短期校と一部の店は未経験を受け入れている", "Many short schools and some shops accept beginners."),
      L("学校は基礎を圧縮する。お客様の前の責任は店で積む", "School compresses basics. Responsibility in front of guests comes from a shop."),
      L("年齢や学歴より、通える時間と卒業後の働き方が先", "Hours you can attend and the job after graduation matter more than age or degrees."),
    ],
    sections: [
      {
        heading: L("未経験から目指せるか", "Can beginners actually do this?"),
        body: [
          L("多くの短期校と一部の店は未経験を受け入れています。重要なのは継続と、基礎を誰かに直してもらう環境です。独学でも包丁とシャリは練習できますが、魚の鮮度と衛生は、間違えたときの代償が大きいので、最初は誰かの目があった方が安全です。", "Many short schools and some shops accept beginners. What matters is staying with it, and having someone correct the basics. You can drill knives and rice alone. Fish freshness and hygiene are expensive to get wrong, so a pair of eyes is safer at the start."),
        ],
        bullets: [
          L("弟子入り：学費は抑えめ、教える量は店の忙しさ次第", "Apprenticeship: lower tuition, teaching depends on how busy the shop is"),
          L("学校：学費が先、手順はカリキュラム", "School: tuition first, the sequence is a curriculum"),
          L("独学：安く始められる、雇われるまでの距離は長い", "Self-study: cheap to start, a long way to being hired"),
        ],
        tip: L("年齢や学歴より、通える時間と卒業後の働き方が先です。", "Hours you can attend and what you will do after graduation matter more than age or degrees."),
      },
      {
        heading: L("学校で学べること、学べないこと", "What school teaches, and what it does not"),
        body: [
          L("捌き、シャリ、握り、衛生、原価の入口までは圧縮できます。お客様の前での責任と、毎日の仕込みの量は店で積むものです。学校の「プロ」は、見習いとして雇われうる手、という意味に近いことが多いです。予約の埋まる大将、という意味ではありません。", "Schools can compress fish work, rice, nigiri, hygiene, and a first look at food cost. Responsibility in front of guests and daily prep volume still come from a shop. School “pro” often means hands a shop might hire as a junior. It does not mean a booked-solid owner."),
        ],
      },
      {
        heading: L("学校を選ぶときに見る順", "The order to look when choosing a school"),
        body: [
          L("先に、卒業後に国内の店で雇われたいのか、海外へ出たいのか、趣味で終わりたいのかを一文で書いてください。そのあとで期間、学費、英語、夜間、免許の有無を見ます。体験レッスンでは、卒業生が最初の半年に任される仕事を聞いてください。パンフレットの速さより、その答えの具体性が選考基準になります。", "Write one sentence first: hired in Japan, leaving the country, or stopping at a hobby. Then look at length, tuition, English, nights, and whether a license is included. At a trial, ask what graduates do in their first six months. How specific that answer is beats brochure speed."),
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
    readMinutes: 8,
    related: ["how-to-become-sushi-chef", "three-months-vs-two-years", "tuition-guide"],
    sources: [
      {
        title: "【2025年版】寿司専門学校の真実",
        url: "https://insyokujin.ac/recommend/5985/",
        publisher: "飲食人大学",
        summary: L("専門学校と短期スクールのカリキュラム構成、免許の有無、通学期間を徹底比較。", "Comprehensive comparison of college vs academy curricula, certification, and timeline."),
      },
      {
        title: "東京すし和食調理専門学校 公式サイト",
        url: "https://www.sushi-tokyo.jp/",
        publisher: "東京すし和食調理専門学校",
        summary: L("認可調理師専門学校における2年〜3年制の総合教育プログラムと調理師免許取得案内。", "Official details on licensed 2-3 year degree programs and cook's licensing."),
      },
    ],
    intro: [
      L(
        "「寿司スクール」という言葉の中に、全く別の商品が四つ入っています。認可専門学校、数ヶ月のアカデミー、仕事を辞めない教室型、オンラインです。比較表に並べる前に、自分が買おうとしているのがどれかを決めると、学費の桁が狂いにくくなります。",
        "The phrase “sushi school” hides four products: a licensed college, a months-long academy, a studio you attend without quitting work, and online. Decide which product you are buying before you line up a comparison table, or the tuition digit will be wrong.",
      ),
    ],
    keyPoints: [
      L("専門学校は免許と時間。短期アカデミーは技術の圧縮", "Colleges sell licenses and time. Academies compress technique."),
      L("教室型は仕事を辞めずに試す。オンラインは知識の補助", "Studios let you try without quitting. Online is backup knowledge."),
      L("同じ「寿司を学ぶ」でも、卒業後に立てる場所が違う", "Same phrase, different places you can stand afterward."),
    ],
    sections: [
      {
        heading: L("4タイプ", "Four types"),
        body: [
          L("専門学校は免許と時間。短期アカデミーは技術の圧縮。教室型は仕事を辞めずに試す。オンラインは知識の補助です。専門学校は1〜2年、学費は数百万円、調理師免許が付きやすいです。アカデミーは2〜6ヶ月程度、学費は数十万〜100万円前後、免許は原則つきません。", "Colleges sell licenses and time. Academies compress technique. Studios let you try without quitting work. Online is backup knowledge. Colleges last one to two years, cost millions of yen, and more often include a cook’s license. Academies last about two to six months, cost hundreds of thousands to around a million yen, and generally do not include the license."),
        ],
        bullets: [
          L("専門学校：免許・長い授業時間・国内の施設就職に強い", "College: license, many hours, stronger for domestic institutional jobs"),
          L("アカデミー：速さ・就職／海外／独立の入口", "Academy: speed, a door to jobs / overseas / opening later"),
          L("教室型：週末や夜間、適性を見る", "Studio: nights and weekends, a fitness test"),
          L("オンライン：衛生や知識の補助。魚の鮮度は現場", "Online: hygiene and knowledge. Fish freshness is still in a kitchen"),
        ],
      },
      {
        heading: L("選び方の近道", "A shorter way to choose"),
        body: [
          L("免許が要る就職先を狙うなら専門学校。仕事を辞める期間が数ヶ月しかない、または海外の年齢上限があるならアカデミー。辞める決断の前に手を動かしたいなら教室型。遠方で通えないならオンラインを補助にする。四つを混ぜて「一番安い寿司学校」で探すと、観光クラスと2年制が同じ一覧に並びます。", "If target employers want a license, pick a college. If you can only leave work for a few months, or you have an overseas age cap, pick an academy. If you want to move your hands before you quit, pick a studio. If you cannot commute, use online as backup. Mixing all four under “cheapest sushi school” puts tourist classes and two-year colleges on the same list."),
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
    readMinutes: 8,
    related: ["how-to-become-sushi-chef", "three-months-vs-two-years"],
    sources: [
      {
        title: "東京すしアカデミー コース・学費一覧",
        url: "https://www.sushiacademy.co.jp/",
        publisher: "東京すしアカデミー",
        summary: L("集中特訓コース、週末コース、ディプロマコースの公式受講料・教材費・入学金一覧。", "Official fee breakdown including enrollment, tuition, and knife kit fees."),
      },
      {
        title: "飲食人大学 募集要項・受講料",
        url: "https://insyokujin.ac/",
        publisher: "飲食人大学",
        summary: L("寿司マイスター専科（3ヶ月）の学費および特待生制度・分割払いの案内。", "Official tuition and installment options for Sushi Meister 3-month course."),
      },
    ],
    intro: [
      L(
        "公開されている学費は、授業料の下限だけが出ていることが多いです。入学金、包丁、白衣、教材、体験レッスン、住居、休職中の生活費を足すと、見た目の「何万円」から総額が動きます。当サイトの学校ページの金額は2026年8月の公開情報の目安です。最新額は公式で確認してください。",
        "Public tuition is often only the lower end of class fees. Enrollment, knives, whites, materials, trial lessons, housing, and lost salary move the total away from the advertised “how many man-yen.” Figures on this site are public-information estimates as of August 2026. Confirm current prices on the official site.",
      ),
    ],
    keyPoints: [
      L("授業料以外に、入学金・道具・住居・生活費が乗る", "On top of tuition: enrollment, tools, housing, living costs."),
      L("短期は学費が低く見えても、卒業後の見習い期間で合計が伸びることがある", "A short course can look cheap, then grow if unpaid apprenticeship follows."),
      L("比較するときは「卒業月までのキャッシュアウト」で揃える", "Compare cash out until graduation month, not the brochure line."),
    ],
    sections: [
      {
        heading: L("授業料以外", "Beyond tuition"),
        body: [
          L("入学金、教材、包丁、白衣、住居、休職中の生活費を足してください。短期のアカデミーでも、都心に数ヶ月住むと家賃が学費に並ぶことがあります。2年制は学費も生活費も年数が長いです。オンラインは授業料が安く、魚と包丁は自分持ちです。", "Add enrollment fees, tools, whites, housing, and lost salary. Even a short academy in central Tokyo can make rent rival tuition. A two-year college stretches both tuition and rent. Online is cheap in class fees; you still buy fish and knives."),
        ],
        bullets: [
          L("入学金：授業料と別枠の学校が多い", "Enrollment: often a separate line from tuition"),
          L("道具：包丁セットと制服", "Tools: knife kit and whites"),
          L("生活：家賃＋食費＋、辞めているなら給与の喪失", "Living: rent, food, and lost pay if you quit"),
        ],
      },
      {
        heading: L("総額の揃え方", "How to line up the full bill"),
        body: [
          L("学校Aの「80万円」と学校Bの「120万円」をそのまま比べないでください。含まれる実習時間、店舗研修、就職紹介、体験の有無が違います。Excelで、入学金＋授業料＋道具＋家賃×月数＋生活費×月数、まで揃えると、短いコースが必ずしも安いとは限らなくなります。", "Do not compare school A’s “¥800,000” with school B’s “¥1.2M” as-is. Included practice hours, shop internships, job intros, and trials differ. In a sheet, add enrollment + tuition + tools + rent × months + living costs × months. Short courses are not always cheaper."),
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
    readMinutes: 8,
    related: ["who-fits", "school-then-shop-hybrid"],
    sources: [
      {
        title: "寿司職人の一日・仕事内容",
        url: "https://careergarden.jp/sushishokunin/ichinichi/",
        publisher: "キャリアガーデン",
        summary: L("早朝の市場仕入れ、仕込み、ランチ営業、ディナー営業、片付け・締め作業のタイムスケジュール解説。", "Detailed daily schedule covering morning fish market sourcing, prep, lunch/dinner service, and closing."),
      },
    ],
    intro: [
      L(
        "学校の授業で目立つのは握りです。店に入ると、一日の大半は仕入れと仕込みと片付けです。昼と夜のあいだに休憩がある店もあれば、通しの店もあります。学校を選ぶ前に、卒業後の「普通の一日」を知っておくと、授業の楽しさと仕事の適性を混ぜにくくなります。",
        "Classrooms show nigiri. In a shop, most of the day is buying, prep, and cleanup. Some shops break between lunch and dinner. Some run through. Knowing an ordinary day before you pick a school keeps the fun of class from mixing with whether the job fits.",
      ),
    ],
    keyPoints: [
      L("個人店は朝の仕入れと仕込みから始まる", "Independent shops start with the morning market and prep."),
      L("夜はおまかせと接客の比重が上がる", "Night service adds omakase and hospitality."),
      L("学校の握り練習だけでは、仕込み量と立ち時間に足りない", "Nigiri drills at school do not cover prep volume or hours on your feet."),
    ],
    sections: [
      {
        heading: L("朝と夜", "Morning and night"),
        body: [
          L("個人店は仕入れと仕込みから始まります。魚を見て、値段を見て、今日のコースを組み立てる判断が朝にあります。仕込みは酢飯、出汁、切り置き、器、予約確認です。夜はおまかせと接客の比重が上がります。学校の握り練習だけでは足りない理由は、この前後の仕事の量です。", "Independent shops start with buying and prep. Morning is looking at fish, looking at price, and building the day’s menu. Prep is rice, stock, cutting, plates, and bookings. Night service adds omakase and hospitality. That before-and-after volume is why nigiri drills at school are not the whole job."),
        ],
        bullets: [
          L("朝：市場または納品、仕込み", "Morning: market or delivery, then prep"),
          L("昼：短いサービス、または仕込み続き", "Lunch: a short service, or more prep"),
          L("夜：カウンター、会話、締め", "Night: counter, conversation, close"),
        ],
      },
      {
        heading: L("学校のあとに待っているギャップ", "The gap waiting after school"),
        body: [
          L("学校では一人一条、または少人数で魚を扱います。店では、同じ時間に何人分もの仕込みが並行します。スピードと、衛生の手を止めないことが同時に要求されます。体験レッスンのあとに、可能なら店で食事をして、カウンターの内側の動きを見てください。授業の雰囲気より、あの動きに体が合うかの方が進路に効きます。", "At school you often work one fish, or in a small group. In a shop, prep for many guests runs in parallel. Speed and never dropping hygiene happen together. After a trial class, eat in a shop if you can, and watch the inside of the counter. Whether your body fits that motion matters more than the mood of class."),
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
    readMinutes: 7,
    related: ["career-paths", "how-to-become-sushi-chef"],
    sources: [
      {
        title: "寿司職人に向いている人・適性",
        url: "https://careergarden.jp/sushishokunin/tekisei/",
        publisher: "キャリアガーデン",
        summary: L("手先の器用さ以上に求められる衛生観念、体力、反復への忍耐力、コミュニケーション能力の解説。", "Analysis of key attributes: hygiene rigor, stamina, patience for repetition, and communication."),
      },
    ],
    intro: [
      L(
        "寿司職人に向いている人、という話は「手先が器用」で終わりがちです。公開されている現場の話と、学校が繰り返し言うことを重ねると、残る人の条件は別です。同じ工程を丁寧に繰り返せる、清潔、立ち仕事、不規則な時間です。最初の数年の収入はパンフレットに出にくいので、店で食事して観察する方が早いです。",
        "“Who fits sushi” often stops at “good hands.” Shop talk and what schools repeat point somewhere else: people who repeat a process carefully, stay clean, and stand for long irregular hours. Early pay is rarely on brochures. Eating in a shop and watching is faster.",
      ),
    ],
    keyPoints: [
      L("器用さより、清潔と反復が続く人の方が残る", "Clean habits and repetition outlast “good hands.”"),
      L("夜型と初期給与はパンフレットに出にくい", "Night work and early pay are rarely on brochures."),
      L("適性は体験と、店での観察で見る", "Fitness shows up in a trial class and in watching a shop."),
    ],
    sections: [
      {
        heading: L("続く人", "Who stays"),
        body: [
          L("同じ工程を丁寧に繰り返せる、清潔、立ち仕事、不規則な時間。夜型と最初の数年の収入はパンフレットに出にくいので、店で食事して観察してください。会話が好きな人はカウンター向きです。黙って仕込みを極める人は、裏方の比重が高い店の方が続きやすいことがあります。", "People who repeat a process carefully, stay clean, and stand for long irregular hours. Night work and early pay are rarely on brochures. Eat in a shop and watch. People who like conversation fit a counter. People who want to disappear into prep sometimes last longer in shops that weight the back."),
        ],
        bullets: [
          L("体：早朝、立ち、夏の厨房、冬の市場", "Body: early mornings, standing, summer kitchens, winter markets"),
          L("性格：同じことを昨日より少し良くする", "Temperament: the same task, slightly better than yesterday"),
          L("生活：夜勤と休日が、家族や副業と両立するか", "Life: whether nights and days off fit family or a second job"),
        ],
      },
      {
        heading: L("覚悟がいること", "What is hard on purpose"),
        body: [
          L("最初の数年は、お客様に名前を覚えられる側ではなく、覚える側です。給与は前職より下がることが多いです。学校の授業は褒められやすく、店の朝は黙って動きます。その落差で辞める人は、技術不足というより、評価の単位が変わったことへの不適応です。体験では、卒業生の定着と、最初の職場の業態を聞いてください。", "In the first years you are not the person guests remember. You are the person remembering them. Pay often drops from a previous job. Class praises you. Shop mornings are quiet motion. People who quit in that gap are often mismatched to a new unit of evaluation, not short on skill. At a trial, ask whether graduates stay, and what kind of first shop they enter."),
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
