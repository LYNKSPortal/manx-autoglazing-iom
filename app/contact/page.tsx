import Header from '@/components/Header';
import AnnouncementBar from '@/components/AnnouncementBar';
import Contact from '@/components/Contact';
import LocationMap from '@/components/LocationMap';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Contact Us | Manx Autoglazing",
  description: "Get in touch with Manx Autoglazing. Call +44 7624 304585 or email info@manxautoglazing.com for a free quote.",
};

export default function ContactPage() {
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
              Contact <span className="text-[#D32F2F]">Us</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Get in touch with our team for a free quote or to book your service
            </p>
          </div>
        </div>
        <Contact />
        <LocationMap />
      </div>
      <Footer />
    </div>
  );
}
