import Header from '@/components/Header';
import AnnouncementBar from '@/components/AnnouncementBar';
import About from '@/components/About';
import LocationMap from '@/components/LocationMap';
import Footer from '@/components/Footer';

export const metadata = {
  title: "About Us",
  description: "Learn more about Manx Autoglazing and our commitment to quality autoglass services on the Isle of Man. 10+ years experience, 500+ jobs completed, 100% customer satisfaction.",
  keywords: "about Manx Autoglazing, autoglass company Isle of Man, windscreen experts, certified technicians",
  openGraph: {
    title: "About Us | Manx Autoglazing",
    description: "Learn more about Manx Autoglazing and our commitment to quality autoglass services on the Isle of Man.",
    url: "https://manxautoglazing.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <AnnouncementBar />
      <div>
        <div className="relative py-16 overflow-hidden">
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
              About <span className="text-[#D32F2F]">Manx Autoglazing</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Your local, trusted autoglass experts serving the Isle of Man community 
              with dedication, professionalism, and a commitment to excellence.
            </p>
          </div>
        </div>
        <About />
        <LocationMap />
      </div>
      <Footer />
    </div>
  );
}
