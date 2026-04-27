'use client';

import Link from 'next/link';
import { Wrench, Shield, Car, Sun, Sparkles, FileText, Truck, Droplet, Phone, Mail } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Windscreen Repairs',
    description: 'Expert chip and crack repairs to restore your windscreen\'s integrity and safety.',
  },
  {
    icon: Shield,
    title: 'Windscreen Replacements',
    description: 'Full windscreen replacement service using high-quality glass for all vehicle makes.',
  },
  {
    icon: Car,
    title: 'Side & Rear Window Repairs',
    description: 'Professional repair and replacement of side and rear windows for all vehicles.',
  },
  {
    icon: Sun,
    title: 'Sunroof & Panoramic Roof Repairs',
    description: 'Specialized service for sunroofs and panoramic glass roof systems.',
  },
  {
    icon: Sparkles,
    title: 'Custom Autoglass Solutions',
    description: 'Bespoke glazing solutions for classic cars, commercial vehicles, and specialty projects.',
  },
  {
    icon: FileText,
    title: 'Insurance Claims Assistance',
    description: 'We work directly with your insurance provider to make the claims process seamless.',
  },
  {
    icon: Truck,
    title: 'Fleet Services',
    description: 'Dedicated fleet management services for businesses with multiple vehicles.',
  },
  {
    icon: Droplet,
    title: 'Scratch & Glass Polishing',
    description: 'Professional glass polishing to remove minor scratches and restore clarity.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive autoglass solutions for all your vehicle needs
          </p>
        </div>

        <div className="space-y-6">
          {/* First row - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#D32F2F]"
                >
                  <div className="bg-[#D32F2F] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1F1F1F] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Second row - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(3, 6).map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index + 3}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#D32F2F]"
                >
                  <div className="bg-[#D32F2F] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1F1F1F] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Third row - 2 columns centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.slice(6, 8).map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index + 6}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#D32F2F]"
                >
                  <div className="bg-[#D32F2F] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1F1F1F] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-[#2A2A2A] rounded-lg p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Interested in Our Services?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              If you&apos;re interested in any of the services above, we&apos;re here to help. Get in touch with our team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+447624304585"
                className="flex items-center gap-2 bg-[#D32F2F] text-white px-8 py-4 rounded-md text-lg font-bold hover:bg-[#B71C1C] transition-all shadow-lg"
              >
                <Phone size={20} />
                Call Us Now
              </a>
              <a
                href="mailto:info@manxautoglazing.com"
                className="flex items-center gap-2 bg-white text-[#1F1F1F] px-8 py-4 rounded-md text-lg font-bold hover:bg-gray-100 transition-all shadow-lg"
              >
                <Mail size={20} />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
