'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [hoverDirection, setHoverDirection] = useState<'left' | 'right'>('left');
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/proces', label: 'Mijn aanpak' },
    { href: '/boek', label: 'Over mij' },
    { href: '/#contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    if (href.startsWith('/#')) {
      return false; // Hash links zijn nooit actief
    }
    return pathname?.startsWith(href);
  };

  const handleMouseEnter = (href: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX;
    const centerX = rect.left + rect.width / 2;
    
    // Bepaal richting op basis van muispositie
    const direction = mouseX < centerX ? 'left' : 'right';
    setHoverDirection(direction);
    setHoveredItem(href);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/imai-logo-wordmark.png"
              alt="ietsmetai logo"
              width={180}
              height={50}
              priority
              unoptimized
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const active = isActive(item.href);
              const isHovered = hoveredItem === item.href;
              const isOtherHovered = hoveredItem !== null && hoveredItem !== item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={(e) => handleMouseEnter(item.href, e)}
                  onMouseLeave={handleMouseLeave}
                  className={`relative transition-all duration-300 group font-semibold ${
                    active
                      ? 'text-[#5BA3F5] dark:text-[#9BCBFF]'
                      : isHovered
                      ? 'text-[#5BA3F5] dark:text-[#9BCBFF]'
                      : 'text-gray-700 dark:text-gray-300 hover:text-[#5BA3F5] dark:hover:text-[#9BCBFF]'
                  }`}
                >
                  {item.label}
                  {/* Active underline - animates out when hovering over other items */}
                  {active && (
                    <span 
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r from-[#9AD9A0] via-[#9BCBFF] to-[#FFB88C] rounded-full transition-transform duration-300 ${
                        isOtherHovered ? 'scale-x-0' : 'scale-x-100'
                      } ${hoveredItem && hoveredItem !== item.href ? (hoverDirection === 'left' ? 'origin-right' : 'origin-left') : ''}`}
                    ></span>
                  )}
                  {/* Hover underline - animates in on hover for non-active items */}
                  {!active && (
                    <span 
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r from-[#9AD9A0] via-[#9BCBFF] to-[#FFB88C] rounded-full transition-transform duration-300 ease-out ${
                        isHovered 
                          ? 'scale-x-100' 
                          : 'scale-x-0'
                      } ${hoverDirection === 'left' ? 'origin-left' : 'origin-right'}`}
                    ></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block transition-colors pl-3 py-2 rounded-lg font-semibold ${
                    active
                      ? 'text-[#5BA3F5] dark:text-[#9BCBFF] bg-linear-to-r from-[#9AD9A0]/10 to-[#9BCBFF]/10 border-l-4 border-[#9BCBFF]'
                      : 'text-gray-700 dark:text-gray-300 hover:text-[#5BA3F5] dark:hover:text-[#9BCBFF] hover:bg-gray-50 dark:hover:bg-gray-900'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}

