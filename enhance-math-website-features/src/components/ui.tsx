import { useState } from 'react';
import { AutoMath, LatexBlock, LatexInline } from './MathRenderer';

// ─── Color palette for equations ───
export const EQ_COLORS = {
  blue:   '#60a5fa',
  teal:   '#2dd4bf',
  gold:   '#fbbf24',
  purple: '#a78bfa',
  green:  '#4ade80',
  red:    '#f87171',
  orange: '#fb923c',
  pink:   '#f472b6',
};

// each math block gets a color from this rotating list
const BLOCK_COLORS = [
  EQ_COLORS.blue, EQ_COLORS.teal, EQ_COLORS.gold,
  EQ_COLORS.purple, EQ_COLORS.green, EQ_COLORS.orange,
  EQ_COLORS.red, EQ_COLORS.pink,
];

let colorIndex = 0;
export function nextColor() {
  const c = BLOCK_COLORS[colorIndex % BLOCK_COLORS.length];
  colorIndex++;
  return c;
}
export function resetColors() { colorIndex = 0; }

// ─── Section heading ───
export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontFamily: "'Amiri', serif", fontSize: '1.15rem', color: 'var(--text)',
      margin: '1.8rem 0 0.8rem', display: 'flex', alignItems: 'center', gap: '0.6rem',
    }}>
      <span style={{
        width: '4px', height: '20px', flexShrink: 0,
        background: 'linear-gradient(180deg, var(--accent), var(--teal))',
        borderRadius: '2px', display: 'inline-block',
      }} />
      {children}
    </div>
  );
}

// ─── Info box ───
type BoxType = 'definition' | 'theorem' | 'formula' | 'note';
const BOX_STYLES: Record<BoxType, { bg: string; border: string; labelColor: string; label: string }> = {
  definition: { bg: 'rgba(20,184,166,0.06)', border: '1px solid rgba(20,184,166,0.2)', labelColor: '#2dd4bf', label: 'تعريف' },
  theorem:    { bg: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.2)', labelColor: '#60a5fa', label: 'نظرية' },
  formula:    { bg: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)', labelColor: '#fbbf24', label: 'قانون' },
  note:       { bg: 'var(--surface)', border: '1px solid var(--border)', labelColor: 'var(--text2)', label: 'ملاحظة' },
};

export function Box({ type, label, children }: { type: BoxType; label?: string; children: React.ReactNode }) {
  const s = BOX_STYLES[type];
  const borderRight = type === 'definition' ? '3px solid #14b8a6'
    : type === 'theorem' ? '3px solid #3b82f6'
    : type === 'note' ? '3px solid var(--text3)'
    : undefined;
  return (
    <div style={{
      borderRadius: '10px', padding: '1.1rem 1.4rem', margin: '1rem 0',
      background: s.bg, border: s.border,
      borderRight: borderRight || s.border,
      position: 'relative', overflow: 'hidden',
    }}>
      {label && (
        <div style={{
          fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.12em',
          fontWeight: 700, marginBottom: '0.55rem', color: s.labelColor,
          display: 'flex', alignItems: 'center', gap: '0.4rem',
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: s.labelColor, display: 'inline-block' }} />
          {label}
        </div>
      )}
      {children}
    </div>
  );
}

// ─── Colored Math Block ───
let mathBlockCounter = 0;
export function MathBox({ tex, label }: { tex: string; label?: string }) {
  const color = BLOCK_COLORS[mathBlockCounter % BLOCK_COLORS.length];
  mathBlockCounter++;

  return (
    <div style={{
      direction: 'ltr', textAlign: 'center',
      background: 'var(--bg3)',
      border: `1px solid ${color}44`,
      borderTop: `2px solid ${color}`,
      borderRadius: '8px',
      padding: '0.9rem 1.2rem', margin: '0.8rem 0',
      overflow: 'auto',
      boxShadow: `0 0 12px ${color}18`,
    }}>
      {label && (
        <div style={{ fontSize: '0.6rem', color, letterSpacing: '0.1em', fontWeight: 700, marginBottom: '0.4rem', textAlign: 'right', direction: 'rtl' }}>
          {label}
        </div>
      )}
      <LatexBlock tex={tex} />
    </div>
  );
}

export function resetMathBlockCounter() { mathBlockCounter = 0; }

// ─── Inline math span ───
export function M({ tex }: { tex: string }) {
  return <LatexInline tex={tex} />;
}

// ─── Paragraph ───
export function P({ children, html }: { children?: React.ReactNode; html?: string }) {
  if (html) return (
    <AutoMath html={`<span style="line-height:1.85;font-size:0.92rem;color:var(--text2)">${html}</span>`}
      className="mb-2" />
  );
  return (
    <p style={{ lineHeight: 1.85, marginBottom: '0.6rem', fontSize: '0.92rem', color: 'var(--text2)' }}>
      {children}
    </p>
  );
}

