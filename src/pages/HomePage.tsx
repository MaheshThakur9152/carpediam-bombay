import React, { useState, useRef } from 'react';
import { useStore } from '../context/StoreContext';
import { VolumeX, Volume2, Pause, Play } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigateTo } = useStore();

  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const categories = [
    { title: 'NECKLACES & PENDANTS', image: '/images/img_26.jpg', slug: 'necklaces-pendants' },
    { title: 'BRACELETS', image: '/images/img_27.jpg', slug: 'bracelets' },
    { title: 'EARRINGS', image: '/images/img_28.jpg', slug: 'earrings' },
    { title: 'RINGS', image: '/images/img_1.jpg', slug: 'rings' }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section (Full viewport height with floating jewelry piece) */}
      <section className="relative w-full h-[88vh] sm:h-screen min-h-[640px] max-h-[1050px] bg-[#001D21] overflow-hidden flex items-center justify-center">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster="/images/img_26.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Ambient Dark Gradient Vignette */}
        <div className="absolute inset-0 bg-radial from-transparent via-black/25 to-black/60 pointer-events-none" />

        {/* Bottom Center Hero CTA */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
          <button
            onClick={() => navigateTo('/jewelry/necklaces-pendants')}
            className="px-10 py-3 bg-[#E5E5E5]/90 hover:bg-white text-black text-xs uppercase tracking-[0.2em] font-medium transition-all shadow-md backdrop-blur-xs"
          >
            Shop Now
          </button>
        </div>

        {/* Audio / Video Controls in bottom corners */}
        <div className="absolute bottom-6 left-8 z-20 hidden sm:block">
          <button
            onClick={toggleMute}
            className="text-white/80 hover:text-white transition-opacity p-2"
            title="Audio control"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
        <div className="absolute bottom-6 right-8 z-20 hidden sm:block">
          <button
            onClick={togglePlay}
            className="text-white/80 hover:text-white transition-opacity p-2"
            title="Video control"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        </div>
      </section>

      {/* 2. Shop by Category (Clean whitespace with 4 categories) */}
      <section className="py-24 max-w-[1440px] mx-auto px-6 sm:px-12 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-neutral-900 mb-14 tracking-tight">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {categories.map(cat => (
            <div
              key={cat.title}
              onClick={() => navigateTo(`/jewelry/${cat.slug}`)}
              className="cursor-pointer group flex flex-col items-center"
            >
              <div className="aspect-square w-full bg-[#FAFBFB] overflow-hidden border border-neutral-100">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 text-xs uppercase tracking-[0.2em] font-medium text-neutral-900 group-hover:text-[#008080] transition-colors">
                {cat.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Icon Collections (Refined typography + curated collection cards) */}
      <section className="py-20 bg-white border-t border-neutral-100 text-center">
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-neutral-900 tracking-tight">
            Icon Collections
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed max-w-2xl mx-auto">
            For 189 years, Carpediam's iconic collections have helped an ever-changing world speak the ever-changing language of love.
          </p>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
          {/* Knot by Carpediam */}
          <div className="flex flex-col items-center text-center group cursor-pointer" onClick={() => navigateTo('/jewelry/necklaces-pendants')}>
            <div className="aspect-4/3 w-full bg-[#FAFBFB] overflow-hidden border border-neutral-100">
              <img
                src="/images/img_29.jpg"
                alt="Knot by Carpediam"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-6 font-serif text-xl sm:text-2xl font-normal text-neutral-900">
              Knot by Carpediam
            </h3>
            <button className="mt-2 text-[11px] uppercase tracking-widest font-semibold border-b border-black pb-0.5 group-hover:text-[#008080] group-hover:border-[#008080] transition-colors">
              Shop Now
            </button>
          </div>

          {/* T by Carpediam */}
          <div className="flex flex-col items-center text-center group cursor-pointer" onClick={() => navigateTo('/jewelry/bracelets')}>
            <div className="aspect-4/3 w-full bg-[#FAFBFB] overflow-hidden border border-neutral-100">
              <img
                src="/images/img_27.jpg"
                alt="T by Carpediam"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-6 font-serif text-xl sm:text-2xl font-normal text-neutral-900">
              T by Carpediam
            </h3>
            <button className="mt-2 text-[11px] uppercase tracking-widest font-semibold border-b border-black pb-0.5 group-hover:text-[#008080] group-hover:border-[#008080] transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* 5. Most Popular Jewelry Styles */}
      <section className="py-20 bg-[#FAFBFB] border-t border-neutral-100">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-neutral-900 leading-tight">
              Most Popular Jewelry Styles
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              Our most desired designs balance artistic vision with exemplary craftsmanship.
            </p>
            <button
              onClick={() => navigateTo('/jewelry')}
              className="mt-6 inline-block text-[11px] uppercase tracking-widest font-semibold border-b border-black pb-0.5 hover:text-[#008080] hover:border-[#008080] transition-colors"
            >
              Shop Now
            </button>
          </div>

          <div className="order-1 lg:order-2 aspect-4/3 overflow-hidden bg-white border border-neutral-100 cursor-pointer" onClick={() => navigateTo('/jewelry')}>
            <img
              src="/images/img_1.jpg"
              alt="Most Popular Jewelry Styles"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* 6. Introducing Scarves by Carpediam */}
      <section className="py-20 bg-white border-t border-neutral-100">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-4/3 overflow-hidden bg-neutral-100 cursor-pointer" onClick={() => navigateTo('/home')}>
            <img
              src="/images/img_22.webp"
              alt="Introducing Scarves by Carpediam"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-neutral-900 leading-tight">
              Introducing Scarves by Carpediam
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
              Since 1845, Carpediam Bombay has offered exceptional scarves and textiles. Today, each silk creation is handcrafted by artisans in Italy and symbolizes the artistry, exquisite craft and rich heritage that have been synonymous with the House for nearly two centuries.
            </p>
            <button
              onClick={() => navigateTo('/home')}
              className="mt-6 inline-block text-[11px] uppercase tracking-widest font-semibold border-b border-black pb-0.5 hover:text-[#008080] hover:border-[#008080] transition-colors"
            >
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* 7. The Carpediam Experience (3 Service Pillars) */}
      <section className="py-24 bg-white border-t border-neutral-100 text-center">
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-neutral-900 tracking-tight">
            The Carpediam Experience
          </h2>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Pillar 1 */}
          <div className="flex flex-col items-center max-w-sm mx-auto">
            <h3 className="font-serif text-lg font-medium text-neutral-900">
              Book an Appointment
            </h3>
            <p className="mt-3 text-xs text-neutral-600 font-light leading-relaxed min-h-[48px]">
              Master the art of gifting with a one-on-one in-store or virtual appointment with a Carpediam Bombay client advisor.
            </p>
            <button
              onClick={() => navigateTo('/stores')}
              className="mt-4 text-[11px] uppercase tracking-widest font-semibold border-b border-black pb-0.5 hover:text-[#008080] hover:border-[#008080] transition-colors"
            >
              Book an Appointment
            </button>
          </div>

          {/* Pillar 2 */}
          <div className="flex flex-col items-center max-w-sm mx-auto">
            <h3 className="font-serif text-lg font-medium text-neutral-900">
              Personalization
            </h3>
            <p className="mt-3 text-xs text-neutral-600 font-light leading-relaxed min-h-[48px]">
              Make a design from Carpediam Bombay even more memorable with bespoke engraving and custom settings.
            </p>
            <button
              onClick={() => navigateTo('/jewelry')}
              className="mt-4 text-[11px] uppercase tracking-widest font-semibold border-b border-black pb-0.5 hover:text-[#008080] hover:border-[#008080] transition-colors"
            >
              Learn More
            </button>
          </div>

          {/* Pillar 3 */}
          <div className="flex flex-col items-center max-w-sm mx-auto">
            <h3 className="font-serif text-lg font-medium text-neutral-900">
              Contact Us
            </h3>
            <p className="mt-3 text-xs text-neutral-600 font-light leading-relaxed min-h-[48px]">
              From tailored gifting advice to providing in-store or virtual shopping appointments, we are always at your service.
            </p>
            <button
              onClick={() => navigateTo('/stores')}
              className="mt-4 text-[11px] uppercase tracking-widest font-semibold border-b border-black pb-0.5 hover:text-[#008080] hover:border-[#008080] transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* 8. Breadcrumb Indicator */}
      <div className="py-6 border-t border-neutral-100 text-center text-[10px] uppercase tracking-[0.2em] text-neutral-400">
        <span className="cursor-pointer hover:text-black" onClick={() => navigateTo('/')}>Home</span>
        <span className="mx-2">/</span>
        <span className="text-neutral-600">Home Page</span>
      </div>

      {/* 9. Latest from Carpediam Bombay Newsletter */}
      <section className="py-16 bg-[#FAFBFB] border-t border-neutral-100 text-center">
        <div className="max-w-md mx-auto px-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-neutral-900 tracking-tight">
            Latest from Carpediam Bombay
          </h2>

          {subscribed ? (
            <p className="mt-4 text-xs text-[#008080] font-medium">
              Thank you for subscribing to Carpediam Bombay updates.
            </p>
          ) : (
            <form
              onSubmit={e => {
                e.preventDefault();
                if (email) setSubscribed(true);
              }}
              className="mt-6 flex items-center justify-center max-w-sm mx-auto border-b border-neutral-300 pb-1"
            >
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="EMAIL"
                className="w-full py-2 bg-transparent text-xs tracking-widest placeholder-neutral-400 outline-none uppercase font-light"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#EFEFEF] hover:bg-neutral-300 text-neutral-800 text-[10px] uppercase tracking-widest font-semibold transition-colors flex-shrink-0"
              >
                Sign Up
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
