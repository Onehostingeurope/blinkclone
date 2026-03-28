import React, { useState, useEffect, useCallback } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import Badge from '../components/Badge';
import StatCard from '../components/StatCard';
import Toggle from '../components/Toggle';
import ProgressBar from '../components/ProgressBar';
import ChartBars from '../components/ChartBars';


const Admin: React.FC = () => {
  const [activePanel, setActivePanel] = useState<string>('overview');
  const [toggleStates, setToggleStates] = useState<Record<string, boolean>>({
    maintenance: false,
    newSignups: true,
    freeDailyCredits: true,
    aiRateLimiting: true,
    debugMode: false,
    welcome: true,
    creditAlerts: true,
    trialReminders: true,
    marketing: false,
  });
  const [logEntries, setLogEntries] = useState<Array<{ id: string; time: string; level: string; message: string }>>([
    { id: '1', time: '14:32:18', level: 'OK', message: 'System initialized successfully' },
    { id: '2', time: '14:32:15', level: 'INFO', message: 'Database connection established' },
    { id: '3', time: '14:32:10', level: 'INFO', message: 'API server running on port 3000' },
    { id: '4', time: '14:31:45', level: 'WARN', message: 'High memory usage detected: 78%' },
    { id: '5', time: '14:31:30', level: 'OK', message: 'Cache cleared successfully' },
    { id: '6', time: '14:31:15', level: 'INFO', message: 'Backup process started' },
    { id: '7', time: '14:31:00', level: 'OK', message: 'All services operational' },
    { id: '8', time: '14:30:45', level: 'INFO', message: 'User analytics updated' },
    { id: '9', time: '14:30:30', level: 'WARN', message: 'API response time exceeded threshold' },
    { id: '10', time: '14:30:15', level: 'OK', message: 'Revenue report generated' },
    { id: '11', time: '14:30:00', level: 'INFO', message: 'Scheduled task completed' },
    { id: '12', time: '14:29:45', level: 'OK', message: 'System check passed' },
  ]);
  const [logPaused, setLogPaused] = useState(false);
  const [queryResult, setQueryResult] = useState<string>('');
  const [copiedKeyId, setCopiedKeyId] = useState<string>('');
  const [aiModelToggles, setAiModelToggles] = useState<Record<string, boolean>>({
    'claude-sonnet-4-6': true,
    'gpt-5': true,
    'gemini-2.5-pro': true,
    'whisper-large-v3': true,
    'dall-e-3': false,
  });
  const [sqlQuery, setSqlQuery] = useState('SELECT * FROM users LIMIT 10;');

  const panelTitles: Record<string, string> = {
    overview: 'Dashboard',
    analytics: 'Analytics',
    users: 'All Users',
    subscriptions: 'Subscriptions',
    credits: 'Credits Manager',
    projects: 'All Projects',
    deployments: 'Deployments',
    database: 'Database',
    api: 'API Keys',
    webhooks: 'Webhooks',
    logs: 'System Logs',
    aimodels: 'AI Models',
    billing: 'Billing',
    settings: 'Settings',
  };

  useEffect(() => {
    if (logPaused) return;
    const interval = setInterval(() => {
      const levels = ['OK', 'INFO', 'WARN', 'ERROR'];
      const messages = [
        'Request processed successfully',
        'Background job completed',
        'Cache updated',
        'User authenticated',
        'Database query executed',
        'Email sent',
        'File uploaded',
        'Payment received',
        'Credit usage logged',
        'Build deployed',
      ];
      const randomLevel = levels[Math.floor(Math.random() * levels.length)];
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      const now = new Date();
      const time = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });

      setLogEntries(prev => {
        const newEntries = [
          { id: Date.now().toString(), time, level: randomLevel, message: randomMessage },
          ...prev,
        ].slice(0, 30);
        return newEntries;
      });
    }, 2800);

    return () => clearInterval(interval);
  }, [logPaused]);

  const handleToggle = useCallback((key: string) => {
    setToggleStates(prev => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const handleAiModelToggle = useCallback((modelId: string) => {
    setAiModelToggles(prev => ({ ...prev, [modelId]: !prev[modelId] }));
  }, []);

  const handleCopyKey = (keyId: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedKeyId(keyId);
    setTimeout(() => setCopiedKeyId(''), 1200);
  };

  const handleRunQuery = () => {
    setQueryResult('Query executed successfully.\n5 rows returned.\nExecution time: 45ms');
  };

  const handleGrantCredits = () => {
    alert('Credits granted successfully to user email');
  };

  const renderTopBar = () => (
    <div style={{
      height: '50px',
      backgroundColor: '#0d0e14',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px',
      gap: '12px',
      flexShrink: 0,
    }}>
      <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#fff' }}>
        {panelTitles[activePanel]}
      </div>
      <div style={{ flex: 1 }} />
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        backgroundColor: 'rgba(34,197,94,0.1)',
        padding: '4px 10px',
        borderRadius: '100px',
        fontSize: '10.5px',
        color: '#22c55e',
        animation: 'pulse 2s infinite',
      }}>
        <div style={{
          width: '6px',
          height: '6px',
          backgroundColor: '#22c55e',
          borderRadius: '50%',
        }} />
        Live
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        backgroundColor: 'rgba(34,197,94,0.1)',
        border: '1px solid #22c55e',
        padding: '4px 10px',
        borderRadius: '6px',
        fontSize: '11px',
        fontWeight: 'bold',
        color: '#22c55e',
      }}>
        <div style={{
          width: '6px',
          height: '6px',
          backgroundColor: '#22c55e',
          borderRadius: '50%',
        }} />
        Production
        <span>▼</span>
      </div>
      <button style={{
        backgroundColor: 'transparent',
        border: '1px solid rgba(255,255,255,0.15)',
        color: '#fff',
        padding: '6px 12px',
        borderRadius: '6px',
        fontSize: '12px',
        cursor: 'pointer',
        fontWeight: '500',
      }}>
        ↓ Export
      </button>
      <button style={{
        backgroundColor: '#06b6d4',
        color: '#000',
        border: 'none',
        padding: '6px 12px',
        borderRadius: '6px',
        fontSize: '12px',
        fontWeight: '600',
        cursor: 'pointer',
      }}>
        + New
      </button>
    </div>
  );

  const renderOverviewPanel = () => (
    <div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '12px',
        marginBottom: '20px',
      }}>
        <StatCard label="Total Users" value="50,247" change={12.4} />
        <StatCard label="Projects Built" value="289,440" change={8.7} />
        <StatCard label="MRR" value="$94,820" change={21.3} />
        <StatCard label="Credits Used Today" value="1.2M" change={-3.1} />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '12px',
        marginBottom: '20px',
      }}>
        <div style={{
          backgroundColor: '#0f1117',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '12px',
          overflow: 'hidden',
        }}>
          <div style={{
            padding: '14px 18px',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            fontSize: '13.5px',
            fontWeight: 'bold',
            color: '#fff',
          }}>
            App Builds (Last 7 Days)
          </div>
          <div style={{ padding: '18px' }}>
            <ChartBars
              data={[40, 65, 50, 80, 70, 90, 100]}
              labels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
              color="#06b6d4"
            />
          </div>
        </div>

        <div style={{
          backgroundColor: '#0f1117',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '12px',
          overflow: 'hidden',
        }}>
          <div style={{
            padding: '14px 18px',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            fontSize: '13.5px',
            fontWeight: 'bold',
            color: '#fff',
          }}>
            Revenue (Last 7 Days)
          </div>
          <div style={{ padding: '18px' }}>
            <ChartBars
              data={[55, 45, 70, 60, 85, 75, 100]}
              labels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
              color="#4f8ef7"
            />
          </div>
        </div>
      </div>

      <div style={{
        backgroundColor: '#0f1117',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '12px',
        overflow: 'hidden',
        marginBottom: '20px',
      }}>
        <div style={{
          padding: '14px 18px',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          fontSize: '13.5px',
          fontWeight: 'bold',
          color: '#fff',
        }}>
          Recent Signups
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>User</th>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Email</th>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Plan</th>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Credits</th>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Joined</th>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Status</th>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              { user: 'Alice Chen', email: 'alice@acme.com', plan: 'Pro', credits: '450', joined: 'Mar 25', status: 'active' },
              { user: 'Bob Johnson', email: 'bob@startup.io', plan: 'Starter', credits: '85', joined: 'Mar 26', status: 'active' },
              { user: 'Carol Davis', email: 'carol@corp.com', plan: 'Max', credits: '890', joined: 'Mar 27', status: 'active' },
              { user: 'David Kim', email: 'david@dev.com', plan: 'Free', credits: '5', joined: 'Mar 28', status: 'pending' },
              { user: 'Eve Wilson', email: 'eve@studio.com', plan: 'Pro', credits: '420', joined: 'Mar 20', status: 'active' },
            ].map((row, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>{row.user}</td>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>{row.email}</td>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>
                  <Badge variant={row.plan === 'Max' ? 'danger' : row.plan === 'Pro' ? 'primary' : 'secondary'} text={row.plan} />
                </td>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>{row.credits}</td>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>{row.joined}</td>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>
                  <Badge variant={row.status === 'active' ? 'success' : 'warning'} text={row.status.charAt(0).toUpperCase() + row.status.slice(1)} />
                </td>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px', display: 'flex', gap: '6px' }}>
                  <button style={{
                    width: '26px',
                    height: '26px',
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '5px',
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: '12px',
                  }}>✎</button>
                  <button style={{
                    width: '26px',
                    height: '26px',
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '5px',
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: '12px',
                  }}>👁</button>
                  <button style={{
                    width: '26px',
                    height: '26px',
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '5px',
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: '12px',
                  }}>⊘</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '12px',
      }}>
        <div style={{
          backgroundColor: '#0f1117',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '12px',
          overflow: 'hidden',
          padding: '14px 18px',
        }}>
          <div style={{ fontSize: '13.5px', fontWeight: 'bold', color: '#fff', marginBottom: '12px' }}>API Health</div>
          <div style={{ marginBottom: '10px' }}>
            <div style={{ fontSize: '11px', color: '#888', marginBottom: '4px' }}>Response Time</div>
            <div style={{ fontSize: '12px', color: '#fff', marginBottom: '6px' }}>42ms (95%)</div>
            <ProgressBar value={95} color="#06b6d4" />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <div style={{ fontSize: '11px', color: '#888', marginBottom: '4px' }}>Uptime</div>
            <div style={{ fontSize: '12px', color: '#fff', marginBottom: '6px' }}>99.97%</div>
            <ProgressBar value={99.97} color="#22c55e" />
          </div>
          <div>
            <div style={{ fontSize: '11px', color: '#888', marginBottom: '4px' }}>Error Rate</div>
            <div style={{ fontSize: '12px', color: '#fff', marginBottom: '6px' }}>0.03%</div>
            <ProgressBar value={3} color="#ef4444" />
          </div>
        </div>

        <div style={{
          backgroundColor: '#0f1117',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '12px',
          overflow: 'hidden',
          padding: '14px 18px',
        }}>
          <div style={{ fontSize: '13.5px', fontWeight: 'bold', color: '#fff', marginBottom: '12px' }}>Database</div>
          <div style={{ marginBottom: '10px' }}>
            <div style={{ fontSize: '11px', color: '#888', marginBottom: '4px' }}>CPU</div>
            <div style={{ fontSize: '12px', color: '#fff', marginBottom: '6px' }}>34%</div>
            <ProgressBar value={34} color="#f59e0b" />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <div style={{ fontSize: '11px', color: '#888', marginBottom: '4px' }}>Storage</div>
            <div style={{ fontSize: '12px', color: '#fff', marginBottom: '6px' }}>2.4TB / 10TB</div>
            <ProgressBar value={24} color="#06b6d4" />
          </div>
          <div>
            <div style={{ fontSize: '11px', color: '#888', marginBottom: '4px' }}>Connections</div>
            <div style={{ fontSize: '12px', color: '#fff', marginBottom: '6px' }}>1204 / 5000</div>
            <ProgressBar value={24} color="#22c55e" />
          </div>
        </div>

        <div style={{
          backgroundColor: '#0f1117',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '12px',
          overflow: 'hidden',
          padding: '14px 18px',
        }}>
          <div style={{ fontSize: '13.5px', fontWeight: 'bold', color: '#fff', marginBottom: '12px' }}>AI Usage</div>
          <div style={{ marginBottom: '10px' }}>
            <div style={{ fontSize: '11px', color: '#888', marginBottom: '4px' }}>Claude Sonnet</div>
            <div style={{ fontSize: '12px', color: '#fff', marginBottom: '6px' }}>68%</div>
            <ProgressBar value={68} color="#a855f7" />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <div style={{ fontSize: '11px', color: '#888', marginBottom: '4px' }}>GPT-5</div>
            <div style={{ fontSize: '12px', color: '#fff', marginBottom: '6px' }}>21%</div>
            <ProgressBar value={21} color="#3b82f6" />
          </div>
          <div>
            <div style={{ fontSize: '11px', color: '#888', marginBottom: '4px' }}>Gemini 2.5</div>
            <div style={{ fontSize: '12px', color: '#fff', marginBottom: '6px' }}>11%</div>
            <ProgressBar value={11} color="#f59e0b" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderUsersPanel = () => (
    <div>
      <div style={{
        display: 'flex',
        gap: '12px',
        marginBottom: '20px',
        padding: '12px',
        backgroundColor: '#0f1117',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '12px',
      }}>
        <input
          type="text"
          placeholder="Search users..."
          style={{
            flex: 1,
            backgroundColor: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '8px 12px',
            borderRadius: '6px',
            color: '#fff',
            fontSize: '12px',
          }}
        />
        <select style={{
          backgroundColor: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.1)',
          padding: '8px 12px',
          borderRadius: '6px',
          color: '#fff',
          fontSize: '12px',
        }}>
          <option>All Plans</option>
          <option>Free</option>
          <option>Starter</option>
          <option>Pro</option>
          <option>Max</option>
        </select>
        <select style={{
          backgroundColor: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.1)',
          padding: '8px 12px',
          borderRadius: '6px',
          color: '#fff',
          fontSize: '12px',
        }}>
          <option>All Status</option>
          <option>Active</option>
          <option>Pending</option>
          <option>Inactive</option>
        </select>
        <button style={{
          backgroundColor: '#06b6d4',
          color: '#000',
          border: 'none',
          padding: '8px 12px',
          borderRadius: '6px',
          fontSize: '12px',
          fontWeight: '600',
          cursor: 'pointer',
        }}>
          + Add User
        </button>
      </div>

      <div style={{
        backgroundColor: '#0f1117',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '12px',
        overflow: 'hidden',
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>User</th>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Email</th>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Plan</th>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Credits</th>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Projects</th>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Joined</th>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Last Active</th>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Status</th>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              { user: 'Alice Chen', email: 'alice@acme.com', plan: 'Pro', credits: '450', projects: '12', joined: 'Mar 10', lastActive: '2h ago', status: 'active' },
              { user: 'Bob Johnson', email: 'bob@startup.io', plan: 'Starter', credits: '85', projects: '3', joined: 'Mar 15', lastActive: '1d ago', status: 'active' },
              { user: 'Carol Davis', email: 'carol@corp.com', plan: 'Max', credits: '890', projects: '28', joined: 'Feb 1', lastActive: '30m ago', status: 'active' },
              { user: 'David Kim', email: 'david@dev.com', plan: 'Free', credits: '5', projects: '1', joined: 'Mar 25', lastActive: 'Now', status: 'pending' },
              { user: 'Eve Wilson', email: 'eve@studio.com', plan: 'Pro', credits: '420', projects: '8', joined: 'Feb 20', lastActive: '4d ago', status: 'active' },
              { user: 'Frank Miller', email: 'frank@media.co', plan: 'Starter', credits: '120', projects: '5', joined: 'Mar 1', lastActive: '2w ago', status: 'inactive' },
            ].map((row, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>{row.user}</td>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>{row.email}</td>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>
                  <Badge variant={row.plan === 'Max' ? 'danger' : row.plan === 'Pro' ? 'primary' : 'secondary'} text={row.plan} />
                </td>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>{row.credits}</td>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>{row.projects}</td>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>{row.joined}</td>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>{row.lastActive}</td>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>
                  <Badge variant={row.status === 'active' ? 'success' : row.status === 'pending' ? 'warning' : 'secondary'} text={row.status.charAt(0).toUpperCase() + row.status.slice(1)} />
                </td>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px', display: 'flex', gap: '6px' }}>
                  <button style={{
                    width: '26px',
                    height: '26px',
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '5px',
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: '12px',
                  }}>✎</button>
                  <button style={{
                    width: '26px',
                    height: '26px',
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '5px',
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: '12px',
                  }}>👁</button>
                  <button style={{
                    width: '26px',
                    height: '26px',
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '5px',
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: '12px',
                  }}>⊘</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderApiPanel = () => (
    <div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '12px',
        marginBottom: '20px',
      }}>
        <StatCard label="Total Keys" value="8" change={0} />
        <StatCard label="Active" value="6" change={0} />
        <StatCard label="Expiring" value="1" change={0} />
        <StatCard label="Last Rotated" value="5d ago" change={0} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {[
          { id: 'prod', name: 'Production', value: 'sk_live_51234567890abcdef...', scope: 'Full Access', status: 'active' },
          { id: 'stripe', name: 'Stripe Webhook', value: 'whsec_test_abcdef1234567890...', scope: 'Webhooks', status: 'active' },
          { id: 'openai', name: 'OpenAI Gateway', value: 'sk_org_aabbccddeeff001122...', scope: 'AI Gateway', status: 'active' },
          { id: 'claude', name: 'Anthropic/Claude', value: 'sk-ant-d01d1234567890ab...', scope: 'AI Models', status: 'active' },
          { id: 'supabase', name: 'Supabase', value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...', scope: 'Database', status: 'active' },
          { id: 'resend', name: 'Resend Email', value: 're_12345abcde6789fghij...', scope: 'Email', status: 'active' },
          { id: 'r2', name: 'Cloudflare R2', value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...', scope: 'Storage', status: 'expiring' },
          { id: 'dev', name: 'Dev/Staging', value: 'sk_test_abcdef1234567890...', scope: 'Read Only', status: 'inactive' },
        ].map((key) => (
          <div key={key.id} style={{
            backgroundColor: '#161820',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '8px',
            padding: '10px 14px',
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <div style={{ width: '140px', fontSize: '13px', fontWeight: 'bold', color: '#fff', whiteSpace: 'nowrap' }}>{key.name}</div>
            <div style={{ flex: 1, fontFamily: 'monospace', fontSize: '12px', color: '#888', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {key.value}
            </div>
            <Badge variant="secondary" text={key.scope} />
            <Badge variant={key.status === 'active' ? 'success' : key.status === 'expiring' ? 'warning' : 'secondary'} text={key.status.charAt(0).toUpperCase() + key.status.slice(1)} />
            <button
              onClick={() => handleCopyKey(key.id, key.value)}
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff',
                padding: '4px 8px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '11px',
                minWidth: '30px',
              }}
            >
              {copiedKeyId === key.id ? '✓' : '⎘'}
            </button>
            <button style={{
              backgroundColor: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff',
              padding: '4px 8px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '11px',
              minWidth: '30px',
            }}>↻</button>
            <button style={{
              backgroundColor: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff',
              padding: '4px 8px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '11px',
              minWidth: '30px',
            }}>⊘</button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderLogsPanel = () => (
    <div>
      <div style={{
        display: 'flex',
        gap: '12px',
        marginBottom: '20px',
        padding: '12px',
        backgroundColor: '#0f1117',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '12px',
        alignItems: 'center',
      }}>
        <select style={{
          backgroundColor: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.1)',
          padding: '8px 12px',
          borderRadius: '6px',
          color: '#fff',
          fontSize: '12px',
        }}>
          <option>All Levels</option>
          <option>OK</option>
          <option>INFO</option>
          <option>WARN</option>
          <option>ERROR</option>
        </select>
        <select style={{
          backgroundColor: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.1)',
          padding: '8px 12px',
          borderRadius: '6px',
          color: '#fff',
          fontSize: '12px',
        }}>
          <option>Last Hour</option>
          <option>Last 24h</option>
          <option>Last 7d</option>
        </select>
        <div style={{ flex: 1 }} />
        <button
          onClick={() => setLogPaused(!logPaused)}
          style={{
            backgroundColor: logPaused ? '#ef4444' : '#22c55e',
            color: '#fff',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: '600',
          }}
        >
          {logPaused ? '▶ Resume' : '⏸ Pause'}
        </button>
      </div>

      <div style={{
        backgroundColor: '#0f1117',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '12px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '500px',
        overflowY: 'auto',
      }}>
        {logEntries.map((entry) => (
          <div
            key={entry.id}
            style={{
              display: 'flex',
              gap: '10px',
              padding: '9px 14px',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              alignItems: 'flex-start',
            }}
          >
            <div style={{ fontFamily: 'monospace', fontSize: '11px', color: '#888', minWidth: '60px' }}>{entry.time}</div>
            <Badge
              variant={
                entry.level === 'OK' ? 'success' : entry.level === 'INFO' ? 'primary' : entry.level === 'WARN' ? 'warning' : 'danger'
              }
              text={entry.level}
            />
            <div style={{ fontFamily: 'monospace', fontSize: '12px', color: '#9ca3af' }}>{entry.message}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSettingsPanel = () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
      <div style={{
        backgroundColor: '#0f1117',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '12px',
        overflow: 'hidden',
      }}>
        <div style={{
          padding: '14px 18px',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          fontSize: '13.5px',
          fontWeight: 'bold',
          color: '#fff',
        }}>
          Platform Settings
        </div>
        <div style={{ padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { key: 'maintenance', label: 'Maintenance Mode' },
            { key: 'newSignups', label: 'New Signups' },
            { key: 'freeDailyCredits', label: 'Free Daily Credits' },
            { key: 'aiRateLimiting', label: 'AI Rate Limiting' },
            { key: 'debugMode', label: 'Debug Mode' },
          ].map(({ key, label }) => (
            <div key={key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontSize: '13px', color: '#fff' }}>{label}</div>
              <Toggle
                checked={toggleStates[key as keyof typeof toggleStates]}
                onChange={() => handleToggle(key)}
              />
            </div>
          ))}
        </div>
      </div>

      <div style={{
        backgroundColor: '#0f1117',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '12px',
        overflow: 'hidden',
      }}>
        <div style={{
          padding: '14px 18px',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          fontSize: '13.5px',
          fontWeight: 'bold',
          color: '#fff',
        }}>
          Email Settings
        </div>
        <div style={{ padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { key: 'welcome', label: 'Welcome Emails' },
            { key: 'creditAlerts', label: 'Credit Alerts' },
            { key: 'trialReminders', label: 'Trial Reminders' },
            { key: 'marketing', label: 'Marketing Emails' },
          ].map(({ key, label }) => (
            <div key={key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontSize: '13px', color: '#fff' }}>{label}</div>
              <Toggle
                checked={toggleStates[key as keyof typeof toggleStates]}
                onChange={() => handleToggle(key)}
              />
            </div>
          ))}
        </div>
      </div>

      <div style={{
        backgroundColor: '#0f1117',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '12px',
        overflow: 'hidden',
      }}>
        <div style={{
          padding: '14px 18px',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          fontSize: '13.5px',
          fontWeight: 'bold',
          color: '#fff',
        }}>
          Credit Config
        </div>
        <div style={{ padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { label: 'Free Daily', value: '5' },
            { label: 'Starter', value: '100' },
            { label: 'Pro', value: '200' },
            { label: 'Max', value: '800' },
          ].map(({ label, value }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <label style={{ fontSize: '12px', color: '#888', minWidth: '60px' }}>{label}</label>
              <input
                type="number"
                defaultValue={value}
                style={{
                  flex: 1,
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '6px 10px',
                  borderRadius: '6px',
                  color: '#fff',
                  fontSize: '12px',
                }}
              />
            </div>
          ))}
          <button style={{
            backgroundColor: '#06b6d4',
            color: '#000',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: '600',
            cursor: 'pointer',
            marginTop: '8px',
          }}>
            Save
          </button>
        </div>
      </div>

      <div style={{
        backgroundColor: '#0f1117',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '12px',
        overflow: 'hidden',
      }}>
        <div style={{
          padding: '14px 18px',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          fontSize: '13.5px',
          fontWeight: 'bold',
          color: '#fff',
        }}>
          Danger Zone
        </div>
        <div style={{ padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <button style={{
            backgroundColor: 'rgba(239,68,68,0.1)',
            border: '1px solid #ef4444',
            color: '#ef4444',
            padding: '8px 12px',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: '600',
            cursor: 'pointer',
          }}>
            Reset Credits
          </button>
          <button style={{
            backgroundColor: 'rgba(239,68,68,0.1)',
            border: '1px solid #ef4444',
            color: '#ef4444',
            padding: '8px 12px',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: '600',
            cursor: 'pointer',
          }}>
            Purge Build Queue
          </button>
          <button style={{
            backgroundColor: 'rgba(239,68,68,0.1)',
            border: '1px solid #ef4444',
            color: '#ef4444',
            padding: '8px 12px',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: '600',
            cursor: 'pointer',
          }}>
            Enable Maintenance
          </button>
        </div>
      </div>
    </div>
  );

  const renderAiModelsPanel = () => (
    <div>
      <div style={{
        backgroundColor: '#0f1117',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '12px',
        overflow: 'hidden',
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Model</th>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Provider</th>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Credits</th>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Usage</th>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Enabled</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 'claude-sonnet-4-6', model: 'claude-sonnet-4-6', provider: 'Anthropic', credits: '2', usage: 68 },
              { id: 'gpt-5', model: 'gpt-5', provider: 'OpenAI', credits: '3', usage: 21 },
              { id: 'gemini-2.5-pro', model: 'gemini-2.5-pro', provider: 'Google', credits: '2', usage: 11 },
              { id: 'whisper-large-v3', model: 'whisper-large-v3', provider: 'OpenAI', credits: '1', usage: 5 },
              { id: 'dall-e-3', model: 'dall-e-3', provider: 'OpenAI', credits: '5', usage: 3 },
            ].map((row) => (
              <tr key={row.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>{row.model}</td>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>{row.provider}</td>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>{row.credits}</td>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px', minWidth: '150px' }}>
                  <ProgressBar value={row.usage} color="#a855f7" />
                </td>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>
                  <Toggle
                    checked={aiModelToggles[row.id as keyof typeof aiModelToggles]}
                    onChange={() => handleAiModelToggle(row.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderDatabasePanel = () => (
    <div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '12px',
        marginBottom: '20px',
      }}>
        <StatCard label="Total Tables" value="5" change={0} />
        <StatCard label="Total Records" value="5.6M" change={0} />
        <StatCard label="Database Size" value="2.4TB" change={0} />
        <StatCard label="Connections" value="1,204" change={0} />
      </div>

      <div style={{
        backgroundColor: '#0f1117',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '12px',
        overflow: 'hidden',
        padding: '14px 18px',
        marginBottom: '20px',
      }}>
        <div style={{
          fontSize: '13.5px',
          fontWeight: 'bold',
          color: '#fff',
          marginBottom: '12px',
        }}>
          SQL Console
        </div>
        <textarea
          value={sqlQuery}
          onChange={(e) => setSqlQuery(e.target.value)}
          style={{
            width: '100%',
            height: '100px',
            fontFamily: 'monospace',
            fontSize: '12px',
            backgroundColor: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '10px',
            borderRadius: '6px',
            color: '#fff',
            resize: 'none',
          }}
        />
        <button
          onClick={handleRunQuery}
          style={{
            backgroundColor: '#06b6d4',
            color: '#000',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: '600',
            cursor: 'pointer',
            marginTop: '10px',
          }}
        >
          ▶ Run Query
        </button>
        {queryResult && (
          <div style={{
            marginTop: '10px',
            fontFamily: 'monospace',
            fontSize: '12px',
            color: '#9ca3af',
            backgroundColor: '#161820',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '8px',
            padding: '12px',
            minHeight: '60px',
            whiteSpace: 'pre-wrap',
          }}>
            {queryResult}
          </div>
        )}
      </div>

      <div style={{
        backgroundColor: '#0f1117',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '12px',
        overflow: 'hidden',
      }}>
        <div style={{
          padding: '14px 18px',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          fontSize: '13.5px',
          fontWeight: 'bold',
          color: '#fff',
        }}>
          Tables
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Table</th>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Records</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'users', records: '50,247' },
              { name: 'projects', records: '289,440' },
              { name: 'deployments', records: '1,204,390' },
              { name: 'subscriptions', records: '8,430' },
              { name: 'credit_transactions', records: '4,820,001' },
            ].map((row, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>{row.name}</td>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>{row.records}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderAnalyticsPanel = () => (
    <div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '12px',
        marginBottom: '20px',
      }}>
        <StatCard label="Page Views" value="2.1M" change={18.3} />
        <StatCard label="Active Sessions" value="8,204" change={0} />
        <StatCard label="Avg Session" value="14m 32s" change={0} />
        <StatCard label="Bounce Rate" value="24.1%" change={0} />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '12px',
      }}>
        <div style={{
          backgroundColor: '#0f1117',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '12px',
          overflow: 'hidden',
        }}>
          <div style={{
            padding: '14px 18px',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            fontSize: '13.5px',
            fontWeight: 'bold',
            color: '#fff',
          }}>
            Builds Per Hour
          </div>
          <div style={{ padding: '18px' }}>
            <ChartBars
              data={[20, 35, 45, 50, 40, 55, 65, 70, 60, 75, 85, 90]}
              labels={['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am']}
              color="#06b6d4"
            />
          </div>
        </div>

        <div style={{
          backgroundColor: '#0f1117',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '12px',
          overflow: 'hidden',
          padding: '14px 18px',
        }}>
          <div style={{
            fontSize: '13.5px',
            fontWeight: 'bold',
            color: '#fff',
            marginBottom: '12px',
          }}>
            Top Countries
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { country: 'US', value: 34 },
              { country: 'UK', value: 12 },
              { country: 'Germany', value: 8 },
              { country: 'Brazil', value: 7 },
              { country: 'India', value: 6 },
            ].map((row) => (
              <div key={row.country}>
                <div style={{ fontSize: '11px', color: '#888', marginBottom: '4px' }}>{row.country} ({row.value}%)</div>
                <ProgressBar value={row.value} color="#06b6d4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderBillingPanel = () => (
    <div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '12px',
        marginBottom: '20px',
      }}>
        <StatCard label="MRR" value="$94,820" change={21.3} />
        <StatCard label="ARR" value="$1.14M" change={0} />
        <StatCard label="Churn" value="2.1%" change={0} />
        <StatCard label="ARPU" value="$11.25" change={0} />
      </div>

      <div style={{
        backgroundColor: '#0f1117',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '12px',
        overflow: 'hidden',
      }}>
        <div style={{
          padding: '14px 18px',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          fontSize: '13.5px',
          fontWeight: 'bold',
          color: '#fff',
        }}>
          Transactions
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>User</th>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Type</th>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Amount</th>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {[
              { user: 'Alice Chen', type: 'Subscription', amount: '$49', date: 'Mar 27' },
              { user: 'Carol Davis', type: 'Upgrade', amount: '$99', date: 'Mar 26' },
              { user: 'Eve Wilson', type: 'Subscription', amount: '$29', date: 'Mar 25' },
              { user: 'Bob Johnson', type: 'Subscription', amount: '$9', date: 'Mar 24' },
            ].map((row, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>{row.user}</td>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>{row.type}</td>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>{row.amount}</td>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderSubscriptionsPanel = () => (
    <div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '12px',
        marginBottom: '20px',
      }}>
        <StatCard label="Free" value="41,817" change={5.2} />
        <StatCard label="Starter" value="4,210" change={8.1} />
        <StatCard label="Pro" value="3,240" change={12.5} />
        <StatCard label="Max" value="980" change={18.3} />
      </div>

      <div style={{
        backgroundColor: '#0f1117',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '12px',
        overflow: 'hidden',
      }}>
        <div style={{
          padding: '14px 18px',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          fontSize: '13.5px',
          fontWeight: 'bold',
          color: '#fff',
        }}>
          Subscriptions
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Plan</th>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Count</th>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>MRR</th>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>% of Total</th>
            </tr>
          </thead>
          <tbody>
            {[
              { plan: 'Free', count: '41,817', mrr: '$0', pct: '72.3%' },
              { plan: 'Starter', count: '4,210', mrr: '$37,890', pct: '15.2%' },
              { plan: 'Pro', count: '3,240', mrr: '$38,280', pct: '9.5%' },
              { plan: 'Max', count: '980', mrr: '$18,650', pct: '3%' },
            ].map((row, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>
                  <Badge variant={row.plan === 'Max' ? 'danger' : row.plan === 'Pro' ? 'primary' : row.plan === 'Starter' ? 'secondary' : 'secondary'} text={row.plan} />
                </td>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>{row.count}</td>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>{row.mrr}</td>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>{row.pct}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderCreditsPanel = () => (
    <div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '12px',
        marginBottom: '20px',
      }}>
        <StatCard label="Total Distributed" value="124.5M" change={0} />
        <StatCard label="Used Today" value="1.2M" change={0} />
        <StatCard label="Available" value="50.3M" change={0} />
        <StatCard label="Pending Grants" value="2.1M" change={0} />
      </div>

      <div style={{
        backgroundColor: '#0f1117',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '12px',
        overflow: 'hidden',
        padding: '14px 18px',
      }}>
        <div style={{
          fontSize: '13.5px',
          fontWeight: 'bold',
          color: '#fff',
          marginBottom: '12px',
        }}>
          Grant Credits
        </div>
        <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
          <input
            type="email"
            placeholder="user@example.com"
            style={{
              backgroundColor: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '8px 12px',
              borderRadius: '6px',
              color: '#fff',
              fontSize: '12px',
            }}
          />
          <input
            type="number"
            placeholder="Credits to grant"
            style={{
              backgroundColor: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '8px 12px',
              borderRadius: '6px',
              color: '#fff',
              fontSize: '12px',
            }}
          />
          <select style={{
            backgroundColor: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '8px 12px',
            borderRadius: '6px',
            color: '#fff',
            fontSize: '12px',
          }}>
            <option>Manual Grant</option>
            <option>Promotion</option>
            <option>Refund</option>
            <option>Bonus</option>
          </select>
          <button
            onClick={handleGrantCredits}
            style={{
              backgroundColor: '#06b6d4',
              color: '#000',
              border: 'none',
              padding: '8px 12px',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            Grant Credits
          </button>
        </div>
      </div>
    </div>
  );

  const renderProjectsPanel = () => (
    <div>
      <div style={{
        display: 'flex',
        gap: '12px',
        marginBottom: '20px',
        padding: '12px',
        backgroundColor: '#0f1117',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '12px',
      }}>
        <input
          type="text"
          placeholder="Search projects..."
          style={{
            flex: 1,
            backgroundColor: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '8px 12px',
            borderRadius: '6px',
            color: '#fff',
            fontSize: '12px',
          }}
        />
        <select style={{
          backgroundColor: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.1)',
          padding: '8px 12px',
          borderRadius: '6px',
          color: '#fff',
          fontSize: '12px',
        }}>
          <option>All Status</option>
          <option>Active</option>
          <option>Archived</option>
        </select>
      </div>

      <div style={{
        backgroundColor: '#0f1117',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '12px',
        overflow: 'hidden',
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Project</th>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Owner</th>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Deployments</th>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Status</th>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Created</th>
            </tr>
          </thead>
          <tbody>
            {[
              { project: 'AI Chat App', owner: 'Alice Chen', deployments: '24', status: 'active', created: 'Feb 10' },
              { project: 'Blog Platform', owner: 'Bob Johnson', deployments: '8', status: 'active', created: 'Feb 25' },
              { project: 'Analytics Dashboard', owner: 'Carol Davis', deployments: '156', status: 'active', created: 'Jan 15' },
              { project: 'API Gateway', owner: 'David Kim', deployments: '42', status: 'active', created: 'Jan 30' },
              { project: 'Mobile App', owner: 'Eve Wilson', deployments: '18', status: 'archived', created: 'Dec 20' },
            ].map((row, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>{row.project}</td>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>{row.owner}</td>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>{row.deployments}</td>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>
                  <Badge variant={row.status === 'active' ? 'success' : 'secondary'} text={row.status.charAt(0).toUpperCase() + row.status.slice(1)} />
                </td>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>{row.created}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderDeploymentsPanel = () => (
    <div>
      <div style={{
        backgroundColor: '#0f1117',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '12px',
        overflow: 'hidden',
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Deployment</th>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Project</th>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Status</th>
              <th style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', letterSpacing: '0.5px', padding: '10px 14px', textAlign: 'left' }}>Deployed</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 'dep-001', project: 'AI Chat App', status: 'success', deployed: '2h ago' },
              { id: 'dep-002', project: 'Blog Platform', status: 'success', deployed: '5h ago' },
              { id: 'dep-003', project: 'Analytics Dashboard', status: 'success', deployed: '12h ago' },
              { id: 'dep-004', project: 'API Gateway', status: 'failed', deployed: '1d ago' },
              { id: 'dep-005', project: 'AI Chat App', status: 'building', deployed: 'now' },
            ].map((row, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>{row.id}</td>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>{row.project}</td>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>
                  <Badge variant={row.status === 'success' ? 'success' : row.status === 'failed' ? 'danger' : 'warning'} text={row.status.charAt(0).toUpperCase() + row.status.slice(1)} />
                </td>
                <td style={{ fontSize: '13px', color: '#9ca3af', padding: '11px 14px' }}>{row.deployed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderWebhooksPanel = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {[
        { id: 'wh-001', url: 'https://example.com/webhooks/builds', events: ['build.completed', 'build.failed'], status: 'active' },
        { id: 'wh-002', url: 'https://api.stripe.com/webhook', events: ['payment.succeeded'], status: 'active' },
        { id: 'wh-003', url: 'https://slack.com/webhook', events: ['deployment.completed', 'alert'], status: 'active' },
        { id: 'wh-004', url: 'https://example.com/webhooks/inactive', events: ['user.created'], status: 'inactive' },
      ].map((webhook) => (
        <div key={webhook.id} style={{
          backgroundColor: '#0f1117',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '12px',
          padding: '12px 18px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#fff', marginBottom: '6px' }}>{webhook.url}</div>
            <div style={{ display: 'flex', gap: '6px' }}>
              {webhook.events.map((event) => (
                <Badge key={event} variant="secondary" text={event} />
              ))}
            </div>
          </div>
          <Badge variant={webhook.status === 'active' ? 'success' : 'secondary'} text={webhook.status.charAt(0).toUpperCase() + webhook.status.slice(1)} />
          <button style={{
            backgroundColor: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#fff',
            padding: '6px 10px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '11px',
          }}>✎</button>
          <button style={{
            backgroundColor: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#fff',
            padding: '6px 10px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '11px',
          }}>⊘</button>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activePanel) {
      case 'overview':
        return renderOverviewPanel();
      case 'users':
        return renderUsersPanel();
      case 'api':
        return renderApiPanel();
      case 'logs':
        return renderLogsPanel();
      case 'settings':
        return renderSettingsPanel();
      case 'aimodels':
        return renderAiModelsPanel();
      case 'database':
        return renderDatabasePanel();
      case 'analytics':
        return renderAnalyticsPanel();
      case 'billing':
        return renderBillingPanel();
      case 'subscriptions':
        return renderSubscriptionsPanel();
      case 'credits':
        return renderCreditsPanel();
      case 'projects':
        return renderProjectsPanel();
      case 'deployments':
        return renderDeploymentsPanel();
      case 'webhooks':
        return renderWebhooksPanel();
      default:
        return <div style={{ color: '#888', padding: '20px' }}>Panel: {activePanel}</div>;
    }
  };

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: '#0a0b10',
      color: '#fff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    }}>
      <AdminSidebar activePanel={activePanel} onSelect={setActivePanel} />
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}>
        {renderTopBar()}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px',
          scrollbarWidth: 'thin',
        }}>
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Admin;
