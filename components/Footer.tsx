import { useState } from 'react';

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  return (
    <footer className="bg-dark text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">IDORA</h3>
            <p className="text-white/70">Modern contact sharing for Sri Lankan businesses</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#how-it-works" className="hover:text-white transition">How It Works</a></li>
              <li><a href="#use-cases" className="hover:text-white transition">Use Cases</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="https://katisa.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">About Us</a></li>
              <li><a href="https://wa.me/94701200064?text=Hi!%20I%20want%20to%20contact%20IDORA%20from%20your%20website." target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Contact</a></li>
              <li><button onClick={() => setShowPrivacy(true)} className="hover:text-white transition underline">Privacy Policy</button></li>
              <li><button onClick={() => setShowTerms(true)} className="hover:text-white transition underline">Terms of Service</button></li>
                  {/* Privacy Policy Modal */}
                  {showPrivacy && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
                      <div className="bg-white text-black max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-xl p-8 relative">
                        <button onClick={() => setShowPrivacy(false)} className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-black">×</button>
                        <h2 className="text-2xl font-bold mb-2">🔐 Privacy Policy</h2>
                        <p className="text-xs mb-4 text-gray-500">Last updated: 29 December 2025</p>
                        <div className="space-y-4 text-sm">
                          <p><b>1. Introduction</b></p>
                          <p>Welcome to IDORA, a digital identity and NFC-based business card platform operated by Katisa Technologies (“we”, “our”, “us”). Your privacy matters. This Privacy Policy explains how we collect, use, store, and protect your information when you use our website, services, and products.</p>
                          <p>By using IDORA, you agree to this Privacy Policy.</p>
                          <p><b>2. Information We Collect</b></p>
                          <p><b>a. Information You Provide</b><br/>Name<br/>Email address<br/>Phone number<br/>Business details<br/>Profile content (links, images, bio, etc.)</p>
                          <p><b>b. Automatically Collected Information</b><br/>IP address<br/>Browser type & device information<br/>Usage data (pages visited, interactions)</p>
                          <p><b>c. NFC & Profile Usage</b><br/>When someone taps or scans an IDORA card, we may collect anonymous analytics such as:<br/>Number of views<br/>Location (approximate)<br/>Device type<br/>We do not track personal behavior without consent.</p>
                          <p><b>3. How We Use Your Information</b></p>
                          <p>We use your data to:<br/>Provide and maintain IDORA services<br/>Create and manage digital profiles<br/>Improve user experience and performance<br/>Communicate updates or service-related messages<br/>Ensure platform security and prevent misuse</p>
                          <p><b>4. Data Sharing</b></p>
                          <p>We do not sell your data.<br/>We may share data only when:<br/>Required by law<br/>Needed to operate essential services (e.g., hosting, analytics)<br/>You explicitly give consent</p>
                          <p><b>5. Data Security</b></p>
                          <p>We take reasonable technical and organizational measures to protect your data. However, no system is 100% secure — use the platform responsibly.</p>
                          <p><b>6. Data Retention</b></p>
                          <p>We keep your data only as long as necessary to provide services or comply with legal obligations.</p>
                          <p><b>7. Your Rights</b></p>
                          <p>You have the right to:<br/>Access your data<br/>Update or correct information<br/>Request deletion of your account<br/>Contact us anytime to exercise these rights.</p>
                          <p><b>8. Changes to This Policy</b></p>
                          <p>We may update this Privacy Policy. Changes will be posted on this page with an updated date.</p>
                          <p><b>9. Contact Us</b></p>
                          <p>Katisa Technologies<br/>📧 Email: katisatechnologies@gmail.com<br/></p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Terms of Service Modal */}
                  {showTerms && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
                      <div className="bg-white text-black max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-xl p-8 relative">
                        <button onClick={() => setShowTerms(false)} className="absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-black">×</button>
                        <h2 className="text-2xl font-bold mb-2">📜 Terms of Service</h2>
                        <p className="text-xs mb-4 text-gray-500">Last updated: 29 December 2025</p>
                        <div className="space-y-4 text-sm">
                          <p><b>1. Acceptance of Terms</b></p>
                          <p>By accessing or using IDORA, you agree to these Terms of Service. If you don’t agree — don’t use the service.</p>
                          <p><b>2. Description of Service</b></p>
                          <p>IDORA provides:<br/>NFC-enabled digital business cards<br/>Online profile hosting<br/>Shareable identity links<br/>Business and personal branding tools</p>
                          <p><b>3. User Responsibilities</b></p>
                          <p>You agree:<br/>To provide accurate information<br/>Not to upload illegal, harmful, or misleading content<br/>Not to misuse NFC cards or impersonate others<br/>Not to attempt hacking or abuse of the platform<br/>You are fully responsible for content you publish.</p>
                          <p><b>4. Account & Access</b></p>
                          <p>You are responsible for maintaining account security<br/>We may suspend or terminate accounts violating these terms</p>
                          <p><b>5. Intellectual Property</b></p>
                          <p>All platform content, branding, and software belong to Katisa Technologies, unless stated otherwise.<br/>You retain ownership of the content you upload.</p>
                          <p><b>6. Payments & Refunds (If Applicable)</b></p>
                          <p>Pricing details are displayed on our website<br/>Payments are non-refundable unless explicitly stated<br/>We reserve the right to change pricing with notice</p>
                          <p><b>7. Limitation of Liability</b></p>
                          <p>IDORA is provided “as is”.<br/>We are not liable for:<br/>Business losses<br/>Data loss due to third-party services<br/>Downtime or technical issues beyond reasonable control</p>
                          <p><b>8. Termination</b></p>
                          <p>We may suspend or terminate services:<br/>For violations of these terms<br/>For legal or security reasons<br/>You may stop using the service at any time.</p>
                          <p><b>9. Governing Law</b></p>
                          <p>These Terms are governed by the laws of Sri Lanka.</p>
                          <p><b>10. Changes to Terms</b></p>
                          <p>We may update these Terms. Continued use means acceptance of changes.</p>
                          <p><b>11. Contact</b></p>
                          <p>Katisa Technologies<br/>📧 katisatechnologies@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  )}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-white/70">
              <li>WhatsApp: +94 70 120 0064</li>
              <li>Email: hello@idora.lk</li>
              <li>Colombo, Sri Lanka</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2025 IDORA. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-white transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/idora_app/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="text-white/60 hover:text-white transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
