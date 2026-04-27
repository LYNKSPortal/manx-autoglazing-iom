'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicle: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Quote Request from ' + formData.name);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nVehicle: ${formData.vehicle}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:info@manxautoglazing.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-[#1F1F1F] mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#D32F2F] p-3 rounded-lg">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1F1F1F] mb-1">Phone</h4>
                  <a href="tel:+447624304585" className="text-gray-600 hover:text-[#D32F2F] transition-colors">
                    +44 7624 304585
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#D32F2F] p-3 rounded-lg">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1F1F1F] mb-1">Email</h4>
                  <a href="mailto:info@manxautoglazing.com" className="text-gray-600 hover:text-[#D32F2F] transition-colors block">
                    info@manxautoglazing.com
                  </a>
                  <a href="mailto:accounts@manxautoglazing.com" className="text-gray-600 hover:text-[#D32F2F] transition-colors block mt-1">
                    accounts@manxautoglazing.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#D32F2F] p-3 rounded-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1F1F1F] mb-1">WhatsApp</h4>
                  <a href="https://wa.me/447624304585" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#D32F2F] transition-colors">
                    Click here to message us on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#D32F2F] p-3 rounded-lg">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1F1F1F] mb-1">Address</h4>
                  <p className="text-gray-600">
                    Unit 22, Isle of Man Business Park<br />
                    The Cooil, Braddan<br />
                    Isle of Man
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#D32F2F] p-3 rounded-lg">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1F1F1F] mb-1">Opening Hours</h4>
                  <div className="text-gray-600">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 order-1 md:order-2">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#D32F2F]">
              <h3 className="text-2xl font-bold text-[#1F1F1F] mb-6">Request a Quote</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#1F1F1F] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#1F1F1F] mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1F1F1F] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="vehicle" className="block text-sm font-medium text-[#1F1F1F] mb-2">
                  Vehicle Registration *
                </label>
                <input
                  type="text"
                  id="vehicle"
                  name="vehicle"
                  required
                  value={formData.vehicle}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent"
                  placeholder="e.g. MAN 123"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#1F1F1F] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent resize-none"
                  placeholder="Please describe the service you need..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#D32F2F] text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-[#B71C1C] transition-all transform hover:scale-105 shadow-lg"
              >
                Send Quote Request
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
