import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { restaurant } from '../data/restaurant';
import { useCart } from '../context/CartContext';
import FamRestoLogo from './FamRestoLogo';

export default function Header({ title, onOpenSearch, onClearCart }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalItems } = useCart();

  const isHome = location.pathname === '/';
  const isCategories = location.pathname === '/categories';
  const isCart = location.pathname === '/cart';

  const handleBack = () => {
    if (isCategories) {
      navigate('/');
    } else if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/categories');
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-[#FFF8EC]/95 backdrop-blur-md border-b border-[#F0DCC2] shadow-[0_2px_10px_rgba(56,34,22,0.04)]">
      <div className="h-14 px-4 flex items-center justify-between max-w-lg mx-auto">
        {/* Left Section: Back Button */}
        <div className="flex items-center gap-1.5 min-w-0">
          {!isHome && (
            <button
              onClick={handleBack}
              aria-label="Go Back"
              className="w-9 h-9 -ml-1 flex items-center justify-center rounded-full text-[#382216] hover:text-[#FF5A1F] hover:bg-[#FFF0D9] active:scale-95 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[22px]">chevron_left</span>
            </button>
          )}

          {/* Logo & Brand text */}
          <Link to="/categories" className="flex items-center gap-1 select-none group">
            <FamRestoLogo variant="compact" />
          </Link>
        </div>

        {/* Right Section: Actions */}
        <div className="flex items-center gap-1">
          {isCart ? (
            /* Clear Cart action button on Cart Page */
            onClearCart && (
              <button
                type="button"
                onClick={onClearCart}
                className="flex items-center gap-1 text-xs font-semibold text-[#806A58] hover:text-[#D94335] px-2.5 py-1 rounded-full hover:bg-[#FFEAEA] transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">delete_sweep</span>
                <span>Clear</span>
              </button>
            )
          ) : (
            <>
              {/* Search Trigger */}
              <button
                type="button"
                onClick={onOpenSearch}
                aria-label="Search Menu"
                className="w-9 h-9 flex items-center justify-center rounded-full text-[#382216] hover:text-[#FF5A1F] hover:bg-[#FFF0D9] active:scale-95 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[22px]">search</span>
              </button>

              {/* Cart Icon with badge */}
              <Link
                to="/cart"
                aria-label={`View Cart (${totalItems} items)`}
                className="relative w-9 h-9 flex items-center justify-center rounded-full text-[#382216] hover:text-[#FF5A1F] hover:bg-[#FFF0D9] active:scale-95 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
                {totalItems > 0 && (
                  <span className="absolute top-1 right-1 min-w-[16px] h-[16px] px-1 rounded-full bg-[#FF5A1F] text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                    {totalItems}
                  </span>
                )}
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
