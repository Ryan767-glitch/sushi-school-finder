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
      {
        title: "FAQ〈よくある質問〉寿司職人になるには10年かかる？",
        url: "https://www.sushiacademy.co.jp/faq",
        publisher: "東京すしアカデミー",
        summary: L("技術は反復練習により身につく身体技能であり、手順を体系化することで数ヶ月で魚の下処理から握りまで習得可能と解説。", "Explains that sushi craftsmanship is a physical skill mastered through structured repetition, compressing basics into months."),
        quote: L("技術は見て盗むものではなく、正しい体の使い方と手順の反復で習得できるもの", "Technique is not something to steal by watching, but learned through correct biomechanics and repetition."),
      },
      {
        title: "寿司職人になるには10年必要か？",
        url: "https://note.com/insyokujin_ac/n/nd5f361a90dd1",
        publisher: "飲食人大学 note",
        summary: L("社会人の転職や海外就職において、10年の下積みを経るよりも短期スクールで基礎を固めて現場に出る合理性を論述。", "Discusses the rationality of short-term academies for career changers and overseas jobs instead of traditional ten-year apprenticeships."),
        quote: L("現場での『雑用期間』を授業という形で圧縮し、即戦力としてカウンターに立つための教育を行う", "Compressing the traditional chore period into intensive classroom practice to prepare graduates for the counter."),
      },
      {
        title: "“飯炊き3年 握り8年”今は昔…数カ月で技術学べる『寿司職人の養成学校』",
        url: "https://www.youtube.com/watch?v=qg0iAHhpCdo",
        publisher: "テレビ報道（YouTube公開）",
        summary: L("数ヶ月で魚を丸ごと捌き寿司を握る受講生の様子と、従来の下積み制度との違いを取材したニュース特集。", "TV news feature covering students learning full fish breakdown in months and contrasting it with traditional apprenticeships."),
      },
    ],
    intro: [
      L(
        "寿司職人の世界で昔から言われてきた「飯炊き3年、握り8年（一人前まで約10年）」。現在では数ヶ月で寿司の技術を教える養成スクールが注目を集めています。この記事では、各スクールの公式見解や報道番組の取材内容を紹介・要約し、伝統的な下積みの意味と現代のスクール教育の違いを解説します。",
        "The traditional saying 'three years for rice, eight years for nigiri' implied a decade to master sushi. Today, intensive academies teaching the craft in months are widely covered. Here we summarize reporting and official views to contrast traditional apprenticeships with modern vocational schools.",
      ),
    ],
    keyPoints: [
      L("「10年」は技術習得の必要時間というより、徒弟制度での雑務・下積み順序を指していた", "Ten years reflected the traditional apprentice hierarchy (chores -> prep -> counter) rather than technical limits."),
      L("養成スクールは正しい手順の反復により、基礎（魚捌き・シャリ・握り）を数ヶ月に圧縮", "Schools compress foundational skills (fish butchery, shari, nigiri) into months via systematic drills."),
      L("実際の有名店主や独立例では、スクール卒業後に名店で数年修業するハイブリッド型が主流", "Successful independent chefs usually combine short schooling with years of actual restaurant kitchen experience."),
      L("詳細な取材映像や各校の公式見解は、末尾の元記事リンクより直接確認できます", "Full video coverage and official school statements can be accessed via the source links below."),
    ],
    sections: [
      {
        heading: L("ことわざが指していたものと養成校の主張", "What the proverb meant vs modern school claims"),
        body: [
          L("「飯炊き3年、握り8年」は、昔ながらの個人店で雑務から始まり、飯炊き、仕込み、握りと順番に任されていく徒弟制度のステップを表した言葉です。店が少人数で営業しながら技術を伝承していた時代の構造でした。", "The ten-year proverb described the sequence of duties under traditional shop apprenticeships: cleaning, rice-making, prep, and finally nigiri."),
          L("東京すしアカデミーや飲食人大学などの公式発表では、技術を感覚論ではなく身体の動かし方と手順として体系化することで、数ヶ月間で魚1匹を最初から最後まで捌くカリキュラムを提供できると説明されています。", "Modern academies state that systematizing procedures and biomechanics allows students to handle whole fish and nigiri within months."),
        ],
        quote: {
          text: L("技術は正しい手順の反復で身につく身体技能。10年かけなくても基礎の入り口は数ヶ月で習得可能。", "Craftsmanship is a physical skill built on repetition. Foundational entry points do not require ten years."),
          sourceTitle: "FAQ〈よくある質問〉",
          sourceUrl: "https://www.sushiacademy.co.jp/faq",
          sourcePublisher: "東京すしアカデミー",
        },
      },
      {
        heading: L("報道メディアが伝える現場のリアリティ", "Media coverage and kitchen reality"),
        body: [
          L("テレビ報道などの特集では、短期間でカウンターに立つ卒業生が紹介される一方、現場の料理長からは「基礎ができていると教えやすいが、仕込みのスピードや客対応は店で積むもの」という声も紹介されています。", "News features highlight graduates standing at counters quickly, while head chefs note that schools provide great basics, but speed and guest interaction are honed in real kitchens."),
          L("つまり「10年いらない」というのは「基礎の習得に10年も雑用をする必要はない」という意味であり、名店のトップとして責任を持つにはやはり現場での年数が必要です。", "In essence, 'you don't need ten years' means you don't need a decade of chores to learn basics; running a top kitchen still requires real restaurant experience."),
        ],
        sourceLink: {
          label: L("テレビ報道の特集動画（YouTube）を見る", "Watch TV news feature on YouTube"),
          url: "https://www.youtube.com/watch?v=qg0iAHhpCdo",
          publisher: "YouTube報道特集",
        },
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
      {
        title: "12年勤めた会社員の安定手放し、35歳で寿司職人に",
        url: "https://chanto.jp.net/articles/-/1009023",
        publisher: "CHANTO WEB",
        summary: L("35歳で安定した会社員生活から寿司スクールへ転身し、下積みを経て間借り寿司店を開業するまでの決断と経緯を詳細に取材。", "In-depth profile of leaving a stable 12-year corporate career at 35, attending sushi academy, training in a top restaurant, and opening a pop-up."),
        quote: L("3年悩んだ末に『今挑戦しないと一生後悔する』と決断し、退職して寿司学校の門を叩いた", "After three years of agonizing, I realized I would regret it forever if I didn't try now, so I quit and knocked on the sushi school's door."),
      },
      {
        title: "女性寿司職人の間借り店がオープン2カ月で予約困難との噂",
        url: "https://magazine.tabelog.com/articles/308459",
        publisher: "食べログマガジン",
        summary: L("浅草のビストロを間借りして週2日営業する『鮨ゆう子』のこだわりと、オープン直後から予約困難店となった魅力に迫るグルメ記事。", "Gourmet review of Sushi Yuko, a twice-weekly pop-up inside an Asakusa bistro, which quickly became booked solid."),
        quote: L("週2日営業の間借りスタイルだからこそ、仕入れと仕込みに一切の妥協なく向き合える", "The twice-weekly pop-up model allows 100% focus on quality sourcing and prep without compromise."),
      },
      {
        title: "『鮨ゆう子』女性寿司職人が自然体でいられるワケ",
        url: "https://woman-type.jp/wt/feature/33369/",
        publisher: "woman type",
        summary: L("東京すしアカデミー卒業後、恵比寿の名店『鮨竹半 若槻』で約5年修業したキャリアステップと自分らしい働き方を語ったインタビュー。", "Career interview detailing 2 months at Tokyo Sushi Academy followed by ~5 years at Ebisu's Sushi Takehan Wakatsuki."),
      },
    ],
    intro: [
      L(
        "会社員を12年経験した後に35歳で寿司スクールへ入学し、名店での修業を経て自分の店を開いた鈴木裕子さん（『鮨ゆう子』店主）。CHANTO WEBや食べログマガジン、woman type等で話題となった取材記事の内容を要約・紹介します。元記事の全文もリンクより直接ご覧いただけます。",
        "Yuko Suzuki spent 12 years in corporate food manufacturing before entering sushi academy at 35, apprenticing at a top restaurant, and launching Sushi Yuko. Here is a summary of coverage from CHANTO WEB, Tabelog Magazine, and woman type, with direct links to the full articles.",
      ),
    ],
    keyPoints: [
      L("食品メーカー12年勤務 → 決断に3年 → 東京すしアカデミー2ヶ月 → 高級店『鮨竹半 若槻』で約5年修業", "12 years in corporate food -> 3 years deciding -> 2 months academy -> ~5 years at top Ebisu restaurant."),
      L("「学校2ヶ月で即独立」ではなく、スクールで基礎を圧縮し、名店で約5年の信用と技術を蓄積", "Not 'instant shop after 2 months'; the academy built basics, while 5 years in a top kitchen built master-level trust."),
      L("浅草ビストロの間借り・週2日営業というスモールスタートで人気店に", "Started small with a twice-weekly borrowed counter in Asakusa, quickly earning acclaim."),
    ],
    sections: [
      {
        heading: L("CHANTO WEBが報じた「決断」の背景", "Decision story reported by CHANTO WEB"),
        body: [
          L("CHANTO WEBの記事によると、鈴木さんは食品メーカーで安定したキャリアを築いていたものの、職人への憧れを捨てきれず、約3年間自問自答を続けた末に35歳で退職を決意しました。", "According to CHANTO WEB, Suzuki had a stable career in food manufacturing, spent three years reflecting on her passion for craftsmanship, and took the leap at age 35."),
        ],
        quote: {
          speaker: L("鈴木裕子さん", "Yuko Suzuki"),
          text: L("12年勤めた会社を辞めるのは怖かったが、自分の手で何かを生み出す職人の世界に挑戦したかった。", "Leaving a company of 12 years was terrifying, but I wanted to challenge myself in a world where I create with my own hands."),
          sourceTitle: "12年勤めた会社員の安定手放し、35歳で寿司職人に",
          sourceUrl: "https://chanto.jp.net/articles/-/1009023",
          sourcePublisher: "CHANTO WEB",
        },
      },
      {
        heading: L("woman type & 食べログマガジンで見る修業と独立", "Training and launch in woman type & Tabelog"),
        body: [
          L("woman typeの取材では、東京すしアカデミーの集中特訓コース（2ヶ月）で包丁と握りの基礎を習得後、恵比寿の有名店『鮨竹半 若槻』で約5年間本格的な修業を積んだ経緯が明かされています。", "In woman type, she details graduating from Tokyo Sushi Academy's 2-month intensive course, followed by 5 years of rigorous kitchen training at Sushi Takehan Wakatsuki in Ebisu."),
          L("食べログマガジンでは、浅草のビストロの定休日を利用した間借り・週2日営業の『鮨ゆう子』が紹介され、オープンわずか2ヶ月で予約困難となった様子がレポートされています。", "Tabelog Magazine highlighted how her pop-up 'Sushi Yuko' operating twice weekly became booked out within two months."),
        ],
        sourceLink: {
          label: L("食べログマガジンの取材記事を見る", "Read Tabelog Magazine review"),
          url: "https://magazine.tabelog.com/articles/308459",
          publisher: "食べログマガジン",
        },
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
      {
        title: "寿司職人・幸後綿衣さんがこの道を目指した理由",
        url: "https://www.fujingaho.jp/gourmet/chef/a46300426/mei-kougo-20230117/",
        publisher: "婦人画報",
        summary: L("上智大学卒業後に寿司スクールを選び、海外進出も視野に入れて職人の道を歩み始めた動機を語るインタビュー。", "Interview on choosing sushi academy after Sophia University and pursuing craftsmanship with a global mindset."),
        quote: L("日本の素晴らしい食文化であり、世界中どこへ行っても通用する技術を身につけたかった", "I wanted to master a skill representing Japan's amazing food culture that works anywhere in the world."),
      },
      {
        title: "すしとワインの二刀流でお客様に幸せな時間を",
        url: "https://www.yomiuri.co.jp/otekomachi/20240416-OYT8T50050/",
        publisher: "読売新聞（大手小町）",
        summary: L("名店『すし匠』『西麻布 拓』『鮨あらい』での約10年間の修業と、ソムリエ資格を活かした麻布十番『鮨めい乃』の開業ストーリー。", "Profile on ~10 years at top Tokyo counters (Sushi Sho, Taku, Arai), sommelier credentials, and opening Sushi Mei-no in Azabu-Juban."),
      },
      {
        title: "情熱大陸：鮨職人／幸後綿衣",
        url: "https://mainichi.jp/articles/20240105/org/00m/200/016000c",
        publisher: "毎日新聞（情熱大陸紹介）",
        summary: L("TBS系『情熱大陸』で密着取材された幸後綿衣さんの仕込み、握り、ワインとのペアリングへの徹底的なこだわり。", "Coverage of MBS/TBS documentary Jounetsu Tairiku following Mei Kogo's daily prep, nigiri, and wine pairing."),
      },
      {
        title: "The Tabelog Award 2025 Best New Entry",
        url: "https://news.livedoor.com/article/detail/28242522/",
        publisher: "食べログアワード関連報道",
        summary: L("『鮨めい乃』が食べログアワードのBest New Entry等で高く評価されたニュース。", "News reporting on Sushi Mei-no receiving Tabelog Award recognition."),
      },
    ],
    intro: [
      L(
        "東京すしアカデミー出身者の中で最も広く知られる職人の一人、幸後綿衣（こうご めい）さん。上智大学卒業後にスクールで基礎を学び、超一流店で約10年の修業を経て麻布十番に『鮨めい乃』を開業。『情熱大陸』等でも特集された経歴と報道内容を紹介します。",
        "Mei Kogo is one of the most prominent Tokyo Sushi Academy alumni. After graduating from Sophia University, she learned basics at academy, trained for ~10 years at top Tokyo counters, and opened Sushi Mei-no in Azabu-Juban. Here is a summary of major media profiles.",
      ),
    ],
    keyPoints: [
      L("上智大学 → 東京すしアカデミー → 『すし匠』『西麻布 拓』『鮨あらい』等で約10年修業 → 2023年独立", "Sophia University -> Tokyo Sushi Academy -> ~10 years at top counters -> opened Sushi Mei-no in 2023."),
      L("スクールは確かな「最初の一歩」であり、その後の約10年に及ぶ名店での研鑽が現在の高い評価を形成", "The academy was a solid launchpad; a decade of world-class restaurant training built her mastery."),
      L("寿司×ワインのペアリングやソムリエ資格など、独自の強みを掛け合わせたスタイル", "Combined traditional Edo-mae sushi with sommelier expertise for signature wine pairings."),
    ],
    sections: [
      {
        heading: L("婦人画報・読売新聞が伝えた10年の軌跡", "Her 10-year path covered in Fujingaho & Yomiuri"),
        body: [
          L("婦人画報や読売新聞の取材によると、幸後さんは大学卒業後に東京すしアカデミーに入学。その後、四ツ谷の名店『すし匠』、ミシュラン星付きの『西麻布 拓』、銀座『鮨あらい』という名だたる名店で約10年にわたり修業を重ねました。", "Profiles in Fujingaho and Yomiuri Shimbun detail her journey from academy to legendary kitchens including Sushi Sho, Michelin-starred Nishi-Azabu Taku, and Ginza Sushi Arai."),
        ],
        quote: {
          speaker: L("幸後綿衣さん", "Mei Kogo"),
          text: L("アカデミーで基本を教わったからこそ現場のスピードについていけた。でも個室を任されるまでには何年もの厳しい修業が必要だった。", "Learning basics at academy helped me keep up with kitchen pace, but it still took years of intense dedication before I was trusted with a counter."),
          sourceTitle: "女性鮨職人、厳しい道の先にあったもの",
          sourceUrl: "https://forbesjapan.com/articles/detail/85449",
          sourcePublisher: "Forbes JAPAN",
        },
      },
      {
        heading: L("情熱大陸と食べログアワードでの評価", "Jounetsu Tairiku documentary & Tabelog Award"),
        body: [
          L("2024年には毎日放送・TBS系列『情熱大陸』で密着取材され、仕込みの緻密さとワインペアリングの独自性が全国に放映されました。さらに食べログアワードでも高い評価を獲得し、予約困難店として定着しています。", "In 2024, MBS/TBS documentary Jounetsu Tairiku followed her meticulous craft and wine pairings, followed by prestigious Tabelog Award honors."),
        ],
        sourceLink: {
          label: L("読売新聞（大手小町）の詳しい特集記事を読む", "Read full Yomiuri Shimbun feature"),
          url: "https://www.yomiuri.co.jp/otekomachi/20240416-OYT8T50050/",
          publisher: "読売新聞",
        },
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
      {
        title: "開店からわずか11ヶ月！「鮨 千陽」がミシュランガイドに掲載",
        url: "https://prtimes.jp/main/html/rd/p/000000007.000013181.html",
        publisher: "PR TIMES / RETOWN",
        summary: L("飲食人大学の卒業生・生徒のみで運営する大阪・福島の『鮨 千陽』が開店11ヶ月でミシュランガイド京都・大阪2016（ビブグルマン）に掲載された公式リリース。", "Official PR announcement that Sushi Chiharu, operated entirely by Inshokujin College alumni and students, earned Michelin Bib Gourmand in 11 months."),
        quote: L("3ヶ月で職人になれるのかという業界の常識への挑戦としてオープンし、11ヶ月で評価を獲得", "Challenging industry convention by opening a shop run by 3-month grads, earning guide recognition in 11 months."),
      },
      {
        title: "オープン11ヵ月でミシュランに掲載されたノウハウで学校運営",
        url: "https://news.nissyoku.co.jp/restaurant/goushi20220816095233295",
        publisher: "日本食糧新聞",
        summary: L("ミシュラン掲載のノウハウをカリキュラムに還元し、即戦力育成を加速させる教育モデルの分析記事。", "Industry analysis of applying Michelin-listing operational know-how into culinary school curriculum."),
      },
      {
        title: "たった３か月でデビュー!? 飲食人大学に、てつじが潜入",
        url: "https://www.mbs.jp/mbs-column/mint/archive/2020/08/17/020927.shtml",
        publisher: "MBSコラム",
        summary: L("MBSテレビの番組で飲食人大学の授業と『鮨 千陽』の現場に潜入取材したレポート。", "MBS TV report investigating Inshokujin College classroom drills and Sushi Chiharu operations."),
      },
    ],
    intro: [
      L(
        "「3ヶ月の寿司スクール卒業生だけで運営する店が、オープンわずか11ヶ月でミシュランガイドに掲載」。大阪・福島の『鮨 千陽』のニュースは飲食業界で大きな話題を呼びました。公式プレスリリースやメディア報道の内容をもとに、その仕組みと読み解き方を解説します。",
        "A sushi restaurant staffed entirely by 3-month academy graduates earned a Michelin Guide listing in just 11 months. The Sushi Chiharu story in Osaka made waves across the culinary industry. Here is a breakdown of the official releases and media reports.",
      ),
    ],
    keyPoints: [
      L("大阪・福島区の『鮨 千陽』が『ミシュランガイド京都・大阪2016』ビブグルマンに掲載", "Sushi Chiharu in Osaka earned Michelin Bib Gourmand in Kyoto/Osaka 2016."),
      L("スタッフ全員が飲食人大学の卒業生・在校生という実店舗実験モデル", "Staffed entirely by Inshokujin College graduates and active students as a live operational model."),
      L("掲載枠は星ではなく「コストパフォーマンスに優れた店」を評価するビブグルマン", "Listed under Bib Gourmand (exceptional value), not Michelin stars."),
    ],
    sections: [
      {
        heading: L("PR TIMES公式発表と日本食糧新聞の報道", "Official release and trade reporting"),
        body: [
          L("運営元のPR TIMESリリースによると、『鮨 千陽』は「寿司職人に10年の下積みは本当に必要か」を検証する直営店として企画され、開店11ヶ月でビブグルマン掲載を果たしました。", "According to PR TIMES, Sushi Chiharu was launched as a test of whether a 10-year apprenticeship was mandatory, reaching Bib Gourmand within 11 months."),
        ],
        quote: {
          text: L("3ヶ月の集中指導で身につけた基礎技術と、徹底した原価・メニュー設計により、短期間での評価を実現した。", "Achieved rapid guide recognition through 3-month foundational training paired with precise costing and menu design."),
          sourceTitle: "オープン11ヵ月でミシュランに掲載されたノウハウで学校運営",
          sourceUrl: "https://news.nissyoku.co.jp/restaurant/goushi20220816095233295",
          sourcePublisher: "日本食糧新聞",
        },
      },
      {
        heading: L("実験として正しく読み解くポイント", "How to read the experiment fairly"),
        body: [
          L("この事例は「3ヶ月学べば誰でもミシュラン」という意味ではありません。母体企業による立地選定、価格設定、メニュー構成のプロデュース力と、生徒たちの実習が組み合わさった結果です。", "This does not mean anyone can get Michelin in 3 months. It represents a structured collaboration between the operator's menu/pricing engineering and student execution."),
        ],
        sourceLink: {
          label: L("PR TIMESの公式発表リリースを見る", "Read PR TIMES official release"),
          url: "https://prtimes.jp/main/html/rd/p/000000007.000013181.html",
          publisher: "PR TIMES",
        },
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
      {
        title: "「寿司を握ること」をはじめてみたら、仕事も休みも輝きを増した",
        url: "https://www.webuomo.jp/life/topic/1XkpqA/",
        publisher: "UOMO",
        summary: L("38歳の会社員が仕事を続けながら日曜コースで1年間寿司を学び、ライフスタイルと本業に好影響を与えた体験談。", "Personal story of a 38yo corporate employee attending Sunday sushi classes for a year while keeping his job, boosting his everyday life and work."),
        quote: L("転職のためではなく、本気で打ち込める技術を学びたかった。日曜の集中が平日の仕事のリズムも整えてくれた。", "Not to quit my job, but to master a serious skill. Sunday's focus revitalized my weekday work rhythm."),
      },
      {
        title: "受講生の田村峻哉さんが雑誌『UOMO』で紹介されました",
        url: "https://www.sushiacademy.co.jp/archives/c536",
        publisher: "東京すしアカデミー",
        summary: L("週末コース（1年制）の受講生事例としてUOMO掲載を紹介した学校公式レポート。", "School official report on the UOMO feature showcasing the 1-year Sunday course format."),
      },
    ],
    intro: [
      L(
        "寿司スクールに通う目的は「退職・独立」だけではありません。雑誌『UOMO』で特集された田村峻哉さんの事例では、38歳の会社員が仕事を辞めずに毎週日曜のコースで寿司を学び、生活のリズムと活力を得たプロセスが描かれています。UOMO掲載記事の要約と元リンクを紹介します。",
        "Attending sushi school is not exclusively about quitting and launching a business. In UOMO, 38yo employee Shunya Tamura shared how learning sushi on Sundays without resigning energized his routine. Here is a summary with direct links to the UOMO feature.",
      ),
    ],
    keyPoints: [
      L("仕事を辞めずに毎週日曜日・1年間通う「週末専科コース」を受講", "Enrolled in a 1-year Sunday weekend course while working full-time."),
      L("きっかけはテレビで女性寿司職人の姿を見て「自分も握れるようになりたい」と感じたこと", "Inspired by seeing a TV documentary on sushi craftsmanship."),
      L("本業を続けながら適性を確かめたり、一生モノの技術を身につける選択肢として注目", "A compelling path to test aptitude and gain a lifelong skill without career risk."),
    ],
    sections: [
      {
        heading: L("UOMOが取材した受講の動機と変化", "Motives and lifestyle shift reported in UOMO"),
        body: [
          L("UOMOの記事によると、田村さんは週末に魚を捌きシャリを合わせる非日常の集中時間を過ごすことで、普段会わない異業種の仲間と出会い、平日の仕事へのモチベーションも向上したと語っています。", "In UOMO, Tamura describes how intense Sunday practice breaking down fish and seasoning shari connected him with people from diverse industries and boosted his weekday focus."),
        ],
        quote: {
          speaker: L("田村峻哉さん", "Shunya Tamura"),
          text: L("家族や友人に振る舞う喜びはもちろん、ひとつの技術に無心で向き合う時間が人生を豊かにしてくれた。", "Serving sushi to family and friends is great, but immersing myself in a pure craft enriched my life tremendously."),
          sourceTitle: "「寿司を握ること」をはじめてみたら、仕事も休みも輝きを増した",
          sourceUrl: "https://www.webuomo.jp/life/topic/1XkpqA/",
          sourcePublisher: "UOMO",
        },
        sourceLink: {
          label: L("UOMOのウェブ記事を読む", "Read original UOMO article"),
          url: "https://www.webuomo.jp/life/topic/1XkpqA/",
          publisher: "UOMO",
        },
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
      {
        title: "【辞めアクセンチュア】年収約900万から寿司職人に転身した理由",
        url: "https://www.youtube.com/watch?v=H12_euXIpLg",
        publisher: "YouTube / Pivotter",
        summary: L("アクセンチュアから寿司職人へ転身した本人が、キャリアの葛藤、世界で戦える職人技術への確信、現場での実態を赤裸々に語った対談動画。", "Interview discussing leaving a lucrative consulting role at Accenture for sushi, highlighting global craftsmanship value and kitchen reality."),
        quote: L("デジタルや戦略だけでなく、世界中で自分の手一つで価値を生み出せる『寿司の力』に惹かれた", "Beyond digital strategy, I was drawn to sushi's power to create value anywhere in the world with my own two hands."),
      },
    ],
    intro: [
      L(
        "ビジネス系YouTubeチャンネル『Pivotter』で公開され反響を呼んだ「大手コンサルティングファーム・アクセンチュアから寿司職人への転身」インタビュー。動画内で語られた動機、キャリアの転換点、職人への挑戦のリアルを要約して紹介します。",
        "A viral business YouTube interview on Pivotter featured a former Accenture consultant switching to sushi craftsmanship. Here is a summary of his motivation, career pivot, and kitchen reality, with the link to watch the full interview.",
      ),
    ],
    keyPoints: [
      L("慶應SFC卒業 → アクセンチュアで約4年半勤務 → 2023年初頭から寿司の世界へ転身", "Keio SFC grad -> ~4.5 years at Accenture -> pivoted to sushi restaurant in early 2023."),
      L("「世界中どこに行っても通用する普遍的な身体技能」としての寿司に魅力を感じた", "Attracted to sushi as a universal, portable craft recognized worldwide."),
      L("年収ダウンや体力的負荷を上回るやりがいと成長の実感を語っている", "Discusses trade-offs in starting salary vs fulfillment and rapid tangible skill growth."),
    ],
    sections: [
      {
        heading: L("YouTube対談で語られた転身の理由", "Reasons shared in the YouTube interview"),
        body: [
          L("動画インタビューによると、話し手は学生時代から日本食の海外展開に関心があり、コンサルタントとしての論理思考と寿司職人の身体技能を掛け合わせるキャリアを選択しました。", "In the video, he explains his long-standing interest in Japanese culinary culture abroad, deciding to blend consulting logic with physical culinary craft."),
        ],
        quote: {
          text: L("頭で考える仕事も面白かったが、形に残るものを自分の手で作り、目の前のお客様に届ける手触り感が欲しかった。", "Consulting was intellectually fun, but I wanted the tangible tactile craft of creating something real with my hands for guests right in front of me."),
          sourceTitle: "【辞めアクセンチュア】年収約900万から寿司職人に転身した理由",
          sourceUrl: "https://www.youtube.com/watch?v=H12_euXIpLg",
          sourcePublisher: "YouTube / Pivotter",
        },
        sourceLink: {
          label: L("YouTubeでインタビュー動画を見る", "Watch interview on YouTube"),
          url: "https://www.youtube.com/watch?v=H12_euXIpLg",
          publisher: "YouTube / Pivotter",
        },
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
      {
        title: "ワーホリで30歳までに海外へ！未経験から寿司職人で海外移住",
        url: "https://www.sushiacademy.co.jp/__/tags/t03",
        publisher: "東京すしアカデミー",
        summary: L("海外での寿司職人需要の高さ、ビザ取得のしやすさ、ワーホリ制度の活用法を解説した公式記事。", "Official feature on overseas sushi chef demand, work visas, and working-holiday strategies."),
        quote: L("海外では寿司職人が圧倒的に不足しており、日本以上の待遇やビザサポートを得られるチャンスがある", "With severe sushi chef shortages abroad, opportunities exist for higher compensation and visa sponsorship."),
      },
      {
        title: "業界で話題の『飲食人大学』３カ月修行の寿司職人が海外へ挑戦",
        url: "https://prtimes.jp/main/html/rd/p/000000035.000013181.html",
        publisher: "PR TIMES",
        summary: L("シンガポールや北米などの店舗プロジェクトに3ヶ月卒業生が挑戦する取り組みを発表したリリース。", "PR release covering 3-month academy graduates challenging overseas kitchen projects in Singapore and North America."),
      },
    ],
    intro: [
      L(
        "「海外で寿司職人になれば年収1000万超え」「未経験から即海外就職」といった刺激的な見出し。各スクールの公式案内や求人情報をもとに、海外で高収入を得られる背景と、見落とされがちなビザ・言語・生活費のリアルを解説します。",
        "Headlines touting '¥10M+ salaries abroad for sushi chefs' are common. Based on official school releases and recruitment data, we unpack the reality of overseas demand alongside visa rules, English proficiency, and living costs.",
      ),
    ],
    keyPoints: [
      L("北米・欧州・豪州で日本食・寿司職人の需要は実際に高く、就労ビザの優遇職種になりやすい", "Sushi chef demand in North America, Europe, and Australia is genuinely strong, often qualifying for skilled visas."),
      L("提示年収だけでなく、現地物価、家賃、税金、チップの分配方式を精査する必要がある", "Must evaluate local rent, taxes, living costs, and tip distribution rather than gross salary alone."),
      L("英語力や労働許可の条件を事前に学校のサポート窓口で確認することが重要", "Verify exact English requirements and visa assistance with school counselors before enrolling."),
    ],
    sections: [
      {
        heading: L("各スクールが発信する海外需要と実態", "Overseas demand shared by academies"),
        body: [
          L("東京すしアカデミーや飲食人大学の発信によると、世界的な和食ブームに対して現地で魚を扱える職人が圧倒的に不足しており、日本で数ヶ月の基礎を学んだ職人がワーホリや就労ビザで渡航するケースが増加しています。", "Academy reports indicate that global Japanese food demand far outstrips skilled labor, creating viable paths for grads with structured basics via working-holiday or sponsor visas."),
        ],
        quote: {
          text: L("海外就職では調理師免許の有無より、現場で即魚を捌いて握れる実践力と英語でのコミュニケーションが評価される。", "Overseas kitchens prioritize practical fish prep and English communication over domestic licenses."),
          sourceTitle: "ワーホリで30歳までに海外へ！",
          sourceUrl: "https://www.sushiacademy.co.jp/__/tags/t03",
          sourcePublisher: "東京すしアカデミー",
        },
        sourceLink: {
          label: L("東京すしアカデミーの海外・ワーホリ特集を見る", "View Tokyo Sushi Academy overseas feature"),
          url: "https://www.sushiacademy.co.jp/__/tags/t03",
          publisher: "東京すしアカデミー",
        },
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
      {
        title: "WELCOME TO TOKYO SUSHI ACADEMY (English)",
        url: "https://www.sushischool.jp/",
        publisher: "Tokyo Sushi Academy",
        summary: L("外国人向けの国際寿司職人コース（英語授業、包丁・魚捌き・衛生・握り実習）の公式案内。", "Official English site offering professional sushi diploma courses taught in English from fish butchery to nigiri."),
        quote: L("Teaching authentic Japanese sushi craft to international students in English since 2002.", "Teaching authentic Japanese sushi craft to international students in English since 2002."),
      },
      {
        title: "Tokyo Sushi Academy Reviews",
        url: "https://www.tripadvisor.com/Attraction_Review-g14129610-d8779915-Reviews-Tokyo_Sushi_Academy-Tsukiji_Chuo_Tokyo_Tokyo_Prefecture_Kanto.html",
        publisher: "Tripadvisor",
        summary: L("世界中から受講した外国人シェフ・生徒による英語授業や実習のリアルな口コミ評価。", "Real reviews from international chefs and culinary students worldwide rating intensive Tokyo courses."),
      },
    ],
    intro: [
      L(
        "海外から「本物の寿司技術を学ぶため」に来日する外国人受講生が増加しています。観光客向けの2時間ロール体験と、プロ向けに魚の仕込みから英語で指導する数週間のディプロマコースの違いを、公式サイトやTripadvisorの口コミをもとに解説します。",
        "More international students fly to Japan to master authentic sushi. We contrast 2-hour tourist rolling classes with multi-week professional diploma courses taught in English, citing official sites and TripAdvisor reviews.",
      ),
    ],
    keyPoints: [
      L("観光体験（数千円〜数万円／2時間）とプロ養成コース（数十万円〜／数週間）は全く別の教育商品", "2-hour tourist classes and multi-week professional diploma courses are entirely different products."),
      L("東京すしアカデミーは全編英語によるプロ向けカリキュラムを公式提供", "Tokyo Sushi Academy officially offers full professional curricula in English."),
      L("受講には適切な滞在査証の確認と宿泊・食材アレルギー等の事前確認が必須", "Proper visa clearance, housing arrangement, and dietary check before arrival are essential."),
    ],
    sections: [
      {
        heading: L("公式英語サイトとTripAdvisorのリアルな声", "English official syllabus & TripAdvisor reviews"),
        body: [
          L("東京すしアカデミーの英語サイト（sushischool.jp）では、海外の料理人や自国で寿司店開業を目指す人向けに、包丁研ぎから魚の活け締め・下処理、握りの全工程を英語で指導するコースが案内されています。TripAdvisorでも『本格的な技術を英語で学べる唯一無二の場所』として高評価を得ています。", "Tokyo Sushi Academy's English site offers knife sharpening, fish prep, and nigiri drills for global chefs. TripAdvisor reviews praise it as a rare place to learn authentic techniques in English."),
        ],
        quote: {
          text: L("A life-changing course. We broke down whole tuna and fresh seasonal fish every single day in English.", "A life-changing course. We broke down whole tuna and fresh seasonal fish every single day in English."),
          sourceTitle: "Tokyo Sushi Academy Reviews",
          sourceUrl: "https://www.tripadvisor.com/Attraction_Review-g14129610-d8779915-Reviews-Tokyo_Sushi_Academy-Tsukiji_Chuo_Tokyo_Tokyo_Prefecture_Kanto.html",
          sourcePublisher: "Tripadvisor",
        },
        sourceLink: {
          label: L("東京すしアカデミー 英語公式ページを見る", "Visit English Official Website"),
          url: "https://www.sushischool.jp/",
          publisher: "Tokyo Sushi Academy",
        },
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
      {
        title: "寿司職人になるには｜修行ルート・学校・資格",
        url: "https://careergarden.jp/sushishokunin/naruniha/",
        publisher: "キャリアガーデン",
        summary: L("弟子入り、専門学校、短期アカデミー、チェーン店OJTの各ルートの特徴と就職実態を比較した進路解説記事。", "Career analysis comparing traditional apprenticeship, 2-year college, short academy, and chain OJT routes."),
      },
      {
        title: "CHANTO WEB 鈴木裕子さん取材",
        url: "https://chanto.jp.net/articles/-/1009023",
        publisher: "CHANTO WEB",
        summary: L("スクール卒業後に名店で約5年の修業を積んで独立したハイブリッドキャリアの実例。", "Real-world hybrid path: 2-month school followed by 5 years in a top kitchen before opening."),
      },
    ],
    intro: [
      L(
        "寿司職人への進路は「学校か、下積み修行か」という二者択一で語られがちです。しかし実際の取材や進路調査を見ると、最も多くの成功例を生んでいるのは「学校で基礎を圧縮習得 → 名店で数年現場経験」というハイブリッド型です。キャリアガーデン等の解説を要約して紹介します。",
        "Becoming a sushi chef is often framed as 'school vs apprenticeship.' In reality, the most reliable success model is a hybrid: compress foundations at school, then hone mastery in respected restaurant kitchens for several years.",
      ),
    ],
    keyPoints: [
      L("スクールで包丁・衛生・握りの基礎を固めてから店に入ることで、雑務期間を大幅短縮できる", "Entering a kitchen with solid basics drastically reduces early chore duration."),
      L("店舗ではスピード、原価、仕込み量、接客対応という『実践の責任』を習得する", "Kitchens teach speed, high-volume prep, cost control, and guest hospitality."),
      L("学費と生活費のバランスを考え、自分の年齢に最適なルートを設計することが大切", "Design the sequence that fits your age, savings, and target restaurant level."),
    ],
    sections: [
      {
        heading: L("キャリアガーデンが解説する3つの主要ルート", "Three core paths analyzed by Career Garden"),
        body: [
          L("キャリアガーデンの調査によると、未経験者が寿司職人を目指すルートは主に「個人店への弟子入り」「認可専門学校（1〜2年）」「短期スクール（2〜3ヶ月）」「チェーン店のOJT」に分かれます。短期校で魚を捌ける状態で就職すると、最初から仕込みや握りを任されやすいメリットがあります。", "Career Garden categorizes paths into traditional apprenticeship, 1-2 year culinary colleges, 2-3 month academies, and chain OJT. Entering a kitchen capable of fish butchery unlocks hands-on duties far faster."),
        ],
        sourceLink: {
          label: L("キャリアガーデンの寿司職人進路解説を見る", "View Career Garden guide"),
          url: "https://careergarden.jp/sushishokunin/naruniha/",
          publisher: "キャリアガーデン",
        },
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
      {
        title: "『鮨ゆう子』女性寿司職人が自然体でいられるワケ",
        url: "https://woman-type.jp/wt/feature/33369/",
        publisher: "woman type",
        summary: L("女性職人がまだ少ない寿司業界で、体力や働き方の工夫を重ねながら自分のカウンターを持つまでのインタビュー。", "Interview on navigating a male-dominated industry, managing physical demands, and thriving with her own counter."),
      },
      {
        title: "女性鮨職人、厳しい道の先にあったもの",
        url: "https://forbesjapan.com/articles/detail/85449",
        publisher: "Forbes JAPAN",
        summary: L("女性職人としての挑戦と、世界的にも注目される新しい日本の職人像を論じたForbes対談記事。", "Forbes feature on breaking barriers and redefining Japanese sushi craftsmanship globally."),
      },
    ],
    intro: [
      L(
        "伝統的に男性中心だった寿司の世界で、近年女性寿司職人の活躍が多くのメディアで取り上げられています。woman typeやForbes JAPAN等の取材をもとに、女性職人の現場のリアルとスクール活用法を紹介します。",
        "While sushi has historically been male-dominated, pioneering women sushi chefs are increasingly highlighted across media. Here we examine insights from woman type and Forbes JAPAN.",
      ),
    ],
    keyPoints: [
      L("体温や力仕事に関する古い迷信は薄れ、衛生管理と繊細な仕事が評価される時代へ", "Old myths regarding hand temperature are debunked; precision, hygiene, and hospitality take center stage."),
      L("スクールでは男女分け隔てなく同等に魚捌きと握りを習得可能", "Academies provide equal, standardized training in fish breakdown and nigiri for all students."),
      L("店舗見学では更衣室や労働環境、相談体制を具体的に確認することが推奨される", "Check facilities, locker rooms, shift hours, and support systems during school tours."),
    ],
    sections: [
      {
        heading: L("woman typeとForbesが報じる女性職人の現在地", "Current landscape reported in woman type & Forbes"),
        body: [
          L("各メディアのインタビューでは、体力面での工夫や衛生的な店づくり、女性ならではのきめ細やかなおもてなしが顧客から支持されている様子が伝えられています。スクールを活用することで、古い徒弟制度のしがらみなく技術を習得する女性が増えています。", "Profiles emphasize that meticulous hygiene, thoughtful hospitality, and solid technical foundations are winning guest praise. Structured schools allow women to learn without traditional hierarchical barriers."),
        ],
        sourceLink: {
          label: L("Forbes JAPANの特集記事を読む", "Read Forbes JAPAN article"),
          url: "https://forbesjapan.com/articles/detail/85449",
          publisher: "Forbes JAPAN",
        },
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
      {
        title: "女性寿司職人の間借り店がオープン2カ月で予約困難との噂",
        url: "https://magazine.tabelog.com/articles/308459",
        publisher: "食べログマガジン",
        summary: L("浅草のビストロ間借りで週2営業を行う『鮨ゆう子』の成功事例と開業モデルの解説。", "Tabelog Magazine case study of opening via a twice-weekly pop-up inside an existing bistro."),
      },
      {
        title: "2024年すし業界10大ニュース",
        url: "https://www.sushiacademy.co.jp/archives",
        publisher: "東京すしアカデミー ブログ",
        summary: L("間借り店舗、出張寿司、キッチンカーなど寿司職人の多様化する独立開業トレンドをまとめた業界レポート。", "Industry trend report covering pop-ups, private catering, and food trucks as modern sushi startup models."),
      },
    ],
    intro: [
      L(
        "何千万円もの初期投資をして路面店を構える従来型の開業だけでなく、既存飲食店の定休日を間借りした週2〜3日営業や出張寿司、キッチンカーなど、低リスクで独立する職人が増えています。食べログマガジン等の記事から新しい独立モデルを紹介します。",
        "Beyond traditional street storefronts requiring tens of millions in capital, low-risk startup models — borrowed counters 2-3 days a week, private catering, and food trucks — are thriving. Here is an overview based on Tabelog Magazine and industry reports.",
      ),
    ],
    keyPoints: [
      L("間借り営業は内装・保証金の初期費用を数分の一に抑えられる", "Pop-up counters slash upfront interior and lease deposit costs by a massive margin."),
      L("週2〜3日営業で固定客を掴んでから路面店へステップアップするリスクヘッジが可能", "Allows chefs to build a loyal following before taking on a long-term commercial lease."),
      L("各スクールでも間借りや出張寿司を想定した小規模開業支援カリキュラムが用意されている", "Schools increasingly offer startup advice tailored for pop-ups and private catering."),
    ],
    sections: [
      {
        heading: L("食べログマガジンが紹介するスモールスタートの魅力", "Small-start advantages covered by Tabelog Magazine"),
        body: [
          L("食べログマガジン等で紹介された事例では、ビストロ等の定休日を活用することで家賃リスクを抑え、仕入れと技術に集中して高単価・高リピート率を実現しています。", "Profiles demonstrate how operating on a partner restaurant's dark days lowers overhead, allowing chefs to invest in top-grade ingredients and earn high guest satisfaction."),
        ],
        sourceLink: {
          label: L("食べログマガジンの詳しい間借り取材を見る", "Read Tabelog Magazine feature"),
          url: "https://magazine.tabelog.com/articles/308459",
          publisher: "食べログマガジン",
        },
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
      {
        title: "【2025年版】寿司専門学校の真実",
        url: "https://insyokujin.ac/recommend/5985/",
        publisher: "飲食人大学",
        summary: L("認可専門学校（1〜2年・調理師免許取得）と短期アカデミー（2〜3ヶ月・技術特化）の学費、時間、取得資格の違いを比較解説。", "Comparative guide breaking down tuition, time commitment, and licensing between 2-year colleges and 3-month academies."),
      },
      {
        title: "FAQ〈よくある質問〉調理師免許は取れますか？",
        url: "https://www.sushiacademy.co.jp/faq",
        publisher: "東京すしアカデミー",
        summary: L("短期スクールにおける調理師免許の扱いと、卒業後の実務経験を経た国家試験受験ルートを解説。", "Explains cook's license status at non-degree academies and the path to taking the national exam after practical experience."),
      },
    ],
    intro: [
      L(
        "寿司スクール選びで最も悩むのが「2〜3ヶ月の短期アカデミー」か「1〜2年の調理師専門学校」かの選択です。飲食人大学や東京すしアカデミーの比較解説をもとに、調理師免許の必要性と期間・学費の分岐点を整理します。",
        "The biggest fork when choosing a sushi school is picking between a 2-3 month intensive academy or a 1-2 year licensed culinary college. Based on analyses by Inshokujin College and Tokyo Sushi Academy, we compare licensing, costs, and time commitment.",
      ),
    ],
    keyPoints: [
      L("調理師専門学校（1〜2年・学費200万〜400万円）：卒業と同時に調理師免許を取得可能", "Culinary college (1-2 years, ¥2M-¥4M): confers cook's license directly upon graduation."),
      L("短期アカデミー（2〜3ヶ月・学費80万〜150万円）：免許は付かないが技術を最速で圧縮習得", "Intensive academy (2-3 months, ¥800k-¥1.5M): focuses purely on hands-on craft speed without direct license."),
      L("国内ホテルや給食施設では免許が重宝され、個人寿司店や海外就職では実践技術が重視される", "Hotels and institutions value licenses; private sushi counters and overseas shops prioritize real speed and technique."),
    ],
    sections: [
      {
        heading: L("飲食人大学の比較記事が示す選択基準", "Selection criteria analyzed by Inshokujin College"),
        body: [
          L("飲食人大学の公開記事では、高校新卒者や幅広い料理の基礎・免許が欲しい人には2年制専門学校、社会人の転職や海外就職を急ぐ人には短期集中アカデミーが最適と分類されています。", "Inshokujin College's guide recommends 2-year colleges for young high school graduates seeking broad culinary credentials, while short academies best serve career changers and overseas seekers."),
        ],
        sourceLink: {
          label: L("飲食人大学の専門学校比較記事を見る", "Read Inshokujin College comparison guide"),
          url: "https://insyokujin.ac/recommend/5985/",
          publisher: "飲食人大学",
        },
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
      {
        title: "寿司職人に必要な資格は？",
        url: "https://sushiworks.jp/career/qualification/",
        publisher: "SUSHI WORKS",
        summary: L("寿司職人に必要な国家資格・公的資格（食品衛生責任者、ふぐ調理師免許、調理師免許）の役割と取得方法を解説。", "Overview of licensing for sushi chefs: food-hygiene manager, fugu permit, and cook's license."),
      },
      {
        title: "寿司職人になるには｜キャリアガーデン",
        url: "https://careergarden.jp/sushishokunin/naruniha/",
        publisher: "キャリアガーデン",
        summary: L("法律上資格なしで働ける寿司職人の実態と、資格があると有利になる就職先を解説。", "Explains that no mandatory license exists to make sushi, while outlining where credentials offer advantages."),
      },
    ],
    intro: [
      L(
        "「寿司職人になるには調理師免許が必須？」という疑問に対し、日本の法律上は寿司を握る国家資格は存在しません。SUSHI WORKSやキャリアガーデンの解説をもとに、無資格でも働ける理由と、独立や採用で役立つ資格（食品衛生責任者・ふぐ免許等）を整理します。",
        "Is a license required to make sushi? Under Japanese law, no national license is required. Citing SUSHI WORKS and Career Garden, we explain why anyone can legally practice the craft and where credentials (food hygiene, fugu permit) matter.",
      ),
    ],
    keyPoints: [
      L("寿司を握る・寿司店で働くために必須の国家資格は一切ない", "No national license is legally required to make sushi or work in a sushi bar."),
      L("自分の店を開業する際は「食品衛生責任者」講習受講（1日）が義務付けられている", "Opening a shop requires a 1-day Food Hygiene Manager certification."),
      L("ふぐを扱う場合は都道府県ごとの「ふぐ調理師免許」が別途必要", "Serving pufferfish requires a dedicated prefecture fugu permit."),
    ],
    sections: [
      {
        heading: L("SUSHI WORKSが解説する資格の現実", "Licensing reality analyzed by SUSHI WORKS"),
        body: [
          L("SUSHI WORKSの記事では、調理師免許はホテルや大手企業への就職時に有利になるものの、個人寿司店や海外の寿司バーでは『どれだけ綺麗に素早く魚を扱えるか』という実技が合否を決める、と説明されています。", "SUSHI WORKS clarifies that while cook's licenses assist corporate hotel hiring, private sushi restaurants and overseas employers judge candidates on speed and knife mastery."),
        ],
        sourceLink: {
          label: L("SUSHI WORKSの資格解説記事を見る", "Read SUSHI WORKS qualification article"),
          url: "https://sushiworks.jp/career/qualification/",
          publisher: "SUSHI WORKS",
        },
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
      {
        title: "業界の最年少記録！？１０代の女性寿司職人がミシュランガイド掲載店で誕生",
        url: "https://www.nikkan.co.jp/releases/view/4068",
        publisher: "日刊工業新聞 電子版（企業リリース）",
        summary: L("高校卒業後に飲食人大学で3ヶ月学び、19歳でミシュラン掲載店『鮨 千陽』のカウンターに立った高井虹歩さんの公式リリース。", "Official press release announcing 19yo Koharu Takai standing at Michelin-listed Sushi Chiharu counter after 3-month schooling."),
      },
    ],
    intro: [
      L(
        "高校卒業後すぐに寿司スクールへ入学し、19歳でミシュラン掲載店『鮨 千陽』のカウンターを任された高井虹歩さん。日刊工業新聞電子版等に掲載された企業リリースの内容をもとに、若年層の早期デビュー事例と読み解き方を紹介します。",
        "Enrolling in sushi academy right after high school, 19yo Koharu Takai took the counter at Michelin-listed Sushi Chiharu. Based on company releases on Nikkan Kogyo Shimbun, we review this early debut story.",
      ),
    ],
    keyPoints: [
      L("18歳で寿司未経験から3ヶ月の集中スクールを受講", "Enrolled with zero experience at age 18 in a 3-month intensive academy."),
      L("卒業後すぐに『鮨 千陽』のカウンターに立ち、19歳で活躍", "Stood at Sushi Chiharu's counter immediately after graduation at 19."),
      L("早期デビュー事例は、スクール直営店のバックアップ体制とセットで読むことが大切", "Understand early debuts in context with the operator's dedicated support system."),
    ],
    sections: [
      {
        heading: L("公式リリースが伝える早期育成の可能性", "Accelerated training in official release"),
        body: [
          L("リリースによると、従来は何年も雑用から入る修行が一般的だった中、集中的な実技カリキュラムと直営店舗での実戦を通じて、10代でも即戦力としてお客様の前に立てることを実証しました。", "The release highlights that structured practical drills combined with a direct-linked restaurant allowed a teenager to serve guests as a full chef without traditional multi-year chore delays."),
        ],
        sourceLink: {
          label: L("日刊工業新聞の日刊リリース記事を見る", "Read Nikkan Kogyo release"),
          url: "https://www.nikkan.co.jp/releases/view/4068",
          publisher: "日刊工業新聞",
        },
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
      {
        title: "WELCOME TO TOKYO SUSHI ACADEMY",
        url: "https://www.sushischool.jp/",
        publisher: "Tokyo Sushi Academy (English)",
        summary: L("英語でのオンライン相談やWhatsApp対応、外国人向けプロフェッショナル寿司ディプロマコースの案内。", "Official English portal offering WhatsApp/Meet consultations and professional diploma courses."),
      },
      {
        title: "Sushi School in Tokyo | Ginza Onodera Chefs",
        url: "https://www.kudan-japanese-school.com/en/sushi_course.php",
        publisher: "Kudan Institute / Onodera",
        summary: L("九段日本語学院と名店『鮨 銀座おのでら』が提携した、日本語学習と寿司技術実習を組み合わせた外国人向けコース。", "Partnership program between Kudan Japanese Language School and Sushi Ginza Onodera combining language study and culinary drills."),
      },
    ],
    intro: [
      L(
        "訪日外国人や海外在住者が日本で本格的な寿司技術を学ぶための英語対応スクール。東京すしアカデミー英語サイトや九段日本語学院のプログラムをもとに、授業言語・シラバス・ビザ要件のチェックポイントを解説します。",
        "For international students seeking authentic sushi education in Japan with English support. Based on Tokyo Sushi Academy and Kudan Institute programs, we review language instruction, syllabus, and visa checkpoints.",
      ),
    ],
    keyPoints: [
      L("東京すしアカデミー英語校（Tsukiji校舎）では全編英語でのプロコースを開講", "Tokyo Sushi Academy Tsukiji campus offers full professional diploma tracks in English."),
      L("語学学校と名店『銀座おのでら』の提携プログラムなど、日本語学習とセットの選択肢もある", "Joint programs with Kudan Institute and Sushi Ginza Onodera offer combined language and sushi training."),
      L("観光客向け体験とプロ向け職人コースのカリキュラムの違いを事前に確認する", "Distinguish drop-in tourist workshops from career-focused diploma courses."),
    ],
    sections: [
      {
        heading: L("各校の英語対応プログラム概要", "English course overviews across schools"),
        body: [
          L("各校の英語サイトでは、WhatsAppでの事前相談やGoogle Meetカウンセリングが用意されており、包丁の扱いから衛生管理、握り、店舗研修まで英語で受講可能です。", "English portals provide WhatsApp and Google Meet counseling, covering knife skills, hygiene, nigiri, and kitchen internships in English."),
        ],
        sourceLink: {
          label: L("東京すしアカデミー英語サイトを見る", "Visit Tokyo Sushi Academy English site"),
          url: "https://www.sushischool.jp/",
          publisher: "Tokyo Sushi Academy",
        },
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
      {
        title: "ワンオペ、週3日だけの鮨屋。50歳から「無理なく、自分らしく、長く続ける」働き方",
        url: "https://www.sushiacademy.co.jp/archives",
        publisher: "東京すしアカデミー ブログ",
        summary: L("51歳で早期退職後に寿司スクールで学び、自宅兼店舗で週3日営業のワンオペ寿司店を開いたセカンドキャリア事例。", "Case study of opening a 3-day home sushi bar following early retirement at 51, designed for sustainable second-career longevity."),
      },
    ],
    intro: [
      L(
        "50代からのセカンドキャリアとして寿司職人を目指す人が増えています。東京すしアカデミー公式ブログで紹介された上田厚太郎さんの「週3日・ワンオペ自宅店舗」という無理のない開業モデルを紹介します。",
        "More professionals in their 50s are entering sushi as a second career. We summarize Tokyo Sushi Academy's feature on Kotaro Ueda's sustainable 3-day home sushi bar model.",
      ),
    ],
    keyPoints: [
      L("51歳で早期退職後に寿司アカデミーで学び、自宅兼店舗で開業", "Learned sushi craft at 51 after early retirement, opening a home-based counter."),
      L("週3日営業・ワンオペにすることで人件費と家賃を抑え、長く続けられる働き方を実現", "Running 3 days a week solo keeps overhead low for a sustainable lifestyle business."),
      L("セカンドキャリア層に合わせた夜間・週末コースの活用が広がっている", "Night and weekend courses tailored for second careers are increasingly popular."),
    ],
    sections: [
      {
        heading: L("公式ブログが伝えるシニア開業の工夫", "Senior startup strategies in official blog"),
        body: [
          L("記事では、無理に大繁盛店を目指すのではなく、自分の体力とライフスタイルに合わせた週3日営業を選択することで、高い満足度と安定した店舗運営を両立している様子が紹介されています。", "The report highlights that rather than aiming for high-volume crowds, choosing 3 service days matching personal stamina achieves high fulfillment and steady operation."),
        ],
        sourceLink: {
          label: L("東京すしアカデミー公式ブログを見る", "Visit Tokyo Sushi Academy Blog"),
          url: "https://www.sushiacademy.co.jp/archives",
          publisher: "東京すしアカデミー",
        },
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
      {
        title: "群馬から富山へ移住。元エンジニアが寿司職人としての人生をスタート",
        url: "https://www.sushiacademy.co.jp/archives",
        publisher: "東京すしアカデミー ブログ",
        summary: L("機械エンジニアから寿司スクールを経て富山県の寿司店へ移住就職した転身インタビュー。", "Interview with an engineer who moved from Gunma to Toyama to start his sushi career after academy training."),
      },
      {
        title: "北陸すしアカデミー 公式案内",
        url: "https://hokuriku-sushiacademy.jp/",
        publisher: "北陸すしアカデミー",
        summary: L("東京すしアカデミー連携校として北陸・富山に開校した地域密着型寿司職人養成スクール。", "Official page of Hokuriku Sushi Academy, linked with Tokyo Sushi Academy in Toyama."),
      },
    ],
    intro: [
      L(
        "大都市圏だけでなく、豊富な魚介を誇る地方産地への移住と寿司職人への転身が注目されています。群馬の元エンジニアが富山へ移住して寿司職人となった実例と、北陸すしアカデミーの取り組みを紹介します。",
        "Beyond big metropolitan hubs, relocating to regional seafood havens like Toyama as a sushi chef is gaining traction. Here is a profile of a former engineer moving to Toyama alongside the launch of Hokuriku Sushi Academy.",
      ),
    ],
    keyPoints: [
      L("機械エンジニアから寿司スクールで学び、富山県の寿司店へ移住就職", "Pivoted from mechanical engineering to Toyama sushi kitchen via academy training."),
      L("富山県「すし県」推進など地方自治体の支援や産地直結の魅力", "Capitalized on Toyama's 'Sushi Prefecture' regional promotion and fresh seafood supply."),
      L("2026年には北陸すしアカデミーなど地方校舎の選択肢も拡大", "Regional options expanded with openings like Hokuriku Sushi Academy."),
    ],
    sections: [
      {
        heading: L("地方移住と寿司職人の掛け合わせ", "Regional relocation paired with sushi craft"),
        body: [
          L("養成校の紹介記事によると、魚の産地に近い地方都市では、質の高い魚介に日常的に触れられることや、地域観光の担い手としての需要が高く、地方移住の有力な選択肢となっています。", "The academy feature notes that coastal regions offer daily access to pristine seafood and high local tourism demand, making sushi a powerful vehicle for regional migration."),
        ],
        sourceLink: {
          label: L("北陸すしアカデミー公式サイトを見る", "Visit Hokuriku Sushi Academy"),
          url: "https://hokuriku-sushiacademy.jp/",
          publisher: "北陸すしアカデミー",
        },
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
      {
        title: "ワーホリで30歳までに海外へ！未経験から寿司職人で海外移住",
        url: "https://www.sushiacademy.co.jp/__/tags/t03",
        publisher: "東京すしアカデミー",
        summary: L("ワーキングホリデーの年齢制限（概ね30歳まで）と2ヶ月集中寿司コースを組み合わせた海外渡航モデルの解説。", "Official guide on combining age-capped working-holiday visas (generally up to 30) with 2-month intensive sushi training."),
      },
    ],
    intro: [
      L(
        "ワーキングホリデー制度（多くの国で申請時30歳まで）を活用し、日本で短期間寿司技術を習得してオーストラリア・カナダ等へ渡航するルート。東京すしアカデミー公式特集をもとに、年齢制限のタイムリミットとスクール活用のポイントを解説します。",
        "Using working-holiday visas (capped around 30 in most nations) paired with intensive Japanese sushi training to land jobs in Australia or Canada. Based on Tokyo Sushi Academy guides, we explain the timeline strategy.",
      ),
    ],
    keyPoints: [
      L("2年の専門学校ではワーホリ年齢制限に間に合わない場合、2〜3ヶ月の短期集中校が有力な選択肢になる", "When 2-year college would exceed the age limit, a 2-month intensive course fits the visa window."),
      L("オーストラリアやカナダでは寿司を握れる人材の時給・求人需要が安定して高い", "Hourly wages and hiring demand for capable sushi staff in Australia and Canada remain robust."),
      L("申請期限・開講月・現地での求人探しサポートを事前に逆算して計画する", "Calculate backwards from application deadlines, course start dates, and overseas job placement."),
    ],
    sections: [
      {
        heading: L("公式案内が示すワーホリ×寿司のタイムライン", "Working holiday x sushi timeline in official guide"),
        body: [
          L("スクール側の案内では、20代後半からでも2ヶ月の集中コースを受講し、すぐにワーホリビザで渡航することで、現地の日本食レストランで即戦力として採用されやすいメリットが強調されています。", "Guides stress that taking a 2-month intensive course in late twenties allows immediate visa application and fast hiring at overseas Japanese restaurants."),
        ],
        sourceLink: {
          label: L("東京すしアカデミーのワーホリ特集を見る", "View Tokyo Sushi Academy working-holiday guide"),
          url: "https://www.sushiacademy.co.jp/__/tags/t03",
          publisher: "東京すしアカデミー",
        },
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
      {
        title: "12年勤めた会社員の安定手放し、35歳で寿司職人に",
        url: "https://chanto.jp.net/articles/-/1009023",
        publisher: "CHANTO WEB",
        summary: L("TBSドラマのロケ地ともなった東京すしアカデミーの受講生事例を取材したCHANTO記事。", "CHANTO feature noting the school served as filming location for a TBS drama."),
      },
    ],
    intro: [
      L(
        "テレビドラマやメディアの舞台として実在の寿司スクールが登場すると、関心が一気に高まります。CHANTOの報道内容などを交え、フィクションの演出と実際のスクールカリキュラム・学費の現実的な比較ポイントを解説します。",
        "When real sushi academies appear in TV dramas, public interest surges. Referencing CHANTO coverage, we contrast fictional depictions with real curriculum, tuition, and graduate career data.",
      ),
    ],
    keyPoints: [
      L("ドラマの舞台になることで認知度は急上昇するが、カリキュラムや学費は公式募集要項で確認が必要", "TV drama exposure drives awareness, but curriculum and fees must be verified in official brochures."),
      L("ドラマのような短期サクセスストーリーの背景には、実際の現場での反復練習が存在する", "Behind televised rapid success stories lies rigorous real-world repetition."),
    ],
    sections: [
      {
        heading: L("メディア露出と学校選びの冷静な視点", "Media spotlight vs objective school selection"),
        body: [
          L("テレビやドラマで話題になった学校でも、他の選択肢（専門学校、他校アカデミー、夜間コースなど）とカリキュラム・授業時間・就職実績を冷静に比較することが、後悔しない進路選びの鉄則です。", "Even for schools featured on television, objectively comparing class hours, total tuition, and placement data against other options ensures the right decision."),
        ],
        sourceLink: {
          label: L("CHANTO WEBの取材記事を読む", "Read CHANTO WEB article"),
          url: "https://chanto.jp.net/articles/-/1009023",
          publisher: "CHANTO WEB",
        },
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
      {
        title: "FAQ〈よくある質問〉本当に短期間でプロになれますか？",
        url: "https://www.sushiacademy.co.jp/faq",
        publisher: "東京すしアカデミー",
        summary: L("短期間でのプロ育成の定義と、カリキュラムにおける反復実習の重要性を解説した公式FAQ。", "Official FAQ defining what 'pro in short months' means and the role of high-density repetition."),
      },
      {
        title: "寿司職人になるには10年必要か？",
        url: "https://note.com/insyokujin_ac/n/nd5f361a90dd1",
        publisher: "飲食人大学 note",
        summary: L("短期スクールが目指す即戦力レベルと、卒業後に現場で積むべき経験の役割分担を論考。", "Editorial on the division of labor between school foundations and real kitchen experience."),
      },
    ],
    intro: [
      L(
        "スクール広告でよく目にする「3ヶ月でプロの寿司職人に」。このキャッチコピーを鵜呑みにせず、各校の公式説明や卒業生の追跡データから「プロ」という言葉の内実を正しく分解して解説します。",
        "Advertisements often proclaim 'Become a professional sushi chef in 3 months.' We unpack this catchphrase using official school explanations and graduate outcomes to define what 'professional' realistically means.",
      ),
    ],
    keyPoints: [
      L("スクールの言う『プロ』は『魚を捌いて握れる基礎技術を持ち、現場で雇用されうるレベル』を指す", "Schools define 'pro' as possessing foundational butchery/nigiri skills ready for kitchen employment."),
      L("『予約の埋まる有名大将』になるには、スクール後の店舗での年数と仕込みの責任が不可欠", "Becoming a renowned head chef requires additional restaurant years managing real service and volume."),
      L("体験説明会では『卒業生が最初の半年間に任される具体的な業務』を確認する", "At trial info sessions, ask specifically what tasks graduates perform during their first six months."),
    ],
    sections: [
      {
        heading: L("スクールが定義する「プロ」と現場の「プロ」", "School 'pro' vs restaurant head chef 'pro'"),
        body: [
          L("東京すしアカデミーや飲食人大学の公式FAQでは、数ヶ月で習得できるのは『正しい基礎手順と反復訓練による技術の土台』であり、客前での臨機応変な対応やスピードは就職先で磨かれると誠実に説明されています。", "Official school FAQs clarify that intensive courses provide the foundational technique and speed basics, while guest rapport and high-pressure service are refined in real restaurants."),
        ],
        sourceLink: {
          label: L("東京すしアカデミーのFAQを見る", "View Tokyo Sushi Academy FAQ"),
          url: "https://www.sushiacademy.co.jp/faq",
          publisher: "東京すしアカデミー",
        },
      },
    ],
  },
];
