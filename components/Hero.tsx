import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function Hero() {

  return (
    <section id="home" className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/people-looking-at-car.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4)',
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Trusted Autoglass Specialists <br />
          <span className="text-[#D32F2F]">on the Isle of Man</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
          Windscreen repairs, replacements, and custom glazing services
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="bg-[#D32F2F] text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-[#B71C1C] transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto text-center"
          >
            Request a Quote
          </Link>
          <a
            href="tel:+447624304585"
            className="bg-white text-[#1F1F1F] px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <Phone size={20} />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
