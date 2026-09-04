// ─── 블로그 글 데이터 ────────────────────────────────────────
// 이 파일은 import 없는 순수 데이터 파일이어야 한다.
// scripts/generate-og-pages.js 가 빌드 후 `export`만 벗겨서 그대로 평가해
// 검색엔진용 정적 HTML을 만들기 때문에, import를 추가하면 빌드가 깨진다.
//
// ★ 영어가 기준 언어다 (SEO 우선순위)
//   검색엔진과 SNS 크롤러가 보는 정적 HTML은 항상 en 원고로 만들어진다.
//   그러니 en 은 번역투가 아니라 처음부터 영어로 쓴 글이어야 하고,
//   ko 는 영어를 직역한 문장이 아니라 자연스러운 한국어로 다시 쓴다.
//   en 이 없으면 ko 로 대체되지만, 되도록 en 은 항상 채운다.
//
// 새 글 추가하기
//   1) BLOG_POSTS 배열 맨 앞에 객체 하나 추가 (위에 있는 글이 최신)
//   2) slug 가 URL 이 된다: /blog/<slug>
//      영어 소문자 + 하이픈, 검색 키워드가 들어가게. 한번 배포한 뒤에는
//      바꾸지 않는다 (누적된 검색 순위가 초기화된다)
//   3) title 은 60자, description 은 150자 안쪽이어야 검색 결과에서 안 잘린다
//   4) 글을 크게 고치면 updated: 'YYYY-MM-DD' 를 추가한다 (sitemap 에 반영)
//   5) 본문 블록 타입
//        { t: 'h2',    text }
//        { t: 'h3',    text }
//        { t: 'p',     text }
//        { t: 'ul',    items: [] }
//        { t: 'ol',    items: [] }
//        { t: 'quote', text }
//        { t: 'img',   src, alt, caption }   ← 이미지는 public/blog/img/ 에 넣고 '/blog/img/x.jpg'
//      p · li · quote 안에서는 **굵게** 와 [링크](https://...) 를 쓸 수 있다.
//      내부 링크(/hero-test 처럼)를 한두 개 넣으면 SEO 에 도움이 된다.

