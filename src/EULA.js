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
          </div>
        </div>
      </header>
 
      <main className="legal-content">
        <div className="container">
          <div className="legal-document">
            <h1 className="legal-title">End User License Agreement (EULA) for Souling</h1>
            <div className="legal-text">
              <p><em>Last updated: June 10, 2026</em></p>
 
              <p>This End User License Agreement ("Agreement") is a legal agreement between you ("User," "you," or "your") and Vivos Voco Inc. ("Company," "we," "our," or "us"), a company incorporated in the Republic of Korea, regarding your use of the Souling mobile application (the "App").</p>
 
              <p>By downloading, installing, or using the App, you agree to be bound by the terms of this Agreement. If you do not agree to these terms, do not use the App.</p>
 
              <div className="legal-section">
                <h2>Eligibility</h2>
                <p>You must be at least 13 years old to use the App. If you are a minor in your jurisdiction, you may use the App only with the consent and supervision of a parent or legal guardian, who agrees to this Agreement on your behalf. Where required by law (for example, for users under 14 in the Republic of Korea, or below the applicable age of digital consent in the EU/EEA), verifiable parental or guardian consent is required.</p>
              </div>
 
              <div className="legal-section">
                <h2>License Grant</h2>
                <p>Subject to your compliance with this Agreement, we grant you a limited, non-exclusive, non-transferable, non-sublicensable license to download, install, and use the App on any device that you own or control, solely for your personal, non-commercial use, and in accordance with the Usage Rules of the app store from which you downloaded the App.</p>
              </div>
 
              <div className="legal-section">
                <h2>Restrictions</h2>
                <p>You may not:</p>
                <ul>
                  <li>Copy, modify, or create derivative works based on the App</li>
                  <li>Distribute, transfer, sublicense, lease, lend, or rent the App to any third party</li>
                  <li>Reverse engineer, decompile, or disassemble the App, except to the extent this restriction is prohibited by applicable law</li>
                  <li>Use the App in any unlawful manner or in violation of any applicable laws or regulations</li>
                  <li>Attempt to gain unauthorized access to the App or its systems</li>
                  <li>Remove, alter, or obscure any proprietary notices on the App</li>
                </ul>
              </div>
 
              <div className="legal-section">
                <h2>Ownership</h2>
                <p>The App and all related intellectual property rights are and remain the exclusive property of Vivos Voco Inc. and its licensors. The App is licensed, not sold, to you. This Agreement does not grant you any ownership rights to the App or its content.</p>
              </div>
 
              <div className="legal-section">
                <h2>In-App Purchases and Virtual Items</h2>
                <p>The App may offer virtual currency and virtual items (including cosmetic items) for purchase or use within the App. All such purchases and Virtual Items are governed by the "Virtual Currency and In-App Purchases" section of our Terms of Service, which is incorporated by reference into this Agreement.</p>
              </div>
 
              <div className="legal-section">
                <h2>Updates and Modifications</h2>
                <p>We may provide updates, upgrades, or modifications to the App from time to time, which may be automatically downloaded and installed on your device. By using the App, you consent to the delivery of such updates. These updates are subject to the terms of this Agreement unless accompanied by separate license terms.</p>
              </div>
 
              <div className="legal-section">
                <h2>Privacy and Data Collection</h2>
                <p>Your privacy is important to us. The collection and use of your personal information through the App is governed by our Privacy Policy, which is incorporated by reference into this Agreement. By using the App, you also agree to our Privacy Policy and Terms of Service.</p>
              </div>
 
              <div className="legal-section">
                <h2>App Store Terms (Apple and Google)</h2>
                <p>This Agreement is between you and Vivos Voco Inc. only, and not with Apple Inc. ("Apple") or Google LLC ("Google"). The App store provider is not responsible for the App or its content. The following terms apply where you obtained the App from the Apple App Store:</p>
                <ul>
                  <li><strong>Scope of License.</strong> The license granted to you is limited to a non-transferable license to use the App on any Apple-branded device that you own or control, as permitted by the Usage Rules set out in the Apple Media Services Terms and Conditions.</li>
                  <li><strong>Maintenance and Support.</strong> Vivos Voco Inc., not Apple, is solely responsible for providing any maintenance and support services for the App. Apple has no obligation to furnish any maintenance or support services.</li>
                  <li><strong>Warranty.</strong> Vivos Voco Inc. is solely responsible for any product warranties, whether express or implied by law, to the extent not effectively disclaimed. If the App fails to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price (if any) for the App to you; to the maximum extent permitted by applicable law, Apple will have no other warranty obligation with respect to the App.</li>
                  <li><strong>Product Claims.</strong> Vivos Voco Inc., not Apple, is responsible for addressing any claims relating to the App, including product liability claims, claims that the App fails to conform to legal or regulatory requirements, and claims arising under consumer protection or similar legislation.</li>
                  <li><strong>Intellectual Property Claims.</strong> Vivos Voco Inc., not Apple, is responsible for the investigation, defense, settlement, and discharge of any third-party intellectual property infringement claim relating to the App.</li>
                  <li><strong>Legal Compliance.</strong> You represent and warrant that you are not located in a country subject to a U.S. Government embargo or designated as a "terrorist supporting" country, and that you are not listed on any U.S. Government list of prohibited or restricted parties.</li>
                  <li><strong>Third-Party Beneficiary.</strong> You acknowledge that Apple and its subsidiaries are third-party beneficiaries of this Agreement, and that Apple has the right (and is deemed to have accepted the right) to enforce this Agreement against you as a third-party beneficiary.</li>
                </ul>
                <p>Where you obtained the App from Google Play, your use is also subject to the Google Play Terms of Service, and the references above to Apple apply correspondingly to Google to the extent required by Google's terms.</p>
              </div>
 
              <div className="legal-section">
                <h2>Disclaimer of Warranties</h2>
                <p>The App is provided "AS IS" and "AS AVAILABLE," without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, non-infringement, and accuracy, completeness, or reliability of content.</p>
 
                <div style={{ background: 'rgba(255, 193, 7, 0.1)', padding: '1rem', borderRadius: '8px', marginTop: '1rem', borderLeft: '4px solid #ffc107' }}>
                  <p><strong>Important Medical Disclaimer:</strong></p>
                  <p>Souling is intended for informational and self-reflection purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of qualified healthcare professionals regarding any medical concerns.</p>
                </div>
              </div>
 
              <div className="legal-section">
                <h2>Limitation of Liability</h2>
                <p>To the fullest extent permitted by applicable law, Vivos Voco Inc. and its affiliates, officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages; any loss of profits, data, use, or goodwill; any damages arising from your use of or inability to use the App; or any damages resulting from unauthorized access to your data.</p>
                <p>Our total liability for any claim arising out of or relating to this Agreement will not exceed the greater of (a) USD $100, or (b) the amount you paid us, if any, in the twelve months preceding the claim.</p>
              </div>
 
              <div className="legal-section">
                <h2>Consumer Rights</h2>
                <p>Nothing in this Agreement excludes, restricts, or modifies any rights or remedies you have as a consumer under applicable mandatory law that cannot be waived, including statutory warranties. Nothing in the "Disclaimer of Warranties" or "Limitation of Liability" sections limits liability for death or personal injury caused by negligence, for fraud, or for any other liability that cannot be excluded under the law of your country of residence.</p>
              </div>
 
              <div className="legal-section">
                <h2>Termination</h2>
                <p><strong>Termination by You:</strong> You may terminate this Agreement at any time by deleting the App and all copies from your device(s).</p>
 
                <p><strong>Termination by Us:</strong> We may terminate this Agreement and your access to the App immediately if you violate any terms of this Agreement.</p>
 
                <p><strong>Effect of Termination:</strong> Upon termination, you must cease all use of the App and delete all copies from your device(s). Any unused virtual currency or Virtual Items are forfeited as described in our Terms of Service, except where prohibited by law. Sections relating to ownership, disclaimers, limitation of liability, and governing law shall survive termination.</p>
              </div>
 
              <div className="legal-section">
                <h2>Governing Law and Dispute Resolution</h2>
                <p>This Agreement is governed by and construed in accordance with the laws of the Republic of Korea, without regard to its conflict-of-law principles.</p>
                <p>Any disputes arising out of or relating to this Agreement shall be resolved through binding arbitration in accordance with the rules of the Korean Commercial Arbitration Board, unless prohibited by applicable law. Nothing in this section deprives you of the protection of mandatory consumer-protection laws, or of the right to bring proceedings in the courts of your country of residence, where such rights cannot be waived under the law that applies to you as a consumer.</p>
              </div>
 
              <div className="legal-section">
                <h2>Changes to This Agreement</h2>
                <p>We may update this Agreement from time to time. We will notify you of any material changes by updating the "Last updated" date or through other appropriate means. Your continued use of the App after such changes constitutes your acceptance of the revised Agreement, except where applicable law requires your affirmative consent.</p>
              </div>
 
              <div className="legal-section">
                <h2>Contact Information</h2>
                <p>If you have any questions about this Agreement or need support, please contact us:</p>
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
 
export default EULA;