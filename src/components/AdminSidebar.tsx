import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  activePanel: string;
  onSelect: (panel: string) => void;
}

const AdminSidebar: React.FC<Props> = ({ activePanel, onSelect }) => {
  // Simple SVG icons
  const GridIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="1" width="4" height="4" />
      <rect x="9" y="1" width="4" height="4" />
      <rect x="1" y="9" width="4" height="4" />
      <rect x="9" y="9" width="4" height="4" />
    </svg>
  );

  const ActivityIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="1 11 3 7 5 9 7 5 9 8 13 3" />
    </svg>
  );

  const UsersIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="4" cy="3" r="2" />
      <path d="M1 11c0-1.66 1.34-3 3-3s3 1.34 3 3" />
      <circle cx="11" cy="3" r="2" />
      <path d="M8 11c0-1.66 1.34-3 3-3s3 1.34 3 3" />
    </svg>
  );

  const CardIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="2" width="12" height="10" rx="1" />
      <line x1="1" y1="5" x2="13" y2="5" />
    </svg>
  );

  const BoltIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M7 1 L12 7 H7 L8 13 L3 7 H8 Z" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const FolderIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M1 2h4l2 2h6v8H1z" />
    </svg>
  );

  const ClockIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="7" cy="7" r="6" />
      <polyline points="7 4 7 7 10 9" />
    </svg>
  );

  const DatabaseIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="7" cy="2" rx="5" ry="1.5" />
      <path d="M2 2v8c0 1 3 1.5 5 1.5s5-0.5 5-1.5V2" />
      <line x1="2" y1="6" x2="12" y2="6" />
    </svg>
  );

  const LinkIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 9H3c-1 0-2-1-2-2V5c0-1 1-2 2-2h2" />
      <path d="M9 5h2c1 0 2 1 2 2v2c0 1-1 2-2 2h-2" />
      <line x1="5" y1="7" x2="9" y2="7" />
    </svg>
  );

  const CoffeeIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 2h9v8c0 1-1 2-2 2H4c-1 0-2-1-2-2V2z" />
      <path d="M11 4v4c0 1 1 2 2 2" />
      <line x1="2" y1="2" x2="11" y2="2" />
    </svg>
  );

  const FileIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 1h8l2 2v10H2z" />
      <line x1="4" y1="4" x2="10" y2="4" />
      <line x1="4" y1="7" x2="10" y2="7" />
      <line x1="4" y1="10" x2="8" y2="10" />
    </svg>
  );

  const MonitorIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="1" width="12" height="9" rx="1" />
      <path d="M4 10h6" />
      <path d="M5 11h4" />
    </svg>
  );

  const DollarIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="7" cy="7" r="5" />
      <path d="M5 7h4" />
      <path d="M7 5v4" />
    </svg>
  );

  const SettingsIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="7" cy="7" r="2" />
      <path d="M7 1v2m0 8v2M3 7H1m10 0h2M3.5 3.5L2 2M11.5 10.5L10 12M10.5 3.5L12 2M2.5 10.5L4 12" />
    </svg>
  );

  // Badge component
  const Badge: React.FC<{ children: string; variant?: 'default' | 'success' | 'danger' }> = ({
    children,
    variant = 'default',
  }) => {
    const baseStyle: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2px 6px',
      borderRadius: '4px',
      fontSize: '11px',
      fontWeight: '500',
      marginLeft: 'auto',
      whiteSpace: 'nowrap',
    };

    const variantStyles = {
      default: {
        backgroundColor: 'rgba(255,255,255,0.08)',
        color: '#6b7280',
      },
      success: {
        backgroundColor: 'rgba(34,197,94,0.2)',
        color: '#22c55e',
      },
      danger: {
        backgroundColor: 'rgba(239,68,68,0.2)',
        color: '#ef4444',
      },
    };

    return <span style={{ ...baseStyle, ...variantStyles[variant] }}>{children}</span>;
  };

  // Nav item component
  const NavItem: React.FC<{
    icon: React.ReactNode;
    label: string;
    id: string;
    badge?: { text: string; variant?: 'default' | 'success' | 'danger' };
  }> = ({ icon, label, id, badge }) => (
    <div
      onClick={() => onSelect(id)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '6px 8px',
        borderRadius: '6px',
        fontSize: '13px',
        cursor: 'pointer',
        color: '#e5e7eb',
        backgroundColor: activePanel === id ? 'rgba(255,255,255,0.07)' : 'transparent',
        borderLeft: activePanel === id ? '2px solid #14b8a6' : '2px solid transparent',
        paddingLeft: activePanel === id ? '6px' : '8px',
        transition: 'all 0.15s ease',
        userSelect: 'none',
        flex: '0 0 auto',
      }}
      onMouseEnter={(e) => {
        if (activePanel !== id) {
          (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.05)';
        }
      }}
      onMouseLeave={(e) => {
        if (activePanel !== id) {
          (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
        }
      }}
    >
      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'inherit' }}>
        {icon}
      </span>
      <span style={{ flex: 1 }}>{label}</span>
      {badge && <Badge variant={badge.variant}>{badge.text}</Badge>}
    </div>
  );

  // Nav group component
  const NavGroup: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
    <div style={{ marginBottom: '12px' }}>
      <div
        style={{
          padding: '8px 8px 4px 8px',
          fontSize: '11px',
          fontWeight: '600',
          color: '#9ca3af',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}
      >
        {label}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>{children}</div>
    </div>
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '220px',
        height: '100vh',
        backgroundColor: '#0a0b0e',
        borderRight: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
        zIndex: 40,
      }}
    >
      {/* Top Section */}
      <div
        style={{
          padding: '14px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {/* Logo Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '10px',
          }}
        >
          <div
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: '#14b8a6',
              borderRadius: '4px',
            }}
          />
          <span style={{ fontSize: '15px', fontWeight: '700', color: '#f3f4f6' }}>Blink</span>
          <Badge variant="danger">ADMIN</Badge>
        </div>

        {/* Workspace name */}
        <div
          style={{
            fontSize: '11px',
            color: '#9ca3af',
            lineHeight: '1.4',
          }}
        >
          OneHostingEurope's workspace
        </div>
      </div>

      {/* Navigation Section */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '8px',
          color: '#e5e7eb',
        }}
      >
        <NavGroup label="Overview">
          <NavItem icon={<GridIcon />} label="Dashboard" id="dashboard" />
          <NavItem
            icon={<ActivityIcon />}
            label="Analytics"
            id="analytics"
            badge={{ text: 'Live', variant: 'success' }}
          />
        </NavGroup>

        <NavGroup label="Users">
          <NavItem icon={<UsersIcon />} label="All Users" id="users" badge={{ text: '50,247' }} />
          <NavItem
            icon={<CardIcon />}
            label="Subscriptions"
            id="subscriptions"
            badge={{ text: '8,430', variant: 'success' }}
          />
          <NavItem icon={<BoltIcon />} label="Credits" id="credits" />
        </NavGroup>

        <NavGroup label="Projects">
          <NavItem icon={<FolderIcon />} label="All Projects" id="projects" badge={{ text: '289,440' }} />
          <NavItem icon={<ClockIcon />} label="Deployments" id="deployments" />
        </NavGroup>

        <NavGroup label="Infrastructure">
          <NavItem icon={<DatabaseIcon />} label="Database" id="database" />
          <NavItem icon={<LinkIcon />} label="API Keys" id="api-keys" badge={{ text: '12' }} />
          <NavItem icon={<CoffeeIcon />} label="Webhooks" id="webhooks" />
          <NavItem
            icon={<FileIcon />}
            label="System Logs"
            id="system-logs"
            badge={{ text: '3', variant: 'danger' }}
          />
        </NavGroup>

        <NavGroup label="Config">
          <NavItem icon={<MonitorIcon />} label="AI Models" id="ai-models" />
          <NavItem icon={<DollarIcon />} label="Billing" id="billing" />
          <NavItem icon={<SettingsIcon />} label="Settings" id="settings" />
        </NavGroup>
      </div>

      {/* Bottom Section */}
      <div
        style={{
          padding: '10px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
        }}
      >
        <Link
          to="/dashboard"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 8px',
            borderRadius: '6px',
            fontSize: '13px',
            cursor: 'pointer',
            color: '#e5e7eb',
            textDecoration: 'none',
            transition: 'all 0.15s ease',
            backgroundColor: 'transparent',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.05)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
          }}
        >
          <GridIcon />
          <span>Dashboard</span>
        </Link>

        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 8px',
            borderRadius: '6px',
            fontSize: '13px',
            cursor: 'pointer',
            color: '#e5e7eb',
            textDecoration: 'none',
            transition: 'all 0.15s ease',
            backgroundColor: 'transparent',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.05)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
          }}
        >
          <span>Landing Page</span>
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
