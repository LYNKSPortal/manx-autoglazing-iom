import Header from '@/components/Header';
import AnnouncementBar from '@/components/AnnouncementBar';
import Hero from '@/components/Hero';
import ServicesPreview from '@/components/ServicesPreview';
import AboutPreview from '@/components/AboutPreview';
import ContactPreview from '@/components/ContactPreview';
import Reviews from '@/components/Reviews';
import LocationMap from '@/components/LocationMap';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manx Autoglazing | Professional Windscreen Repair & Replacement Isle of Man',
  description: 'Professional windscreen repair and replacement services on the Isle of Man. Expert technicians, insurance-friendly, mobile service available. Free quotes. Call +44 7624 304585.',
  openGraph: {
    title: 'Manx Autoglazing | Isle of Man Windscreen Repair & Replacement',
    description: 'Professional windscreen repair and replacement services on the Isle of Man. Expert technicians, insurance-friendly, mobile service available.',
    url: 'https://manxautoglazing.com',
  },
};

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
