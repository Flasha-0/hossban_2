

interface Props {
  currentPage: 'main' | 'formulas' | 'questions';
  onNav: (page: 'main' | 'formulas' | 'questions') => void;
}

export default function Header({ currentPage, onNav }: Props) {
  return (
    <header style={{
      background: 'linear-gradient(135deg, #0a0e1a 0%, #111827 50%, #0d1526 100%)',
      borderBottom: '1px solid rgba(99,179,237,0.3)',
      position: 'relative',
      overflow: 'hidden',
      flexShrink: 0,
      zIndex: 20,
    }}>
      {/* Big integral watermark */}
      <div style={{
        position: 'absolute', right: '-20px', top: '-40px',
        fontSize: '220px', color: 'rgba(59,130,246,0.04)',
        fontFamily: "'Amiri', serif", pointerEvents: 'none', lineHeight: 1,
        userSelect: 'none',
      }}>∫</div>

      <div style={{ padding: '1.2rem 2rem 0', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
          <span style={{
            background: 'linear-gradient(135deg, #3b82f6, #14b8a6)',
            color: 'white', fontSize: '0.62rem', fontWeight: 700,
            padding: '0.18rem 0.55rem', borderRadius: '20px', letterSpacing: '0.08em',
          }}>CALCULUS II</span>
          <span style={{ fontFamily: "'Tajawal', sans-serif", fontSize: '0.75rem', color: '#64748b' }}>
            جامعة سوهاج · كلية التربية · قسم الرياضيات
          </span>
        </div>

        <div style={{
          fontFamily: "'Amiri', serif",
          fontSize: 'clamp(1.3rem, 3vw, 2rem)',
          fontWeight: 700, lineHeight: 1.25,
          background: 'linear-gradient(135deg, #fff 0%, #60a5fa 50%, #2dd4bf 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          backgroundClip: 'text', marginBottom: '0.2rem',
        }}>محاضرات في حساب التكامل (حسبان ٢)</div>

        <div style={{
          fontFamily: "'Amiri', serif", fontSize: '0.95rem', color: '#fbbf24',
          display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.1rem',
        }}>
          <span style={{ display: 'inline-block', width: '24px', height: '2px', background: '#fbbf24', borderRadius: '1px' }} />
          د. صالح الدين عباس
        </div>

        <div style={{ fontSize: '0.72rem', color: '#64748b', marginBottom: '0.3rem' }}>
          مقرر الفرقة الأولى · كلية التربية
        </div>

        <div style={{ fontSize: '0.65rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.8rem' }}>
          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#3b82f6', display: 'inline-block' }} />
          Made by Flasha 🎴 and Leader
        </div>
      </div>

      {/* Navigation Bar */}
      <nav style={{
        display: 'flex', alignItems: 'center', gap: '0.4rem',
        padding: '0 1.5rem', borderTop: '1px solid rgba(99,179,237,0.12)',
        background: 'rgba(10,14,26,0.6)', backdropFilter: 'blur(10px)',
        overflowX: 'auto',
      }}>
        {([
          { key: 'main', label: '🏠 الرئيسية', icon: '' },
          { key: 'formulas', label: '📐 ملخص القوانين', icon: '' },
          { key: 'questions', label: '📝 ملخص الأسئلة', icon: '' },
        ] as const).map(tab => (
          <button
            key={tab.key}
            onClick={() => onNav(tab.key)}
            style={{
              fontFamily: "'Cairo', sans-serif",
              fontSize: '0.78rem', fontWeight: 700,
              padding: '0.55rem 1rem',
              border: 'none',
              borderBottom: currentPage === tab.key
                ? '2px solid #3b82f6'
                : '2px solid transparent',
              background: 'none',
              color: currentPage === tab.key ? '#60a5fa' : '#94a3b8',
              cursor: 'pointer',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
              borderRadius: '0',
            }}
            onMouseEnter={e => {
              if (currentPage !== tab.key) (e.target as HTMLElement).style.color = '#e2e8f0';
            }}
            onMouseLeave={e => {
              if (currentPage !== tab.key) (e.target as HTMLElement).style.color = '#94a3b8';
            }}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
