import Header from '@/components/Header';
import AnnouncementBar from '@/components/AnnouncementBar';
import Services from '@/components/Services';
import LocationMap from '@/components/LocationMap';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Our Services | Manx Autoglazing",
  description: "Comprehensive autoglass services including windscreen repairs, replacements, custom glazing, and more on the Isle of Man.",
};

export default function ServicesPage() {
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
