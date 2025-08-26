import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import EULA from './EULA';

// Import assets
import instagramIcon from './assets/icon_instagram.png';
import facebookIcon from './assets/icon_facebook.png';
import xIcon from './assets/icon_x.png';
import threadsIcon from './assets/icon_threads.png';
import appStoreIcon from './assets/icon_appstore.png';
import playStoreIcon from './assets/icon_playstore.png';
import soulingLogo from './assets/logo.png';
import appScreenshot from './assets/screenshot_app.png';
import soulingIcon from './assets/souling.png';
import einsteinIcon from './assets/einstein.png';
import wisdomPlanetIcon from './assets/wisdom_planet.png';

function HomePage() {
  return (
    <>
      {/* Header Section */}
      <header className="header">
        <div className="container">
          <div className="logo-section">
            <img src={soulingLogo} alt="Souling" className="logo-image" />
            <h1 className="logo">Souling</h1>
          </div>
          <nav className="nav">
            <a href="mailto:support@souling.com" className="contact-link">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="stars"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-logo">Souling</h1>
              <p className="tagline">Grow your Souling, one habit at a time</p>
              <p className="subtitle">Journey through the Soulverse with wisdom from history's greatest minds</p>
              <div className="cta-buttons">
                <button className="cta-primary">
                  <img src={appStoreIcon} alt="App Store" className="store-icon" />
                  Download on App Store
                </button>
                <button className="cta-secondary">
                  <img src={playStoreIcon} alt="Play Store" className="store-icon" />
                  Get it on Google Play
                </button>
              </div>
              <div className="coming-soon-badge">
                Coming Soon
              </div>
            </div>
            <div className="hero-visual">
              <div className="cosmic-container">
                <div className="floating-planets">
                  <div className="planet planet-1"></div>
                  <div className="planet planet-2"></div>
                  <div className="planet planet-3"></div>
                </div>
                {/* App Screenshot */}
                <div className="app-image-placeholder">
                  <img src={appScreenshot} alt="Souling App Screenshot" className="app-screenshot" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Explore the Soulverse</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <img src={soulingIcon} alt="Souling" className="feature-icon-img" />
              </div>
              <h3 className="feature-title">Tend to Your Souling</h3>
              <p className="feature-description">
              Your inner self isn’t fixed—it’s growing. Care for it like a tiny spirit. Your journey shapes your Souling—and your Souling shapes your world.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src={einsteinIcon} alt="Einstein" className="feature-icon-img" />
              </div>
              <h3 className="feature-title">Meet Your Mentors</h3>
              <p className="feature-description">
              Einstein sat with big questions. Lincoln stood firm through stormy times. Across space and time, great minds become your mentors, bringing bold insights and timeless courage as you grow.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src={wisdomPlanetIcon} alt="Wisdom Planet" className="feature-icon-img" />
              </div>
              <h3 className="feature-title">Explore Virtue Planets</h3>
              <p className="feature-description">
              Wander the Planet of Wonder. Rest on the rings of Balance. Face the winds of Courage. Every realm holds new routines, dreamlike lessons, and hidden reflections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2 className="section-title">Connect with Us</h2>
          <div className="contact-content">
            <div className="contact-info">
              <p>Questions about your journey through the Soulverse?</p>
              <a href="mailto:support@souling.com" className="email-link">
                support@souling.com
              </a>
            </div>
            <div className="social-links">
              <a href="https://instagram.com/soulingapp" className="social-link" aria-label="Instagram">
                <img src={instagramIcon} alt="Instagram" className="social-icon-img" />
              </a>
              <a href="https://facebook.com/soulingapp" className="social-link" aria-label="Facebook">
                <img src={facebookIcon} alt="Facebook" className="social-icon-img" />
              </a>
              <a href="https://x.com/soulingapp" className="social-link" aria-label="X (Twitter)">
                <img src={xIcon} alt="X" className="social-icon-img" />
              </a>
              <a href="https://threads.net/@soulingapp" className="social-link" aria-label="Threads">
                <img src={threadsIcon} alt="Threads" className="social-icon-img" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Souling</h3>
              <p>Grow your Souling, one habit at a time</p>
            </div>
            <div className="footer-links">
              <h4>Legal</h4>
              <ul>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service">Terms of Service</Link></li>
                <li><Link to="/eula">EULA</Link></li>
              </ul>
            </div>
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
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/eula" element={<EULA />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
