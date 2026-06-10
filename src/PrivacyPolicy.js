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
          </div>
        </div>
      </header>
 
      <main className="legal-content">
        <div className="container">
          <div className="legal-document">
            <h1 className="legal-title">Privacy Policy</h1>
            <div className="legal-text">
              <p><em>Last updated: June 10, 2026</em></p>
 
              <p>Vivos Voco Inc. ("we," "our," or "us"), a company incorporated in the Republic of Korea, respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect your information when you use the Souling mobile application (the "App").</p>
 
              <p>This Privacy Policy describes our practices. Where required by law, we rely on the legal bases described below to process your personal data. If you do not agree with these practices, please do not use the App.</p>
 
              <div className="legal-section">
                <h2>Information We Collect</h2>
                <p>We collect the following categories of personal information:</p>
 
                <p><strong>a. Personal Information You Provide</strong></p>
                <ul>
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Age</li>
                  <li>Gender</li>
                </ul>
 
                <p><strong>b. Other Information You Provide</strong></p>
                <ul>
                  <li>Questionnaire answers</li>
                </ul>
 
                <p><strong>c. Purchase Information</strong></p>
                <ul>
                  <li>Records of in-app purchases you make (such as the items purchased and the date of purchase)</li>
                </ul>
                <p><strong>Note:</strong> In-app purchases of virtual currency and items are processed by the Apple App Store or Google Play. We do not receive or store your payment card number or other payment-card details. Those are handled directly by Apple or Google under their own privacy policies.</p>
 
                <p><strong>d. Device and Usage Information</strong></p>
                <ul>
                  <li>Device type and model</li>
                  <li>Operating system and version</li>
                  <li>App usage patterns, collected via Google Analytics / Firebase Analytics</li>
                </ul>
                <p><strong>Note on identifiers:</strong> Our analytics provider (Google / Firebase Analytics) assigns a pseudonymous app-instance identifier and may collect similar analytics identifiers in order to measure App usage. We do not use persistent advertising identifiers to track you across other apps or services, and we do not collect precise location data.</p>
              </div>
 
              <div className="legal-section">
                <h2>Sensitive Information</h2>
                <p>Some information you choose to provide — such as questionnaire answers — may reveal sensitive details about you (for example, about your thoughts, feelings, or wellbeing). Where this constitutes "special category" data under the GDPR or "sensitive personal information" under California law, we process it only to provide the App's self-reflection features to you, and, where required by law, on the basis of your explicit consent. You can withdraw this consent at any time by deleting the relevant content or your account.</p>
              </div>
 
              <div className="legal-section">
                <h2>How We Use Your Information</h2>
                <p>We use your personal data to:</p>
                <ul>
                  <li>Provide, operate, and maintain the App</li>
                  <li>Personalize and improve your experience</li>
                  <li>Process and deliver in-app purchases</li>
                  <li>Analyze usage and performance through Google Analytics / Firebase Analytics</li>
                  <li>Communicate with you regarding your account and support inquiries</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
 
              <div className="legal-section">
                <h2>Legal Basis for Processing (for EU/EEA Users)</h2>
                <p>We process your personal data based on the following legal bases:</p>
                <ul>
                  <li><strong>Contractual necessity</strong> — to provide you with the App, its core features, and any in-app purchases</li>
                  <li><strong>Legitimate interests</strong> — to analyze usage and improve the App</li>
                  <li><strong>Consent</strong> — for optional features, communications, and the processing of any sensitive information; and, for minors, the consent of a parent or legal guardian where required (see "Children's Privacy")</li>
                </ul>
              </div>
 
              <div className="legal-section">
                <h2>Sharing Your Information</h2>
                <p>We do not sell or "share" (as defined under California law) your personal information for cross-context behavioral advertising.</p>
                <p>We share information with trusted third-party service providers only as needed to operate the App:</p>
 
                <div style={{ background: 'rgba(87, 185, 255, 0.05)', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr>
                        <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid rgba(87, 185, 255, 0.3)' }}>Purpose</th>
                        <th style={{ textAlign: 'left', padding: '0.5rem', borderBottom: '1px solid rgba(87, 185, 255, 0.3)' }}>Third-party Service</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ padding: '0.5rem' }}>Analytics</td>
                        <td style={{ padding: '0.5rem' }}>Google Analytics / Firebase Analytics</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '0.5rem' }}>Payments / In-app purchases</td>
                        <td style={{ padding: '0.5rem' }}>Apple App Store / Google Play</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '0.5rem' }}>Cloud storage and backup</td>
                        <td style={{ padding: '0.5rem' }}>Cloud hosting provider(s)</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '0.5rem' }}>Push notifications</td>
                        <td style={{ padding: '0.5rem' }}>None (local notifications only)</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '0.5rem' }}>Advertising</td>
                        <td style={{ padding: '0.5rem' }}>None</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '0.5rem' }}>Social sharing</td>
                        <td style={{ padding: '0.5rem' }}>None</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
 
                <p style={{ marginTop: '1rem' }}>We may also share data when required to comply with the law or to protect our rights.</p>
              </div>
 
              <div className="legal-section">
                <h2>Data Transfers (for EU/EEA Users)</h2>
                <p>Some of our service providers (e.g. Google / Firebase, Apple) may process your data outside your country of residence, including in the United States and the Republic of Korea. When we transfer data internationally, we ensure appropriate safeguards are in place, such as standard contractual clauses approved by the European Commission.</p>
              </div>
 
              <div className="legal-section">
                <h2>Data Retention</h2>
                <p>We retain your personal information for as long as your account is active and as needed to provide the App, and thereafter only as required for legitimate business or legal purposes. You can delete your account and all associated personal data at any time via the <strong>Delete Account</strong> button in the App's account center. Upon deletion, your personal data and content will be permanently deleted, except where we are legally required to retain certain records (for example, transaction records for tax or accounting purposes).</p>
              </div>
 
              <div className="legal-section">
                <h2>Your Rights</h2>
                <p>Depending on your location, you may have the following rights regarding your personal information.</p>
 
                <p><strong>Under the GDPR (EU/EEA):</strong></p>
                <ul>
                  <li>Right to access</li>
                  <li>Right to rectification</li>
                  <li>Right to erasure ("right to be forgotten")</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                  <li>Right to withdraw consent at any time</li>
                  <li>Right to lodge a complaint with your local supervisory authority (data protection authority)</li>
                </ul>
 
                <p><strong>Under the Personal Information Protection Act (Republic of Korea):</strong></p>
                <ul>
                  <li>Right to access, correct, delete, and suspend the processing of your personal information</li>
                  <li>Right to withdraw consent</li>
                  <li>Right, for a minor under 14, to have these rights exercised by a legal representative</li>
                </ul>
 
                <p><strong>Under the CCPA/CPRA (California, USA):</strong></p>
                <ul>
                  <li>Right to know what personal information we collect and how we use it</li>
                  <li>Right to correct inaccurate personal information</li>
                  <li>Right to request deletion of personal information</li>
                  <li>Right to opt out of the sale or sharing of personal information (we do not sell or share your data)</li>
                  <li>Right to limit the use of sensitive personal information</li>
                  <li>Right to non-discrimination for exercising your privacy rights</li>
                </ul>
 
                <p><strong>How to Exercise Your Rights:</strong> To exercise any of these rights, contact us at <a href="mailto:growyoursouling@gmail.com">growyoursouling@gmail.com</a>. We will respond within the time required by applicable law (within 30 days under the GDPR).</p>
              </div>
 
              <div className="legal-section">
                <h2>Children's Privacy</h2>
                <p>The App is intended for users aged 13 and older. We do not knowingly collect personal information from children under 13, and if we learn that we have done so, we will delete it promptly.</p>
                <p>For users who are minors in their jurisdiction, additional protections apply:</p>
                <ul>
                  <li>In the Republic of Korea, we require the verifiable consent of a parent or legal guardian before processing the personal information of a child under 14.</li>
                  <li>In the EU/EEA and UK, where the user is below the applicable age of digital consent (between 13 and 16 depending on the country), we require parental or guardian consent.</li>
                </ul>
                <p>If you are a parent or guardian and believe your child has provided us personal information without your consent, please contact us at <a href="mailto:growyoursouling@gmail.com">growyoursouling@gmail.com</a> and we will take appropriate action.</p>
              </div>
 
              <div className="legal-section">
                <h2>Data Security</h2>
                <p>We implement appropriate technical and organizational measures to protect your information from unauthorized access, loss, misuse, or alteration. Please note that no system can be guaranteed 100% secure.</p>
              </div>
 
              <div className="legal-section">
                <h2>Use of Analytics and Cookies</h2>
                <p>The App uses Google Analytics / Firebase Analytics, which may collect identifiers similar to cookies and track App usage patterns. You can opt out of Google Analytics by adjusting your device settings or using Google's privacy tools: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a></p>
              </div>
 
              <div className="legal-section">
                <h2>Changes to This Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the "Last updated" date above or through other appropriate means. Your continued use of the App after changes have been posted constitutes your acceptance of the revised Privacy Policy.</p>
              </div>
 
              <div className="legal-section">
                <h2>Contact Us</h2>
                <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
                <p>Vivos Voco Inc.<br />Email: <a href="mailto:growyoursouling@gmail.com">growyoursouling@gmail.com</a></p>
              </div>
 
              <div className="legal-section">
                <h2>Summary of Key Points for Transparency</h2>
                <ul>
                  <li>We do not collect precise location data or sell your personal data</li>
                  <li>We use Google/Firebase Analytics only to improve your experience</li>
                  <li>In-app purchases are processed by Apple/Google; we never see your card details</li>
                  <li>You can delete your account and all your data at any time</li>
                  <li>We respect your rights under the GDPR, Korea's PIPA, the CCPA/CPRA, and other applicable privacy laws</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
 
      <footer className="legal-footer">
        <div className="container">
          <p>© 2026 Souling. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
 
export default PrivacyPolicy;