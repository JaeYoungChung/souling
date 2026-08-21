// ─────────────────────────────────────────────────────────────
// 영웅 유형 테스트 — 유형 데이터 (16개)
//
// 각 유형에서 아직 비어 있는 항목 (채우면 화면에 바로 나타남):
//   image        : 유형 대표 이미지 경로 (예: '/hero-test/img/odysseus.png' — public 폴더 기준)
//   riveFigure   : 이 유형의 또 다른 인물 (rive 파일 경로 + 아트보드/스테이트머신 이름)
//   habits[].image : 습관 이미지 경로
//   ogImage      : 공유 링크 미리보기용 이미지 경로 (카카오톡/X 미리보기에 사용)
//
// habits는 { image, title: {ko,en}, desc: {ko,en} } 구조입니다.
// desc가 비어 있으면 제목만 표시됩니다.
//
// stats      : 화면에 표시되는 대표 능력치 2개 (결과 페이지 칩 등)
// signatures : 이 유형에 배정된 능력치 조합 목록 (채점용 — 순서 무관).
//              1등 능력치가 포함된 조합 중 2등, 3등… 능력치와 먼저
//              맞아떨어지는 조합의 유형이 결과가 됩니다.
//              조합은 유형 간에 중복되면 안 됩니다.
//
// ⚠️ 이 파일은 빌드 스크립트(scripts/generate-og-pages.js)가 직접 읽어서 평가하므로
//    import 문을 추가하지 마세요. 순수 데이터만 넣어야 합니다.
// ─────────────────────────────────────────────────────────────

export const STATS = [
  { id: 'might',        label: { ko: '무력', en: 'Might' } },
  { id: 'wit',          label: { ko: '지략', en: 'Wits' } },
  { id: 'will',         label: { ko: '의지', en: 'Will' } },
  { id: 'independence', label: { ko: '독립', en: 'Independence' } },
  { id: 'bond',         label: { ko: '연대', en: 'Bond' } },
  { id: 'impulse',      label: { ko: '충동', en: 'Impulse' } },
  { id: 'precision',    label: { ko: '정교', en: 'Precision' } },
  { id: 'instinct',     label: { ko: '직감', en: 'Instinct' } },
  { id: 'charm',        label: { ko: '매혹', en: 'Charm' } },
];

