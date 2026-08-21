import React, { forwardRef } from 'react';
import appLogo from '../../assets/logo.png';
import { UI_TEXT } from '../data/uiText';
import { txt } from '../logic/lang';

// 인스타그램 스토리 규격(9:16, 1080×1920) 공유 전용 카드.
// 화면 밖(-10000px)에 항상 렌더해두고, 저장 버튼을 누르면 이 노드를
// html-to-image로 캡처한다. (화면 캡처가 아니라 전용 레이아웃)
const ShareCard = forwardRef(function ShareCard({ type, lang }, ref) {
  const t = UI_TEXT[lang];
  const name = txt(type.name, lang);
  const heroName = txt(type.heroName, lang);
  const hook = txt(type.hook, lang);
  const strengths = type.strengths.filter((s) => txt(s.title, lang));
  const caution = txt(type.caution, lang);
  const tagline =
    lang === 'ko'
      ? 'Souling에서 나의 영웅력을 길러봐요'
      : 'Grow your hero power with Souling';

  return (
    <div className="ht-share-card-stage" aria-hidden="true">
      {/* 영어는 문장이 길어 줄 수가 늘어나므로 --en에서 크기를 한 단계 줄인다 */}
      <div
        ref={ref}
        className={`ht-share-card${lang === 'en' ? ' ht-share-card--en' : ''}`}
      >
        <div className="ht-share-card-inner">
          <p className="ht-share-card-label">
            {lang === 'ko' ? '나의 영웅 유형' : 'My hero type'}
          </p>

          <div className="ht-share-card-image">
            {type.image ? (
              <img src={type.image} alt="" crossOrigin="anonymous" />
            ) : (
              <div className="ht-share-card-image-placeholder">
                <span>{heroName ? heroName.charAt(0) : '?'}</span>
              </div>
            )}
          </div>

          <h1 className="ht-share-card-name">{heroName || name}</h1>
          {heroName && <p className="ht-share-card-hero">{name}</p>}
          {hook && <p className="ht-share-card-hook">“{hook}”</p>}

          {strengths.length > 0 && (
            <div className="ht-share-card-section">
              <p className="ht-share-card-section-title">{t.strengthsLabel}</p>
              {strengths.map((s, i) => (
                <p key={i} className="ht-share-card-strength">
                  <strong>{txt(s.title, lang)}</strong>
                  {txt(s.body, lang) && <> · {txt(s.body, lang)}</>}
                </p>
              ))}
            </div>
          )}

          {caution && (
            <div className="ht-share-card-section ht-share-card-section--caution">
              <p className="ht-share-card-section-title">{t.cautionLabel}</p>
              <p className="ht-share-card-caution-text">{caution}</p>
            </div>
          )}

          <div className="ht-share-card-footer">
            <img src={appLogo} alt="" className="ht-share-card-logo" />
            <span className="ht-share-card-tagline">{tagline}</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ShareCard;
