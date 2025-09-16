import React from 'react';

interface MitraCoffeeLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const MitraCoffeeLogo: React.FC<MitraCoffeeLogoProps> = ({ 
  width = 200, 
  height = 200, 
  className = "" 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 400 400"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Circle */}
      <circle cx="200" cy="150" r="120" fill="#D4A574" opacity="0.3"/>
      
      {/* Coffee Cup */}
      <g transform="translate(200, 150)">
        {/* Cup Body */}
        <path
          d="M -50 -30 L -50 50 Q -50 60 -40 60 L 40 60 Q 50 60 50 50 L 50 -30 Z"
          fill="#F5E6D3"
          stroke="#8B4513"
          strokeWidth="4"
        />
        
        {/* Cup Lid */}
        <ellipse cx="0" cy="-30" rx="50" ry="8" fill="#D4A574" stroke="#8B4513" strokeWidth="3"/>
        
        {/* Straw */}
        <path
          d="M 10 -40 Q 15 -55 20 -70"
          fill="none"
          stroke="#8B4513"
          strokeWidth="4"
          strokeLinecap="round"
        />
        
        {/* Coffee Beans on Cup */}
        <g transform="translate(-15, 10)">
          <ellipse cx="0" cy="0" rx="8" ry="12" fill="#8B4513" transform="rotate(-15)"/>
          <path d="M -2 -8 Q 0 0 2 8" stroke="#654321" strokeWidth="1.5" fill="none"/>
        </g>
        
        <g transform="translate(5, 5)">
          <ellipse cx="0" cy="0" rx="8" ry="12" fill="#8B4513" transform="rotate(20)"/>
          <path d="M -2 -8 Q 0 0 2 8" stroke="#654321" strokeWidth="1.5" fill="none"/>
        </g>
        
        <g transform="translate(15, 20)">
          <ellipse cx="0" cy="0" rx="8" ry="12" fill="#8B4513" transform="rotate(-30)"/>
          <path d="M -2 -8 Q 0 0 2 8" stroke="#654321" strokeWidth="1.5" fill="none"/>
        </g>
      </g>
      
      {/* Text */}
      <text x="200" y="280" textAnchor="middle" fontSize="48" fontWeight="bold" fill="#5D4037" fontFamily="Arial, sans-serif">
        MITRA
      </text>
      <text x="200" y="330" textAnchor="middle" fontSize="36" fontWeight="normal" fill="#5D4037" fontFamily="Arial, sans-serif" letterSpacing="4px">
        COFFEE
      </text>
    </svg>
  );
};

export default MitraCoffeeLogo;