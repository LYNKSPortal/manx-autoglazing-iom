import { MapPin } from 'lucide-react';

export default function LocationMap() {
  return (
    <section className="py-16 bg-[#D32F2F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            We Are Located <span className="text-black">Here</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-lg text-white">
            <MapPin className="text-white" size={24} />
            <p>Unit 22, Isle of Man Business Park, The Cooil, Braddan</p>
          </div>
        </div>

        <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=54.152806,-4.532167&hl=en&z=15&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
