import React, { useState } from 'react';
import DietaryBadge from './DietaryBadge';
import { useCart } from '../context/CartContext';

export default function DishCard({ dish }) {
  const { addToCart, updateQuantity, getItemQuantity, formatINR, removeFromCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const quantity = getItemQuantity(dish.id);

  const handleAdd = () => {
    addToCart(dish, 1);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
    }, 1200);
  };

  const handleIncrease = () => {
    updateQuantity(dish.id, 1);
  };

  const handleDecrease = () => {
    if (quantity === 1) {
      removeFromCart(dish.id);
    } else {
      updateQuantity(dish.id, -1);
    }
  };

  return (
    <article className="bg-white rounded-2xl p-2.5 sm:p-3 flex gap-3 items-center shadow-[0_4px_16px_rgba(56,34,22,0.06)] hover:shadow-[0_6px_20px_rgba(56,34,22,0.1)] relative overflow-hidden transition-all duration-200 border border-[#F0DCC2]">
      {/* Thumbnail */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 bg-[#FFF0D9]">
        <img
          src={dish.image}
          alt={dish.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />

        {/* Golden Yellow Chef's Badge */}
        {dish.tag && (
          <div className="absolute top-1 left-1 bg-[#F6C94D] text-[#382216] px-1.5 py-0.5 rounded text-[8.5px] font-bold uppercase tracking-wider flex items-center gap-0.5 shadow-sm">
            <span className="material-symbols-outlined text-[10px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              star
            </span>
            <span>{dish.tag}</span>
          </div>
        )}
      </div>

      {/* Info & Actions */}
      <div className="flex flex-col justify-between flex-1 min-w-0 h-full py-0.5">
        <div>
          {/* Top Row: Dietary Badge + Name + Favorite Heart Icon */}
          <div className="flex items-start justify-between gap-1 mb-1">
            <div className="flex items-center gap-1.5 min-w-0">
              <DietaryBadge type={dish.dietary} />
              <h3 className="font-bold text-sm sm:text-base text-[#382216] truncate" title={dish.name}>
                {dish.name}
              </h3>
            </div>

            {/* Favorite Heart Icon */}
            <button
              type="button"
              onClick={() => setIsFavorite(!isFavorite)}
              aria-label="Add to favorites"
              className="text-[#806A58] hover:text-[#D94335] active:scale-90 transition-transform shrink-0 p-0.5 -mt-0.5 cursor-pointer"
            >
              <span
                className={`material-symbols-outlined text-[18px] ${
                  isFavorite ? 'text-[#D94335]' : 'text-[#806A58]'
                }`}
                style={isFavorite ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                favorite
              </span>
            </button>
          </div>

          {/* Description */}
          {dish.description && (
            <p className="text-xs text-[#806A58] line-clamp-2 leading-relaxed">
              {dish.description}
            </p>
          )}
        </div>

        {/* Price & Stepper / Add button */}
        <div className="flex items-center justify-between mt-2 pt-0.5">
          <span className="text-sm sm:text-base font-extrabold text-[#FF5A1F] tracking-tight">
            {formatINR(dish.price)}
          </span>

          {quantity > 0 ? (
            /* Active Stepper */
            <div className="flex items-center bg-[#FF5A1F] text-white rounded-full px-1 py-0.5 shadow-sm">
              <button
                type="button"
                onClick={handleDecrease}
                aria-label={`Decrease quantity of ${dish.name}`}
                className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/20 active:scale-90 transition-transform cursor-pointer"
              >
                <span className="material-symbols-outlined text-[14px]">remove</span>
              </button>
              <span className="w-5 text-center text-xs font-bold text-white">
                {quantity}
              </span>
              <button
                type="button"
                onClick={handleIncrease}
                aria-label={`Increase quantity of ${dish.name}`}
                className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/20 active:scale-90 transition-transform cursor-pointer"
              >
                <span className="material-symbols-outlined text-[14px]">add</span>
              </button>
            </div>
          ) : (
            /* Orange Add Button with visual feedback */
            <button
              type="button"
              onClick={handleAdd}
              aria-label={`Add ${dish.name} to cart`}
              className={`px-3.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm active:scale-95 transition-all cursor-pointer ${
                justAdded
                  ? 'bg-[#4F8A43] text-white scale-105'
                  : 'bg-[#FF5A1F] hover:bg-[#C94316] text-white'
              }`}
            >
              {justAdded ? (
                <>
                  <span className="material-symbols-outlined text-[14px]">check</span>
                  <span>Added</span>
                </>
              ) : (
                <>
                  <span>Add</span>
                  <span className="material-symbols-outlined text-[14px]">add</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
