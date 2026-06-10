import React from 'react';
import { Link } from 'react-router-dom';
import './LegalPages.css';
 
function TermsOfService() {
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
            <h1 className="legal-title">Terms of Service</h1>
            <div className="legal-text">
              <p><em>Last updated: June 10, 2026</em></p>
 
              <p>Welcome to Souling: Life-changing Habits, a mobile application provided by Vivos Voco Inc. ("we," "our," or "us"), a company incorporated in the Republic of Korea. These Terms of Service ("Terms") govern your access to and use of the Souling mobile application (the "App").</p>
 
              <p>By using the App, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the App.</p>
 
              <div className="legal-section">
                <h2>Eligibility and Age Requirements</h2>
                <p>You must be at least 13 years old to use the App. By using the App, you represent and warrant that:</p>
                <ul>
                  <li>You are at least 13 years of age</li>
                  <li>You will comply with all applicable laws and regulations</li>
                  <li>All information you provide is accurate and truthful</li>
                </ul>
                <p><strong>Minors.</strong> If you are a minor in your jurisdiction, you may use the App only with the involvement and consent of a parent or legal guardian, who must agree to these Terms on your behalf and is responsible for supervising your use of the App, including any in-app purchases. By allowing a minor to use the App, a parent or legal guardian accepts these Terms and accepts responsibility for the minor's activity and purchases. Where required by law (for example, for users under 14 in the Republic of Korea, or below the applicable age of digital consent in the EU/EEA), we require verifiable parental or guardian consent before the minor may use the App or make purchases.</p>
              </div>
 
              <div className="legal-section">
                <h2>Account Registration and Security</h2>
                <p>To access certain features of the App, you may be required to register for an account. When creating an account, you agree to:</p>
                <ul>
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Keep your account information up to date</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Be responsible for all activities that occur under your account</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>
                <p>We reserve the right to suspend or terminate accounts that provide false information or violate these Terms.</p>
              </div>
 
              <div className="legal-section">
                <h2>User Content and Data</h2>
                <p>The App allows you to create and store personal content such as questionnaire responses and other personal reflections ("User Content").</p>
 
                <p><strong>Your Rights:</strong></p>
                <ul>
                  <li>You retain ownership of your User Content</li>
                  <li>You can delete your content at any time</li>
                  <li>You can export your data before account deletion</li>
                </ul>
 
                <p><strong>License to Us:</strong> By creating User Content, you grant us a limited, non-exclusive, non-transferable license to store, process, and display your User Content solely for the purpose of providing the App's services to you.</p>
 
                <p><strong>Your Responsibilities:</strong> You are solely responsible for your User Content and agree not to create, upload, or share content that:</p>
                <ul>
                  <li>Is unlawful, harmful, threatening, or offensive</li>
                  <li>Violates any applicable laws or regulations</li>
                  <li>Infringes on the rights of others</li>
                  <li>Contains malicious code or harmful materials</li>
                </ul>
              </div>
 
              <div className="legal-section">
                <h2>Virtual Currency and In-App Purchases</h2>
                <p>The App may allow you to purchase, earn, or use virtual currency and virtual items, including cosmetic items for your companion character ("Virtual Items"). Please read this section carefully.</p>
 
                <p><strong>Purchases through Apple/Google.</strong> All purchases of Virtual Items are processed by the Apple App Store or Google Play using their in-app purchase systems. Your purchases are also subject to the applicable store's terms and policies. We do not process or store your payment-card details.</p>
 
                <p><strong>No ownership; limited license.</strong> Virtual Items are licensed, not sold, to you. You receive a limited, personal, non-transferable, revocable license to use Virtual Items within the App. Virtual Items have no monetary value, are not your property, cannot be transferred or sold, and cannot be exchanged for cash or any real-world goods, money, or value, except where required by law.</p>
 
                <p><strong>No obligation; changes.</strong> We may manage, regulate, modify, suspend, or eliminate Virtual Items at any time, including changing their price, availability, or functionality, with or without notice, and without any liability to you, except where prohibited by law.</p>
 
                <p><strong>Refunds.</strong> Except where required by applicable law, all purchases are final and non-refundable. Because purchases are processed by Apple or Google, any refund requests are handled by the relevant app store in accordance with its policies. Please contact Apple or Google to request a refund.</p>
 
                <p><strong>EU/EEA right of withdrawal.</strong> If you are a consumer in the EU/EEA or UK, you normally have a 14-day right to withdraw from purchases of digital content. By purchasing Virtual Items and asking for them to be delivered immediately, you expressly request immediate performance and acknowledge that you lose your right of withdrawal once the Virtual Items have been delivered to your account.</p>
 
                <p><strong>Minors and purchases.</strong> Purchases may only be made by the account holder or with the consent of a parent or legal guardian. Parents and guardians are responsible for purchases made by minors and are encouraged to use the parental-control and purchase-approval features provided by Apple and Google.</p>
 
                <p><strong>Forfeiture.</strong> If your account is deleted or terminated for any reason (whether by you or by us), any unused Virtual Items or virtual currency are forfeited and will not be refunded, except where required by law.</p>
              </div>
 
              <div className="legal-section">
                <h2>Acceptable Use Policy</h2>
                <p>You agree to use the App only for lawful purposes and in accordance with these Terms. You agree NOT to:</p>
 
                <div style={{ background: 'rgba(220, 53, 69, 0.1)', padding: '1rem', borderRadius: '8px', marginTop: '1rem', borderLeft: '4px solid #dc3545' }}>
                  <p><strong>Prohibited Activities:</strong></p>
                  <ul>
                    <li>Use the App for any unlawful purpose or illegal activity</li>
                    <li>Violate any local, state, national, or international laws</li>
                    <li>Interfere with or disrupt the operation of the App or servers</li>
                    <li>Attempt to gain unauthorized access to the App, accounts, or systems</li>
                    <li>Use the App to distribute spam, malware, or malicious software</li>
                    <li>Impersonate any person or entity or misrepresent your affiliation</li>
                    <li>Collect or harvest personal information of other users</li>
                    <li>Use automated systems to access the App without permission</li>
                  </ul>
                </div>
              </div>
 
              <div className="legal-section">
                <h2>Intellectual Property Rights</h2>
                <p>All content and materials within the App (excluding your User Content) are owned by Vivos Voco Inc. or our licensors, including text, graphics, logos, images, audio content, software, code, technical elements, trademarks, service marks, trade names, and user interface design and layout.</p>
                <p>These materials are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works based on any part of the App without our prior written consent.</p>
              </div>
 
              <div className="legal-section">
                <h2>Third-Party Services and Integrations</h2>
                <p>The App uses third-party services to enhance functionality and user experience:</p>
 
                <div style={{ background: 'rgba(87, 185, 255, 0.05)', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
                  <p><strong>Third-Party Services We Use:</strong></p>
                  <ul>
                    <li><strong>Google Analytics / Firebase Analytics</strong> — app usage analytics and performance monitoring</li>
                    <li><strong>Apple App Store / Google Play</strong> — processing of in-app purchases</li>
                    <li><strong>Cloud Storage Services</strong> — secure data storage and backup</li>
                    <li><strong>Authentication Services</strong> — secure account management</li>
                  </ul>
                </div>
 
                <p style={{ marginTop: '1rem' }}>Your use of these third-party services is subject to their respective terms of service and privacy policies. We are not responsible for the practices or policies of third-party services.</p>
              </div>
 
              <div className="legal-section">
                <h2>App Store Terms</h2>
                <p>If you download the App from the Apple App Store or Google Play, your use is also subject to that store's terms. Where required by Apple, you acknowledge that these Terms are between you and Vivos Voco Inc. only (not Apple), that Apple is not responsible for the App or its content, and that Apple and its subsidiaries are third-party beneficiaries of these Terms with the right to enforce them.</p>
              </div>
 
              <div className="legal-section">
                <h2>Account Termination and Data Deletion</h2>
                <p><strong>Voluntary Termination:</strong> You may terminate your account at any time through the App's account center using the "Delete Account" feature. Upon deletion, all your personal data and User Content will be permanently deleted, any unused Virtual Items are forfeited, and the deletion process is irreversible (except for records we are legally required to retain).</p>
 
                <p><strong>Termination by Us:</strong> We reserve the right to suspend or terminate your access to the App if we reasonably believe that you have violated these Terms or our policies, engaged in unlawful activity, compromised the security or integrity of the App, or used the App in a manner that could harm other users. If we terminate your account, we will handle your personal data in accordance with our Privacy Policy, and any unused Virtual Items are forfeited as described above, except where prohibited by law.</p>
              </div>
 
              <div className="legal-section">
                <h2>Service Availability and Modifications</h2>
                <p>We strive to provide reliable service, but cannot guarantee that the App will be available at all times. The App may be temporarily unavailable due to scheduled maintenance and updates, technical difficulties or server issues, or circumstances beyond our reasonable control.</p>
                <p>We reserve the right to modify, suspend, or discontinue any aspect of the App at any time, with or without notice.</p>
              </div>
 
              <div className="legal-section">
                <h2>Disclaimers and Limitations</h2>
                <p>The App is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either express or implied.</p>
 
                <div style={{ background: 'rgba(255, 193, 7, 0.1)', padding: '1rem', borderRadius: '8px', marginTop: '1rem', borderLeft: '4px solid #ffc107' }}>
                  <p><strong>Important Health and Wellness Disclaimer:</strong></p>
                  <p>Souling is intended for informational and self-reflection purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of qualified healthcare professionals with any questions regarding your mental or physical health.</p>
                </div>
 
                <p>We do not guarantee that the App will be error-free or uninterrupted, that any information provided will be accurate or complete, that the App will meet your specific requirements, or that any defects will be corrected promptly.</p>
              </div>
 
              <div className="legal-section">
                <h2>Limitation of Liability</h2>
                <p>To the fullest extent permitted by applicable law, Vivos Voco Inc. and its affiliates, officers, directors, employees, and agents shall not be liable for:</p>
                <ul>
                  <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                  <li>Any loss of profits, data, use, goodwill, or business opportunities</li>
                  <li>Any damages arising from your use of or inability to use the App</li>
                  <li>Any damages resulting from third-party actions or services</li>
                </ul>
                <p>Our total liability for any claim arising out of or relating to the App will not exceed the greater of (a) the amount you paid us, if any, in the twelve months preceding the claim, or (b) the minimum amount required by applicable law.</p>
              </div>
 
              <div className="legal-section">
                <h2>Consumer Rights</h2>
                <p>Nothing in these Terms excludes, restricts, or modifies any rights or remedies you have as a consumer under applicable mandatory law that cannot be waived. In particular, nothing in the "Disclaimers" or "Limitation of Liability" sections limits liability for death or personal injury caused by negligence, for fraud, or for any other liability that cannot be excluded under the law of your country of residence. If you are a consumer, you may also have the right to bring proceedings in the courts of your country of residence, and you retain the protections of the mandatory consumer-protection laws that apply there.</p>
              </div>
 
              <div className="legal-section">
                <h2>Indemnification</h2>
                <p>You agree to indemnify, defend, and hold harmless Vivos Voco Inc. and its affiliates from and against any claims, damages, losses, costs, and expenses (including reasonable attorney fees) arising from your use of the App, your violation of these Terms, your User Content, or your violation of any rights of others. This indemnification obligation does not apply to the extent prohibited by applicable law, including consumer-protection law.</p>
              </div>
 
              <div className="legal-section">
                <h2>Changes to These Terms</h2>
                <p>We may update these Terms from time to time to reflect changes in our practices, legal requirements, or App features. We will notify you of significant changes by updating the "Last updated" date at the top of these Terms, providing notice through the App or via email, or other appropriate communication methods. Your continued use of the App after such updates constitutes your acceptance of the revised Terms, except where applicable law requires your affirmative consent.</p>
              </div>
 
              <div className="legal-section">
                <h2>Governing Law and Dispute Resolution</h2>
                <p>These Terms are governed by and construed in accordance with the laws of the Republic of Korea, without regard to conflict-of-law principles.</p>
                <p>Any disputes arising out of or relating to these Terms or the App shall be resolved through binding arbitration in accordance with the rules of the Korean Commercial Arbitration Board, unless prohibited by applicable law. Nothing in this section deprives you of the protection of mandatory consumer-protection laws, or of the right to bring proceedings in the courts of your country of residence, where such rights cannot be waived under the law that applies to you as a consumer.</p>
              </div>
 
              <div className="legal-section">
                <h2>Severability and Entire Agreement</h2>
                <p>If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions will continue in full force and effect.</p>
                <p>These Terms, together with our Privacy Policy and EULA, constitute the entire agreement between you and Vivos Voco Inc. regarding the App.</p>
              </div>
 
              <div className="legal-section">
                <h2>Contact Information</h2>
                <p>If you have any questions about these Terms or need support, please contact us:</p>
                <p>Vivos Voco Inc.<br />Email: <a href="mailto:growyoursouling@gmail.com">growyoursouling@gmail.com</a></p>
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
 
export default TermsOfService;