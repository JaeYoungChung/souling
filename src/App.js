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

// Screenshots
import appScreenshot from './assets/screenshot.png';
import routines from './assets/routines.png';
import soultypes from './assets/soultypes.png';
import stats from './assets/stats.png';


const CONTACT_EMAIL = 'growyoursouling@gmail.com';

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

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY < window.innerHeight * 0.05);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            <h1 className="logo">Souling</h1>
          </div>
          <nav className="nav">
            <a href={`mailto:${CONTACT_EMAIL}`} className="contact-link">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Souling</h1>
              <p className="tagline">Meet Your New Habit Trainer</p>
              <p className="subtitle">Ordinary Days, Extraordinary Lives</p>
              <div className="cta-buttons">
                <a
                  href="https://apps.apple.com/kr/app/souling-daily-habit-companion/id6747715469"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-badge-link"
                >
                  <img src={appstoreBadge} alt="Download on the App Store" className="store-badge" />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.vivosvoco.souling"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-badge-link"
                >
                  <img src={playstoreBadge} alt="Get it on Google Play" className="store-badge" />
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="cosmic-container">
                <div className="app-image-wrapper">
                  <Chats />
                  <img src={sparkIcon} alt="" className="floating-icon icon-spark" />
                  <img src={bondIcon} alt="" className="floating-icon icon-bond" />
                  <img src={checkIcon} alt="" className="floating-icon icon-check" />
                  <div className="app-image-placeholder">
                    <img src={appScreenshot} alt="Souling App Screenshot" className="app-screenshot" />
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
          <h2 className="section-title">Join the Soulverse</h2>
          <div className="features-grid">
            <div className="feature-card feature-card--routines">
              <div className="feature-icon">
                <img src={routines} alt="Routines" className="feature-icon-img" />
              </div>
              <h3 className="feature-title">200+ Routines</h3>
              <p className="feature-description">
                Souling offers a vast library of daily routines. Collect and grow them into lifelong habits!
              </p>
            </div>
            <div className="feature-card feature-card--soultypes">
              <div className="feature-icon">
                <img src={soultypes} alt="Soul Types" className="feature-icon-img" />
              </div>
              <h3 className="feature-title">40+ Soul Types</h3>
              <p className="feature-description">
                Souling evolves reflecting your habits. Unlock 300+ customization options along the way!
              </p>
            </div>
            <div className="feature-card feature-card--stats">
              <div className="feature-icon">
                <img src={stats} alt="Stats and Ranks" className="feature-icon-img" />
              </div>
              <h3 className="feature-title">24 Virtues</h3>
              <p className="feature-description">
                Souling tracks all your activities. Choose your skills, level up, and climb the global leaderboard!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Connect with Us</h3>
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
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/eula">EULA</Link>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Souling. All rights reserved.</p>
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