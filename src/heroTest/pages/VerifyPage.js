import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { HERO_TYPES, STATS } from '../data/heroTypes';
import { QUESTIONS, QUESTION_COUNT } from '../data/questions';
import { scoreTest } from '../logic/scoring';

// 채점 검증 페이지 (/hero-test/verify)
// 1. 16개 유형 도달 — 각 유형의 두 능력치 문항 전부 5점, 나머지 1점
// 2. 결정성 — 같은 답변에 항상 같은 결과
// 3. 미완성 답변 차단
// 4. 랜덤 5000회 유형 분포

function buildArchetypeAnswers(type) {
  return QUESTIONS.map((q) => (type.stats.includes(q.stat) ? 5 : 1));
}

function randomAnswers() {
  return Array.from({ length: QUESTION_COUNT }, () => 1 + Math.floor(Math.random() * 5));
}

function statLabel(id) {
  return STATS.find((s) => s.id === id)?.label.ko || id;
}

function runAllChecks() {
  // 1. 16개 유형 전부 도달 가능한가
  const archetypeResults = HERO_TYPES.map((type) => {
    let got = null;
    let error = null;
    try {
      got = scoreTest(buildArchetypeAnswers(type)).typeId;
    } catch (e) {
      error = e.message;
    }
    return { type, got, pass: got === type.id, error };
  });
  const archetypePass = archetypeResults.every((r) => r.pass);

  // 2. 같은 답변 → 항상 같은 결과
  let deterministicPass = true;
  for (let i = 0; i < 100; i += 1) {
    const answers = randomAnswers();
    const firstRun = scoreTest([...answers]).typeId;
    const secondRun = scoreTest([...answers]).typeId;
    if (firstRun !== secondRun) {
      deterministicPass = false;
      break;
    }
  }

  // 3. 미완성/잘못된 답변이 제대로 막히는가
  const incompleteCases = [
    { label: '26문항만 답변 (배열 길이 26)', answers: Array(26).fill(3) },
    { label: '27번째 답이 비어 있음 (null)', answers: [...Array(26).fill(3), null] },
    { label: '범위 밖 값 0', answers: [...Array(26).fill(3), 0] },
    { label: '범위 밖 값 6', answers: [...Array(26).fill(3), 6] },
    { label: '정수가 아닌 값 2.5', answers: [...Array(26).fill(3), 2.5] },
  ].map((c) => {
    let blocked = false;
    try {
      scoreTest(c.answers);
    } catch (e) {
      blocked = true;
    }
    return { ...c, blocked };
  });
  const incompletePass = incompleteCases.every((c) => c.blocked);

  // (정상 답변이 통과하는지도 확인)
  let validPass = true;
  try {
    scoreTest(Array(QUESTION_COUNT).fill(3));
  } catch (e) {
    validPass = false;
  }

  // 4. 랜덤 5000회 분포
  const RUNS = 5000;
  const counts = {};
  HERO_TYPES.forEach((type) => {
    counts[type.id] = 0;
  });
  for (let i = 0; i < RUNS; i += 1) {
    counts[scoreTest(randomAnswers()).typeId] += 1;
  }
  const distribution = HERO_TYPES.map((type) => ({
    type,
    count: counts[type.id],
    pct: (counts[type.id] / RUNS) * 100,
  })).sort((a, b) => b.count - a.count);
  const distributionPass = distribution.every((d) => d.count > 0);
  const maxCount = Math.max(...distribution.map((d) => d.count));

  const allPass =
    archetypePass && deterministicPass && incompletePass && validPass && distributionPass;

  return {
    archetypeResults,
    archetypePass,
    deterministicPass,
    incompleteCases,
    incompletePass,
    validPass,
    distribution,
    distributionPass,
    maxCount,
    RUNS,
    allPass,
  };
}

