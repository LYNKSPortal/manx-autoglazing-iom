import { Star } from 'lucide-react';
import Image from 'next/image';

const reviews = [
  {
    name: "Kelly",
    location: "IM",
    date: "Aug 9, 2025",
    rating: 5,
    title: "Excellent service!",
    text: "Excellent service! Really helpful, great communication and fit us in and sorted quickly as we were going away with the car.",
  },
  {
    name: "Oliver Shearer",
    location: "IM",
    date: "Feb 26, 2025",
    rating: 5,
    title: "Great service",
    text: "Great service, quick and reliable",
  },
];

export default function Reviews() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F1F1F]">
              Customer Reviews
            </h2>
            <a
              href="https://www.trustpilot.com/review/manxautoglazing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image
                src="https://cdn.trustpilot.net/brand-assets/4.1.0/logo-black.svg"
                alt="Trustpilot"
                width={120}
                height={30}
                className="object-contain"
              />
            </a>
          </div>
          <p className="text-xl text-gray-600">
            See what our customers have to say about our service
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#D32F2F]"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating ? 'text-[#00B67A] fill-[#00B67A]' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <h3 className="text-xl font-bold text-[#1F1F1F] mb-2">
                {review.title}
              </h3>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                {review.text}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div>
                  <p className="font-semibold text-[#1F1F1F]">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
                <p className="text-sm text-gray-500">(Manx Customer)</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.trustpilot.com/review/manxautoglazing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#D32F2F] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-[#B71C1C] transition-all transform hover:scale-105 shadow-lg"
          >
            View All Reviews on Trustpilot
          </a>
        </div>
      </div>
    </section>
  );
}
