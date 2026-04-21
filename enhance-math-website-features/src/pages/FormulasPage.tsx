import { ALL_FORMULAS } from '../data/chapters';
import { LatexBlock } from '../components/MathRenderer';

const COLOR_MAP: Record<string, { border: string; bg: string; badge: string; title: string }> = {
  teal:   { border: '#14b8a6', bg: 'rgba(20,184,166,0.06)', badge: 'rgba(20,184,166,0.15)', title: '#2dd4bf' },
  blue:   { border: '#3b82f6', bg: 'rgba(59,130,246,0.06)', badge: 'rgba(59,130,246,0.15)', title: '#60a5fa' },
  purple: { border: '#8b5cf6', bg: 'rgba(139,92,246,0.06)', badge: 'rgba(139,92,246,0.15)', title: '#a78bfa' },
  orange: { border: '#f97316', bg: 'rgba(249,115,22,0.06)', badge: 'rgba(249,115,22,0.15)', title: '#fb923c' },
  green:  { border: '#22c55e', bg: 'rgba(34,197,94,0.06)',  badge: 'rgba(34,197,94,0.15)',  title: '#4ade80' },
  red:    { border: '#ef4444', bg: 'rgba(239,68,68,0.06)',  badge: 'rgba(239,68,68,0.15)',  title: '#f87171' },
};

// Each chapter gets a different equation color
const EQ_COLORS = ['#60a5fa', '#2dd4bf', '#a78bfa', '#fb923c', '#4ade80', '#f87171', '#fbbf24', '#f472b6', '#34d399', '#60a5fa'];

export default function FormulasPage() {
  return (
    <div className="animate-slide-in" style={{ padding: '2rem 2.5rem', maxWidth: '960px' }}>
      {/* Page header */}
      <div style={{ marginBottom: '2rem', paddingBottom: '1.2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{
          fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em',
          color: 'var(--teal2)', fontWeight: 700, marginBottom: '0.4rem',
          display: 'flex', alignItems: 'center', gap: '0.5rem',
        }}>
          <span style={{ width: '18px', height: '2px', background: 'var(--teal)', borderRadius: '1px', display: 'inline-block' }} />
          Summary · ملخص
        </div>
        <div style={{
          fontFamily: "'Amiri', serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)',
          fontWeight: 700, lineHeight: 1.3,
        }}>
          <span style={{
            background: 'linear-gradient(135deg, #60a5fa, #2dd4bf)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>ملخص جميع القوانين والصيغ</span>
        </div>
        <p style={{ fontSize: '0.88rem', color: 'var(--text3)', marginTop: '0.4rem', lineHeight: 1.7 }}>
          جميع قوانين ومتطابقات مقرر حساب التكامل في مكان واحد — حساب التفاضل والتكامل (حسبان ٢)
        </p>
      </div>

      {ALL_FORMULAS.map((section, si) => {
        const c = COLOR_MAP[section.color] || COLOR_MAP.blue;
        const eqColor = EQ_COLORS[si % EQ_COLORS.length];
        return (
          <div key={si} style={{
            borderRadius: '12px', overflow: 'hidden',
            border: `1px solid ${c.border}44`,
            borderTop: `3px solid ${c.border}`,
            marginBottom: '1.5rem',
            boxShadow: `0 4px 24px ${c.border}10`,
          }}>
            {/* Section header */}
            <div style={{
              background: c.bg,
              padding: '0.8rem 1.2rem',
              borderBottom: `1px solid ${c.border}33`,
              display: 'flex', alignItems: 'center', gap: '0.7rem',
            }}>
              <span style={{
                background: c.badge, color: c.title,
                fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.1em',
                padding: '0.2rem 0.6rem', borderRadius: '20px', textTransform: 'uppercase',
              }}>
                {si + 1 < 10 ? `0${si + 1}` : si + 1}
              </span>
              <span style={{ fontFamily: "'Amiri', serif", fontSize: '1.05rem', color: c.title, fontWeight: 700 }}>
                {section.chapterTitle}
              </span>
            </div>

            {/* Formulas grid */}
            <div style={{ padding: '1rem', display: 'grid', gap: '0.7rem' }}>
              {section.items.map((item, ii) => (
                <div key={ii} style={{
                  background: 'var(--bg3)',
                  border: `1px solid ${eqColor}30`,
                  borderRight: `3px solid ${eqColor}`,
                  borderRadius: '8px',
                  padding: '0.65rem 1rem',
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  flexWrap: 'wrap',
                }}>
                  {/* Label */}
                  <div style={{
                    fontSize: '0.75rem', color: 'var(--text2)', fontWeight: 600,
                    minWidth: '160px', direction: 'rtl', flexShrink: 0,
                  }}>
                    <span style={{
                      width: '5px', height: '5px', borderRadius: '50%',
                      background: eqColor, display: 'inline-block', marginLeft: '0.4rem',
                    }} />
                    {item.label}
                  </div>

                  {/* Formula */}
                  {item.formula ? (
                    <div style={{
                      direction: 'ltr', flex: 1, textAlign: 'center',
                      color: eqColor,
                      filter: `drop-shadow(0 0 6px ${eqColor}50)`,
                    }}>
                      <LatexBlock tex={item.formula} />
                    </div>
                  ) : (
                    <div style={{ flex: 1, direction: 'rtl', fontSize: '0.78rem', color: 'var(--text3)', fontStyle: 'italic' }}>
                      — قاعدة عامة
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
