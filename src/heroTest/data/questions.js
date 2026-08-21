// ─────────────────────────────────────────────────────────────
// 영웅 유형 테스트 — 문항 데이터 (27개)
//
//   stat : 이 문항이 재는 능력치 (변경하지 마세요 — 능력치마다 정확히 3문항)
//          might(무력·몸으로 부딪히는 힘) · wit(지략·판을 읽는 머리)
//          will(의지·버티는 힘) · independence(독립·혼자 서는 힘)
//          bond(연대·사람을 품는 힘) · impulse(충동·타오르는 힘)
//          precision(정교·다듬는 힘) · instinct(직감·먼저 아는 힘)
//          charm(매혹·끌어당기는 힘)
//
//   답변은 5단계: 왼쪽 끝 "아니다" = 1점, 오른쪽 끝 "그렇다" = 5점
//
// 문항 순서는 9개 능력치가 골고루 섞이도록 3바퀴 순환합니다.
// 순서를 바꾸고 싶으면 배열 순서만 바꾸면 됩니다 (stat 매핑은 유지).
// ─────────────────────────────────────────────────────────────

export const QUESTIONS = [
  // ── 1바퀴 ──
  {
    id: 1,
    stat: 'might',
    text: {
      ko: '헬스, 런닝 등의 활동적인 운동을 평소에 즐겨한다.',
      en: 'I enjoy physical activities like hitting the gym or going for a run.',
    },
  },
  {
    id: 2,
    stat: 'wit',
    text: {
      ko: '어떤 일이 생기면 “왜 이렇게 됐지?”의 구조부터 파악하려 한다.',
      en: 'When something happens, my first move is to figure out why it happened.',
    },
  },
  {
    id: 3,
    stat: 'will',
    text: {
      ko: '남들이 다 포기한 일을 나 혼자 붙잡고 있는 것을 즐긴다.',
      en: 'I enjoy sticking with something long after everyone else has given up.',
    },
  },
  {
    id: 4,
    stat: 'independence',
    text: {
      ko: '나는 강아지보다는 고양이 같은 사람이다.',
      en: 'Personality-wise, I’m more cat than dog.',
    },
  },
  {
    id: 5,
    stat: 'bond',
    text: {
      ko: '내가 잘 되는 것보다 내 사람들이 잘 되는 게 더 기쁘다.',
      en: 'Seeing my people do well makes me happier than doing well myself.',
    },
  },
  {
    id: 6,
    stat: 'impulse',
    text: {
      ko: '한번 꽂히면 밤을 새워서라도 그걸 끝낸다.',
      en: 'When something hooks me, I’ll pull an all-nighter to finish it.',
    },
  },
  {
    id: 7,
    stat: 'precision',
    text: {
      ko: '시작하기 전에 필요한 걸 다 갖춰놔야 마음이 놓인다.',
      en: 'I can’t relax until everything I need is in place before I start.',
    },
  },
  {
    id: 8,
    stat: 'instinct',
    text: {
      ko: '이유는 설명 못 해도 “이건 아닌데” 싶은 감이 잘 맞는 편이다.',
      en: 'Even when I can’t explain why, my “something’s off” feeling usually turns out right.',
    },
  },
  {
    id: 9,
    stat: 'charm',
    text: {
      ko: '내가 좋아하는 걸 이야기하면 사람들이 관심을 갖는 편이다.',
      en: 'When I talk about things I love, people tend to get drawn in.',
    },
  },
  // ── 2바퀴 ──
  {
    id: 10,
    stat: 'might',
    text: {
      ko: '나는 예민하기보다는 털털한 편이다.',
      en: 'I’m more easygoing than sensitive.',
    },
  },
  {
    id: 11,
    stat: 'wit',
    text: {
      ko: '추리 소설과 영화를 좋아한다.',
      en: 'I love mystery novels and films.',
    },
  },
  {
    id: 12,
    stat: 'will',
    text: {
      ko: '보통 한 번 시작한 일은 끝을 본다.',
      en: 'Once I start something, I usually see it through.',
    },
  },
  {
    id: 13,
    stat: 'independence',
    text: {
      ko: '여럿이 할 때보다 혼자 할 때 결과가 더 잘 나온다.',
      en: 'I get better results working alone than in a group.',
    },
  },
  {
    id: 14,
    stat: 'bond',
    text: {
      ko: '친구나 가족들과 사이가 좋다.',
      en: 'I’m close with my friends and family.',
    },
  },
  {
    id: 15,
    stat: 'impulse',
    text: {
      ko: '감정이 표정이나 태도에 티가 나는 편이다.',
      en: 'My emotions show on my face and in my attitude.',
    },
  },
  {
    id: 16,
    stat: 'precision',
    text: {
      ko: '남들은 신경 안 쓰는 디테일이 나는 계속 눈에 밟힌다.',
      en: 'I regularly spot details others never notice.',
    },
  },
  {
    id: 17,
    stat: 'instinct',
    text: {
      ko: '오래 고민한 선택보다 처음 끌린 쪽이 결과가 좋았던 적이 많다.',
      en: 'My first instinct has often worked out better than choices I agonized over.',
    },
  },
  {
    id: 18,
    stat: 'charm',
    text: {
      ko: '나의 미감은 좋은 편이다.',
      en: 'I have good aesthetics.',
    },
  },
  // ── 3바퀴 ──
  {
    id: 19,
    stat: 'might',
    text: {
      ko: '고민되는 일이 있으면 일단 몸을 움직여야 풀린다.',
      en: 'When something’s weighing on me, I have to get moving before it clears up.',
    },
  },
  {
    id: 20,
    stat: 'wit',
    text: {
      ko: '나의 직감보다는 확실한 근거와 논리를 더 신뢰한다.',
      en: 'I trust solid evidence and logic more than my gut.',
    },
  },
  {
    id: 21,
    stat: 'will',
    text: {
      ko: '남들보다 고통을 잘 참는다.',
      en: 'I can endure pain better than most people.',
    },
  },
  {
    id: 22,
    stat: 'independence',
    text: {
      ko: '다들 그렇게 한다는 이유만으로 따라가지는 않는다.',
      en: 'I don’t go along with something just because everyone else does.',
    },
  },
  {
    id: 23,
    stat: 'bond',
    text: {
      ko: '세상은 아직 따뜻하다고 믿는다.',
      en: 'I believe most people are good at heart.',
    },
  },
  {
    id: 24,
    stat: 'impulse',
    text: {
      ko: '열정이 식으면 그 일에 흥미가 뚝 떨어진다.',
      en: 'Once the passion cools, my interest drops off completely.',
    },
  },
  {
    id: 25,
    stat: 'precision',
    text: {
      ko: '나는 완벽주의자이다.',
      en: 'I’m a perfectionist.',
    },
  },
  {
    id: 26,
    stat: 'instinct',
    text: {
      ko: '사람을 만나면 몇 분 안에 어떤 사람인지 대충 감이 온다.',
      en: 'Within a few minutes of meeting someone, I get a sense of who they are.',
    },
  },
  {
    id: 27,
    stat: 'charm',
    text: {
      ko: '처음 보는 자리에서도 사람들이 나에게 먼저 다가오는 편이다.',
      en: 'Even among strangers, people tend to come up to me first.',
    },
  },
];

export const QUESTION_COUNT = QUESTIONS.length;
