import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardSidebar from '../components/DashboardSidebar';

interface Template {
  id: string;
  name: string;
  desc: string;
  emoji: string;
  gradient: string;
}

const templates: Template[] = [
  { id: '1', name: 'Fashion D2C Starter', desc: 'E-commerce store template', emoji: '👗', gradient: 'linear-gradient(135deg, rgba(168,85,247,0.3), rgba(168,85,247,0.1))' },
  { id: '2', name: 'Neubrutalist Portfolio', desc: 'Minimal portfolio design', emoji: '⬛', gradient: 'linear-gradient(135deg, rgba(50,50,50,0.3), rgba(30,30,30,0.1))' },
  { id: '3', name: 'Social Scheduler', desc: 'Content planning tool', emoji: '📅', gradient: 'linear-gradient(135deg, rgba(59,130,246,0.3), rgba(59,130,246,0.1))' },
  { id: '4', name: 'Interior Design Studio', desc: 'Portfolio showcase', emoji: '🪑', gradient: 'linear-gradient(135deg, rgba(180,83,9,0.3), rgba(180,83,9,0.1))' },
  { id: '5', name: 'IronTrace Fitness', desc: 'Fitness tracking app', emoji: '💪', gradient: 'linear-gradient(135deg, rgba(30,58,138,0.3), rgba(30,58,138,0.1))' },
  { id: '6', name: 'Luxury Dental', desc: 'Dental clinic site', emoji: '🦷', gradient: 'linear-gradient(135deg, rgba(0,128,96,0.3), rgba(0,128,96,0.1))' },
  { id: '7', name: 'Range Rover Cinematic', desc: 'Luxury car showcase', emoji: '🚙', gradient: 'linear-gradient(135deg, rgba(10,10,10,0.3), rgba(5,5,5,0.1))' },
  { id: '8', name: 'Cinematic Headphones', desc: 'Product showcase', emoji: '🎧', gradient: 'linear-gradient(135deg, rgba(127,29,29,0.3), rgba(127,29,29,0.1))' },
  { id: '9', name: 'Flower House', desc: 'Floral design studio', emoji: '💐', gradient: 'linear-gradient(135deg, rgba(88,28,135,0.3), rgba(88,28,135,0.1))' },
  { id: '10', name: 'Plant Nursery', desc: 'Plant e-commerce', emoji: '🌿', gradient: 'linear-gradient(135deg, rgba(34,197,94,0.3), rgba(34,197,94,0.1))' },
  { id: '11', name: 'Text-to-Image', desc: 'AI image generator', emoji: '🤖', gradient: 'linear-gradient(135deg, rgba(79,70,229,0.3), rgba(79,70,229,0.1))' },
  { id: '12', name: 'Pure Water', desc: 'Water company site', emoji: '💧', gradient: 'linear-gradient(135deg, rgba(30,58,138,0.3), rgba(30,58,138,0.1))' },
];

