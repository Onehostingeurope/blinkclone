import React, { useId } from 'react';

interface ToggleProps {
  checked: boolean;
  onChange: (value: boolean) => void;
}

export default function Toggle({ checked, onChange }: ToggleProps) {
  const id = useId();

  return (
    <label
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
        userSelect: 'none',
      }}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        style={{
          display: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          width: '44px',
          height: '24px',
          backgroundColor: checked ? '#00c9a7' : 'rgba(255, 255, 255, 0.10)',
          borderRadius: '12px',
          transition: 'background-color 0.2s ease',
        }}
      >
        {/* Knob */}
        <div
          style={{
            position: 'absolute',
            top: '2px',
            left: checked ? '22px' : '2px',
            width: '20px',
            height: '20px',
            backgroundColor: '#ffffff',
            borderRadius: '50%',
            transition: 'left 0.2s ease',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
          }}
        />
      </div>
    </label>
  );
}
