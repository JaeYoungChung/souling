import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useRive } from '@rive-app/react-canvas';
import './App.css';

import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import EULA from './EULA';

// Animations
import Chats from './Chats';
import Stars from './Stars';
import Moons from './Moons';

// Icons
import appLogo from './assets/logo.png';
import sparkIcon from './assets/spark.png';
import bondIcon from './assets/bond.png';
import checkIcon from './assets/check.png';
import instagramIcon from './assets/instagram.png';
import threadsIcon from './assets/threads.png';

// Store badges
import appstoreBadge from './assets/appStore.svg';
import playstoreBadge from './assets/playStore.svg';

// Screenshots (English)
import appScreenshotEng from './assets/screenshot_eng.png';
import routinesEng from './assets/routines_eng.png';
import soultypesEng from './assets/soultypes_eng.png';
import statsEng from './assets/stats_eng.png';

// Screenshots (Korean)
import appScreenshotKr from './assets/screenshot_kr.png';
import routinesKr from './assets/routines_kr.png';
import soultypesKr from './assets/soultypes_kr.png';
import statsKr from './assets/stats_kr.png';


const CONTACT_EMAIL = 'growyoursouling@gmail.com';

// Current date in Korea (KST) as YYYY-MM-DD, matching the server's daily key.
const kstDateStr = () =>
  new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Seoul' });

// Records a store-badge click. Counts at most one click per badge per device
// per KST day (daily-unique), then fires a fire-and-forget request to the
// Netlify function that increments the shared counter.
const trackBadgeClick = (badge) => {
  try {
    const key = `souling_badge_${badge}_${kstDateStr()}`;
    if (localStorage.getItem(key)) return;
    localStorage.setItem(key, '1');
    fetch(`/.netlify/functions/track?b=${badge}`, {
      method: 'POST',
      keepalive: true,
    }).catch(() => {});
  } catch (e) {
    // localStorage unavailable (e.g. private mode) — skip tracking silently.
  }
};

// ─── Localization ───────────────────────────────────────────
const IMAGES = {
  en: { appScreenshot: appScreenshotEng, routines: routinesEng, soultypes: soultypesEng, stats: statsEng },
  ko: { appScreenshot: appScreenshotKr, routines: routinesKr, soultypes: soultypesKr, stats: statsKr },
};

const TRANSLATIONS = {
  en: {
    htmlLang: 'en',
    pageTitle: 'Souling — Life-changing Habits',
    contact: 'Contact',
    heroTitle: 'Souling',
    heroTagline: 'Life-changing Habits',
    heroSubtitle: 'Make ordinary days extraordinary.',
    appStoreAlt: 'Download on the App Store',
    playStoreAlt: 'Get it on Google Play',
    appScreenshotAlt: 'Souling App Screenshot',
    sectionTitle: 'Meet your Souling!',
    routinesTitle: '200+ Routines',
    routinesDesc: 'Souling offers a vast library of daily routines. Collect and grow them into lifelong habits!',
    soultypesTitle: '40+ Soul Types',
    soultypesDesc: 'Souling evolves reflecting your habits. Unlock 300+ customization options along the way!',
    statsTitle: '24 Strengths',
    statsDesc: 'Souling keeps track of your progress. Choose your skills, level up, and climb the global leaderboard!',
    footerConnect: 'Connect with Us',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    eula: 'EULA',
    footerRights: '© 2026 Souling. All rights reserved.',
    langToggle: '한국어',
  },
  ko: {
    htmlLang: 'ko',
    pageTitle: '소울링 — 삶을 변화시키는 습관',
    contact: '문의하기',
    heroTitle: '소울링',
    heroTagline: '삶을 변화시키는 습관',
    heroSubtitle: '건강한 습관을 하나씩 길러보세요!',
    appStoreAlt: 'App Store에서 다운로드',
    playStoreAlt: 'Google Play에서 다운로드',
    appScreenshotAlt: 'Souling 앱 스크린샷',
    sectionTitle: '당신의 소울링을 만나봐요!',
    routinesTitle: '200개 이상의 루틴',
    routinesDesc: '소울링은 방대한 데일리 루틴을 제공합니다. 루틴을 모아 평생 습관으로 키워보세요!',
    soultypesTitle: '40종 이상의 소울 타입',
    soultypesDesc: '소울링은 당신의 습관에 따라 진화해요. 300가지 이상의 커스터마이징 옵션을 잠금 해제하세요!',
    statsTitle: '24가지 능력치',
    statsDesc: '소울링은 진행 상태를 기록해요. 능력치를 선택하고 레벨업하며 글로벌 리더보드에 도전하세요!',
    footerConnect: '환영해요!',
    privacyPolicy: '개인정보 처리방침',
    termsOfService: '이용약관',
    eula: 'EULA',
    footerRights: '© 2026 Souling. All rights reserved.',
    langToggle: 'English',
  },
};

// Wrap digit runs so numbers always render in Baloo 2 (even in Korean/Jua text)
function nums(text) {
  return String(text)
    .split(/(\d+)/)
    .map((part, i) => (/^\d+$/.test(part) ? <span key={i} className="num">{part}</span> : part));
}

function detectLang() {
  try {
    const saved = localStorage.getItem('souling_lang');
    if (saved === 'en' || saved === 'ko') return saved;
  } catch (e) {
    // localStorage unavailable (e.g. private mode) — fall back to browser language
  }
  const browserLang = navigator.language || (navigator.languages && navigator.languages[0]) || 'en';
  return browserLang.toLowerCase().startsWith('ko') ? 'ko' : 'en';
}

const EMOTES = ['emoteWave', 'emoteHappy'];

const DURATIONS = {
  idle: 4000,
  emoteWave: 2667,
  emoteHappy: 1667,
};

