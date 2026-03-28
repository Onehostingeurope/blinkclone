import React from 'react';

type BadgeVariant = 'green' | 'blue' | 'purple' | 'yellow' | 'teal' | 'orange' | 'red' | 'gray';

interface BadgeProps {
  children?: React.ReactNode;
  text?: string;
  variant: string;
}

const variantMap: Record<string, BadgeVariant> = {
  success: 'green', danger: 'red', warning: 'yellow', primary: 'blue', secondary: 'gray',
  green: 'green', blue: 'blue', purple: 'purple', yellow: 'yellow',
  teal: 'teal', orange: 'orange', red: 'red', gray: 'gray',
};

const styleMap: Record<BadgeVariant, { bg: string; text: string; dot: string }> = {
  green:  { bg: 'rgba(34,197,94,0.10)',   text: '#22c55e', dot: '#22c55e' },
  blue:   { bg: 'rgba(79,142,247,0.10)',  text: '#4f8ef7', dot: '#4f8ef7' },
  purple: { bg: 'rgba(167,139,250,0.10)', text: '#a78bfa', dot: '#a78bfa' },
  yellow: { bg: 'rgba(234,179,8,0.10)',   text: '#eab308', dot: '#eab308' },
  teal:   { bg: 'rgba(0,201,167,0.10)',   text: '#00c9a7', dot: '#00c9a7' },
  orange: { bg: 'rgba(249,115,22,0.10)',  text: '#f97316', dot: '#f97316' },
  red:    { bg: 'rgba(239,68,68,0.10)',   text: '#ef4444', dot: '#ef4444' },
  gray:   { bg: 'rgba(107,114,128,0.10)', text: '#9ca3af', dot: '#9ca3af' },
};

export default function Badge({ children, text, variant }: BadgeProps) {
  const resolved: BadgeVariant = variantMap[variant] ?? 'gray';
  const { bg, text: textColor, dot } = styleMap[resolved];
  const content = children ?? text;

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        backgroundColor: bg,
        color: textColor,
        padding: '4px 10px',
        borderRadius: '12px',
        fontSize: '12px',
        fontWeight: '600',
        whiteSpace: 'nowrap',
      }}
    >
      <span
        style={{
          display: 'inline-block',
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: dot,
          flexShrink: 0,
        }}
      />
      {content}
    </span>
  );
}
