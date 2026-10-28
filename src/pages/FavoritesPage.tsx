import React from 'react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Heart } from 'lucide-react';

export const FavoritesPage: React.FC = () => {
  const { favorites, navigateTo } = useStore();

  const favoriteProducts = PRODUCTS.filter(p => favorites.includes(p.id));

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#FAFBFB] border-b border-neutral-100 py-12 text-center">
        <h1 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-900 tracking-tight">
          Your Saved Wishlist
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-neutral-500 max-w-md mx-auto font-light">
          Cherish your favorite Carpediam designs and return to them anytime.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        {favoriteProducts.length === 0 ? (
          <div className="text-center py-20 text-neutral-500">
            <Heart className="w-12 h-12 mx-auto stroke-1 text-neutral-300 mb-3" />
            <p className="font-serif text-xl">Your wishlist is currently empty.</p>
            <p className="text-xs text-neutral-400 mt-2">Explore our collections and tap the heart icon on any piece you love.</p>
            <button
              onClick={() => navigateTo('/jewelry')}
              className="mt-6 px-8 py-3 bg-black text-white text-xs font-semibold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
            >
              Explore Jewelry
            </button>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-6 pb-2 border-b border-neutral-200">
              <span className="text-xs uppercase tracking-wider text-neutral-500">
                {favoriteProducts.length} Saved {favoriteProducts.length === 1 ? 'Design' : 'Designs'}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {favoriteProducts.map(prod => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
