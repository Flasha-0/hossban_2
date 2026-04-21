import { CHAPTERS } from '../data/chapters';

interface Props {
  current: number;
  onNav: (idx: number) => void;
}

export default function Sidebar({ current, onNav }: Props) {
  return (
    <nav style={{
      width: '250px', flexShrink: 0,
      background: 'var(--bg2)',
      borderLeft: '1px solid var(--border)',
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden', position: 'relative',
    }}>
      {/* Gradient line on right */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '2px', height: '100%',
        background: 'linear-gradient(180deg, var(--accent) 0%, var(--teal) 50%, transparent 100%)',
        opacity: 0.5,
      }} />

      <div style={{
        padding: '0.9rem 1rem 0.7rem',
        borderBottom: '1px solid var(--border)',
        flexShrink: 0,
      }}>
        <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text3)', fontWeight: 700, marginBottom: '0.15rem' }}>
          المحاضرات
        </div>
        <div style={{ fontFamily: "'Amiri', serif", fontSize: '0.95rem', color: 'var(--text2)' }}>
          فهرس الأبواب
        </div>
      </div>

      <div style={{ overflowY: 'auto', flex: 1, padding: '0.4rem 0' }}>
        {CHAPTERS.map((ch, i) => {
          const isActive = i === current;
          return (
            <div
              key={ch.id}
              onClick={() => onNav(i)}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.65rem',
                padding: '0.55rem 1rem',
                cursor: 'pointer',
                borderRight: isActive ? '3px solid var(--accent)' : '3px solid transparent',
                background: isActive
                  ? 'linear-gradient(90deg, var(--surface2) 0%, rgba(59,130,246,0.08) 100%)'
                  : 'transparent',
                transition: 'all 0.18s',
                userSelect: 'none',
              }}
              onMouseEnter={e => {
                if (!isActive) (e.currentTarget as HTMLElement).style.background = 'var(--surface)';
              }}
              onMouseLeave={e => {
                if (!isActive) (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
            >
              <div style={{
                width: '26px', height: '26px', borderRadius: '7px',
                background: isActive ? 'var(--accent)' : 'var(--surface)',
                border: `1px solid ${isActive ? 'var(--accent)' : 'var(--border)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.68rem', fontWeight: 700,
                color: isActive ? 'white' : 'var(--text3)',
                flexShrink: 0,
                boxShadow: isActive ? '0 0 10px rgba(59,130,246,0.4)' : 'none',
                transition: 'all 0.18s',
              }}>
                {ch.navNum}
              </div>
              <span style={{
                fontSize: '0.8rem', fontWeight: 600,
                color: isActive ? 'var(--accent2)' : 'var(--text2)',
                lineHeight: 1.35, transition: 'color 0.18s',
              }}>
                {ch.navLabel}
              </span>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