function Badge({ pass }) {
  return (
    <span className={`ht-verify-badge ${pass ? 'is-pass' : 'is-fail'}`}>
      {pass ? 'PASS' : 'FAIL'}
    </span>
  );
}

function VerifyPage() {
  const r = useMemo(() => runAllChecks(), []);

  return (
    <div className="ht-page ht-verify">
      <div className="ht-verify-inner">
        <p>
          <Link to="/hero-test" className="ht-verify-back">
            ← 영웅 유형 테스트
          </Link>
        </p>
        <h1>채점 검증</h1>

        <div className={`ht-verify-summary ${r.allPass ? 'is-pass' : 'is-fail'}`}>
          {r.allPass ? '✓ 모든 검증 통과' : '✗ 실패한 검증이 있습니다'}
        </div>

        <section>
          <h2>
            1. 16개 유형 도달 <Badge pass={r.archetypePass} />
          </h2>
          <p className="ht-verify-desc">
            각 유형의 두 능력치 문항에 전부 5점, 나머지에 전부 1점을 넣었을 때 정확히 그
            유형이 나오는지 확인합니다.
          </p>
          <table>
            <thead>
              <tr>
                <th>유형</th>
                <th>능력치</th>
                <th>기대</th>
                <th>결과</th>
                <th>판정</th>
              </tr>
            </thead>
            <tbody>
              {r.archetypeResults.map(({ type, got, pass, error }) => (
                <tr key={type.id} className={pass ? '' : 'is-fail-row'}>
                  <td>
                    {type.name.ko} — {type.heroName.ko}
                  </td>
                  <td>
                    {type.stats.map(statLabel).join(' + ')}
                  </td>
                  <td>{type.id}</td>
                  <td>{error || got}</td>
                  <td>{pass ? '✓' : '✗'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2>
            2. 결정성 (같은 답변 → 같은 결과) <Badge pass={r.deterministicPass} />
          </h2>
          <p className="ht-verify-desc">
            랜덤 답변 100세트를 각각 두 번 채점해 결과가 동일한지 확인합니다.
          </p>
        </section>

        <section>
          <h2>
            3. 미완성 답변 차단 <Badge pass={r.incompletePass && r.validPass} />
          </h2>
          <table>
            <thead>
              <tr>
                <th>케이스</th>
                <th>판정</th>
              </tr>
            </thead>
            <tbody>
              {r.incompleteCases.map((c) => (
                <tr key={c.label} className={c.blocked ? '' : 'is-fail-row'}>
                  <td>{c.label}</td>
                  <td>{c.blocked ? '✓ 차단됨' : '✗ 통과되어 버림'}</td>
                </tr>
              ))}
              <tr className={r.validPass ? '' : 'is-fail-row'}>
                <td>정상 답변 27개 (전부 3점)</td>
                <td>{r.validPass ? '✓ 정상 채점' : '✗ 채점 실패'}</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>
            4. 랜덤 {r.RUNS.toLocaleString()}회 분포 <Badge pass={r.distributionPass} />
          </h2>
          <p className="ht-verify-desc">
            균등 랜덤 응답 기준 분포입니다. 0회인 유형이 있으면 안 되고, 특정 유형 쏠림은
            나중에 calibration.js 보정값으로 조정합니다.
          </p>
          <table>
            <thead>
              <tr>
                <th>유형</th>
                <th>능력치</th>
                <th>횟수</th>
                <th>비율</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {r.distribution.map(({ type, count, pct }) => (
                <tr key={type.id} className={count === 0 ? 'is-fail-row' : ''}>
                  <td>
                    {type.name.ko} — {type.heroName.ko}
                  </td>
                  <td>{type.stats.map(statLabel).join('+')}</td>
                  <td>{count.toLocaleString()}</td>
                  <td>{pct.toFixed(1)}%</td>
                  <td className="ht-verify-bar-cell">
                    <div
                      className="ht-verify-bar"
                      style={{ width: `${(count / r.maxCount) * 100}%` }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default VerifyPage;
