import React from 'react';
import appstoreBadge from '../../assets/appStore.svg';
import playstoreBadge from '../../assets/playStore.svg';

const APP_STORE_URL =
  'https://apps.apple.com/kr/app/souling-daily-habit-companion/id6747715469';
const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.vivosvoco.souling';

// 홈페이지와 동일한 배지 클릭 추적 (하루 1회/기기)
const kstDateStr = () =>
  new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Seoul' });

const trackBadgeClick = (badge) => {
  try {
    const key = `souling_badge_${badge}_${kstDateStr()}`;
    if (localStorage.getItem(key)) return;
    localStorage.setItem(key, '1');
    fetch(`/.netlify/functions/track?b=${badge}`, { method: 'POST', keepalive: true }).catch(
      () => {}
    );
  } catch (e) {
    // ignore
  }
};

// 결과 화면 하단 고정 CTA.
// 본인: 이미지 저장 / 링크 공유 / 다시 하기 + 앱 다운로드 배지
// 공유 링크 방문자: "나도 해보기" + 앱 다운로드 배지
function BottomCta({ isOwner, t, saving, onSave, onShare, onRetry, onTryMe }) {
  return (
    <div className="ht-cta-bar">
      {isOwner ? (
        <div className="ht-cta-buttons">
          <button
            type="button"
            className="ht-btn ht-btn--primary"
            onClick={onSave}
            disabled={saving}
          >
            {saving ? '…' : t.saveImage}
          </button>
          <button type="button" className="ht-btn ht-btn--secondary" onClick={onShare}>
            {t.shareLink}
          </button>
          <button type="button" className="ht-btn ht-btn--ghost" onClick={onRetry}>
            {t.retry}
          </button>
        </div>
      ) : (
        <button type="button" className="ht-btn ht-btn--hero ht-cta-tryme" onClick={onTryMe}>
          {t.visitorCta}
        </button>
      )}

      <p className="ht-cta-tagline">{t.ctaTagline}</p>
      <div className="ht-cta-badges">
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackBadgeClick('a')}
        >
          <img src={appstoreBadge} alt={t.appStoreAlt} />
        </a>
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackBadgeClick('p')}
        >
          <img src={playstoreBadge} alt={t.playStoreAlt} />
        </a>
      </div>
    </div>
  );
}

export default BottomCta;
