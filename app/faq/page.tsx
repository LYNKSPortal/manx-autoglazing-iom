import Header from '@/components/Header';
import AnnouncementBar from '@/components/AnnouncementBar';
import FAQ from '@/components/FAQ';
import LocationMap from '@/components/LocationMap';
import Footer from '@/components/Footer';

export const metadata = {
  title: "FAQ | Manx Autoglazing",
  description: "Frequently asked questions about windscreen repairs, replacements, and autoglass services on the Isle of Man.",
};

export default function FAQPage() {
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
