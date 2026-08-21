import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ScaleInput from '../components/ScaleInput';
import ProgressBar from '../components/ProgressBar';
import LoadingOverlay from '../components/LoadingOverlay';
import { UI_TEXT } from '../data/uiText';
import { QUESTIONS, QUESTION_COUNT } from '../data/questions';
import { useLang, txt } from '../logic/lang';
import { getOrCreateState, saveState, firstUnanswered } from '../logic/storage';
import { scoreTest } from '../logic/scoring';

// 문항 화면.
// - URL 쿼리(?q=12)가 현재 문항 → 문항마다 히스토리 엔트리가 쌓여서
//   브라우저 뒤로가기 = 이전 문항 (테스트가 날아가지 않음)
// - 답변은 매번 localStorage에 저장 → 새로고침/이탈 후에도 이어서 가능
function QuizPage() {
  const [lang, toggleLang] = useLang();
  const t = UI_TEXT[lang];
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [state, setState] = useState(getOrCreateState);
  const [phase, setPhase] = useState('quiz'); // 'quiz' | 'loading'
  const lockRef = useRef(false); // 전환 애니메이션 중 중복 입력 방지

  const { answers } = state;

  // 요청된 문항 번호를 허용 범위로 보정:
  // 1 ≤ q ≤ (첫 미답변 문항 + 1) ≤ 27
  const requestedQ = parseInt(searchParams.get('q'), 10);
  const maxQ = Math.min(firstUnanswered(answers) + 1, QUESTION_COUNT);
  const q = Number.isInteger(requestedQ)
    ? Math.min(Math.max(requestedQ, 1), maxQ)
    : Math.min(maxQ, QUESTION_COUNT);

  useEffect(() => {
    document.title = t.pageTitle;
  }, [t.pageTitle]);

  // URL이 허용 범위를 벗어나면 조용히 정정
  useEffect(() => {
    if (phase !== 'quiz') return;
    if (searchParams.get('q') !== String(q)) {
      setSearchParams({ q: String(q) }, { replace: true });
    }
  }, [q, phase, searchParams, setSearchParams]);

  const finish = useCallback(
    (finalState) => {
      let result;
      try {
        result = scoreTest(finalState.answers);
      } catch (e) {
        return; // 미완성 답변은 채점 불가 — 화면 흐름상 발생하지 않음
      }

      const done = { ...finalState, resultTypeId: result.typeId };

      // 익명 유형 카운트 — 결과가 나온 직후 1회만 전송
      if (!done.reported) {
        done.reported = true;
        fetch(`/.netlify/functions/hero-count?t=${result.type.code}`, {
          method: 'POST',
          keepalive: true,
        }).catch(() => {});
      }

      setState(done);
      saveState(done);

      // 로딩 연출 (계산은 이미 끝났지만 기대감을 만드는 시간)
      setPhase('loading');
      setTimeout(() => {
        navigate(`/hero-test/result/${result.typeId}`);
      }, 2600);
    },
    [navigate]
  );

  const handleSelect = (value) => {
    if (lockRef.current || phase !== 'quiz') return;
    lockRef.current = true;

    const nextAnswers = [...answers];
    nextAnswers[q - 1] = value;
    const nextState = { ...state, answers: nextAnswers };
    setState(nextState);
    saveState(nextState);

    // 선택이 확인되는 짧은 전환(0.3초) 후 자동으로 다음 문항
    setTimeout(() => {
      lockRef.current = false;
      if (q < QUESTION_COUNT) {
        setSearchParams({ q: String(q + 1) }); // push → 뒤로가기로 돌아올 수 있음
      } else {
        finish(nextState);
      }
    }, 300);
  };

  const goPrev = () => {
    if (q > 1) setSearchParams({ q: String(q - 1) });
  };

  if (phase === 'loading') {
    return (
      <div className="ht-page ht-quiz">
        <LoadingOverlay messages={t.loadingMessages} />
      </div>
    );
  }

  const question = QUESTIONS[q - 1];
  const questionText = txt(question.text, lang) || `${t.questionPlaceholder} (Q${question.id})`;

  return (
    <div className="ht-page ht-quiz">
      <div className="ht-quiz-top">
        <button
          type="button"
          className="ht-quiz-prev"
          onClick={goPrev}
          disabled={q === 1}
          aria-label={t.prev}
        >
          ←
        </button>
        <ProgressBar current={q} total={QUESTION_COUNT} />
        <button type="button" className="ht-lang-toggle ht-lang-toggle--small" onClick={toggleLang}>
          {t.langToggle}
        </button>
      </div>

      <div className="ht-quiz-body" key={q}>
        <p className="ht-quiz-qnum">Q{q}</p>
        <h2 className="ht-quiz-question">{questionText}</h2>
      </div>

      <div className="ht-quiz-scale">
        <ScaleInput
          value={answers[q - 1] || null}
          onSelect={handleSelect}
          noLabel={t.scaleNo}
          yesLabel={t.scaleYes}
        />
      </div>
    </div>
  );
}

export default QuizPage;
