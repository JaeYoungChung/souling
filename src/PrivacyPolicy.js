import React from 'react';
import { Link } from 'react-router-dom';
import './LegalPages.css';

function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <header className="legal-header">
        <div className="container">
          <div className="legal-nav">
            <Link to="/" className="back-link">← Back to Home</Link>
            <h1 className="legal-logo">Souling</h1>
          </div>
        </div>
      </header>

      <main className="legal-content">
        <div className="container">
          <div className="legal-document">
            <h1 className="legal-title">Privacy Policy</h1>
            <div className="legal-text">
              <p><em>Last updated: June 9, 2025</em></p>
              
              <p>Vivos Voco Inc. ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect your information when you use the Souling mobile application (the "App").</p>
              
              <p>By using the App, you agree to this Privacy Policy. If you do not agree, please do not use the App.</p>
              
              <div className="legal-section">
                <h2>Information We Collect</h2>
                <p>We collect the following categories of personal information:</p>
                
                <p><strong>a. Personal Information You Provide</strong></p>
                <p>• Name
                  • Email address
                  • Age
                  • Gender</p>

                <p><strong>b. Other Information You Provide</strong></p>
                <p>• Questionnaire answers • Journal entries</p>
                <p><strong>c. Device and Usage Information</strong></p>

                <p>• Device type and model • Operating system and version • App usage patterns (via Google Analytics / Firebase Analytics)</p>

                <p><strong>Note:</strong> We do not collect unique device identifiers or location data.</p>
              </div>

              <div className="legal-section">
                <h2>How We Use Your Information</h2>
                <p>We use your personal data for the following purposes:</p>
                <p> • To provide, operate, and maintain the App
                    • To personalize and improve your experience
                    • To analyze usage and performance through Google Analytics / Firebase Analytics
                    • To communicate with you regarding your account and support inquiries
                    • To comply with legal obligations
                </p>
              </div>

              <div className="legal-section">
                <h2>Legal Basis for Processing (for EU Users)</h2>
                <p>We process your personal data based on the following legal bases:</p>
                <p>• <strong>Contractual necessity</strong> — to provide you with the App and its core features
                   • <strong>Legitimate interests</strong> — to analyze usage and improve the App (e.g., using Google Analytics / Firebase Analytics)
                   • <strong>Consent</strong> — where required for optional features or communications
                </p>
              </div>

              <div className="legal-section">
                <h2>Sharing Your Information</h2>
                <p>We do not sell your personal information.</p>
                <p>We share information with trusted third-party service providers only as needed to operate the App:</p>
                
                <div style={{background: 'rgba(87, 185, 255, 0.05)', padding: '1rem', borderRadius: '8px', marginTop: '1rem'}}>
                  <p><strong>Purpose → Third-party Service</strong></p>
                  <p>Analytics → Google Analytics / Firebase Analytics</p>
                  <p>Push Notifications → None (local notifications only)</p>
                  <p>Advertising → None</p>
                  <p>Social Sharing → None</p>
                  <p>Payments → None</p>
                </div>
                
                <p>We may also share data when required to comply with the law or protect our rights.</p>
              </div>

              <div className="legal-section">
                <h2>Data Transfers (for EU/EEA Users)</h2>
                <p>Some of our service providers (e.g. Google/Firebase) may process your data outside of your country of residence, including in the United States.</p>
                <p>When we transfer data internationally, we ensure appropriate safeguards are in place, such as standard contractual clauses approved by the European Commission.</p>
              </div>

              <div className="legal-section">
                <h2>Data Retention</h2>
                <p>We retain your personal information as long as necessary to provide the App and for legitimate business purposes.</p>
                <p>You can delete your account and all personal data at any time via the <strong>Delete Account</strong> button in the App's account center. Upon deletion, all personal data and content (including questionnaire answers and journal entries) will be permanently deleted.</p>
              </div>

              <div className="legal-section">
                <h2>Your Rights</h2>
                <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                
                <p><strong>Under GDPR (EU/EEA):</strong></p>
                <p>• Right to access
                   • Right to rectification
                   • Right to erasure ("right to be forgotten")
                   • Right to restrict processing
                   • Right to data portability
                   • Right to object to processing
                   • Right to withdraw consent at any time
                </p>

                <p><strong>Under CCPA/CPRA (California, USA):</strong></p>
                <p>• Right to know what personal information we collect and how we use it
                   • Right to request deletion of personal information
                   • Right to opt out of the sale or sharing of personal information (we do not sell your data)
                   • Right to non-discrimination for exercising your privacy rights</p>

                <p><strong>How to Exercise Your Rights:</strong></p>
                <p>To exercise your rights, please contact us at <a href="mailto:support@souling.com">support@souling.com</a>. We will respond within 30 days (GDPR requirement) or as required by applicable law.</p>
              </div>

              <div className="legal-section">
                <h2>Children's Privacy</h2>
                <p>Souling is intended for users aged 13 and older. We do not knowingly collect personal information from children under 13. If we learn that we have collected data from a child under 13, we will delete it promptly.</p>
              </div>

              <div className="legal-section">
                <h2>Data Security</h2>
                <p>We implement appropriate technical and organizational measures to protect your information from unauthorized access, loss, misuse, or alteration.</p>
                <p>Please note that no system can be guaranteed 100% secure.</p>
              </div>

              <div className="legal-section">
                <h2>Use of Analytics and Cookies</h2>
                <p>The App uses Google Analytics / Firebase Analytics, which may collect identifiers similar to cookies and track App usage patterns.</p>
                <p>You can opt out of Google Analytics by adjusting your device settings or using Google's privacy tools: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a></p>
              </div>

              <div className="legal-section">
                <h2>Changes to This Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the "Effective Date" or through other appropriate means.</p>
                <p>Your continued use of the App after changes have been posted constitutes your acceptance of the revised Privacy Policy.</p>
              </div>

              <div className="legal-section">
                <h2>Contact Us</h2>
                <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
                <p>Email: <a href="mailto:support@souling.com">support@souling.com</a></p>
              </div>

              <div className="legal-section">
                <h2>Summary of Key Points for Transparency</h2>
                <p>• We do not collect location data or sell your personal data
• We only use Google/Firebase Analytics to improve your experience
• You can delete your account and all your data at any time
• We respect your rights under GDPR, CCPA/CPRA, and other applicable privacy laws</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="legal-footer">
        <div className="container">
          <p>© 2025 Souling. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;