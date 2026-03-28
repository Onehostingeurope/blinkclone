import React from 'react';

interface ChartBarsProps {
  data: number[];
  labels: string[];
  color?: string;
  height?: number;
}

export default function ChartBars({
  data,
  labels,
  color = '#00c9a7',
  height = 80,
}: ChartBarsProps) {
  const maxValue = Math.max(...data, 1);

  // Convert color hex to RGB for opacity
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
      : '0, 201, 167';
  };

  const rgbColor = hexToRgb(color);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        gap: '8px',
        height: `${height}px`,
        width: '100%',
      }}
    >
      {data.map((value, index) => {
        const percentage = (value / maxValue) * 100;

        return (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
              flex: 1,
              minWidth: 0,
            }}
          >
            <div
              style={{
                width: '100%',
                height: `${percentage}%`,
                backgroundColor: `rgba(${rgbColor}, 0.25)`,
                borderTop: `2px solid ${color}`,
                borderRadius: '3px 3px 0 0',
                minHeight: '4px',
              }}
            />
            <div
              style={{
                fontSize: '9px',
                color: '#6b7280',
                textAlign: 'center',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                maxWidth: '100%',
              }}
            >
              {labels[index]}
            </div>
          </div>
        );
      })}
    </div>
  );
}
