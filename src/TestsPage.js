import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import appLogo from './assets/logo.png';

// ─── 유형 검사 허브 ──────────────────────────────────────────
// 소울링의 유형 검사들을 모아 보여주는 탭.
// 새 검사가 생기면 TESTS 배열에 카드를 추가하면 된다.

const TEXT = {
  en: {
    pageTitle: 'Personality Tests | Souling',
    heading: 'Personality Tests',
    subheading: 'Get to know yourself, one test at a time.',
    comingSoonTitle: 'A new test is brewing',
    comingSoonDesc: 'We are crafting the next one. Stay tuned!',
    langToggle: '한국어',
  },
  ko: {
    pageTitle: '유형 검사 | 소울링',
    heading: '유형 검사',
    subheading: '테스트로 하나씩 알아가는 나.',
    comingSoonTitle: '새로운 유형 검사 준비 중',
    comingSoonDesc: '다음 검사를 만들고 있어요. 기대해 주세요!',
    langToggle: 'English',
  },
};

const TESTS = [
  {
    id: 'hero-test',
    to: '/hero-test',
    badge: {
      ko: '🎬 「오디세이」 개봉 기념',
      en: '🎬 Celebrating “The Odyssey”',
    },
    title: { ko: '영웅 유형 테스트', en: 'Hero Type Test' },
    desc: {
      ko: '내 안의 영웅은 누구일까요? 오디세우스부터 아킬레우스까지, 16가지 영웅 유형 중 나를 찾아보세요.',
      en: 'Which hero lives inside you? From Odysseus to Achilles — find yours among 16 hero types.',
    },
    meta: { ko: '27문항 · 약 5분', en: '27 questions · about 5 min' },
    cta: { ko: '테스트 하러 가기', en: 'Take the test' },
  },
];

function detectLang() {
  try {
    const saved = localStorage.getItem('souling_lang');
    if (saved === 'en' || saved === 'ko') return saved;
  } catch (e) {
    // localStorage 불가 — 브라우저 언어로
  }
  const browserLang =
    navigator.language || (navigator.languages && navigator.languages[0]) || 'en';
  return browserLang.toLowerCase().startsWith('ko') ? 'ko' : 'en';
}

function TestsPage() {
  const [lang, setLang] = useState(detectLang);
  const t = TEXT[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.pageTitle;
    window.scrollTo(0, 0);
    try {
      localStorage.setItem('souling_lang', lang);
    } catch (e) {
      // ignore
    }
  }, [lang, t.pageTitle]);

  const toggleLang = () => setLang((prev) => (prev === 'ko' ? 'en' : 'ko'));

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo-section">
            <Link to="/" className="logo-home-link" aria-label="Souling home">
              <img src={appLogo} alt="Souling" className="logo-image" />
              <h1 className="logo">Souling</h1>
            </Link>
          </div>
          <nav className="nav">
            <button type="button" className="lang-toggle" onClick={toggleLang}>
              {t.langToggle}
            </button>
          </nav>
        </div>
      </header>

      <main className="tests-page">
        <div className="container">
          <h1 className="tests-heading">{t.heading}</h1>
          <p className="tests-subheading">{t.subheading}</p>

          <div className="tests-grid">
            {TESTS.map((test) => (
              <Link key={test.id} to={test.to} className="test-card">
                <span className="test-card-badge">{test.badge[lang]}</span>
                <h2 className="test-card-title">{test.title[lang]}</h2>
                <p className="test-card-desc">{test.desc[lang]}</p>
                <div className="test-card-bottom">
                  <span className="test-card-meta">{test.meta[lang]}</span>
                  <span className="test-card-cta">{test.cta[lang]} →</span>
                </div>
              </Link>
            ))}

            <div className="test-card test-card--soon" aria-disabled="true">
              <h2 className="test-card-title">{t.comingSoonTitle}</h2>
              <p className="test-card-desc">{t.comingSoonDesc}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default TestsPage;
