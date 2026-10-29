import React from 'react';
import { Link } from 'react-router-dom';

export default function SubcategoryCard({ categorySlug, subcategory, isNonVeg = false, isVeg = false }) {
  return (
    <Link
      to={`/menu/${categorySlug}/${subcategory.slug}`}
      className="group relative flex flex-col rounded-2xl overflow-hidden bg-white shadow-[0_4px_16px_rgba(56,34,22,0.06)] hover:shadow-[0_6px_20px_rgba(56,34,22,0.1)] active:scale-[0.98] transition-all border border-[#F0DCC2]"
    >
      <div className="relative w-full aspect-[4/3] sm:aspect-square overflow-hidden bg-[#FFF0D9]">
        <img
          src={subcategory.image}
          alt={subcategory.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {isNonVeg && (
          <div className="absolute top-2 right-2 w-4 h-4 rounded-sm bg-white/90 p-[2px] flex items-center justify-center shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#D94335]" />
          </div>
        )}

        {isVeg && (
          <div className="absolute top-2 right-2 w-4 h-4 rounded-sm bg-white/90 p-[2px] flex items-center justify-center shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#4F8A43]" />
          </div>
        )}
      </div>

      <div className="p-2.5 sm:p-3 flex items-center justify-between bg-white">
        <span className="text-sm font-bold text-[#382216] group-hover:text-[#FF5A1F] transition-colors truncate">
          {subcategory.name}
        </span>
        <span className="material-symbols-outlined text-[18px] text-[#806A58] group-hover:translate-x-0.5 group-hover:text-[#FF5A1F] transition-all shrink-0">
          chevron_right
        </span>
      </div>
    </Link>
  );
}
