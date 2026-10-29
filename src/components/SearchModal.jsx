import React, { useState, useEffect, useRef } from 'react';
import { dishes } from '../data/menu';
import DishCard from './DishCard';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('all'); // 'all', 'veg', 'non-veg'
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setDietaryFilter('all');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Filter dishes
  const filteredDishes = dishes.filter(dish => {
    const matchesQuery = !query.trim() || 
      dish.name.toLowerCase().includes(query.toLowerCase().trim()) ||
      dish.description.toLowerCase().includes(query.toLowerCase().trim());
    
    const matchesDiet = dietaryFilter === 'all' || dish.dietary === dietaryFilter;

    return matchesQuery && matchesDiet;
  });

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#FFF8EC] animate-fade-in">
      {/* Top Search Bar */}
      <div className="pt-safe border-b border-[#F0DCC2] bg-white px-4 pb-3 shadow-xs">
        <div className="flex items-center gap-2 pt-3 max-w-lg mx-auto">
          <div className="relative flex-1 flex items-center">
            <span className="material-symbols-outlined absolute left-3.5 text-[#806A58] text-[20px]">
              search
            </span>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search biryani, noodles, drinks..."
              className="w-full bg-[#FFF8EC] rounded-full pl-10 pr-10 py-2 text-sm text-[#382216] placeholder:text-[#806A58] focus:outline-none focus:ring-2 focus:ring-[#FF5A1F] border border-[#F0DCC2]"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear search query"
                className="absolute right-3 text-[#806A58] hover:text-[#382216] cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1.5 text-[#806A58] hover:text-[#382216] text-xs font-bold active:scale-95 transition-all cursor-pointer"
          >
            Cancel
          </button>
        </div>

        {/* Dietary Filter Pills in Search */}
        <div className="flex items-center gap-2 pt-2.5 max-w-lg mx-auto overflow-x-auto no-scrollbar">
          <button
            type="button"
            onClick={() => setDietaryFilter('all')}
            className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 cursor-pointer transition-all ${
              dietaryFilter === 'all'
                ? 'bg-[#FF5A1F] text-white shadow-xs'
                : 'bg-[#FFF0D9] text-[#382216] border border-[#F0DCC2]'
            }`}
          >
            All Items
          </button>
          <button
            type="button"
            onClick={() => setDietaryFilter('veg')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold shrink-0 cursor-pointer transition-all ${
              dietaryFilter === 'veg'
                ? 'bg-[#4F8A43] text-white shadow-xs'
                : 'bg-[#FFF0D9] text-[#382216] border border-[#F0DCC2]'
            }`}
          >
            <div className="w-2.5 h-2.5 rounded-[2px] border border-[#4F8A43] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#4F8A43]" />
            </div>
            <span>Pure Veg</span>
          </button>
          <button
            type="button"
            onClick={() => setDietaryFilter('non-veg')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold shrink-0 cursor-pointer transition-all ${
              dietaryFilter === 'non-veg'
                ? 'bg-[#D94335] text-white shadow-xs'
                : 'bg-[#FFF0D9] text-[#382216] border border-[#F0DCC2]'
            }`}
          >
            <div className="w-2.5 h-2.5 rounded-[2px] border border-[#D94335] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D94335]" />
            </div>
            <span>Non-Veg</span>
          </button>
        </div>
      </div>

      {/* Search Results */}
      <div className="flex-1 overflow-y-auto px-4 py-4 max-w-lg mx-auto w-full">
        {filteredDishes.length > 0 ? (
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-[#806A58] px-1">
              {filteredDishes.length} {filteredDishes.length === 1 ? 'result found' : 'results found'}
            </span>
            {filteredDishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-[#806A58]">
            <span className="material-symbols-outlined text-[48px] text-[#FF5A1F]/40 mb-2 block">
              search_off
            </span>
            <p className="text-sm font-semibold text-[#382216]">No matching dishes found</p>
            <p className="text-xs text-[#806A58] mt-1 max-w-xs mx-auto">
              Try searching for something else like "Biryani", "Noodles", or "Juice".
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