const SM = 'StateMachine:Souling';


function SoulingRive() {
  const { RiveComponent, rive } = useRive({
    src: '/souling.riv',
    artboard: 'Souling',
    stateMachines: SM,
    autoplay: true,
  });

  const isRunning = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!rive || isRunning.current) return;

    const tryStart = setInterval(() => {
      const inputs = rive.stateMachineInputs(SM);
      if (!inputs || inputs.length === 0) return;

      clearInterval(tryStart);
      isRunning.current = true;

      const fire = (name) => {
        const input = inputs.find((i) => i.name === name);
        input?.fire();
      };

      const loop = () => {
        const emote = EMOTES[Math.floor(Math.random() * EMOTES.length)];
        fire(emote);
        timeoutRef.current = setTimeout(loop, DURATIONS[emote] + DURATIONS.idle);
      };

      loop();
    }, 100);

    return () => {
      clearInterval(tryStart);
      isRunning.current = false;
      clearTimeout(timeoutRef.current);
    };
  }, [rive]);

  return (
    <div className="rive-container">
      <RiveComponent />
    </div>
  );
}


function HomePage() {
  const [showHeader, setShowHeader] = useState(true);
  const [lang, setLang] = useState(detectLang);

  const t = TRANSLATIONS[lang];
  const img = IMAGES[lang];

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY < window.innerHeight * 0.05);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
    document.title = t.pageTitle;
    try {
      localStorage.setItem('souling_lang', lang);
    } catch (e) {
      // ignore persistence failures
    }
  }, [lang, t.htmlLang, t.pageTitle]);

  const toggleLang = () => setLang((prev) => (prev === 'ko' ? 'en' : 'ko'));

  return (
    <>
      {/* Header */}
      <header
        className="header"
        style={{ transform: showHeader ? 'translateY(0)' : 'translateY(-100%)' }}
      >
        <div className="container">
          <div className="logo-section">
            <img src={appLogo} alt="Souling" className="logo-image" />
            <h1 className="logo">{t.heroTitle}</h1>
          </div>
          <nav className="nav">
            <button type="button" className="lang-toggle" onClick={toggleLang}>
              {t.langToggle}
            </button>
            <a href={`mailto:${CONTACT_EMAIL}`} className="contact-link">{t.contact}</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">{t.heroTitle}</h1>
              <p className="tagline">{t.heroTagline}</p>
              <p className="subtitle">{t.heroSubtitle}</p>
              <div className="cta-buttons">
                <a
                  href="https://apps.apple.com/kr/app/souling-daily-habit-companion/id6747715469"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-badge-link"
                  onClick={() => trackBadgeClick('a')}
                >
                  <img src={appstoreBadge} alt={t.appStoreAlt} className="store-badge" />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.vivosvoco.souling"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-badge-link"
                  onClick={() => trackBadgeClick('p')}
                >
                  <img src={playstoreBadge} alt={t.playStoreAlt} className="store-badge" />
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="cosmic-container">
                <div className="app-image-wrapper">
                  <Chats lang={lang} />
                  <img src={sparkIcon} alt="" className="floating-icon icon-spark" />
                  <img src={bondIcon} alt="" className="floating-icon icon-bond" />
                  <img src={checkIcon} alt="" className="floating-icon icon-check" />
                  <div className="app-image-placeholder">
                    <img src={img.appScreenshot} alt={t.appScreenshotAlt} className="app-screenshot" />
                    <div className="rive-overlay">
                      <SoulingRive />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">{t.sectionTitle}</h2>
          <div className="features-grid">
            <div className="feature-card feature-card--routines">
              <div className="feature-icon">
                <img src={img.routines} alt={t.routinesTitle} className="feature-icon-img" />
              </div>
              <h3 className="feature-title">{nums(t.routinesTitle)}</h3>
              <p className="feature-description">{nums(t.routinesDesc)}</p>
            </div>
            <div className="feature-card feature-card--soultypes">
              <div className="feature-icon">
                <img src={img.soultypes} alt={t.soultypesTitle} className="feature-icon-img" />
              </div>
              <h3 className="feature-title">{nums(t.soultypesTitle)}</h3>
              <p className="feature-description">{nums(t.soultypesDesc)}</p>
            </div>
            <div className="feature-card feature-card--stats">
              <div className="feature-icon">
                <img src={img.stats} alt={t.statsTitle} className="feature-icon-img" />
              </div>
              <h3 className="feature-title">{nums(t.statsTitle)}</h3>
              <p className="feature-description">{nums(t.statsDesc)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>{t.footerConnect}</h3>
              <a href={`mailto:${CONTACT_EMAIL}`} className="footer-email">{CONTACT_EMAIL}</a>
            </div>
            <div className="footer-social">
              <a href="https://www.instagram.com/souling.app/" className="footer-social-link" aria-label="Instagram">
                <img src={instagramIcon} alt="Instagram" className="footer-social-icon" />
              </a>
              <a href="https://www.threads.net/@souling.app" className="footer-social-link" aria-label="Threads">
                <img src={threadsIcon} alt="Threads" className="footer-social-icon" />
              </a>
            </div>
          </div>
          <div className="footer-links">
            <Link to="/privacy-policy">{t.privacyPolicy}</Link>
            <Link to="/terms-of-service">{t.termsOfService}</Link>
            <Link to="/eula">{t.eula}</Link>
          </div>
          <div className="footer-bottom">
            <p>{nums(t.footerRights)}</p>
          </div>
        </div>
      </footer>
    </>
  );
}


function App() {
  return (
    <Router>
      <Moons />
      <Stars />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/termsofservice" element={<TermsOfService />} />
          <Route path="/eula" element={<EULA />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;