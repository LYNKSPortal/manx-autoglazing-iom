import Header from '@/components/Header';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Privacy Policy | Manx Autoglazing",
  description: "Privacy policy for Manx Autoglazing - how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <AnnouncementBar />
      <div>
        <div className="relative py-16 mb-0 overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("/jumper-with-logo.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.4)',
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy <span className="text-[#D32F2F]">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              How we protect and handle your personal information
            </p>
          </div>
        </div>
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Manx Autoglazing ("we", "our", "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you use our services or visit our website. This policy complies with applicable Isle of Man 
                data protection legislation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4">2. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, postal address</li>
                <li><strong>Vehicle Information:</strong> Vehicle registration, make, model, and details of service required</li>
                <li><strong>Payment Information:</strong> Billing details and payment card information (processed securely through third-party payment processors)</li>
                <li><strong>Insurance Information:</strong> Insurance provider details and policy information when applicable</li>
                <li><strong>Communication Records:</strong> Records of correspondence, quotes, and service history</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>To provide and maintain our autoglass services</li>
                <li>To process quotes and bookings</li>
                <li>To communicate with you about appointments and services</li>
                <li>To process payments and manage billing</li>
                <li>To handle insurance claims on your behalf</li>
                <li>To maintain service records and warranty information</li>
                <li>To improve our services and customer experience</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4">4. Legal Basis for Processing</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We process your personal information based on:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li><strong>Contract Performance:</strong> To fulfill our service obligations to you</li>
                <li><strong>Legitimate Interests:</strong> To operate and improve our business</li>
                <li><strong>Legal Compliance:</strong> To meet regulatory and legal requirements</li>
                <li><strong>Consent:</strong> Where you have given explicit permission for specific uses</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4">5. Information Sharing</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li><strong>Insurance Companies:</strong> When processing claims on your behalf</li>
                <li><strong>Payment Processors:</strong> To process payments securely</li>
                <li><strong>Service Providers:</strong> Third parties who assist in our business operations</li>
                <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell or rent your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4">6. Data Security</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                over the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4">7. Data Retention</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this 
                Privacy Policy, unless a longer retention period is required by law. Service records and warranty 
                information are typically retained for the duration of the warranty period plus any applicable 
                statutory limitation periods.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4">8. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Under Isle of Man data protection law, you have the following rights:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li><strong>Right to Access:</strong> Request copies of your personal information</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate information</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal information</li>
                <li><strong>Right to Restrict Processing:</strong> Request limitation of how we use your data</li>
                <li><strong>Right to Data Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Right to Object:</strong> Object to certain types of processing</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                To exercise any of these rights, please contact us using the details provided below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4">9. Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our website may use cookies to enhance user experience. You can control cookie settings through 
                your browser preferences. Disabling cookies may affect the functionality of our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4">10. Third-Party Links</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our website may contain links to third-party websites (such as Facebook and Trustpilot). 
                We are not responsible for the privacy practices of these external sites. 
                We encourage you to review their privacy policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4">11. Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our services are not directed to individuals under the age of 18. 
                We do not knowingly collect personal information from children.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4">12. Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page 
                with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4">13. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your data protection rights, 
                please contact us:
              </p>
              <ul className="list-none text-gray-600 space-y-2">
                <li><strong>Email:</strong> info@manxautoglazing.com</li>
                <li><strong>Phone:</strong> +44 7624 304585</li>
                <li><strong>Address:</strong> Unit 22, Isle of Man Business Park, The Cooil, Braddan, Isle of Man</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
