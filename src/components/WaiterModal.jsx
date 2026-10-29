import React from 'react';
import { restaurant } from '../data/restaurant';
import { useCart } from '../context/CartContext';
import DietaryBadge from './DietaryBadge';

export default function WaiterModal({ isOpen, onClose }) {
  const { cart, totalItems, overallTotal, formatINR, cookingNote } = useCart();

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="waiter-modal-title"
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
    >
      <div className="bg-white rounded-3xl p-5 w-full max-w-sm shadow-[0_12px_40px_rgba(56,34,22,0.18)] flex flex-col items-center border border-[#F0DCC2] max-h-[90vh] overflow-hidden">
        {/* Chef Hat / Bell Badge */}
        <div className="relative mb-3">
          <div className="w-14 h-14 rounded-full bg-[#FFF0D9] text-[#FF5A1F] border border-[#F0DCC2] flex items-center justify-center shadow-xs">
            <span className="material-symbols-outlined text-[28px]">soup_kitchen</span>
          </div>
        </div>

        {/* Modal Title & Notice */}
        <h3 id="waiter-modal-title" className="text-lg font-bold text-[#382216] text-center">
          Show to Waiter
        </h3>
        <p className="text-xs text-[#806A58] text-center mt-1 px-2 leading-relaxed">
          Please present this digital token to your server or waiter to fire your order directly to the kitchen.
        </p>

        {/* Table & Total Header Badge */}
        <div className="my-3 p-3 bg-[#FFF8EC] rounded-2xl w-full border border-[#F0DCC2] flex items-center justify-between">
          <div>
            <span className="text-sm font-extrabold text-[#C94316] tracking-wider block">
              {restaurant.tableLabel.toUpperCase()}
            </span>
            <span className="text-[11px] font-medium text-[#806A58]">
              {restaurant.diningContext} • {totalItems} {totalItems === 1 ? 'Item' : 'Items'}
            </span>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-[#806A58] uppercase font-bold block">Total Amount</span>
            <span className="text-base font-extrabold text-[#FF5A1F]">
              {formatINR(overallTotal)}
            </span>
          </div>
        </div>

        {/* Scrollable Item Breakdown */}
        <div className="w-full flex-1 overflow-y-auto pr-1 my-1 flex flex-col gap-2 max-h-52 no-scrollbar">
          {cart.map((item) => (
            <div
              key={item.dishId}
              className="flex items-center justify-between py-1.5 px-3 rounded-xl bg-[#FFF0D9]/50 border border-[#F0DCC2]/60 text-xs"
            >
              <div className="flex items-center gap-2 min-w-0">
                <DietaryBadge type={item.dietary} className="!w-3 !h-3" />
                <span className="font-bold text-[#382216] truncate">
                  {item.name}
                </span>
                <span className="text-[#806A58] font-bold shrink-0">
                  ×{item.quantity}
                </span>
              </div>
              <span className="font-extrabold text-[#382216] shrink-0 ml-2">
                {formatINR(item.price * item.quantity)}
              </span>
            </div>
          ))}
        </div>

        {/* Special Instructions / Cooking Notes */}
        {cookingNote && (
          <div className="w-full my-2 p-2.5 bg-[#FFF0D9] rounded-xl border border-[#F0DCC2] text-xs text-[#382216]">
            <span className="font-bold text-[#C94316]">Chef Note:</span> "{cookingNote}"
          </div>
        )}

        {/* Close / Action Button */}
        <div className="w-full mt-3 pt-2 border-t border-[#F0DCC2]">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-3 rounded-full bg-[#FF5A1F] hover:bg-[#C94316] text-white text-sm font-bold shadow-[0_8px_24px_rgba(255,90,31,0.3)] active:scale-95 transition-all cursor-pointer"
          >
            Done with Waiter
          </button>
        </div>
      </div>
    </div>
  );
}
