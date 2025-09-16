import React from 'react';

interface HydroponicLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const HydroponicLogo: React.FC<HydroponicLogoProps> = ({ 
  width = 200, 
  height = 100, 
  className = "" 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 800 400"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main H-MIND Text */}
      <g>
        {/* H */}
        <rect x="50" y="50" width="25" height="120" fill="#4CAF50"/>
        <rect x="50" y="100" width="60" height="20" fill="#4CAF50"/>
        <rect x="85" y="50" width="25" height="120" fill="#4CAF50"/>
        
        {/* Wheat decoration */}
        <g transform="translate(120, 80)">
          {/* Wheat stem */}
          <path d="M 0 0 Q 10 -20 20 -40" stroke="#7CB342" strokeWidth="3" fill="none"/>
          <path d="M 5 5 Q 15 -15 25 -35" stroke="#7CB342" strokeWidth="2" fill="none"/>
          
          {/* Wheat grains */}
          <g transform="translate(15, -35)">
            <ellipse cx="0" cy="0" rx="3" ry="8" fill="#4CAF50" transform="rotate(-15)"/>
            <ellipse cx="4" cy="2" rx="3" ry="8" fill="#4CAF50" transform="rotate(15)"/>
            <ellipse cx="-2" cy="4" rx="3" ry="8" fill="#4CAF50" transform="rotate(-25)"/>
            <ellipse cx="6" cy="6" rx="3" ry="8" fill="#4CAF50" transform="rotate(25)"/>
          </g>
          
          <g transform="translate(20, -25)">
            <ellipse cx="0" cy="0" rx="3" ry="8" fill="#4CAF50" transform="rotate(-10)"/>
            <ellipse cx="4" cy="2" rx="3" ry="8" fill="#4CAF50" transform="rotate(10)"/>
            <ellipse cx="-2" cy="4" rx="3" ry="8" fill="#4CAF50" transform="rotate(-20)"/>
          </g>
        </g>
        
        {/* Dash */}
        <rect x="160" y="100" width="30" height="20" fill="#4CAF50"/>
        
        {/* M */}
        <rect x="210" y="50" width="25" height="120" fill="#4CAF50"/>
        <path d="M 210 50 L 247.5 120 L 285 50" stroke="#4CAF50" strokeWidth="25" fill="none" strokeLinejoin="miter"/>
        <rect x="285" y="50" width="25" height="120" fill="#4CAF50"/>
        
        {/* I */}
        <rect x="340" y="50" width="25" height="120" fill="#4CAF50"/>
        
        {/* N */}
        <rect x="390" y="50" width="25" height="120" fill="#4CAF50"/>
        <path d="M 390 170 L 450 50" stroke="#4CAF50" strokeWidth="25" fill="none"/>
        <rect x="450" y="50" width="25" height="120" fill="#4CAF50"/>
        
        {/* D */}
        <rect x="500" y="50" width="25" height="120" fill="#4CAF50"/>
        <path d="M 525 50 Q 575 50 575 110 Q 575 170 525 170" stroke="#4CAF50" strokeWidth="25" fill="none"/>
      </g>
      
      {/* Subtitle Text */}
      <text x="50" y="220" fontSize="36" fill="#4CAF50" fontFamily="Arial, sans-serif" fontWeight="normal">
        Hydroponic Mitra Industri
      </text>
      
      {/* Collaboration section */}
      <text x="550" y="280" fontSize="24" fill="#4CAF50" fontFamily="Arial, sans-serif" fontWeight="bold">
        Collaboration With
      </text>
      
      {/* Partner logos placeholders */}
      <g transform="translate(550, 300)">
        {/* First logo placeholder (circular) */}
        <circle cx="30" cy="30" r="25" fill="#1976D2" stroke="#fff" strokeWidth="2"/>
        <text x="30" y="35" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">LOGO</text>
        
        {/* Second logo placeholder (rectangular) */}
        <rect x="80" y="5" width="120" height="50" fill="#FF6B35" stroke="#fff" strokeWidth="2" rx="5"/>
        <text x="140" y="20" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">SAHABAT</text>
        <text x="140" y="35" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">Satu HATI.</text>
        <text x="140" y="48" textAnchor="middle" fontSize="8" fill="white">@sahabat1hati</text>
      </g>
    </svg>
  );
};

export default HydroponicLogo;