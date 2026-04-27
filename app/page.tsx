import Header from '@/components/Header';
import AnnouncementBar from '@/components/AnnouncementBar';
import Hero from '@/components/Hero';
import ServicesPreview from '@/components/ServicesPreview';
import AboutPreview from '@/components/AboutPreview';
import Reviews from '@/components/Reviews';
import ContactPreview from '@/components/ContactPreview';
import LocationMap from '@/components/LocationMap';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <AnnouncementBar />
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <Reviews />
      <ContactPreview />
      <LocationMap />
      <Footer />
    </div>
  );
}
