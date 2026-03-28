import React from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
  change?: string | number;
  changeDir?: 'up' | 'down';
  accentColor?: string;
}

export default function StatCard({
  label,
  value,
  change,
  changeDir,
  accentColor = '#00c9a7',
}: StatCardProps) {
  const numChange = typeof change === 'number' ? change : parseFloat(String(change ?? '0'));
  const dir = changeDir ?? (numChange >= 0 ? 'up' : 'down');
  const changeColor = dir === 'down' ? '#ef4444' : '#22c55e';

  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: '#0f1117',
        border: '1px solid rgba(255, 255, 255, 0.07)',
        borderRadius: '12px',
        padding: '18px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-50%',
          right: '-50%',
          width: '200px',
          height: '200px',
          background: `radial-gradient(circle, ${accentColor}15 0%, transparent 70%)`,
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            fontSize: '11px',
            fontWeight: '600',
            textTransform: 'uppercase',
            color: '#6b7280',
            letterSpacing: '0.5px',
            marginBottom: '8px',
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#e8eaf0',
            marginBottom: change != null ? '10px' : 0,
          }}
        >
          {String(value)}
        </div>
        {change != null && (
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '12px',
              fontWeight: '600',
              color: changeColor,
            }}
          >
            <span>{dir === 'down' ? '↓' : '↑'}</span>
            <span>{Math.abs(numChange)}%</span>
          </div>
        )}
      </div>
    </div>
  );
}
