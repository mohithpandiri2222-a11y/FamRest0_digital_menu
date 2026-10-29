import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { getCategoryBySlug, getSubcategoryBySlug, getDishesBySubcategory } from '../data/menu';
import { restaurant } from '../data/restaurant';
import DishCard from '../components/DishCard';
import FloatingCartBar from '../components/FloatingCartBar';

export default function DishListingPage() {
  const { categorySlug, subcategorySlug } = useParams();
  const [filterType, setFilterType] = useState('all');

  const category = getCategoryBySlug(categorySlug);
  const subcategory = getSubcategoryBySlug(categorySlug, subcategorySlug);

  if (!category || !subcategory) {
    return <Navigate to="/categories" replace />;
  }

  const allDishes = getDishesBySubcategory(subcategory.id);

  // Apply sub-filter
  const filteredDishes = allDishes.filter((dish) => {
    if (filterType === 'all') return true;
    if (filterType === 'veg') return dish.dietary === 'veg';
    if (filterType === 'non-veg') return dish.dietary === 'non-veg';
    if (filterType === 'special') return dish.isChefSpecial || !!dish.tag;
    if (filterType === 'dum') return dish.name.toLowerCase().includes('dum');
    if (filterType === 'fry') return dish.name.toLowerCase().includes('fry');
    return true;
  });

  const isBiryaniCategory = subcategory.slug === 'biryani';
  const isPureVegCategory = category.isPureVeg;
  const isNonVegCategory = category.isNonVeg;

  return (
    <main className="flex flex-col relative w-full pt-16 pb-28 bg-[#FFF8EC] min-h-screen">
      <div className="flex flex-col w-full max-w-lg mx-auto">
        {/* Category & Subcategory Header Badge */}
        <div className="px-4 pt-2 pb-1 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#FFF0D9] border border-[#F0DCC2] flex items-center justify-center text-[#FF5A1F]">
              <span className="material-symbols-outlined text-[18px]">
                {subcategory.icon || 'restaurant'}
              </span>
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-[#382216]">
                {subcategory.name}
              </h1>
              <p className="text-[11px] text-[#806A58]">
                {category.name} • {filteredDishes.length} {filteredDishes.length === 1 ? 'item' : 'items'}
              </p>
            </div>
          </div>
        </div>

        {/* Filter Pills (e.g. All, Dum Biryani, Fry Biryani, Specials - Matching Screen 4) */}
        {allDishes.length > 0 && isBiryaniCategory && (
          <div className="px-4 py-2 flex items-center gap-2 overflow-x-auto no-scrollbar">
            <button
              type="button"
              onClick={() => setFilterType('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                filterType === 'all'
                  ? 'bg-[#FF5A1F] text-white shadow-sm'
                  : 'bg-white text-[#382216] border border-[#F0DCC2] hover:bg-[#FFF0D9]'
              }`}
            >
              <span>All</span>
            </button>

            {isNonVegCategory && (
              <>
                <button
                  type="button"
                  onClick={() => setFilterType('dum')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    filterType === 'dum'
                      ? 'bg-[#FF5A1F] text-white shadow-sm'
                      : 'bg-white text-[#382216] border border-[#F0DCC2] hover:bg-[#FFF0D9]'
                  }`}
                >
                  <span>Dum Biryani</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFilterType('fry')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    filterType === 'fry'
                      ? 'bg-[#FF5A1F] text-white shadow-sm'
                      : 'bg-white text-[#382216] border border-[#F0DCC2] hover:bg-[#FFF0D9]'
                  }`}
                >
                  <span>Fry Biryani</span>
                </button>
              </>
            )}

            {isPureVegCategory && (
              <button
                type="button"
                onClick={() => setFilterType('dum')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                  filterType === 'dum'
                    ? 'bg-[#FF5A1F] text-white shadow-sm'
                    : 'bg-white text-[#382216] border border-[#F0DCC2] hover:bg-[#FFF0D9]'
                }`}
              >
                <span>Dum Biryani</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => setFilterType(filterType === 'special' ? 'all' : 'special')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                filterType === 'special'
                  ? 'bg-[#F6C94D] text-[#382216] shadow-sm'
                  : 'bg-white text-[#382216] border border-[#F0DCC2] hover:bg-[#FFF0D9]'
              }`}
            >
              <span>Specials</span>
            </button>
          </div>
        )}

        {/* Dish List Container (Horizontal cards, 1 per row) */}
        {allDishes.length > 0 ? (
          <div className="flex flex-col gap-3 px-4 pt-1 pb-4">
            {filteredDishes.length > 0 ? (
              filteredDishes.map((dish) => (
                <DishCard key={dish.id} dish={dish} />
              ))
            ) : (
              <div className="py-12 text-center text-[#806A58] bg-white rounded-2xl border border-[#F0DCC2] p-6 shadow-xs">
                <span className="material-symbols-outlined text-[32px] text-[#C94316] mb-2 block">
                  filter_alt_off
                </span>
                <p className="text-sm font-semibold text-[#382216]">No dishes match this filter.</p>
                <button
                  type="button"
                  onClick={() => setFilterType('all')}
                  className="mt-3 px-4 py-1.5 rounded-full bg-[#FF5A1F] text-white text-xs font-bold shadow-sm"
                >
                  Show All Dishes
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Subcategory with pending data notice */
          <div className="px-4 py-8">
            <div className="bg-white rounded-2xl p-6 border border-[#F0DCC2] text-center shadow-xs">
              <div className="w-12 h-12 rounded-full bg-[#FFF0D9] text-[#FF5A1F] flex items-center justify-center mx-auto mb-3">
                <span className="material-symbols-outlined text-[24px]">menu_book</span>
              </div>
              <h3 className="text-base font-bold text-[#382216] mb-1">
                Menu Data Pending
              </h3>
              <p className="text-xs text-[#806A58] max-w-xs mx-auto leading-relaxed mb-4">
                The {subcategory.name} items for {restaurant.name} are currently being updated by the kitchen. Please ask your waiter for available specials.
              </p>
              <Link
                to={`/menu/${category.slug}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FF5A1F] text-white text-xs font-bold shadow-sm hover:bg-[#C94316] transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                <span>Back to {category.name}</span>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Floating Cart Bar (appears when items in cart) */}
      <FloatingCartBar bottomOffset="bottom-16" />
    </main>
  );
}
