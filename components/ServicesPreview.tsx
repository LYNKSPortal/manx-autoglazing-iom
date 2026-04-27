import Link from 'next/link';
import { Wrench, Shield, Car, ArrowRight } from 'lucide-react';

const featuredServices = [
  {
    icon: Wrench,
    title: 'Windscreen Repairs',
    description: 'Expert chip and crack repairs to restore your windscreen.',
  },
  {
    icon: Shield,
    title: 'Windscreen Replacements',
    description: 'Full replacement service using high-quality glass.',
  },
  {
    icon: Car,
    title: 'Side & Rear Windows',
    description: 'Professional repair and replacement services.',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-3">
            What We Do
          </h2>
          <p className="text-lg text-gray-600">
            Professional autoglass services for all your vehicle needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featuredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-[#D32F2F]"
              >
                <div className="bg-[#D32F2F] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#D32F2F] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-[#B71C1C] transition-all transform hover:scale-105 shadow-lg"
          >
            View All Services
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
