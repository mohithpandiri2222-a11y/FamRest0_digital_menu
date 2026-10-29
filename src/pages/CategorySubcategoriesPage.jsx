import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getCategoryBySlug } from '../data/menu';
import { restaurant } from '../data/restaurant';
import SubcategoryCard from '../components/SubcategoryCard';
import FloatingCartBar from '../components/FloatingCartBar';

export default function CategorySubcategoriesPage() {
  const { categorySlug } = useParams();
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return <Navigate to="/categories" replace />;
  }

  // Get matching banner subtitle from reference image
  const getSubtitle = () => {
    switch (category.id) {
      case 'non-veg':
        return 'Flavourful dishes for every craving';
      case 'veg':
        return 'Fresh. Wholesome. Always Delicious.';
      case 'drinks':
        return 'Refreshing Sips for Every Mood';
      case 'desserts':
        return 'Sweet delights to make your heart smile';
      case 'chinese':
        return 'Authentic wok-tossed flavors & street delicacies';
      case 'snacks':
        return 'Crispy, cheesy bites for family sharing';
      default:
        return category.description;
    }
  };

  // Get category icon for header banner
  const getCategoryHeaderIcon = () => {
    switch (category.id) {
      case 'veg':
        return (
          <span className="material-symbols-outlined text-[24px] text-[#4F8A43]">
            eco
          </span>
        );
      case 'non-veg':
        return (
          <span className="material-symbols-outlined text-[24px] text-[#D94335]">
            kebab_dining
          </span>
        );
      case 'drinks':
        return (
          <span className="material-symbols-outlined text-[24px] text-[#FF5A1F]">
            local_bar
          </span>
        );
      case 'desserts':
        return (
          <span className="material-symbols-outlined text-[24px] text-[#C94316]">
            cake
          </span>
        );
      case 'chinese':
        return (
          <span className="material-symbols-outlined text-[24px] text-[#FF5A1F]">
            ramen_dining
          </span>
        );
      case 'snacks':
        return (
          <span className="material-symbols-outlined text-[24px] text-[#F6C94D]">
            fastfood
          </span>
        );
      default:
        return (
          <span className="material-symbols-outlined text-[24px] text-[#FF5A1F]">
            restaurant
          </span>
        );
    }
  };

  return (
    <main className="flex flex-col relative w-full pt-16 pb-24 bg-[#FFF8EC] min-h-screen">
      {/* Decorative Botanical Green Leaves on left edge (matching reference screen 3) */}
      <div className="absolute top-20 -left-2 pointer-events-none opacity-80 z-0 select-none">
        <svg width="40" height="80" viewBox="0 0 40 80" fill="none">
          <path d="M-5 10C12 8 24 20 22 35C12 35 3 25 -5 10Z" fill="#4F8A43" opacity="0.9" />
          <path d="M0 45C15 40 28 52 26 68C16 66 6 58 0 45Z" fill="#4F8A43" opacity="0.8" />
        </svg>
      </div>

      <div className="flex flex-col w-full max-w-lg mx-auto relative z-10">
        {/* Category Header Banner (Matching Screen 3, 6, 7) */}
        <div className="px-4 pt-3 pb-3 flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-full bg-[#FFF0D9] border border-[#F0DCC2] flex items-center justify-center mb-1 shadow-xs">
            {getCategoryHeaderIcon()}
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#382216] tracking-tight">
            {category.name}
          </h1>
          <p className="text-xs sm:text-sm text-[#806A58] mt-0.5">
            {getSubtitle()}
          </p>
        </div>

        {/* 2-Column Subcategory Grid (Matching reference image) */}
        <div className="grid grid-cols-2 gap-3 px-4 pt-1 pb-4">
          {category.subcategories.map((subcategory) => (
            <SubcategoryCard
              key={subcategory.id}
              categorySlug={category.slug}
              subcategory={subcategory}
              isNonVeg={category.isNonVeg}
              isVeg={category.isPureVeg}
            />
          ))}
        </div>
      </div>

      {/* Floating Cart Bar (appears when items in cart) */}
      <FloatingCartBar bottomOffset="bottom-16" />
    </main>
  );
}
