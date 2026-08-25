// ─────────────────────────────────────────────────────────────
// 채점 로직 (순수 함수 — UI와 완전히 분리)
//
// 1단계: 답변 환산 — 확신 있는 답변에 가중치
//        1점→0, 2점→2, 3점→3, 4점→4, 5점→6
//        (5점은 정말 확신할 때만 주는 경향이 있어 크게, 1점 "전혀
//        아니다"도 강한 신호이므로 0으로 깎아서 반영)
//        환산 후 능력치별 3문항 합산 (능력치당 0~21점)
// 2단계: 보정 (calibration.js의 mean/std 적용 — 초기값은 보정 없음)
// 3단계: 최고점 능력치 = 기준 능력치 (결과 유형의 시그니처 조합에
//        반드시 포함)
// 4단계: 기준 능력치가 들어간 시그니처 조합(heroTypes.js의 signatures)을
//        가진 유형이 후보. 각 후보의 짝 능력치 점수(조합이 여러 개면
//        그중 최고점)가 가장 높은 유형 선택
//        (= 1위+2위 조합이 배정 안 된 조합이면 자동으로 3위, 4위… 로
//        내려가며 배정된 조합을 찾는 것과 동일)
// 5단계: 동점 처리
//   ① 기준 능력치가 여러 개 동점 → 후보를 전부 모으고 두 능력치 합이
//      가장 높은 유형
//   ② 짝 능력치 동점 → 두 능력치 점수 차이가 작은(균형 잡힌) 유형
//   ③ 그래도 동점 → HERO_TYPES 배열에서 먼저 나오는 유형
// ─────────────────────────────────────────────────────────────

import { QUESTIONS, QUESTION_COUNT } from '../data/questions';
import { HERO_TYPES, STATS } from '../data/heroTypes';
import { CALIBRATION } from '../data/calibration';

// 보정값이 실수(float)가 되면 부동소수점 오차가 생길 수 있어 동점 비교에 여유를 둔다.
const EPS = 1e-9;

export function validateAnswers(answers) {
  if (!Array.isArray(answers) || answers.length !== QUESTION_COUNT) {
    throw new Error(`answers must be an array of length ${QUESTION_COUNT}`);
  }
  answers.forEach((v, i) => {
    if (!Number.isInteger(v) || v < 1 || v > 5) {
      throw new Error(`question ${i + 1} has an invalid answer: ${v}`);
    }
  });
}

// 1단계 — 답변 환산 후 능력치별 원점수 합산
// 양 극단 답변(1점·5점)은 강한 신호이므로 가중치를 키운다.
const ANSWER_WEIGHT = { 1: 0, 2: 2, 3: 3, 4: 4, 5: 6 };

export function computeRawScores(answers) {
  const raw = {};
  STATS.forEach((s) => { raw[s.id] = 0; });
  QUESTIONS.forEach((q, i) => { raw[q.stat] += ANSWER_WEIGHT[answers[i]]; });
  return raw;
}

// 2단계 — 보정 적용: (원점수 - mean) / std
export function applyCalibration(raw) {
  const adjusted = {};
  STATS.forEach((s) => {
    const { mean, std } = CALIBRATION[s.id];
    adjusted[s.id] = (raw[s.id] - mean) / std;
  });
  return adjusted;
}

// 3~5단계 — 유형 결정 (시그니처 조합 기반)
export function pickHeroType(adjusted) {
  const maxScore = Math.max(...STATS.map((s) => adjusted[s.id]));
  const topStats = STATS.filter((s) => adjusted[s.id] > maxScore - EPS).map((s) => s.id);

  // 기준 능력치가 여러 개 동점이면 "두 능력치 합", 아니면 "짝 능력치 점수"로 비교
  const useSum = topStats.length > 1;

  let best = null;
  let bestMetric = -Infinity;
  let bestBalance = Infinity;

  for (const top of topStats) {
    for (const type of HERO_TYPES) {
      // 기준 능력치가 들어간 시그니처 조합들의 짝 능력치 중 최고점
      const partners = type.signatures
        .filter((pair) => pair.includes(top))
        .map((pair) => (pair[0] === top ? pair[1] : pair[0]));
      if (partners.length === 0) continue;

      const partnerScore = Math.max(...partners.map((s) => adjusted[s]));
      const metric = useSum ? adjusted[top] + partnerScore : partnerScore;
      const balance = Math.abs(adjusted[top] - partnerScore);

      const strictlyBetter = metric > bestMetric + EPS;
      const tiedButMoreBalanced =
        Math.abs(metric - bestMetric) <= EPS && balance < bestBalance - EPS;

      // 셋 다 동점이면 교체하지 않음 → 배열 앞쪽 유형 유지 (동점 규칙 ③)
      if (strictlyBetter || tiedButMoreBalanced) {
        best = type;
        bestMetric = metric;
        bestBalance = balance;
      }
    }
  }

  return best;
}

// 전체 채점 — answers: 길이 27, 각 1~5 정수
export function scoreTest(answers) {
  validateAnswers(answers);
  const raw = computeRawScores(answers);
  const adjusted = applyCalibration(raw);
  const type = pickHeroType(adjusted);

  const ranked = [...STATS]
    .map((s) => ({ stat: s.id, score: adjusted[s.id], raw: raw[s.id] }))
    .sort((x, y) => y.score - x.score);

  return { typeId: type.id, type, raw, adjusted, ranked };
}
