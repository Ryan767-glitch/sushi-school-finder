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
    readMinutes: 10,
    related: ["school-then-shop-hybrid", "how-to-read-school-marketing", "three-months-vs-two-years"],
    sources: [
      { title: "FAQ〈よくある質問〉", url: "https://www.sushiacademy.co.jp/faq", publisher: "東京すしアカデミー" },
      { title: "寿司職人になるには10年必要か？", url: "https://note.com/insyokujin_ac/n/nd5f361a90dd1", publisher: "飲食人大学 note" },
      { title: "“飯炊き3年 握り8年”今は昔…数カ月で技術学べる『寿司職人の養成学校』", url: "https://www.youtube.com/watch?v=qg0iAHhpCdo", publisher: "テレビ報道（YouTube公開）" },
    ],
    intro: [
      L(
        "寿司職人の話になると、今でも「飯炊き3年、握り8年」が出てきます。一人前までだいたい10年、という意味で使われることわざです。一方で養成学校は、数ヶ月で包丁・仕込み・握りの基礎を教えられると説明しています。どちらが嘘というより、測っているものが違います。",
        "People still quote the proverb that rice takes three years and nigiri eight — about ten years to become a sushi chef. Schools say they can teach knife work, prep, and nigiri basics in months. The two sides are measuring different things.",
      ),
      L(
        "この記事では、ことわざが指していた現場の順番、学校が圧縮している「基礎」、店が求めている「責任」を分けて説明します。学校を選ぶときに、パンフレットの期間だけを見ないための読み方です。",
        "This article separates the old shop order, the basics schools compress, and the responsibility shops still hire for. Use it so you do not choose a school by brochure length alone.",
      ),
    ],
    keyPoints: [
      L("10年は技術の計測ではなく、雑務→飯→仕込み→握りと任される徒弟制の時計だった", "Ten years described a hierarchy of chores, rice, prep, then nigiri — not a lab result."),
      L("学校が言う「数ヶ月」は、正しい手順を反復する基礎の圧縮に近い", "School “months” are compressed fundamentals: repeating the right sequence."),
      L("取材に出る独立や二番手は、学校のあとに年単位の店修行が続いている", "Public stories of number-two posts and shop openings still add years after school."),
      L("比較するなら「何ヶ月か」より総授業時間・一人で捌く魚・卒業後に立つ場所", "Compare total hours, fish you break down yourself, and where graduates stand."),
    ],
    sections: [
      {
        heading: L("ことわざが指していたもの", "What the proverb actually meant"),
        body: [
          L("「飯炊き3年、握り8年」は、雑務から入って飯、仕込み、握りの順に任される徒弟制の時計です。技術そのものに10年かかる、という計測結果ではありません。店の人数が少なく、教える側も営業しながらだった時代の、仕事の順番です。", "The proverb described a shop hierarchy: chores, rice, prep, then nigiri. It was not a lab result that the craft needs a decade. Small shops taught while they served guests, so the order of work stretched out."),
          L("東京すしアカデミーのFAQは、技術は正しい手順の反復で身につく身体技能だと説明しています。同校は数ヶ月のカリキュラムで、魚を最初から最後まで一人で扱う実習を掲げています。テレビ報道でも「今は昔」と学校の存在が紹介されてきました。", "Tokyo Sushi Academy's FAQ describes the skill as a body technique learned by repeating the right sequence. The school advertises months of practice in which a student breaks down a whole fish. TV reports have also framed the proverb as “the old way.”"),
        ],
        bullets: [
          L("ことわざ＝店の中での仕事の順番", "The proverb = order of jobs inside a shop"),
          L("学校の数ヶ月＝基礎動作の圧縮", "School months = compressed basic motions"),
          L("どちらも「名前の出る大将まで」は測っていない", "Neither number measures “famous owner”"),
        ],
      },
      {
        heading: L("学校が言っていること、店が求めていること", "What schools promise vs what shops hire for"),
        body: [
          L("飲食人大学は公式やnoteで、社会人の転職や海外就職には短期アカデミーが合理的だと主張しています。キャリアチェンジや、ワーホリ前の技能として、長期間の無給修行より短い有料授業の方が合う、という整理です。", "Inshokujin College argues on its site and note that a short academy is rational for career changers and overseas jobs. For a working-holiday clock or a mid-career switch, paid months can beat unpaid years."),
          L("一方、高級店の二番手や独立までの話を公開プロフィールで読むと、学校のあとに年単位の店修行が続きます。つまり「10年いらない」は「基礎の入り口に10年かけなくてよい」に近く、「名前の出る店の大将まで数ヶ月」ではありません。", "Profiles of chefs who reach a number-two post or open a shop still show years in restaurants after school. “You don’t need ten years” is closer to “you need not spend ten years on the doorway.” It is not “you can run a famous counter in a few months.”"),
        ],
        tip: L("学校の期間は「基礎の圧縮」、店の年数は「責任の圧縮」です。二つを足した数字で考えた方が現実に近いです。", "Treat school length as compressed basics and shop years as compressed responsibility. Add them together."),
      },
      {
        heading: L("見るべき数字", "Numbers that actually help"),
        body: [
          L("比較するなら「何ヶ月か」より総授業時間、一人で捌く魚の種類、卒業後に立つ場所です。公開情報では短期校で約200〜420時間、2年制専門学校で数千時間、という幅があります。期間が短くても、毎日長時間なら総時間は伸びます。逆に週末1年は、カレンダーは長くても密度は違います。", "Compare total hours, how many fish you break down yourself, and where graduates stand. Public figures range from about 200–420 hours at short academies to thousands at two-year colleges. A short calendar with long days can still add up. A year of Sundays is a different density."),
        ],
        bullets: [
          L("体験では「卒業生が最初の半年に任される仕事」を聞く", "At a trial, ask what graduates do in their first six months on the job"),
          L("独立例は学校名のあとに何年の店名が続くかを数える", "For famous alumni, count restaurant years after the school name"),
          L("海外就職と国内の名店就職では、学校の売りが違う", "Overseas jobs and famous Tokyo counters are different school pitches"),
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
    readMinutes: 9,
    related: ["borrowed-counter-startups", "women-sushi-chefs", "weekend-sushi-at-38"],
    sources: [
      { title: "12年勤めた会社員の安定手放し、35歳で寿司職人に", url: "https://chanto.jp.net/articles/-/1009023", publisher: "CHANTO WEB" },
      { title: "Yahoo!ニュース転載", url: "https://news.yahoo.co.jp/articles/9bf2f3696a432922690c67ed2c755e7d47c053ab", publisher: "Yahoo!ニュース / CHANTO" },
      { title: "女性寿司職人の間借り店がオープン2カ月で予約困難との噂", url: "https://magazine.tabelog.com/articles/308459", publisher: "食べログマガジン" },
      { title: "『鮨ゆう子』女性寿司職人が自然体でいられるワケ", url: "https://woman-type.jp/wt/feature/33369/", publisher: "woman type" },
    ],
    intro: [
      L(
        "「35歳で会社を辞めて寿司職人に」という見出しは強く見えます。公開されている取材を時系列に並べると、学校は入口で、店を持てるまでの時間の大半は別の場所にあります。鈴木裕子さん（『鮨ゆう子』）の話は、その時計がよく見える例です。",
        "“Quit at 35 to become a sushi chef” is a strong headline. Lined up in time, school is the doorway and most of the years sit somewhere else. Yuko Suzuki of Sushi Yuko is a clear public example of that clock.",
      ),
      L(
        "以下は複数の取材で重なっている事実の要約です。当サイトが本人に取材した記事ではありません。見出しより本文の年数を足して読む、という使い方をしてください。",
        "What follows is a summary of facts that overlap across published interviews. We did not interview her. Add the years in the body, not only the headline.",
      ),
    ],
    keyPoints: [
      L("食品メーカー約12年 → 決断に約3年 → 養成学校2ヶ月 → 高級店で約5年 → 2023年6月に間借り開業", "About 12 years in food manufacturing, three years deciding, two months of school, five years in a high-end shop, then a 2023 pop-up."),
      L("「学校2ヶ月で独立」ではない。学校は始まり、信用と技術の厚みは店で積んでいる", "It is not “two months of school, then a shop.” School started it. The shop years built it."),
      L("独立の形は路面店ではなく、ビストロ間借り・週2日という小さい開き方", "The first shop was a twice-weekly borrowed counter, not a full street lease."),
    ],
    sections: [
      {
        heading: L("公開されている経緯", "The public timeline"),
        body: [
          L("CHANTO WEB（2026年8月、Yahoo!ニュースにも転載）によると、鈴木裕子さんは食品メーカーに約12年勤め、35歳で寿司職人養成学校へ進みました。同記事は、決断まで約3年悩んだと伝えています。安定した会社員の給与を手放すまでの時間が、学校の期間より長い点がこの話の骨格です。", "CHANTO WEB (also on Yahoo News, August 2026) reports that Yuko Suzuki spent about 12 years at a food manufacturer and entered a sushi academy at 35. The piece says she spent about three years deciding. Letting go of a stable salary took longer than school itself."),
          L("woman typeの取材では、学校は東京すしアカデミー、期間は2ヶ月。その後、恵比寿の『鮨竹半 若槻』で約5年修業し、2023年6月に『鮨ゆう子』を開業したとあります。学校名だけで語ると2ヶ月に見えます。店名まで含めると約5年が後ろに付きます。", "woman type reports the school as Tokyo Sushi Academy for two months, then about five years at Sushi Takehan Wakatsuki in Ebisu, and the opening of Sushi Yuko in June 2023. School-only math looks like two months. Shop-inclusive math adds about five years."),
        ],
      },
      {
        heading: L("学校は始まりで、店が本番", "School was the start. The shop was the job."),
        body: [
          L("この話が興味深いのは「学校2ヶ月で独立」ではない点です。公開年表は、学校 → 名店での年単位の修業 → 間借り、です。学校は入口、お客様の前での責任と毎日の仕込み量は店で積んでいます。転職記事の見出しは短くなりがちなので、本文の年数を足す習慣が役立ちます。", "The story is interesting because it is not “two months of school, then a shop.” The public timeline is school, then years in a respected restaurant, then a borrowed counter. School was the door. Responsibility in front of guests came from the shop."),
        ],
        bullets: [
          L("決断3年：仕事を辞める前の準備期間", "Three years: deciding before quitting"),
          L("学校2ヶ月：基礎の圧縮", "Two months: compressed basics"),
          L("店約5年：信用と技術の厚み", "About five years: trust and depth"),
          L("間借り：最初の独立を小さくする", "Pop-up: shrink the first bet"),
        ],
        tip: L("転職記事の見出しは短くなりがちです。本文の年数を足すと、学校のパンフレットとは違う時計が見えます。", "Headlines compress time. Adding the years in the body shows a different clock from a school brochure."),
      },
      {
        heading: L("週2日という開き方", "Opening two days a week"),
        body: [
          L("食べログマガジンは、浅草のビストロを間借りした週2営業で、オープン直後から予約が取りにくいと伝えています。家賃と人件費を抑え、本業の店を最初から持たない独立の型として、後の記事でも引用されています。フル店舗を最初の一歩にしない、という選択です。", "Tabelog Magazine described a twice-weekly pop-up in an Asakusa bistro that became hard to book soon after opening. Later stories still cite this as a way to open without a full-time lease. The first step was not a street shop."),
          L("学校に開業支援がある場合でも、卒業生の独立例が路面店前提とは限りません。体験や相談では「最初の物件はどんな形か」まで聞くと、自分の資金計画と照合できます。", "Even when a school lists startup support, alumni may not open a street-level shop first. At a trial, ask what form the first shop actually took, then match it to your savings."),
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
    readMinutes: 8,
    related: ["is-ten-year-apprenticeship-required", "career-change-at-35-sushi-yuko", "mei-no-after-academy"],
    sources: [
      { title: "寿司職人になるには｜修行ルート・学校・資格", url: "https://careergarden.jp/sushishokunin/naruniha/", publisher: "キャリアガーデン" },
      { title: "CHANTO WEB 鈴木裕子さん取材", url: "https://chanto.jp.net/articles/-/1009023", publisher: "CHANTO WEB" },
      { title: "読売新聞 幸後綿衣さん", url: "https://www.yomiuri.co.jp/otekomachi/20240416-OYT8T50050/", publisher: "読売新聞" },
    ],
    intro: [
      L(
        "寿司職人への入口は、よく「店に弟子入りするか、学校に行くか」と二択で語られます。公開されている進路解説と、取材に出る人の年表を重ねると、いちばん多いのはそのあいだです。学校で基礎を圧縮し、店で責任を積む、という順番です。",
        "People often talk as if you pick either a shop apprenticeship or a school. Career guides and public profiles overlap on a third path: compress the basics at school, then add responsibility in a shop.",
      ),
    ],
    keyPoints: [
      L("入口は大きく三つ。個人店の弟子入り、チェーンのOJT、学校のあとに現場", "Three doors: small-shop apprenticeship, chain OJT, and school then a kitchen."),
      L("必須の国家資格はない。それでも店は「明日から使える手」を見る", "No national license is required. Shops still hire usable hands."),
      L("記事になる人は、学校名のあとに店の年数が付いていることが多い", "People in magazines usually have restaurant years after the school name."),
    ],
    sections: [
      {
        heading: L("三つの入口", "Three doors"),
        body: [
          L("キャリアガーデンは入口を、個人店への弟子入り、チェーンのOJT、学校のあとに現場、の三つに整理しています。必須の国家資格はない、とも明記しています。弟子入りは学費が安い代わりに、教えてもらえる量が店の忙しさに左右されます。学校は学費が先に出る代わりに、手順がカリキュラムになります。", "Career Garden lists three doors: apprenticeship in a small shop, chain-store OJT, and school then a kitchen. It also notes there is no required national license. Apprenticeships cost less tuition but teaching depends on how busy the shop is. School costs money up front and turns the sequence into a curriculum."),
          L("チェーンのOJTは、雇用されながら覚える形です。寿司部門のある店や、回転寿司の裏側に近い仕事から入る人もいます。カウンターの一貫を任されるまでの距離は、店の業態で違います。", "Chain OJT means you are an employee while you learn. Some people start in a sushi section or closer to the back of a conveyor shop. How long until you are trusted with nigiri depends on the format."),
        ],
        bullets: [
          L("弟子入り：学費は抑えめ、教える量は店次第", "Apprenticeship: lower tuition, teaching depends on the shop"),
          L("OJT：給与が出る、任される仕事は業態次第", "OJT: you are paid, the job depends on the format"),
          L("学校→店：基礎は授業、責任は就職先", "School then shop: class for basics, employer for responsibility"),
        ],
      },
      {
        heading: L("記事になる人の共通点", "What the people in magazines share"),
        body: [
          L("35歳転身の鈴木さんも、大学からアカデミーへ進んだ幸後綿衣さんも、公開プロフィールでは学校のあとに名店での年数があります。学校が不要だった話ではありません。学校だけで完結した話でもありません。メディアは「学校を出た人」と書きやすく、店の年数は本文の後半に回りがちです。", "Both Yuko Suzuki and Mei Kogo have school plus years in known restaurants on their public profiles. Neither story says school was useless. Neither says school was the whole career. Media copy likes “went to school.” Shop years often sit later in the piece."),
        ],
        tip: L("体験レッスンでは「卒業後に何ヶ月でカウンターに立つか」より、「卒業生が最初の1年で何をしているか」を聞いてください。", "At a trial class, ask what graduates do in year one, not only how fast they reach the counter."),
      },
      {
        heading: L("自分の時計に直す", "Map it onto your own clock"),
        body: [
          L("仕事を辞められる期間、貯金額、家族、英語、国内で雇われたいか海外へ出たいかで、三つの入口の得失は入れ替わります。短期校は「基礎を先に揃えてから店に行く」ための道具です。店に直接入るのは「最初から現場の速度で覚える」道具です。どちらが偉いではなく、今の制約に合う順番を選ぶ話です。", "How long you can quit, savings, family, English, and whether you want a domestic job or to leave Japan all swap the trade-offs. A short school is a tool to line up basics before a shop. Walking into a shop first is a tool to learn at service speed. Neither is morally better. Fit the order to your constraints."),
        ],
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
    readMinutes: 8,
    related: ["career-change-at-35-sushi-yuko", "mei-no-after-academy", "michelin-in-eleven-months"],
    sources: [
      { title: "『鮨ゆう子』女性寿司職人が自然体でいられるワケ", url: "https://woman-type.jp/wt/feature/33369/", publisher: "woman type" },
      { title: "寿司職人・幸後綿衣さんがこの道を目指した理由", url: "https://www.fujingaho.jp/gourmet/chef/a46300426/mei-kougo-20230117/", publisher: "婦人画報" },
      { title: "女性鮨職人、厳しい道の先にあったもの", url: "https://forbesjapan.com/articles/detail/85449", publisher: "Forbes JAPAN" },
    ],
    intro: [
      L(
        "女性の寿司職人の取材は、ここ数年でも繰り返し出ています。技術の話と同時に、「まだ少ない」ことが見出しに入りやすいです。希少性はメディアの理由にはなります。進路を決める理由には、更衣室や勤務時間、ハラスメントへの対応の方が役立ちます。",
        "Profiles of women sushi chefs keep appearing. Craft is in the piece, and “still rare” is often in the headline. Rarity explains the press. Lockers, hours, and harassment policy explain whether the job fits you.",
      ),
    ],
    keyPoints: [
      L("「1割に満たない」は官庁統計ではなく、店主の肌感として語られた数字", "“Under 10 percent” is shop-floor sense, not a government census."),
      L("メディアは技術と希少性の両方で書く。本人の動機は「少ないから可能性がある」側にもある", "Press covers craft and scarcity. Some chefs also describe scarcity as an opening."),
      L("学校見学では人数の多さより、設備と夜勤と相談窓口を具体的に聞く", "On a school tour, ask about facilities, nights, and who you talk to — not a headcount."),
    ],
    sections: [
      {
        heading: L("数字は公式統計ではない", "The figure is not an official census"),
        body: [
          L("woman typeの記事で、鮨ゆう子の店主は「女性の寿司職人は全体の1割にも満たない」という肌感を語っています。官庁の全数調査ではありません。現場の実感として読むべき数字です。それでも、カウンターに女性が並ぶ写真がまだ珍しい、という意味では取材側の感覚とも重なります。", "In woman type, the owner of Sushi Yuko said women chefs still feel like less than 10 percent. That is not a government census. Treat it as shop-floor sense. It still matches the press feeling that a woman at the counter is news."),
        ],
      },
      {
        heading: L("希少性とメディア", "Rarity and the press"),
        body: [
          L("婦人画報やForbes JAPANが幸後綿衣さんを取り上げるとき、技術だけでなく「まだ少ない」ことが見出しに入ります。本人のインタビューでは、少ない世界だからこそ可能性がある、という動機も語られています。メディアのフックと、本人のキャリア戦略は、同じ「少なさ」を別の意味で使っています。", "Fujingaho and Forbes JAPAN cover Mei Kogo for the craft and for the fact that women remain few. In interviews she has also said the scarcity itself looked like an opening. The press and the chef use the same rarity for different jobs."),
          L("学校や店を選ぶときに「女性がいるか」だけを見ると、例外の一人に自分を重ねすぎることがあります。見るべきは、深夜までの立ち仕事、力仕事、更衣、相談できる人がいるかです。", "If you only ask whether women are present, you may map yourself onto one exception. Ask about standing until late, physical work, changing rooms, and who you can talk to."),
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
    readMinutes: 8,
    related: ["career-change-at-35-sushi-yuko", "fifty-and-a-three-day-bar", "how-to-read-school-marketing"],
    sources: [
      { title: "女性寿司職人の間借り店がオープン2カ月で予約困難との噂", url: "https://magazine.tabelog.com/articles/308459", publisher: "食べログマガジン" },
      { title: "2024年すし業界10大ニュース", url: "https://www.sushiacademy.co.jp/archives", publisher: "東京すしアカデミー ブログ" },
    ],
    intro: [
      L(
        "寿司の独立というと、カウンター10席の自分の店を最初から持つイメージが残りやすいです。ここ数年の取材では、ビストロの間借り、週2〜3日、自宅兼店舗、キッチンカーといった小さい開き方が繰り返し出ています。失敗したときの傷を小さくする型です。",
        "People still picture independence as a ten-seat shop of your own from day one. Recent reporting keeps showing borrowed counters, two- or three-day weeks, home shops, and kitchen cars. The point is a smaller first wound if it fails.",
      ),
    ],
    keyPoints: [
      L("間借りは家賃と人件費を抑え、予約が取れれば「需要の実験」になる", "A pop-up cuts rent and payroll and tests demand if it books up."),
      L("学校の開業支援も、最初の物件が路面店前提とは限らない", "School “startup support” may not assume a street lease."),
      L("小さい独立は楽な独立ではない。仕入れ・衛生・一人運営の負荷は残る", "A small opening is not an easy opening. Buying fish, hygiene, and one-person ops remain."),
    ],
    sections: [
      {
        heading: L("なぜ間借りが記事になるか", "Why borrowed space gets coverage"),
        body: [
          L("食べログマガジンは、鮨ゆう子を「ビストロの間借り、週2日」と紹介し、オープン2ヶ月で予約が難しいと書きました。家賃と人件費を抑えた独立は、読者の「自分にもできるかも」に接続します。メディアにとっても、フル店舗より物語が短いです。", "Tabelog Magazine described Sushi Yuko as a twice-weekly pop-up in a bistro and hard to book within two months. A cheaper first shop is easier for readers to imagine for themselves. For the press, the story is shorter than a full build-out."),
          L("東京すしアカデミーの2024年業界まとめでも、間借り・出張・キッチンカーがトピックの一つに入っています。学校側も、独立の形が一つではないと認識しています。", "Tokyo Sushi Academy’s 2024 industry roundup listed borrowed counters, pop-ups, and kitchen cars as a trend. Schools now treat “opening a shop” as more than one model."),
        ],
      },
      {
        heading: L("小さく開く、という意味", "What “opening small” actually means"),
        body: [
          L("週2日は休日が増える話ではありません。営業しない日に仕入れ、仕込み、告知、別の仕事を抱えている人もいます。ワンオペなら、お客様の前と裏方が同時です。間借り先の厨房ルール、ゴミ、営業許可の範囲も、路面店とは別の確認事項です。", "Two days a week is not extra days off. Non-service days still hold buying, prep, promotion, and sometimes another job. One-person service means the counter and the back happen together. The host kitchen’s rules, waste, and permit scope are extra checks a street shop would also have — just in a different form."),
        ],
        bullets: [
          L("資金：保証金と内装を先に全額出さない", "Money: you may not put down a full interior first"),
          L("実験：予約が埋まるかで需要を見る", "Test: bookings tell you if demand is there"),
          L("制約：設備・許可・営業日は借り先に縛られる", "Limits: kit, permits, and days follow the host"),
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
    readMinutes: 9,
    related: ["school-then-shop-hybrid", "women-sushi-chefs", "is-ten-year-apprenticeship-required"],
    sources: [
      { title: "寿司職人・幸後綿衣さんがこの道を目指した理由", url: "https://www.fujingaho.jp/gourmet/chef/a46300426/mei-kougo-20230117/", publisher: "婦人画報" },
      { title: "すしとワインの二刀流でお客様に幸せな時間を", url: "https://www.yomiuri.co.jp/otekomachi/20240416-OYT8T50050/", publisher: "読売新聞" },
      { title: "情熱大陸：鮨職人／幸後綿衣", url: "https://mainichi.jp/articles/20240105/org/00m/200/016000c", publisher: "毎日新聞" },
      { title: "The Tabelog Award 2025 Best New Entry", url: "https://news.livedoor.com/article/detail/28242522/", publisher: "食べログアワード関連報道" },
    ],
    intro: [
      L(
        "東京すしアカデミー出身で、メディアに名前が出やすい職人の一人が幸後綿衣さんです。大学を出て学校へ行き、複数の名店とフランス、ワインの資格を経て2023年に独立しています。学校の宣伝に使いやすい名前ですが、年表を読むと学校は出発点です。",
        "Mei Kogo is one of the Tokyo Sushi Academy alumni the press returns to. University, then school, then known restaurants, France, a wine credential, and a 2023 shop. Schools can use the name. The timeline still shows school as a start.",
      ),
    ],
    keyPoints: [
      L("上智大学 → 東京すしアカデミー → すし匠・西麻布拓・鮨あらいで計約10年 → 2023年11月独立", "Sophia University, Tokyo Sushi Academy, about ten years at Sushi Sho / Taku / Arai, independence in November 2023."),
      L("三軒目の店で個室を任されるまで7、8年かかった、と本人が語っている", "She has said it took seven or eight years before she was trusted with a private room in her third restaurant."),
      L("寿司とワインを組み合わせた店づくりが、後のメディア露出の軸になっている", "Sushi plus wine is the public frame of the shop that later coverage used."),
    ],
    sections: [
      {
        heading: L("公開プロフィールの骨格", "The public skeleton"),
        body: [
          L("読売新聞は、上智大学卒業後に東京すしアカデミーで基礎を学び、すし匠・西麻布拓・銀座の鮨あらいで計約10年、2023年11月に独立と書いています。毎日新聞の情熱大陸紹介も同趣旨です。学校の期間は、この10年の前の短い区間です。", "The Yomiuri Shimbun reports Sophia University, Tokyo Sushi Academy, then about ten years at Sushi Sho, Nishi-Azabu Taku, and Sushi Arai in Ginza, with independence in November 2023. Mainichi’s coverage of the TV documentary Jounetsu Tairiku matches that outline. School is a short interval before those ten years."),
          L("婦人画報は、父から寿司職人を勧められたこと、海外でも通用する仕事として寿司を選んだことを本人の言葉で伝えています。英語や海外経験を後から足している点も、学校パンフレットの「卒業即独立」とは別の設計です。", "Fujingaho quotes her father suggesting the job, and her sense that sushi could travel internationally. Adding languages and time abroad is a different design from “graduate and open.”"),
        ],
      },
      {
        heading: L("学校は短く、修業は長い", "Short school, long kitchen"),
        body: [
          L("Forbes JAPANとの対談では、三軒目の店で個室を任されるまで7、8年かかった、と語っています。アカデミーは出発点で、責任あるカウンターは別の年数です。「学校出身の有名店主」を探すときは、学校名のあとに何年の店名が続くかを数えてください。", "In a Forbes JAPAN conversation she said it took seven or eight years before she was trusted with a private room in her third restaurant. The academy was a start. A serious counter was another clock. When a famous owner “went to school,” count the restaurant years after the school name."),
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
    readMinutes: 7,
    related: ["career-change-at-35-sushi-yuko", "how-to-read-school-marketing", "sushi-school-types"],
    sources: [
      { title: "「寿司を握ること」をはじめてみたら、仕事も休みも輝きを増した", url: "https://www.webuomo.jp/life/topic/1XkpqA/", publisher: "UOMO" },
      { title: "受講生の田村峻哉さんが雑誌『UOMO』で紹介されました", url: "https://www.sushiacademy.co.jp/archives/c536", publisher: "東京すしアカデミー" },
    ],
    intro: [
      L(
        "寿司学校の記事は、転職と独立に寄りやすいです。雑誌UOMOが紹介した田村峻哉さんの話は、会社員のまま日曜だけ通うコースです。学校の使い方として、仕事を辞めずに適性を見る週末型が実在することを説明する材料になります。",
        "Sushi-school stories lean toward quitting and opening a shop. UOMO’s feature on Shunya Tamura is a Sunday course while he kept his job. It is a public example that school can be a fitness test, not only an exit.",
      ),
    ],
    keyPoints: [
      L("当時38歳の会社員が、東京すしアカデミーの毎週日曜・1年コースに入った", "A 38-year-old office worker joined Tokyo Sushi Academy’s year-long Sunday course."),
      L("きっかけはテレビで幸後綿衣さんの仕事を見たこと、と本人が語っている", "He has said the trigger was seeing Mei Kogo’s work on television."),
      L("動機は転職ではなく、料理・人との接触・日常の引き締め", "The motive in the piece is cooking, meeting people, and tightening ordinary days — not a resignation."),
    ],
    sections: [
      {
        heading: L("公開されている動機", "The stated motive"),
        body: [
          L("UOMO（2025年3月）によると、田村さんはテレビで幸後綿衣さんの仕事を見て「自分も握れるようになりたい」と思い、東京すしアカデミーの週末コース（毎週日曜、1年）に入ったとあります。当時38歳、会社員です。学校側も同記事を紹介しています。", "UOMO (March 2025) says Tamura watched Mei Kogo on television, wanted to learn nigiri, and joined Tokyo Sushi Academy’s year-long Sunday course. He was 38 and employed. The school also posted about the feature."),
          L("恩返し、料理、普段会わない人と会う、という動機が同記事に並んでいます。転職の決断記事ではありません。学び始めてから、仕事と休みの使い方が引き締まった、という感想が軸です。", "The piece lists giving back, cooking, and meeting people outside daily life. It is not a resignation story. The spine is that study tightened how he used workdays and days off."),
        ],
        bullets: [
          L("全日の2ヶ月コースだけが学校ではない", "Full-time months are not the only product"),
          L("週末1年はカレンダーは長いが、仕事は辞めない", "A year of Sundays is long on the calendar and keeps the job"),
          L("適性を見る使い方と、就職のための使い方は別コースになりやすい", "Fitness-testing and job-training are often different tracks"),
        ],
        tip: L("短期の全日コースだけが学校の使い方ではありません。仕事を辞めずに適性を見る週末型は、公開コース表にも実在します。", "Full-time months are not the only use of school. Weekend tracks exist on public course lists for people who keep their jobs."),
      },
      {
        heading: L("自分に置き換えるとき", "If you map this onto yourself"),
        body: [
          L("週末コースは学費の分割と、平日の収入を残せる点が利点です。欠点は、現場の仕込み量と営業の速度を、授業の密度では再現しにくいことです。「趣味で握りたい」と「雇われたい」では、選ぶ学校も期間も変わります。体験では、卒業後に店へ就職する人と、趣味で終える人の比率を聞いてください。", "A weekend track can split tuition and keep weekday pay. It is weaker at reproducing a shop’s prep volume and service speed. “I want to roll for fun” and “I want to be hired” lead to different schools and lengths. At a trial, ask how many graduates take jobs versus stop at a hobby."),
        ],
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
    readMinutes: 9,
    related: ["is-ten-year-apprenticeship-required", "how-to-read-school-marketing", "teenage-chef-at-michelin-counter"],
    sources: [
      { title: "開店からわずか11ヶ月！「鮨 千陽」がミシュランガイドに掲載", url: "https://prtimes.jp/main/html/rd/p/000000007.000013181.html", publisher: "PR TIMES / RETOWN" },
      { title: "オープン11ヵ月でミシュランに掲載されたノウハウで学校運営", url: "https://news.nissyoku.co.jp/restaurant/goushi20220816095233295", publisher: "日本食糧新聞" },
      { title: "たった３か月でデビュー!? 飲食人大学に、てつじが潜入", url: "https://www.mbs.jp/mbs-column/mint/archive/2020/08/17/020927.shtml", publisher: "MBSコラム" },
    ],
    intro: [
      L(
        "「3ヶ月でミシュラン」と口語でまとめると、学校の授業期間だけが目に入ります。運営会社が発表している事実は、もう少し長いです。3ヶ月で基礎を習った集団が店を開き、開店から11ヶ月後に特定のガイド枠へ入った、という実験です。星ではなくビブグルマンです。",
        "Said out loud as “Michelin in three months,” only the class length is visible. The operator’s own announcement is longer: a group trained for three months opened a shop and entered a specific guide category 11 months later. It was Bib Gourmand, not a star.",
      ),
    ],
    keyPoints: [
      L("2015年の発表：大阪・福島区『鮨千陽』が開店11ヶ月で京都・大阪2016のビブグルマン", "2015 release: Sushi Chiharu in Osaka’s Fukushima-ku, Bib Gourmand in Michelin Kyoto/Osaka 2016, 11 months after opening."),
      L("スタッフは飲食人大学の卒業生と生徒、と運営会社が説明している", "The operator said staff were Inshokujin College alumni and students."),
      L("後年の取材では、最初から掲載を狙った店の設計だった、という回顧もある", "Later reporting says the shop was designed from the start to aim at a listing."),
      L("学校の入学案内そのものではなく、一店舗の実験として読む", "Read it as one restaurant experiment, not as a school brochure."),
    ],
    sections: [
      {
        heading: L("発表されている事実", "What was announced"),
        body: [
          L("運営会社RETOWN HUMANのPR TIMES（2015年）は、大阪・福島区の『鮨千陽』が開店11ヶ月で『ミシュランガイド京都・大阪2016』のビブグルマンに掲載されたと発表しています。スタッフは飲食人大学の卒業生と生徒、とあります。一次情報は企業リリースです。", "In a 2015 PR TIMES release, RETOWN HUMAN said Sushi Chiharu in Fukushima-ku, Osaka, was listed as a Bib Gourmand in Michelin Kyoto/Osaka 2016, 11 months after opening. Staff were Inshokujin College alumni and students. The primary source is a company release."),
          L("日本食糧新聞は後年、最初から掲載を狙った設計だった、という運営者の回顧を伝えています。ビブグルマンは「コストパフォーマンスの良い店」の枠で、星の段とは別です。味の証明書ではありますが、「授業3ヶ月＝星」ではありません。", "Nihon Shokuryo Shimbun later reported that the operator designed the shop aiming for a listing. Bib Gourmand is the value category, not a star. It is evidence about a restaurant. It is not “three months of class equals a star.”"),
        ],
      },
      {
        heading: L("実験として読む", "Read it as an experiment"),
        body: [
          L("再現性は学校の宣伝だけでは判断できません。店の立地、価格、仕入れ、誰が厨房を設計したか、ガイドのその年の方針が重なっています。MBSのコラムなど、学校に潜入した報道も「3ヶ月でデビュー」という速さの話として書いています。速さと、ガイド掲載は別の結果です。", "A press release cannot prove the result is repeatable. Location, price, purchasing, who designed the kitchen, and that year’s guide all sit in the mix. Columns such as MBS’s school visit also talk about speed to debut. Speed and a guide listing are different outcomes."),
        ],
        bullets: [
          L("授業期間：約3ヶ月（学校の主張する基礎）", "Class length: about three months (the school’s compressed basics)"),
          L("開店から掲載まで：11ヶ月（店の結果）", "Opening to listing: 11 months (the shop’s result)"),
          L("掲載枠：ビブグルマン（星ではない）", "Category: Bib Gourmand, not a star"),
          L("発信者：学校と運営が近い", "Messenger: the school and operator are close"),
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
    readMinutes: 7,
    related: ["michelin-in-eleven-months", "women-sushi-chefs", "how-to-read-school-marketing"],
    sources: [
      { title: "業界の最年少記録！？１０代の女性寿司職人がミシュランガイド掲載店で誕生", url: "https://www.nikkan.co.jp/releases/view/4068", publisher: "日刊工業新聞 電子版（企業リリース）" },
    ],
    intro: [
      L(
        "「最年少」「最速」は、学校の発信でもメディアでも目に入りやすい言葉です。飲食人大学の運営側は、高井虹歩さんが18歳で寿司を始め、19歳でミシュラン掲載店『鮨千陽』のカウンターに立ったと発表しています。これは例外の宣伝です。クラスの平均ではありません。",
        "“Youngest” and “fastest” travel in school posts and in the press. Inshokujin’s operator announced that Koharu Takai began sushi at 18 and stood at Michelin-listed Sushi Chiharu at 19. That is an exception in a press release. It is not the middle of the class.",
      ),
    ],
    keyPoints: [
      L("一次情報は第三者の長い追跡取材ではなく、企業リリース", "The primary source is a company release, not a long independent profile."),
      L("19歳で掲載店のカウンター、という速さは、店の設計と学校の近さの上に乗っている", "A counter at 19 sits on top of a designed shop that is close to the school."),
      L("入学前に聞くべきは最年少ではなく、卒業生の真ん中の就職先", "Before you enroll, ask for the middle of the class, not the edge."),
    ],
    sections: [
      {
        heading: L("一次情報は企業リリース", "The primary source is a company release"),
        body: [
          L("日刊工業新聞電子版に載った企業リリースによると、高井虹歩さんは18歳で寿司を始め、19歳でミシュラン掲載店『鮨千陽』のカウンターに立った、と運営会社が発表しています。氏名と年齢と店名は発表側の文面です。第三者の長い追跡取材ではありません。", "A company release republished by Nikkan Kogyo Shimbun says Koharu Takai began sushi at 18 and stood at Michelin-listed Sushi Chiharu at 19. The name, age, and shop come from the operator. That is not a long independent profile."),
          L("同じ運営が『鮨千陽』を、3ヶ月校の卒業生・生徒で回す店として設計していた、という文脈は別記事で説明しています。最年少の話は、その店の人材供給の延長として読むと距離が取れます。", "The same operator designed Sushi Chiharu to be run by a three-month school’s alumni and students — a context we explain in the Chiharu article. The youngest-chef story sits on that staffing model."),
        ],
        tip: L("最年少・最速の話は、入学後の平均年収や就職先分布より先に目に入ります。平均は学校に数字を求めてください。", "Youngest and fastest stories appear before average outcomes. Ask the school for the middle of the class, not the edge."),
      },
      {
        heading: L("例外を平均にしない", "Do not turn an edge into an average"),
        body: [
          L("10代でカウンターに立つ人は、体力、家族の理解、学費、住む場所が揃っていることが多いです。同じ授業を受けても、30代の転職者や、仕事を辞められない人の時計は違います。学校を比較するときは、例外の写真より、就職支援の中身と、卒業生が最初の職場で何をしているかを聞いてください。", "A teenager at the counter often has stamina, family support, tuition, and housing lined up. A 30-something career changer, or someone who cannot quit, is on a different clock even in the same classroom. Compare job-support details and first-year work, not the exceptional photo."),
        ],
        bullets: [
          L("例外：最年少・最速・掲載店", "Edge: youngest, fastest, listed shop"),
          L("平均：最初の就職先、給与帯、定着", "Middle: first job, pay band, whether people stay"),
          L("自分：辞められる期間と英語と資金", "You: how long you can quit, English, savings"),
        ],
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
    readMinutes: 9,
    related: ["english-schools-for-foreigners", "is-ten-year-apprenticeship-required", "working-holiday-and-sushi"],
    sources: [
      { title: "寿司職人になるには10年必要か？", url: "https://note.com/insyokujin_ac/n/nd5f361a90dd1", publisher: "飲食人大学 note" },
      { title: "ワーホリで30歳までに海外へ", url: "https://www.sushiacademy.co.jp/__/tags/t03", publisher: "東京すしアカデミー" },
      { title: "業界で話題の『飲食人大学』３カ月修行の寿司職人が海外へ挑戦", url: "https://prtimes.jp/main/html/rd/p/000000035.000013181.html", publisher: "PR TIMES" },
    ],
    intro: [
      L(
        "海外の寿司職人は日本より稼げる、という話は学校のページでも繰り返し出ます。不足している技能、ビザが通りやすい職種、という説明とセットです。数字の見出しの外には、英語、労働時間、チップ、滞在資格の更新、家族帯同があります。年収だけを比較すると、話が短くなりすぎます。",
        "School pages repeat that sushi chefs abroad can earn more than in Japan, paired with scarcity and relatively available visas. Outside the salary headline sit English, hours, tipping, visa renewal, and family visas. Comparing pay alone makes the story too short.",
      ),
    ],
    keyPoints: [
      L("学校は「不足」「高報酬」「ビザ」をセットで語ることが多い", "Schools often bundle scarcity, higher pay, and visas."),
      L("特定の卒業生店が海外出店した発表は、「誰でもその年収」ではない", "A graduate shop abroad is a project, not a salary for every graduate."),
      L("確認するのは学校の支援の有無と、実際の求人票の数字", "Check whether the school lists support, then verify numbers on a real offer."),
    ],
    sections: [
      {
        heading: L("よく見る数字", "The numbers you keep seeing"),
        body: [
          L("学校の発信では、海外では寿司職人が不足し、日本より高い報酬になりうる、と繰り返し書かれます。東京すしアカデミーは就労ビザが取りやすい職種の一つ、と説明しています。これは学校の整理であって、各国の移民局の保証ではありません。", "School pages repeat that sushi chefs are scarce abroad and can be paid more than in Japan. Tokyo Sushi Academy describes it as a job for which work visas can be comparatively available. That is the school’s framing, not a guarantee from any immigration office."),
          L("飲食人大学の卒業生店がシンガポールへ出た、という2017年の発表もあります。これは「誰でも高年収」ではなく、特定の店舗プロジェクトです。出店ニュースと、個人の雇用契約は別物です。", "A 2017 release said an Inshokujin-linked restaurant opened in Singapore. That is a specific shop project, not a salary for every graduate. A store opening is not your contract."),
        ],
      },
      {
        heading: L("欠けやすい情報", "What is usually missing"),
        body: [
          L("英語力、現地の労働時間、チップ文化、滞在資格の更新、家族帯同は、年収の見出しの外にあります。比較サイトとして言えるのは、海外就職支援の有無は学校ページで確認し、数字は公式の求人票で確認する、という手順だけです。", "English, hours, tipping, visa renewal, and family visas sit outside the salary headline. The only honest comparison-site advice is: check whether a school lists overseas support, then verify numbers on an actual job offer."),
        ],
        bullets: [
          L("支援：求人紹介があるか、渡航まで手伝いか", "Support: job leads only, or help through the move?"),
          L("言語：厨房英語で足りるか、接客英語が要るか", "Language: kitchen English, or guest-facing English?"),
          L("資格：ワーホリか就労ビザか、年齢上限はあるか", "Status: working holiday or work visa, and is there an age cap?"),
          L("契約：額面、税、住居、シフト、帰国費用", "Contract: gross pay, tax, housing, shifts, flight home"),
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
    readMinutes: 8,
    related: ["overseas-jobs-and-the-fine-print", "foreigners-who-train-in-tokyo", "how-to-read-school-marketing"],
    sources: [
      { title: "WELCOME TO TOKYO SUSHI ACADEMY", url: "https://www.sushischool.jp/", publisher: "Tokyo Sushi Academy (English)" },
      { title: "Sushi School in Tokyo | Ginza Onodera Chefs", url: "https://www.kudan-japanese-school.com/en/sushi_course.php", publisher: "Kudan Institute / Onodera" },
    ],
    intro: [
      L(
        "英語で寿司を学びたい、という検索の先には、2時間の観光クラスと、数週間〜数ヶ月の職人コースが混ざって並びます。金額も、査証も、卒業後に雇われる可能性も違います。最初に見るべきは「English OK」という一言ではなく、授業の言語と、学校がどの査証を想定しているかです。",
        "Search results for learning sushi in English mix two-hour tourist classes with multi-week chef courses. Price, visa, and whether anyone will hire you afterward all differ. The first check is not the phrase “English OK.” It is the language of the class and which visa the school expects.",
      ),
    ],
    keyPoints: [
      L("東京すしアカデミー英語サイトは、Google Meet相談・WhatsApp・国際コースを案内している", "The English Tokyo Sushi Academy site lists Google Meet, WhatsApp, and an international course."),
      L("語学学校＋寿司の1ヶ月プログラムは、2年の専門学校とは目的が違う", "A one-month language-plus-sushi mix is not a two-year culinary college."),
      L("「英語可」と「授業が英語」は別。シラバス・講師・書類・宿泊まで英語で出るか見る", "“English OK” is not “classes in English.” Check syllabus, teachers, paperwork, and housing."),
    ],
    sections: [
      {
        heading: L("公式に英語を出している例", "Schools that actually publish English"),
        body: [
          L("東京すしアカデミー英語サイトは、英語でのGoogle Meet相談やWhatsApp、インターナショナルコースを案内しています。創業以来、英語でプロ向けに教えてきたと自己紹介しています。観光客向けの握り体験ではなく、ナイフと魚の下処理まで含む、と謳っています。", "The English Tokyo Sushi Academy site advertises Google Meet consultations, WhatsApp, and an international course. It presents itself as teaching professionals in English since founding — knife work and fish prep, not only a tourist roll."),
          L("九段日本語学校と鮨 銀座おのでらは、日本語レッスンと寿司実習を組み合わせた1ヶ月プログラムを英語ページで出しています。語学学校＋寿司であり、2年の専門学校とは目的が違います。短期滞在で「日本の厨房を見る」用途に近いです。", "Kudan Japanese Institute and Sushi Ginza Onodera publish a one-month mix of language class and sushi practice. That is language school plus sushi, not a two-year culinary college. It is closer to seeing a Japanese kitchen on a short stay."),
        ],
        tip: L("「English OK」と「授業が英語」は違います。シラバスの言語、講師、査証の書類、宿泊まで英語で出るか確認してください。", "“English OK” is not “classes in English.” Check the language of the syllabus, teachers, visa paperwork, and housing."),
      },
      {
        heading: L("観光クラスとの線引き", "The line against tourist classes"),
        body: [
          L("全国のホテルや築地周辺には、2時間前後で握って食べる体験があります。料金は数千円〜数万円、査証は観光の範囲です。職人コースは数十万円〜、期間は週〜月単位、学校側が査証の種類を指定することがあります。同じ「sushi school」という英語でも、商品が違います。", "Hotels and Tsukiji-area studios offer two-hour roll-and-eat classes. They cost thousands to tens of thousands of yen and sit inside a tourist visa. Chef courses cost hundreds of thousands of yen, last weeks or months, and may specify a visa. The English phrase “sushi school” names both products."),
        ],
        bullets: [
          L("時間：2時間か、週単位か", "Time: two hours, or weeks?"),
          L("中身：握って食べるか、下処理までか", "Content: roll and eat, or fish prep too?"),
          L("査証：観光で足りるか、学校に文書で確認するか", "Visa: tourist enough, or ask the school in writing?"),
          L("その後：写真か、就職か", "After: a photo, or a job?"),
        ],
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
    readMinutes: 8,
    related: ["is-ten-year-apprenticeship-required", "no-license-required", "tuition-guide"],
    sources: [
      { title: "【2025年版】寿司専門学校の真実", url: "https://insyokujin.ac/recommend/5985/", publisher: "飲食人大学" },
      { title: "FAQ〈よくある質問〉", url: "https://www.sushiacademy.co.jp/faq", publisher: "東京すしアカデミー" },
    ],
    intro: [
      L(
        "寿司を学ぶ期間を調べると、2ヶ月〜3ヶ月のアカデミーと、1〜2年の認可専門学校が同じ一覧に並びます。違いは「速さ」だけではなく、卒業時に調理師免許が付くかどうかが大きいです。学校自身の解説でも、その分岐で読み手を分けています。",
        "Search results mix two- to three-month academies with one- to two-year licensed colleges. The difference is not only speed. A cook’s license at graduation is a large fork. Even school explainers split readers that way.",
      ),
    ],
    keyPoints: [
      L("認可専門学校は1〜3年で調理師免許や専門士が取りやすい、と短期校側も対比している", "Even short schools contrast licensed colleges (one to three years, cook’s license / diploma) with themselves."),
      L("東京すしアカデミーは専修学校ではないため、卒業だけでは調理師免許は出ない、とFAQに書いている", "Tokyo Sushi Academy’s FAQ states it is not a senmon gakko, so graduation alone does not confer the license."),
      L("国内のホテル・給食は免許を見ることがあり、海外の寿司店は技術と英語を見ることが多い", "Domestic hotels may look at the license. Overseas sushi bars more often look at skill and English."),
    ],
    sections: [
      {
        heading: L("免許が付く学校、付かない学校", "License vs no license"),
        body: [
          L("飲食人大学の解説記事は、認可専門学校は1〜3年で調理師免許や専門士が取りやすい、短期アカデミーは技術特化で免許は原則つかない、と対比しています。東京すしアカデミーのFAQも、専修学校ではないため卒業だけでは調理師免許は出ない、と書いています。両方とも「自分たちは技術の学校」と位置づけたうえでの対比です。", "Inshokujin’s explainer contrasts licensed colleges (one to three years, cook’s license / diploma) with short academies that focus on technique and generally do not grant the license. Tokyo Sushi Academy’s FAQ states it is not a senmon gakko, so graduation alone does not confer the license. Both frames are “we are the technique school.”"),
          L("免許が欲しい理由が、国内の施設就職や、家族が安心する証明書なら、2年制の方が話は単純です。理由が「早く現場に出たい」「海外の寿司店で働きたい」なら、短期＋店、または短期＋英語の方が時計に合いやすいです。", "If you want the license for a domestic institutional job, or as a certificate a family can understand, a two-year college is the simpler story. If you want to reach a kitchen fast, or work in a sushi bar abroad, short school plus a shop — or short school plus English — often fits the clock better."),
        ],
        tip: L("国内のホテルや給食、一部の就職票は免許を見ます。海外の寿司店は技術と英語を見ることが多い、というのが公開されている大きな分岐です。", "Domestic hotels and some job ads look at the license. Overseas sushi bars more often look at skill and English. That split is already public."),
      },
      {
        heading: L("時間とお金の見え方", "How time and money look"),
        body: [
          L("短期は学費が数十万〜100万円前後、生活費は数ヶ月。2年制は学費が数百万円、生活費も2年分です。短期のあとに無給に近い見習いが続くと、合計は専門学校に近づくことがあります。逆に2年制は授業時間は長いですが、在学中に現場の責任はまだ薄いことがあります。総額と、卒業直後に立つ場所をセットで見てください。", "Short courses often sit in the hundreds of thousands to around a million yen, with a few months of living costs. Two-year colleges cost millions plus two years of rent. If a short course is followed by poorly paid apprenticeship, the total can approach college. College has more classroom hours, but less kitchen responsibility while you are enrolled. Look at the full bill and where you stand the week after graduation."),
        ],
        bullets: [
          L("免許が要る就職先か", "Do your target employers ask for the license?"),
          L("辞められるのは何か月か", "How many months can you leave work?"),
          L("英語と査証の時計はあるか", "Is there an English or visa clock?"),
        ],
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
    readMinutes: 7,
    related: ["three-months-vs-two-years", "how-to-become-sushi-chef", "tuition-guide"],
    sources: [
      { title: "寿司職人に必要な資格は？", url: "https://sushiworks.jp/career/qualification/", publisher: "SUSHI WORKS" },
      { title: "寿司職人になるには｜キャリアガーデン", url: "https://careergarden.jp/sushishokunin/naruniha/", publisher: "キャリアガーデン" },
    ],
    intro: [
      L(
        "「寿司職人の資格」で検索すると、調理師免許の案内と、「なくても握れる」という案内が両方出ます。法律上、寿司を握るための国家資格はありません。ただし独立する店の衛生、ふぐ、採用票の欄は別問題です。必須と、あると通る場面を分けて説明します。",
        "Search “sushi chef license” and you get both cook’s-license pages and pages that say you can work without one. Japanese law does not require a national license to make sushi. Opening a shop, serving pufferfish, and job ads that tick “licensed cook” are separate. This article splits required from useful.",
      ),
    ],
    keyPoints: [
      L("寿司を握る国家資格は必須ではない、と進路解説サイトも明記している", "Career sites also state there is no required national license to make sushi."),
      L("食品衛生責任者は、営業許可の実務で効いてくる", "A food-hygiene manager certificate shows up in the practice of a permit."),
      L("ふぐは別免許。学校の「資格」欄は国家・民間・修了証が混ざることがある", "Pufferfish is a separate permit. A school’s “qualification” box may mix national, private, and completion certificates."),
    ],
    sections: [
      {
        heading: L("必須ではない、役に立つ", "Not required, sometimes useful"),
        body: [
          L("SUSHI WORKSは、寿司職人に必須の国家資格はないとしたうえで、調理師免許、食品衛生責任者、ふぐ調理師を「場面によって必要」と整理しています。キャリアガーデンも必須資格はないと書いています。握る行為そのものに免許は要らない、独立や特定の食材、施設就職で書類が要る、という分け方です。", "SUSHI WORKS states there is no required national license, then lists the cook’s license, food-hygiene manager certificate, and pufferfish permit as situationally needed. Career Garden also says no license is mandatory. The act of making sushi does not require a license. Opening a shop, certain fish, and some employers do."),
        ],
        bullets: [
          L("調理師免許：施設や求人票で見られることがある", "Cook’s license: some facilities and ads look for it"),
          L("食品衛生責任者：店を出す実務", "Food-hygiene manager: the practice of opening a shop"),
          L("ふぐ：扱うなら別の許可", "Pufferfish: a separate permit if you serve it"),
          L("学校の修了証：技能の証明にはなるが国家資格ではない", "School certificates: evidence of training, not a national license"),
        ],
        tip: L("学校パンフレットの「資格」欄は、国家資格・民間認定・修了証が混ざることがあります。名前を分解して聞いてください。", "A school’s “qualification” box may mix national licenses, private badges, and certificates of completion. Ask which is which."),
      },
      {
        heading: L("学校を選ぶときに使う", "How to use this when choosing a school"),
        body: [
          L("免許が欲しいなら認可専門学校の年限と、衛生講習が授業に含まれるかを先に見てください。免許が要らない進路（個人店、海外の寿司バー）なら、総授業時間と就職先の業態の方が効きます。どちらにせよ、ふぐを扱う店に行きたいなら、その許可を取れるルートがあるかを別途確認します。", "If you want the license, look first at a licensed college’s length and whether hygiene training is in the timetable. If you do not (independent shops, overseas sushi bars), total hours and the type of first job matter more. Either way, if you want a shop that serves pufferfish, ask separately how that permit is obtained."),
        ],
      },
    ],
  },
  {
    slug: "consultant-who-changed-careers",
    kind: "feature",
    title: L("コンサルを辞めて寿司へ。公開インタビューで語られた分岐", "Leaving consulting for sushi, in a public interview"),
    excerpt: L(
      "YouTube番組で、アクセンチュア勤務後に寿司店へ移った経緯が本人から語られています。年収の数字は番組側の見出しです。番組の中で語られた経緯を、こちらで要約します。",
      "In a YouTube interview, a former Accenture consultant describes moving into a sushi restaurant. Salary figures are the show’s headline. Here is a summary of what he says on camera.",
    ),
    date: "2026-08-22",
    category: catStory,
    image: "/images/portrait-chef-m30.jpg",
    readMinutes: 7,
    related: ["career-change-at-35-sushi-yuko", "school-then-shop-hybrid", "is-ten-year-apprenticeship-required"],
    sources: [
      { title: "【辞めアクセンチュア】年収約900万から寿司職人に転身した理由", url: "https://www.youtube.com/watch?v=H12_euXIpLg", publisher: "YouTube / Pivotter" },
    ],
    intro: [
      L(
        "高年収の会社員が寿司職人になる話は、再生されやすいです。公開されているYouTubeインタビューでは、話し手がアクセンチュアを経て寿司店で働き始めた経緯を本人が語っています。番組タイトルの年収は番組側の要約です。当サイトは給与明細を確認していません。ここでは、動機と時計だけを本文に落とします。",
        "Pay-cut-to-sushi stories travel. In a public YouTube interview, the speaker describes leaving Accenture for a sushi restaurant. The salary in the title is the show’s summary. We have not seen a payslip. This page keeps the motive and the clock.",
      ),
    ],
    keyPoints: [
      L("山梨出身、慶應SFC、アクセンチュア約4年半、2023年初めから寿司店、と本人が語っている", "He says: Yamanashi, Keio SFC, about four and a half years at Accenture, sushi restaurant from early 2023."),
      L("大学時代から寿司職人に関心があった、という語りが中心", "The core of the talk is that the interest started in university."),
      L("見出しの年収は番組側。労働時間や初期給与も、同じ動画の中で拾う", "The headline pay is the show’s. Hours and starting pay, if mentioned, sit in the same video."),
    ],
    sections: [
      {
        heading: L("本人が語っている範囲", "What he says on camera"),
        body: [
          L("公開されている動画説明と字幕によると、話し手は山梨出身、慶應義塾大学湘南藤沢キャンパスを経てアクセンチュアに約4年半勤め、2023年初めから寿司店で働き始めたと述べています。大学時代から寿司職人に関心があった、とも語っています。学校の宣伝というより、個人の転身インタビューです。", "According to the public description and captions, the speaker is from Yamanashi, attended Keio SFC, spent about four and a half years at Accenture, and began work at a sushi restaurant in early 2023. He also says the interest started in university. It is a personal interview more than a school ad."),
          L("番組タイトルの年収は番組側の要約です。転身の動機として「世界で戦える仕事」を寿司に見た、という語りが中心です。コンサルのプロジェクトと、毎日同じ仕込みを繰り返す仕事では、評価の単位が違います。その違和感が、動画の中で分岐として語られています。", "The salary in the title is the show’s summary. The core of the talk is seeing sushi as work that can travel. Consulting projects and repeating the same prep every day use different units of evaluation. That mismatch is the fork he describes."),
        ],
        tip: L("高年収からの転身記事は再生されやすいです。同じ動画の中の労働時間や初期給与も、可能ならメモしてください。", "Pay-cut stories travel. If the same video mentions hours and starting pay, write those down too."),
      },
      {
        heading: L("学校選びに使うなら", "If you use this to choose a school"),
        body: [
          L("この話は「コンサルを辞めたらすぐ大将」ではありません。店で働き始めた、という入口の話です。高年収からの転身では、最初の数年の手取りと勤務時間が、決断の本体になりやすいです。学校に行く場合は、卒業後の就職先の業態（個人店か、学校系列の店か、海外か）を先に聞いて、年収の幻想よりシフトの実態を合わせてください。", "This is not “leave consulting, become an owner.” It is walking into a restaurant. For a high-pay exit, the first years of take-home pay and hours are the real decision. If you use a school, ask what kind of first job graduates take — independent shop, school-linked shop, or abroad — and match shifts, not a fantasy salary."),
        ],
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
    readMinutes: 7,
    related: ["borrowed-counter-startups", "weekend-sushi-at-38", "career-change-at-35-sushi-yuko"],
    sources: [
      { title: "ワンオペ、週3日だけの鮨屋。50歳から「無理なく、自分らしく、長く続ける」働き方", url: "https://www.sushiacademy.co.jp/archives", publisher: "東京すしアカデミー ブログ" },
    ],
    intro: [
      L(
        "寿司学校の顧客は、20代の海外志望だけではありません。東京すしアカデミーは、51歳の上田厚太郎さんが早期退職のあと、自宅兼店舗の寿司屋を開いたと紹介しています。見出しはワンオペ、週3日です。長く続けるための独立、という語りです。",
        "Sushi schools are not only for people in their twenties who want to go abroad. Tokyo Sushi Academy introduced 51-year-old Kotaro Ueda as someone who took early retirement and opened a sushi shop attached to his home. The headline is one-person operation, three days a week — independence designed to last.",
      ),
    ],
    keyPoints: [
      L("早期退職後のセカンドキャリアとして、自宅兼店舗・週3日という開き方", "A second career after early retirement: home shop, three days a week."),
      L("ワンオペは人件費を抑える代わりに、仕入れから接客まで一人", "One-person service cuts payroll and puts buying through service on one person."),
      L("夜間・週末・短期のコースは、この需要向けに公開されている", "Night, weekend, and short courses exist on public lists for this demand."),
    ],
    sections: [
      {
        heading: L("学校ブログが伝えていること", "What the school blog says"),
        body: [
          L("東京すしアカデミーは、51歳の上田さんが長年の仕事を早期退職し、自宅兼店舗の寿司屋を開いたと紹介しています。見出しはワンオペ、週3日です。詳細な収支は記事見出しからは分かりません。わかっているのは、フルタイムの修行物語ではない働き方を、学校側が卒業生の型として出していることです。", "Tokyo Sushi Academy introduced 51-year-old Kotaro Ueda as someone who took early retirement and opened a sushi shop attached to his home. The headline is one-person operation, three days a week. The post does not give a full P&L in the listing blurb. What is clear is that the school is presenting a non-full-time path as a graduate pattern."),
        ],
        tip: L("セカンドキャリアは「若くして海外」と同じくらい、学校の顧客層です。夜間・週末・短期のコース表は、その需要に合わせて作られています。", "Second careers are as real a customer as “young and overseas.” Night, weekend, and short courses exist for that demand."),
      },
      {
        heading: L("週3日を現実の数字にする", "Turn three days a week into real numbers"),
        body: [
          L("営業しない日は休み、とは限りません。仕入れ、仕込み、告知、確定申告、設備のメンテナンスが入ります。自宅兼店舗は家賃を抑えられる一方、住宅と営業許可の境、近隣、家族の生活音が論点になります。学校に相談するときは、開業支援の中身が「物件紹介」なのか「衛生とメニューの相談」なのかを分けて聞いてください。", "Days without service are not automatically days off. Buying, prep, promotion, taxes, and equipment remain. A home shop can cut rent, and it raises the line between house and permit, neighbors, and family noise. When you ask a school about startup support, split “finding a site” from “hygiene and menu advice.”"),
        ],
        bullets: [
          L("資金：退職金や貯金で、最初の設備をどこまで出すか", "Money: how much of savings goes into the first kit"),
          L("体：立ち仕事と早朝仕入れを、週3でも続けられるか", "Body: standing and early buying, even three days a week"),
          L("家族：自宅営業の音と匂いと来客", "Family: noise, smell, and guests at home"),
        ],
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
    readMinutes: 7,
    related: ["english-schools-for-foreigners", "school-then-shop-hybrid", "working-holiday-and-sushi"],
    sources: [
      { title: "群馬から富山へ移住。元エンジニアが寿司職人としての人生をスタート", url: "https://www.sushiacademy.co.jp/archives", publisher: "東京すしアカデミー ブログ" },
      { title: "北陸すしアカデミー", url: "https://hokuriku-sushiacademy.jp/", publisher: "北陸すしアカデミー" },
    ],
    intro: [
      L(
        "寿司学校というと東京・大阪の校舎が先に出ます。養成校のブログは、群馬で機械エンジニアをしていた逸見祐輔さんが、富山の寿司店で働き始めたと紹介しています。県が「寿司」を観光の言葉にしている時期と重なる、地方側の入口の話です。",
        "Sushi school usually means Tokyo or Osaka campuses first. An academy blog says Yusuke Henmi, formerly a mechanical engineer in Gunma, started at a sushi shop in Toyama. It sits next to prefecture branding that treats sushi as a tourism word — an entrance on the producing side of the country.",
      ),
    ],
    keyPoints: [
      L("都市の学校以外に、産地側の店で働き始める公開例がある", "Public examples include starting in a shop on the fish-producing side, not only in Tokyo."),
      L("北陸すしアカデミーは東京すしアカデミー連携校として2026年開校を案内している", "Hokuriku Sushi Academy, linked with Tokyo Sushi Academy, announced 2026 courses."),
      L("移住は学費だけでなく、住居・家族・冬の生活の話になる", "A move is housing, family, and winter, not only tuition."),
    ],
    sections: [
      {
        heading: L("地方の学校と県のブランド", "Regional schools and prefecture brands"),
        body: [
          L("養成校のブログは、富山県が「寿司と言えば、富山」と打ち出している時期に、元エンジニアが現地の店で働き始めたと書いています。魚の産地に近い店は、仕入れの距離が短く、観光客向けの物語にも乗りやすいです。その代わり、給与水準や店の数、英語環境は都市部と違います。", "The academy blog places a former engineer in a Toyama shop during the prefecture’s “sushi means Toyama” branding. Shops near the fish can shorten purchasing and ride tourism stories. Pay, the number of shops, and English environments still differ from the cities."),
          L("北陸すしアカデミーは東京すしアカデミー連携校として2026年に開校を案内しています。ブランドとカリキュラムを都市側の学校と共有しつつ、通う場所を北陸に置く、という形です。東京に出る以外に、魚の産地側で働く進路も公開例があります。", "Hokuriku Sushi Academy, linked with Tokyo Sushi Academy, announced 2026 courses. It is a way to share a brand and curriculum while attending in Hokuriku. Public examples now include working on the fish-producing side of the country, not only moving to Tokyo."),
        ],
        tip: L("東京に出る以外に、魚の産地側で働く、という進路も公開例があります。", "Public examples now include working on the fish-producing side of the country, not only moving to Tokyo."),
      },
      {
        heading: L("エンジニアから現場へ", "From engineering to the counter"),
        body: [
          L("機械エンジニアから寿司へ、という転身は、手を使う仕事への憧れとして記事になりやすいです。現場では、図面の精度より、同じ工程の反復と、朝の仕入れに体が合うかが先です。地方移住とセットだと、仕事の適性に加えて、車、雪、家族の病院、友人関係が同時に動きます。学校の説明会では、就職先の都道府県まで聞いてください。", "Engineer-to-sushi stories travel as a romance of using your hands. In the shop, repeating a process and getting up for the market matter before drawing-board precision. Paired with a regional move, cars, snow, family doctors, and friends move at the same time. At an info session, ask which prefectures graduates actually work in."),
        ],
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
    readMinutes: 8,
    related: ["overseas-jobs-and-the-fine-print", "english-schools-for-foreigners", "is-ten-year-apprenticeship-required"],
    sources: [
      { title: "ワーホリで30歳までに海外へ！未経験から寿司職人で海外移住", url: "https://www.sushiacademy.co.jp/__/tags/t03", publisher: "東京すしアカデミー" },
    ],
    intro: [
      L(
        "ワーキングホリデーは国ごとに年齢上限があります。東京すしアカデミーは、寿司の技能と組み合わせて30歳までに海外へ、という特集ページを公式に出しています。学校の主張は「寿司は現地の雇用を奪いにくい技能職で、ビザが通りやすい」です。制度の時計と、学校の開講月を先に重ねる必要があります。",
        "Working-holiday schemes have age caps by country. Tokyo Sushi Academy publishes a feature that pairs sushi skill with leaving by 30. The school’s claim is that sushi is skilled work that does not easily displace local workers, so visas can be relatively available. Overlay the visa clock and the school’s start month first.",
      ),
    ],
    keyPoints: [
      L("ワーホリは年齢上限がある。2年の専門学校に通うと出国の期限に間に合わない人が出る", "Working holiday is age-capped. A two-year college can push some people past the deadline."),
      L("学校は寿司を「ビザが通りやすい技能」として説明している（各国の保証ではない）", "Schools describe sushi as a relatively visa-friendly skill — not a guarantee from any country."),
      L("技術の比較より先に、行きたい国の年齢と開講月を重ねる", "Overlay the country’s age cap and the school’s start month before comparing technique."),
    ],
    sections: [
      {
        heading: L("制度の時計と学校の時計", "Visa clock vs school clock"),
        body: [
          L("同校の特集ページは、寿司職人は現地の雇用を奪いにくい技能職としてビザが通りやすい、と説明しています。ワーホリは国によって年齢上限があります。2年の専門学校に通うと、出国の期限に間に合わない人が出ます。短期のアカデミーは、その期限に合わせるための道具、という位置づけです。", "The school’s feature page argues sushi is a skilled job that does not easily displace local workers, so visas can be relatively available. Working-holiday schemes have age caps. A two-year college can push some people past the deadline. A short academy is a tool for that deadline."),
          L("通りやすい、は「必ず出る」ではありません。英語、資金、犯罪経歴、その年の枠、雇用主の書類が揃うかは別です。学校の就職支援が、求人の紹介までか、ビザ書類までかで、自分でやる作業量が変わります。", "“Comparatively available” is not “you will get it.” English, money, police certificates, that year’s quota, and the employer’s paperwork are separate. Whether the school only introduces jobs or also helps with visa files changes how much you do yourself."),
        ],
        tip: L("国ごとの年齢と、学校の開講月を先に重ねてください。技術の比較は二番目です。", "Overlay the country’s age cap and the school’s start month first. Compare technique second."),
      },
      {
        heading: L("短期校を選ぶときの確認", "Checks if you pick a short school for this"),
        body: [
          L("卒業月が、行きたい国の申請ウィンドウに入るか。英語の授業があるか、それとも渡航先で覚える前提か。卒業生の渡航先がオーストラリア・カナダ・欧州のどこに偏っているか。これらはコースの「握りの上手さ」より先に効きます。", "Does the graduation month fall inside the country’s application window? Is English in the course, or is it assumed you will learn it after you land? Where do alumni actually go — Australia, Canada, Europe? Those questions bite before “who makes better nigiri.”"),
        ],
        bullets: [
          L("行きたい国の年齢上限（今の自分の年齢との差）", "Age cap of the country vs your age now"),
          L("申請に必要な月数（卒業→書類→渡航）", "Months from graduation to paperwork to flight"),
          L("学校の海外支援の範囲", "What overseas support the school actually lists"),
        ],
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
    readMinutes: 6,
    related: ["career-change-at-35-sushi-yuko", "how-to-read-school-marketing", "how-to-become-sushi-chef"],
    sources: [
      { title: "12年勤めた会社員の安定手放し、35歳で寿司職人に", url: "https://chanto.jp.net/articles/-/1009023", publisher: "CHANTO WEB" },
    ],
    intro: [
      L(
        "実在の養成学校がドラマの舞台になると、校名の検索は一気に増えます。CHANTOの鈴木裕子さん取材は、通った学校をTBSドラマ『時すでにおスシ!?』の舞台にもなった養成学校と紹介しています。視聴の感動と、入学金・総時間・卒業後の就職先は別の書類です。",
        "When a real school is used in a drama, search for the name spikes. CHANTO’s profile of Yuko Suzuki notes that her school was also used in a TBS drama. Feeling after an episode and the documents for tuition, hours, and graduate jobs are different paperwork.",
      ),
    ],
    keyPoints: [
      L("テレビは学校名を一気に知らせる。入学条件は脚本では決まらない", "Television can make a school famous in a week. Admission is not in the script."),
      L("比較に戻す数字は、総時間・学費・卒業後の公開例", "Return to hours, tuition, and published graduate paths."),
      L("ドラマの「3ヶ月で一人前」は演出。現場の時計は別記事で分解している", "“Pro in three months” on TV is staging. Other articles on this site unpack the real clock."),
    ],
    sections: [
      {
        heading: L("視聴と進路は別", "Watching is not enrollment"),
        body: [
          L("テレビは学校名を一気に知らせます。比較するときは、ドラマの感動より、総時間、学費、卒業後の就職先の公開例に戻ってください。ロケ地になった学校が悪いわけではありません。ロケ地であること自体は、カリキュラムの証明ではない、というだけです。", "Television can make a school famous in a week. When you compare, return to hours, tuition, and published graduate paths, not the plot. Being a location is not a mark against a school. It is also not proof of the curriculum."),
          L("ドラマは、未経験の主人公が短期間でカウンターに立つ展開を好みます。実際の公開プロフィールでは、学校のあとに店の年数が付くことが多いです。視聴後に資料請求するなら、体験レッスンで「卒業生の最初の1年」を聞くところまで進めてください。", "Dramas like a beginner at the counter after a short arc. Public profiles more often add restaurant years after school. If you request a brochure after watching, go as far as a trial class and ask what graduates do in year one."),
        ],
      },
      {
        heading: L("検索が増えたあとにやること", "What to do after the search spike"),
        body: [
          L("同じ条件で、ドラマに出ていない学校も含めて3校は並べてください。英語、夜間、地方、学費帯が違うと、ロケ地校が最適とは限りません。当サイトの比較とランキングは、その並べる作業のための表です。", "Line up at least three schools, including ones that were not on television, under the same filters. English, nights, region, and tuition band can make the location school the wrong fit. The compare and ranking pages on this site exist for that table."),
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
    readMinutes: 8,
    related: ["is-ten-year-apprenticeship-required", "michelin-in-eleven-months", "three-months-vs-two-years"],
    sources: [
      { title: "FAQ〈よくある質問〉", url: "https://www.sushiacademy.co.jp/faq", publisher: "東京すしアカデミー" },
      { title: "寿司職人になるには10年必要か？", url: "https://note.com/insyokujin_ac/n/nd5f361a90dd1", publisher: "飲食人大学 note" },
      { title: "CHANTO WEB 鈴木裕子さん取材", url: "https://chanto.jp.net/articles/-/1009023", publisher: "CHANTO WEB" },
    ],
    intro: [
      L(
        "養成学校のページには「数ヶ月で基礎が身につく」「プロとしてデビュー」といった短い言葉が並びます。公開されている成功例を分解すると、ほとんどが学校のあとに店があります。宣伝を否定する記事ではありません。短い言葉の中に、どの「プロ」が入っているかを分解する記事です。",
        "School pages stack short phrases: fundamentals in months, debut as a pro. Almost every public success story still has a shop after school. This is not an article against marketing. It is an article that unpacks which “pro” sits inside the short phrase.",
      ),
    ],
    keyPoints: [
      L("「プロ」が見習い採用か、カウンターか、予約の埋まる店主かで年数は全く違う", "Hired as a junior, trusted with nigiri, or booked solid as an owner are different clocks."),
      L("学校は前者を授業時間で語り、メディアは後者の写真を使いがち", "Schools talk about the first in classroom hours. Media often show photos of the last."),
      L("体験で聞く一文を決めておくと、パンフレットの速さに飲まれにくい", "One prepared question at a trial visit keeps brochure speed from swallowing you."),
    ],
    sections: [
      {
        heading: L("短い言葉の中身", "What the short phrase contains"),
        body: [
          L("「プロ」が、見習いとして雇われることなのか、カウンターで一貫を任されることなのか、店を持って予約が埋まることなのかで、必要な年数は全く違います。学校は前者までを授業時間で語り、メディアは後者の写真を使いがちです。同じ単語が、入口とゴールを同時に指しています。", "“Pro” can mean hired as a junior, trusted with nigiri, or booked solid in your own shop. Those clocks are different. Schools talk about the first in classroom hours. Media often show photos of the last. One word points at the door and the finish line at once."),
          L("東京すしアカデミーのFAQは、技術は反復で身につく身体技能だと説明しています。飲食人大学のnoteは、社会人や海外就職には短期が合理的だと主張しています。どちらも「基礎の入口に10年かけなくてよい」という主張としては一貫しています。「名前の出る大将」までは主張の範囲外です。", "Tokyo Sushi Academy’s FAQ describes the skill as a body technique from repetition. Inshokujin’s note argues a short course is rational for career changers and overseas jobs. Both are consistent as “you need not spend ten years on the doorway.” Famous ownership sits outside that claim."),
        ],
        tip: L("体験で聞く一文。「御校の卒業生が、最初の職場で最初の半年間に任される仕事は何ですか。」", "One question for a trial visit: “What work are your graduates trusted with in their first six months on the job?”"),
      },
      {
        heading: L("成功例の分解", "Unpack a success story"),
        body: [
          L("鈴木裕子さんの公開年表は、学校2ヶ月のあとに高級店約5年です。幸後綿衣さんの公開年表は、アカデミーのあとに名店で約10年です。『鮨千陽』のガイド掲載は、授業3ヶ月ではなく開店11ヶ月後の店の結果です。いずれも学校が無駄だった話ではありません。学校の月数だけで語ると足りない話です。", "Yuko Suzuki’s public timeline is two months of school then about five years in a high-end shop. Mei Kogo’s is an academy then about ten years in known restaurants. Sushi Chiharu’s guide listing is a shop result 11 months after opening, not three months of class. None of these say school was useless. All of them are incomplete if you only count school months."),
        ],
        bullets: [
          L("見出しの期間（学校）", "Headline length (school)"),
          L("本文の期間（店）", "Body length (shop)"),
          L("発信者（学校か、第三者か）", "Who is speaking (school or a third party)"),
          L("「プロ」の定義（雇われる／任される／店を持つ）", "Definition of “pro” (hired / trusted / owner)"),
        ],
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
    readMinutes: 8,
    related: ["english-schools-for-foreigners", "overseas-jobs-and-the-fine-print", "working-holiday-and-sushi"],
    sources: [
      { title: "WELCOME TO TOKYO SUSHI ACADEMY", url: "https://www.sushischool.jp/", publisher: "Tokyo Sushi Academy" },
      { title: "Tokyo Sushi Academy reviews", url: "https://www.tripadvisor.com/Attraction_Review-g14129610-d8779915-Reviews-Tokyo_Sushi_Academy-Tsukiji_Chuo_Tokyo_Tokyo_Prefecture_Kanto.html", publisher: "Tripadvisor" },
    ],
    intro: [
      L(
        "東京で寿司を学びたい外国人の検索には、築地の2時間体験と、英語で魚を下処理まで教える数週間のコースが混ざります。英語公式サイトやTripAdvisorの声は、後者を求めて来日する人がいることを示しています。観光ビザで長期の職人コースに入ろうとしないこと。それが最初の実務です。",
        "Foreigners searching for sushi in Tokyo mix two-hour Tsukiji experiences with multi-week courses that teach fish prep in English. English official sites and TripAdvisor comments show that some people fly in for the second. Do not sit a long chef course on a tourist visa. That is the first practical rule.",
      ),
    ],
    keyPoints: [
      L("プロ向け英語授業と、観光の握り体験は、時間・料金・査証が桁違い", "Professional English classes and tourist rolls differ in time, price, and visa by an order of magnitude."),
      L("学校の英語サイトは、ナイフから下処理まで教えると謳っている", "English school sites advertise teaching from knives through fish prep."),
      L("最初のメールで、想定する査証の種類を文書でもらう", "The first email should ask, in writing, which visa the school expects."),
    ],
    sections: [
      {
        heading: L("来日の目的を先に書く", "Write the purpose first"),
        body: [
          L("英語公式は、ナイフの扱いから魚の下処理まで、プロ向けに教えると謳っています。Tripadvisor上でも「英語で教えるプロの学校」という言及があります。一方、観光客向けの握り体験は全国にあり、金額も時間も桁が違います。同じ東京でも、商品が二つあります。", "The English official site says it teaches professionals from knife work to fish prep. Tripadvisor reviews also call it a professional school that teaches in English. Tourist roll classes exist all over Japan at a different price and length. Tokyo sells both products."),
          L("来日の目的が「写真と食事」なら体験クラスで足ります。目的が「自国や第三国で雇われるための基礎」なら、期間・総時間・就職支援・査証の話になります。目的を先に一文で書いてから学校を探すと、観光クラスの広告に吸い込まれにくくなります。", "If the purpose is a photo and a meal, a tourist class is enough. If the purpose is a foundation for being hired at home or in a third country, you are in a conversation about length, total hours, job support, and visas. Write the purpose in one sentence before you search, so tourist ads do not swallow you."),
        ],
        bullets: [
          L("体験：2時間前後、数千円〜数万円、観光ビザの範囲", "Experience: about two hours, thousands to tens of thousands of yen, tourist visa"),
          L("職人コース：週〜月、数十万円〜、学校が査証を指定することがある", "Chef course: weeks or months, hundreds of thousands of yen, school may specify a visa"),
          L("確認：授業言語、宿泊、保険、欠席の扱い", "Check: class language, housing, insurance, absence policy"),
        ],
        tip: L("観光ビザで長期の職人コースに入ろうとしないこと。学校に査証の種類を文書で確認するのが最初の手続きです。", "Do not try to sit a long chef course on a tourist visa. The first email should ask, in writing, which visa the school expects."),
      },
      {
        heading: L("来日前に学校へ送る質問", "Questions to send before you fly"),
        body: [
          L("授業はすべて英語か、通訳が付くのか、日本語が混ざるのか。宿泊は学校が紹介するか。魚のアレルギーや宗教上の制約を厨房が吸収できるか。卒業後に日本で就職する話があるのか、自国に戻る前提なのか。返信が英語で、かつ具体的なら、その学校は外国人向けの商品を本当に持っています。", "Are all classes in English, is there an interpreter, or is Japanese mixed in? Does the school help with housing? Can the kitchen absorb fish allergies or religious constraints? Is post-graduation work in Japan on the table, or is the assumption that you go home? If the reply is in English and specific, the school actually sells a foreigner-facing product."),
        ],
      },
    ],
  },
];