// 유형 순서 = 동점 시 우선순위 (앞에 있을수록 우선)
export const HERO_TYPES = [
  // ── 1. 타고난 재주꾼 — 오르페우스 (매혹+정교) ──
  {
    id: 'orpheus', code: 'orp',
    stats: ['charm', 'precision'],
    signatures: [['precision', 'charm']],
    name: { ko: '타고난 재주꾼', en: 'The Natural Born' },
    heroName: { ko: '오르페우스', en: 'Orpheus' },
    image: '/hero-test/img/orpheus.jpg',
    hook: {
      ko: '뭘 해도 곧잘 하죠. 그게 문제고요.',
      en: "You're good at everything you try. That's the problem.",
    },
    description: {
      ko: [
        '새로 시작한 게 이상하게 금방 늡니다. 남들이 몇 달 걸린다는 걸 몇 주 만에 어느 정도까지 해내고, 그래서 주변에서 “너는 뭘 해도 하겠다”는 말을 자주 들어요. 문제는 그 말이 칭찬인 동시에 함정이라는 거예요. 어느 정도까지는 쉽게 가는데, 그 위로 올라가려면 처음부터 지루한 반복을 견뎌야 하거든요.',
        '오르페우스는 노래 하나로 짐승, 나무, 저승의 왕의 마음까지도 움직였습니다. 당신이 제대로 몰입해서 만든 것에는, 잘 만들었다는 것과는 다른 무언가가 있어요. 사람 마음을 건드리는 힘이요.',
      ],
      en: [
        "Whatever you start, you improve strangely fast. Things that take others months, you get decently good at in weeks — so you keep hearing “you’d succeed at anything.” The problem is that the compliment is also a trap. Up to a point everything comes easy, but climbing past that point means enduring the boring repetition from square one.",
        "With a single song, Orpheus moved beasts, trees, even the heart of the king of the underworld. The things you make when you’re truly immersed carry something beyond being well made — the power to touch people’s hearts.",
      ],
    },
    strengths: [
      {
        title: { ko: '습득력', en: 'Quick learner' },
        body: {
          ko: '새로운 것에 대한 감을 빠르게 습득합니다.',
          en: 'You are a fast learner on diverse fields.',
        },
      },
      {
        title: { ko: '전달력', en: 'Delivery' },
        body: {
          ko: '같은 내용도 당신이 하면 더 잘 전달됩니다.',
          en: 'The same message lands better when it comes from you.',
        },
      },
      {
        title: { ko: '안목', en: 'An eye for quality' },
        body: {
          ko: '좋은 것과 적당한 것을 잘 구분합니다.',
          en: 'You can tell the real thing from the merely fine, immediately.',
        },
      },
    ],
    caution: {
      ko: '재능이 있으면 노력이 잘 안 보입니다. “이 정도면 됐지”에서 멈춘 것들이 쌓이면, 잘하는 게 많은데 내세울 게 하나도 없는 사람이 돼요.',
      en: "Talent hides effort. If the things you left at “good enough” keep piling up, you end up good at many things, but not the best at anything.",
    },
    riveFigure: {
      src: '/hero-test/rive/beethoven.riv',
      artboard: 'Beethoven',
      stateMachine: 'StateMachine:Motion',
      name: { ko: '베토벤', en: 'Ludwig van Beethoven' },
    },
    habits: [
      {
        image: '',
        title: { ko: '지금 필요한 것 하나 배우기', en: 'Learn one thing I need right now' },
        desc: {
          ko: '초심으로 돌아가는 감각이 당신의 성장 근육입니다',
          en: "Returning to a beginner’s mind is your growth muscle",
        },
      },
      {
        image: '',
        title: { ko: '오늘의 깨달음 하나 기록하기', en: 'Write one insight from today' },
        desc: { ko: '내일의 나를 위해 지혜 한 조각을 남겨놓아요.', en: 'One thought worth keeping.' },
      },
      {
        image: '',
        title: { ko: '새로운 기록에 도전하기', en: 'Attempt to set a personal record' },
        desc: { ko: '“이 정도면 됐지”에서 멈추지 말아봐요', en: 'Sometimes, "good enough" is not enough' },
      },
    ],
    ogImage: '/hero-test/img/orpheus.jpg',
  },

  // ── 2. 외로운 늑대 — 미야모토 무사시 (독립+의지) ──
  {
    id: 'musashi', code: 'mus',
    stats: ['independence', 'will'],
    signatures: [['independence', 'will']],
    name: { ko: '외로운 늑대', en: 'The Lone Wolf' },
    heroName: { ko: '미야모토 무사시', en: 'Miyamoto Musashi' },
    image: '/hero-test/img/musashi.jpg',
    hook: {
      ko: '같이 하자는 말이 부담스러운 건, 이상한 게 아니에요.',
      en: "You'd rather just do it alone. That's not a flaw.",
    },
    description: {
      ko: [
        '사람이 싫은 건 아닙니다. 다만 여럿이 있으면 에너지가 새어나가는 느낌이 들고, 혼자 있는 시간에야 비로소 머리가 제대로 돌아가죠. 남들이 다 하는 방식이라는 이유만으로 따라간 적이 거의 없고, 도움을 요청하느니 밤새워서라도 혼자 끝내는 쪽을 택합니다.',
        '무사시는 유파도, 주군도, 스승도 없었습니다. 60번의 결투를 전부 자기 방식으로 이겼고, 마지막엔 동굴에 들어가 자신의 궁극의 이론을 책으로 남겼어요. 혼자였기 때문에 아무도 못 만든 것을 만든 사람입니다.',
      ],
      en: [
        "It’s not that you dislike people. It’s that being in a group feels energy draining, and your mind truly works in the hours you spend alone. You’ve almost never followed a way of doing things just because everyone does it that way, and you’d rather stay up all night finishing something alone than ask for help.",
        "Musashi had no school, no lord, no master. He won all sixty of his duels his own way, and at the end he withdrew into a cave and wrote down his ultimate theory in a book. He created what no one else could — precisely because he was alone.",
      ],
    },
    strengths: [
      {
        title: { ko: '확실한 기준', en: 'Firm standards' },
        body: {
          ko: '유행이나 여론에 흔들리지 않습니다.',
          en: "Trends and public opinion don’t sway you.",
        },
      },
      {
        title: { ko: '깊이', en: 'Depth' },
        body: {
          ko: '혼자 파고들어야만 닿는 곳까지 갑니다.',
          en: 'You reach places you can only get to by digging alone.',
        },
      },
      {
        title: { ko: '자립', en: 'Self-reliance' },
        body: {
          ko: '누가 없어도 돌아가는 시스템을 스스로 만듭니다.',
          en: "You build systems that run without anyone’s help.",
        },
      },
    ],
    caution: {
      ko: '혼자 해결하는 게 편해서, 도움을 받는 법을 아예 잊어버릴 수 있어요. 그러다 진짜 필요할 때 부를 사람이 없습니다.',
      en: "Solving things alone is comfortable — so comfortable you may forget how to receive help. But when you truly need it, there might be no one to ask.",
    },
    riveFigure: {
      src: '/hero-test/rive/aurelius.riv',
      artboard: 'Aurelius',
      stateMachine: 'StateMachine:Motion',
      name: { ko: '마르쿠스 아우렐리우스', en: 'Marcus Aurelius' },
    },
    habits: [
      {
        image: '',
        title: { ko: '눈을 감고 주변의 소리 듣기', en: 'Close your eyes and listen around you' },
        desc: {
          ko: '보는 걸 잠시 쉬고, 들리는 것에 머물러요',
          en: 'Give your eyes a rest and stay with what you hear',
        },
      },
      {
        image: '',
        title: { ko: '한 걸음 물러서서 바라보기', en: 'Take a step back and watch' },
        desc: {
          ko: '때로는 지켜보는 것이 최선의 선택일 때가 있어요',
          en: 'Sometimes watching is the best possible move',
        },
      },
      {
        image: '',
        title: { ko: '나의 고민에 대한 조언 구해보기', en: 'Ask for advice on something you’re carrying' },
        desc: {
          ko: '새로운 방식으로 문제를 보게 될 수도 있어요',
          en: 'You might start seeing the problem in a whole new way',
        },
      },
    ],
    ogImage: '/hero-test/img/musashi.jpg',
  },

  // ── 3. 단순한 무력가 — 토르 (무력+직감) ──
  {
    id: 'thor', code: 'tho',
    stats: ['might', 'instinct'],
    signatures: [['might', 'instinct']],
    name: { ko: '단순한 무력가', en: 'The Simple Powerhouse' },
    heroName: { ko: '토르', en: 'Thor' },
    image: '/hero-test/img/thor.jpg',
    hook: {
      ko: '생각이 길어지면 오히려 못 해요. 당신은 행동이 먼저인 사람.',
      en: "No overthinking. You’re built to move first.",
    },
    description: {
      ko: [
        '고민이 생기면 앉아서 정리하는 대신 일단 나가서 걷거나 뭐라도 합니다. 계획을 세우다 지치는 사람들과 달리, 당신은 일단 시작하고 부딪히면서 방법을 찾아요. 그래서 주변에서는 “너는 어떻게 그렇게 바로 하냐”는 말을 듣습니다.',
        '토르는 복잡한 계략 같은 건 몰랐습니다. 대신 아무도 못 드는 망치를 들고 제일 앞에 섰죠. 어려운 상황에서 사람들이 제일 먼저 찾는 게 이런 사람입니다.',
      ],
      en: [
        "When something weighs on you, you don’t sit down and sort it out — you go for a walk or just do something. Unlike people who exhaust themselves planning, you start first and find the way by running into things. Which is why people keep asking you, “how do you just go and do it?”",
        "Thor never had much use for clever schemes. Instead he picked up the hammer no one else could lift and stood at the very front. When things get hard, this is the first kind of person people look for.",
      ],
    },
    strengths: [
      {
        title: { ko: '실행력', en: 'Execution' },
        body: {
          ko: '남들이 고민하는 동안 이미 절반은 해놓습니다.',
          en: "While others deliberate, you’re already halfway done.",
        },
      },
      {
        title: { ko: '회복력', en: 'Resilience' },
        body: {
          ko: '실패해도 오래 끌지 않고 다음으로 넘어갑니다.',
          en: "You don't linger on failure. You move on.",
        },
      },
      {
        title: { ko: '믿음직함', en: 'Reliability' },
        body: {
          ko: '말한 건 하는 사람이라는 신뢰가 있습니다.',
          en: 'People trust that you do what you say.',
        },
      },
    ],
    caution: {
      ko: '부딪혀보는 게 늘 답은 아닙니다. 같은 벽에 세 번째 부딪히고 있다면, 그건 용기가 아니라 고집이에요.',
      en: "Running straight at it isn't always the answer. If you're hitting the same wall for the third time, that's not courage anymore. That's stubbornness.",
    },
    riveFigure: {
      src: '/hero-test/rive/joan.riv',
      artboard: 'Joan',
      stateMachine: 'StateMachine:Motion',
      name: { ko: '잔 다르크', en: 'Joan of Arc' },
    },
    habits: [
      {
        image: '',
        title: { ko: '몸 쓰는 루틴 고정하기', en: 'Lock in a workout routine' },
        desc: {
          ko: '운동은 당신에게 취미가 아니라 사고 정리 도구입니다',
          en: "For you, exercise isn’t a hobby — it’s how you sort your thoughts",
        },
      },
      {
        image: '',
        title: { ko: '5초 세고 바로 시작하기', en: 'Count down from 5 & launch to action' },
        desc: { ko: '준비될 때까지 기다리지 말고, 먼저 움직여봐요.', en: "5, 4, 3, 2, 1 — go!" },
      },
      {
        image: '',
        title: { ko: '시작 전 1분만 멈추기', en: 'Pause a minute before starting' },
        desc: {
          ko: '딱 1분. ‘이게 최선의 방법인가?’만 물어보기',
          en: 'Just one minute. Ask one question: is this the best way?',
        },
      },
    ],
    ogImage: '/hero-test/img/thor.jpg',
  },

  // ── 4. 속 깊은 전략가 — 제갈량 (지략+연대) ──
  {
    id: 'zhugeliang', code: 'zge',
    stats: ['wit', 'bond'],
    signatures: [['wit', 'bond'], ['wit', 'will']],
    name: { ko: '속 깊은 전략가', en: 'The Quiet Strategist' },
    heroName: { ko: '제갈량', en: 'Zhuge Liang' },
    image: '/hero-test/img/zhugeliang.jpg',
    hook: {
      ko: '생각이 너무 많다는 말, 들어봤죠. 그게 사실은 당신 무기예요.',
      en: "“You think too much,” they say. That’s actually your weapon.",
    },
    description: {
      ko: [
        '무슨 일이든 시작하기 전에 머릿속으로 몇 수 앞까지 그려봅니다. 최악의 경우를 미리 계산해두고, 그때 누가 어떻게 움직일지까지 그려보죠. 그래서 결정이 빠른 사람들 사이에서는 답답하다는 소리를, 감정이 앞서는 사람들 사이에서는 차갑다는 소리를 듣기도 합니다.',
        '그런데 당신을 오래 겪어본 사람들은 다르게 말해요. 계산은 분명 냉정한데, 그 계산의 결론이 이상하게 따뜻하다고요. 당신 안에는 두 개가 같이 있습니다. 판을 차갑게 읽는 머리와, 그 판 위에 있는 사람을 끝내 못 놓는 마음이요.',
        '제갈량은 실제로 머리 하나로 이름을 남긴 사람입니다. 천하를 셋으로 나누는 그림을 미리 그렸고, 몇 배나 되는 적을 계산만으로 몇 번이나 물리쳤죠. 다만 그 머리를 자기 자리를 지키는 데는 쓰지 않았습니다. 끝까지 나라와 사람에게 썼고, 결국 원정 중에 과로로 죽었어요. 차가운 머리와 뜨거운 마음이 한 사람 안에 있으면, 삶이 그렇게 흘러갈 수도 있어요.',
      ],
      en: [
        "Before you start anything, you play out several moves ahead in your head. You calculate the worst case in advance, and even picture who would move how if it came. Quick deciders find you frustrating; people led by emotion call you cold.",
        "But those who have known you a long time say something different: your calculations are certainly cool-headed, yet their conclusions come out strangely warm. Two things live in you at once — a head that reads the board coldly, and a heart that can never let go of the people standing on it.",
        "Zhuge Liang genuinely made his name on his mind alone. He drew the map that would split the empire in three before it happened, and beat armies several times his size again and again through sheer calculation. But he never used that mind to protect his own position. He spent it on his country and his people to the very end, and died of overwork in the middle of a campaign. When a cold head and a hot heart live in one person, a life may flow that way.",
      ],
    },
    strengths: [
      {
        title: { ko: '판을 읽는 눈', en: 'Reading the board' },
        body: {
          ko: '표면 아래의 구조를 봅니다.',
          en: 'You see the structure beneath the surface.',
        },
      },
      {
        title: { ko: '사전 대비', en: 'Advance preparation' },
        body: {
          ko: '문제가 터지기 전에 이미 답을 준비해둡니다.',
          en: 'You have answers ready before problems erupt.',
        },
      },
      {
        title: { ko: '조용한 배려', en: 'Quiet consideration' },
        body: {
          ko: '티 안 나게 사람들의 자리를 만들어줍니다.',
          en: 'You make room for people without them ever noticing.',
        },
      },
    ],
    caution: {
      ko: '당신이 다 계산해두니까, 주변은 점점 생각하기를 멈춥니다. 모든 판단이 당신에게로 몰리고, 어느 순간 잠깐 손을 놓는 것조차 어려워져요. 내가 멈추면 전부 멈춘다는 걸 아니까요.',
      en: "Because you’ve calculated everything, the people around you slowly stop thinking. Every judgment funnels toward you, until even letting go for a moment feels impossible — because you know that if you stop, everything stops.",
    },
    riveFigure: {
      src: '/hero-test/rive/confucius.riv',
      artboard: 'Confucius',
      stateMachine: 'StateMachine:Motion',
      name: { ko: '공자', en: 'Confucius' },
    },
    habits: [
      {
        image: '',
        title: { ko: '주변을 천천히 관찰하기', en: 'Slowly observe your surroundings' },
        desc: {
          ko: '당신의 전략은 결국 관찰에서 나옵니다. 하루 5분, 판단하지 말고 그냥 봐요.',
          en: "Your strategy ultimately comes from observation. Five minutes a day — don’t judge, just watch.",
        },
      },
      {
        image: '',
        title: { ko: '오늘의 깨달음 하나 기록하기', en: 'Write down one thing you realized today' },
        desc: {
          ko: '오늘 알게된 것을 하나 적어봐요. 쌓이면 당신만의 병법서가 됩니다.',
          en: 'Note one thing you learned today. Stacked up, it becomes your own strategy book.',
        },
      },
      {
        image: '',
        title: { ko: '눈을 감고 주변의 소리 듣기', en: 'Listen to the world with my eyes closed' },
        desc: {
          ko: '생각을 멈춰봐요. 항상 켜져있는 머리도 가끔은 쉬어줘야 합니다.',
          en: 'Stop thinking. Sometimes the mind needs its rest.',
        },
      },
    ],
    ogImage: '/hero-test/img/zhugeliang.jpg',
  },

  // ── 5. 말 없는 장인 — 다이달로스 (정교+독립) ──
  {
    id: 'daedalus', code: 'dae',
    stats: ['precision', 'independence'],
    signatures: [['independence', 'precision']],
    name: { ko: '말 없는 장인', en: 'The Silent Craftsman' },
    heroName: { ko: '다이달로스', en: 'Daedalus' },
    image: '/hero-test/img/daedalus.jpg',
    hook: {
      ko: '설명은 안 해요. 결과물이 대신 말하니까.',
      en: "You don’t explain. The work speaks for itself.",
    },
    description: {
      ko: [
        '자기 자랑을 못 합니다. 어색하고 낯간지러워요. 대신 만들어놓은 걸 보여주면 되니까요. 남들은 신경도 안 쓰는 디테일이 당신 눈에는 계속 밟히고, 그게 해결되기 전까지는 마음이 안 놓입니다. 그래서 시간은 오래 걸리는데, 나온 결과물은 확실히 다릅니다.',
        '다이달로스는 미궁도 만들었고 하늘을 나는 날개도 만들었습니다. 정작 사람들이 기억하는 건 그의 이름이 아니라 그가 만든 것들이죠. 그는 그걸로 충분했을 겁니다.',
      ],
      en: [
        "You can't talk yourself up. It feels awkward, almost embarrassing. Besides, you can just show what you’ve made. Details no one else even notices keep catching your eye, and you can’t rest until they’re fixed. So things take longer, but what comes out is unmistakably different.",
        "Daedalus built the Labyrinth, and wings that could fly. Yet what people remember isn’t his name but the things he made. That was probably enough for him.",
      ],
    },
    strengths: [
      {
        title: { ko: '완성도', en: 'Craftsmanship' },
        body: {
          ko: '당신이 만든 건 당신의 티가 납니다.',
          en: 'What you make is recognizably yours.',
        },
      },
      {
        title: { ko: '집중력', en: 'Focus' },
        body: {
          ko: '한번 붙들면 끝까지 갑니다.',
          en: 'Once you latch on, you go all the way.',
        },
      },
      {
        title: { ko: '문제 해결', en: 'Problem-solving' },
        body: {
          ko: '없으면 만들어냅니다.',
          en: "If it doesn’t exist, you build it.",
        },
      },
    ],
    caution: {
      ko: '말하지 않으면 정말로 모릅니다. 세상은 결과물을 알아서 발견해주지 않아요. 당신의 실력이 저평가되는 건, 실력 문제가 아니라 알려지지 않았기 때문입니다.',
      en: "If you don’t say it, people genuinely won’t know. The world doesn’t discover your work on its own. When your skill is underrated, it’s not a skill problem — it’s that no one has heard about it.",
    },
    riveFigure: {
      src: '/hero-test/rive/gogh.riv',
      artboard: 'Gogh',
      stateMachine: 'StateMachine:Motion',
      name: { ko: '반 고흐', en: 'Vincent van Gogh' },
    },
    habits: [
      {
        image: '',
        title: { ko: '매일 기록 일지 남기기', en: 'Keep a daily log' },
        desc: {
          ko: '만든 것을 사진이나 글로 남기기. 쌓이면 그게 증명입니다',
          en: 'Capture what you made in photos or a few words. Stacked up, that becomes your proof',
        },
      },
      {
        image: '',
        title: { ko: '오늘의 목표 하나 분명히 정하기', en: 'Set one clear goal for today' },
        desc: { ko: '명확한 목표 하나가 하루를 이끌어가도록', en: 'One clear goal leads the day' },
      },
      {
        image: '',
        title: { ko: '오늘 신경쓰지 않을 일 정하기', en: "Decide one thing you won’t worry about today" },
        desc: { ko: '모든 일을 다 안고 갈 필요는 없어요.', en: "Not everything deserves you." },
      },
      {
        image: '',
        title: { ko: '결론 내기 전에 의견 하나 더 듣기', en: 'Hear one more opinion before concluding' },
        desc: { ko: '한 번 더 물어보면 놓친 게 보일 때가 있어요.', en: 'One question can save hours later.' },
      },
    ],
    ogImage: '/hero-test/img/daedalus.jpg',
  },

  // ── 6. 공허한 장미 — 헬레네 (매혹+연대) ──
  {
    id: 'helen', code: 'hel',
    stats: ['charm', 'bond'],
    signatures: [['charm', 'independence'], ['charm', 'instinct'], ['charm', 'bond']],
    name: { ko: '공허한 장미', en: 'The Hollow Rose' },
    heroName: { ko: '헬레네', en: 'Helen' },
    image: '/hero-test/img/helen.jpg',
    hook: {
      ko: '사람은 많은데, 정작 나를 이해하는 사람은 몇이나 될까.',
      en: 'So many people around. But how many truly understand me?',
    },
    description: {
      ko: [
        '당신 주변에는 늘 사람이 있습니다. 먼저 다가오는 사람도 많고, 어디에 가도 자리를 잡는 데 어려움이 없어요. 그런데 문득 이런 생각이 들죠. 이 사람들 중에 나를 정말 이해하는 사람이 있을까?',
        '헬레네는 세상에서 가장 아름다웠고, 그래서 온 세상이 그녀를 두고 싸웠습니다. 정작 그녀가 뭘 원하는지 물어본 사람은 거의 없었어요. 이건 그녀의 잘못이 아닙니다. 다만 당신은 그녀와 달리, 물어봐줄 사람을 직접 고를 수 있어요.',
      ],
      en: [
        "There are always people around you. Many come to you first, and wherever you go, you have no trouble finding your place. And yet, out of nowhere, the thought hits you: of all these people, is there anyone who truly understands me?",
        "Helen was the most beautiful woman in the world, and so the whole world went to war over her. Yet almost no one ever asked what she wanted. That was not her fault. But unlike her, you get to choose the people who will ask.",
      ],
    },
    strengths: [
      {
        title: { ko: '존재감', en: 'Presence' },
        body: {
          ko: '있는 것만으로 공간의 분위기가 달라집니다.',
          en: 'Just being there changes the mood of a room.',
        },
      },
      {
        title: { ko: '관계 형성력', en: 'Connection' },
        body: {
          ko: '처음 만난 사람과도 어색하지 않습니다.',
          en: "You're not awkward with someone new.",
        },
      },
      {
        title: { ko: '감정 감지', en: 'Emotional radar' },
        body: {
          ko: '그 자리에서 누가 불편한지 바로 알아챕니다.',
          en: "You immediately sense who’s uncomfortable in the room.",
        },
      },
    ],
    caution: {
      ko: '모두에게 좋은 사람이 되려다 보면 정작 나를 잃습니다. 관계의 개수가 아니라 깊이가 당신을 채웁니다.',
      en: "Trying to be good to everyone, you lose yourself. It’s the depth of your relationships that fills you — not the count.",
    },
riveFigure: {
      src: '/hero-test/rive/caesar.riv',
      artboard: 'Caesar',
      stateMachine: 'StateMachine:Motion',
      name: { ko: '카이사르', en: 'Julius Caesar' },
    },    habits: [
      {
        image: '',
        title: { ko: '진솔한 대화 나누기', en: 'Have one honest conversation' },
        desc: {
          ko: '잘 보이려는 마음 없이 솔직한 말 꺼내기',
          en: 'Talk about something true without trying to look good',
        },
      },
      {
        image: '',
        title: { ko: '취향 무드보드 만들기', en: 'Build a moodboard of your own taste' },
        desc: { ko: '내가 진짜 좋아하는 것만 모아두기', en: 'Only the ones I actually like' },
      },
      {
        image: '',
        title: { ko: '사람 많은 곳에서 나에게 집중하기', en: 'Stay centered on yourself in a crowd' },
        desc: { ko: '내 중심이 잡히면 사람들 속에서도 지치지 않을 수 있어요', en: 'Find yourself in the noise.' },
      },
    ],
    ogImage: '/hero-test/img/helen.jpg',
  },

  // ── 7. 따뜻한 불씨 — 페넬로페 (의지+연대) ──
  {
    id: 'penelope', code: 'pen',
    stats: ['will', 'bond'],
    signatures: [['bond', 'independence'], ['bond', 'will']],
    name: { ko: '따뜻한 불씨', en: 'The Warm Ember' },
    heroName: { ko: '페넬로페', en: 'Penelope' },
    image: '/hero-test/img/penelope.jpg',
    hook: {
      ko: '화려하지 않아도, 당신이 없으면 무너지는 것들이 있어요.',
      en: "You're not the loud one. But some things fall apart without you.",
    },
    description: {
      ko: [
        '앞에 나서는 성격은 아닙니다. 대신 자리를 지킵니다. 다들 떠나고 흔들릴 때 남아 있는 사람이 당신이고, 그래서 사람들은 당신이 있다는 걸 당연하게 여기다가 없을 때야 알아차려요. 조용하다고 약한 게 아니라, 조용해서 오래 가는 겁니다.',
        '페넬로페는 20년을 기다렸습니다. 그냥 앉아서 기다린 게 아니라, 낮에는 수의를 짜고 밤에는 몰래 풀어가며 구혼자들을 물리쳤어요. 버티는 것도 전략이고, 그건 그 자체로 싸움입니다.',
      ],
      en: [
        "You're not the one who steps forward. You're the one who stays. When everyone else leaves or wavers, you're still there — which is why people take you for granted right up until you're gone. Quiet doesn't mean weak. Quiet is why you last.",
        "Penelope waited twenty years. Not just sitting there — she wove a shroud by day and secretly unraveled it by night, holding off the suitors. Endurance is a strategy too, and it is a fight in its own right.",
      ],
    },
    strengths: [
      {
        title: { ko: '지속력', en: 'Durability' },
        body: {
          ko: '시작보다 유지를 잘합니다. 이건 훨씬 어려운 재능입니다.',
          en: "You’re better at maintaining than starting — the far rarer talent.",
        },
      },
      {
        title: { ko: '신뢰', en: 'Trust' },
        body: {
          ko: '사람들이 마음 놓고 기댈 수 있는 사람입니다.',
          en: 'People can lean on you without having to wonder.',
        },
      },
      {
        title: { ko: '조용한 지혜', en: 'Quiet wisdom' },
        body: {
          ko: '정면충돌 없이 상황을 넘길 줄 압니다.',
          en: 'You know how to get through situations without head-on collisions.',
        },
      },
    ],
    caution: {
      ko: '버티는 게 익숙해지면, 버티지 않아도 되는 상황에서도 버팁니다. 견디는 것과 참아주는 것은 다릅니다.',
      en: "When enduring becomes familiar, you endure even when you don’t have to. Holding on and putting up with things are not the same.",
    },
    riveFigure: {
      src: '/hero-test/rive/teresa.riv',
      artboard: 'Teresa',
      stateMachine: 'StateMachine:Motion',
      name: { ko: '테레사 수녀', en: 'Mother Teresa' },
    },
    habits: [
      {
        image: '',
        title: { ko: '고치려 하지 않고 들어주기', en: 'Listen without trying to fix' },
        desc: { ko: '답을 주려 하지 말고 그냥 들어주기. 이미 제일 잘하는 일이고, 의식하면 더 잘하게 돼요', en: "Don't reach for a solution. Just listen. It's already what you do best, and doing it on purpose makes it better." },
      },
      {
        image: '',
        title: { ko: '배우려는 자세로 대화하기', en: 'Enter conversations ready to learn' },
        desc: { ko: '누구에게서든 배울 점은 있어요', en: 'Find a teacher in everyone' },
      },
      {
        image: '',
        title: { ko: '하려는 말을 한 문장으로 정리하기', en: 'Say what needs to be said' },
        desc: { ko: '마음속에 있는 생각을 분명하게 꺼내봐요.', en: 'When something needs to be said, express it in one clear sentence.' },
      },
    ],
    ogImage: '/hero-test/img/penelope.jpg',
  },

  // ── 8. 꾀 많은 방랑자 — 오디세우스 (지략+의지) ──
  {
    id: 'odysseus', code: 'ody',
    stats: ['wit', 'precision'],
    signatures: [['wit', 'precision']],
    name: { ko: '꾀 많은 방랑자', en: 'The Clever Wanderer' },
    heroName: { ko: '오디세우스', en: 'Odysseus' },
    image: '/hero-test/img/odysseus.jpg',
    hook: {
      ko: '정면 돌파 대신 다른 길을 찾는 게 도망이 아니란 걸, 당신은 알아요.',
      en: "Finding another way isn’t running away. You’ve always known that.",
    },
    description: {
      ko: [
        '벽이 나오면 넘으려 하기 전에 옆을 살핍니다. 문이 있을 수도 있고, 아예 다른 길이 있을 수도 있으니까요. 그래서 가끔 얍삽하다는 소리도 듣지만, 결과적으로 도착하는 건 당신입니다. 상황이 바뀌어도 당황하지 않고, 그 자리에서 새 방법을 만들어내요.',
        '오디세우스는 트로이를 목마 하나로 함락시켰고, 집에 돌아가는 데 10년이 걸렸지만 결국 돌아갔습니다. 그가 특별한 건 머리가 단순히 좋아서가 아니라, 그 머리를 상황마다 다르게 쓸 줄 알았기 때문이에요. 힘으로 안 열리는 성은 속임수로 열었고, 거인의 양털에 몸을 묶어 감시를 피해 탈출했으며, 세이렌의 노래는 피하는 대신 몸을 묶고 들었습니다. 매번 다른 방법이었고, 매번 그 자리에 딱 맞는 방법이었죠.',
      ],
      en: [
        "When you hit a wall, you look sideways before you try to climb it. There might be a door — or an entirely different path. People sometimes call it sly, but in the end, the one who arrives is you. When the situation changes you don't panic; you invent a new way on the spot.",
        "Odysseus brought down Troy with a single wooden horse, and though the way home took ten years, he made it home. What made him special wasn’t raw intelligence — it was knowing how to use it differently in every situation. The fortress that wouldn’t fall to force, he opened with a trick; he escaped a giant’s watch strapped beneath the wool of his sheep; and instead of avoiding the Sirens’ song, he had himself tied to the mast and listened. A different method every time, and every time, the right one.",
      ],
    },
    strengths: [
      {
        title: { ko: '임기응변', en: 'Improvisation' },
        body: {
          ko: '계획이 무너져도 그 자리에서 다시 짭니다.',
          en: 'When the plan collapses, you draft a new one on the spot.',
        },
      },
      {
        title: { ko: '문제 해결력', en: 'Problem-solving' },
        body: {
          ko: '돌아가더라도 결국 도착합니다.',
          en: 'You may go the long way around, but you arrive.',
        },
      },
      {
        title: { ko: '설득력', en: 'Persuasion' },
        body: {
          ko: '말로 상황을 바꿔놓습니다.',
          en: 'You change situations with words.',
        },
      },
    ],
    caution: {
      ko: '영리한 방법을 찾다가 정작 출발을 못 할 때가 있어요. 완벽한 항로를 다 그려놓고 떠나는 배는 없습니다. 일단 나서고 파도가 올 때마다 그때그때 넘기는 것, 사실 그게 당신이 제일 잘하는 일이에요.',
      en: "Sometimes you hunt for the clever route so long you never set sail. No ship leaves harbor with the perfect course fully drawn. Setting out and riding each wave as it comes — that’s actually the thing you do best.",
    },
    riveFigure: {
      src: '/hero-test/rive/lincoln.riv',
      artboard: 'Lincoln',
      stateMachine: 'StateMachine:Motion',
      name: { ko: '링컨', en: 'Abraham Lincoln' },
    },
    habits: [
      {
        image: '',
        title: { ko: '문득 떠오른 아이디어 적기', en: 'Write one unexpected idea that emerged' },
        desc: {
          ko: '당신의 무기는 그 순간의 기지입니다. 흘려보내지 말고 모아두기',
          en: "Your weapon is your quick wit. Don’t let it drift away — collect it",
        },
      },
      {
        image: '',
        title: { ko: '‘안 될 이유가 있을까?’라고 생각하기', en: 'Say “Why not?”' },
        desc: {
          ko: '방법을 찾기 전에 방향부터 열어두는 연습',
          en: 'Practice opening the direction before hunting for the method',
        },
      },
      {
        image: '',
        title: { ko: '5초 세고 바로 시작하기', en: 'Count down to 5 & launch to action' },
        desc: {
          ko: '계산이 길어질 때 강제로 출발선을 넘기',
          en: 'When the calculating runs long, force yourself over the start line',
        },
      },
    ],
    ogImage: '/hero-test/img/odysseus.jpg',
  },

  // ── 9. 준비된 승부사 — 페르세우스 (정교+무력) ──
  {
    id: 'perseus', code: 'per',
    stats: ['precision', 'might'],
    signatures: [['precision', 'might'], ['precision', 'will']],
    name: { ko: '준비된 승부사', en: 'The Prepared Contender' },
    heroName: { ko: '페르세우스', en: 'Perseus' },
    image: '/hero-test/img/perseus.jpg',
    hook: {
      ko: '운이 좋았다고요? 준비가 된 사람에게만 운이 따릅니다.',
      en: 'Lucky? Luck only follows the prepared.',
    },
    description: {
      ko: [
        '중요한 일을 앞두고는 반드시 준비합니다. 필요한 걸 다 챙겨놓고, 시뮬레이션도 돌려보고, 최악의 경우까지 대비해두죠. 그래서 막상 그날이 오면 이상할 정도로 차분합니다. 남들 눈엔 담대해 보이지만, 사실은 이미 다 해봤기 때문이에요.',
        '페르세우스는 메두사를 맨몸으로 찾아가지 않았습니다. 거울 방패, 날개 달린 신발, 모습을 감추는 투구를 전부 구해서 갔죠. 사람들은 그를 영웅이라 부르지만, 정확히는 준비를 끝낸 사람이었습니다.',
      ],
      en: [
        "Before something happens, you prepare. You gather everything you need, run the simulations, and brace for the worst case. So when the day finally comes, you’re strangely calm. To others it looks like nerve — really, it’s because you’ve already been through it all in your head.",
        "Perseus didn’t go after Medusa empty-handed. He first secured a mirrored shield, winged sandals, and a helmet that made him invisible. People call him a hero; more precisely, he was someone who had finished preparing.",
      ],
    },
    strengths: [
      {
        title: { ko: '대비력', en: 'Preparation' },
        body: {
          ko: '변수를 미리 줄여놓습니다.',
          en: 'You cut down the variables in advance.',
        },
      },
      {
        title: { ko: '실전에 강함', en: 'Steady under fire' },
        body: {
          ko: '결정적 순간에 손이 떨리지 않습니다.',
          en: "Your hands don’t shake at the decisive moment.",
        },
      },
      {
        title: { ko: '도구 활용력', en: 'Resourcefulness' },
        body: {
          ko: '필요한 사람과 도구를 편견 없이 구합니다.',
          en: 'You seek out the right people and tools without prejudice.',
        },
      },
    ],
    caution: {
      ko: '준비가 끝나지 않으면 시작을 못 하는 상태가 될 수 있어요. 완벽한 준비란 없고, 어떤 건 부딪혀야만 알 수 있습니다.',
      en: "You can end up unable to begin until the preparation feels finished. There's no such thing as complete preparation, and some things you can only learn by walking into them.",
    },
    riveFigure: {
      src: '/hero-test/rive/caesar.riv',
      artboard: 'Caesar',
      stateMachine: 'StateMachine:Motion',
      name: { ko: '카이사르', en: 'Julius Caesar' },
    },
    habits: [
      {
        image: '',
        title: { ko: '시작 시간 정하기', en: 'Set a start time' },
        desc: {
          ko: '‘여기까지 준비하면 시작한다’는 선을 미리 긋기',
          en: 'Draw the line in advance: once I’ve prepared this far, I begin',
        },
      },
      {
        image: '',
        title: { ko: '잠들기 전 내일을 미리 그려보기', en: 'Preview tomorrow before bed' },
        desc: { ko: '내일 하루를 가볍게 떠올려보세요. 중요한 일, 예상되는 어려움, 정말 신경 써야 할 것 등.', en: 'Picture tomorrow—your key tasks, likely obstacles, and what truly matters' },
      },
      {
        image: '',
        title: { ko: '주변을 천천히 관찰하기', en: 'Slowly observe my surroundings' },
        desc: { ko: '쉽게 지나치는 것들 속에 단서가 있어요.', en: 'There’s magic in the unnoticed.' },
      },
    ],
    ogImage: '/hero-test/img/perseus.jpg',
  },

  // ── 10. 찬란한 폭주자 — 아킬레우스 (무력+충동) ──
  {
    id: 'achilles', code: 'ach',
    stats: ['might', 'impulse'],
    signatures: [['impulse', 'might']],
    name: { ko: '찬란한 폭주자', en: 'The Blazing Comet' },
    heroName: { ko: '아킬레우스', en: 'Achilles' },
    image: '/hero-test/img/achilles.jpg',
    hook: {
      ko: '당신이 가장 빛나는 순간은 불 붙었을 때예요.',
      en: "You shine brightest when you’re on fire.",
    },
    description: {
      ko: [
        '평소엔 그냥저냥 합니다. 그런데 뭔가에 제대로 꽂히면 완전히 다른 사람이 돼요. 밤을 새우고, 주변이 안 보이고, 그 기간에 만들어낸 결과물은 남들이 몇 달 걸릴 수준입니다. 감정이 곧 연료라서, 감정이 움직이지 않으면 실력도 안 나와요.',
        '아킬레우스는 그리스 최강의 용사였지만, 정작 전쟁의 흐름을 바꾼 건 그의 감정이었습니다. 총사령관과 다투고 자존심이 상하자 그는 전쟁에서 아예 손을 놔버렸어요. 최강자가 빠지자 그리스군은 계속 밀렸고, 결국 그의 가장 친한 친구가 그를 대신해 싸우러 나갔다가 죽습니다. 그 소식을 들은 아킬레우스는 다시 전장에 나섰고, 아무도 못 막는 상태로 트로이 최고의 장수까지 쓰러뜨렸죠. 그를 멈춘 것도 감정이었고, 다시 움직이게 한 것도 감정이었습니다.',
      ],
      en: [
        "Most days, you're just okay. But when something truly hooks you, you become a different person — the all-nighters, the tunnel vision, and output in that stretch that would take others months. Emotion is your fuel: when it doesn’t move, neither does your skill.",
        "Achilles was the mightiest warrior of Greece, yet what changed the course of the war was his emotion. After a clash with the supreme commander wounded his pride, he simply withdrew from the fighting. With the strongest man gone, the Greeks kept getting pushed back — until his dearest friend went out to fight in his place, and was killed. At the news, Achilles took the field again, unstoppable, and cut down Troy’s greatest champion. What stopped him was emotion, and what set him moving again was emotion.",
      ],
    },
    strengths: [
      {
        title: { ko: '폭발력', en: 'Explosive power' },
        body: {
          ko: '몰입했을 때의 산출량이 압도적입니다.',
          en: 'What you make while locked in is on another level.',
        },
      },
      {
        title: { ko: '진심', en: 'Sincerity' },
        body: {
          ko: '대충 하는 법을 모릅니다.',
          en: "You don’t know how to half-do things.",
        },
      },
      {
        title: { ko: '존재감', en: 'Presence' },
        body: {
          ko: '당신이 진심일 때 사람들이 따라옵니다.',
          en: 'When you truly mean it, people follow.',
        },
      },
    ],
    caution: {
      ko: '불이 꺼진 기간에 자책하지 마세요. 당신에게 필요한 건 늘 타오르는 게 아니라, 식어 있는 동안에도 하루를 지탱해주는 최소한의 리듬입니다.',
      en: "Don’t punish yourself for the stretches when the fire is out. What you need isn’t a constant burn — it’s a minimal rhythm that carries the day even while you’re cooled down.",
    },
    riveFigure: {
      src: '/hero-test/rive/alexander.riv',
      artboard: 'Alexander',
      stateMachine: 'StateMachine:Motion',
      name: { ko: '알렉산드로스 대왕', en: 'Alexander the Great' },
    },
    habits: [
      {
        image: '',
        title: { ko: '아침 햇빛 충전하기', en: 'Charge up on morning sunlight' },
        desc: {
          ko: '아침 햇빛은 몸을 깨워주고 집중 할 수 있는 상태로 만들어줘요',
          en: 'Morning light wakes your body and sets you up to focus',
        },
      },
      {
        image: '',
        title: { ko: '30초 동안 멀리 내다보기', en: 'Gaze into the distance for 30 seconds' },
        desc: {
          ko: '몰입하면 주변이 안 보이니까, 하루 한 번은 시야를 넓게 되돌리기.',
          en: 'Immersion narrows your view — widen it back at least once a day.',
        },
      },
      {
        image: '',
        title: { ko: '오늘 꼭 할 일 하나 하기', en: 'Do one must-do today' },
        desc: {
          ko: '의욕이 0인 날에도 지킬 5분짜리 하나 정해두기.',
          en: 'Keep one five-minute task you honor even on zero-motivation days.',
        },
      },
    ],
    ogImage: '/hero-test/img/achilles.jpg',
  },

  // ── 11. 무패전승 — 아탈란타 (무력+독립) ──
  {
    id: 'atalanta', code: 'ata',
    stats: ['might', 'independence'],
    signatures: [['might', 'independence'], ['might', 'will']],
    name: { ko: '무패전승', en: 'The Undefeated' },
    heroName: { ko: '아탈란타', en: 'Atalanta' },
    image: '/hero-test/img/atalanta.jpg',
    hook: {
      ko: '지는 게 싫은 게 아니라, 진 나를 못 견디는 거죠.',
      en: "It's not losing you hate. You can’t stand the you that lost.",
    },
    description: {
      ko: [
        '승부가 걸리면 눈빛이 달라집니다. 남들이 취미로 하는 것도 당신은 이기려고 해요. 그래서 실력이 빨리 늘고, 어지간한 일은 남한테 안 집니다. 스스로에게 요구하는 기준이 워낙 높아서, 남들 눈엔 잘한 것도 당신에겐 부족하죠.',
        '아탈란타는 자기와 달리기로 이긴 남자와 결혼하겠다고 선언했고, 도전한 모두를 이겼습니다. 자신을 무시한 사람들에게 그냥 전부 이겨버리는 방식으로 답한 사람이에요.',
      ],
      en: [
        "Something changes in your face the moment it becomes a contest. Things other people do for fun, you do to win. That's why you improve fast, and why you rarely lose to anyone. The bar you hold yourself to is so high that a result everyone else would call good still isn't enough for you.",
        "Atalanta declared she would only marry a man who could beat her in a footrace — and she outran every challenger. To everyone who underestimated her, she gave the same answer: she simply defeated them all.",
      ],
    },
    strengths: [
      {
        title: { ko: '성장 속도', en: 'Fast growth' },
        body: {
          ko: '경쟁이 당신을 빠르게 끌어올립니다.',
          en: 'Competition pulls you upward, fast.',
        },
      },
      {
        title: { ko: '자기만의 기준', en: 'Your own bar' },
        body: {
          ko: '남이 안 봐도 대충 하지 않습니다.',
          en: "You don’t slack even when no one’s watching.",
        },
      },
      {
        title: { ko: '돌파력', en: 'Breakthrough' },
        body: {
          ko: '안 된다는 말에 오히려 불이 붙습니다.',
          en: '“You can’t” only lights you up.',
        },
      },
    ],
    caution: {
      ko: '이기는 게 목적이 되면, 과정 속에서 즐거움을 느끼지 못 할 수도 있습니다. 그리고 질 수 없는 일만 고르게 되면 성장이 멈춰요.',
      en: "When winning becomes the point, the joy of the process can disappear. And if you only pick the fights you can’t lose, growth stops.",
    },
    riveFigure: {
      src: '/hero-test/rive/joan.riv',
      artboard: 'Joan',
      stateMachine: 'StateMachine:Motion',
      name: { ko: '잔 다르크', en: 'Joan of Arc' },
    },    
    habits: [
      {
        image: '',
        title: { ko: '어제의 나보다 나아진 점 적기', en: "Write what got better than yesterday" },
        desc: {
          ko: '남이 아닌 어제의 나와 비교하기.',
          en: "Compare with yesterday’s me, not with others.",
        },
      },
      {
        image: '',
        title: { ko: '5분만 더 해보기', en: 'Give it five more minutes' },
        desc: {
          ko: '내가 자신이 없는 것을 그만두지 않고 붙들어보기.',
          en: "Hold on to the things you’re not confident at, instead of quitting.",
        },
      },
      {
        image: '',
        title: { ko: '즐거운 취미에 시간 보내기', en: 'Spend time on a hobby you enjoy' },
        desc: {
          ko: '과정 속 즐거움을 느껴보기.',
          en: 'Practice feeling the joy inside the process itself.',
        },
      },
    ],
    ogImage: '/hero-test/img/atalanta.jpg',
  },

  // ── 12. 영혼을 불태우는 자 — 쿠 훌린 (충동+의지) ──
  {
    id: 'cuchulainn', code: 'cuc',
    stats: ['impulse', 'will'],
    signatures: [['impulse', 'will']],
    name: { ko: '영혼을 불태우는 자', en: 'The Soul-Burner' },
    heroName: { ko: '쿠 훌린', en: 'Cú Chulainn' },
    image: '/hero-test/img/cuchulainn.jpg',
    hook: {
      ko: '다 끝내고 나면 껍데기만 남는 거, 알면서도 또 그러죠.',
      en: "You know there'll be nothing left of you afterward. You do it anyway.",
    },
    description: {
      ko: [
        '중요한 일이 걸리면 자기 자신을 갈아넣습니다. 잠도 건강도 뒤로 미루고, 그 일이 끝날 때까지 완전히 몰입해요. 그리고 끝나면 며칠씩 아무것도 못 합니다. 주변에서는 걱정하지만, 당신은 알아요. 그렇게 안 하면 이 정도 결과는 안 나온다는 걸.',
        '쿠 훌린은 전투에 들어가면 몸이 뒤틀릴 정도의 광란 상태에 빠졌습니다. 그 상태의 그를 막을 수 있는 건 아무것도 없었지만, 싸움이 끝나면 찬물 통에 담가 식혀야 했죠. 힘에는 늘 대가가 따릅니다.',
      ],
      en: [
        "When something important is at stake, you grind yourself down for it. Sleep and health get postponed, and you stay fully submerged until the thing is done. And when it’s done, you can’t do anything for days. People worry — but you know: without doing it that way, the result wouldn’t come out at this level.",
        "In battle, Cú Chulainn fell into a frenzy so fierce his body contorted. Nothing could stop him in that state — but when the fighting ended, he had to be plunged into vats of cold water to cool down. Power always comes with a price.",
      ],
    },
    strengths: [
      {
        title: { ko: '결정력', en: 'Decisive force' },
        body: {
          ko: '진짜 중요한 순간에 다른 사람이 못 내는 결과를 냅니다.',
          en: "At the moments that truly matter, you deliver what others can’t.",
        },
      },
      {
        title: { ko: '각오', en: 'Resolve' },
        body: {
          ko: '대가를 알면서도 선택합니다.',
          en: 'You choose, knowing the cost.',
        },
      },
      {
        title: { ko: '몰입 깊이', en: 'Immersion' },
        body: {
          ko: '한번 들어가면 끝을 봅니다.',
          en: "Once you’re in, you see it through to the end.",
        },
      },
    ],
    caution: {
      ko: '태울 게 남아 있어야 태웁니다. 회복을 미루면 다음 승부에서 쓸 연료가 없어요.',
      en: "You can only burn what’s left to burn. Postpone recovery, and there’s no fuel for the next battle.",
    },
    riveFigure: {
      src: '/hero-test/rive/gogh.riv',
      artboard: 'Gogh',
      stateMachine: 'StateMachine:Motion',
      name: { ko: '반 고흐', en: 'Vincent van Gogh' },
    },
    habits: [
      {
        image: '',
        title: { ko: '일을 마친 뒤 조용히 머무르기', en: 'Stay quiet for a moment after finishing' },
        desc: {
          ko: '끝맺음 뒤에도 잠깐의 여백이 필요해요.',
          en: 'Even endings need a little blank space after them.',
        },
      },
      {
        image: '',
        title: { ko: '허리 펴기', en: 'Straighten your back' },
        desc: {
          ko: '몰입하다 보면 자세가 망가지기 쉬워요.',
          en: 'Deep immersion wrecks your posture before you notice.',
        },
      },
      {
        image: '',
        title: { ko: '저녁에는 밝은 조명 줄이기', en: 'Dim the lights in the evening' },
        desc: {
          ko: '내일의 에너지는 오늘 밤에서부터.',
          en: "Tomorrow’s energy starts tonight.",
        },
      },
    ],
    ogImage: '/hero-test/img/cuchulainn.jpg',
  },

  // ── 13. 말 안 듣는 천재 — 손오공 (독립+충동) ──
  {
    id: 'sunwukong', code: 'swk',
    stats: ['independence', 'impulse'],
    signatures: [['impulse', 'precision'], ['impulse', 'independence']],
    name: { ko: '말 안 듣는 천재', en: 'The Unruly Genius' },
    heroName: { ko: '손오공', en: 'Sun Wukong' },
    image: '/hero-test/img/sunwukong.jpg',
    hook: {
      ko: '규칙에 공감이 안 되면 못 지키는 게 아니라, 안 지키는 거예요.',
      en: "It's not that you can't follow a rule you don't buy. You won't.",
    },
    description: {
      ko: [
        '‘원래 이렇게 하는 거야’라는 말이 제일 답답합니다. 왜 이렇게 하는지 납득이 되면 누구보다 잘하는데, 납득이 안 되면 손이 안 움직여요. 그래서 조직에서 골치 아픈 사람으로 찍히기도 하지만, 아무도 못 푼 문제를 당신이 푸는 경우도 그만큼 많습니다.',
        '손오공은 하늘의 질서를 통째로 뒤엎었고, 그 대가로 500년을 돌 산 밑에 깔렸습니다. 그런데 결국 그를 길들인 건 벌이 아니라 친구를 위해 불경을 구한다는 새로운 인생의 목표였어요. 이유가 생기면 당신은 세상에서 가장 강한 사람이 됩니다.',
      ],
      en: [
        "Nothing frustrates you more than “that’s just how it’s done.” When the reason makes sense, you do it better than anyone; when it doesn’t, your hands simply won’t move. That gets you labeled a troublemaker in organizations — but just as often, you’re the one who solves the problem no one else could.",
        "Sun Wukong overturned the entire order of heaven, and paid for it with five hundred years pinned under a mountain. Yet what finally tamed him wasn’t the punishment — it was a new purpose in life: retrieving the sacred scriptures for a friend. Give you a reason, and you become the strongest person in the world.",
      ],
    },
    strengths: [
      {
        title: { ko: '독창성', en: 'Originality' },
        body: {
          ko: '정해진 답 밖에서 방법을 찾습니다.',
          en: 'You find methods outside the given answers.',
        },
      },
      {
        title: { ko: '단단함', en: 'Unbreakable' },
        body: {
          ko: '눌려도 부러지지 않습니다.',
          en: "Pressure doesn’t break you.",
        },
      },
      {
        title: { ko: '솔직함', en: 'Honesty' },
        body: {
          ko: '이상한 걸 이상하다고 말합니다.',
          en: 'You call wrong, wrong.',
        },
      },
    ],
    caution: {
      ko: '모든 규칙과 싸우면 정작 중요한 싸움에 쓸 힘이 없습니다. 다 뒤엎는 것보다 하나를 제대로 바꾸는 게 어렵고, 그게 진짜 실력입니다.',
      en: "Fight every rule, and you’ll have no strength left for the fight that matters. Changing one thing properly is harder than overturning everything — and that’s the real skill.",
    },
    riveFigure: {
      src: '/hero-test/rive/einstein.riv',
      artboard: 'Einstein',
      stateMachine: 'StateMachine:Motion',
      name: { ko: '아인슈타인', en: 'Albert Einstein' },
    },
    habits: [
      {
        image: '',
        title: { ko: '나에게 중요한 것 하나 떠올리기', en: 'Recall one thing that matters to you' },
        desc: {
          ko: '당신은 이유가 있어야 움직이는 사람이니까.',
          en: "Because you’re someone who only moves with a reason.",
        },
      },
      {
        image: '',
        title: { ko: '‘안 될 이유가 있을까?’라고 생각하기', en: 'Ask “Why not?”' },
        desc: {
          ko: '규칙에 따르기 싫다면 새로운 방법을 찾아봐요.',
          en: "If I won’t follow the rule, I'll find a new way instead.",
        },
      },
      {
        image: '',
        title: { ko: '나와 다른 의견 하나 존중하기', en: 'Respect one opinion different from mine' },
        desc: {
          ko: '가끔은 나와 다른 의견을 들어보는 것도 도움이 될 수 있습니다.',
          en: 'Sometimes hearing a different take can help.',
        },
      },
    ],
    ogImage: '/hero-test/img/sunwukong.jpg',
  },

  // ── 14. 깨달은 현자 — 오딘 (지략+독립) ──
  {
    id: 'odin', code: 'odn',
    stats: ['wit', 'independence'],
    signatures: [['wit', 'independence']],
    name: { ko: '깨달은 현자', en: 'The Enlightened Sage' },
    heroName: { ko: '오딘', en: 'Odin' },
    image: '/hero-test/img/odin.jpg',
    hook: {
      ko: '뭔가를 알기 위해 대가를 치를 준비가 되어있습니다.',
      en: "You’re ready to pay the price to know.",
    },
    description: {
      ko: [
        '궁금한 걸 못 참습니다. 남들이 적당히 넘어가는 지점에서 한 겹 더 들어가고, 그러느라 손해도 봤죠. 편하게 살 수 있는 선택지를 알면서도 알고 싶어서 다른 길을 간 적이 있을 거예요. 그래서 남들보다 멀리 보는데, 그만큼 외롭기도 합니다.',
        '오딘은 지혜의 샘물을 마시기 위해 자기 눈 한쪽을 내주었습니다. 룬 문자를 얻으려고 아흐레 동안 나무에 매달렸고요. 신인데도 그렇게까지 했습니다. 진실에는 언제나 값이 붙어요.',
      ],
      en: [
        "You can’t let a question go. Where others let things slide, you dig one layer deeper — and you’ve paid for it. There was probably a time you knew the comfortable option and took the other path anyway, just because you wanted to know. So you see farther than most, and you’re that much lonelier for it.",
        "Odin gave up one of his eyes to drink from the well of wisdom. He hung from a tree for nine days to gain the runes. He was a god, and he still went that far. Truth always carries a price.",
      ],
    },
    strengths: [
      {
        title: { ko: '통찰', en: 'Insight' },
        body: {
          ko: '표면 너머의 구조가 보입니다.',
          en: 'You see the structure beyond the surface.',
        },
      },
      {
        title: { ko: '탐구심', en: 'Curiosity' },
        body: {
          ko: '배우는 걸 멈추지 않습니다.',
          en: 'You never stop learning.',
        },
      },
      {
        title: { ko: '장기 시야', en: 'The Long view' },
        body: {
          ko: '현재 뿐이 아닌 미래를 봅니다.',
          en: 'You see the future, not just the present.',
        },
      },
    ],
    caution: {
      ko: '아는 것과 하는 것은 다릅니다. 계속 배우기만 하면서 시작을 미루고 있진 않은지 확인해보세요.',
      en: "Knowing and doing are different things. Check whether more learning has quietly become your reason to keep postponing the start.",
    },
    riveFigure: {
      src: '/hero-test/rive/socrates.riv',
      artboard: 'Socrates',
      stateMachine: 'StateMachine:Motion',
      name: { ko: '소크라테스', en: 'Socrates' },
    },
    habits: [
      {
        image: '',
        title: { ko: '오늘 배운 것 하나 바로 적용하기', en: 'Apply one thing you learned today' },
        desc: {
          ko: '지식은 써보아야 내 것이 돼요.',
          en: 'Knowledge only becomes yours once you use it.',
        },
      },
      {
        image: '',
        title: { ko: '큰 질문과 함께 머물기', en: 'Sit with a big question' },
        desc: {
          ko: '큰 질문은 생각의 시야를 넓혀줘요.',
          en: 'Big questions widen the horizon of your thinking.',
        },
      },
      {
        image: '',
        title: { ko: '오늘 배운 것 하나 공유하기', en: 'Share one thing you learned today' },
        desc: {
          ko: '배움은 나눌수록 더 선명하게 남아요.',
          en: 'Learning stays sharper the more you share it.',
        },
      },
    ],
    ogImage: '/hero-test/img/odin.jpg',
  },

  // ── 15. 인간의 왕 — 아서왕 (연대+무력) ──
  {
    id: 'arthur', code: 'art',
    stats: ['bond', 'might'],
    signatures: [['bond', 'might'], ['bond', 'precision']],
    name: { ko: '인간의 왕', en: 'The Mortal King' },
    heroName: { ko: '아서왕', en: 'King Arthur' },
    image: '/hero-test/img/arthur.jpg',
    hook: {
      ko: '다들 당신한테 물어봐요. 정작 당신은 누구한테 물어보죠?',
      en: 'Everyone comes to you with their questions. Who do you go to?',
    },
    description: {
      ko: [
        '어느 모임에 가든 결국 정리하는 역할이 당신에게 옵니다. 자청한 적도 없는데 사람들이 자연스럽게 물어보고 기대요. 책임감이 있어서 거절도 잘 못 하고, 그러다 보니 짊어진 게 점점 늘어납니다. 그런데 그 무게를 견디는 사람이 흔치 않다는 걸, 당신은 잘 모르더라고요.',
        '아서는 신의 아들이 아니었습니다. 이름 없는 소년이었고, 다만 뽑아야 할 검이 있었을 때 뽑았을 뿐이죠. 그가 왕이 된 건 핏줄이 아니라, 사람들이 그를 따랐기 때문입니다.',
      ],
      en: [
        "Whatever group you join, the job of pulling things together eventually lands on you. You never asked for it — people just naturally come to you, ask you, lean on you. Your sense of responsibility makes it hard to say no, so what you carry keeps growing. What you don’t seem to realize is how rare it is: a person who can bear that weight.",
        "Arthur was no son of a god. He was a nameless boy — there simply was a sword that had to be drawn, and he drew it. He became king not by blood, but because people followed him.",
      ],
    },
    strengths: [
      {
        title: { ko: '구심력', en: 'Gravity' },
        body: {
          ko: '사람이 모이고, 남습니다.',
          en: 'People gather around you, and they stay.',
        },
      },
      {
        title: { ko: '책임감', en: 'Responsibility' },
        body: {
          ko: '맡은 바는 끝까지 지키려합니다.',
          en: 'You see your duties through to the end.',
        },
      },
      {
        title: { ko: '리더십', en: 'Leadership' },
        body: {
          ko: '모두가 헤맬 때 방향을 정해줍니다.',
          en: "When everyone’s lost, you set the direction.",
        },
      },
    ],
    caution: {
      ko: '기댈 곳 없는 사람이 되기 쉽습니다. 원탁이 무너진 건 아서가 약해서가 아니라, 아무도 그를 지켜주지 않아서였어요.',
      en: "It’s easy to become the person with no one to lean on. The Round Table didn’t fall because Arthur was weak — it fell because no one protected him.",
    },
    riveFigure: {
      src: '/hero-test/rive/gandhi.riv',
      artboard: 'Gandhi',
      stateMachine: 'StateMachine:Motion',
      name: { ko: '간디', en: 'Mahatma Gandhi' },
    },
    habits: [
      {
        image: '',
        title: { ko: '오늘 내가 한 약속 지키기', en: 'Keep the promises you made today' },
        desc: {
          ko: '말한 만큼 행동으로 보여줘요.',
          en: 'Show it in action as much as you said it.',
        },
      },
      {
        image: '',
        title: { ko: '끝까지 말할 시간 주기', en: 'Let people finish talking' },
        desc: {
          ko: '상대의 말이 마무리될 때까지 기다려요.',
          en: 'Wait until the other person is done.',
        },
      },
      {
        image: '',
        title: { ko: '오늘 마음에 짊어졌던 것 적기', en: 'Write down what weighed on you today' },
        desc: {
          ko: '남을 돌보듯 가끔은 내 자신도 돌봐줘야 해요.',
          en: 'Care for yourself the way you care for everyone else — at least sometimes.',
        },
      },
    ],
    ogImage: '/hero-test/img/arthur.jpg',
  },

  // ── 16. 직감의 사냥꾼 — 핀 막 쿨 (직감+지략) ──
  {
    id: 'finn', code: 'fin',
    stats: ['instinct', 'wit'],
    signatures: [['instinct', 'wit'], ['instinct', 'independence']],
    name: { ko: '직감의 사냥꾼', en: 'The Instinctive Hunter' },
    heroName: { ko: '핀 막 쿨', en: 'Fionn mac Cumhaill' },
    image: '/hero-test/img/finn.jpg',
    hook: {
      ko: '설명은 못 하는데 맞아요. 그게 실력이에요.',
      en: "You can’t explain it — but you’re right. That’s a skill.",
    },
    description: {
      ko: [
        '다들 좋다고 하는데 혼자만 어딘가 찜찜했던 적, 있을 거예요. 처음 만난 사람에 대해 받은 인상도 시간이 지나고 보면 대체로 맞고요. 당신은 정보를 다 모으기 전에 이미 답을 알고 있는 쪽입니다.',
        '문제는 그다음이에요. ‘왜 그렇게 생각해?’라는 물음에 대답을 못 하니까, 자리에서는 늘 근거를 들고 온 사람이 이깁니다. 나중에 당신이 맞았다는 게 드러나도 그땐 이미 늦어 있고요.',
        '핀 막 쿨은 지혜의 연어를 굽다가 손가락을 데었고, 무심코 그 손가락을 입에 물면서 세상의 지혜를 얻었습니다. 그 뒤로 답이 필요할 때마다 엄지를 물었죠. 계산이 아니라 몸이 먼저 아는 종류의 지혜입니다.',
      ],
      en: [
        "There’s been a moment when everyone said yes and you alone felt something was off. And your first impressions of people tend to prove right with time. You’re the kind who already knows the answer before all the information is in.",
        "The problem is what comes next. You can’t answer “why do you think that?” — so in the room, the person who brought the receipts always wins. And by the time it turns out you were right, it’s already too late.",
        "Fionn mac Cumhaill burned his thumb cooking the Salmon of Knowledge, put it in his mouth without thinking, and gained the wisdom of the world. From then on, whenever he needed an answer, he bit his thumb. It’s the kind of wisdom the body knows before calculation does.",
      ],
    },
    strengths: [
      {
        title: { ko: '판단 속도', en: 'Speed of judgment' },
        body: {
          ko: '정보가 적어도 결정을 내립니다.',
          en: 'You can decide even with little information.',
        },
      },
      {
        title: { ko: '사람 보는 눈', en: 'Reading people' },
        body: {
          ko: '첫인상이 대체로 맞습니다.',
          en: 'Your first impressions are usually right.',
        },
      },
      {
        title: { ko: '위험 감지', en: 'Spider senses' },
        body: {
          ko: '잘못된 방향으로 가기 전에 멈춥니다.',
          en: 'You stop before heading the wrong way.',
        },
      },
    ],
    caution: {
      ko: '직감은 데이터가 쌓인 결과입니다. 경험 밖의 영역에서는 잘 안 맞아요. 그리고 설명하지 못하면 아무도 따라오지 않습니다.',
      en: "Intuition is accumulated data. Outside your experience, it misfires. And if you can’t explain it, no one follows.",
    },
    riveFigure: {
      src: '/hero-test/rive/socrates.riv',
      artboard: 'Socrates',
      stateMachine: 'StateMachine:Motion',
      name: { ko: '소크라테스', en: 'Socrates' },
    },
    habits: [
      {
        image: '',
        title: { ko: '판단에 대한 이유 한 줄 붙이기', en: 'Add a line of reason to each call' },
        desc: {
          ko: '결정할 때 ‘왜 그렇게 느꼈는지’ 한 문장으로 써보기.',
          en: 'When you decide, write one sentence on why it felt that way.',
        },
      },
      {
        image: '',
        title: { ko: '낯선 경험 해보기', en: 'Try something unfamiliar' },
        desc: {
          ko: '직감의 재료는 경험입니다. 새로운 걸 계속 넣어줘야 감이 녹슬지 않아요.',
          en: "Intuition comes from experience. Keep feeding it new things so it doesn’t rust.",
        },
      },
      {
        image: '',
        title: { ko: '주변을 천천히 관찰하기', en: 'Slowly observe your surroundings' },
        desc: {
          ko: '직감은 무의식이 모아둔 관찰의 결과입니다.',
          en: 'Intuition is the sum of observations your unconscious has been collecting.',
        },
      },
    ],
    ogImage: '/hero-test/img/finn.jpg',
  },
];

export function getHeroType(typeId) {
  return HERO_TYPES.find((t) => t.id === typeId) || null;
}
