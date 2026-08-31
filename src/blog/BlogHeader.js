import React from 'react';
import { Link } from 'react-router-dom';
import appLogo from '../assets/logo.png';

const NAV_TEXT = {
  en: { tests: 'Tests', blog: 'Blog', langToggle: '한국어' },
  ko: { tests: '유형 검사', blog: '블로그', langToggle: 'English' },
};

// 블로그 페이지 공통 상단 바 — 홈 링크 + 탭 + 언어 토글
function BlogHeader({ lang, onToggleLang }) {
  const t = NAV_TEXT[lang] || NAV_TEXT.ko;

  return (
    <header className="header blog-header">
      <div className="container">
        <div className="logo-section">
          <Link to="/" className="logo-home-link" aria-label="Souling home">
            <img src={appLogo} alt="Souling" className="logo-image" />
            <h1 className="logo">Souling</h1>
          </Link>
        </div>
        <nav className="nav">
          <Link to="/tests" className="contact-link nav-tests-link">{t.tests}</Link>
          <Link to="/blog" className="contact-link nav-tests-link">{t.blog}</Link>
          <button type="button" className="lang-toggle" onClick={onToggleLang}>
            {t.langToggle}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default BlogHeader;
