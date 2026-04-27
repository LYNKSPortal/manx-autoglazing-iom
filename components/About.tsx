'use client';

import { CheckCircle, Shield, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    title: 'All Vehicle Types',
    description: 'From cars to vans, we service all makes and models',
  },
  {
    icon: Shield,
    title: 'Insurance Friendly',
    description: 'We work with all major insurance providers',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Quick, efficient service to get you back on the road',
  },
  {
    icon: Award,
    title: 'Expert Technicians',
    description: 'Highly trained professionals with years of experience',
  },
];

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading and Description */}
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] mb-6">
            Why Choose <span className="text-[#D32F2F]">Manx Autoglazing</span>?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            With years of experience serving the Isle of Man community, we pride ourselves on 
            delivering exceptional autoglass services with a focus on safety, quality, and customer satisfaction.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our team of certified technicians uses the latest techniques and highest quality materials 
            to ensure your vehicle&apos;s glass is restored to manufacturer standards. We understand the 
            importance of your vehicle&apos;s safety and work diligently to provide reliable, professional service.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="bg-[#D32F2F] p-4 rounded-full mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-[#1F1F1F] font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonial and Stats - Side by Side */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Testimonial */}
          <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-[#D32F2F] shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#D32F2F]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[#1F1F1F] font-bold text-lg">5.0</span>
            </div>
            <p className="text-gray-700 italic text-lg leading-relaxed mb-4">
              &quot;Outstanding service! The team was professional, efficient, and my windscreen 
              looks perfect. Highly recommend Manx Autoglazing.&quot;
            </p>
            <p className="text-gray-600 font-medium">- Local Customer</p>
          </div>

          {/* Stats */}
          <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-[#D32F2F] shadow-md">
            <h3 className="text-[#1F1F1F] font-bold text-2xl mb-6 text-center">Trusted by Islanders</h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-[#D32F2F] text-4xl font-bold mb-2">500+</p>
                <p className="text-gray-600 text-sm font-medium">Jobs Completed</p>
              </div>
              <div className="text-center">
                <p className="text-[#D32F2F] text-4xl font-bold mb-2">10+</p>
                <p className="text-gray-600 text-sm font-medium">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-[#D32F2F] text-4xl font-bold mb-2">100%</p>
                <p className="text-gray-600 text-sm font-medium">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
