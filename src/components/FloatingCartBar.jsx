import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { restaurant } from '../data/restaurant';

export default function FloatingCartBar({ bottomOffset = 'bottom-16' }) {
  const { totalItems, overallTotal, formatINR } = useCart();

  if (totalItems === 0) return null;

  return (
    <div className={`fixed ${bottomOffset} left-0 right-0 z-40 px-3 max-w-lg mx-auto pointer-events-none`}>
      <Link
        to="/cart"
        aria-label={`View Cart: ${totalItems} items, Total ${formatINR(overallTotal)}`}
        className="pointer-events-auto w-full rounded-full bg-gradient-to-r from-[#FF5A1F] to-[#E64A10] px-4 py-3 flex items-center justify-between shadow-[0_8px_24px_rgba(255,90,31,0.38)] active:scale-[0.99] transition-transform text-white border border-[#FF7A3D]/40"
      >
        {/* Left: Cart Icon Circle + Text */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white shrink-0">
            <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
          </div>
          <div className="flex flex-col min-w-0 leading-tight">
            <span className="text-sm font-bold text-white truncate">
              View Cart ({totalItems} {totalItems === 1 ? 'item' : 'items'})
            </span>
            <span className="text-[11px] font-medium text-[#FFF0D9] truncate">
              {restaurant.tableLabel} • {restaurant.diningContext}
            </span>
          </div>
        </div>

        {/* Right: Total Price + Chevron */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="text-base font-extrabold text-white">
            {formatINR(overallTotal)}
          </span>
          <span className="material-symbols-outlined text-[20px] text-white">
            chevron_right
          </span>
        </div>
      </Link>
    </div>
  );
}
