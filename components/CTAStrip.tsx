'use client';

import { Mail } from 'lucide-react';

export default function CTAStrip() {
  return (
    <section className="bg-[#D32F2F] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Get a Free Quote Today
            </h2>
            <p className="text-white/90 text-lg">
              Fast, professional service for all your autoglass needs
            </p>
          </div>
          <a
            href="mailto:info@manxautoglazing.com"
            className="bg-white text-[#D32F2F] px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 whitespace-nowrap"
          >
            <Mail size={20} />
            Email Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
