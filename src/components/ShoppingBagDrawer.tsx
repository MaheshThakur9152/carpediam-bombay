import React from 'react';
import { useStore } from '../context/StoreContext';
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck } from 'lucide-react';

export const ShoppingBagDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    cartCount,
    navigateTo
  } = useStore();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer content */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-5 border-b border-neutral-200 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5 text-neutral-800" />
            <h2 className="font-serif text-lg tracking-wider uppercase font-medium">
              Shopping Bag ({cartCount})
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1 text-neutral-400 hover:text-black transition-colors"
            aria-label="Close bag"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Free Shipping Announcement */}
        <div className="bg-[#f0f9f8] px-5 py-2.5 text-xs text-[#002a2c] flex items-center justify-between border-b border-[#d8ecea]">
          <span>Complimentary shipping & returns</span>
          <span className="font-semibold uppercase tracking-wider text-[10px]">Applied</span>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {cart.length === 0 ? (
            <div className="text-center py-16 text-neutral-500">
              <ShoppingBag className="w-12 h-12 mx-auto stroke-1 text-neutral-300 mb-3" />
              <p className="font-serif text-lg">Your shopping bag is empty.</p>
              <p className="text-xs text-neutral-400 mt-1">Discover iconic Carpediam Bombay collections.</p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  navigateTo('/jewelry');
                }}
                className="mt-6 px-6 py-2.5 bg-black text-white text-xs tracking-widest uppercase hover:bg-neutral-800 transition-colors"
              >
                Explore Jewelry
              </button>
            </div>
          ) : (
            cart.map((item, index) => (
              <div key={`${item.product.id}-${index}`} className="flex space-x-4 border-b border-neutral-100 pb-5">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-20 h-20 object-cover bg-neutral-50 border border-neutral-100 flex-shrink-0"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4
                        onClick={() => {
                          setIsCartOpen(false);
                          navigateTo(`/product/${item.product.id}`);
                        }}
                        className="font-serif text-sm font-medium hover:underline cursor-pointer leading-tight"
                      >
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-neutral-400 hover:text-red-600 transition-colors ml-2"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-xs text-neutral-500 mt-0.5">{item.selectedMaterial}</p>
                    {item.selectedSize && (
                      <p className="text-xs text-neutral-400">Size: {item.selectedSize}</p>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-neutral-300 rounded-xs">
                      <button
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                        className="p-1 hover:bg-neutral-100 transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-3.5 h-3.5 text-neutral-600" />
                      </button>
                      <span className="px-2 text-xs font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                        className="p-1 hover:bg-neutral-100 transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5 text-neutral-600" />
                      </button>
                    </div>

                    <span className="font-serif text-sm font-semibold text-neutral-900">
                      ${(item.product.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with Subtotal & Checkout */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-neutral-200 bg-neutral-50 space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-neutral-600 uppercase tracking-wider text-xs">Estimated Subtotal</span>
              <span className="font-serif text-lg font-bold text-neutral-900">
                ${cartSubtotal.toLocaleString()}
              </span>
            </div>

            <div className="flex items-center space-x-2 text-[11px] text-neutral-500">
              <ShieldCheck className="w-4 h-4 text-[#008080]" />
              <span>Complimentary signature Carpediam Blue Box® packaging</span>
            </div>

            <button
              onClick={() => {
                alert(`Educational Demo: Checkout completed for $${cartSubtotal.toLocaleString()}! No real payment taken.`);
              }}
              className="w-full py-3.5 bg-black text-white text-xs font-semibold uppercase tracking-[0.2em] hover:bg-neutral-800 transition-colors text-center cursor-pointer shadow-sm"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
