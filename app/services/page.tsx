import Header from '@/components/Header';
import AnnouncementBar from '@/components/AnnouncementBar';
import Services from '@/components/Services';
import LocationMap from '@/components/LocationMap';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata = {
  title: "Our Services",
  description: "Comprehensive autoglass solutions for all your vehicle needs on the Isle of Man. Windscreen repair, replacement, chip repair, insurance claims, mobile service. Expert technicians with 10+ years experience.",
  keywords: "windscreen repair, windscreen replacement, chip repair, autoglass services, mobile windscreen repair, insurance claims, Isle of Man",
  openGraph: {
    title: "Our Services | Manx Autoglazing",
    description: "Comprehensive autoglass solutions for all your vehicle needs on the Isle of Man.",
    url: "https://manxautoglazing.com/services",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Service",
      "name": "Windscreen Repair",
      "description": "Professional windscreen chip and crack repair services. Quick, affordable, and prevents damage from spreading.",
      "provider": {
        "@type": "AutoRepair",
        "name": "Manx Autoglazing"
      },
      "areaServed": "Isle of Man"
    },
    {
      "@type": "Service",
      "name": "Windscreen Replacement",
      "description": "Complete windscreen replacement using OEM quality glass. Professional installation with warranty.",
      "provider": {
        "@type": "AutoRepair",
        "name": "Manx Autoglazing"
      },
      "areaServed": "Isle of Man"
    },
    {
      "@type": "Service",
      "name": "Mobile Service",
      "description": "Convenient mobile windscreen repair and replacement at your location on the Isle of Man.",
      "provider": {
        "@type": "AutoRepair",
        "name": "Manx Autoglazing"
      },
      "areaServed": "Isle of Man"
    },
    {
      "@type": "Service",
      "name": "Insurance Claims",
      "description": "We handle insurance claims for all major providers. Hassle-free windscreen repair and replacement.",
      "provider": {
        "@type": "AutoRepair",
        "name": "Manx Autoglazing"
      },
      "areaServed": "Isle of Man"
    }
  ]
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
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
              Our <span className="text-[#D32F2F]">Services</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              From minor repairs to complete replacements, we offer comprehensive autoglass 
              solutions for all vehicle types. Our expert technicians use the latest techniques 
              and highest quality materials to ensure your safety on the road.
            </p>
          </div>
        </div>
        <Services />
        <LocationMap />
      </div>
      <Footer />
    </div>
  );
}
