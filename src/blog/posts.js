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
    slug: 'music-taste-personality',
    date: '2026-09-03',
    updated: '2026-09-03',
    en: {
      title: 'What Your Music Taste Says About Your Personality',
      description:
        'Music preferences do reveal personality, but the effects are small. What four decades of research actually found, and why music is the first thing strangers talk about.',
      tags: [
        'music taste personality',
        'music preferences psychology',
        'openness to experience',
        'personality',
      ],
      readingTime: '8 min read',
      body: [
        {
          t: 'quote',
          text:
            'Strangers really can read something off your playlist.',
        },
        { t: 'p', text: '**Key points**' },
        {
          t: 'ul',
          items: [
            'When strangers are asked to get acquainted, music comes up more often than any other topic.',
            'Observers who see only a person\'s music preferences form personality impressions that are measurably better than chance, and they tend to use the cues that are actually valid.',
            'The link between music taste and personality is real but may be small.',
          ],
        },
        {
          t: 'p',
          text:
            'You meet someone at a party, or on a first date, or in the seat next to you on a long flight. Somewhere in the first ten minutes, one of you asks what the other listens to.',
        },
        {
          t: 'p',
          text:
            'It feels like small talk. It isn\'t, quite. When Peter Rentfrow and Samuel Gosling paired strangers up and gave them six weeks to get to know each other over online chat, music turned out to be the single most common topic of conversation — ahead of movies, books, sports, hometowns, and jobs (Rentfrow & Gosling, 2006). People reach for it first, and they keep reaching for it.',
        },
        {
          t: 'p',
          text:
            'Which raises the obvious question. If we all behave as though a person\'s music taste tells us something, is it actually telling us anything?',
        },
        { t: 'h2', text: 'Can someone really read you from your playlist?' },
        { t: 'p', text: 'Somewhat, yes.' },
        {
          t: 'p',
          text:
            'In the second half of that same 2006 study, participants handed over a list of their ten favorite songs. Complete strangers listened, and rated the person\'s personality. Three things came out of it. The strangers agreed with each other about what kind of person they were hearing. Their impressions lined up, better than chance, with how the person actually scored on personality measures. And the specific musical cues they were relying on turned out to be, for the most part, the valid ones — they weren\'t guessing well by accident.',
        },
        {
          t: 'p',
          text:
            'That last detail is the interesting one. It means the reading isn\'t purely projection. Something in the music is carrying real information, and listeners are picking up roughly the right signal.',
        },
        { t: 'h2', text: 'Which trait shows up most clearly?' },
        { t: 'p', text: 'Openness to experience.' },
        {
          t: 'p',
          text:
            'Rentfrow and Gosling\'s original work sorted music preferences into four broad dimensions rather than genres: Reflective and Complex (classical, jazz, folk, blues), Intense and Rebellious (rock, alternative, metal), Upbeat and Conventional (pop, country, soundtracks), and Energetic and Rhythmic (rap, soul, electronic). Preferences across these dimensions related to a range of traits, self-views, and even verbal ability — but openness was the thread that ran most consistently through them (Rentfrow & Gosling, 2003).',
        },
        {
          t: 'p',
          text:
            'A later, larger analysis refined the structure into five factors — Mellow, Unpretentious, Sophisticated, Intense, and Contemporary — and confirmed that preferences organize around the **feel** of music rather than its genre label (Rentfrow, Goldberg & Levitin, 2011). This is why "I like rock" is a nearly useless statement and "I like things that build slowly" is a fairly informative one.',
        },
        {
          t: 'p',
          text:
            'There\'s also a cognitive-style version of the finding. In a study of over four thousand people, those who scored higher on empathizing leaned toward Mellow music — gentle, emotionally deep, often sad. Those who scored higher on systemizing leaned toward Intense music — punk, metal, hard rock, with complexity and high arousal (Greenberg et al., 2015).',
        },
        { t: 'h2', text: 'Why music, and not food or movies?' },
        { t: 'p', text: 'Two reasons worth considering.' },
        {
          t: 'p',
          text:
            'Music is unusually cheap to signal with and unusually hard to fake at length. You can claim a favorite band, but a real listening history is thousands of small choices made when nobody was watching. It accumulates into something you didn\'t consciously design.',
        },
        {
          t: 'p',
          text:
            'It\'s also loaded with identity in a way most preferences aren\'t. Musical taste tends to form during adolescence, at the exact age when working out who you are is the central project. The music gets bound up with the self-definition, and it stays bound.',
        },
        { t: 'h2', text: 'How much of this should you actually believe?' },
        { t: 'p', text: 'Less than the quizzes suggest.' },
        {
          t: 'p',
          text:
            'The Greenberg study reported partial eta-squared values of .04 and .03 for the differences in Mellow and Intense preferences. Those are small effects. The researchers said so plainly, and noted they were in line with other findings in this area. Music preference explains a slice of the variation between people — not most of it, and not enough to build a portrait on.',
        },
        {
          t: 'p',
          text:
            'So the honest version reads like this: knowing your playlist shifts a stranger\'s guess about you in the right direction. It does not tell them who you are. Any quiz that reads your top artists and returns a personality type is taking a small correlation and selling it as a diagnosis.',
        },
        { t: 'h2', text: 'Try this' },
        {
          t: 'ol',
          items: [
            '**Look at your last twenty plays, not your favorites list.** The favorites list is curated. The recently-played is closer to the truth.',
            '**Ask what mood you reach for, rather than what genre.** The research organizes around feel, not label — and so, it turns out, do you.',
            '**Show the list to someone who knows you and ask what they\'d guess.** You\'ll learn more from where they\'re wrong than where they\'re right.',
            '**Notice the difference between what you play alone and what you play for other people.** Both are real. They\'re just answering different questions.',
          ],
        },
        { t: 'h2', text: 'The gap worth noticing' },
        {
          t: 'p',
          text: 'That last one is where it gets interesting.',
        },
        {
          t: 'p',
          text:
            'What you play for others is a statement about who you\'d like to be seen as. What you play alone, on a Tuesday, with nobody around, is closer to who you\'re actually being. Most of us have some distance between the two, and the distance isn\'t a character flaw — it\'s just information.',
        },
        {
          t: 'p',
          text:
            'That gap is the thing worth watching, and not only in music. The person you\'d describe yourself as and the person your ordinary days actually add up to are rarely identical.',
        },
        { t: 'h2', text: 'FAQ' },
        { t: 'h3', text: 'Can you tell someone\'s personality from their music taste?' },
        {
          t: 'p',
          text:
            'Partly. Strangers judging only from a list of favorite songs form impressions that are more accurate than chance. The accuracy is modest, not decisive.',
        },
        { t: 'h3', text: 'Which personality trait is most linked to music preference?' },
        {
          t: 'p',
          text:
            'Openness to experience shows the most consistent relationship across studies, particularly with reflective and complex music.',
        },
        { t: 'h2', text: 'References' },
        {
          t: 'ul',
          items: [
            'Greenberg, D. M., Baron-Cohen, S., Stillwell, D. J., Kosinski, M., & Rentfrow, P. J. (2015). Musical preferences are linked to cognitive styles. PLOS ONE, 10(7), e0131151.',
            'Rentfrow, P. J., & Gosling, S. D. (2003). The do re mi\'s of everyday life: The structure and personality correlates of music preferences. Journal of Personality and Social Psychology, 84(6), 1236–1256.',
            'Rentfrow, P. J., & Gosling, S. D. (2006). Message in a ballad: The role of music preferences in interpersonal perception. Psychological Science, 17(3), 236–242.',
            'Rentfrow, P. J., Goldberg, L. R., & Levitin, D. J. (2011). The structure of musical preferences: A five-factor model. Journal of Personality and Social Psychology, 100(6), 1139–1157.',
          ],
        },
      ],
    },
    ko: {
      title: '좋아하는 음악으로 알 수 있는 성격',
      description:
        '음악 취향으로 성격을 알 수 있을까요. 심리학 연구가 실제로 밝혀낸 것과, 성격 테스트가 과장하는 지점을 정리했습니다.',
      tags: ['음악 취향 성격', '좋아하는 음악 성격', '플레이리스트 심리', '개방성'],
      readingTime: '8분',
      body: [
        {
          t: 'quote',
          text: '음악 취향에는 성격이 묻어납니다. 다만 생각만큼 많이는 아닙니다.',
        },
        { t: 'p', text: '**핵심 정리**' },
        {
          t: 'ul',
          items: [
            '처음 만난 사람들끼리 나눈 대화에서 가장 자주 등장한 주제는 음악이었습니다.',
            '좋아하는 노래 목록만 보고 성격을 짐작한 사람들의 판단은 우연보다 정확했습니다.',
            '다만 음악 취향과 성격의 관계는 작습니다. 성격 테스트가 놓치는 지점이 정확히 여기입니다.',
          ],
        },
        {
          t: 'p',
          text:
            '소개팅 자리, 아직 어색한 회식 옆자리처럼 서로를 잘 모르는 상황이 있습니다. 대화가 잠깐 끊기면 꽤 높은 확률로 이 질문이 나옵니다. "요즘 무슨 노래 들으세요?"',
        },
        {
          t: 'p',
          text:
            'MBTI를 묻는 것과 거의 같은 자리에 놓인 질문입니다. 상대를 빠르게 파악하고 싶을 때 꺼내는 카드죠.',
        },
        {
          t: 'p',
          text:
            '연구에서도 같은 일이 벌어졌습니다. 심리학자 렌트프로우와 고슬링은 서로 모르는 사람들을 짝지어 온라인으로 대화하게 했습니다. 가장 많이 등장한 주제는 영화도, 책도, 고향도 아닌 음악이었습니다(Rentfrow & Gosling, 2006).',
        },
        {
          t: 'p',
          text:
            '그러면 궁금해집니다. 다들 음악 이야기로 상대를 파악하려 드는데, 그게 실제로 통하긴 할까요.',
        },
        { t: 'h2', text: '플레이리스트만 보고 성격을 맞힐 수 있을까요' },
        { t: 'p', text: '어느 정도는 맞힙니다.' },
        {
          t: 'p',
          text:
            '같은 연구의 후반부에서 참가자들은 가장 좋아하는 노래 열 곡을 적어 냈습니다. 그 목록만 받아 든 낯선 사람들이 상대의 성격을 평가했고, 결과는 세 가지로 나왔습니다. 평가자들끼리 의견이 비슷하게 모였고, 그 판단이 실제 성격 검사 결과와 우연 이상으로 일치했으며, 판단에 쓴 단서들도 대체로 타당한 것이었습니다.',
        },
        {
          t: 'p',
          text:
            '마지막 항목이 중요합니다. 운 좋게 맞힌 게 아니라, 음악 안에 실제로 정보가 담겨 있었고 듣는 쪽이 그 신호를 대체로 제대로 읽었다는 뜻이니까요.',
        },
        { t: 'h2', text: '어떤 성격이 가장 잘 드러날까요' },
        {
          t: 'p',
          text: '개방성입니다. 새로운 경험을 얼마나 반기는지를 뜻하는 성격 특성이죠.',
        },
        {
          t: 'p',
          text:
            '두 사람의 초기 연구는 음악 취향을 장르가 아니라 네 가지 결로 나눴습니다. 사색적이고 복잡한 음악(클래식, 재즈, 포크), 강렬하고 반항적인 음악(록, 메탈), 밝고 대중적인 음악(팝, 컨트리, OST), 리듬감 있는 음악(랩, 소울, 일렉트로닉)입니다. 이 결들은 여러 성격 특성과 이어졌지만, 가장 일관되게 따라온 축은 개방성이었습니다(Rentfrow & Gosling, 2003).',
        },
        {
          t: 'p',
          text:
            '이후 더 큰 규모의 연구에서는 다섯 요인으로 정리됩니다. 부드러움, 소박함, 세련됨, 강렬함, 동시대성입니다. 핵심은 사람들이 장르 이름이 아니라 음악의 질감을 기준으로 취향을 묶는다는 점이었습니다(Rentfrow, Goldberg & Levitin, 2011).',
        },
        {
          t: 'p',
          text:
            '그래서 "저는 록 좋아해요"는 정보가 거의 없는 문장이고, "천천히 쌓이다가 터지는 곡을 좋아해요"는 꽤 많은 걸 알려주는 문장입니다.',
        },
        {
          t: 'p',
          text:
            '인지 방식으로 접근한 연구도 있습니다. 4천 명이 넘는 참가자를 조사했더니, 타인의 감정을 잘 읽는 쪽은 부드럽고 감정의 깊이가 있는 음악을, 규칙과 구조를 파고드는 쪽은 강렬하고 복잡한 음악을 선호했습니다(Greenberg 외, 2015).',
        },
        { t: 'h2', text: '왜 하필 음악일까요' },
        { t: 'p', text: '두 가지쯤 짚어볼 만합니다.' },
        {
          t: 'p',
          text:
            '음악은 꾸며내기가 어렵습니다. 좋아하는 밴드 이름 하나는 지어낼 수 있지만, 실제 청취 기록은 아무도 안 볼 때 내린 수천 번의 선택이 쌓인 결과입니다. 의도해서 만든 게 아니라서 오히려 정직합니다.',
        },
        {
          t: 'p',
          text:
            '그리고 음악은 정체성에 붙어 있습니다. 취향이 자리 잡는 시기는 대체로 십 대인데, 하필 \'나는 어떤 사람인가\'가 가장 큰 숙제인 나이입니다. 그때 들은 음악은 자기 정의와 한 덩어리가 되고, 잘 떨어지지 않습니다.',
        },
        { t: 'h2', text: '그래서 얼마나 믿어도 될까요' },
        {
          t: 'p',
          text: '성격 테스트가 말하는 것보다는 훨씬 덜 믿어야 합니다.',
        },
        {
          t: 'p',
          text:
            '앞서 말한 인지 방식 연구에서 보고된 효과 크기는 .04와 .03이었습니다. 작은 값입니다. 연구진도 이 점을 분명히 적었고, 이 분야의 다른 결과들과 비슷한 수준이라고 덧붙였습니다.',
        },
        {
          t: 'p',
          text:
            '정리하면 이렇습니다. 플레이리스트를 알면 상대에 대한 추측이 맞는 방향으로 조금 움직입니다. 그 사람이 누구인지 알게 되는 건 아닙니다. 자주 듣는 아티스트를 넣으면 성격 유형을 내주는 테스트들은, 작은 상관관계를 진단서처럼 파는 셈입니다.',
        },
        {
          t: 'p',
          text:
            'MBTI를 두고 이미 느끼는 피로감이 있다면, 음악 취향 테스트에도 똑같이 적용하면 됩니다.',
        },
        { t: 'h2', text: '오늘 해볼 것' },
        {
          t: 'ol',
          items: [
            '**\'좋아요\' 목록 말고 최근 재생 20곡을 봅니다.** 앞은 정리된 목록이고, 뒤가 실제에 가깝습니다.',
            '**장르 대신 기분으로 물어봅니다.** 연구가 질감을 기준으로 묶였듯, 실제 취향도 그렇게 움직입니다.',
            '**나를 잘 아는 사람에게 목록을 보여주고 뭘 짐작하는지 물어봅니다.** 맞힌 부분보다 틀린 부분에서 배울 게 많습니다.',
            '**혼자 들을 때와 남과 있을 때 트는 음악의 차이를 봅니다.** 둘 다 진짜입니다. 다른 질문에 답하고 있을 뿐이죠.',
          ],
        },
        { t: 'h2', text: '그 간격에 대하여' },
        { t: 'p', text: '마지막 항목이 가장 흥미롭습니다.' },
        {
          t: 'p',
          text:
            '남에게 트는 음악은 \'이렇게 보이고 싶다\'에 가깝고, 아무도 없는 화요일 밤에 혼자 트는 음악은 \'실제로 그런 상태다\'에 가깝습니다. 대부분 그 사이에 어느 정도 간격이 있고, 그건 흠이 아니라 그냥 정보입니다.',
        },
        {
          t: 'p',
          text:
            '눈여겨볼 만한 건 그 간격이에요. 음악에서만 그런 것도 아닙니다. 스스로를 설명하는 문장과, 평범한 하루하루가 실제로 쌓아 올린 모습은 좀처럼 같지 않으니까요. [소울링](/)이 보는 지점도 거기입니다. 스스로 고른 이름표가 아니라, 화요일에 실제로 하고 있는 일 쪽이요.',
        },
        { t: 'h2', text: '자주 묻는 질문' },
        { t: 'h3', text: '음악 취향으로 성격을 알 수 있나요?' },
        {
          t: 'p',
          text:
            '부분적으로는 가능합니다. 좋아하는 노래 목록만 본 낯선 사람들의 판단이 우연보다 정확했습니다. 다만 정확도가 크지는 않습니다.',
        },
        { t: 'h3', text: '음악 취향과 가장 관련이 깊은 성격은 무엇인가요?' },
        {
          t: 'p',
          text:
            '개방성입니다. 특히 사색적이고 복잡한 음악을 좋아하는 경향과 가장 일관되게 이어집니다.',
        },
        { t: 'h3', text: '음악 취향 성격 테스트는 믿을 만한가요?' },
        {
          t: 'p',
          text:
            '아닙니다. 근거가 되는 상관관계는 작은데, 테스트는 이를 확정된 유형처럼 제시합니다. 재미로 보는 편이 맞습니다.',
        },
        { t: 'h2', text: '참고 문헌' },
        {
          t: 'ul',
          items: [
            'Greenberg, D. M., Baron-Cohen, S., Stillwell, D. J., Kosinski, M., & Rentfrow, P. J. (2015). Musical preferences are linked to cognitive styles. PLOS ONE, 10(7), e0131151.',
            'Rentfrow, P. J., & Gosling, S. D. (2003). The do re mi\'s of everyday life: The structure and personality correlates of music preferences. Journal of Personality and Social Psychology, 84(6), 1236–1256.',
            'Rentfrow, P. J., & Gosling, S. D. (2006). Message in a ballad: The role of music preferences in interpersonal perception. Psychological Science, 17(3), 236–242.',
            'Rentfrow, P. J., Goldberg, L. R., & Levitin, D. J. (2011). The structure of musical preferences: A five-factor model. Journal of Personality and Social Psychology, 100(6), 1139–1157.',
          ],
        },
      ],
    },
  },
  {
    slug: 'why-new-habits-fail-after-three-days',
    date: '2026-09-01',
    en: {
      title: 'Why New Habits Fail — And How to Build One That Sticks',
      description:
        'Most new habits fail within a week, and the problem is not your willpower. Here are the three points where habits break, and how to design one that survives your worst day.',
      tags: ['habit building', 'routines', 'motivation'],
      readingTime: '5 min read',
      body: [
        {
          t: 'p',
          text:
            '"This time will be different." You start on Monday, keep it up on Tuesday, and by Thursday you come up with an excuse. Most people read that as a character flaw and conclude they simply lack discipline.',
        },
        {
          t: 'p',
          text:
            'They are usually wrong. Habits break at three specific points, and all three are **design problems**, not willpower problems. Once you see them, you can build around them.',
        },
        { t: 'h2', text: '1. The habit is sized for your best day' },
        {
          t: 'p',
          text:
            '“Exercise for 30 minutes every day” is a plan written on a good day — rested, motivated, with a free evening. But a habit is not decided on your best day. It is decided on your **worst** one: the day you worked late, slept badly, or came home with nothing left.',
        },
        {
          t: 'p',
          text:
            'If the habit only fits into good days, it disappears the first time life gets in the way. So pick a starting size you could finish in thirty seconds while actively not wanting to do it. Three squats. One glass of water. One paragraph of a book.',
        },
        {
          t: 'p',
          text:
            'It will feel almost embarrassingly small. That is the point — a habit you never skip is worth more than an ambitious one you abandon, because the version that survives three weeks is the only one that can grow.',
        },
        { t: 'h2', text: '2. One missed day gets labeled a failure' },
        {
          t: 'p',
          text:
            'What ends a habit is rarely the missed day itself. It is the sentence that follows it: “I knew I would not keep this up.” That story turns one skipped day into three, and three into never.',
        },
        {
          t: 'p',
          text:
            'The research on habit formation is reassuring here. A single lapse has almost no measurable effect on whether a behavior eventually becomes automatic. What breaks the pattern is **missing twice in a row**, because that is when the new default quietly reverts to the old one.',
        },
        {
          t: 'quote',
          text: 'You only need one rule: never miss twice in a row.',
        },
        {
          t: 'p',
          text:
            'That rule also removes the all-or-nothing thinking. Missing Tuesday is not a broken streak — it is a Wednesday you show up for, even if all you do is the thirty-second version.',
        },
        { t: 'h2', text: '3. Progress is invisible' },
        {
          t: 'p',
          text:
            'Habits pay out on a delay. Reading ten pages a night, stretching before bed, drinking more water — none of it shows up for weeks. Motivation, meanwhile, is needed tonight. That gap is where most habits die.',
        },
        {
          t: 'p',
          text:
            'The cheapest way to close it is to make today visible: a check mark, a streak count, a character that grows a little each time you follow through. You are not tricking yourself. You are giving a slow-paying investment a short-term receipt.',
        },
        {
          t: 'ul',
          items: [
            '**Start with three routines or fewer.** More than that and they compete for the same limited attention until all of them collapse.',
            '**Anchor each one to something you already do.** “Stretch for one minute after brushing my teeth” beats “stretch more” because the trigger is already in your day.',
            '**Log it in five seconds.** Done or not done is enough. Anything more elaborate becomes its own chore.',
          ],
        },
        { t: 'h2', text: 'One thing to try today' },
        {
          t: 'p',
          text:
            'Take the habit you most want, shrink it to **a tenth of its size**, do that version today, and record it somewhere you will see tomorrow. Then repeat it tomorrow. Scaling up is the easy part — it happens naturally once showing up stops requiring a decision.',
        },
        {
          t: 'p',
          text:
            'Souling is built around that loop. You pick from 200+ daily routines, check them off, and a character grows alongside your streak, so the progress you cannot feel yet is something you can actually see.',
        },
      ],
    },
    ko: {
      title: '작심삼일은 의지 부족이 아니다 — 습관이 3일 만에 무너지는 이유',
      description:
        '새로운 습관이 일주일을 못 넘기는 건 의지가 약해서가 아닙니다. 습관이 무너지는 세 지점과, 최악의 날에도 살아남는 습관을 설계하는 방법을 정리했습니다.',
      tags: ['습관 만들기', '작심삼일', '루틴'],
      readingTime: '5분',
      body: [
        {
          t: 'p',
          text:
            '이번엔 진짜 해보자고 마음먹고 월요일에 시작해서 화요일까지 버티다가, 목요일쯤 조용히 사라진 계획이 누구에게나 몇 개쯤 있습니다. 대부분은 이걸 성격 탓으로 돌리고 나는 의지가 약한 사람이라고 결론 내립니다.',
        },
        {
          t: 'p',
          text:
            '보통은 사실이 아닙니다. 습관은 정해진 세 지점에서 무너지고, 세 가지 모두 의지가 아니라 **설계의 문제**입니다. 어디서 무너지는지 알면 그 지점을 피해서 다시 짤 수 있습니다.',
        },
        { t: 'h2', text: '1. 컨디션 좋은 날을 기준으로 크기를 정한다' },
        {
          t: 'p',
          text:
            '“매일 30분 운동”은 잘 자고 의욕도 있고 저녁 시간까지 비어 있는 날에 세운 계획입니다. 하지만 습관이 살아남을지는 좋은 날이 아니라 **최악의 날**에 결정됩니다. 야근한 날, 잠을 설친 날, 아무것도 남아 있지 않은 채로 집에 온 날 말입니다.',
        },
        {
          t: 'p',
          text:
            '좋은 날에만 들어가는 크기라면, 일상이 한 번 흔들리는 순간 사라집니다. 그러니 하기 싫은 상태에서도 30초 안에 끝낼 수 있는 크기로 시작하세요. 스쿼트 3개, 물 한 잔, 책 한 문단.',
        },
        {
          t: 'p',
          text:
            '민망할 만큼 작게 느껴지는 게 정상입니다. 그게 핵심이에요. 3주 뒤에 남아 있는 습관만 키울 수 있고, 거창하지만 버려진 계획보다 한 번도 건너뛰지 않은 작은 습관이 훨씬 값어치가 큽니다.',
        },
        { t: 'h2', text: '2. 하루 빠진 걸 실패로 처리한다' },
        {
          t: 'p',
          text:
            '습관을 끝내는 건 빠진 하루가 아니라 그 뒤에 따라오는 한 문장입니다. “역시 나는 안 되네.” 이 말이 붙는 순간 하루가 사흘이 되고, 사흘이 영영이 됩니다.',
        },
        {
          t: 'p',
          text:
            '다행히 습관 형성 연구가 알려주는 사실은 조금 너그럽습니다. 한 번의 누락은 행동이 자동화되는 과정에 거의 영향을 주지 않습니다. 흐름을 끊는 건 **연속으로 두 번 빠지는 것**입니다. 그때 기본값이 조용히 예전으로 돌아가거든요.',
        },
        {
          t: 'quote',
          text: '규칙은 하나면 충분합니다. “두 번 연속으로는 빠지지 않는다.”',
        },
        {
          t: 'p',
          text:
            '이 규칙 하나로 전부 아니면 전무라는 생각도 사라집니다. 화요일을 건너뛴 건 무너진 게 아니라, 수요일에 30초짜리 버전이라도 하면 되는 일이 됩니다.',
        },
        { t: 'h2', text: '3. 진행 상황이 눈에 보이지 않는다' },
        {
          t: 'p',
          text:
            '습관의 보상은 늦게 옵니다. 자기 전에 열 페이지 읽기, 스트레칭, 물 더 마시기 — 몇 주가 지나야 티가 납니다. 그런데 동기는 오늘 밤에 필요하죠. 대부분의 습관은 이 간격에서 죽습니다.',
        },
        {
          t: 'p',
          text:
            '간격을 메우는 가장 싼 방법은 오늘 한 일을 보이게 만드는 것입니다. 체크 표시, 연속 일수, 실행할 때마다 조금씩 자라는 캐릭터처럼요. 스스로를 속이는 게 아니라, 늦게 정산되는 투자에 짧은 영수증을 붙여주는 셈입니다.',
        },
        {
          t: 'ul',
          items: [
            '**루틴은 3개 이하로 시작한다.** 그 이상이면 같은 집중력을 두고 서로 경쟁하다가 전부 무너집니다.',
            '**이미 하는 행동 뒤에 붙인다.** “스트레칭 좀 하자”보다 “양치 후 1분 스트레칭”이 오래갑니다. 신호가 이미 하루 안에 있으니까요.',
            '**기록은 5초 안에 끝낸다.** 했는지 안 했는지만으로 충분합니다. 그보다 복잡해지면 기록 자체가 일이 됩니다.',
          ],
        },
        { t: 'h2', text: '오늘 해볼 수 있는 한 가지' },
        {
          t: 'p',
          text:
            '가장 만들고 싶은 습관을 하나 골라 **10분의 1 크기로 줄여서** 오늘 실행하고, 내일 눈에 띌 곳에 기록해 두세요. 그리고 내일 한 번 더. 키우는 건 쉬운 쪽입니다. 시작에 결심이 필요 없어지는 순간부터는 저절로 커지거든요.',
        },
        {
          t: 'p',
          text:
            '소울링은 이 흐름을 그대로 담은 앱이에요. 200개가 넘는 데일리 루틴 중에 골라 체크하면, 아직 체감되지 않는 변화가 캐릭터의 성장으로 눈에 보이기 시작합니다.',
        },
      ],
    },
  },
];
