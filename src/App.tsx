import React from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ShoppingBagDrawer } from './components/ShoppingBagDrawer';
import { SearchOverlay } from './components/SearchOverlay';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { LoveEngagementPage } from './pages/LoveEngagementPage';
import { StoreLocatorPage } from './pages/StoreLocatorPage';
import { FavoritesPage } from './pages/FavoritesPage';

const RouterView: React.FC = () => {
  const { route, navigateTo } = useStore();

  // Root or Home
  if (route === '/' || route === '') {
    return <HomePage />;
  }

  // Product Detail Page: /product/:id
  if (route.startsWith('/product/')) {
    const id = route.replace('/product/', '');
    return <ProductDetailPage productId={id} />;
  }

  // Category Pages: /jewelry or /jewelry/necklaces-pendants, etc.
  if (route.startsWith('/jewelry')) {
    const parts = route.split('/').filter(Boolean);
    const catSlug = parts.length > 1 ? parts[1] : undefined;
    return <CategoryPage categorySlug={catSlug} />;
  }

  // Love & Engagement
  if (route === '/love-engagement') {
    return <LoveEngagementPage />;
  }

  // Stores
  if (route === '/stores') {
    return <StoreLocatorPage />;
  }

  // Wishlist
  if (route === '/favorites') {
    return <FavoritesPage />;
  }

  // Fallback 404
  return (
    <div className="py-24 text-center bg-white min-h-[60vh] flex flex-col items-center justify-center">
      <h1 className="font-serif text-4xl text-neutral-900">Page Not Found</h1>
      <p className="text-xs text-neutral-500 mt-2">The page you requested could not be located.</p>
      <button
        onClick={() => navigateTo('/')}
        className="mt-6 px-6 py-2.5 bg-black text-white text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors"
      >
        Return to Homepage
      </button>
    </div>
  );
};

export function App() {
  return (
    <StoreProvider>
      <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-[#81D8D0] selection:text-[#002a2c] relative">
        <Header />
        <main className="flex-1">
          <RouterView />
        </main>
        <Footer />
        <ShoppingBagDrawer />
        <SearchOverlay />
      </div>
    </StoreProvider>
  );
}

export default App;
