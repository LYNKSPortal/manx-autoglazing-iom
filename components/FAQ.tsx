'use client';

import { useState } from 'react';
import { ChevronDown, Phone, Mail } from 'lucide-react';

const faqs = [
  {
    question: "Can a windscreen chip be repaired or does it need replacing?",
    answer: "Most chips smaller than a £2 coin can be repaired if they're not directly in the driver's line of vision. However, if the chip is larger, has multiple cracks, or is in a critical viewing area, a full replacement is recommended for safety."
  },
  {
    question: "How long does a windscreen repair take?",
    answer: "A typical windscreen chip repair takes approximately 30-45 minutes. A full windscreen replacement usually takes 1-2 hours, depending on the vehicle. We'll provide a more accurate timeframe when you book your appointment."
  },
  {
    question: "Do you work with insurance companies?",
    answer: "Yes! We primarily work with insurance companies and have partnerships with all major insurance providers on the Isle of Man. Most comprehensive car insurance policies cover windscreen damage, and we can handle the entire claim process for you. We also welcome independent customers who prefer to pay directly. When filling out our quote form, please let us know which insurance company you're with so we can check if everything's good to go and streamline the process for you."
  },
  {
    question: "How soon after repair can I drive my vehicle?",
    answer: "For chip repairs, you can typically drive immediately after the resin has cured (about 30 minutes). For full replacements, we recommend waiting at least 1 hour before driving, and avoiding car washes for 24-48 hours to allow the adhesive to fully cure."
  },
  {
    question: "What causes windscreen damage?",
    answer: "Common causes include flying stones or debris from other vehicles, extreme temperature changes, accidents, vandalism, and stress from existing damage. Even small chips can spread quickly due to temperature fluctuations or road vibrations."
  },
  {
    question: "Is it safe to drive with a cracked windscreen?",
    answer: "It depends on the severity and location of the crack. Small chips away from the driver's view may be safe temporarily, but any crack can compromise structural integrity and visibility. We recommend getting it inspected as soon as possible to ensure your safety."
  },
  {
    question: "Do you offer mobile windscreen repair services?",
    answer: "Yes! We can come to your location on the Isle of Man, whether it's your home, workplace, or another convenient spot. This saves you time and allows you to continue with your day while we handle the repair."
  },
  {
    question: "What type of glass do you use for replacements?",
    answer: "We use only high-quality OEM (Original Equipment Manufacturer) or OEM-equivalent glass that meets or exceeds safety standards. All our glass comes with a warranty and is designed to fit your specific vehicle make and model perfectly."
  },
  {
    question: "Will a repaired chip be completely invisible?",
    answer: "While modern repair techniques are highly effective, a small mark may still be visible upon close inspection. However, the repair will restore the structural integrity of the windscreen and prevent the chip from spreading, which is the primary goal."
  },
  {
    question: "How much does windscreen repair or replacement cost?",
    answer: "Costs vary depending on the type of damage, vehicle make and model, and whether it's a repair or replacement. Chip repairs are generally more affordable than full replacements. Contact us for a free, no-obligation quote specific to your situation."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#D32F2F] transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors text-left"
              >
                <h3 className="text-lg font-semibold text-[#1F1F1F] pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`text-[#D32F2F] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2 bg-gray-50">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#2A2A2A] rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have More Questions?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            If you have any other questions that we haven't covered above, 
            we're here to help. Get in touch with our team today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+447624304585"
              className="inline-flex items-center justify-center gap-2 bg-[#D32F2F] text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-[#B71C1C] transition-all transform hover:scale-105 shadow-lg"
            >
              <Phone size={20} />
              Call Us Now
            </a>
            <a
              href="mailto:info@manxautoglazing.com"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1F1F1F] px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              <Mail size={20} />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
