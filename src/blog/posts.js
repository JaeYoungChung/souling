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
