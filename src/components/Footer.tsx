import React from 'react';
import { useStore } from '../context/StoreContext';
import { CarpediamLogo } from './CarpediamLogo';

export const Footer: React.FC = () => {
  const { navigateTo } = useStore();

  return (
    <footer className="bg-white border-t border-neutral-200 text-neutral-800 pt-16 pb-12 text-[11px] font-light">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        {/* 4 Main Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-16 border-b border-neutral-200">
          {/* Column 1: SUPPORT */}
          <div>
            <h4 className="font-serif text-xs uppercase tracking-widest text-neutral-900 font-semibold mb-5">
              Support
            </h4>
            <ul className="space-y-2.5 text-neutral-600">
              <li><button onClick={() => navigateTo('/stores')} className="hover:underline">Contact Us</button></li>
              <li><button onClick={() => navigateTo('/stores')} className="hover:underline">Track Your Order</button></li>
              <li><button onClick={() => navigateTo('/stores')} className="hover:underline">Book An Appointment</button></li>
              <li><button onClick={() => navigateTo('/stores')} className="hover:underline">Book a Virtual Appointment</button></li>
              <li><span className="cursor-pointer hover:underline">Frequently Asked Questions</span></li>
              <li><span className="cursor-pointer hover:underline">Shipping & Return Policy</span></li>
              <li><button onClick={() => navigateTo('/stores')} className="hover:underline">Store Information | Store List</button></li>
              <li><span className="cursor-pointer hover:underline">Site Index</span></li>
              <li><span className="cursor-pointer hover:underline">Gift Card</span></li>
              <li><span className="cursor-pointer hover:underline">Jewelry Gift Guide</span></li>
            </ul>
          </div>

          {/* Column 2: SERVICES */}
          <div>
            <h4 className="font-serif text-xs uppercase tracking-widest text-neutral-900 font-semibold mb-5">
              Services
            </h4>
            <ul className="space-y-2.5 text-neutral-600">
              <li><button onClick={() => navigateTo('/love-engagement')} className="hover:underline">Contact a Carpediam Diamond Expert</button></li>
              <li><span className="cursor-pointer hover:underline">Request Repair</span></li>
              <li><span className="cursor-pointer hover:underline">Personalization</span></li>
              <li><span className="cursor-pointer hover:underline">Business Accounts</span></li>
              <li><span className="cursor-pointer hover:underline">Carpediam Select Financing</span></li>
              <li><span className="cursor-pointer hover:underline">Alertline</span></li>
            </ul>
          </div>

          {/* Column 3: ABOUT */}
          <div>
            <h4 className="font-serif text-xs uppercase tracking-widest text-neutral-900 font-semibold mb-5">
              About
            </h4>
            <ul className="space-y-2.5 text-neutral-600">
              <li><button onClick={() => navigateTo('/love-engagement')} className="hover:underline">Sustainability</button></li>
              <li><span className="cursor-pointer hover:underline">Carpediam Foundation</span></li>
              <li><span className="cursor-pointer hover:underline">Carpediam Careers</span></li>
              <li><span className="cursor-pointer hover:underline">Carpediam for the Press</span></li>
            </ul>
          </div>

          {/* Column 4: LEGAL */}
          <div>
            <h4 className="font-serif text-xs uppercase tracking-widest text-neutral-900 font-semibold mb-5">
              Legal
            </h4>
            <ul className="space-y-2.5 text-neutral-600">
              <li><span className="cursor-pointer hover:underline">Privacy Policy</span></li>
              <li><span className="cursor-pointer hover:underline">Terms & Conditions</span></li>
              <li><span className="cursor-pointer hover:underline">Accessibility Statement</span></li>
              <li><span className="cursor-pointer hover:underline">Transparency in Coverage</span></li>
              <li><span className="cursor-pointer hover:underline">California Privacy</span></li>
              <li><span className="cursor-pointer hover:underline">Human Rights & Supply Chain</span></li>
              <li><span className="cursor-pointer hover:underline">LVMH Human Rights Charter</span></li>
              <li><span className="cursor-pointer hover:underline">Product Safety</span></li>
              <li><span className="cursor-pointer hover:underline">Your Privacy Choices 🗲</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Emblem, Socials */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between text-[11px] text-neutral-500 gap-6">
          <div className="flex items-center space-x-4">
            <span>Carpediam Bombay © 2026</span>
            <span>Location: <button className="underline text-neutral-700 hover:text-black">Mumbai / Worldwide</button></span>
          </div>

          {/* Carpediam Logo Emblem */}
          <div className="flex items-center justify-center">
            <CarpediamLogo className="h-6 w-auto text-neutral-900" />
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6 text-neutral-600">
            <span className="hover:text-black cursor-pointer">Instagram</span>
            <span className="hover:text-black cursor-pointer">Twitter</span>
            <span className="hover:text-black cursor-pointer">Facebook</span>
            <span className="hover:text-black cursor-pointer">YouTube</span>
            <span className="hover:text-black cursor-pointer">Pinterest</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
