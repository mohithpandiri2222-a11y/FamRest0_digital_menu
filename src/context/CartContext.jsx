import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const STORAGE_KEY = 'fam_resto_cart_v1';
const LEGACY_STORAGE_KEY = 'nxt_resto_cart_v1';
const INIT_FLAG_KEY = 'nxt_resto_cart_seeded';

/**
 * Safely loads initial cart state:
 * - Starts empty ([]) for fresh installations and first-time visits
 * - Migrates/clears obsolete test/seed data without affecting legitimate customer cart items
 * - Persists and returns user-selected items from LocalStorage
 */
function getInitialCart() {
  try {
    const wasSeeded = localStorage.getItem(INIT_FLAG_KEY);
    const stored = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY);

    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        // Check if the stored cart is strictly the obsolete test data seeded during development
        const isObsoleteTestData =
          wasSeeded === 'true' &&
          parsed.length === 3 &&
          parsed.every(item =>
            (item.dishId === 'dish-hyd-chicken-biryani' && item.quantity === 1) ||
            (item.dishId === 'dish-paneer-noodles' && item.quantity === 1) ||
            (item.dishId === 'dish-masala-fries' && item.quantity === 1)
          );

        if (isObsoleteTestData) {
          localStorage.removeItem(INIT_FLAG_KEY);
          localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
          return [];
        }

        // Clean up obsolete test flag if legitimate items exist
        if (wasSeeded) {
          localStorage.removeItem(INIT_FLAG_KEY);
        }

        return parsed;
      }
    }

    // Fresh visit: clear old development flag if present and start completely empty
    if (wasSeeded) {
      localStorage.removeItem(INIT_FLAG_KEY);
    }
    return [];
  } catch (e) {
    console.error('Failed to parse cart from localStorage:', e);
    return [];
  }
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => getInitialCart());

  // Cooking notes state
  const [cookingNote, setCookingNote] = useState('');

  // Persist to localStorage on every change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage:', e);
    }
  }, [cart]);

  // Add item to cart
  const addToCart = (dish, quantity = 1) => {
    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(item => item.dishId === dish.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      }
      return [
        ...prevCart,
        {
          dishId: dish.id,
          name: dish.name,
          price: Number(dish.price),
          dietary: dish.dietary,
          description: dish.description,
          image: dish.image,
          quantity: quantity
        }
      ];
    });
  };

  // Update quantity (prevents dropping below 1)
  const updateQuantity = (dishId, delta) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.dishId === dishId) {
          const newQty = item.quantity + delta;
          return newQty >= 1 ? { ...item, quantity: newQty } : item;
        }
        return item;
      });
    });
  };

  // Remove individual dish
  const removeFromCart = (dishId) => {
    setCart(prevCart => prevCart.filter(item => item.dishId !== dishId));
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
  };

  // Check if item is in cart
  const getItemQuantity = (dishId) => {
    const item = cart.find(i => i.dishId === dishId);
    return item ? item.quantity : 0;
  };

  // Cart totals calculations
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const overallTotal = subtotal; // 5% GST is already included in restaurant prices

  // Currency Formatter
  const formatINR = (val) => {
    return `₹${Number(val).toFixed(2)}`;
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      getItemQuantity,
      totalItems,
      subtotal,
      overallTotal,
      formatINR,
      cookingNote,
      setCookingNote
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
