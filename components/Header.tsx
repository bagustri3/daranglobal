
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className={`text-2xl font-bold transition-all duration-300 hover:scale-105 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            <span className="font-['Pacifico'] transform transition-all duration-300 hover:text-red-600">
              Daran Global
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/companies', label: 'Companies' },
              { href: '/certifications', label: 'Certifications' },
              { href: '/contact', label: 'Contact' }
            ].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-all duration-300 hover:scale-105 relative group ${
                  isScrolled ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-400'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
              isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
              }`}></span>
            </div>
          </button>
        </div>

        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`pt-4 pb-2 space-y-2 ${isScrolled ? 'bg-white' : 'bg-black/20 backdrop-blur-md'} rounded-lg mt-4`}>
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/companies', label: 'Companies' },
              { href: '/certifications', label: 'Certifications' },
              { href: '/contact', label: 'Contact' }
            ].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 font-medium transition-all duration-300 hover:scale-105 transform ${
                  isScrolled ? 'text-gray-700 hover:text-red-600 hover:bg-gray-50' : 'text-white hover:text-red-400 hover:bg-white/10'
                } rounded-lg animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
