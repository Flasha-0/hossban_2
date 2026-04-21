import { useState } from 'react';
import { ALL_QUESTIONS } from '../data/chapters';
import { LatexBlock } from '../components/MathRenderer';
import { AutoMath } from '../components/MathRenderer';

const COLOR_MAP: Record<string, { border: string; bg: string; badge: string; title: string; answer: string }> = {
  teal:   { border: '#14b8a6', bg: 'rgba(20,184,166,0.06)', badge: 'rgba(20,184,166,0.15)', title: '#2dd4bf', answer: 'rgba(20,184,166,0.08)' },
  blue:   { border: '#3b82f6', bg: 'rgba(59,130,246,0.06)', badge: 'rgba(59,130,246,0.15)', title: '#60a5fa', answer: 'rgba(59,130,246,0.08)' },
  purple: { border: '#8b5cf6', bg: 'rgba(139,92,246,0.06)', badge: 'rgba(139,92,246,0.15)', title: '#a78bfa', answer: 'rgba(139,92,246,0.08)' },
  orange: { border: '#f97316', bg: 'rgba(249,115,22,0.06)', badge: 'rgba(249,115,22,0.15)', title: '#fb923c', answer: 'rgba(249,115,22,0.08)' },
  green:  { border: '#22c55e', bg: 'rgba(34,197,94,0.06)',  badge: 'rgba(34,197,94,0.15)',  title: '#4ade80', answer: 'rgba(34,197,94,0.08)' },
  red:    { border: '#ef4444', bg: 'rgba(239,68,68,0.06)',  badge: 'rgba(239,68,68,0.15)',  title: '#f87171', answer: 'rgba(239,68,68,0.08)' },
};

interface QuestionCardProps {
  q: string; a: string;
  idx: number; color: typeof COLOR_MAP[string];
  eqColor: string;
}

const EQ_COLORS = ['#60a5fa', '#2dd4bf', '#a78bfa', '#fb923c', '#4ade80', '#f87171', '#fbbf24', '#f472b6', '#34d399', '#60a5fa'];

function QuestionCard({ q, a, idx, color, eqColor }: QuestionCardProps) {
  const [shown, setShown] = useState(false);
  return (
    <div style={{
      borderRadius: '10px', overflow: 'hidden',
      border: `1px solid ${color.border}33`,
      marginBottom: '0.7rem',
      transition: 'box-shadow 0.2s',
      boxShadow: shown ? `0 4px 20px ${color.border}18` : 'none',
    }}>
      {/* Question header */}
      <div
        onClick={() => setShown(!shown)}
        style={{
          background: shown ? color.bg : 'var(--surface)',
          padding: '0.75rem 1rem',
          display: 'flex', alignItems: 'flex-start', gap: '0.8rem',
          cursor: 'pointer', transition: 'background 0.18s',
        }}
        onMouseEnter={e => { if (!shown) (e.currentTarget as HTMLElement).style.background = 'var(--surface2)'; }}
        onMouseLeave={e => { if (!shown) (e.currentTarget as HTMLElement).style.background = 'var(--surface)'; }}
      >
        <span style={{
          width: '24px', height: '24px', borderRadius: '7px', flexShrink: 0,
          background: shown ? color.badge : 'var(--surface2)',
          color: shown ? color.title : 'var(--text3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '0.68rem', fontWeight: 700,
          border: `1px solid ${shown ? color.border : 'var(--border)'}`,
          transition: 'all 0.18s',
        }}>
          {idx + 1}
        </span>
        <div style={{ flex: 1 }}>
          <AutoMath html={`<span style="font-size:0.88rem;color:var(--text);font-weight:600;line-height:1.6">${q}</span>`} />
        </div>
        <span style={{
          fontSize: '0.75rem', color: shown ? color.title : 'var(--text3)',
          transition: 'all 0.2s', flexShrink: 0, marginTop: '2px',
          transform: shown ? 'rotate(180deg)' : 'none',
        }}>▾</span>
      </div>

      {/* Answer */}
      {shown && (
        <div style={{
          background: color.answer,
          borderTop: `1px solid ${color.border}33`,
          padding: '0.75rem 1rem',
          animation: 'slideIn 0.22s ease',
        }}>
          <div style={{ fontSize: '0.6rem', color: color.title, fontWeight: 700, letterSpacing: '0.1em', marginBottom: '0.4rem', direction: 'rtl' }}>
            ✓ الإجابة
          </div>
          <div style={{ direction: 'ltr', textAlign: 'center', color: eqColor, filter: `drop-shadow(0 0 5px ${eqColor}40)` }}>
            <LatexBlock tex={a} />
          </div>
        </div>
      )}
    </div>
  );
}

export default function QuestionsPage() {
  return (
    <div className="animate-slide-in" style={{ padding: '2rem 2.5rem', maxWidth: '960px' }}>
      {/* Page header */}
      <div style={{ marginBottom: '2rem', paddingBottom: '1.2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{
          fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em',
          color: '#fbbf24', fontWeight: 700, marginBottom: '0.4rem',
          display: 'flex', alignItems: 'center', gap: '0.5rem',
        }}>
          <span style={{ width: '18px', height: '2px', background: '#f59e0b', borderRadius: '1px', display: 'inline-block' }} />
          Questions · أسئلة
        </div>
        <div style={{
          fontFamily: "'Amiri', serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)',
          fontWeight: 700, lineHeight: 1.3,
        }}>
          <span style={{
            background: 'linear-gradient(135deg, #fbbf24, #f97316)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>ملخص جميع الأسئلة والإجابات</span>
        </div>
        <p style={{ fontSize: '0.88rem', color: 'var(--text3)', marginTop: '0.4rem', lineHeight: 1.7 }}>
          اضغط على أي سؤال لإظهار إجابته — مرتبة حسب الأبواب
        </p>
      </div>

      {ALL_QUESTIONS.map((section, si) => {
        const c = COLOR_MAP[section.color] || COLOR_MAP.blue;
        const eqColor = EQ_COLORS[si % EQ_COLORS.length];
        return (
          <div key={si} style={{ marginBottom: '2rem' }}>
            {/* Section title */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.7rem',
              marginBottom: '0.8rem', padding: '0.6rem 1rem',
              background: c.bg, borderRadius: '8px',
              border: `1px solid ${c.border}33`,
            }}>
              <span style={{
                background: c.badge, color: c.title,
                fontWeight: 700, fontSize: '0.62rem', letterSpacing: '0.1em',
                padding: '0.18rem 0.5rem', borderRadius: '20px',
              }}>
                الباب {si + 1 < 10 ? `0${si + 1}` : si + 1}
              </span>
              <span style={{ fontFamily: "'Amiri', serif", fontSize: '1rem', color: c.title, fontWeight: 700 }}>
                {section.chapterTitle}
              </span>
              <span style={{ marginRight: 'auto', fontSize: '0.7rem', color: 'var(--text3)' }}>
                {section.questions.length} أسئلة
              </span>
            </div>

            {/* Questions */}
            {section.questions.map((item, qi) => (
              <QuestionCard
                key={qi} idx={qi}
                q={item.q} a={item.a}
                color={c} eqColor={eqColor}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}
