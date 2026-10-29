import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { restaurant } from '../data/restaurant';
import { useCart } from '../context/CartContext';

export default function BottomNav({ onOpenSearch, onShowTableInfo }) {
  const location = useLocation();
  const { totalItems } = useCart();

  const isMenuActive = location.pathname === '/categories' || location.pathname.startsWith('/menu');
  const isCartActive = location.pathname === '/cart';

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 pb-safe bg-[#FFFFFF] border-t border-[#F0DCC2] shadow-[0_-2px_12px_rgba(56,34,22,0.06)]">
      <div className="flex items-center justify-around h-14 max-w-lg mx-auto px-2">
        {/* 1. Menu Tab */}
        <NavLink
          to="/categories"
          className={`flex flex-col items-center justify-center min-w-[60px] h-12 gap-0.5 active:scale-95 transition-all ${
            isMenuActive ? 'text-[#FF5A1F] font-semibold' : 'text-[#806A58] hover:text-[#382216]'
          }`}
        >
          <span className="material-symbols-outlined text-[20px]" style={isMenuActive ? { fontVariationSettings: "'FILL' 1" } : {}}>
            home
          </span>
          <span className="text-[10px] tracking-tight">Menu</span>
        </NavLink>

        {/* 2. Search Tab */}
        <button
          type="button"
          onClick={onOpenSearch}
          aria-label="Search Menu"
          className="flex flex-col items-center justify-center min-w-[60px] h-12 gap-0.5 text-[#806A58] hover:text-[#382216] active:scale-95 transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">search</span>
          <span className="text-[10px] tracking-tight">Search</span>
        </button>

        {/* 3. Cart Tab */}
        <NavLink
          to="/cart"
          className={`relative flex flex-col items-center justify-center min-w-[60px] h-12 gap-0.5 active:scale-95 transition-all ${
            isCartActive ? 'text-[#FF5A1F] font-semibold' : 'text-[#806A58] hover:text-[#382216]'
          }`}
        >
          <div className="relative">
            <span className="material-symbols-outlined text-[20px]" style={isCartActive ? { fontVariationSettings: "'FILL' 1" } : {}}>
              shopping_cart
            </span>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-2 min-w-[15px] h-[15px] px-0.5 rounded-full bg-[#FF5A1F] text-white text-[9px] font-bold flex items-center justify-center shadow-sm">
                {totalItems}
              </span>
            )}
          </div>
          <span className="text-[10px] tracking-tight">Cart</span>
        </NavLink>

        {/* 4. Table #04 Tab */}
        <button
          type="button"
          onClick={onShowTableInfo}
          aria-label="Table info and QR details"
          className="flex flex-col items-center justify-center min-w-[60px] h-12 gap-0.5 text-[#806A58] hover:text-[#382216] active:scale-95 transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-[20px]">qr_code_2</span>
          <span className="text-[10px] tracking-tight">{restaurant.tableLabel}</span>
        </button>
      </div>
    </nav>
  );
}
