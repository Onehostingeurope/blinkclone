import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navLinks = [
    { label: 'Agents', href: '/agents', hasNewBadge: true },
    { label: 'Templates', href: '/templates', hasNewBadge: false },
    { label: 'Explore', href: '/explore', hasNewBadge: false },
    { label: 'Pricing', href: '/pricing', hasNewBadge: false },
    { label: 'Docs', href: '/docs', hasNewBadge: false },
    { label: 'Affiliates', href: '/affiliates', hasNewBadge: false },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '60px',
        backgroundColor: 'rgba(10, 11, 15, 0.88)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '24px',
        paddingRight: '24px',
        boxSizing: 'border-box',
      }}
    >
      {/* Left: Logo */}
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Logo size={28} />
      </Link>

      {/* Center: Nav links */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          flex: 1,
          marginLeft: '48px',
        }}
      >
        {navLinks.map((link) => (
          <div
            key={link.href}
            style={{
              position: 'relative',
            }}
          >
            <Link
              to={link.href}
              onMouseEnter={() => setHoveredLink(link.href)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                fontSize: '14px',
                color: hoveredLink === link.href ? '#e8eaf0' : '#9ca3af',
                padding: '6px 12px',
                borderRadius: '8px',
                backgroundColor:
                  hoveredLink === link.href
                    ? 'rgba(255, 255, 255, 0.08)'
                    : 'transparent',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              {link.label}
              {link.hasNewBadge && (
                <span
                  style={{
                    backgroundColor: '#00c9a7',
                    color: '#000000',
                    fontSize: '10px',
                    fontWeight: '700',
                    padding: '2px 6px',
                    borderRadius: '3px',
                    lineHeight: '1',
                  }}
                >
                  NEW
                </span>
              )}
            </Link>
          </div>
        ))}
      </div>

      {/* Right: Admin, Log in, Get started button */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <Link
          to="/admin"
          style={{
            fontSize: '14px',
            color: '#00c9a7',
            padding: '6px 12px',
            borderRadius: '20px',
            backgroundColor: 'rgba(0, 201, 167, 0.1)',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
            border: '1px solid rgba(0, 201, 167, 0.3)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(0, 201, 167, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(0, 201, 167, 0.1)';
          }}
        >
          ⚙ Admin
        </Link>

        <Link
          to="/dashboard"
          style={{
            fontSize: '14px',
            color: '#9ca3af',
            padding: '6px 12px',
            borderRadius: '8px',
            backgroundColor: 'transparent',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#e8eaf0';
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#9ca3af';
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          Log in
        </Link>

        <Link
          to="/dashboard"
          style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#000000',
            backgroundColor: '#00c9a7',
            padding: '7px 16px',
            borderRadius: '8px',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
            display: 'inline-block',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#00b896';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#00c9a7';
          }}
        >
          Get started for free
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
