import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function ContactPreview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600">
            Contact us today for a free quote
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <a
            href="tel:+447624304585"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center group"
          >
            <div className="bg-[#D32F2F] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Phone className="text-white" size={24} />
            </div>
            <h3 className="font-semibold text-[#1F1F1F] mb-2">Call Us</h3>
            <p className="text-gray-600">+44 7624 304585</p>
          </a>

          <a
            href="mailto:info@manxautoglazing.com"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center group"
          >
            <div className="bg-[#D32F2F] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail className="text-white" size={24} />
            </div>
            <h3 className="font-semibold text-[#1F1F1F] mb-2">Email Us</h3>
            <p className="text-gray-600 text-sm">info@manxautoglazing.com</p>
          </a>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-[#D32F2F] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-white" size={24} />
            </div>
            <h3 className="font-semibold text-[#1F1F1F] mb-2">Visit Us</h3>
            <p className="text-gray-600 text-sm">Unit 22, Isle of Man Business Park</p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#D32F2F] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-[#B71C1C] transition-all transform hover:scale-105 shadow-lg"
          >
            Request a Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
