import React from 'react';

export default function DietaryBadge({ type, className = '' }) {
  const isVeg = type === 'veg' || type === 'pure-veg';
  const color = isVeg ? '#4F8A43' : '#D94335';
  const label = isVeg ? 'Pure Veg' : 'Non-Veg';

  return (
    <span
      className={`w-4 h-4 rounded-[3px] flex items-center justify-center shrink-0 bg-white ${className}`}
      style={{
        border: `1.5px solid ${color}`,
      }}
      title={label}
      aria-label={label}
    >
      <span
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: color }}
      />
    </span>
  );
}

