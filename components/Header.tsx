'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Manx Autoglazing Logo"
              width={175}
              height={0}
              style={{ height: 'auto' }}
              className="object-contain"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-[#1F1F1F] hover:text-[#D32F2F] transition-colors font-medium"
            >
              Homepage
            </Link>
            <Link
              href="/about"
              className="text-[#1F1F1F] hover:text-[#D32F2F] transition-colors font-medium"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-[#1F1F1F] hover:text-[#D32F2F] transition-colors font-medium"
            >
              Our Services
            </Link>
            <Link
              href="/faq"
              className="text-[#1F1F1F] hover:text-[#D32F2F] transition-colors font-medium"
            >
              FAQ
            </Link>
            <a
              href="https://www.facebook.com/ManxAutoglazing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1F1F1F] hover:text-[#D32F2F] transition-colors font-medium"
            >
              News
            </a>
            <a
              href="https://www.trustpilot.com/review/manxautoglazing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1F1F1F] hover:text-[#D32F2F] transition-colors font-medium"
            >
              Reviews
            </a>
            <Link
              href="/contact"
              className="bg-[#D32F2F] text-white px-6 py-2 rounded-md hover:bg-[#B71C1C] transition-colors font-medium"
            >
              Get a Quote
            </Link>
          </nav>

          <button
            className="lg:hidden flex items-center gap-2 text-[#1F1F1F] font-medium bg-[#D32F2F] text-white px-4 py-2 rounded-md hover:bg-[#B71C1C] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            <span>{isMobileMenuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </div>

      {/* Full-screen mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black lg:hidden">
          <div className="flex flex-col h-full justify-center items-center">
            {/* Close button - top right */}
            <div className="absolute top-4 right-4">
              <button
                className="flex items-center gap-2 text-white font-medium bg-[#D32F2F] px-4 py-2 rounded-md hover:bg-[#B71C1C] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={24} />
                <span>Close</span>
              </button>
            </div>

            {/* Logo and Navigation - centered together */}
            <div className="flex flex-col items-center px-4">
              {/* Logo */}
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="mb-10">
                <Image
                  src="/logo.png"
                  alt="Manx Autoglazing Logo"
                  width={200}
                  height={0}
                  style={{ height: 'auto' }}
                  className="object-contain"
                  priority
                />
              </Link>

              {/* Navigation links */}
              <nav className="flex flex-col items-center space-y-8">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-bold text-white hover:text-[#D32F2F] transition-colors"
              >
                Homepage
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-bold text-white hover:text-[#D32F2F] transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-bold text-white hover:text-[#D32F2F] transition-colors"
              >
                Our Services
              </Link>
              <Link
                href="/faq"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-bold text-white hover:text-[#D32F2F] transition-colors"
              >
                FAQ
              </Link>
              <a
                href="https://www.facebook.com/ManxAutoglazing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-bold text-white hover:text-[#D32F2F] transition-colors"
              >
                News
              </a>
              <a
                href="https://www.trustpilot.com/review/manxautoglazing.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-bold text-white hover:text-[#D32F2F] transition-colors"
              >
                Reviews
              </a>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-[#D32F2F] text-white px-10 py-5 rounded-md hover:bg-[#B71C1C] transition-colors font-bold text-3xl mt-4"
              >
                Get a Quote
              </Link>
            </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
