import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './heroTest.css';

import StartPage from './pages/StartPage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import VerifyPage from './pages/VerifyPage';

// /hero-test 하위 라우팅
//   /hero-test                  시작 화면
//   /hero-test/quiz?q=12        문항 (쿼리 = 현재 문항 번호)
//   /hero-test/result/:typeId   결과 (본인 + 공유 방문자 겸용)
//   /hero-test/verify           채점 검증 페이지
function HeroTestApp() {
  return (
    <Routes>
      <Route index element={<StartPage />} />
      <Route path="quiz" element={<QuizPage />} />
      <Route path="result/:typeId" element={<ResultPage />} />
      <Route path="verify" element={<VerifyPage />} />
      <Route path="*" element={<Navigate to="/hero-test" replace />} />
    </Routes>
  );
}

export default HeroTestApp;
