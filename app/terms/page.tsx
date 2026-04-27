import Header from '@/components/Header';
import AnnouncementBar from '@/components/AnnouncementBar';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Terms & Conditions | Manx Autoglazing",
  description: "Terms and conditions for Manx Autoglazing services on the Isle of Man.",
};

export default function TermsPage() {
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
              Terms & <span className="text-[#D32F2F]">Conditions</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Please read our terms and conditions carefully
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
                These Terms and Conditions govern your use of services provided by Manx Autoglazing, 
                a business operating from Unit 22, Isle of Man Business Park, The Cooil, Braddan, Isle of Man. 
                By engaging our services, you agree to be bound by these terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4">2. Services</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Manx Autoglazing provides autoglass repair and replacement services including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                <li>Windscreen repairs and replacements</li>
                <li>Side and rear window repairs</li>
                <li>Sunroof and panoramic roof repairs</li>
                <li>Custom autoglass solutions</li>
                <li>Insurance claims assistance</li>
                <li>Fleet services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4">3. Quotations and Pricing</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All quotations are valid for 30 days from the date of issue unless otherwise stated. 
                Prices are subject to change without notice. Final pricing will be confirmed before work commences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4">4. Payment Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Payment is due upon completion of work unless alternative arrangements have been agreed in writing. 
                We accept cash, card payments, and bank transfers. For insurance claims, we will liaise directly 
                with your insurance provider where applicable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4">5. Warranty</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We provide a warranty on all workmanship and materials used. The warranty period varies depending 
                on the type of service provided and will be specified at the time of service. This warranty does 
                not cover damage caused by accidents, misuse, or normal wear and tear.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4">6. Cancellations</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Cancellations must be made at least 24 hours before the scheduled appointment. 
                Late cancellations or no-shows may be subject to a cancellation fee.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4">7. Liability</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                While we take every care in performing our services, Manx Autoglazing shall not be liable for 
                any indirect, consequential, or incidental damages arising from the use of our services. 
                Our liability is limited to the cost of the service provided.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4">8. Vehicle Safety</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                After windscreen replacement, we recommend waiting at least one hour before driving your vehicle 
                and avoiding car washes for 24-48 hours to allow adhesives to cure properly. 
                Failure to follow these recommendations may void the warranty.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4">9. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                These Terms and Conditions are governed by and construed in accordance with the laws of the Isle of Man. 
                Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the Isle of Man courts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1F1F1F] mb-4">10. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For any questions regarding these Terms and Conditions, please contact us:
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
