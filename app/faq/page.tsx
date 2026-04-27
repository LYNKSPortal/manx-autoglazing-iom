import Header from '@/components/Header';
import AnnouncementBar from '@/components/AnnouncementBar';
import FAQ from '@/components/FAQ';
import LocationMap from '@/components/LocationMap';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions about windscreen repair and replacement on the Isle of Man. Learn about our services, insurance claims, mobile repairs, and more.",
  keywords: "windscreen FAQ, autoglass questions, insurance claims, mobile repair Isle of Man, windscreen repair cost",
  openGraph: {
    title: "FAQ | Manx Autoglazing",
    description: "Frequently asked questions about our autoglass services on the Isle of Man.",
    url: "https://manxautoglazing.com/faq",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can a windscreen chip be repaired or does it need replacing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most chips smaller than a £2 coin can be repaired if they're not directly in the driver's line of vision. However, if the chip is larger, has multiple cracks, or is in a critical viewing area, a full replacement is recommended for safety."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a windscreen repair take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A typical windscreen chip repair takes approximately 30-45 minutes. A full windscreen replacement usually takes 1-2 hours, depending on the vehicle."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with insurance companies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We primarily work with insurance companies and have partnerships with all major insurance providers on the Isle of Man. Most comprehensive car insurance policies cover windscreen damage, and we can handle the entire claim process for you."
      }
    },
    {
      "@type": "Question",
      "name": "How soon after repair can I drive my vehicle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For chip repairs, you can typically drive immediately after the resin has cured (about 30 minutes). For full replacements, we recommend waiting at least 1 hour before driving."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer mobile windscreen repair services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We can come to your location on the Isle of Man, whether it's your home, workplace, or another convenient spot."
      }
    },
    {
      "@type": "Question",
      "name": "How much does windscreen repair or replacement cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Costs vary depending on the type of damage, vehicle make and model, and whether it's a repair or replacement. Contact us for a free, no-obligation quote."
      }
    }
  ]
};

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="beforeInteractive"
      />
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
              Frequently Asked <span className="text-[#D32F2F]">Questions</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Find answers to common questions about our autoglass services
            </p>
          </div>
        </div>
        <FAQ />
        <LocationMap />
      </div>
      <Footer />
    </div>
  );
}
