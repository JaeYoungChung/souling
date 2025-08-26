import React from 'react';
import { Link } from 'react-router-dom';
import './LegalPages.css';

function EULA() {
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
            <h1 className="legal-title">End User License Agreement (EULA) for Souling</h1>
            <div className="legal-text">
              <p><em>Last updated: June 9, 2025</em></p>
              
              <p>This End User License Agreement ("Agreement") is a legal agreement between you ("User," "you," or "your") and Vivos Voco Inc. ("Company," "we," "our," or "us") regarding your use of the Souling mobile application (the "App").</p>
              
              <p>By downloading, installing, or using the App, you agree to be bound by the terms of this Agreement. If you do not agree to these terms, do not use the App.</p>
              
              <div className="legal-section">
                <h2>License Grant</h2>
                <p>Subject to your compliance with this Agreement, we grant you a limited, non-exclusive, non-transferable, non-sublicensable license to download, install, and use the App on your personal mobile device solely for your personal, non-commercial use.</p>
              </div>

              <div className="legal-section">
                <h2>Restrictions</h2>
                <p>You may not:</p>
                <p>• Copy, modify, or create derivative works based on the App
                   • Distribute, transfer, sublicense, lease, lend, or rent the App to any third party
                   • Reverse engineer, decompile, or disassemble the App
                   • Use the App in any unlawful manner or in violation of any applicable laws or regulations
                   • Attempt to gain unauthorized access to the App or its systems
                   • Remove, alter, or obscure any proprietary notices on the App</p>
              </div>

              <div className="legal-section">
                <h2>Ownership</h2>
                <p>The App and all related intellectual property rights are and remain the exclusive property of Vivos Voco Inc. and its licensors.</p>
                <p>The App is licensed, not sold, to you. This Agreement does not grant you any ownership rights to the App or its content.</p>
              </div>

              <div className="legal-section">
                <h2>Updates and Modifications</h2>
                <p>We may provide updates, upgrades, or modifications to the App from time to time, which may be automatically downloaded and installed on your device.</p>
                <p>By using the App, you consent to the delivery of such updates. These updates are subject to the terms of this Agreement unless accompanied by separate license terms.</p>
              </div>

              <div className="legal-section">
                <h2>Privacy and Data Collection</h2>
                <p>Your privacy is important to us. The collection and use of your personal information through the App is governed by our Privacy Policy, which is incorporated by reference into this Agreement.</p>
                <p>By using the App, you also agree to our Privacy Policy and Terms of Service.</p>
              </div>

              <div className="legal-section">
                <h2>Disclaimer of Warranties</h2>
                <p>The App is provided "AS IS" and "AS AVAILABLE," without warranties of any kind, either express or implied, including but not limited to:</p>
                <p>• Warranties of merchantability
                   • Fitness for a particular purpose
                   • Non-infringement
                   • Accuracy, completeness, or reliability of content</p>
                
                <div style={{background: 'rgba(255, 193, 7, 0.1)', padding: '1rem', borderRadius: '8px', marginTop: '1rem', borderLeft: '4px solid #ffc107'}}>
                  <p><strong>Important Medical Disclaimer:</strong></p>
                  <p>Souling is intended for informational and self-reflection purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of qualified healthcare professionals regarding any medical concerns.</p>
                </div>
              </div>

              <div className="legal-section">
                <h2>Limitation of Liability</h2>
                <p>To the fullest extent permitted by applicable law, Vivos Voco Inc. and its affiliates, officers, directors, employees, and agents shall not be liable for:</p>
                <p>• Any indirect, incidental, special, consequential, or punitive damages
                   • Any loss of profits, data, use, or goodwill
                   • Any damages arising from your use of or inability to use the App
                   • Any damages resulting from unauthorized access to your data</p>
                
                <p>Our total liability for any claim arising out of or relating to this Agreement will not exceed $100 USD.</p>
              </div>

              <div className="legal-section">
                <h2>Termination</h2>
                <p><strong>Termination by You:</strong></p>
                <p>You may terminate this Agreement at any time by deleting the App and all copies from your device(s).</p>
                
                <p><strong>Termination by Us:</strong></p>
                <p>We may terminate this Agreement and your access to the App immediately if you violate any terms of this Agreement.</p>
                
                <p><strong>Effect of Termination:</strong></p>
                <p>Upon termination, you must cease all use of the App and delete all copies from your device(s). Sections relating to ownership, disclaimers, limitation of liability, and governing law shall survive termination.</p>
              </div>

              <div className="legal-section">
                <h2>Governing Law and Dispute Resolution</h2>
                <p>This Agreement is governed by and construed in accordance with the laws of the Republic of Korea, without regard to its conflict of law principles.</p>
                <p>Any disputes arising out of or relating to this Agreement shall be resolved through binding arbitration in accordance with the rules of the Korean Commercial Arbitration Board.</p>
              </div>

              <div className="legal-section">
                <h2>Changes to This Agreement</h2>
                <p>We may update this Agreement from time to time. We will notify you of any material changes by updating the "Last updated" date or through other appropriate means.</p>
                <p>Your continued use of the App after such changes constitutes your acceptance of the revised Agreement.</p>
              </div>

              <div className="legal-section">
                <h2>Contact Information</h2>
                <p>If you have any questions about this Agreement or need support, please contact us:</p>
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

export default EULA; 