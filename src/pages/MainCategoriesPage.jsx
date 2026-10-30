import React, { useState } from 'react';
import { categories, dishes } from '../data/menu';
import CategoryCard from '../components/CategoryCard';
import FloatingCartBar from '../components/FloatingCartBar';
import heroBiryaniImg from '../assets/images/hero_biryani.jpg';

export default function MainCategoriesPage() {
  const [activeFilter, setActiveFilter] = useState('all'); // 'all', 'veg', 'non-veg', 'special'

  // Filter categories if user picks Pure Veg, Non-Veg, or Chef's Special
  const displayedCategories = categories.filter(cat => {
    if (activeFilter === 'veg') return cat.id === 'veg' || cat.id === 'drinks' || cat.id === 'desserts';
    if (activeFilter === 'non-veg') return cat.id === 'non-veg' || cat.id === 'chinese' || cat.id === 'snacks';
    return true;
  });

  return (
    <main className="flex flex-col relative w-full pt-16 pb-24 bg-[#FFF8EC] min-h-screen">
      <div className="flex flex-col w-full max-w-lg mx-auto">
        {/* Cozy Greeting Banner */}
        <div className="px-4 pt-2 pb-2">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#FFF0D9] to-[#FFFFFF] p-3 border border-[#F0DCC2] shadow-[0_4px_16px_rgba(56,34,22,0.06)] flex items-center gap-3">
            {/* Left Vignette Photo */}
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 shadow-sm border border-[#F0DCC2]">
              <img
                src={heroBiryaniImg}
                alt="Cozy dining"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Center Tagline */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 text-[#382216]">
                <span className="font-script text-xl sm:text-2xl font-bold leading-tight">
                  Good Food Brings People Together
                </span>
                <span className="text-[#C94316] text-base">♥</span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Chips (Matching Screen 2 in reference image) */}
        <div className="px-4 py-2 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {/* All Categories */}
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#FF5A1F] text-white shadow-sm'
                : 'bg-white text-[#382216] border border-[#F0DCC2] hover:bg-[#FFF0D9]'
            }`}
          >
            <span>All Categories</span>
          </button>

          {/* Pure Veg */}
          <button
            type="button"
            onClick={() => setActiveFilter('veg')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
              activeFilter === 'veg'
                ? 'bg-[#4F8A43] text-white shadow-sm'
                : 'bg-white text-[#382216] border border-[#F0DCC2] hover:bg-[#FFF0D9]'
            }`}
          >
            <div className="w-3 h-3 rounded-[2px] border border-[#4F8A43] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#4F8A43]" />
            </div>
            <span>Pure Veg</span>
          </button>

          {/* Non-Veg */}
          <button
            type="button"
            onClick={() => setActiveFilter('non-veg')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
              activeFilter === 'non-veg'
                ? 'bg-[#D94335] text-white shadow-sm'
                : 'bg-white text-[#382216] border border-[#F0DCC2] hover:bg-[#FFF0D9]'
            }`}
          >
            <div className="w-3 h-3 rounded-[2px] border border-[#D94335] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D94335]" />
            </div>
            <span>Non-Veg</span>
          </button>

          {/* Chef's Special */}
          <button
            type="button"
            onClick={() => setActiveFilter(activeFilter === 'special' ? 'all' : 'special')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
              activeFilter === 'special'
                ? 'bg-[#F6C94D] text-[#382216] shadow-sm'
                : 'bg-white text-[#382216] border border-[#F0DCC2] hover:bg-[#FFF0D9]'
            }`}
          >
            <span className="material-symbols-outlined text-[14px] text-[#F6C94D]" style={{ fontVariationSettings: "'FILL' 1" }}>
              star
            </span>
            <span>Chef's Special</span>
          </button>
        </div>

        {/* 2-Column Responsive Category Cards Grid */}
        <div className="grid grid-cols-2 gap-3 px-4 pt-1 pb-4">
          {displayedCategories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>

      {/* Floating Cart Bar (appears when items added) */}
      <FloatingCartBar bottomOffset="bottom-16" />
    </main>
  );
}
