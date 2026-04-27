import Link from 'next/link';
import { CheckCircle, Shield, Clock, ArrowRight } from 'lucide-react';

const highlights = [
  { icon: CheckCircle, text: 'All Vehicle Types' },
  { icon: Shield, text: 'Insurance Friendly' },
  { icon: Clock, text: 'Fast Turnaround' },
];

export default function AboutPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-4">
              Why Choose <span className="text-[#D32F2F]">Manx Autoglazing</span>?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              With years of experience serving the Isle of Man community, we deliver 
              exceptional autoglass services with a focus on safety, quality, and customer satisfaction.
            </p>
            
            <div className="space-y-3 mb-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-[#D32F2F] p-2 rounded-lg">
                      <Icon className="text-white" size={18} />
                    </div>
                    <span className="text-[#1F1F1F] font-medium">{item.text}</span>
                  </div>
                );
              })}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#D32F2F] font-semibold hover:gap-3 transition-all"
            >
              Learn More About Us
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="bg-[#2A2A2A] p-8 rounded-lg">
            <div className="text-center">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <p className="text-[#D32F2F] text-4xl font-bold mb-2">500+</p>
                  <p className="text-gray-300 text-sm">Jobs Completed</p>
                </div>
                <div>
                  <p className="text-[#D32F2F] text-4xl font-bold mb-2">10+</p>
                  <p className="text-gray-300 text-sm">Years Experience</p>
                </div>
                <div>
                  <p className="text-[#D32F2F] text-4xl font-bold mb-2">100%</p>
                  <p className="text-gray-300 text-sm">Satisfaction</p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-700">
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-[#D32F2F]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 italic text-sm">
                  &quot;Outstanding service! Highly recommend.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
