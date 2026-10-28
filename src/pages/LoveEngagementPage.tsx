import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { CheckCircle2, Calendar, Award } from 'lucide-react';

export const LoveEngagementPage: React.FC = () => {

  const diamondShapes = [
    { name: 'Round Brilliant', image: '/images/img_7.jpg', desc: 'The quintessential cut engineered for maximum optical fire.' },
    { name: 'Oval', image: '/images/img_8.jpg', desc: 'An elongated silhouette that gracefully flatters the hand.' },
    { name: 'Emerald', image: '/images/img_9.jpg', desc: 'Step-cut facets producing an architectural hall-of-mirrors effect.' },
    { name: 'Cushion', image: '/images/img_11.jpg', desc: 'Pillow-soft rounded corners with romantic vintage allure.' },
    { name: 'Pear', image: '/images/img_12.jpg', desc: 'A teardrop profile balancing brilliance and tapered grace.' }
  ];

  const [selectedShape, setSelectedShape] = useState(diamondShapes[0]);
  const [appointmentBooked, setAppointmentBooked] = useState(false);
  const [aptDate, setAptDate] = useState('');
  const [aptLocation, setAptLocation] = useState('New York - The Landmark');

  const engagementRings = PRODUCTS.filter(p => p.category === 'rings' || p.collection === 'Carpediam Knot' || p.collection === 'Jean Schlumberger');

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[60vh] max-h-[600px] bg-neutral-900 flex items-center justify-center overflow-hidden">
        <img
          src="/images/img_2.jpg"
          alt="Love and Engagement"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 text-center px-4 max-w-2xl text-white">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-neutral-300">
            Love & Celebration
          </span>
          <h1 className="mt-3 font-serif text-4xl sm:text-6xl font-normal tracking-wide">
            The World's Most Celebrated Rings
          </h1>
          <p className="mt-4 text-xs sm:text-sm text-neutral-200 font-light leading-relaxed">
            Since 1886, The Carpediam® Setting has stood as the ultimate symbol of love. Discover an engagement ring as extraordinary as your commitment.
          </p>
        </div>
      </section>

      {/* Iconic Ring Highlights */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#008080] font-semibold">
            Peerless Diamond Craft
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-neutral-900 mt-1">
            Iconic Engagement Rings
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {engagementRings.map(prod => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

      {/* Interactive Diamond Shapes Guide */}
      <section className="py-16 bg-[#FAFBFB] border-y border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#008080] font-semibold">
              The Diamond Education
            </span>
            <h2 className="font-serif text-3xl font-normal text-neutral-900 mt-1">
              Explore Diamond Shapes
            </h2>
            <p className="text-xs text-neutral-500 mt-1">
              Select a cut to inspect Carpediam's standard of precision and light return
            </p>
          </div>

          {/* Shape selection pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {diamondShapes.map(shape => (
              <button
                key={shape.name}
                onClick={() => setSelectedShape(shape)}
                className={`px-5 py-2.5 text-xs tracking-wider uppercase transition-all ${
                  selectedShape.name === shape.name
                    ? 'bg-black text-white font-medium shadow-xs'
                    : 'bg-white text-neutral-700 border border-neutral-300 hover:border-black'
                }`}
              >
                {shape.name}
              </button>
            ))}
          </div>

          {/* Selected Shape Showcase */}
          <div className="max-w-3xl mx-auto bg-white border border-neutral-200 p-8 shadow-xs flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 bg-[#FAFBFB] flex-shrink-0 flex items-center justify-center p-4 border border-neutral-100">
              <img
                src={selectedShape.image}
                alt={selectedShape.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="flex-1 text-left">
              <span className="text-[10px] uppercase tracking-widest text-[#008080] font-semibold">
                Carpediam Certified Cut
              </span>
              <h3 className="font-serif text-2xl font-normal text-neutral-900 mt-1">
                {selectedShape.name} Diamond
              </h3>
              <p className="mt-3 text-xs text-neutral-600 leading-relaxed font-light">
                {selectedShape.desc} Each stone is cut not to maximize carat weight, but to unlock peak optical dispersion and fiery scintillation.
              </p>
              <div className="mt-4 flex items-center space-x-2 text-xs text-[#008080] font-medium">
                <Award className="w-4 h-4" />
                <span>Individually Registered & Traceable Origin</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Consultation Form */}
      <section className="py-20 max-w-3xl mx-auto px-4 sm:px-8 text-center">
        <Calendar className="w-8 h-8 mx-auto text-[#008080] mb-3" />
        <h2 className="font-serif text-3xl font-normal text-neutral-900">
          Book an In-Store Diamond Consultation
        </h2>
        <p className="text-xs text-neutral-500 max-w-md mx-auto mt-2 leading-relaxed">
          Allow a Carpediam diamond specialist to guide you through cuts, settings, and bespoke engravings.
        </p>

        {appointmentBooked ? (
          <div className="mt-8 p-6 bg-[#f0f9f8] border border-[#d8ecea] text-center space-y-2">
            <CheckCircle2 className="w-8 h-8 text-[#008080] mx-auto" />
            <h4 className="font-serif text-base text-neutral-900 font-medium">Appointment Requested</h4>
            <p className="text-xs text-neutral-600">
              We look forward to welcoming you at {aptLocation} on {aptDate || 'the requested date'}.
            </p>
          </div>
        ) : (
          <form
            onSubmit={e => {
              e.preventDefault();
              setAppointmentBooked(true);
            }}
            className="mt-8 space-y-4 text-left max-w-md mx-auto"
          >
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-neutral-600 font-semibold mb-1">
                Preferred Boutique
              </label>
              <select
                value={aptLocation}
                onChange={e => setAptLocation(e.target.value)}
                className="w-full text-xs border border-neutral-300 p-2.5 bg-white outline-none focus:border-black"
              >
                <option value="New York - The Landmark (727 5th Ave)">New York - The Landmark (727 5th Ave)</option>
                <option value="Beverly Hills - Rodeo Drive">Beverly Hills - Rodeo Drive</option>
                <option value="Chicago - Michigan Avenue">Chicago - Michigan Avenue</option>
                <option value="London - Old Bond Street">London - Old Bond Street</option>
                <option value="Paris - Place Vendôme">Paris - Place Vendôme</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-neutral-600 font-semibold mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                required
                value={aptDate}
                onChange={e => setAptDate(e.target.value)}
                className="w-full text-xs border border-neutral-300 p-2.5 bg-white outline-none focus:border-black"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-black text-white text-xs font-semibold uppercase tracking-[0.2em] hover:bg-neutral-800 transition-colors shadow-sm"
            >
              Request Consultation
            </button>
          </form>
        )}
      </section>
    </div>
  );
};
