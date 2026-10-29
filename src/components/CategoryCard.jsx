import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryCard({ category }) {
  // Determine appropriate icon for the bottom row
  const getCategoryIcon = () => {
    switch (category.id) {
      case 'veg':
        return (
          <span className="material-symbols-outlined text-[18px] text-[#4F8A43]">
            eco
          </span>
        );
      case 'non-veg':
        return (
          <span className="material-symbols-outlined text-[18px] text-[#D94335]">
            kebab_dining
          </span>
        );
      case 'drinks':
        return (
          <span className="material-symbols-outlined text-[18px] text-[#FF5A1F]">
            local_bar
          </span>
        );
      case 'desserts':
        return (
          <span className="material-symbols-outlined text-[18px] text-[#C94316]">
            cake
          </span>
        );
      case 'chinese':
        return (
          <span className="material-symbols-outlined text-[18px] text-[#FF5A1F]">
            ramen_dining
          </span>
        );
      case 'snacks':
        return (
          <span className="material-symbols-outlined text-[18px] text-[#F6C94D]">
            fastfood
          </span>
        );
      default:
        return (
          <span className="material-symbols-outlined text-[18px] text-[#FF5A1F]">
            restaurant
          </span>
        );
    }
  };

  return (
    <Link
      to={`/menu/${category.slug}`}
      className="group flex flex-col rounded-2xl bg-white overflow-hidden shadow-[0_4px_16px_rgba(56,34,22,0.06)] hover:shadow-[0_6px_20px_rgba(56,34,22,0.1)] active:scale-[0.98] transition-all duration-200 border border-[#F0DCC2]"
    >
      {/* Category Image */}
      <div className="relative w-full aspect-[4/3] sm:aspect-square overflow-hidden bg-[#FFF0D9]">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Dietary Tag if applicable */}
        {category.isPureVeg && (
          <div className="absolute top-2 left-2 w-5 h-5 rounded-md bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xs">
            <div className="w-2.5 h-2.5 rounded-[2px] border border-[#4F8A43] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#4F8A43]" />
            </div>
          </div>
        )}

        {category.isNonVeg && (
          <div className="absolute top-2 left-2 w-5 h-5 rounded-md bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xs">
            <div className="w-2.5 h-2.5 rounded-[2px] border border-[#D94335] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D94335]" />
            </div>
          </div>
        )}
      </div>

      {/* Card Info Banner (Matching Screen 2 in reference image) */}
      <div className="p-2.5 sm:p-3 flex items-center justify-between bg-white">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-6 h-6 rounded-full bg-[#FFF0D9] flex items-center justify-center shrink-0">
            {getCategoryIcon()}
          </div>
          <div className="min-w-0">
            <h3 className="text-sm font-bold text-[#382216] group-hover:text-[#FF5A1F] transition-colors truncate">
              {category.name}
            </h3>
            <span className="text-[11px] font-medium text-[#806A58] block">
              {category.itemCount} Items
            </span>
          </div>
        </div>
        <span className="material-symbols-outlined text-[#806A58] text-[18px] group-hover:translate-x-0.5 group-hover:text-[#FF5A1F] transition-all shrink-0">
          chevron_right
        </span>
      </div>
    </Link>
  );
}