// ─── Formula Table ───
interface FTableRow {
  n: string;
  cells: string[];   // each is a LaTeX string or plain text
  rtlCells?: boolean[];  // which cells are RTL
}

export function FTable({ headers, rows }: { headers: string[]; rows: FTableRow[] }) {
  return (
    <div style={{ overflowX: 'auto', margin: '0.8rem 0' }}>
      <table style={{
        width: '100%', borderCollapse: 'separate', borderSpacing: 0,
        fontSize: '0.85rem', borderRadius: '10px', overflow: 'hidden',
        border: '1px solid var(--border)',
      }}>
        <thead>
          <tr>
            <th style={thStyle}>م</th>
            {headers.map((h, i) => <th key={i} style={thStyle}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={{}}>
              <td style={{ ...numCellStyle }}>{row.n}</td>
              {row.cells.map((cell, ci) => {
                const isRtl = row.rtlCells?.[ci];
                return (
                  <td key={ci} style={isRtl ? descCellStyle : mathCellStyle}>
                    {isRtl ? cell : <LatexInline tex={cell} />}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle: React.CSSProperties = {
  background: 'var(--surface2)', color: 'var(--text2)',
  padding: '0.6rem 0.8rem', fontWeight: 700, fontSize: '0.72rem',
  textTransform: 'uppercase', letterSpacing: '0.08em',
  textAlign: 'center', borderBottom: '1px solid rgba(99,179,237,0.3)',
};
const numCellStyle: React.CSSProperties = {
  padding: '0.5rem 0.6rem', borderBottom: '1px solid var(--border)',
  color: 'var(--accent2)', fontWeight: 700, fontSize: '0.72rem',
  background: 'rgba(59,130,246,0.04)', textAlign: 'center',
  direction: 'rtl', width: '42px',
};
const mathCellStyle: React.CSSProperties = {
  padding: '0.5rem 0.8rem', borderBottom: '1px solid var(--border)',
  color: 'var(--text2)', textAlign: 'center', direction: 'ltr',
  verticalAlign: 'middle',
};
const descCellStyle: React.CSSProperties = {
  padding: '0.5rem 0.8rem', borderBottom: '1px solid var(--border)',
  color: 'var(--text)', textAlign: 'right', direction: 'rtl',
  verticalAlign: 'middle', fontSize: '0.85rem',
};

// ─── Example Card ───
interface Step {
  n: number;
  html: string;
  mathBlock?: string;
}

interface ExampleProps {
  tag: string;
  title: string;
  questionHtml: string;
  steps: Step[];
  resultTex: string;
}

export function Example({ tag, title, questionHtml, steps, resultTex }: ExampleProps) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      borderRadius: '10px', overflow: 'hidden', margin: '1.1rem 0',
      border: '1px solid var(--border)',
      transition: 'border-color 0.2s, box-shadow 0.2s',
      boxShadow: open ? '0 4px 24px rgba(0,0,0,0.2)' : 'none',
    }}>
      {/* Header */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          background: 'var(--surface2)', padding: '0.65rem 1rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          cursor: 'pointer', userSelect: 'none', gap: '0.7rem',
          transition: 'background 0.15s',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = 'var(--surface)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'var(--surface2)')}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
          <span style={{
            background: 'linear-gradient(135deg, #3b82f6, #14b8a6)',
            color: 'white', fontSize: '0.58rem', fontWeight: 700,
            padding: '0.12rem 0.45rem', borderRadius: '4px', letterSpacing: '0.06em',
          }}>{tag}</span>
          <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text)' }}>
            <AutoMath html={title} />
          </span>
        </div>
        <span style={{
          color: open ? 'var(--accent2)' : 'var(--text3)',
          transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1)',
          transform: open ? 'rotate(180deg)' : 'none',
          fontSize: '0.85rem', flexShrink: 0,
        }}>▾</span>
      </div>

      {/* Question */}
      <div style={{
        background: 'var(--bg3)', padding: '0.75rem 1rem',
        borderBottom: '1px solid var(--border)',
        fontSize: '0.88rem', fontWeight: 600, color: 'var(--text)',
        direction: 'rtl',
      }}>
        <AutoMath html={questionHtml} />
      </div>

      {/* Solution */}
      {open && (
        <div style={{ padding: '1rem', background: 'var(--bg2)', animation: 'slideIn 0.25s ease' }}>
          {steps.map((step, i) => (
            <div key={i}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', margin: '0.5rem 0', fontSize: '0.86rem', color: 'var(--text2)' }}>
                <div style={{
                  width: '22px', height: '22px', borderRadius: '6px', background: 'var(--accent)',
                  color: 'white', fontSize: '0.62rem', fontWeight: 700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  boxShadow: '0 0 8px rgba(59,130,246,0.4)',
                }}>{step.n}</div>
                <AutoMath html={step.html} className="flex-1" />
              </div>
              {step.mathBlock && (
                <div style={{
                  direction: 'ltr', textAlign: 'center',
                  background: 'rgba(20,26,48,0.8)',
                  border: '1px solid var(--border)', borderRadius: '8px',
                  padding: '0.8rem 1rem', margin: '0.5rem 0', overflowX: 'auto',
                }}>
                  <LatexBlock tex={step.mathBlock} />
                </div>
              )}
            </div>
          ))}

          {/* Result */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(245,158,11,0.08), rgba(251,191,36,0.05))',
            border: '1px solid rgba(245,158,11,0.3)', borderRadius: '8px',
            padding: '0.75rem 1rem', textAlign: 'center', marginTop: '0.7rem',
            direction: 'ltr', position: 'relative',
          }}>
            <div style={{
              position: 'absolute', top: '-0.5rem', right: '0.8rem',
              background: 'var(--bg2)', padding: '0 0.4rem',
              fontSize: '0.58rem', color: '#fbbf24', fontWeight: 700, letterSpacing: '0.06em',
              direction: 'rtl',
            }}>= النتيجة</div>
            <LatexBlock tex={resultTex} />
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Quiz Card ───
export function QuizCard({ chapterIdx, onOpen }: { chapterIdx: number; onOpen: (idx: number) => void }) {
  return (
    <div style={{
      marginTop: '2rem', borderRadius: '12px', overflow: 'hidden',
      border: '1px solid rgba(99,179,237,0.3)',
      boxShadow: '0 0 30px rgba(59,130,246,0.08)',
    }}>
      <div style={{
        background: 'linear-gradient(135deg, var(--surface2), var(--surface))',
        padding: '0.85rem 1.2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: '1px solid var(--border)', gap: '1rem',
      }}>
        <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          🧠 أسئلة هذا الباب
        </div>
        <button
          onClick={() => onOpen(chapterIdx)}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.4rem',
            background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
            color: 'white', border: 'none', padding: '0.4rem 0.9rem',
            borderRadius: '7px', cursor: 'pointer',
            fontFamily: "'Cairo', sans-serif", fontSize: '0.75rem', fontWeight: 700,
            boxShadow: '0 2px 12px rgba(59,130,246,0.4)', transition: 'all 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-1px)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'none')}
        >
          ↗ افتح صفحة الأسئلة
        </button>
      </div>
      <div style={{ padding: '0.8rem 1.2rem', background: 'var(--bg2)' }}>
        <div style={{ fontSize: '0.82rem', color: 'var(--text3)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{
            width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)',
            flexShrink: 0, animation: 'pulse 2s infinite',
            boxShadow: '0 0 6px rgba(59,130,246,0.4)',
          }} />
          اضغط الزر لعرض الأسئلة التفاعلية لهذا الباب مباشرةً داخل الموقع.
        </div>
      </div>
    </div>
  );
}

// ─── Page nav buttons ───
export function PageNav({ current, total, onPrev, onNext }: {
  current: number; total: number; onPrev: () => void; onNext: () => void;
}) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '1rem 0', marginTop: '1.5rem',
      borderTop: '1px solid var(--border)',
    }}>
      <button
        onClick={onNext}
        disabled={current >= total - 1}
        style={navBtnStyle(current >= total - 1)}
      >
        ← التالي
      </button>
      <span style={{ fontSize: '0.75rem', color: 'var(--text3)' }}>
        {current + 1} / {total}
      </span>
      <button
        onClick={onPrev}
        disabled={current <= 0}
        style={navBtnStyle(current <= 0)}
      >
        السابق →
      </button>
    </div>
  );
}

