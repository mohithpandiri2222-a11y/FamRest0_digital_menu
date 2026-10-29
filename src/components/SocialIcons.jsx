import React from 'react';
import { restaurant } from '../data/restaurant';

export default function SocialIcons({ className = '', iconSize = 'w-4 h-4' }) {
  const { socialLinks } = restaurant;

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {/* Instagram */}
      {socialLinks.instagram && (
        <a
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow FamResto on Instagram"
          className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] active:scale-95 transition-all flex items-center justify-center text-white shadow-sm hover:opacity-90"
        >
          <svg className={iconSize} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
      )}

      {/* Facebook */}
      {socialLinks.facebook && (
        <a
          href={socialLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow FamResto on Facebook"
          className="w-9 h-9 rounded-full bg-[#1877F2] active:scale-95 transition-all flex items-center justify-center text-white shadow-sm hover:opacity-90"
        >
          <svg className={iconSize} fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
      )}

      {/* WhatsApp */}
      {socialLinks.whatsapp && (
        <a
          href={socialLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect with FamResto on WhatsApp"
          className="w-9 h-9 rounded-full bg-[#25D366] active:scale-95 transition-all flex items-center justify-center text-white shadow-sm hover:opacity-90"
        >
          <svg className={iconSize} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.002.571 1.777.822 2.806.822 3.181 0 5.767-2.586 5.767-5.766.001-3.182-2.585-5.77-5.767-5.77zm0 10.378c-.899 0-1.745-.24-2.482-.676l-.178-.106-1.571.412.419-1.532-.116-.185c-.482-.767-.736-1.666-.736-2.586 0-2.651 2.156-4.808 4.808-4.808 2.651 0 4.807 2.157 4.808 4.808 0 2.652-2.156 4.807-4.808 4.807zm8.397-6.852c-.105-.175-.386-.28-.807-.49-.421-.21-2.492-1.229-2.878-1.37-.386-.14-.667-.21-.947.21-.28.421-1.088 1.37-1.334 1.65-.245.28-.491.315-.912.105-.421-.21-1.777-.655-3.385-2.089-1.252-1.116-2.097-2.494-2.343-2.915-.245-.421-.026-.649.184-.858.19-.189.421-.49.632-.736.21-.245.28-.421.421-.701.14-.28.07-.525-.035-.736-.105-.21-.947-2.28-1.298-3.122-.341-.82-.688-.709-.947-.722l-.807-.014c-.28 0-.736.105-1.122.525-.386.421-1.473 1.438-1.473 3.508 0 2.07 1.508 4.07 1.718 4.35.21.28 2.964 4.526 7.18 6.347 1.003.433 1.786.692 2.396.886 1.008.32 1.925.275 2.65.166.808-.121 2.492-1.018 2.843-2.001.351-.983.351-1.824.246-2.001z"/>
          </svg>
        </a>
      )}
    </div>
  );
}
