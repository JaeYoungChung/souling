// ─────────────────────────────────────────────────────────────
// 진행 상태 저장/복원 (localStorage)
//
// 새로고침, 실수로 뒤로가기, 다른 앱 갔다 오기 모두에서 답변이 유지된다.
// ─────────────────────────────────────────────────────────────

import { QUESTION_COUNT } from '../data/questions';

const KEY = 'souling_hero_test_v1';

const emptyState = () => ({
  answers: Array(QUESTION_COUNT).fill(null), // 각 1~5 또는 null
  resultTypeId: null,   // 채점 완료 시 유형 id
  reported: false,      // 익명 카운트 전송 여부 (1회만)
  updatedAt: Date.now(),
});

export function loadState() {
  try {
    const rawJson = localStorage.getItem(KEY);
    if (!rawJson) return null;
    const state = JSON.parse(rawJson);
    if (!Array.isArray(state.answers) || state.answers.length !== QUESTION_COUNT) {
      return null;
    }
    return state;
  } catch (e) {
    return null; // localStorage 불가(사생활 모드 등) 또는 손상된 데이터
  }
}

export function saveState(state) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ ...state, updatedAt: Date.now() }));
  } catch (e) {
    // 저장 실패해도 테스트 진행은 막지 않는다
  }
}

export function resetState() {
  try {
    localStorage.removeItem(KEY);
  } catch (e) {
    // ignore
  }
}

export function getOrCreateState() {
  return loadState() || emptyState();
}

// 아직 답하지 않은 첫 문항의 인덱스 (0-based). 전부 답했으면 QUESTION_COUNT.
export function firstUnanswered(answers) {
  const idx = answers.findIndex((v) => v === null || v === undefined);
  return idx === -1 ? QUESTION_COUNT : idx;
}

export function answeredCount(answers) {
  return answers.filter((v) => v !== null && v !== undefined).length;
}
