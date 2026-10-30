import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import MainCategoriesPage from './pages/MainCategoriesPage';
import CategorySubcategoriesPage from './pages/CategorySubcategoriesPage';
import DishListingPage from './pages/DishListingPage';
import CartPage from './pages/CartPage';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import SearchModal from './components/SearchModal';
import OrderSummaryModal from './components/OrderSummaryModal';
import { getCategoryBySlug, getSubcategoryBySlug } from './data/menu';
import { useCart } from './context/CartContext';

export default function App() {
  const location = useLocation();
  const { clearCart } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOrderSummaryOpen, setIsOrderSummaryOpen] = useState(false);

  const isWelcomePage = location.pathname === '/';

  // Determine dynamic title for header
  let headerTitle = null;
  const pathParts = location.pathname.split('/').filter(Boolean);

  if (pathParts[0] === 'menu' && pathParts[1]) {
    const category = getCategoryBySlug(pathParts[1]);
    if (pathParts[2]) {
      const subcategory = getSubcategoryBySlug(pathParts[1], pathParts[2]);
      headerTitle = subcategory ? subcategory.name : 'Dish Menu';
    } else {
      headerTitle = category ? category.name : 'Category Listing';
    }
  } else if (pathParts[0] === 'cart') {
    headerTitle = 'Your Cart';
  }

  return (
    <div className="min-h-screen bg-[#FFF8EC] text-[#382216] flex flex-col font-sans">
      {/* Top Header on all pages except Welcome screen */}
      {!isWelcomePage && (
        <Header
          title={headerTitle}
          onOpenSearch={() => setIsSearchOpen(true)}
          onClearCart={location.pathname === '/cart' ? clearCart : undefined}
        />
      )}

      {/* Main Page Routing */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route
            path="/categories"
            element={<MainCategoriesPage />}
          />
          <Route
            path="/menu/:categorySlug"
            element={<CategorySubcategoriesPage />}
          />
          <Route
            path="/menu/:categorySlug/:subcategorySlug"
            element={<DishListingPage />}
          />
          <Route
            path="/cart"
            element={<CartPage onShowSummary={() => setIsOrderSummaryOpen(true)} />}
          />
          <Route
            path="*"
            element={<MainCategoriesPage />}
          />
        </Routes>
      </div>

      {/* Bottom Navigation across all non-welcome screens */}
      {!isWelcomePage && (
        <BottomNav
          onOpenSearch={() => setIsSearchOpen(true)}
        />
      )}

      {/* Global Interactive Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <OrderSummaryModal
        isOpen={isOrderSummaryOpen}
        onClose={() => setIsOrderSummaryOpen(false)}
      />
    </div>
  );
}
