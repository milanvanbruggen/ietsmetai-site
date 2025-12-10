'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [hoverDirection, setHoverDirection] = useState<'left' | 'right'>('left');
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/proces', label: 'Mijn aanpak' },
    { href: '/over-mij', label: 'Over mij' },
    { href: '/contact', label: 'Contact' },
  ];

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

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
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center z-50">
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
                        ? 'text-blue-pastel dark:text-blue-pastel'
                        : isHovered
                        ? 'text-blue-pastel dark:text-blue-pastel'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-pastel dark:hover:text-blue-pastel'
                    }`}
                  >
                    {item.label}
                    {/* Active underline - animates out when hovering over other items */}
                    {active && (
                      <span 
                        className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r from-green-pastel via-blue-pastel to-orange-pastel rounded-full transition-transform duration-300 ${
                          isOtherHovered ? 'scale-x-0' : 'scale-x-100'
                        } ${hoveredItem && hoveredItem !== item.href ? (hoverDirection === 'left' ? 'origin-right' : 'origin-left') : ''}`}
                      ></span>
                    )}
                    {/* Hover underline - animates in on hover for non-active items */}
                    {!active && (
                      <span 
                        className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r from-green-pastel via-blue-pastel to-orange-pastel rounded-full transition-transform duration-300 ease-out ${
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
              className="md:hidden text-gray-700 dark:text-gray-300 z-50 relative w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                {/* Hamburger to X animation */}
                <span 
                  className={`absolute left-0 top-1 w-6 h-0.5 bg-current transition-all duration-300 ease-out ${
                    isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                  }`}
                />
                <span 
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-current transition-all duration-300 ease-out ${
                    isMenuOpen ? 'opacity-0 scale-x-0' : ''
                  }`}
                />
                <span 
                  className={`absolute left-0 bottom-1 w-6 h-0.5 bg-current transition-all duration-300 ease-out ${
                    isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40 md:hidden"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-xl transition-opacity duration-500 opacity-100"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu content - higher z-index than backdrop */}
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col items-center gap-8 relative">
              {navItems.map((item, index) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative text-3xl font-semibold transition-all duration-500 ease-out ${
                      isMenuOpen 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    } ${
                      active
                        ? 'text-blue-pastel dark:text-blue-pastel'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                    style={{ 
                      transitionDelay: isMenuOpen ? `${150 + index * 75}ms` : '0ms' 
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.label}
                    {/* Underline indicator - same style as desktop */}
                    <span 
                      className={`absolute -bottom-2 left-0 right-0 h-0.5 bg-linear-to-r from-green-pastel via-blue-pastel to-orange-pastel rounded-full transition-transform duration-300 ${
                        active ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>
            
            {/* Decorative gradient circles */}
            <div 
              className={`absolute top-20 right-10 w-64 h-64 rounded-full bg-linear-to-br from-green-pastel/20 to-blue-pastel/20 blur-3xl transition-all duration-700 pointer-events-none ${
                isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
              style={{ transitionDelay: isMenuOpen ? '200ms' : '0ms' }}
            />
            <div 
              className={`absolute bottom-20 left-10 w-48 h-48 rounded-full bg-linear-to-br from-blue-pastel/20 to-orange-pastel/20 blur-3xl transition-all duration-700 pointer-events-none ${
                isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
              style={{ transitionDelay: isMenuOpen ? '300ms' : '0ms' }}
            />
          </div>
        </div>
      )}
    </>
  );
}

