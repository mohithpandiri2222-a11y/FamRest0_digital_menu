import React from 'react';
import { restaurant } from '../data/restaurant';

export default function TableInfoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
    >
      <div className="bg-white rounded-3xl p-5 w-full max-w-xs shadow-[0_12px_40px_rgba(56,34,22,0.18)] flex flex-col items-center text-center border border-[#F0DCC2]">
        <div className="w-12 h-12 rounded-full bg-[#FFF0D9] text-[#FF5A1F] border border-[#F0DCC2] flex items-center justify-center mb-3 shadow-xs">
          <span className="material-symbols-outlined text-[26px]">qr_code_2</span>
        </div>

        <h3 className="text-lg font-bold text-[#382216]">
          Table Details
        </h3>
        <p className="text-xs text-[#806A58] mt-1 leading-relaxed">
          You are currently dining at <strong className="text-[#C94316] font-bold">{restaurant.tableLabel}</strong> ({restaurant.diningContext}).
        </p>

        <div className="my-4 p-3 rounded-2xl bg-[#FFF8EC] w-full border border-[#F0DCC2] text-left text-xs text-[#806A58] space-y-1.5">
          <div className="flex justify-between">
            <span>Restaurant:</span>
            <span className="text-[#382216] font-bold">{restaurant.name}</span>
          </div>
          <div className="flex justify-between">
            <span>Table Number:</span>
            <span className="text-[#C94316] font-bold">{restaurant.tableLabel}</span>
          </div>
          <div className="flex justify-between">
            <span>Station:</span>
            <span className="text-[#382216] font-semibold">Family Dining Section</span>
          </div>
          <div className="flex justify-between">
            <span>Server Assigned:</span>
            <span className="text-[#382216] font-semibold">Anita</span>
          </div>
          <div className="flex justify-between">
            <span>Kitchen Status:</span>
            <span className="text-[#4F8A43] font-semibold">● Open & Serving</span>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="w-full py-2.5 rounded-full bg-[#FF5A1F] hover:bg-[#C94316] text-white text-xs font-bold active:scale-95 transition-all cursor-pointer shadow-sm"
        >
          Close
        </button>
      </div>
    </div>
  );
}
