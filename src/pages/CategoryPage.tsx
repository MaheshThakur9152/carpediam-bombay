import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

interface CategoryPageProps {
  categorySlug?: string;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ categorySlug = 'necklaces-pendants' }) => {

  const [selectedMaterial, setSelectedMaterial] = useState<string>('All');
  const [selectedCollection, setSelectedCollection] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');
  const [personalizeOnly, setPersonalizeOnly] = useState(false);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

  const curationTiles = [
    { title: 'EVERYDAY DIAMONDS', image: '/images/img_29.jpg' },
    { title: 'CHAIN', image: '/images/img_26.jpg' },
    { title: 'LAYERING', image: '/images/img_27.jpg' },
    { title: 'BOLD', image: '/images/img_26.jpg' }
  ];

  const categoryTitle = useMemo(() => {
    switch (categorySlug) {
      case 'necklaces-pendants': return 'Necklaces & Pendants';
      case 'bracelets': return 'Bracelets';
      case 'rings': return 'Rings';
      case 'earrings': return 'Earrings';
      default: return 'Fine Jewelry';
    }
  }, [categorySlug]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(prod => {
      if (categorySlug && categorySlug !== 'jewelry' && prod.category !== categorySlug) {
        return false;
      }
      if (selectedMaterial !== 'All') {
        const hasMat = prod.materials.some(m => m.toLowerCase().includes(selectedMaterial.toLowerCase()));
        if (!hasMat) return false;
      }
      if (selectedCollection !== 'All') {
        if (prod.collection !== selectedCollection) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [categorySlug, selectedMaterial, selectedCollection, sortBy]);

  const materialsList = ['All', 'Yellow Gold', 'Platinum', 'Rose Gold', 'Diamonds'];
  const collectionsList = ['All', 'Carpediam HardWear', 'Carpediam T', 'Carpediam Knot', 'Carpediam Lock', 'Jean Schlumberger'];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Top Curated Visual Cards (4-up) */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 pt-8 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {curationTiles.map(tile => (
            <div
              key={tile.title}
              className="cursor-pointer group flex flex-col items-center"
            >
              <div className="aspect-square w-full bg-[#18606B]/15 overflow-hidden border border-neutral-100 flex items-center justify-center p-3 relative">
                <img
                  src={tile.image}
                  alt={tile.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <span className="mt-4 text-[10px] tracking-[0.2em] uppercase font-semibold text-neutral-800 group-hover:text-[#008080] transition-colors text-center">
                {tile.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Filter & Sort Bar (Matching exact live reference geometry) */}
      <div className="border-t border-b border-neutral-200 py-4 max-w-[1440px] mx-auto px-6 sm:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Sort By Box & Product Count */}
          <div className="flex items-center space-x-6 w-full md:w-auto justify-between md:justify-start">
            <div className="relative">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as any)}
                className="appearance-none border border-neutral-300 py-2.5 px-6 pr-10 text-[11px] uppercase tracking-wider bg-white font-medium hover:border-black transition-colors cursor-pointer outline-none"
              >
                <option value="featured">SORT BY: FEATURED</option>
                <option value="price-asc">PRICE: LOW TO HIGH</option>
                <option value="price-desc">PRICE: HIGH TO LOW</option>
                <option value="name">ALPHABETICAL</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-600" />
            </div>

            <span className="text-[11px] uppercase tracking-widest text-neutral-600 font-medium">
              {filteredProducts.length} PRODUCTS
            </span>
          </div>

          {/* Center: Category Title */}
          <h1 className="font-serif text-2xl sm:text-3xl font-normal text-neutral-900 tracking-tight text-center order-first md:order-none">
            {categoryTitle}
          </h1>

          {/* Right: Personalize Toggle & Filters Button */}
          <div className="flex items-center space-x-6 w-full md:w-auto justify-end">
            <label className="flex items-center space-x-2 text-[11px] uppercase tracking-wider font-medium text-neutral-700 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={personalizeOnly}
                onChange={e => setPersonalizeOnly(e.target.checked)}
                className="w-4 h-4 border-neutral-300 rounded-none accent-black cursor-pointer"
              />
              <span>PERSONALIZE</span>
            </label>

            <button
              onClick={() => setFilterDrawerOpen(!filterDrawerOpen)}
              className="border border-neutral-300 py-2.5 px-6 text-[11px] uppercase tracking-wider bg-white font-medium hover:border-black transition-colors flex items-center space-x-2"
            >
              <span>FILTERS</span>
              <SlidersHorizontal className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Filter Drawer / Expanded Controls */}
        {filterDrawerOpen && (
          <div className="pt-6 mt-4 border-t border-neutral-100 flex flex-wrap gap-6 items-center justify-between text-xs animate-in fade-in duration-200">
            <div className="flex flex-wrap gap-4 items-center">
              <div>
                <span className="text-neutral-500 mr-2 uppercase text-[10px] tracking-wider">Metal:</span>
                <select
                  value={selectedMaterial}
                  onChange={e => setSelectedMaterial(e.target.value)}
                  className="border border-neutral-300 px-3 py-1.5 text-xs bg-white outline-none"
                >
                  <option value="All">All Metals</option>
                  {materialsList.filter(m => m !== 'All').map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>

              <div>
                <span className="text-neutral-500 mr-2 uppercase text-[10px] tracking-wider">Collection:</span>
                <select
                  value={selectedCollection}
                  onChange={e => setSelectedCollection(e.target.value)}
                  className="border border-neutral-300 px-3 py-1.5 text-xs bg-white outline-none"
                >
                  <option value="All">All Collections</option>
                  {collectionsList.filter(c => c !== 'All').map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {(selectedMaterial !== 'All' || selectedCollection !== 'All') && (
                <button
                  onClick={() => {
                    setSelectedMaterial('All');
                    setSelectedCollection('All');
                  }}
                  className="text-neutral-500 underline text-xs hover:text-black"
                >
                  Reset filters
                </button>
              )}
            </div>

            <button
              onClick={() => setFilterDrawerOpen(false)}
              className="text-[11px] uppercase tracking-wider font-semibold hover:underline"
            >
              Close
            </button>
          </div>
        )}
      </div>

      {/* 3. Product Grid (3 Columns on Desktop matching Reference!) */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 py-10">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 text-neutral-500">
            <p className="font-serif text-xl">No creations found matching your selections.</p>
            <button
              onClick={() => {
                setSelectedMaterial('All');
                setSelectedCollection('All');
              }}
              className="mt-6 px-6 py-2.5 bg-black text-white text-xs uppercase tracking-widest hover:bg-neutral-800"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredProducts.map(prod => (
              <div key={prod.id} className="relative">
                {/* Reference Must-Have Badge */}
                {prod.isFeatured && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 bg-[#F5F2EB] text-[#4A4238] text-[10px] tracking-wider font-medium">
                      Must-Have
                    </span>
                  </div>
                )}
                <ProductCard product={prod} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
