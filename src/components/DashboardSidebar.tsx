import React from 'react';
import { Link } from 'react-router-dom';

export default function DashboardSidebar() {
  return (
    <div
      style={{
        width: '240px',
        minWidth: '240px',
        height: '100vh',
        background: '#0d0e14',
        borderRight: '1px solid rgba(255,255,255,0.07)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* HEADER */}
      <div
        style={{
          height: '52px',
          padding: '10px 12px',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        {/* Workspace Button */}
        <button
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'transparent',
            border: 'none',
            padding: '0',
            cursor: 'pointer',
            color: '#e8eaf0',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
          }}
        >
          {/* Teal gradient avatar */}
          <div
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '7px',
              background: 'linear-gradient(135deg, #00c9a7 0%, #00a878 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0d0e14',
              fontSize: '12px',
              fontWeight: 'bold',
            }}
          >
            O
          </div>
          {/* Workspace name */}
          <span style={{ fontSize: '13px', fontWeight: 'bold', flex: 1, textAlign: 'left' }}>
            OneHostingEurope's Blink
          </span>
          {/* Chevron down icon */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            style={{ opacity: 0.6 }}
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Plus icon button */}
        <button
          style={{
            width: '28px',
            height: '28px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#9ca3af',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#e8eaf0';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#9ca3af';
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M9 2V16M2 9H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* NAV BODY */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '8px 0',
          scrollBehavior: 'smooth',
        }}
      >
        {/* Home */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 8px',
            borderRadius: '7px',
            fontSize: '13.5px',
            color: '#e8eaf0',
            background: 'rgba(255,255,255,0.08)',
            textDecoration: 'none',
            margin: '0 8px',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
          }}
        >
          <span>🏠</span>
          <span>Home</span>
        </Link>

        {/* Search */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 8px',
            borderRadius: '7px',
            fontSize: '13.5px',
            color: '#9ca3af',
            background: 'transparent',
            textDecoration: 'none',
            margin: '0 8px',
            transition: 'all 0.2s',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
            e.currentTarget.style.color = '#e8eaf0';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#9ca3af';
          }}
        >
          <span>🔍</span>
          <span>Search</span>
        </a>

        {/* Section: Agents */}
        <div
          style={{
            fontSize: '10px',
            textTransform: 'uppercase',
            color: '#6b7280',
            padding: '12px 12px 6px 12px',
            fontWeight: 'bold',
          }}
        >
          Agents
        </div>

        {/* Blink Claw */}
        <Link
          to="/dashboard"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 8px',
            borderRadius: '7px',
            fontSize: '13.5px',
            color: '#9ca3af',
            background: 'transparent',
            textDecoration: 'none',
            margin: '0 8px',
            transition: 'all 0.2s',
            position: 'relative',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
            e.currentTarget.style.color = '#e8eaf0';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#9ca3af';
          }}
        >
          <span>⚡</span>
          <span>Blink Claw</span>
          <span
            style={{
              marginLeft: 'auto',
              background: '#00c9a7',
              color: '#0d0e14',
              fontSize: '9px',
              fontWeight: 'bold',
              padding: '2px 6px',
              borderRadius: '4px',
              textTransform: 'uppercase',
            }}
          >
            New
          </span>
        </Link>

        {/* Section: Projects */}
        <div
          style={{
            fontSize: '10px',
            textTransform: 'uppercase',
            color: '#6b7280',
            padding: '12px 12px 6px 12px',
            fontWeight: 'bold',
          }}
        >
          Projects
        </div>

        {/* Recent */}
        <Link
          to="/dashboard"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 8px',
            borderRadius: '7px',
            fontSize: '13.5px',
            color: '#9ca3af',
            background: 'transparent',
            textDecoration: 'none',
            margin: '0 8px',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
            e.currentTarget.style.color = '#e8eaf0';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#9ca3af';
          }}
        >
          <span>🕐</span>
          <span>Recent</span>
        </Link>

        {/* All projects */}
        <Link
          to="/dashboard"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 8px',
            borderRadius: '7px',
            fontSize: '13.5px',
            color: '#9ca3af',
            background: 'transparent',
            textDecoration: 'none',
            margin: '0 8px',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
            e.currentTarget.style.color = '#e8eaf0';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#9ca3af';
          }}
        >
          <span>📁</span>
          <span>All projects</span>
        </Link>

        {/* Starred */}
        <Link
          to="/dashboard"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 8px',
            borderRadius: '7px',
            fontSize: '13.5px',
            color: '#9ca3af',
            background: 'transparent',
            textDecoration: 'none',
            margin: '0 8px',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
            e.currentTarget.style.color = '#e8eaf0';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#9ca3af';
          }}
        >
          <span>⭐</span>
          <span>Starred</span>
        </Link>

        {/* Shared with me */}
        <Link
          to="/dashboard"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 8px',
            borderRadius: '7px',
            fontSize: '13.5px',
            color: '#9ca3af',
            background: 'transparent',
            textDecoration: 'none',
            margin: '0 8px',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
            e.currentTarget.style.color = '#e8eaf0';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#9ca3af';
          }}
        >
          <span>📤</span>
          <span>Shared with me</span>
        </Link>

        {/* Section: Resources */}
        <div
          style={{
            fontSize: '10px',
            textTransform: 'uppercase',
            color: '#6b7280',
            padding: '12px 12px 6px 12px',
            fontWeight: 'bold',
          }}
        >
          Resources
        </div>

        {/* Templates */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 8px',
            borderRadius: '7px',
            fontSize: '13.5px',
            color: '#9ca3af',
            background: 'transparent',
            textDecoration: 'none',
            margin: '0 8px',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
            e.currentTarget.style.color = '#e8eaf0';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#9ca3af';
          }}
        >
          <span>📐</span>
          <span>Templates</span>
        </Link>

        {/* Explore */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 8px',
            borderRadius: '7px',
            fontSize: '13.5px',
            color: '#9ca3af',
            background: 'transparent',
            textDecoration: 'none',
            margin: '0 8px',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
            e.currentTarget.style.color = '#e8eaf0';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#9ca3af';
          }}
        >
          <span>🧭</span>
          <span>Explore</span>
        </Link>

        {/* Docs */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 8px',
            borderRadius: '7px',
            fontSize: '13.5px',
            color: '#9ca3af',
            background: 'transparent',
            textDecoration: 'none',
            margin: '0 8px',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
            e.currentTarget.style.color = '#e8eaf0';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#9ca3af';
          }}
        >
          <span>📖</span>
          <span>Docs</span>
        </Link>

        {/* Community */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 8px',
            borderRadius: '7px',
            fontSize: '13.5px',
            color: '#9ca3af',
            background: 'transparent',
            textDecoration: 'none',
            margin: '0 8px',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
            e.currentTarget.style.color = '#e8eaf0';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#9ca3af';
          }}
        >
          <span>💬</span>
          <span>Community</span>
        </Link>
      </div>

      {/* FOOTER */}
      <div
        style={{
          padding: '12px',
          borderTop: '1px solid rgba(255,255,255,0.07)',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        {/* Credits Card */}
        <div
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '8px',
            padding: '10px 12px',
          }}
        >
          {/* Top row: Credits + 5 left */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '8px',
            }}
          >
            <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#e8eaf0' }}>
              Credits
            </span>
            <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#00c9a7' }}>
              5 left
            </span>
          </div>

          {/* Progress bar */}
          <div
            style={{
              width: '100%',
              height: '3px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '2px',
              overflow: 'hidden',
              marginBottom: '8px',
            }}
          >
            <div
              style={{
                height: '100%',
                width: '100%',
                background: '#00c9a7',
              }}
            />
          </div>

          {/* Info text */}
          <span style={{ fontSize: '10.5px', color: '#6b7280' }}>
            5/5 daily · resets in 16 hours
          </span>
        </div>

        {/* Upgrade to Pro Button */}
        <button
          style={{
            width: '100%',
            background: '#00c9a7',
            color: '#0d0e14',
            border: 'none',
            fontSize: '12.5px',
            fontWeight: 'bold',
            padding: '7px',
            borderRadius: '7px',
            cursor: 'pointer',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.9';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
        >
          Upgrade to Pro
        </button>

        {/* Buy credits + Share buttons */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
          }}
        >
          <button
            style={{
              flex: 1,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '7px',
              fontSize: '12px',
              color: '#9ca3af',
              padding: '6px 8px',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.color = '#e8eaf0';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.color = '#9ca3af';
            }}
          >
            Buy credits
          </button>
          <button
            style={{
              flex: 1,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '7px',
              fontSize: '12px',
              color: '#9ca3af',
              padding: '6px 8px',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.color = '#e8eaf0';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.color = '#9ca3af';
            }}
          >
            🎁 Share +100
          </button>
        </div>

        {/* Admin link */}
        <Link
          to="/admin"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(0,201,167,0.1)',
            border: '1px solid rgba(0,201,167,0.3)',
            borderRadius: '7px',
            padding: '6px 8px',
            textDecoration: 'none',
            fontSize: '12px',
            fontWeight: 'bold',
            color: '#00c9a7',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(0,201,167,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(0,201,167,0.1)';
          }}
        >
          <span>⚙</span>
          <span>Admin Panel</span>
        </Link>

        {/* User row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 0',
          }}
        >
          {/* Gradient avatar */}
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '7px',
              background: 'linear-gradient(135deg, #00c9a7 0%, #00a878 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0d0e14',
              fontSize: '13px',
              fontWeight: 'bold',
              flexShrink: 0,
            }}
          >
            O
          </div>
          {/* User name */}
          <span style={{ fontSize: '13px', color: '#e8eaf0', fontWeight: '500' }}>
            OneHostingEurope
          </span>
        </div>
      </div>
    </div>
  );
}
