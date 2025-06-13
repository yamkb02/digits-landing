'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className='fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <button
              onClick={() => scrollToSection('home')}
              className='text-xl font-bold text-black hover:text-gray-700 transition-colors'
            >
              Digits
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-8'>
              <button
                onClick={() => scrollToSection('features')}
                className='text-black hover:text-gray-700 px-3 py-2 text-sm font-medium transition-colors'
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className='text-black hover:text-gray-700 px-3 py-2 text-sm font-medium transition-colors'
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className='text-black hover:text-gray-700 px-3 py-2 text-sm font-medium transition-colors'
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className='text-black hover:text-gray-700 px-3 py-2 text-sm font-medium transition-colors'
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-black hover:text-gray-700 focus:outline-none focus:text-gray-700'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200'>
              <button
                onClick={() => scrollToSection('features')}
                className='text-black hover:text-gray-700 block px-3 py-2 text-sm font-medium w-full text-left transition-colors'
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className='text-black hover:text-gray-700 block px-3 py-2 text-sm font-medium w-full text-left transition-colors'
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className='text-black hover:text-gray-700 block px-3 py-2 text-sm font-medium w-full text-left transition-colors'
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className='text-black hover:text-gray-700 block px-3 py-2 text-sm font-medium w-full text-left transition-colors'
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
