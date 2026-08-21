import React from 'react';
import { Link } from 'react-router-dom';
import appLogo from '../../assets/logo.png';
import { UI_TEXT } from '../data/uiText';

// 테스트 페이지 공통 상단 바 — 홈 링크 + 언어 토글
function HtHeader({ lang, onToggleLang }) {
  const t = UI_TEXT[lang];
  return (
    <header className="ht-header">
      <Link to="/" className="ht-header-brand" aria-label="Souling home">
        <img src={appLogo} alt="Souling" className="ht-header-logo" />
        <span className="ht-header-name">Souling</span>
      </Link>
      <button type="button" className="ht-lang-toggle" onClick={onToggleLang}>
        {t.langToggle}
      </button>
    </header>
  );
}

export default HtHeader;
