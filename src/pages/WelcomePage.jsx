import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { restaurant } from '../data/restaurant';
import heroBiryaniImg from '../assets/images/hero_biryani.jpg';
import SocialIcons from '../components/SocialIcons';
import FamRestoLogo from '../components/FamRestoLogo';

export default function WelcomePage() {
  const navigate = useNavigate();
  const [isPressing, setIsPressing] = useState(false);

  const handleExplore = () => {
    setIsPressing(true);
    setTimeout(() => {
      setIsPressing(false);
      navigate('/categories');
    }, 150);
  };

  return (
    <main className="flex flex-col relative w-full bg-[#FFF8EC] min-h-screen selection:bg-[#FF5A1F]/20 selection:text-[#FF5A1F] overflow-x-hidden">
      {/* Decorative Botanical Green Leaves - Left Side */}
      <div className="absolute top-24 -left-3 pointer-events-none opacity-85 z-10 select-none">
        <svg width="60" height="120" viewBox="0 0 60 120" fill="none">
          <path d="M-5 15C18 10 35 28 32 48C18 48 5 35 -5 15Z" fill="#4F8A43" opacity="0.9" />
          <path d="M-5 15C12 28 25 38 32 48" stroke="#3A6A32" stroke-width="1.2" />
          <path d="M0 60C22 55 42 70 38 92C25 90 10 80 0 60Z" fill="#4F8A43" opacity="0.8" />
          <path d="M0 60C15 72 28 82 38 92" stroke="#3A6A32" stroke-width="1.2" />
        </svg>
      </div>

      {/* Decorative Botanical Green Leaves - Right Side */}
      <div className="absolute top-36 -right-3 pointer-events-none opacity-85 z-10 select-none scale-x-[-1]">
        <svg width="60" height="120" viewBox="0 0 60 120" fill="none">
          <path d="M-5 15C18 10 35 28 32 48C18 48 5 35 -5 15Z" fill="#4F8A43" opacity="0.9" />
          <path d="M-5 15C12 28 25 38 32 48" stroke="#3A6A32" stroke-width="1.2" />
          <path d="M0 65C20 60 38 74 35 95C22 92 8 82 0 65Z" fill="#4F8A43" opacity="0.8" />
          <path d="M0 65C14 76 26 86 35 95" stroke="#3A6A32" stroke-width="1.2" />
        </svg>
      </div>

      {/* Warm Ambient Glow in Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-96 bg-gradient-to-b from-[#FFF0D9] via-[#FFF8EC]/60 to-transparent pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#FF5A1F]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="flex flex-col w-full relative min-h-screen justify-between items-center px-6 py-6 sm:py-8 max-w-md mx-auto select-none">
        {/* Top: Brand Header */}
        <div className="flex flex-col items-center text-center w-full pt-2">
          {/* Chef Hat + FamResto Logo + Tagline */}
          <FamRestoLogo variant="welcome" showTagline={true} />

          {/* Welcoming Heading with Script Styling */}
          <div className="mt-4 flex flex-col items-center">
            <span className="font-script text-2xl text-[#806A58] font-semibold italic">
              Welcome to
            </span>
            <div className="flex items-center gap-2">
              <h1 className="font-script text-5xl sm:text-6xl font-bold text-[#C94316] tracking-tight leading-none">
                FamResto
              </h1>
              {/* Cute hand-drawn doodle heart */}
              <svg className="w-5 h-5 text-[#C94316] -mt-2 animate-soft-pulse" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
          </div>

          {/* Supporting Tagline from Reference */}
          <p className="font-script text-xl sm:text-2xl text-[#382216] font-medium mt-2 leading-tight">
            Delicious Food,<br />
            Great Moments,<br />
            Together Always.
          </p>
        </div>

        {/* Center: Hero Biryani Handi Image */}
        <div className="relative my-auto py-2 w-full flex items-center justify-center">
          {/* Ambient Warm Halo behind the dish */}
          <div className="absolute w-64 h-64 rounded-full bg-[#FF5A1F]/15 blur-2xl pointer-events-none" />

          {/* Steaming Food Photography Container */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full p-2 bg-gradient-to-b from-[#FFF0D9] to-[#FFFFFF] shadow-[0_12px_36px_rgba(56,34,22,0.14)] border border-[#F0DCC2] flex items-center justify-center">
            <div className="w-full h-full rounded-full overflow-hidden relative shadow-inner">
              <img
                src={heroBiryaniImg}
                alt="Steaming hot royal chicken dum biryani in an authentic brass handi"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#382216]/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Subtle Steam Particles */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-3 pointer-events-none animate-steam">
              <div className="w-1.5 h-6 bg-gradient-to-t from-transparent via-white/60 to-transparent rounded-full blur-[1px]" />
              <div className="w-2 h-8 bg-gradient-to-t from-transparent via-white/70 to-transparent rounded-full blur-[1px] delay-150" />
              <div className="w-1.5 h-6 bg-gradient-to-t from-transparent via-white/50 to-transparent rounded-full blur-[1px] delay-300" />
            </div>
          </div>
        </div>

        {/* Bottom: Explore Menu CTA & Social Icons */}
        <div className="w-full flex flex-col items-center gap-4 max-w-xs mt-auto pb-2">
          {/* Orange Explore Menu Button */}
          <button
            id="exploreBtn"
            onClick={handleExplore}
            className={`w-full py-3.5 px-6 rounded-full bg-[#FF5A1F] hover:bg-[#C94316] text-white active:scale-[0.98] transition-all duration-200 shadow-[0_8px_24px_rgba(255,90,31,0.35)] flex items-center justify-center gap-2 group cursor-pointer font-bold text-base ${
              isPressing ? 'scale-95 opacity-90' : ''
            }`}
          >
            <span>Explore Menu</span>
            <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>

          {/* Social Media Connect Section */}
          <div className="flex flex-col items-center gap-1.5 pt-1">
            <span className="text-[11px] font-semibold tracking-wider text-[#806A58] uppercase">
              Follow Us
            </span>
            <SocialIcons iconSize="w-4 h-4" />
          </div>
        </div>
      </div>
    </main>
  );
}
