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
            <h1 className="legal-logo">Souling</h1>
          </div>
        </div>
      </header>

      <main className="legal-content">
        <div className="container">
          <div className="legal-document">
            <h1 className="legal-title">Terms of Service</h1>
            <div className="legal-text">
              <p><em>Last updated: June 9, 2025</em></p>
              
              <p>Welcome to Souling, a mobile application provided by Vivos Voco Inc. ("we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of the Souling mobile application (the "App").</p>
              
              <p>By using the App, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the App.</p>
              
              <div className="legal-section">
                <h2>Eligibility and Age Requirements</h2>
                <p>You must be at least 13 years old to use the App. By using the App, you represent and warrant that:</p>
                <p>• You are at least 13 years of age
                   • You have the legal capacity to enter into these Terms
                   • You will comply with all applicable laws and regulations
                   • All information you provide is accurate and truthful</p>
              </div>

              <div className="legal-section">
                <h2>Account Registration and Security</h2>
                <p>To access certain features of the App, you may be required to register for an account. When creating an account, you agree to:</p>
                <p>• Provide accurate, current, and complete information during registration
                   • Keep your account information up to date
                   • Maintain the confidentiality of your account credentials
                   • Be responsible for all activities that occur under your account
                   • Notify us immediately of any unauthorized use of your account</p>
                
                <p>We reserve the right to suspend or terminate accounts that provide false information or violate these Terms.</p>
              </div>

              <div className="legal-section">
                <h2>User Content and Data</h2>
                <p>The App allows you to create and store personal content such as journal entries, questionnaire responses, and other personal reflections ("User Content").</p>
                
                <p><strong>Your Rights:</strong></p>
                <p>• You retain ownership of your User Content
                   • You can delete your content at any time
                   • You can export your data before account deletion</p>
                
                <p><strong>License to Us:</strong></p>
                <p>By creating User Content, you grant us a limited, non-exclusive, non-transferable license to store, process, and display your User Content solely for the purpose of providing the App's services to you.</p>
                
                <p><strong>Your Responsibilities:</strong></p>
                <p>You are solely responsible for your User Content and agree not to create, upload, or share content that:</p>
                <p>• Is unlawful, harmful, threatening, or offensive
                   • Violates any applicable laws or regulations
                   • Infringes on the rights of others
                   • Contains malicious code or harmful materials</p>
              </div>

              <div className="legal-section">
                <h2>Acceptable Use Policy</h2>
                <p>You agree to use the App only for lawful purposes and in accordance with these Terms. You agree NOT to:</p>
                
                <div style={{background: 'rgba(220, 53, 69, 0.1)', padding: '1rem', borderRadius: '8px', marginTop: '1rem', borderLeft: '4px solid #dc3545'}}>
                  <p><strong>Prohibited Activities:</strong></p>
                  <p>• Use the App for any unlawful purpose or illegal activity
                     • Violate any local, state, national, or international laws
                     • Interfere with or disrupt the operation of the App or servers
                     • Attempt to gain unauthorized access to the App, accounts, or systems
                     • Use the App to distribute spam, malware, or malicious software
                     • Impersonate any person or entity or misrepresent your affiliation
                     • Collect or harvest personal information of other users
                     • Use automated systems to access the App without permission</p>
                </div>
              </div>

              <div className="legal-section">
                <h2>Intellectual Property Rights</h2>
                <p>All content and materials within the App (excluding your User Content) are owned by Vivos Voco Inc. or our licensors, including:</p>
                <p>• Text, graphics, logos, images, and audio content
                   • Software, code, and technical elements
                   • Trademarks, service marks, and trade names
                   • User interface design and layout</p>
                
                <p>These materials are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works based on any part of the App without our prior written consent.</p>
              </div>

              <div className="legal-section">
                <h2>Third-Party Services and Integrations</h2>
                <p>The App uses third-party services to enhance functionality and user experience:</p>
                
                <div style={{background: 'rgba(87, 185, 255, 0.05)', padding: '1rem', borderRadius: '8px', marginTop: '1rem'}}>
                  <p><strong>Third-Party Services We Use:</strong></p>
                  <p>• <strong>Google Analytics / Firebase Analytics</strong> — for app usage analytics and performance monitoring
                     • <strong>Cloud Storage Services</strong> — for secure data storage and backup
                     • <strong>Authentication Services</strong> — for secure account management</p>
                </div>
                
                <p>Your use of these third-party services is subject to their respective terms of service and privacy policies. We are not responsible for the practices or policies of third-party services.</p>
              </div>

              <div className="legal-section">
                <h2>Account Termination and Data Deletion</h2>
                <p><strong>Voluntary Termination:</strong></p>
                <p>You may terminate your account at any time through the App's account center using the "Delete Account" feature. Upon deletion:</p>
                <p>• All your personal data will be permanently deleted
                   • Your User Content (journal entries, questionnaire answers) will be removed
                   • The deletion process is irreversible</p>
                
                <p><strong>Termination by Us:</strong></p>
                <p>We reserve the right to suspend or terminate your access to the App if we reasonably believe that you have:</p>
                <p>• Violated these Terms or our other policies
                   • Engaged in unlawful activity
                   • Compromised the security or integrity of the App
                   • Used the App in a manner that could harm other users</p>
              </div>

              <div className="legal-section">
                <h2>Service Availability and Modifications</h2>
                <p>We strive to provide reliable service, but cannot guarantee that the App will be available at all times. The App may be temporarily unavailable due to:</p>
                <p>• Scheduled maintenance and updates
                   • Technical difficulties or server issues
                   • Circumstances beyond our reasonable control</p>
                
                <p>We reserve the right to modify, suspend, or discontinue any aspect of the App at any time, with or without notice.</p>
              </div>

              <div className="legal-section">
                <h2>Disclaimers and Limitations</h2>
                <p>The App is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either express or implied.</p>
                
                <div style={{background: 'rgba(255, 193, 7, 0.1)', padding: '1rem', borderRadius: '8px', marginTop: '1rem', borderLeft: '4px solid #ffc107'}}>
                  <p><strong>Important Health and Wellness Disclaimer:</strong></p>
                  <p>Souling is intended for informational and self-reflection purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of qualified healthcare professionals with any questions regarding your mental or physical health.</p>
                </div>
                
                <p>We do not guarantee that:</p>
                <p>• The App will be error-free or uninterrupted
                   • Any information provided will be accurate or complete
                   • The App will meet your specific requirements
                   • Any defects will be corrected promptly</p>
              </div>

              <div className="legal-section">
                <h2>Limitation of Liability</h2>
                <p>To the fullest extent permitted by applicable law, Vivos Voco Inc. and its affiliates, officers, directors, employees, and agents shall not be liable for:</p>
                <p>• Any indirect, incidental, special, consequential, or punitive damages
                   • Any loss of profits, data, use, goodwill, or business opportunities
                   • Any damages arising from your use of or inability to use the App
                   • Any damages resulting from third-party actions or services</p>
                
                <p>Our total liability for any claim arising out of or relating to the App will not exceed the amount you have paid, if any, to use the App in the twelve months preceding the claim.</p>
              </div>

              <div className="legal-section">
                <h2>Indemnification</h2>
                <p>You agree to indemnify, defend, and hold harmless Vivos Voco Inc. and its affiliates from and against any claims, damages, losses, costs, and expenses (including reasonable attorney fees) arising from:</p>
                <p>• Your use of the App
                   • Your violation of these Terms
                   • Your User Content
                   • Your violation of any rights of others</p>
              </div>

              <div className="legal-section">
                <h2>Changes to These Terms</h2>
                <p>We may update these Terms from time to time to reflect changes in our practices, legal requirements, or App features.</p>
                <p>We will notify you of significant changes by:</p>
                <p>• Updating the "Last updated" date at the top of these Terms
                   • Providing notice through the App or via email
                   • Other appropriate communication methods</p>
                
                <p>Your continued use of the App after such updates constitutes your acceptance of the revised Terms.</p>
              </div>

              <div className="legal-section">
                <h2>Governing Law and Dispute Resolution</h2>
                <p>These Terms are governed by and construed in accordance with the laws of the Republic of Korea, without regard to conflict of law principles.</p>
                <p>Any disputes arising out of or relating to these Terms or the App shall be resolved through binding arbitration in accordance with the rules of the Korean Commercial Arbitration Board, unless prohibited by local law.</p>
              </div>

              <div className="legal-section">
                <h2>Severability and Entire Agreement</h2>
                <p>If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions will continue in full force and effect.</p>
                <p>These Terms, together with our Privacy Policy and EULA, constitute the entire agreement between you and Vivos Voco Inc. regarding the App.</p>
              </div>

              <div className="legal-section">
                <h2>Contact Information</h2>
                <p>If you have any questions about these Terms or need support, please contact us:</p>
                <p>Email: <a href="mailto:support@souling.com">support@souling.com</a></p>
                <p>Company: Vivos Voco Inc.</p>
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

export default TermsOfService; 