import React, { useRef } from 'react';
import type { Product } from '../data/products';
import { ProductCard } from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductCarouselProps {
  title: string;
  subtitle?: string;
  products: Product[];
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ title, subtitle, products }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-14 border-t border-neutral-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-neutral-900 tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-1 text-xs text-neutral-500 tracking-wider uppercase font-medium">
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 border border-neutral-200 hover:border-black hover:bg-neutral-50 transition-colors rounded-full"
              aria-label="Previous products"
            >
              <ChevronLeft className="w-4 h-4 text-neutral-700" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 border border-neutral-200 hover:border-black hover:bg-neutral-50 transition-colors rounded-full"
              aria-label="Next products"
            >
              <ChevronRight className="w-4 h-4 text-neutral-700" />
            </button>
          </div>
        </div>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-none pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map(prod => (
            <div
              key={prod.id}
              className="w-64 sm:w-72 flex-shrink-0 snap-start"
            >
              <ProductCard product={prod} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
