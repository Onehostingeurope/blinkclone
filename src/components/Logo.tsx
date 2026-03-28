import React from 'react';

interface LogoProps {
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ size = 28 }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        cursor: 'pointer',
      }}
    >
      {/* Teal rounded square with icon */}
      <div
        style={{
          width: size,
          height: size,
          backgroundColor: '#00c9a7',
          borderRadius: Math.round(size * 0.25),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <svg
          width={Math.round(size * 0.65)}
          height={Math.round(size * 0.65)}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Two overlapping rounded rectangles */}
          <rect
            x="4"
            y="5"
            width="9"
            height="9"
            rx="2"
            ry="2"
            fill="black"
          />
          <rect
            x="11"
            y="10"
            width="9"
            height="9"
            rx="2"
            ry="2"
            fill="black"
          />
        </svg>
      </div>

      {/* "Blink" text */}
      <span
        style={{
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#ffffff',
          letterSpacing: '-0.5px',
        }}
      >
        Blink
      </span>
    </div>
  );
};

export default Logo;
