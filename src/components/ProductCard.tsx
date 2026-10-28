import React, { useState } from 'react';
import type { Product } from '../data/products';
import { useStore } from '../context/StoreContext';
import { Heart, ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { toggleFavorite, isFavorite, addToCart, navigateTo } = useStore();
  const [isHovered, setIsHovered] = useState(false);

  const favorited = isFavorite(product.id);

  return (
    <div
      className="group relative flex flex-col bg-white text-center transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Frame */}
      <div className="relative aspect-square w-full overflow-hidden bg-white cursor-pointer border border-transparent group-hover:border-neutral-100">
        <img
          src={isHovered && product.secondaryImage ? product.secondaryImage : product.image}
          alt={product.name}
          onClick={() => navigateTo(`/product/${product.id}`)}
          className="h-full w-full object-contain p-4 transition-all duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Wishlist Button */}
        <button
          onClick={e => {
            e.stopPropagation();
            toggleFavorite(product.id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
            favorited
              ? 'text-red-600 bg-white shadow-xs'
              : 'text-neutral-400 hover:text-black bg-white/60 hover:bg-white'
          }`}
          aria-label="Save to wishlist"
        >
          <Heart className={`w-4 h-4 ${favorited ? 'fill-current text-red-500' : ''}`} />
        </button>

        {/* Quick Add Overlay on Desktop Hover */}
        <div className="absolute inset-x-4 bottom-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hidden sm:block">
          <button
            onClick={e => {
              e.stopPropagation();
              addToCart(product, product.materials[0], product.sizes?.[0]);
            }}
            className="w-full py-2.5 bg-white text-black border border-neutral-300 text-[10px] font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-colors shadow-sm flex items-center justify-center space-x-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add to Bag</span>
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="mt-4 flex flex-col items-center px-2">
        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-medium">
          {product.collection}
        </span>

        <h3
          onClick={() => navigateTo(`/product/${product.id}`)}
          className="mt-1 font-serif text-sm font-medium text-neutral-900 group-hover:underline cursor-pointer line-clamp-1 max-w-xs"
        >
          {product.name}
        </h3>

        <p className="text-[11px] text-neutral-500 line-clamp-1 mt-0.5">{product.subtitle}</p>

        <p className="mt-2 text-xs font-semibold text-neutral-900 tracking-wider">
          {product.formattedPrice}
        </p>

        {/* Mobile Quick Add */}
        <button
          onClick={() => addToCart(product, product.materials[0], product.sizes?.[0])}
          className="sm:hidden mt-3 w-full py-2 border border-neutral-300 text-[10px] tracking-wider uppercase font-medium hover:bg-black hover:text-white transition-colors"
        >
          Add to Bag
        </button>
      </div>
    </div>
  );
};