const suggestions = [
  '✦ Conversational Form Builder',
  '✦ My Alter Ego Chat',
  '✦ Churn Risk Dashboard',
  '✦ AI CRM with lead scoring',
  '✦ Booking system with Stripe',
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<'fullstack' | 'mobile' | 'website'>('fullstack');
  const [promptValue, setPromptValue] = useState('');
  const [bannerVisible, setBannerVisible] = useState(true);
  const [promptFocused, setPromptFocused] = useState(false);

  const placeholders = {
    fullstack: 'Create an internal tool that...',
    mobile: 'Build a mobile app that...',
    website: 'Design a website for...',
  };

  const handleSuggestionClick = (suggestion: string) => {
    setPromptValue(suggestion.replace('✦ ', ''));
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', backgroundColor: '#0d1117' }}>
      <DashboardSidebar />

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Offer Banner */}
        {bannerVisible && (
          <div
            style={{
              flexShrink: 0,
              background: 'linear-gradient(90deg, rgba(0,201,167,0.12), rgba(79,142,247,0.08))',
              borderBottom: '1px solid rgba(0,201,167,0.15)',
              padding: '10px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '18px' }}>🎁</span>
              <span
                style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  color: '#00c9a7',
                  backgroundColor: 'rgba(0,201,167,0.15)',
                  padding: '3px 8px',
                  borderRadius: '4px',
                }}
              >
                Special Offer
              </span>
              <span style={{ fontSize: '13px', color: '#e5e7eb' }}>
                1 month of Starter Plan, completely free.
              </span>
            </div>

            <button
              style={{
                backgroundColor: '#00c9a7',
                color: '#000',
                border: 'none',
                padding: '6px 16px',
                borderRadius: '7px',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer',
                marginRight: '12px',
              }}
            >
              Start Free Trial →
            </button>

            <button
              onClick={() => setBannerVisible(false)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '16px',
                cursor: 'pointer',
                color: '#9ca3af',
                padding: 0,
              }}
            >
              ✕
            </button>
          </div>
        )}

        {/* Scrollable Content */}
        <div style={{ flex: 1, overflowY: 'auto', paddingBottom: '80px' }}>
          {/* Hero Section */}
          <div style={{ padding: '48px 40px 32px', textAlign: 'center' }}>
            <h1
              style={{
                fontSize: '32px',
                fontWeight: 800,
                letterSpacing: '-1px',
                background: 'linear-gradient(135deg, #e8eaf0, rgba(232,234,240,0.7))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                margin: 0,
              }}
            >
              Ready when you are, OneHostingEurope
            </h1>
            <p
              style={{
                fontSize: '15px',
                color: '#9ca3af',
                marginTop: '12px',
                marginBottom: 0,
              }}
            >
              Build websites, apps & mobile in minutes — database, hosting and AI included.
            </p>

            {/* Type Tabs */}
            <div
              style={{
                marginTop: '24px',
                display: 'flex',
                justifyContent: 'center',
                gap: '6px',
              }}
            >
              {(['fullstack', 'mobile', 'website'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: '7px 16px',
                    borderRadius: '8px',
                    fontSize: '13.5px',
                    fontWeight: 500,
                    border: '1px solid',
                    backgroundColor: activeTab === tab ? 'rgba(0,201,167,0.1)' : 'transparent',
                    borderColor:
                      activeTab === tab
                        ? 'rgba(0,201,167,0.35)'
                        : 'rgba(255,255,255,0.12)',
                    color: activeTab === tab ? '#00c9a7' : '#9ca3af',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {tab === 'fullstack' && '⚡ Full Stack App'}
                  {tab === 'mobile' && '📱 Mobile App'}
                  {tab === 'website' && '🌐 Website'}
                </button>
              ))}
            </div>
          </div>

          {/* Prompt Box */}
          <div
            style={{
              maxWidth: '760px',
              margin: '0 auto',
              padding: '20px 40px 0',
              width: '100%',
            }}
          >
            <div
              style={{
                backgroundColor: '#0f1117',
                border: '1px solid',
                borderColor: promptFocused
                  ? 'rgba(0,201,167,0.35)'
                  : 'rgba(255,255,255,0.12)',
                borderRadius: '14px',
                padding: '16px',
                transition: 'border-color 0.2s ease',
              }}
            >
              <textarea
                value={promptValue}
                onChange={(e) => setPromptValue(e.target.value)}
                onFocus={() => setPromptFocused(true)}
                onBlur={() => setPromptFocused(false)}
                placeholder={placeholders[activeTab]}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#e5e7eb',
                  fontSize: '14.5px',
                  minHeight: '64px',
                  resize: 'none',
                  fontFamily: 'Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                  fontSizeAdjust: 'none',
                }}
              />

              {/* Bottom Action Row */}
              <div
                style={{
                  marginTop: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <button
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '6px',
                      padding: '6px 12px',
                      fontSize: '12px',
                      color: '#9ca3af',
                      cursor: 'pointer',
                    }}
                  >
                    ⚡ Blink 1.0 Lite
                  </button>
                  <button
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '6px',
                      padding: '6px 12px',
                      fontSize: '12px',
                      color: '#9ca3af',
                      cursor: 'pointer',
                    }}
                  >
                    🤖 Agent
                  </button>
                  <button
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '16px',
                      cursor: 'pointer',
                      color: '#9ca3af',
                      padding: '4px 8px',
                    }}
                  >
                    📎
                  </button>
                </div>

                <button
                  style={{
                    width: '34px',
                    height: '34px',
                    backgroundColor: '#00c9a7',
                    color: '#000',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                  }}
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Suggestion Chips */}
          <div
            style={{
              maxWidth: '760px',
              margin: '14px auto 0',
              padding: '0 40px',
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
            }}
          >
            {suggestions.map((suggestion, idx) => (
              <button
                key={idx}
                onClick={() => handleSuggestionClick(suggestion)}
                style={{
                  fontSize: '12.5px',
                  color: '#6b7280',
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  padding: '5px 12px',
                  borderRadius: '100px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = '#00c9a7';
                  (e.target as HTMLElement).style.borderColor = 'rgba(0,201,167,0.3)';
                  (e.target as HTMLElement).style.backgroundColor = 'rgba(0,201,167,0.06)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = '#6b7280';
                  (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
                  (e.target as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.04)';
                }}
              >
                {suggestion}
              </button>
            ))}
          </div>

          {/* Templates Section */}
          <div style={{ padding: '40px 40px 0' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px',
              }}
            >
              <h2 style={{ fontSize: '15px', fontWeight: 700, margin: 0, color: '#e5e7eb' }}>
                Templates
              </h2>
              <Link
                to="/"
                style={{
                  fontSize: '12.5px',
                  color: '#9ca3af',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                Browse all →
              </Link>
            </div>

            <div
              style={{
                display: 'flex',
                gap: '12px',
                overflowX: 'auto',
                paddingBottom: '8px',
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(255,255,255,0.1) transparent',
              }}
            >
              {templates.map((template) => (
                <div
                  key={template.id}
                  style={{
                    width: '180px',
                    flexShrink: 0,
                    backgroundColor: '#0f1117',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,201,167,0.3)';
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(0,201,167,0.05)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
                    (e.currentTarget as HTMLElement).style.backgroundColor = '#0f1117';
                  }}
                >
                  <div
                    style={{
                      height: '112px',
                      background: template.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '32px',
                    }}
                  >
                    {template.emoji}
                  </div>
                  <div style={{ padding: '10px 12px' }}>
                    <p
                      style={{
                        fontSize: '12.5px',
                        fontWeight: 700,
                        margin: 0,
                        marginBottom: '4px',
                        color: '#e5e7eb',
                      }}
                    >
                      {template.name}
                    </p>
                    <p
                      style={{
                        fontSize: '11px',
                        color: '#9ca3af',
                        margin: 0,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {template.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upsell Card */}
          <div style={{ padding: '32px 40px' }}>
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(0,201,167,0.06), rgba(79,142,247,0.04))',
                border: '1px solid rgba(0,201,167,0.2)',
                borderRadius: '14px',
                padding: '28px',
                display: 'flex',
                alignItems: 'center',
                gap: '32px',
                flexWrap: 'wrap',
              }}
            >
              {/* Left Content */}
              <div style={{ flex: '1', minWidth: '300px' }}>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    margin: '0 0 8px 0',
                    color: '#e5e7eb',
                  }}
                >
                  Unlock the Starter Plan
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    color: '#9ca3af',
                    margin: '0 0 16px 0',
                  }}
                >
                  Try it free for 30 days. No commitment.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    'Blink Claw',
                    'Production hosting + custom domain',
                    'GitHub sync & code export',
                    'iOS + Android mobile builds',
                    'Buy additional credits anytime',
                  ].map((feature, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '13px',
                        color: '#d1d5db',
                      }}
                    >
                      <span style={{ color: '#00c9a7', fontWeight: 700 }}>✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content */}
              <div style={{ flex: '0 0 auto', minWidth: '280px' }}>
                <div style={{ marginBottom: '20px' }}>
                  {[
                    { label: 'Today', date: 'Mar 28, 2026' },
                    { label: 'Day 25', date: 'Apr 22, 2026' },
                    { label: 'Apr 27', date: '2026' },
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: idx < 2 ? '12px' : 0 }}>
                      <div
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          backgroundColor: '#00c9a7',
                        }}
                      />
                      <div>
                        <div style={{ fontSize: '11px', color: '#9ca3af' }}>{item.label}</div>
                        <div style={{ fontSize: '12px', color: '#e5e7eb', fontWeight: 500 }}>
                          {item.date}
                        </div>
                      </div>
                      {idx < 2 && (
                        <div
                          style={{
                            position: 'absolute',
                            left: '18px',
                            marginTop: '32px',
                            width: '2px',
                            height: '20px',
                            backgroundColor: 'rgba(0,201,167,0.3)',
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <button
                  style={{
                    width: '100%',
                    backgroundColor: '#00c9a7',
                    color: '#000',
                    border: 'none',
                    padding: '10px 22px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    marginBottom: '8px',
                  }}
                >
                  Start Free Trial →
                </button>

                <p
                  style={{
                    fontSize: '11px',
                    color: '#9ca3af',
                    margin: 0,
                    textAlign: 'center',
                  }}
                >
                  Your card won't be charged until Apr 27, 2026.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
