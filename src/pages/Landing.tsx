import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Landing: React.FC = () => {
  const [promptValue, setPromptValue] = useState('');
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

  // Scroll reveal animation hook
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-reveal]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleExampleClick = (text: string) => {
    setPromptValue(text);
  };

  // Hero Styles
  const heroStyles = {
    container: {
      position: 'relative' as const,
      height: '100vh',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: '#0a0d12',
      paddingBottom: '60px',
    },
    glow: {
      position: 'absolute' as const,
      top: '-120px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '900px',
      height: '900px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(0,201,167,0.15) 0%, transparent 70%)',
      pointerEvents: 'none' as const,
      zIndex: 0,
    },
    content: {
      position: 'relative' as const,
      zIndex: 1,
      textAlign: 'center' as const,
      maxWidth: '900px',
      paddingX: '24px',
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 16px',
      borderRadius: '9999px',
      border: '1px solid rgba(0,201,167,0.3)',
      background: 'rgba(0,201,167,0.08)',
      color: '#00c9a7',
      fontSize: '13px',
      marginBottom: '28px',
      animation: 'fadeUp 0.6s ease-out',
    },
    h1: {
      fontSize: 'clamp(36px, 5.5vw, 68px)',
      fontWeight: 800,
      letterSpacing: '-2px',
      lineHeight: 1.08,
      color: '#f0f0f0',
      marginBottom: '24px',
      animation: 'fadeUp 0.6s ease-out 0.1s both',
    },
    tealSpan: {
      color: '#00c9a7',
    },
    subtitle: {
      fontSize: '19px',
      color: '#9ca3af',
      maxWidth: '560px',
      marginX: 'auto',
      marginBottom: '40px',
      animation: 'fadeUp 0.6s ease-out 0.2s both',
    },
  };

  // Prompt Box Styles
  const promptBoxStyles = {
    container: {
      maxWidth: '680px',
      background: '#161820',
      border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: '16px',
      padding: '14px 16px 10px',
      marginBottom: '32px',
      animation: 'fadeUp 0.6s ease-out 0.3s both',
    },
    textarea: {
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: '#ffffff',
      fontSize: '15px',
      fontFamily: 'Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      minHeight: '72px',
      width: '100%',
      resize: 'none' as const,
      marginBottom: '8px',
    },
    textareaPlaceholder: `
      ::placeholder {
        color: #6b7280;
      }
    `,
    actionRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    pillRow: {
      display: 'flex',
      gap: '8px',
    },
    pill: {
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '12px',
      padding: '6px 12px',
      fontSize: '12px',
      color: '#9ca3af',
      cursor: 'pointer',
      transition: 'all 0.2s',
    },
    sendButton: {
      width: '36px',
      height: '36px',
      background: '#00c9a7',
      border: 'none',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.2s',
    },
  };

  // Example Chips
  const examplesStyles = {
    container: {
      display: 'flex',
      gap: '12px',
      justifyContent: 'center',
      flexWrap: 'wrap' as const,
      marginBottom: '48px',
    },
    chip: {
      padding: '8px 16px',
      background: 'rgba(0,201,167,0.05)',
      border: '1px solid rgba(0,201,167,0.2)',
      borderRadius: '9999px',
      fontSize: '13px',
      color: '#00c9a7',
      cursor: 'pointer',
      transition: 'all 0.2s',
    },
  };

  // Trust Row
  const trustRowStyles = {
    container: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap' as const,
      marginTop: '48px',
      fontSize: '13px',
      color: '#9ca3af',
      animation: 'fadeUp 0.6s ease-out 0.4s both',
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
  };

  // Marquee Styles
  const marqueeStyles = {
    container: {
      borderTop: '1px solid rgba(255,255,255,0.07)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      background: '#0f1117',
      overflow: 'hidden',
      padding: 0,
    },
    track: {
      display: 'flex',
      animation: 'marquee 30s linear infinite',
      gap: '0',
    },
    item: {
      padding: '14px 32px',
      borderRight: '1px solid rgba(255,255,255,0.07)',
      fontSize: '14px',
      color: '#6b7280',
      whiteSpace: 'nowrap' as const,
      minWidth: 'auto',
    },
  };

  // Features Styles
  const featuresStyles = {
    container: {
      padding: '100px 24px',
      background: '#0a0d12',
    },
    label: {
      fontSize: '12px',
      color: '#00c9a7',
      textTransform: 'uppercase' as const,
      letterSpacing: '1.5px',
      marginBottom: '16px',
      textAlign: 'center' as const,
    },
    h2: {
      fontSize: '44px',
      fontWeight: 'bold',
      letterSpacing: '-1.5px',
      color: '#ffffff',
      marginBottom: '16px',
      textAlign: 'center' as const,
    },
    subtitle: {
      fontSize: '16px',
      color: '#9ca3af',
      marginBottom: '48px',
      textAlign: 'center' as const,
      maxWidth: '500px',
      marginX: 'auto',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1px',
      background: 'rgba(255,255,255,0.07)',
      borderRadius: '16px',
      overflow: 'hidden',
      maxWidth: '1100px',
      marginX: 'auto',
    },
    card: {
      background: '#0f1117',
      padding: '32px',
      cursor: 'pointer',
      transition: 'background 0.3s',
    },
    cardHover: {
      background: '#161820',
    },
    iconPill: {
      width: '40px',
      height: '40px',
      background: 'rgba(0,201,167,0.1)',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px',
      marginBottom: '16px',
    },
    featureName: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: '8px',
    },
    featureDesc: {
      fontSize: '13.5px',
      color: '#9ca3af',
    },
  };

  // Pricing Styles
  const pricingStyles = {
    container: {
      padding: '100px 24px',
      textAlign: 'center' as const,
      background: '#0a0d12',
    },
    label: {
      fontSize: '12px',
      color: '#00c9a7',
      textTransform: 'uppercase' as const,
      letterSpacing: '1.5px',
      marginBottom: '16px',
    },
    h2: {
      fontSize: '44px',
      fontWeight: 'bold',
      letterSpacing: '-1.5px',
      color: '#ffffff',
      marginBottom: '16px',
    },
    subtitle: {
      fontSize: '16px',
      color: '#9ca3af',
      marginBottom: '48px',
      maxWidth: '500px',
      marginX: 'auto',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '16px',
      maxWidth: '1100px',
      marginX: 'auto',
    },
    card: {
      background: '#0f1117',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '16px',
      padding: '28px',
      position: 'relative' as const,
      transition: 'all 0.3s',
    },
    cardPopular: {
      borderColor: '#00c9a7',
      borderWidth: '2px',
    },
    badge: {
      position: 'absolute' as const,
      top: '-11px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#00c9a7',
      color: '#000000',
      padding: '4px 12px',
      borderRadius: '9999px',
      fontSize: '12px',
      fontWeight: 'bold',
    },
    price: {
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: '8px',
    },
    period: {
      fontSize: '14px',
      color: '#9ca3af',
      marginBottom: '24px',
    },
    button: {
      width: '100%',
      padding: '12px 16px',
      borderRadius: '10px',
      border: 'none',
      fontSize: '14px',
      fontWeight: 'bold',
      cursor: 'pointer',
      marginBottom: '24px',
      transition: 'all 0.2s',
    },
    buttonSolid: {
      background: '#00c9a7',
      color: '#000000',
    },
    buttonOutline: {
      background: 'transparent',
      border: '1px solid rgba(255,255,255,0.2)',
      color: '#ffffff',
    },
    features: {
      textAlign: 'left' as const,
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '12px',
    },
    featureItem: {
      fontSize: '13px',
      color: '#9ca3af',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    checkmark: {
      color: '#00c9a7',
      fontWeight: 'bold',
    },
  };

  // CTA Styles
  const ctaStyles = {
    container: {
      padding: '120px 24px',
      textAlign: 'center' as const,
      background: '#0a0d12',
    },
    h2: {
      fontSize: '48px',
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: '16px',
      letterSpacing: '-1px',
    },
    subtitle: {
      fontSize: '18px',
      color: '#9ca3af',
      marginBottom: '40px',
      maxWidth: '600px',
      marginX: 'auto',
    },
    buttonContainer: {
      display: 'flex',
      gap: '16px',
      justifyContent: 'center',
      flexWrap: 'wrap' as const,
    },
    button: {
      padding: '14px 32px',
      borderRadius: '10px',
      border: 'none',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'all 0.2s',
    },
    buttonPrimary: {
      background: '#00c9a7',
      color: '#000000',
    },
    buttonSecondary: {
      background: 'transparent',
      border: '1px solid rgba(255,255,255,0.2)',
      color: '#ffffff',
    },
  };

  // Footer Styles
  const footerStyles = {
    container: {
      background: '#0f1117',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      padding: '60px 24px 32px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '240px 1fr 1fr 1fr 1fr',
      gap: '40px',
      maxWidth: '1200px',
      marginX: 'auto',
      marginBottom: '40px',
    },
    logo: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: '12px',
    },
    description: {
      fontSize: '13px',
      color: '#6b7280',
      marginBottom: '16px',
      lineHeight: 1.6,
    },
    socialRow: {
      display: 'flex',
      gap: '12px',
    },
    socialButton: {
      width: '32px',
      height: '32px',
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.2s',
      color: '#ffffff',
    },
    columnTitle: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: '16px',
    },
    columnLinks: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '12px',
    },
    link: {
      fontSize: '13px',
      color: '#6b7280',
      cursor: 'pointer',
      transition: 'color 0.2s',
      textDecoration: 'none',
    },
    linkHover: {
      color: '#e8eaf0',
    },
    bottomRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      paddingTop: '24px',
      fontSize: '13px',
      color: '#6b7280',
      maxWidth: '1200px',
      marginX: 'auto',
      flexWrap: 'wrap' as const,
      gap: '16px',
    },
    statusRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    statusDot: {
      width: '8px',
      height: '8px',
      background: '#10b981',
      borderRadius: '50%',
    },
  };

  const featureData = [
    { icon: '🗄️', name: 'Database', desc: 'Auto setup DB and SQL queries' },
    { icon: '🔐', name: 'Authentication', desc: 'Social logins, email/password, magic links' },
    { icon: '⚡', name: 'Edge Functions', desc: 'Deploy complete backend APIs' },
    { icon: '📦', name: 'Storage', desc: 'File uploads with CDN' },
    { icon: '🤖', name: 'AI Models', desc: 'GPT-5, Claude, Gemini, Whisper' },
    { icon: '🌍', name: 'Hosting', desc: 'Custom domains, SSL, global CDN' },
  ];

  const pricingData = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      credits: '5 credits/day',
      features: [
        '5 credits/day',
        'Basic support',
        'Community access',
        'Limited to 1 project',
      ],
      popular: false,
    },
    {
      name: 'Starter',
      price: '$13',
      period: '/mo (Annual)',
      credits: '250 credits/mo',
      features: [
        '250 credits/mo',
        'Email support',
        'Unlimited projects',
        'Custom domain',
      ],
      popular: false,
    },
    {
      name: 'Pro',
      price: '$25',
      period: '/mo (Annual)',
      credits: '350 credits/mo',
      features: [
        '350 credits/mo',
        'Priority support',
        'Team collaboration',
        'Advanced analytics',
      ],
      popular: true,
    },
    {
      name: 'Max',
      price: '$100',
      period: '/mo',
      credits: '950+ credits/mo',
      features: [
        '950+ credits/mo',
        '24/7 support',
        'Dedicated account',
        'Custom integrations',
      ],
      popular: false,
    },
  ];

  const marqueeItems = [
    '🗄️ PostgreSQL Database',
    '🔐 Authentication',
    '⚡ Edge Functions',
    '💳 Stripe Payments',
    '📦 File Storage',
    '🤖 AI Models',
    '🌍 Custom Domains',
    '📊 Analytics',
    '🔄 Real-time',
    '🧠 AI Agents',
  ];

  const examples = ['SaaS dashboard', 'E-commerce store', 'CRM with AI', 'Booking system', 'Landing page'];

  return (
    <div style={{ background: '#0a0d12', color: '#ffffff', fontFamily: 'Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        textarea::placeholder {
          color: #6b7280;
        }

        button:hover {
          opacity: 0.9;
        }

        a {
          text-decoration: none;
          color: inherit;
        }
      `}</style>

      <Navbar />

      {/* Hero Section */}
      <section style={heroStyles.container}>
        <div style={heroStyles.glow} />
        <div style={heroStyles.content}>
          <div style={heroStyles.badge}>🟢 The #1 AI Agentic Coding Platform</div>
          <h1 style={heroStyles.h1}>
            Build Any App, Website, or <span style={heroStyles.tealSpan}>SaaS</span> with AI
          </h1>
          <p style={heroStyles.subtitle}>
            Generate production-ready apps in seconds. From idea to deployment, Blink handles everything with AI-powered coding.
          </p>

          {/* Prompt Box */}
          <div style={promptBoxStyles.container}>
            <textarea
              style={promptBoxStyles.textarea}
              placeholder="Describe the app you want to build..."
              value={promptValue}
              onChange={(e) => setPromptValue(e.target.value)}
            />
            <div style={promptBoxStyles.actionRow}>
              <div style={promptBoxStyles.pillRow}>
                <div style={promptBoxStyles.pill}>Claude Sonnet</div>
                <div style={promptBoxStyles.pill}>Import from GitHub</div>
              </div>
              <button
                style={promptBoxStyles.sendButton}
                onClick={() => console.log('Prompt submitted:', promptValue)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>

          {/* Example Chips */}
          <div style={examplesStyles.container}>
            {examples.map((example) => (
              <div
                key={example}
                style={examplesStyles.chip}
                onClick={() => handleExampleClick(example)}
              >
                {example}
              </div>
            ))}
          </div>

          {/* Trust Row */}
          <div style={trustRowStyles.container}>
            <div style={trustRowStyles.item}>
              <span>⭐</span>
              <span>50,000+ apps built</span>
            </div>
            <div style={trustRowStyles.item}>
              <span>⭐</span>
              <span>Free to start</span>
            </div>
            <div style={trustRowStyles.item}>
              <span>⭐</span>
              <span>No credit card required</span>
            </div>
            <div style={trustRowStyles.item}>
              <span>⭐</span>
              <span>Production-ready in minutes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section style={marqueeStyles.container}>
        <div style={marqueeStyles.track}>
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} style={marqueeStyles.item}>
              {item.split(' ').length > 1 ? (
                <>
                  {item.split(' ')[0]} <span style={{ color: '#00c9a7', fontWeight: 'bold' }}>{item.split(' ').slice(1).join(' ')}</span>
                </>
              ) : (
                item
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section style={featuresStyles.container} data-reveal>
        <div style={featuresStyles.label}>Everything Built-In</div>
        <h2 style={featuresStyles.h2}>Everything You Need, Built-In</h2>
        <p style={featuresStyles.subtitle}>No more juggling multiple services. Everything you need to build production apps is included.</p>

        <div style={featuresStyles.grid}>
          {featureData.map((feature) => (
            <div
              key={feature.name}
              style={featuresStyles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#161820';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#0f1117';
              }}
            >
              <div style={featuresStyles.iconPill}>{feature.icon}</div>
              <div style={featuresStyles.featureName}>{feature.name}</div>
              <div style={featuresStyles.featureDesc}>{feature.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section style={pricingStyles.container} data-reveal>
        <div style={pricingStyles.label}>Simple, Transparent Pricing</div>
        <h2 style={pricingStyles.h2}>Simple, Transparent Pricing</h2>
        <p style={pricingStyles.subtitle}>Choose the plan that works for you. Scale as you grow.</p>

        <div style={pricingStyles.grid}>
          {pricingData.map((plan) => (
            <div
              key={plan.name}
              style={{
                ...pricingStyles.card,
                ...(plan.popular ? pricingStyles.cardPopular : {}),
              }}
            >
              {plan.popular && <div style={pricingStyles.badge}>Most Popular</div>}
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px' }}>{plan.name}</h3>
              <div style={pricingStyles.price}>{plan.price}</div>
              <div style={pricingStyles.period}>{plan.period}</div>
              <button
                style={{
                  ...pricingStyles.button,
                  ...(plan.popular ? pricingStyles.buttonSolid : pricingStyles.buttonOutline),
                }}
              >
                Get Started
              </button>
              <div style={pricingStyles.features}>
                {plan.features.map((feature) => (
                  <div key={feature} style={pricingStyles.featureItem}>
                    <span style={pricingStyles.checkmark}>✓</span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={ctaStyles.container} data-reveal>
        <h2 style={ctaStyles.h2}>
          Don't just think it, <span style={{ color: '#00c9a7' }}>Blink</span> it.
        </h2>
        <p style={ctaStyles.subtitle}>
          Start building your next big idea with Blink. From concept to production in minutes.
        </p>
        <div style={ctaStyles.buttonContainer}>
          <Link to="/build">
            <button style={{ ...ctaStyles.button, ...ctaStyles.buttonPrimary }}>
              Get started for free
            </button>
          </Link>
          <Link to="/pricing">
            <button style={{ ...ctaStyles.button, ...ctaStyles.buttonSecondary }}>
              View Pricing
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={footerStyles.container}>
        <div style={footerStyles.grid}>
          <div>
            <div style={footerStyles.logo}>Blink</div>
            <p style={footerStyles.description}>Build production apps with AI. From idea to deployment in minutes.</p>
            <div style={footerStyles.socialRow}>
              <button style={footerStyles.socialButton} title="X">𝕏</button>
              <button style={footerStyles.socialButton} title="Discord">⚫</button>
              <button style={footerStyles.socialButton} title="LinkedIn">in</button>
              <button style={footerStyles.socialButton} title="Reddit">R</button>
            </div>
          </div>

          <div>
            <div style={footerStyles.columnTitle}>Product</div>
            <div style={footerStyles.columnLinks}>
              <a href="#features" style={footerStyles.link}>Features</a>
              <a href="#pricing" style={footerStyles.link}>Pricing</a>
              <a href="#" style={footerStyles.link}>Docs</a>
              <a href="#" style={footerStyles.link}>API</a>
            </div>
          </div>

          <div>
            <div style={footerStyles.columnTitle}>Resources</div>
            <div style={footerStyles.columnLinks}>
              <a href="#" style={footerStyles.link}>Blog</a>
              <a href="#" style={footerStyles.link}>Guides</a>
              <a href="#" style={footerStyles.link}>Templates</a>
              <a href="#" style={footerStyles.link}>Community</a>
            </div>
          </div>

          <div>
            <div style={footerStyles.columnTitle}>Community</div>
            <div style={footerStyles.columnLinks}>
              <a href="#" style={footerStyles.link}>Discord</a>
              <a href="#" style={footerStyles.link}>GitHub</a>
              <a href="#" style={footerStyles.link}>Twitter</a>
              <a href="#" style={footerStyles.link}>Help Center</a>
            </div>
          </div>

          <div>
            <div style={footerStyles.columnTitle}>Legal</div>
            <div style={footerStyles.columnLinks}>
              <a href="#" style={footerStyles.link}>Privacy</a>
              <a href="#" style={footerStyles.link}>Terms</a>
              <a href="#" style={footerStyles.link}>Cookie Policy</a>
              <a href="#" style={footerStyles.link}>Contact</a>
            </div>
          </div>
        </div>

        <div style={footerStyles.bottomRow}>
          <span>&copy; 2026 Blink. All rights reserved.</span>
          <div style={footerStyles.statusRow}>
            <div style={footerStyles.statusDot} />
            <span>All systems normal</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