export const BLOG_POSTS = [
{
    slug: "why-life-feels-boring",
    date: "2026-09-04",
    updated: "2026-09-04",
    en: {
      title: "Why Life Starts to Feel Boring",
      description: "Boredom is not apathy — researchers define it as wanting engagement and failing to reach it. Why that distinction matters, and the two kinds that need opposite fixes.",
      tags: [
        "why does life feel boring",
        "boredom psychology",
        "bored all the time",
        "meaning and attention",
      ],
      readingTime: "8 min read",
      body: [
        {
          t: "quote",
          text: "Boredom isn't the absence of wanting. It's wanting to be engaged and not being able to get there.",
        },
        {
          t: "p",
          text: "**Key points**",
        },
        {
          t: "ul",
          items: [
            "Asked to sit alone with their thoughts for fifteen minutes, 67% of men and 25% of women chose to give themselves an electric shock instead — after saying they would pay money to avoid that shock.",
            "Researchers define boredom as wanting to engage and being unable to, which is why it feels restless rather than sleepy.",
            "There are two different kinds of boredom, and they call for opposite fixes: one needs more challenge, the other needs less.",
          ],
        },
        {
          t: "p",
          text: "You finally have a free evening. Nothing scheduled, nobody needs anything. You open your phone, scroll for a while, close it. Open it again. Consider a film, then don't. Consider going out, then don't.",
        },
        {
          t: "p",
          text: "Nothing sounds good. Not because you're tired, exactly, and not because there's nothing available. There's more available than any person could get through in a lifetime.",
        },
        {
          t: "p",
          text: "This is the part that makes boredom strange. It doesn't feel like the absence of options. It feels like being locked out of them.",
        },
        {
          t: "h2",
          text: "What is boredom, actually?",
        },
        {
          t: "p",
          text: "In a much-discussed study, Timothy Wilson and his colleagues asked people to sit in a bare room for fifteen minutes with nothing to do but think. Beforehand, participants had rated a mild electric shock as unpleasant enough that they said they would pay money to avoid receiving it again.",
        },
        {
          t: "p",
          text: "Then they were left alone, with a button that would deliver that shock.",
        },
        {
          t: "p",
          text: "Among people who had said they would pay to avoid it, 67% of the men and 25% of the women shocked themselves at least once during the fifteen minutes (Wilson et al., 2014). One man pressed it 190 times.",
        },
        {
          t: "p",
          text: "That result gets quoted as evidence that people can't stand their own company. But there's a more precise reading, and it comes from how boredom researchers define the state itself. John Eastwood and colleagues describe boredom as \"the aversive experience of wanting, but being unable, to engage in satisfying activity\" (Eastwood et al., 2012).",
        },
        {
          t: "p",
          text: "Read that again, because the important word is **wanting**. Boredom is not apathy. It is not the absence of desire. It is desire with nowhere to land — which is exactly why it feels agitated rather than peaceful, and why a person will reach for a shock button just to make something happen.",
        },
        {
          t: "p",
          text: "So the useful question isn't \"what should I do.\" It's: what's blocking the engagement?",
        },
        {
          t: "h2",
          text: "Is your boredom about attention, or about meaning?",
        },
        {
          t: "p",
          text: "There are two answers, and they aren't variations on the same problem.",
        },
        {
          t: "p",
          text: "Erin Westgate and Timothy Wilson mapped this as the MAC model — Meaning and Attentional Components (Westgate & Wilson, 2018). Boredom shows up when either component fails, and the two failures feel similar from the inside while being nearly opposite underneath.",
        },
        {
          t: "p",
          text: "**Attention.** You can't focus on the thing, because the difficulty and your capacity are mismatched. This runs in both directions. A task that's far too easy leaves your attention with nowhere to go. A task that's far too hard does the same, because you can't hold it. Data entry and quantum mechanics are both boring, for opposite reasons.",
        },
        {
          t: "p",
          text: "**Meaning.** You can focus fine. You simply don't want to. The activity doesn't connect to anything you actually care about, so engaging with it feels like a cost with no return.",
        },
        {
          t: "p",
          text: "The distinction matters because the fixes point in opposite directions. Understimulated attention wants more challenge. Overstimulated attention wants the task made simpler. And meaning-based boredom won't respond to either — adjusting the difficulty of something you don't care about just gives you a differently-calibrated version of something you don't care about.",
        },
        {
          t: "p",
          text: "Which explains a familiar failure.",
        },
        {
          t: "h2",
          text: "Why doesn't scrolling fix it?",
        },
        {
          t: "p",
          text: "Because scrolling is an answer to the attention problem, and most persistent boredom is the meaning problem.",
        },
        {
          t: "p",
          text: "A feed is very good at absorbing attention. It's tuned for exactly that. If your boredom is understimulation — waiting for a train, sitting through a slow meeting — a feed genuinely does the job, and there's nothing wrong with using it that way.",
        },
        {
          t: "p",
          text: "But when the underlying issue is that nothing you're doing connects to anything you value, absorbing your attention doesn't touch it. You get through an hour without noticing, then close the app and feel the same, or slightly worse. The boredom was never asking for stimulation. It was asking for something that mattered, and you handed it something that merely moved.",
        },
        {
          t: "p",
          text: "This is why \"I'm bored, so I'll find something to watch\" can run for weeks without resolving anything. The strategy isn't lazy. It's just aimed at the wrong target.",
        },
        {
          t: "h2",
          text: "So how do you tell which one you have?",
        },
        {
          t: "p",
          text: "One question does most of the work: **if the difficulty changed, would it help?**",
        },
        {
          t: "p",
          text: "Picture the same activity, but harder — more demanding, more skill required. If some part of you perks up at that, you're understimulated, and the fix is to raise the difficulty rather than change the activity. Play the harder version. Take the piece of the job nobody wants.",
        },
        {
          t: "p",
          text: "Now picture it easier — simplified, broken into smaller pieces, less to hold at once. If that's the relief, you're overstimulated, and you've been reading the fatigue as disinterest.",
        },
        {
          t: "p",
          text: "And if neither version sounds any better — if harder is worse and easier is also worse — the difficulty was never the issue. That's the meaning signal, and the only thing that answers it is a different activity, one connected to something you actually care about. Not a more optimized version of this one.",
        },
        {
          t: "h2",
          text: "Try this",
        },
        {
          t: "ol",
          items: [
            "**Run the difficulty test on one specific thing.** Not \"my life\" — a specific evening, a specific task. Harder, easier, neither. The answer tells you which repair to attempt.",
            "**If it's understimulation, add a constraint.** Time limits, higher difficulty settings, doing it without the shortcut you normally use. Constraint creates the demand your attention has been missing.",
            "**If it's meaning, ask what you'd do if nobody found out.** Meaning-based boredom is often the gap between what you're doing and what you'd choose. That question tends to surface the gap fast.",
            "**Stop treating boredom as a personal failing.** It's a signal about a mismatch, and signals are useful. A person who never got bored would never notice they were in the wrong room.",
          ],
        },
        {
          t: "h2",
          text: "The mind wants in",
        },
        {
          t: "p",
          text: "The thing worth holding onto is buried in Eastwood's definition. Boredom is **wanting** to be engaged. The wanting is still there, fully intact, or you wouldn't feel anything at all — you'd feel calm.",
        },
        {
          t: "p",
          text: "That's a considerably better position than it seems from inside it. The restlessness that makes boredom so unpleasant is the same restlessness that will push you toward something better, provided you read it correctly rather than pouring stimulation on it.",
        },
        {
          t: "p",
          text: "One thing worth separating out: boredom that lifts when circumstances change is ordinary. A flatness that doesn't lift, that spreads to things you used to care about and lasts for weeks, is a different experience and worth talking through with a professional rather than troubleshooting alone.",
        },
        {
          t: "h2",
          text: "FAQ",
        },
        {
          t: "h3",
          text: "Is boredom the same as depression?",
        },
        {
          t: "p",
          text: "No. Boredom involves wanting to engage and being unable to, so the desire is still present. A persistent loss of interest in things you used to enjoy is a different experience and worth discussing with a professional.",
        },
        {
          t: "h3",
          text: "Why do I feel bored even when I have plenty to do?",
        },
        {
          t: "p",
          text: "Having options isn't the same as being able to engage with them. Boredom comes from a mismatch — either the difficulty doesn't fit your capacity, or the activity doesn't connect to anything you value.",
        },
        {
          t: "h3",
          text: "Does scrolling on my phone help with boredom?",
        },
        {
          t: "p",
          text: "It helps with understimulation, like waiting in a queue. It doesn't help when the problem is that nothing you're doing feels meaningful, because absorbing attention isn't the same as supplying meaning.",
        },
        {
          t: "h2",
          text: "References",
        },
        {
          t: "ul",
          items: [
            "Eastwood, J. D., Frischen, A., Fenske, M. J., & Smilek, D. (2012). The unengaged mind: Defining boredom in terms of attention. Perspectives on Psychological Science, 7(5), 482–495.",
            "Westgate, E. C., & Wilson, T. D. (2018). Boring thoughts and bored minds: The MAC model of boredom and cognitive engagement. Psychological Review, 125(5), 689–713.",
            "Wilson, T. D., Reinhard, D. A., Westgate, E. C., Gilbert, D. T., Ellerbeck, N., Hahn, C., Brown, C. L., & Shaked, A. (2014). Just think: The challenges of the disengaged mind. Science, 345(6192), 75–77.",
          ],
        },
      ],
    },
    ko: {
      title: "요즘 사는 게 재미없게 느껴지는 이유",
      description: "사는 게 재미없을 때 무슨 일이 벌어지는 걸까요. 심리학이 정의하는 지루함과, 해법이 정반대인 두 종류를 구분하는 법.",
      tags: [
        "사는 게 재미없을 때",
        "노잼시기",
        "지루함 심리",
        "무기력한 이유",
      ],
      readingTime: "8분",
      body: [
        {
          t: "quote",
          text: "지루함은 하고 싶은 게 없는 상태가 아닙니다. 하고 싶은데 닿지 못하는 상태예요.",
        },
        {
          t: "p",
          text: "**핵심 정리**",
        },
        {
          t: "ul",
          items: [
            "15분 동안 혼자 생각만 하라고 했더니, 남성의 67%와 여성의 25%가 차라리 자기 몸에 전기 충격을 줬습니다. 돈을 내서라도 피하고 싶다던 그 충격을요.",
            "연구자들은 지루함을 '몰입하고 싶은데 그러지 못하는 상태'로 정의합니다. 그래서 나른한 게 아니라 안절부절못하는 느낌이 듭니다.",
            "지루함에는 두 종류가 있고 해법이 정반대입니다. 하나는 더 어려워야 풀리고, 하나는 더 쉬워야 풀립니다.",
          ],
        },
        {
          t: "p",
          text: "모처럼 아무 약속 없는 저녁입니다. 폰을 켰다가 끕니다. 다시 켭니다. 영화를 볼까 하다 맙니다. 나갈까 하다 맙니다.",
        },
        {
          t: "p",
          text: "딱히 피곤한 것도 아니에요. 볼 게 없는 것도 아니고요. 평생 봐도 다 못 볼 만큼 쌓여 있죠.",
        },
        {
          t: "p",
          text: "그래서 이상합니다. 선택지가 없어서 생기는 느낌이 아니거든요. 선택지 앞에서 문이 잠긴 느낌에 가깝습니다.",
        },
        {
          t: "p",
          text: "커뮤니티에 \"사는 게 재미없다\"는 글이 꾸준히 올라오는 것도 아마 이 감각 때문일 겁니다.",
        },
        {
          t: "h2",
          text: "지루함은 정확히 어떤 상태일까요",
        },
        {
          t: "p",
          text: "심리학자 티모시 윌슨 연구팀이 사람들을 빈 방에 15분 동안 앉혀 놨습니다. 할 건 없고 생각만 하면 되는 상황이었어요.",
        },
        {
          t: "p",
          text: "그 전에 참가자들은 약한 전기 충격을 한 번 받아 봤습니다. 다들 불쾌하다고 했고, 돈을 내서라도 다시는 안 받고 싶다고 답했고요.",
        },
        {
          t: "p",
          text: "그러고는 혼자 남겨졌습니다. 그 충격을 스스로 줄 수 있는 버튼과 함께요.",
        },
        {
          t: "p",
          text: "돈을 내서라도 피하겠다던 사람들 중에서, 남성의 67%와 여성의 25%가 15분 안에 최소 한 번은 버튼을 눌렀습니다(Wilson 외, 2014). 한 남성은 190번 눌렀고요.",
        },
        {
          t: "p",
          text: "이 실험은 보통 \"사람은 자기 자신과 못 있는다\"는 이야기로 인용됩니다. 그런데 더 정확한 해석이 따로 있어요.",
        },
        {
          t: "p",
          text: "존 이스트우드 연구팀은 지루함을 이렇게 정의합니다. \"몰입하고 싶은데 그러지 못하는, 불쾌한 경험\"(Eastwood 외, 2012).",
        },
        {
          t: "p",
          text: "'하고 싶은데'가 핵심입니다. 지루함은 무기력이 아니에요. 하고 싶은 마음이 갈 데를 못 찾은 상태입니다.",
        },
        {
          t: "p",
          text: "그래서 차분한 게 아니라 안절부절못하고, 뭐라도 일어나게 하려고 충격 버튼까지 누릅니다.",
        },
        {
          t: "p",
          text: "그러니 물어야 할 건 \"뭘 하지\"가 아닙니다. \"무엇이 몰입을 막고 있지\"예요.",
        },
        {
          t: "h2",
          text: "주의력 문제일까요, 의미 문제일까요",
        },
        {
          t: "p",
          text: "답이 둘인데, 같은 문제의 변형이 아닙니다.",
        },
        {
          t: "p",
          text: "에린 웨스트게이트와 티모시 윌슨이 이걸 MAC 모형으로 정리했습니다. 의미와 주의력, 두 축이에요(Westgate & Wilson, 2018). 둘 중 하나가 어긋나면 지루해집니다. 안에서 느껴지는 건 비슷한데, 밑에서 벌어지는 일은 거의 반대고요.",
        },
        {
          t: "p",
          text: "**주의력.** 집중이 안 됩니다. 난이도와 내 여력이 안 맞아서요. 양쪽으로 다 어긋날 수 있습니다. 너무 쉬우면 주의가 갈 데가 없습니다. 너무 어려워도 마찬가지예요. 붙잡고 있을 수가 없으니까요. 단순 입력 작업도 지루하고 양자역학도 지루한데, 이유는 정반대입니다.",
        },
        {
          t: "p",
          text: "**의미.** 집중은 됩니다. 그냥 하기가 싫어요. 그 일이 내가 신경 쓰는 무언가와 연결이 안 되니까, 붙잡을수록 손해 보는 기분이 듭니다.",
        },
        {
          t: "p",
          text: "구분이 중요한 건 해법이 반대 방향이라서입니다. 덜 자극된 주의력은 더 어려운 걸 원합니다. 과하게 자극된 주의력은 더 단순한 걸 원하고요. 그런데 의미 쪽 지루함은 둘 다 안 먹힙니다. 관심 없는 일의 난이도를 조절해 봐야, 난이도만 다른 관심 없는 일이 될 뿐이니까요.",
        },
        {
          t: "p",
          text: "여기서 익숙한 실패 하나가 설명됩니다.",
        },
        {
          t: "h2",
          text: "유튜브를 봐도 왜 안 풀릴까요",
        },
        {
          t: "p",
          text: "스크롤은 주의력 문제의 해답인데, 오래 가는 지루함은 대개 의미 문제라서요.",
        },
        {
          t: "p",
          text: "피드는 주의를 붙잡는 데 아주 능합니다. 그러라고 만든 거니까요. 지하철에서 기다릴 때, 회의가 늘어질 때처럼 덜 자극된 상태라면 실제로 효과가 있습니다. 그렇게 쓰는 건 아무 문제 없고요.",
        },
        {
          t: "p",
          text: "그런데 문제가 '지금 하는 것 중에 내가 신경 쓰는 게 없다'는 쪽이면, 주의를 붙잡아 봐야 거기까지 안 닿습니다. 한 시간이 순식간에 지나가고, 앱을 끄면 아까와 똑같거나 조금 더 나빠져 있죠.",
        },
        {
          t: "p",
          text: "지루함이 원한 건 자극이 아니었습니다. 의미였는데, 손에 쥐여준 건 움직임뿐이었어요.",
        },
        {
          t: "p",
          text: "\"심심하니까 뭐 볼 거 찾자\"가 몇 주씩 반복돼도 아무것도 안 풀리는 이유입니다. 게으른 게 아니에요. 겨냥한 곳이 다를 뿐입니다.",
        },
        {
          t: "h2",
          text: "내 건 어느 쪽인지 어떻게 알까요",
        },
        {
          t: "p",
          text: "질문 하나면 대체로 갈립니다. **난이도가 바뀌면 나아질까요?**",
        },
        {
          t: "p",
          text: "같은 일을 더 어렵게 만든다고 상상해 보세요. 더 까다롭고, 실력이 더 필요한 쪽으로요. 여기서 뭔가 살짝 반응이 온다면 덜 자극된 상태입니다. 일을 바꿀 게 아니라 난이도를 올리면 됩니다. 어려운 쪽으로 하고, 아무도 안 맡으려는 부분을 맡으면 되고요.",
        },
        {
          t: "p",
          text: "이번엔 더 쉽게 만든다고 상상해 보세요. 단순하게, 잘게 쪼개서, 한 번에 들고 있을 게 적게요. 이쪽이 후련하면 과하게 자극된 상태입니다. 지친 걸 흥미가 없는 걸로 읽고 있었던 거예요.",
        },
        {
          t: "p",
          text: "그런데 어느 쪽도 나아 보이지 않는다면. 어렵게 해도 싫고 쉽게 해도 싫다면. 난이도는 애초에 문제가 아니었습니다.",
        },
        {
          t: "p",
          text: "그게 의미 쪽 신호입니다. 여기에 답이 되는 건 다른 일 하나뿐이에요. 내가 실제로 신경 쓰는 것과 이어진 일이요. 지금 이 일의 개선판이 아니고요.",
        },
        {
          t: "h2",
          text: "오늘 해볼 것",
        },
        {
          t: "ol",
          items: [
            "**딱 하나를 정해서 난이도 테스트를 해봅니다.** '내 인생' 말고요. 특정한 저녁, 특정한 일 하나로요. 더 어렵게, 더 쉽게, 둘 다 아님. 답이 어느 쪽을 고쳐야 할지 알려줍니다.",
            "**덜 자극된 쪽이면 제약을 하나 겁니다.** 시간을 자르거나, 난이도를 올리거나, 늘 쓰던 지름길을 안 쓰거나요. 제약이 없던 부하를 만들어 줍니다.",
            "**의미 쪽이면 이렇게 물어봅니다. 아무도 모른다면 뭘 할까.** 의미 쪽 지루함은 대개 지금 하는 일과 원래 고를 일 사이의 간격입니다. 이 질문이 그 간격을 빨리 드러냅니다.",
            "**지루함을 내 결함으로 두지 않습니다.** 뭔가 안 맞는다는 신호이고, 신호는 쓸모가 있습니다. 한 번도 지루하지 않은 사람은 자기가 엉뚱한 방에 있다는 걸 영영 모릅니다.",
          ],
        },
        {
          t: "h2",
          text: "마음은 들어가고 싶어 합니다",
        },
        {
          t: "p",
          text: "이스트우드의 정의에 붙잡을 만한 게 하나 들어 있습니다. 지루함은 몰입하고 '싶은' 상태라는 것.",
        },
        {
          t: "p",
          text: "그 마음이 아직 멀쩡히 있으니까 뭔가 느껴지는 겁니다. 정말 없어졌다면 그냥 잔잔했겠죠.",
        },
        {
          t: "p",
          text: "안에서 겪을 땐 최악 같지만 그렇게 나쁜 자리가 아닙니다. 지루함을 그토록 불편하게 만드는 그 안절부절이, 더 나은 쪽으로 밀어주는 힘이기도 하니까요. 자극을 들이붓는 대신 제대로 읽기만 하면요.",
        },
        {
          t: "p",
          text: "하나는 구분해 두면 좋겠습니다. 상황이 바뀌면 걷히는 지루함은 보통의 일입니다. 그런데 걷히지 않고, 예전에 좋아하던 것까지 번지고, 몇 주씩 이어지는 무거움은 다른 이야기예요. 혼자 붙들고 있기보다 전문가와 이야기해 볼 만합니다.",
        },
        {
          t: "h2",
          text: "자주 묻는 질문",
        },
        {
          t: "h3",
          text: "지루한 것과 우울한 건 어떻게 다른가요?",
        },
        {
          t: "p",
          text: "다릅니다. 지루함에는 하고 싶은 마음이 남아 있어요. 몰입하고 싶은데 못 하는 상태니까요. 예전에 좋아하던 것들까지 흥미가 사라진 상태라면 다른 이야기이고, 전문가와 상의해 보는 게 좋습니다.",
        },
        {
          t: "h3",
          text: "할 일이 많은데도 왜 지루할까요?",
        },
        {
          t: "p",
          text: "할 게 있는 것과 거기에 몰입할 수 있는 건 다릅니다. 지루함은 어긋남에서 옵니다. 난이도가 내 여력과 안 맞거나, 그 일이 내가 신경 쓰는 것과 연결이 안 되거나요.",
        },
        {
          t: "h3",
          text: "유튜브나 SNS를 보면 지루함이 풀리나요?",
        },
        {
          t: "p",
          text: "줄 설 때처럼 덜 자극된 상태라면 도움이 됩니다. 다만 지금 하는 게 다 의미 없게 느껴지는 쪽이면 안 풀려요. 주의를 붙잡는 것과 의미를 주는 건 다른 일이라서요.",
        },
        {
          t: "h2",
          text: "참고 문헌",
        },
        {
          t: "ul",
          items: [
            "Eastwood, J. D., Frischen, A., Fenske, M. J., & Smilek, D. (2012). The unengaged mind: Defining boredom in terms of attention. Perspectives on Psychological Science, 7(5), 482–495.",
            "Westgate, E. C., & Wilson, T. D. (2018). Boring thoughts and bored minds: The MAC model of boredom and cognitive engagement. Psychological Review, 125(5), 689–713.",
            "Wilson, T. D., Reinhard, D. A., Westgate, E. C., Gilbert, D. T., Ellerbeck, N., Hahn, C., Brown, C. L., & Shaked, A. (2014). Just think: The challenges of the disengaged mind. Science, 345(6192), 75–77.",
          ],
        },
      ],
    },
  },
{
    slug: "music-taste-personality",
    date: "2026-09-03",
    updated: "2026-09-03",
    en: {
      title: "What Your Music Taste Says About Your Personality",
      description: "Strangers can read your personality from a playlist better than chance. What the research found about music and personality, and the better question to ask.",
      tags: [
        "music taste personality",
        "music preferences psychology",
        "openness to experience",
        "personality",
      ],
      readingTime: "8 min read",
      body: [
        {
          t: "quote",
          text: "Hand a stranger your ten favorite songs and they will guess more about you than you would expect.",
        },
        {
          t: "p",
          text: "**Key points**",
        },
        {
          t: "ul",
          items: [
            "Strangers given six weeks to get to know each other talked about music more than movies, books, sports, or where they grew up.",
            "Given nothing but a list of ten favorite songs, strangers guessed people's personalities — and largely agreed with each other about what they were hearing.",
            "The signal is in the feel, not the genre: \"I like rock\" says almost nothing, while \"I like songs that build slowly\" says a lot.",
          ],
        },
        {
          t: "p",
          text: "You meet someone at a party, or on a first date, or in the seat next to you on a long flight. Somewhere in the first ten minutes, one of you asks what the other listens to.",
        },
        {
          t: "p",
          text: "It feels like filler. It isn't. When Peter Rentfrow and Samuel Gosling paired strangers and gave them six weeks to get acquainted over online chat, music came up more than any other topic — more than movies, more than books, more than sports or hometowns or work (Rentfrow & Gosling, 2006).",
        },
        {
          t: "p",
          text: "We all reach for the same question. So it's worth asking whether it works.",
        },
        {
          t: "h2",
          text: "Can a stranger really read you from a playlist?",
        },
        {
          t: "p",
          text: "In the second half of that study, participants wrote down their ten favorite songs and handed the list to people who had never met them. Those strangers listened, then rated the person's personality.",
        },
        {
          t: "p",
          text: "They did better than chance. They also agreed with one another — different listeners working from the same list arrived at similar impressions. And when the researchers checked which musical cues the listeners were leaning on, those cues turned out to be the ones that actually carried information.",
        },
        {
          t: "p",
          text: "That last part is what makes the finding hold. If the strangers had simply been projecting, they would have agreed with each other and been wrong together. Instead they were reading something that was really there.",
        },
        {
          t: "h2",
          text: "Which part of you does music reveal?",
        },
        {
          t: "p",
          text: "Mostly openness to experience — how strongly someone is pulled toward the new, the complex, the unfamiliar.",
        },
        {
          t: "p",
          text: "Rentfrow and Gosling's earlier work sorted preferences into four broad groups rather than genres: reflective and complex (classical, jazz, folk, blues), intense and rebellious (rock, alternative, metal), upbeat and conventional (pop, country, soundtracks), and energetic and rhythmic (rap, soul, electronic). Preferences across these groups tracked a range of traits and even verbal ability, but openness was the one that kept surfacing (Rentfrow & Gosling, 2003).",
        },
        {
          t: "p",
          text: "A later and much larger study redrew the map into five factors — mellow, unpretentious, sophisticated, intense, contemporary — and found something more useful than the categories themselves. Taste clusters by how music **feels**, not by what it's called (Rentfrow, Goldberg & Levitin, 2011). Someone who loves both quiet folk records and slow ambient techno isn't being inconsistent. They're being unusually consistent, along an axis that genre labels can't see.",
        },
        {
          t: "p",
          text: "There's a version of this for how people think, too. Across more than four thousand participants, those who scored higher on empathizing preferred mellow music — gentle, emotionally deep, often sad. Those who scored higher on systemizing preferred intense music, with complexity and high arousal (Greenberg et al., 2015).",
        },
        {
          t: "h2",
          text: "Why does music come up before anything else?",
        },
        {
          t: "p",
          text: "Two things make it unusually good at the job.",
        },
        {
          t: "p",
          text: "It's hard to fake. You can name a favorite band you've heard twice, but a listening history is thousands of small decisions made when nobody was watching. Nobody designs it. It accumulates.",
        },
        {
          t: "p",
          text: "It's also fused to identity in a way most preferences aren't. Taste largely sets during adolescence, at the age when working out who you are is the entire project. Whatever you were playing then got folded into the answer, and it tends to stay folded in.",
        },
        {
          t: "h2",
          text: "So how do you actually read someone's taste?",
        },
        {
          t: "p",
          text: "Not from the list.",
        },
        {
          t: "p",
          text: "The effects here are modest. The Greenberg study reported partial eta-squared values of .04 and .03 for the differences in mellow and intense preferences — small, as the researchers said plainly themselves. A playlist nudges a stranger's guess in the right direction. It doesn't hand over a portrait, and any quiz that converts your top artists into a personality type is selling a small correlation as a diagnosis.",
        },
        {
          t: "p",
          text: "But that's a limit on the method, not on the information. The research points somewhere better. The signal lives in how a piece of music **feels** to the person listening, and feel doesn't appear anywhere in a list of artist names.",
        },
        {
          t: "p",
          text: "So ask why. Not \"what do you listen to,\" but \"what does that one do for you.\" The answers people give — it makes me feel like I'm in a film, it's the only thing that gets me out the door in the morning, my dad played it every Sunday — carry far more than the track ever did.",
        },
        {
          t: "p",
          text: "The genre is the packaging. The reason is the contents.",
        },
        {
          t: "h2",
          text: "Try this",
        },
        {
          t: "ol",
          items: [
            "**Look at your last twenty plays, not your favorites.** The favorites list is curated. The recently-played is what actually happened.",
            "**Describe your taste by feel instead of genre.** \"Things that build slowly\" tells someone more than \"indie\" does, and it's closer to how preference actually works.",
            "**Next time you ask what someone listens to, follow up once.** What does that one do for you? The follow-up is where the information is.",
            "**Notice the difference between what you play alone and what you play for other people.** Both are real. They're answering different questions.",
          ],
        },
        {
          t: "h2",
          text: "The gap worth noticing",
        },
        {
          t: "p",
          text: "That last one is where it gets interesting.",
        },
        {
          t: "p",
          text: "What you play for others is a statement about who you'd like to be seen as. What you play alone, on a Tuesday, with nobody around, is closer to who you're actually being. Most of us have some distance between the two, and the distance isn't a character flaw. It's just information.",
        },
        {
          t: "p",
          text: "That gap is worth watching, and not only in music. The person you'd describe yourself as and the person your ordinary days add up to are rarely the same person.",
        },
        {
          t: "h2",
          text: "FAQ",
        },
        {
          t: "h3",
          text: "Can you tell someone's personality from their music taste?",
        },
        {
          t: "p",
          text: "Partly. Strangers judging only from a list of favorite songs form impressions that are more accurate than chance. The accuracy is real but modest.",
        },
        {
          t: "h3",
          text: "Which personality trait is most linked to music preference?",
        },
        {
          t: "p",
          text: "Openness to experience shows the most consistent relationship across studies, particularly with reflective and complex music.",
        },
        {
          t: "h2",
          text: "References",
        },
        {
          t: "ul",
          items: [
            "Greenberg, D. M., Baron-Cohen, S., Stillwell, D. J., Kosinski, M., & Rentfrow, P. J. (2015). Musical preferences are linked to cognitive styles. PLOS ONE, 10(7), e0131151.",
            "Rentfrow, P. J., & Gosling, S. D. (2003). The do re mi's of everyday life: The structure and personality correlates of music preferences. Journal of Personality and Social Psychology, 84(6), 1236–1256.",
            "Rentfrow, P. J., & Gosling, S. D. (2006). Message in a ballad: The role of music preferences in interpersonal perception. Psychological Science, 17(3), 236–242.",
            "Rentfrow, P. J., Goldberg, L. R., & Levitin, D. J. (2011). The structure of musical preferences: A five-factor model. Journal of Personality and Social Psychology, 100(6), 1139–1157.",
          ],
        },
      ],
    },
    ko: {
      title: "좋아하는 음악으로 알 수 있는 성격",
      description: "음악 취향으로 성격을 알 수 있을까요. 심리학 연구가 밝혀낸 것과, 사람을 제대로 알고 싶을 때 물어야 할 질문을 정리했습니다.",
      tags: [
        "음악 취향 성격",
        "좋아하는 음악 성격",
        "플레이리스트 심리",
        "개방성",
      ],
      readingTime: "8분",
      body: [
        {
          t: "quote",
          text: "좋아하는 노래 열 곡. 그것만 봐도 처음 보는 사람이 생각보다 많이 알아맞힙니다.",
        },
        {
          t: "p",
          text: "**핵심 정리**",
        },
        {
          t: "ul",
          items: [
            "6주 동안 서로를 알아가게 했더니, 사람들은 영화보다도 책보다도 음악 이야기를 가장 많이 했습니다.",
            "좋아하는 노래 열 곡. 그것만 보고 처음 보는 사람들이 성격을 꽤 맞혔고, 다들 비슷하게 봤습니다.",
            "신호는 장르가 아니라 느낌에 있습니다. \"록 좋아해요\"는 거의 아무것도 알려주지 않지만, \"천천히 쌓이다 터지는 곡이 좋아요\"는 많은 걸 알려줍니다.",
          ],
        },
        {
          t: "p",
          text: "소개팅 자리. 아직 어색한 회식 옆자리. 대화가 한 번 끊기면 높은 확률로 이 질문이 나옵니다.",
        },
        {
          t: "p",
          text: "\"요즘 무슨 노래 들으세요?\"",
        },
        {
          t: "p",
          text: "MBTI를 묻는 것과 거의 같은 자리에 있는 질문이죠. 상대를 빨리 파악하고 싶을 때 꺼내는 카드요.",
        },
        {
          t: "p",
          text: "심리학자 렌트프로우와 고슬링도 같은 걸 봤습니다. 서로 모르는 사람들을 짝지어 6주 동안 온라인으로 대화하게 했더니, 가장 많이 나온 주제가 음악이었어요. 영화도 책도 고향 이야기도 아니었습니다(Rentfrow & Gosling, 2006).",
        },
        {
          t: "p",
          text: "다들 같은 질문을 꺼냅니다. 그러면 이게 실제로 통하는지도 물어볼 만하죠.",
        },
        {
          t: "h2",
          text: "플레이리스트만 보고 성격을 맞힐 수 있을까요",
        },
        {
          t: "p",
          text: "같은 연구의 후반부입니다. 참가자들이 가장 좋아하는 노래 열 곡을 적었습니다. 그 목록을 한 번도 만난 적 없는 사람들에게 건넸고요.",
        },
        {
          t: "p",
          text: "결과는 세 가지였습니다. 우연보다 잘 맞혔습니다. 평가한 사람들끼리도 비슷하게 봤습니다. 그리고 이들이 근거로 삼은 단서가, 실제로 정보를 담고 있는 단서였습니다.",
        },
        {
          t: "p",
          text: "마지막이 중요합니다. 그냥 넘겨짚은 거라면 다 같이 비슷하게, 그리고 다 같이 틀렸겠죠. 그런데 실제로 있는 걸 읽어냈습니다.",
        },
        {
          t: "h2",
          text: "음악은 나의 어떤 면을 드러낼까요",
        },
        {
          t: "p",
          text: "주로 개방성입니다. 새롭고 복잡하고 낯선 것에 얼마나 끌리는지를 말해요.",
        },
        {
          t: "p",
          text: "초기 연구는 취향을 장르가 아니라 네 갈래로 나눴습니다. 사색적이고 복잡한 쪽(클래식, 재즈, 포크), 강렬하고 반항적인 쪽(록, 메탈), 밝고 대중적인 쪽(팝, 컨트리, OST), 리듬이 살아 있는 쪽(랩, 소울, 일렉트로닉)이요. 여러 성격 특성과 이어졌지만, 계속 따라 나온 건 개방성이었습니다(Rentfrow & Gosling, 2003).",
        },
        {
          t: "p",
          text: "나중에 훨씬 큰 연구가 이걸 다섯 갈래로 다시 정리했습니다. 부드러움, 소박함, 세련됨, 강렬함, 동시대성이요. 그런데 분류보다 중요한 걸 하나 찾았어요. 사람의 취향은 장르가 아니라 음악이 주는 느낌을 따라 묶입니다(Rentfrow, Goldberg & Levitin, 2011).",
        },
        {
          t: "p",
          text: "조용한 포크도 듣고 느린 앰비언트도 듣는 사람은 취향이 없는 게 아닙니다. 장르 이름으로는 안 보이는 축 위에서 아주 일관돼 있는 거예요.",
        },
        {
          t: "p",
          text: "생각하는 방식으로 접근한 연구도 있습니다. 4천 명 넘게 참여했는데, 남의 감정을 잘 읽는 쪽은 부드럽고 감정이 깊은 음악을 좋아했습니다. 규칙과 구조를 파고드는 쪽은 강렬하고 복잡한 음악을 좋아했고요(Greenberg 외, 2015).",
        },
        {
          t: "h2",
          text: "왜 하필 음악부터 물을까요",
        },
        {
          t: "p",
          text: "두 가지 때문입니다.",
        },
        {
          t: "p",
          text: "음악은 꾸며내기 어렵습니다. 좋아하는 밴드 이름 하나야 지어낼 수 있죠. 하지만 실제로 들어온 기록은 아무도 안 볼 때 내린 수천 번의 선택이 쌓인 겁니다. 설계한 게 아니라 그냥 쌓인 거예요.",
        },
        {
          t: "p",
          text: "그리고 음악은 정체성에 붙어 있습니다. 취향은 대개 십 대에 자리를 잡아요. 하필 '나는 어떤 사람인가'가 가장 큰 숙제인 나이죠. 그때 듣던 음악은 그 답의 일부가 되고, 잘 안 떨어집니다.",
        },
        {
          t: "h2",
          text: "그럼 어떻게 물어야 할까요",
        },
        {
          t: "p",
          text: "목록으로는 안 됩니다.",
        },
        {
          t: "p",
          text: "효과 크기는 크지 않아요. 앞서 말한 연구에서 나온 값은 .04와 .03이었고, 연구진도 작다고 분명히 적었습니다. 플레이리스트를 알면 추측이 맞는 쪽으로 조금 움직입니다. 그 사람을 알게 되지는 않고요. 자주 듣는 가수를 넣으면 성격 유형이 나오는 테스트는, 작은 상관관계를 진단서처럼 파는 겁니다.",
        },
        {
          t: "p",
          text: "그런데 이건 방법의 한계지 정보가 없다는 뜻이 아닙니다. 연구가 가리키는 곳은 따로 있어요. 신호는 그 음악이 그 사람에게 어떤 느낌으로 닿는지에 있습니다. 그리고 느낌은 가수 이름 목록에 안 적혀 있고요.",
        },
        {
          t: "p",
          text: "그러니 이유를 물으면 됩니다. \"무슨 노래 들으세요\"가 아니라 \"그 노래가 왜 좋아요\"요.",
        },
        {
          t: "p",
          text: "돌아오는 답이 훨씬 많은 걸 알려줍니다. 듣고 있으면 영화 속에 있는 것 같아서. 이거 아니면 아침에 못 나가서. 아빠가 주말마다 틀어놔서.",
        },
        {
          t: "p",
          text: "장르는 포장입니다. 이유가 내용이고요.",
        },
        {
          t: "h2",
          text: "오늘 해볼 것",
        },
        {
          t: "ol",
          items: [
            "**'좋아요' 목록 말고 최근 재생 20곡을 봅니다.** 앞은 정리해 둔 목록이고, 뒤가 실제로 일어난 일입니다.",
            "**장르 대신 느낌으로 설명해 봅니다.** \"인디 좋아해요\"보다 \"천천히 쌓이다 터지는 곡이 좋아요\"가 더 많은 걸 전합니다.",
            "**다음에 무슨 노래 듣냐고 물으면, 한 번만 더 물어보세요.** 그 노래가 왜 좋냐고요. 진짜 정보는 거기 있습니다.",
            "**혼자 들을 때와 남과 있을 때 트는 음악이 어떻게 다른지 봅니다.** 둘 다 진짜예요. 다른 질문에 답하고 있을 뿐입니다.",
          ],
        },
        {
          t: "h2",
          text: "그 간격에 대하여",
        },
        {
          t: "p",
          text: "마지막이 가장 흥미롭습니다.",
        },
        {
          t: "p",
          text: "남 앞에서 트는 음악은 '이렇게 보이고 싶다'에 가깝습니다. 아무도 없는 화요일 밤에 혼자 트는 음악은 '지금 이런 상태다'에 가깝고요. 둘 사이에 거리가 좀 있는 게 보통이고, 그건 흠이 아니라 그냥 정보입니다.",
        },
        {
          t: "p",
          text: "음악에서만 그런 것도 아니에요. 스스로를 설명하는 문장과, 평범한 하루가 쌓아 올린 모습은 잘 안 겹칩니다.",
        },
        {
          t: "h2",
          text: "자주 묻는 질문",
        },
        {
          t: "h3",
          text: "음악 취향으로 성격을 알 수 있나요?",
        },
        {
          t: "p",
          text: "어느 정도는요. 좋아하는 노래 목록만 본 사람들이 우연히보다 잘 맞혔습니다. 다만 그것만으로 사람을 다 알 수는 없습니다.",
        },
        {
          t: "h3",
          text: "음악 취향과 가장 관련이 깊은 성격은 무엇인가요?",
        },
        {
          t: "p",
          text: "개방성입니다. 특히 사색적이고 복잡한 음악을 좋아하는 경향과 가장 꾸준히 이어집니다.",
        },
        {
          t: "h2",
          text: "참고 문헌",
        },
        {
          t: "ul",
          items: [
            "Greenberg, D. M., Baron-Cohen, S., Stillwell, D. J., Kosinski, M., & Rentfrow, P. J. (2015). Musical preferences are linked to cognitive styles. PLOS ONE, 10(7), e0131151.",
            "Rentfrow, P. J., & Gosling, S. D. (2003). The do re mi's of everyday life: The structure and personality correlates of music preferences. Journal of Personality and Social Psychology, 84(6), 1236–1256.",
            "Rentfrow, P. J., & Gosling, S. D. (2006). Message in a ballad: The role of music preferences in interpersonal perception. Psychological Science, 17(3), 236–242.",
            "Rentfrow, P. J., Goldberg, L. R., & Levitin, D. J. (2011). The structure of musical preferences: A five-factor model. Journal of Personality and Social Psychology, 100(6), 1139–1157.",
          ],
        },
      ],
    },
  },
{
    slug: "why-new-habits-fail-after-three-days",
    date: "2026-09-01",
    en: {
      title: "Why New Habits Fail — And How to Build One That Sticks",
      description: "Most new habits fail within a week, and the problem is not your willpower. Here are the three points where habits break, and how to design one that survives your worst day.",
      tags: [
        "habit building",
        "routines",
        "motivation",
      ],
      readingTime: "5 min read",
      body: [
        {
          t: "p",
          text: "\"This time will be different.\" You start on Monday, keep it up on Tuesday, and by Thursday you come up with an excuse. Most people read that as a character flaw and conclude they simply lack discipline.",
        },
        {
          t: "p",
          text: "They are usually wrong. Habits break at three specific points, and all three are **design problems**, not willpower problems. Once you see them, you can build around them.",
        },
        {
          t: "h2",
          text: "1. The habit is sized for your best day",
        },
        {
          t: "p",
          text: "“Exercise for 30 minutes every day” is a plan written on a good day — rested, motivated, with a free evening. But a habit is not decided on your best day. It is decided on your **worst** one: the day you worked late, slept badly, or came home with nothing left.",
        },
        {
          t: "p",
          text: "If the habit only fits into good days, it disappears the first time life gets in the way. So pick a starting size you could finish in thirty seconds while actively not wanting to do it. Three squats. One glass of water. One paragraph of a book.",
        },
        {
          t: "p",
          text: "It will feel almost embarrassingly small. That is the point — a habit you never skip is worth more than an ambitious one you abandon, because the version that survives three weeks is the only one that can grow.",
        },
        {
          t: "h2",
          text: "2. One missed day gets labeled a failure",
        },
        {
          t: "p",
          text: "What ends a habit is rarely the missed day itself. It is the sentence that follows it: “I knew I would not keep this up.” That story turns one skipped day into three, and three into never.",
        },
        {
          t: "p",
          text: "The research on habit formation is reassuring here. A single lapse has almost no measurable effect on whether a behavior eventually becomes automatic. What breaks the pattern is **missing twice in a row**, because that is when the new default quietly reverts to the old one.",
        },
        {
          t: "quote",
          text: "You only need one rule: never miss twice in a row.",
        },
        {
          t: "p",
          text: "That rule also removes the all-or-nothing thinking. Missing Tuesday is not a broken streak — it is a Wednesday you show up for, even if all you do is the thirty-second version.",
        },
        {
          t: "h2",
          text: "3. Progress is invisible",
        },
        {
          t: "p",
          text: "Habits pay out on a delay. Reading ten pages a night, stretching before bed, drinking more water — none of it shows up for weeks. Motivation, meanwhile, is needed tonight. That gap is where most habits die.",
        },
        {
          t: "p",
          text: "The cheapest way to close it is to make today visible: a check mark, a streak count, a character that grows a little each time you follow through. You are not tricking yourself. You are giving a slow-paying investment a short-term receipt.",
        },
        {
          t: "ul",
          items: [
            "**Start with three routines or fewer.** More than that and they compete for the same limited attention until all of them collapse.",
            "**Anchor each one to something you already do.** “Stretch for one minute after brushing my teeth” beats “stretch more” because the trigger is already in your day.",
            "**Log it in five seconds.** Done or not done is enough. Anything more elaborate becomes its own chore.",
          ],
        },
        {
          t: "h2",
          text: "One thing to try today",
        },
        {
          t: "p",
          text: "Take the habit you most want, shrink it to **a tenth of its size**, do that version today, and record it somewhere you will see tomorrow. Then repeat it tomorrow. Scaling up is the easy part — it happens naturally once showing up stops requiring a decision.",
        },
        {
          t: "p",
          text: "Souling is built around that loop. You pick from 200+ daily routines, check them off, and a character grows alongside your streak, so the progress you cannot feel yet is something you can actually see.",
        },
      ],
    },
    ko: {
      title: "작심삼일은 의지 부족이 아니다 — 습관이 3일 만에 무너지는 이유",
      description: "새로운 습관이 일주일을 못 넘기는 건 의지가 약해서가 아닙니다. 습관이 무너지는 세 지점과, 최악의 날에도 살아남는 습관을 설계하는 방법을 정리했습니다.",
      tags: [
        "습관 만들기",
        "작심삼일",
        "루틴",
      ],
      readingTime: "5분",
      body: [
        {
          t: "p",
          text: "이번엔 진짜 해보자고 마음먹고 월요일에 시작해서 화요일까지 버티다가, 목요일쯤 조용히 사라진 계획이 누구에게나 몇 개쯤 있습니다. 대부분은 이걸 성격 탓으로 돌리고 나는 의지가 약한 사람이라고 결론 내립니다.",
        },
        {
          t: "p",
          text: "보통은 사실이 아닙니다. 습관은 정해진 세 지점에서 무너지고, 세 가지 모두 의지가 아니라 **설계의 문제**입니다. 어디서 무너지는지 알면 그 지점을 피해서 다시 짤 수 있습니다.",
        },
        {
          t: "h2",
          text: "1. 컨디션 좋은 날을 기준으로 크기를 정한다",
        },
        {
          t: "p",
          text: "“매일 30분 운동”은 잘 자고 의욕도 있고 저녁 시간까지 비어 있는 날에 세운 계획입니다. 하지만 습관이 살아남을지는 좋은 날이 아니라 **최악의 날**에 결정됩니다. 야근한 날, 잠을 설친 날, 아무것도 남아 있지 않은 채로 집에 온 날 말입니다.",
        },
        {
          t: "p",
          text: "좋은 날에만 들어가는 크기라면, 일상이 한 번 흔들리는 순간 사라집니다. 그러니 하기 싫은 상태에서도 30초 안에 끝낼 수 있는 크기로 시작하세요. 스쿼트 3개, 물 한 잔, 책 한 문단.",
        },
        {
          t: "p",
          text: "민망할 만큼 작게 느껴지는 게 정상입니다. 그게 핵심이에요. 3주 뒤에 남아 있는 습관만 키울 수 있고, 거창하지만 버려진 계획보다 한 번도 건너뛰지 않은 작은 습관이 훨씬 값어치가 큽니다.",
        },
        {
          t: "h2",
          text: "2. 하루 빠진 걸 실패로 처리한다",
        },
        {
          t: "p",
          text: "습관을 끝내는 건 빠진 하루가 아니라 그 뒤에 따라오는 한 문장입니다. “역시 나는 안 되네.” 이 말이 붙는 순간 하루가 사흘이 되고, 사흘이 영영이 됩니다.",
        },
        {
          t: "p",
          text: "다행히 습관 형성 연구가 알려주는 사실은 조금 너그럽습니다. 한 번의 누락은 행동이 자동화되는 과정에 거의 영향을 주지 않습니다. 흐름을 끊는 건 **연속으로 두 번 빠지는 것**입니다. 그때 기본값이 조용히 예전으로 돌아가거든요.",
        },
        {
          t: "quote",
          text: "규칙은 하나면 충분합니다. “두 번 연속으로는 빠지지 않는다.”",
        },
        {
          t: "p",
          text: "이 규칙 하나로 전부 아니면 전무라는 생각도 사라집니다. 화요일을 건너뛴 건 무너진 게 아니라, 수요일에 30초짜리 버전이라도 하면 되는 일이 됩니다.",
        },
        {
          t: "h2",
          text: "3. 진행 상황이 눈에 보이지 않는다",
        },
        {
          t: "p",
          text: "습관의 보상은 늦게 옵니다. 자기 전에 열 페이지 읽기, 스트레칭, 물 더 마시기 — 몇 주가 지나야 티가 납니다. 그런데 동기는 오늘 밤에 필요하죠. 대부분의 습관은 이 간격에서 죽습니다.",
        },
        {
          t: "p",
          text: "간격을 메우는 가장 싼 방법은 오늘 한 일을 보이게 만드는 것입니다. 체크 표시, 연속 일수, 실행할 때마다 조금씩 자라는 캐릭터처럼요. 스스로를 속이는 게 아니라, 늦게 정산되는 투자에 짧은 영수증을 붙여주는 셈입니다.",
        },
        {
          t: "ul",
          items: [
            "**루틴은 3개 이하로 시작한다.** 그 이상이면 같은 집중력을 두고 서로 경쟁하다가 전부 무너집니다.",
            "**이미 하는 행동 뒤에 붙인다.** “스트레칭 좀 하자”보다 “양치 후 1분 스트레칭”이 오래갑니다. 신호가 이미 하루 안에 있으니까요.",
            "**기록은 5초 안에 끝낸다.** 했는지 안 했는지만으로 충분합니다. 그보다 복잡해지면 기록 자체가 일이 됩니다.",
          ],
        },
        {
          t: "h2",
          text: "오늘 해볼 수 있는 한 가지",
        },
        {
          t: "p",
          text: "가장 만들고 싶은 습관을 하나 골라 **10분의 1 크기로 줄여서** 오늘 실행하고, 내일 눈에 띌 곳에 기록해 두세요. 그리고 내일 한 번 더. 키우는 건 쉬운 쪽입니다. 시작에 결심이 필요 없어지는 순간부터는 저절로 커지거든요.",
        },
        {
          t: "p",
          text: "소울링은 이 흐름을 그대로 담은 앱이에요. 200개가 넘는 데일리 루틴 중에 골라 체크하면, 아직 체감되지 않는 변화가 캐릭터의 성장으로 눈에 보이기 시작합니다.",
        },
      ],
    },
  },
];
