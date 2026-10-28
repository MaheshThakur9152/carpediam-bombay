import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product } from '../data/products';
import { PRODUCTS } from '../data/products';

export interface CartItem {
  product: Product;
  selectedMaterial: string;
  selectedSize?: string;
  quantity: number;
}

interface StoreContextType {
  cart: CartItem[];
  addToCart: (product: Product, material: string, size?: string, qty?: number) => void;
  removeFromCart: (index: number) => void;
  updateQuantity: (index: number, qty: number) => void;
  cartCount: number;
  cartSubtotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;

  favorites: string[];
  toggleFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;

  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: Product[];

  route: string;
  navigateTo: (newRoute: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Persistence with localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('carpediam_cart');
      return saved ? JSON.parse(saved) : [
        {
          product: PRODUCTS[0],
          selectedMaterial: '18k Yellow Gold',
          selectedSize: '16-18" Adjustable',
          quantity: 1
        }
      ];
    } catch {
      return [];
    }
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('carpediam_favs');
      return saved ? JSON.parse(saved) : ['smile-pendant-gold', 'sixteen-stone-ring'];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Routing via window.location.hash or pathname
  const [route, setRoute] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace(/^#/, '');
      return hash || window.location.pathname || '/';
    }
    return '/';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '');
      setRoute(hash || '/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (newRoute: string) => {
    window.location.hash = newRoute;
    setRoute(newRoute);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    try {
      localStorage.setItem('carpediam_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('carpediam_favs', JSON.stringify(favorites));
    } catch (e) {
      console.error(e);
    }
  }, [favorites]);

  const addToCart = (product: Product, material: string, size?: string, qty = 1) => {
    setCart(prev => {
      const existingIdx = prev.findIndex(
        item => item.product.id === product.id && item.selectedMaterial === material && item.selectedSize === size
      );
      if (existingIdx >= 0) {
        const updated = [...prev];
        updated[existingIdx].quantity += qty;
        return updated;
      }
      return [...prev, { product, selectedMaterial: material, selectedSize: size, quantity: qty }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const updateQuantity = (index: number, qty: number) => {
    if (qty <= 0) {
      removeFromCart(index);
      return;
    }
    setCart(prev => {
      const updated = [...prev];
      updated[index].quantity = qty;
      return updated;
    });
  };

  const toggleFavorite = (productId: string) => {
    setFavorites(prev =>
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  };

  const isFavorite = (productId: string) => favorites.includes(productId);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const searchResults = searchQuery.trim() === '' ? [] : PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.collection.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <StoreContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
        cartSubtotal,
        isCartOpen,
        setIsCartOpen,
        favorites,
        toggleFavorite,
        isFavorite,
        isSearchOpen,
        setIsSearchOpen,
        searchQuery,
        setSearchQuery,
        searchResults,
        route,
        navigateTo
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useStore must be used within StoreProvider');
  return ctx;
};
