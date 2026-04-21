interface Props {
  url: string;
  onClose: () => void;
}

export default function BrowserPanel({ url, onClose }: Props) {
  const handleReload = () => {
    const frame = document.getElementById('quiz-iframe') as HTMLIFrameElement;
    if (frame) { frame.src = 'about:blank'; setTimeout(() => { frame.src = url; }, 80); }
  };

  const handleNewTab = () => {
    if (url && url !== 'about:blank') window.open(url, '_blank', 'noopener');
  };

  return (
    <div style={{
      position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
      background: 'var(--bg)', zIndex: 10,
    }}>
      {/* Chrome bar */}
      <div style={{
        background: '#1a1f2e', borderBottom: '1px solid #2a3148',
        padding: '0.5rem 0.75rem', display: 'flex', alignItems: 'center',
        gap: '0.6rem', flexShrink: 0,
      }}>
        {/* Traffic lights */}
        <div style={{ display: 'flex', gap: '0.28rem', flexShrink: 0 }}>
          <div onClick={onClose} title="إغلاق" style={{
            width: '11px', height: '11px', borderRadius: '50%', background: '#ef4444',
            cursor: 'pointer', transition: 'filter 0.15s',
          }}
            onMouseEnter={e => (e.currentTarget.style.filter = 'brightness(1.3)')}
            onMouseLeave={e => (e.currentTarget.style.filter = '')}
          />
          <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#f59e0b' }} />
          <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#22c55e' }} />
        </div>

        {/* Nav buttons */}
        <div style={{ display: 'flex', gap: '0.25rem', flexShrink: 0 }}>
          {/* Back */}
          <button onClick={onClose} title="رجوع" style={navBtnStyle}>
            <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
          </button>
          {/* Reload */}
          <button onClick={handleReload} title="تحديث" style={navBtnStyle}>
            <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
              <path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
            </svg>
          </button>
        </div>

        {/* URL bar */}
        <input readOnly value={url} style={{
          flex: 1, background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px',
          color: '#4ade80', fontFamily: "'Courier New', monospace", fontSize: '0.7rem',
          padding: '0.28rem 0.7rem', direction: 'ltr', textAlign: 'left',
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        }} onClick={e => (e.target as HTMLInputElement).select()} />

        {/* New tab */}
        <button onClick={handleNewTab} style={{
          background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.3)',
          color: 'var(--accent2)', padding: '0.28rem 0.65rem', borderRadius: '6px',
          cursor: 'pointer', fontFamily: "'Cairo', sans-serif", fontSize: '0.7rem',
          fontWeight: 700, whiteSpace: 'nowrap', transition: 'background 0.15s',
        }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(59,130,246,0.25)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'rgba(59,130,246,0.15)')}
        >↗ تبويب جديد</button>
      </div>

      {/* Iframe */}
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        <iframe
          id="quiz-iframe"
          src={url}
          style={{ width: '100%', height: '100%', border: 'none', display: 'block', background: '#fff' }}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          title="quiz"
        />
      </div>
    </div>
  );
}

const navBtnStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
  color: '#64748b', width: '26px', height: '26px', borderRadius: '6px',
  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
  transition: 'all 0.15s',
};