function navBtnStyle(disabled: boolean): React.CSSProperties {
  return {
    fontFamily: "'Cairo', sans-serif", fontSize: '0.8rem', fontWeight: 700,
    padding: '0.45rem 1rem', borderRadius: '8px',
    border: '1px solid var(--border)',
    background: disabled ? 'transparent' : 'var(--surface)',
    color: disabled ? 'var(--text3)' : 'var(--text)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1, transition: 'all 0.2s',
  };
}

// ─── Chapter Hero ───
export function ChapterHero({ eyebrow, title, highlight }: { eyebrow: string; title: string; highlight: string }) {
  return (
    <div style={{ marginBottom: '1.6rem', paddingBottom: '1.2rem', borderBottom: '1px solid var(--border)' }}>
      <div style={{
        fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em',
        color: 'var(--accent2)', fontWeight: 700, marginBottom: '0.35rem',
        display: 'flex', alignItems: 'center', gap: '0.5rem',
      }}>
        <span style={{ display: 'inline-block', width: '18px', height: '2px', background: 'var(--accent)', borderRadius: '1px' }} />
        {eyebrow}
      </div>
      <div style={{
        fontFamily: "'Amiri', serif",
        fontSize: 'clamp(1.4rem, 3vw, 2.1rem)',
        fontWeight: 700, lineHeight: 1.3, color: 'var(--text)',
      }}>
        {title}
        <span style={{
          background: 'linear-gradient(135deg, var(--accent2), var(--teal2))',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        }}>{highlight}</span>
      </div>
    </div>
  );
}
