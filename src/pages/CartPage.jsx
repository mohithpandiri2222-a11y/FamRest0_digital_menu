import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { restaurant } from '../data/restaurant';
import DietaryBadge from '../components/DietaryBadge';
import ClearCartModal from '../components/ClearCartModal';

export default function CartPage({ onShowSummary }) {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalItems,
    subtotal,
    overallTotal,
    formatINR,
    cookingNote,
    setCookingNote
  } = useCart();

  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [showNoteInput, setShowNoteInput] = useState(false);

  const handleConfirmClear = () => {
    clearCart();
    setShowClearConfirm(false);
  };

  return (
    <main className="flex flex-col relative w-full pt-16 pb-28 bg-[#FFF8EC] min-h-screen">
      <div className="flex flex-col w-full max-w-lg mx-auto">
        {cart.length > 0 ? (
          <>
            {/* Dine-in Context Bar */}
            <div className="px-4 pt-2 pb-2 flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FFF0D9] rounded-full border border-[#F0DCC2] text-xs font-semibold text-[#382216]">
                <span className="material-symbols-outlined text-[15px] text-[#FF5A1F]">restaurant</span>
                <span>{restaurant.diningContext}</span>
              </div>

              <button
                type="button"
                onClick={() => setShowClearConfirm(true)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#806A58] hover:text-[#D94335] active:scale-95 transition-all py-1 px-2.5 rounded-full hover:bg-[#FFEAEA] cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">delete_sweep</span>
                <span>Clear Cart</span>
              </button>
            </div>

            {/* Cart Items List Container */}
            <div className="flex flex-col px-4 gap-3 mt-1" id="cart-item-list">
              {cart.map((item) => (
                <div
                  key={item.dishId}
                  className="flex items-center gap-3 bg-white p-3 rounded-2xl shadow-[0_4px_16px_rgba(56,34,22,0.06)] border border-[#F0DCC2] relative overflow-hidden"
                >
                  {/* Thumbnail */}
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-[#FFF0D9]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex flex-col min-w-0 flex-1 justify-between py-0.5">
                    <div className="flex items-start justify-between gap-1">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <DietaryBadge type={item.dietary} />
                        <h3 className="font-bold text-sm text-[#382216] truncate">
                          {item.name}
                        </h3>
                      </div>

                      {/* Remove Trash Button */}
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.dishId)}
                        aria-label={`Remove ${item.name} from cart`}
                        className="w-6 h-6 flex items-center justify-center rounded-full text-[#806A58] hover:text-[#D94335] active:scale-90 transition-all shrink-0 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[16px]">delete</span>
                      </button>
                    </div>

                    <p className="text-[11px] text-[#806A58] truncate mt-0.5">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between mt-2 pt-0.5">
                      <span className="text-sm font-bold text-[#FF5A1F]">
                        {formatINR(item.price)}
                      </span>

                      {/* Pill Stepper in Accent Orange (Prevents dropping below 1) */}
                      <div className="flex items-center bg-[#FF5A1F] text-white rounded-full px-1 py-0.5 shadow-sm">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.dishId, -1)}
                          disabled={item.quantity <= 1}
                          aria-label={`Decrease quantity of ${item.name}`}
                          className={`w-6 h-6 flex items-center justify-center rounded-full transition-transform active:scale-90 ${
                            item.quantity <= 1
                              ? 'opacity-40 cursor-not-allowed'
                              : 'hover:bg-white/20 cursor-pointer'
                          }`}
                        >
                          <span className="material-symbols-outlined text-[14px]">remove</span>
                        </button>

                        <span className="text-xs px-2 min-w-[20px] text-center font-bold">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => updateQuantity(item.dishId, 1)}
                          aria-label={`Increase quantity of ${item.name}`}
                          className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/20 transition-transform active:scale-90 cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-[14px]">add</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cooking Notes Accordion */}
            <div className="px-4 mt-3">
              <div
                onClick={() => setShowNoteInput(!showNoteInput)}
                className="bg-white rounded-xl p-3 flex items-center justify-between cursor-pointer hover:bg-[#FFF0D9]/50 transition-colors border border-[#F0DCC2]"
              >
                <div className="flex items-center gap-2 text-[#806A58]">
                  <span className="material-symbols-outlined text-[18px] text-[#FF5A1F]">edit_note</span>
                  <span className="text-xs font-medium text-[#382216]">
                    {cookingNote ? `Note: "${cookingNote}"` : 'Add special instructions for chef...'}
                  </span>
                </div>
                <span className="material-symbols-outlined text-[18px] text-[#806A58]">
                  {showNoteInput ? 'expand_less' : 'chevron_right'}
                </span>
              </div>

              {showNoteInput && (
                <div className="mt-2 p-3 bg-white rounded-xl border border-[#F0DCC2]">
                  <textarea
                    rows={2}
                    value={cookingNote}
                    onChange={(e) => setCookingNote(e.target.value)}
                    placeholder="e.g. Less spicy, keep gravy separate, extra lemons..."
                    className="w-full bg-[#FFF8EC] rounded-lg p-2.5 text-xs text-[#382216] placeholder:text-[#806A58] focus:outline-none focus:ring-1 focus:ring-[#FF5A1F] border border-[#F0DCC2] resize-none"
                  />
                  <div className="flex justify-end mt-1.5">
                    <button
                      type="button"
                      onClick={() => setShowNoteInput(false)}
                      className="px-3 py-1 rounded-full bg-[#FF5A1F] text-white text-xs font-semibold hover:bg-[#C94316] transition-colors cursor-pointer"
                    >
                      Save Note
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Order Bill Summary Breakdown */}
            <div className="px-4 mt-4">
              <div className="bg-white rounded-2xl p-4 shadow-[0_4px_16px_rgba(56,34,22,0.06)] flex flex-col gap-2 border border-[#F0DCC2]">
                <div className="flex items-center justify-between text-xs text-[#806A58]">
                  <span>Items Subtotal ({totalItems} items)</span>
                  <span className="text-xs text-[#382216] font-bold">
                    {formatINR(subtotal)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#806A58]">
                  <span>Taxes & GST (5%)</span>
                  <span className="text-xs text-[#4F8A43] font-semibold">Included</span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#806A58]">
                  <span>Restaurant Service Charge</span>
                  <span className="text-xs text-[#382216] font-semibold">₹0.00</span>
                </div>
                <div className="h-px bg-[#F0DCC2] my-1" />
                <div className="flex items-center justify-between pt-0.5">
                  <div>
                    <span className="text-sm font-bold text-[#382216] block">
                      Total
                    </span>
                    <span className="text-[11px] text-[#806A58]">Total Payable</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-extrabold text-[#FF5A1F] block">
                      {formatINR(overallTotal)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Primary Action Area: Order Summary Button */}
            <div className="px-4 mt-5 flex flex-col gap-2">
              <button
                type="button"
                id="view-summary-btn"
                onClick={onShowSummary}
                className="w-full bg-[#FF5A1F] hover:bg-[#C94316] text-white text-base font-bold py-3.5 px-6 rounded-full shadow-[0_8px_24px_rgba(255,90,31,0.35)] flex items-center justify-center gap-2 active:scale-[0.98] transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">receipt_long</span>
                <span>View Order Summary</span>
              </button>
              <p className="text-[11px] text-center text-[#806A58] px-4 leading-relaxed">
                Review your order summary and itemized breakdown.
              </p>
            </div>
          </>
        ) : (
          /* Empty Cart State (Matching Screen 5 in reference image!) */
          <div className="flex flex-col items-center justify-center text-center py-16 px-6 select-none">
            {/* Cute Steaming Cooking Pot / Casserole Dish Illustration with Leaves */}
            <div className="relative mb-5 flex items-center justify-center">
              {/* Left botanical leaf doodle */}
              <div className="absolute -left-10 top-4 text-[#4F8A43]">
                <svg width="28" height="40" viewBox="0 0 28 40" fill="none">
                  <path d="M0 10C12 8 20 18 18 30C10 30 2 22 0 10Z" fill="#4F8A43" opacity="0.85" />
                  <path d="M5 25C14 22 22 28 20 38C12 37 5 32 5 25Z" fill="#4F8A43" opacity="0.7" />
                </svg>
              </div>

              {/* Pot Illustration */}
              <div className="relative flex flex-col items-center">
                {/* Steam Swirls */}
                <div className="flex gap-2 mb-1.5 animate-steam">
                  <svg width="12" height="22" viewBox="0 0 12 22" fill="none">
                    <path d="M6 21C6 16 10 13 10 9C10 5 6 3 6 1" stroke="#FF5A1F" stroke-width="1.8" stroke-linecap="round" stroke-opacity="0.7"/>
                  </svg>
                  <svg width="14" height="26" viewBox="0 0 14 26" fill="none" className="-mt-1">
                    <path d="M7 25C7 19 12 15 12 10C12 5 7 3 7 1" stroke="#FF5A1F" stroke-width="2" stroke-linecap="round" stroke-opacity="0.85"/>
                  </svg>
                  <svg width="12" height="22" viewBox="0 0 12 22" fill="none">
                    <path d="M6 21C6 16 10 13 10 9C10 5 6 3 6 1" stroke="#FF5A1F" stroke-width="1.8" stroke-linecap="round" stroke-opacity="0.7"/>
                  </svg>
                </div>

                {/* Pot Body */}
                <div className="w-24 h-16 rounded-b-2xl rounded-t-sm bg-white border-2 border-[#C94316] relative flex items-center justify-center shadow-md">
                  {/* Pot Rim / Handles */}
                  <div className="absolute -top-2 w-28 h-2.5 rounded-full bg-[#FF5A1F] border border-[#C94316]" />
                  <div className="absolute -left-3 top-3 w-3 h-5 rounded-l-full border-2 border-r-0 border-[#C94316] bg-[#FFF0D9]" />
                  <div className="absolute -right-3 top-3 w-3 h-5 rounded-r-full border-2 border-l-0 border-[#C94316] bg-[#FFF0D9]" />

                  {/* Decorative stripe on pot */}
                  <div className="w-16 h-1 rounded-full bg-[#FFF0D9]" />
                </div>
              </div>

              {/* Right botanical leaf doodle */}
              <div className="absolute -right-10 top-4 text-[#4F8A43] scale-x-[-1]">
                <svg width="28" height="40" viewBox="0 0 28 40" fill="none">
                  <path d="M0 10C12 8 20 18 18 30C10 30 2 22 0 10Z" fill="#4F8A43" opacity="0.85" />
                  <path d="M5 25C14 22 22 28 20 38C12 37 5 32 5 25Z" fill="#4F8A43" opacity="0.7" />
                </svg>
              </div>
            </div>

            {/* Heading & Subtext (Matching Screen 5) */}
            <h2 className="text-xl sm:text-2xl font-bold text-[#382216] mb-1">
              Your cart is empty
            </h2>
            <p className="text-xs sm:text-sm text-[#806A58] max-w-xs mb-6">
              Looks like you haven't added anything yet.
            </p>

            {/* Orange Pill Button "Explore Menu ->" */}
            <Link
              to="/categories"
              className="py-3 px-8 rounded-full bg-[#FF5A1F] hover:bg-[#C94316] text-white text-sm font-bold shadow-[0_8px_24px_rgba(255,90,31,0.35)] active:scale-95 transition-all flex items-center gap-2"
            >
              <span>Explore Menu</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        )}
      </div>

      {/* Confirmation Modal for Clearing Cart */}
      <ClearCartModal
        isOpen={showClearConfirm}
        onConfirm={handleConfirmClear}
        onCancel={() => setShowClearConfirm(false)}
      />
    </main>
  );
}
