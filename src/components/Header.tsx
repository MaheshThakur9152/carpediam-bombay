import React, { useState, useEffect } from 'react';
import { useStore } from '../context/StoreContext';
import { Search, ShoppingBag, Menu, X, MapPin, User } from 'lucide-react';
import { CarpediamLogo } from './CarpediamLogo';

export const Header: React.FC = () => {
  const {
    cartCount,
    setIsCartOpen,
    setIsSearchOpen,
    navigateTo,
    route
  } = useStore();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  const isHome = route === '/' || route === '';
  const isTransparent = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'GIFTS', path: '/gifts', mega: null },
    { label: 'JEWELRY', path: '/jewelry', mega: 'jewelry' },
    { label: 'HIGH JEWELRY', path: '/jewelry', mega: null },
    { label: 'LOVE & CELEBRATION', path: '/love-engagement', mega: 'love' },
    { label: 'WATCHES', path: '/watches', mega: null },
    { label: 'HOME', path: '/home', mega: null },
    { label: 'ACCESSORIES', path: '/accessories', mega: null },
  ];

  return (
    <header
      className={`w-full z-40 transition-all duration-300 ${
        isTransparent
          ? 'absolute top-0 left-0 bg-transparent text-white'
          : 'sticky top-0 bg-white text-black shadow-xs border-b border-neutral-100'
      }`}
    >
      {/* Top Utility Row */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 pt-3 pb-1 flex items-center justify-between text-[11px] font-medium tracking-[0.18em] uppercase">
        {/* Left Utilities */}
        <div className="flex items-center space-x-6">
          <button
            onClick={() => navigateTo('/stores')}
            className="flex items-center space-x-1.5 hover:opacity-70 transition-opacity"
            title="Find a Store"
          >
            <MapPin className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center space-x-1.5 hover:opacity-70 transition-opacity"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Search</span>
          </button>
        </div>

        {/* Center Logo */}
        <div className="text-center flex-1 mx-4 flex justify-center items-center">
          <button
            onClick={() => navigateTo('/')}
            className="inline-flex items-center justify-center group focus:outline-none"
            aria-label="Carpediam Bombay Home"
          >
            <CarpediamLogo
              className={`transition-all duration-300 ${
                isScrolled ? 'h-7 sm:h-8 w-auto' : 'h-8 sm:h-10 lg:h-11 w-auto'
              }`}
            />
          </button>
        </div>

        {/* Right Utilities */}
        <div className="flex items-center space-x-5 sm:space-x-6">
          <button
            onClick={() => navigateTo('/stores')}
            className="hidden md:inline hover:opacity-70 transition-opacity"
          >
            Contact Us
          </button>
          <button
            onClick={() => navigateTo('/favorites')}
            className="hover:opacity-70 transition-opacity"
            title="Account & Wishlist"
          >
            <User className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative hover:opacity-70 transition-opacity"
            aria-label="Shopping bag"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#81D8D0] text-[#002a2c] text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-1 hover:opacity-70 transition-opacity"
            aria-label="Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Navigation Bar (Desktop) */}
      <nav className="hidden lg:block pb-3 pt-2">
        <div className="max-w-[1440px] mx-auto px-6 flex justify-center items-center space-x-7 xl:space-x-8 text-[11px] tracking-[0.18em] font-normal uppercase">
          {navLinks.map(link => (
            <div
              key={link.label}
              className="relative group py-1"
              onMouseEnter={() => link.mega && setActiveMegaMenu(link.mega)}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button
                onClick={() => navigateTo(link.path)}
                className={`transition-opacity hover:opacity-60 ${
                  route.startsWith(link.path) && link.path !== '/' ? 'font-semibold' : ''
                }`}
              >
                {link.label}
              </button>

              {/* Mega Menu Dropdown */}
              {activeMegaMenu === link.mega && link.mega === 'jewelry' && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-screen max-w-5xl bg-white text-black shadow-2xl border-t border-neutral-100 p-8 grid grid-cols-4 gap-8 z-50 text-left normal-case tracking-normal">
                  <div>
                    <h4 className="font-serif text-sm tracking-wider uppercase border-b border-neutral-200 pb-2 mb-3 text-neutral-900 font-medium">
                      Categories
                    </h4>
                    <ul className="space-y-2 text-xs text-neutral-600">
                      <li>
                        <button
                          onClick={() => { setActiveMegaMenu(null); navigateTo('/jewelry/necklaces-pendants'); }}
                          className="hover:text-[#008080] hover:underline"
                        >
                          Necklaces & Pendants
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => { setActiveMegaMenu(null); navigateTo('/jewelry/bracelets'); }}
                          className="hover:text-[#008080] hover:underline"
                        >
                          Bracelets
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => { setActiveMegaMenu(null); navigateTo('/jewelry/rings'); }}
                          className="hover:text-[#008080] hover:underline"
                        >
                          Rings
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => { setActiveMegaMenu(null); navigateTo('/jewelry/earrings'); }}
                          className="hover:text-[#008080] hover:underline"
                        >
                          Earrings
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => { setActiveMegaMenu(null); navigateTo('/jewelry'); }}
                          className="hover:text-[#008080] hover:underline font-semibold"
                        >
                          View All Fine Jewelry
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-serif text-sm tracking-wider uppercase border-b border-neutral-200 pb-2 mb-3 text-neutral-900 font-medium">
                      Featured Collections
                    </h4>
                    <ul className="space-y-2 text-xs text-neutral-600">
                      <li>
                        <button onClick={() => { setActiveMegaMenu(null); navigateTo('/jewelry/necklaces-pendants'); }} className="hover:text-[#008080]">
                          Carpediam HardWear
                        </button>
                      </li>
                      <li>
                        <button onClick={() => { setActiveMegaMenu(null); navigateTo('/jewelry/bracelets'); }} className="hover:text-[#008080]">
                          Carpediam T
                        </button>
                      </li>
                      <li>
                        <button onClick={() => { setActiveMegaMenu(null); navigateTo('/jewelry/rings'); }} className="hover:text-[#008080]">
                          Carpediam Knot
                        </button>
                      </li>
                      <li>
                        <button onClick={() => { setActiveMegaMenu(null); navigateTo('/jewelry/rings'); }} className="hover:text-[#008080]">
                          Carpediam Lock
                        </button>
                      </li>
                      <li>
                        <button onClick={() => { setActiveMegaMenu(null); navigateTo('/jewelry/rings'); }} className="hover:text-[#008080]">
                          Jean Schlumberger
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div className="col-span-2 grid grid-cols-2 gap-4">
                    <div
                      onClick={() => { setActiveMegaMenu(null); navigateTo('/jewelry/necklaces-pendants'); }}
                      className="cursor-pointer group/card overflow-hidden bg-neutral-50 p-2 border border-neutral-100"
                    >
                      <img
                        src="/images/img_26.jpg"
                        alt="Carpediam HardWear"
                        className="w-full h-32 object-cover transition-transform duration-500 group-hover/card:scale-105"
                      />
                      <p className="mt-2 text-xs font-serif font-medium text-center">HardWear by Carpediam</p>
                      <span className="block text-[10px] tracking-widest uppercase text-neutral-500 text-center">Discover</span>
                    </div>

                    <div
                      onClick={() => { setActiveMegaMenu(null); navigateTo('/product/smile-pendant-gold'); }}
                      className="cursor-pointer group/card overflow-hidden bg-neutral-50 p-2 border border-neutral-100"
                    >
                      <img
                        src="/images/img_29.jpg"
                        alt="Carpediam T Smile"
                        className="w-full h-32 object-cover transition-transform duration-500 group-hover/card:scale-105"
                      />
                      <p className="mt-2 text-xs font-serif font-medium text-center">Carpediam T Smile</p>
                      <span className="block text-[10px] tracking-widest uppercase text-neutral-500 text-center">Shop Now</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Mega Menu for Love & Celebration */}
              {activeMegaMenu === link.mega && link.mega === 'love' && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-screen max-w-5xl bg-white text-black shadow-2xl border-t border-neutral-100 p-8 grid grid-cols-4 gap-8 z-50 text-left normal-case tracking-normal">
                  <div>
                    <h4 className="font-serif text-sm tracking-wider uppercase border-b border-neutral-200 pb-2 mb-3 text-neutral-900 font-medium">
                      Engagement Rings
                    </h4>
                    <ul className="space-y-2 text-xs text-neutral-600">
                      <li>
                        <button onClick={() => { setActiveMegaMenu(null); navigateTo('/product/carpediam-setting-solitaire'); }} className="hover:text-[#008080]">
                          The Carpediam® Setting
                        </button>
                      </li>
                      <li>
                        <button onClick={() => { setActiveMegaMenu(null); navigateTo('/product/carpediam-true-ring'); }} className="hover:text-[#008080]">
                          Carpediam True®
                        </button>
                      </li>
                      <li>
                        <button onClick={() => { setActiveMegaMenu(null); navigateTo('/product/carpediam-soleste-halo'); }} className="hover:text-[#008080]">
                          Carpediam Soleste®
                        </button>
                      </li>
                      <li>
                        <button onClick={() => { setActiveMegaMenu(null); navigateTo('/product/sixteen-stone-ring'); }} className="hover:text-[#008080]">
                          Sixteen Stone Ring
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-serif text-sm tracking-wider uppercase border-b border-neutral-200 pb-2 mb-3 text-neutral-900 font-medium">
                      Diamond Guides
                    </h4>
                    <ul className="space-y-2 text-xs text-neutral-600">
                      <li>
                        <button onClick={() => { setActiveMegaMenu(null); navigateTo('/product/carpediam-forever-band'); }} className="hover:text-[#008080]">
                          Wedding Bands
                        </button>
                      </li>
                      <li>
                        <button onClick={() => { setActiveMegaMenu(null); navigateTo('/love-engagement'); }} className="hover:text-[#008080]">
                          Diamond Shapes & Education
                        </button>
                      </li>
                      <li>
                        <button onClick={() => { setActiveMegaMenu(null); navigateTo('/stores'); }} className="hover:text-[#008080] font-medium text-[#008080]">
                          Book a Consultation
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div className="col-span-2 grid grid-cols-2 gap-4">
                    <div
                      onClick={() => { setActiveMegaMenu(null); navigateTo('/love-engagement'); }}
                      className="cursor-pointer group/card overflow-hidden bg-neutral-50 p-2 border border-neutral-100"
                    >
                      <img
                        src="/images/img_2.jpg"
                        alt="The Carpediam Setting"
                        className="w-full h-32 object-cover transition-transform duration-500 group-hover/card:scale-105"
                      />
                      <p className="mt-2 text-xs font-serif font-medium text-center">The Carpediam® Setting</p>
                      <span className="block text-[10px] tracking-widest uppercase text-neutral-500 text-center">Explore</span>
                    </div>

                    <div
                      onClick={() => { setActiveMegaMenu(null); navigateTo('/product/sixteen-stone-ring'); }}
                      className="cursor-pointer group/card overflow-hidden bg-neutral-50 p-2 border border-neutral-100"
                    >
                      <img
                        src="/images/img_1.jpg"
                        alt="Sixteen Stone Ring"
                        className="w-full h-32 object-cover transition-transform duration-500 group-hover/card:scale-105"
                      />
                      <p className="mt-2 text-xs font-serif font-medium text-center">Jean Schlumberger</p>
                      <span className="block text-[10px] tracking-widest uppercase text-neutral-500 text-center">Iconic Design</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          <span className="text-neutral-400 select-none">•</span>

          <button
            onClick={() => navigateTo('/stories')}
            className="hover:opacity-60 transition-opacity tracking-[0.18em]"
          >
            World of Carpediam
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex">
          <div className="w-4/5 max-w-sm bg-white text-black h-full shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                <CarpediamLogo className="h-6 w-auto text-black" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-neutral-600 hover:text-black"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-4 space-y-4">
                <button
                  onClick={() => { setMobileMenuOpen(false); navigateTo('/'); }}
                  className="block w-full text-left font-serif text-sm tracking-wider uppercase py-2 border-b border-neutral-100"
                >
                  Home
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); navigateTo('/jewelry/necklaces-pendants'); }}
                  className="block w-full text-left font-serif text-sm tracking-wider uppercase py-2 border-b border-neutral-100"
                >
                  Necklaces & Pendants
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); navigateTo('/jewelry/bracelets'); }}
                  className="block w-full text-left font-serif text-sm tracking-wider uppercase py-2 border-b border-neutral-100"
                >
                  Bracelets
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); navigateTo('/jewelry/rings'); }}
                  className="block w-full text-left font-serif text-sm tracking-wider uppercase py-2 border-b border-neutral-100"
                >
                  Rings
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); navigateTo('/jewelry/earrings'); }}
                  className="block w-full text-left font-serif text-sm tracking-wider uppercase py-2 border-b border-neutral-100"
                >
                  Earrings
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); navigateTo('/love-engagement'); }}
                  className="block w-full text-left font-serif text-sm tracking-wider uppercase py-2 border-b border-neutral-100"
                >
                  Love & Engagement
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); navigateTo('/stores'); }}
                  className="block w-full text-left font-serif text-sm tracking-wider uppercase py-2 border-b border-neutral-100"
                >
                  Store Locator
                </button>
              </div>
            </div>

            <div className="p-6 bg-neutral-50 border-t border-neutral-200 text-xs text-neutral-500 space-y-2">
              <p className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#008080]" />
                <span>Find a Boutique</span>
              </p>
              <p>Client Care: 1-800-843-3269</p>
            </div>
          </div>
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </header>
  );
};
