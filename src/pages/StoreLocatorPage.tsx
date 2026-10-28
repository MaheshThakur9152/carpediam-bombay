import React, { useState } from 'react';
import { MapPin, Phone, Clock, CheckCircle2 } from 'lucide-react';

interface Store {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  image: string;
}

export const StoreLocatorPage: React.FC = () => {
  const stores: Store[] = [
    {
      id: 'the-landmark',
      name: 'The Landmark (NYC Flagship)',
      address: '727 Fifth Avenue, at 57th Street',
      city: 'New York, NY 10022',
      phone: '+1 212-755-8000',
      hours: 'Mon–Sat: 10am–8pm | Sun: 11am–7pm',
      image: '/images/img_26.jpg'
    },
    {
      id: 'beverly-hills',
      name: 'Carpediam Beverly Hills',
      address: '210 North Rodeo Drive',
      city: 'Beverly Hills, CA 90210',
      phone: '+1 310-273-8880',
      hours: 'Mon–Sat: 10am–7pm | Sun: 11am–6pm',
      image: '/images/img_22.webp'
    },
    {
      id: 'london-bond',
      name: 'Carpediam Old Bond Street',
      address: '25 Old Bond Street, Mayfair',
      city: 'London W1S 4QB, UK',
      phone: '+44 20 7409 2790',
      hours: 'Mon–Sat: 10am–6:30pm | Sun: 12pm–6pm',
      image: '/images/img_2.jpg'
    },
    {
      id: 'paris-vendome',
      name: 'Carpediam Place Vendôme',
      address: '6 Place Vendôme',
      city: '75001 Paris, France',
      phone: '+33 1 40 20 20 20',
      hours: 'Mon–Sat: 10:30am–7pm | Sun: Closed',
      image: '/images/img_1.jpg'
    }
  ];

  const [selectedStore, setSelectedStore] = useState<Store>(stores[0]);
  const [booked, setBooked] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#FAFBFB] border-b border-neutral-100 py-12 text-center">
        <h1 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-900 tracking-tight">
          Find a Carpediam Boutique
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-neutral-500 max-w-xl mx-auto font-light">
          Experience extraordinary service, view rare high-jewelry pieces, and discover custom personalization at our world-renowned destinations.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Store List */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-4">
              Featured Flagships
            </h2>
            {stores.map(store => (
              <div
                key={store.id}
                onClick={() => {
                  setSelectedStore(store);
                  setBooked(false);
                }}
                className={`p-5 border cursor-pointer transition-all ${
                  selectedStore.id === store.id
                    ? 'border-black bg-[#FAFBFB] shadow-xs ring-1 ring-black'
                    : 'border-neutral-200 hover:border-neutral-400 bg-white'
                }`}
              >
                <h3 className="font-serif text-lg font-medium text-neutral-900">{store.name}</h3>
                <p className="text-xs text-neutral-600 mt-1">{store.address}</p>
                <p className="text-xs text-neutral-500">{store.city}</p>
                <div className="mt-3 flex items-center space-x-4 text-[11px] text-neutral-500">
                  <span className="flex items-center space-x-1">
                    <Phone className="w-3 h-3 text-[#008080]" />
                    <span>{store.phone}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Store Details and Appointment Panel */}
          <div className="lg:col-span-7 bg-[#FAFBFB] border border-neutral-200 p-8 flex flex-col justify-between">
            <div>
              <div className="relative aspect-16/9 overflow-hidden mb-6 bg-neutral-200">
                <img
                  src={selectedStore.image}
                  alt={selectedStore.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="text-[10px] uppercase tracking-widest text-[#008080] font-semibold">
                Destination
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-neutral-900 mt-1">
                {selectedStore.name}
              </h2>

              <div className="mt-4 space-y-2 text-xs text-neutral-600">
                <p className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#008080] flex-shrink-0" />
                  <span>{selectedStore.address}, {selectedStore.city}</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[#008080] flex-shrink-0" />
                  <span>{selectedStore.hours}</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#008080] flex-shrink-0" />
                  <span>{selectedStore.phone}</span>
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-200">
              <h4 className="font-serif text-base font-medium text-neutral-900 mb-2">
                Schedule a Private Boutique Consultation
              </h4>
              <p className="text-xs text-neutral-500 mb-4">
                Enjoy personalized service with a Carpediam Client Advisor for fine jewelry or bridal selection.
              </p>

              {booked ? (
                <div className="p-4 bg-[#f0f9f8] border border-[#d8ecea] flex items-center space-x-3 text-xs text-[#002a2c]">
                  <CheckCircle2 className="w-5 h-5 text-[#008080] flex-shrink-0" />
                  <span>Your consultation at {selectedStore.name} has been reserved. A Carpediam advisor will contact you shortly.</span>
                </div>
              ) : (
                <button
                  onClick={() => setBooked(true)}
                  className="w-full sm:w-auto px-8 py-3 bg-black text-white text-xs font-semibold uppercase tracking-[0.2em] hover:bg-neutral-800 transition-colors"
                >
                  Confirm Appointment
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
