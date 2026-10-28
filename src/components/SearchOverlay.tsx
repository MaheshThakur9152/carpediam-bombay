import React, { useRef, useEffect } from 'react';
import { useStore } from '../context/StoreContext';
import { Search, X } from 'lucide-react';

export const SearchOverlay: React.FC = () => {
  const {
    isSearchOpen,
    setIsSearchOpen,
    searchQuery,
    setSearchQuery,
    searchResults,
    navigateTo
  } = useStore();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const popularSearches = ['Smile', 'HardWear', 'Diamond Ring', 'Gold', 'Wedding Bands', 'Schlumberger'];

  return (
    <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center pb-6 border-b border-neutral-300">
          <div className="flex items-center space-x-3 flex-1">
            <Search className="w-6 h-6 text-neutral-400" />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search for jewelry, gifts, or collections..."
              className="w-full text-xl sm:text-2xl font-serif outline-none placeholder-neutral-400 bg-transparent"
            />
          </div>
          <button
            onClick={() => {
              setIsSearchOpen(false);
              setSearchQuery('');
            }}
            className="p-2 text-neutral-500 hover:text-black transition-colors"
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        {/* Quick searches */}
        {searchQuery.trim() === '' && (
          <div className="mt-8">
            <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4">
              Trending Searches
            </p>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map(term => (
                <button
                  key={term}
                  onClick={() => setSearchQuery(term)}
                  className="px-4 py-2 border border-neutral-200 text-xs tracking-wider rounded-full hover:border-black hover:bg-neutral-50 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Live Search Results */}
        {searchQuery.trim() !== '' && (
          <div className="mt-8">
            <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
              Search Results ({searchResults.length})
            </p>

            {searchResults.length === 0 ? (
              <div className="py-12 text-center text-neutral-500">
                <p className="font-serif text-lg">No items match your search for "{searchQuery}".</p>
                <p className="text-xs text-neutral-400 mt-1">Please check your spelling or explore our popular categories.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {searchResults.map(prod => (
                  <div
                    key={prod.id}
                    onClick={() => {
                      setIsSearchOpen(false);
                      navigateTo(`/product/${prod.id}`);
                    }}
                    className="cursor-pointer group border border-neutral-100 hover:border-neutral-300 p-3 bg-white transition-all shadow-xs"
                  >
                    <div className="relative aspect-square overflow-hidden bg-neutral-50">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-3 text-left">
                      <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium">
                        {prod.collection}
                      </span>
                      <h4 className="font-serif text-sm font-medium text-neutral-900 group-hover:text-[#008080] transition-colors truncate">
                        {prod.name}
                      </h4>
                      <p className="text-xs font-semibold text-neutral-700 mt-1">{prod.formattedPrice}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
