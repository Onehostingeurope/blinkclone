import React from 'react';

interface ProgressBarProps {
  value: number | string;
  max?: number;
  color?: string;
}

export default function ProgressBar({
  value,
  max = 100,
  color = '#00c9a7',
}: ProgressBarProps) {
  const numVal = typeof value === 'string' ? parseFloat(value) : value;
  const percentage = Math.min((numVal / max) * 100, 100);

  return (
    <div
      style={{
        width: '100%',
        height: '5px',
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        borderRadius: '10px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${percentage}%`,
          backgroundColor: color,
          borderRadius: '10px',
          transition: 'width 0.3s ease',
        }}
      />
    </div>
  );
}
