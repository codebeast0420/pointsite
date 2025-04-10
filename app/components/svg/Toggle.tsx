import React from 'react';

interface ToggleProps {
  className?: string;
  width?: number;
  height?: number;
}

const Toggle: React.FC<ToggleProps> = ({ 
  className = '', 
  width = 30, 
  height = 17 
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 30 17" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect y="0.678223" width="30" height="16" rx="8" fill="url(#paint0_linear_1_236)"/>
      <circle cx="22" cy="8.67838" r="6.66667" fill="white"/>
      <defs>
        <linearGradient id="paint0_linear_1_236" x1="-3.72529e-08" y1="11.3449" x2="30" y2="6.34489" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C093FF"/>
          <stop offset="0.515" stopColor="#FFA9EC"/>
          <stop offset="0.871688" stopColor="#FFC65B"/>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Toggle;