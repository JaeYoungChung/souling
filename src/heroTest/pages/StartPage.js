import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HtHeader from '../components/HtHeader';
import { UI_TEXT } from '../data/uiText';
import { HERO_TYPES } from '../data/heroTypes';
import { QUESTION_COUNT } from '../data/questions';
import { useLang, txt } from '../logic/lang';
import { loadState, resetState, firstUnanswered, answeredCount } from '../logic/storage';

function StartPage() {
  const [lang, toggleLang] = useLang();
  const t = UI_TEXT[lang];
  const navigate = useNavigate();

  const saved = loadState();
  const progressCount = saved && !saved.resultTypeId ? answeredCount(saved.answers) : 0;
  const hasProgress = progressCount > 0;

  useEffect(() => {
    document.title = t.pageTitle;
    document.documentElement.lang = t.htmlLang;
  }, [t.pageTitle, t.htmlLang]);

  const startFresh = () => {
    resetState();
    navigate('/hero-test/quiz?q=1');
  };

  const continueTest = () => {
    const next = Math.min(firstUnanswered(saved.answers) + 1, QUESTION_COUNT);
    navigate(`/hero-test/quiz?q=${next}`);
  };

  return (
    <div className="ht-page ht-start">
      <HtHeader lang={lang} onToggleLang={toggleLang} />

      <main className="ht-start-main">
        <p className="ht-start-eyebrow">Souling</p>
        <span className="ht-odyssey-badge">{t.odysseyBadge}</span>
        <h1 className="ht-start-title">{t.testTitle}</h1>
        <p className="ht-start-intro">
          {t.testIntro.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <p className="ht-start-meta">{t.testMeta}</p>

        {/* 16개 유형을 흐릿하게 나열해 궁금증 유발 */}
        <div className="ht-type-teaser" aria-hidden="true">
          <div className="ht-type-teaser-grid">
            {HERO_TYPES.map((type, i) => (
              <div key={type.id} className="ht-type-teaser-tile" style={{ '--tile-index': i }}>
                {type.image ? (
                  <img src={type.image} alt="" loading="lazy" />
                ) : (
                  <span className="ht-type-teaser-initial">
                    {txt(type.heroName, lang).charAt(0) || '?'}
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="ht-type-teaser-veil">
            <span>?</span>
          </div>
        </div>
        <p className="ht-start-hint">{t.typesHint}</p>

        <div className="ht-start-actions">
          {hasProgress ? (
            <>
              <button type="button" className="ht-btn ht-btn--hero" onClick={continueTest}>
                {t.continueTest} ({progressCount} / {QUESTION_COUNT})
              </button>
              <button type="button" className="ht-btn ht-btn--ghost" onClick={startFresh}>
                {t.restart}
              </button>
            </>
          ) : (
            <button type="button" className="ht-btn ht-btn--hero" onClick={startFresh}>
              {t.start}
            </button>
          )}
        </div>
      </main>
    </div>
  );
}

export default StartPage;
