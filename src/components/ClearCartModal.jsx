import React from 'react';

export default function ClearCartModal({ isOpen, onConfirm, onCancel }) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="clear-cart-title"
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
    >
      <div className="bg-white rounded-3xl p-5 w-full max-w-xs shadow-[0_12px_40px_rgba(56,34,22,0.18)] flex flex-col items-center text-center border border-[#F0DCC2]">
        <div className="w-12 h-12 rounded-full bg-[#FFEAEA] text-[#D94335] flex items-center justify-center mb-3">
          <span className="material-symbols-outlined text-[24px]">delete_sweep</span>
        </div>

        <h3 id="clear-cart-title" className="text-base font-bold text-[#382216]">
          Clear Entire Cart?
        </h3>
        <p className="text-xs text-[#806A58] mt-1 mb-4 leading-relaxed">
          Are you sure you want to remove all selected dishes from your order?
        </p>

        <div className="flex items-center gap-2.5 w-full">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 py-2 rounded-full bg-[#FFF0D9] hover:bg-[#FCE8CE] text-[#382216] text-xs font-semibold active:scale-95 transition-all cursor-pointer border border-[#F0DCC2]"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 py-2 rounded-full bg-[#D94335] hover:bg-[#C94316] text-white text-xs font-bold active:scale-95 transition-all cursor-pointer shadow-sm"
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}
