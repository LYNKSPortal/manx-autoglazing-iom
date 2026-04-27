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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2360.8!2d-4.5!3d54.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDA5JzAwLjAiTiA0wrAzMCcwMC4wIlc!5e0!3m2!1sen!2sim!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Manx Autoglazing Location"
          />
        </div>
      </div>
    </section>
  );
}
