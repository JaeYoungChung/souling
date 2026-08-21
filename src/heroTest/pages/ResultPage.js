import React, { useEffect, useRef, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import HtHeader from '../components/HtHeader';
import BottomCta from '../components/BottomCta';
import ShareCard from '../components/ShareCard';
import RiveFigure from '../components/RiveFigure';
import { UI_TEXT } from '../data/uiText';
import { getHeroType } from '../data/heroTypes';
import { useLang, txt, txtList } from '../logic/lang';
import { loadState, resetState } from '../logic/storage';
import { saveShareImage, shareLink } from '../shareImage';

// 결과 화면 — 본인과 공유 링크 방문자가 같은 화면을 본다.
// 방문자도 유형 설명 전체를 읽을 수 있고, CTA만 "나도 해보기"로 바뀐다.
function ResultPage() {
  const { typeId } = useParams();
  const [lang, toggleLang] = useLang();
  const t = UI_TEXT[lang];
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState('');
  const toastTimer = useRef(null);

  const type = getHeroType(typeId);

  const saved = loadState();
  const isOwner = !!type && !!saved && saved.resultTypeId === type.id;

  useEffect(() => {
    if (!type) return;
    const name = txt(type.name, lang);
    const heroName = txt(type.heroName, lang);
    document.title = `${heroName ? `${heroName} — ` : ''}${name} | ${t.pageTitle}`;
    window.scrollTo(0, 0);
  }, [type, lang, t.pageTitle]);

  useEffect(() => () => clearTimeout(toastTimer.current), []);

  // 존재하지 않는 유형 주소 → 시작 화면으로
  if (!type) {
    return <Navigate to="/hero-test" replace />;
  }

  const showToast = (message) => {
    setToast(message);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(''), 2200);
  };

  const name = txt(type.name, lang);
  const heroName = txt(type.heroName, lang);
  const hook = txt(type.hook, lang);
  const paragraphs = txtList(type.description, lang);
  const strengths = type.strengths.filter(
    (s) => txt(s.title, lang) || txt(s.body, lang)
  );
  const caution = txt(type.caution, lang);
  const habits = type.habits.filter((h) => h.image || txt(h.title, lang));

  const resultUrl = `${window.location.origin}/hero-test/result/${type.id}`;

  const handleSaveImage = async () => {
    if (saving || !cardRef.current) return;
    setSaving(true);
    try {
      const outcome = await saveShareImage(
        cardRef.current,
        `souling-hero-${type.id}.png`
      );
      if (outcome === 'downloaded') showToast(t.saved);
    } catch (e) {
      showToast(t.saveFailed);
    } finally {
      setSaving(false);
    }
  };

  const handleShareLink = async () => {
    // 최종 메시지: 링크 → CTA → "나는 ○○ 나옴"
    const myResult = lang === 'ko' ? `나는 ${heroName} 나옴` : `I got ${heroName}`;
    const outcome = await shareLink({
      text: `${t.shareText}\n${myResult}`,
      url: resultUrl,
    });
    if (outcome === 'copied') showToast(t.copied);
  };

  const handleRetry = () => {
    resetState();
    navigate('/hero-test');
  };

  // 방문자의 진행 중 답변은 지우지 않는다 — 시작 화면에서 이어하기 가능
  const handleTryMe = () => {
    navigate('/hero-test');
  };

  return (
    <div className="ht-page ht-result">
      <HtHeader lang={lang} onToggleLang={toggleLang} />

      {!isOwner && (
        <div className="ht-visitor-banner">
          <span>{t.visitorBanner}</span>
        </div>
      )}

      <main className="ht-result-main">
        {/* 1. 유형 대표 이미지 */}
        <div className="ht-result-image">
          {type.image ? (
            <img src={type.image} alt={name} />
          ) : (
            <div className="ht-result-image-placeholder">
              <span>{heroName.charAt(0) || '?'}</span>
            </div>
          )}
        </div>

        {/* 2. 영웅 이름(크게) + 유형명(작게) — "나는 어떤 영웅인가"가 핵심 */}
        <p className="ht-result-label">{t.resultLabel}</p>
        <h1 className="ht-result-name">{heroName || name}</h1>
        {heroName && <p className="ht-result-hero">{name}</p>}

        {/* 3. 한 줄 훅 — 가장 크고 눈에 띄게 (캡처 포인트) */}
        {hook && <p className="ht-result-hook">“{hook}”</p>}

        {/* 4. 당신은 이런 사람 */}
        {paragraphs.length > 0 && (
          <section className="ht-section">
            <h2 className="ht-section-title">{t.aboutYou}</h2>
            {paragraphs.map((p, i) => (
              <p key={i} className="ht-section-paragraph">
                {p}
              </p>
            ))}
          </section>
        )}

        {/* 5. 강점 3개 */}
        {strengths.length > 0 && (
          <section className="ht-section">
            <h2 className="ht-section-title">{t.strengthsLabel}</h2>
            <ul className="ht-strength-list">
              {strengths.map((s, i) => (
                <li key={i} className="ht-strength-item">
                  <h3>{txt(s.title, lang)}</h3>
                  {txt(s.body, lang) && <p>{txt(s.body, lang)}</p>}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 6. 이런 순간엔 조심 */}
        {caution && (
          <section className="ht-section ht-section--caution">
            <h2 className="ht-section-title">{t.cautionLabel}</h2>
            <p className="ht-section-paragraph">{caution}</p>
          </section>
        )}

        {/* 7. 이 유형의 또 다른 인물 (rive) */}
        {type.riveFigure.src && (
          <section className="ht-section">
            <h2 className="ht-section-title">{t.anotherFigure}</h2>
            <RiveFigure
              src={type.riveFigure.src}
              artboard={type.riveFigure.artboard}
              stateMachine={type.riveFigure.stateMachine}
            />
            {txt(type.riveFigure.name, lang) && (
              <p className="ht-rive-name">{txt(type.riveFigure.name, lang)}</p>
            )}
          </section>
        )}

        {/* 8. 영웅력을 키우는 습관 3개 (이미지) */}
        {habits.length > 0 && (
          <section className="ht-section">
            <h2 className="ht-section-title">{t.habitsLabel}</h2>
            <div className="ht-habit-list">
              {habits.map((h, i) => (
                <figure key={i} className="ht-habit-item">
                  {h.image && <img src={h.image} alt={txt(h.title, lang)} />}
                  <figcaption>
                    {txt(h.title, lang) && (
                      <span className="ht-habit-title">{txt(h.title, lang)}</span>
                    )}
                    {txt(h.desc, lang) && (
                      <span className="ht-habit-desc">{txt(h.desc, lang)}</span>
                    )}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* 9. 하단 고정 CTA */}
      <BottomCta
        isOwner={isOwner}
        t={t}
        saving={saving}
        onSave={handleSaveImage}
        onShare={handleShareLink}
        onRetry={handleRetry}
        onTryMe={handleTryMe}
      />

      {/* 공유 전용 9:16 카드 — 화면 밖에 렌더, 저장 시 캡처 */}
      {isOwner && <ShareCard ref={cardRef} type={type} lang={lang} />}

      {toast && <div className="ht-toast">{toast}</div>}
    </div>
  );
}

export default ResultPage;
