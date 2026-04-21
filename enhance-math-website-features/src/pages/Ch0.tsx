import { ChapterHero, SectionHeading, Box, MathBox, FTable, QuizCard, PageNav } from '../components/ui';
import { AutoMath } from '../components/MathRenderer';

interface Props { onQuiz: (i: number) => void; onNav: (i: number) => void; total: number; }

export default function Ch0({ onQuiz, onNav, total }: Props) {
  return (
    <div className="animate-slide-in">
      <ChapterHero eyebrow="المقدمة · Introduction" title="الجداول القياسية و" highlight="المتطابقات الأساسية" />

      <div style={{
        fontFamily: "'Amiri', serif", fontSize: '1.25rem', textAlign: 'center',
        color: 'var(--teal2)', padding: '0.7rem', marginBottom: '1rem',
        border: '1px solid rgba(20,184,166,0.2)', borderRadius: '8px',
        background: 'rgba(20,184,166,0.04)', direction: 'rtl',
      }}>بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيمِ</div>

      <AutoMath html="<p style='line-height:1.85;font-size:0.92rem;color:var(--text2)'>هذه المحاضرات مُعدَّة لطلاب الفرقة الأولى بقسم الرياضيات، تغطي أساليب التكامل المختلفة ابتداءً من التكامل غير المحدود وحتى التكامل المحدود. اضغط على أي باب للانتقال إليه.</p>" />

      {/* Chapter Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: '0.7rem', margin: '1.2rem 0' }}>
        {[
          { n: '١', t: 'التكامل غير المحدود', i: 1 },
          { n: '٢', t: 'الدوال المثلثية', i: 2 },
          { n: '٣', t: 'الدوال الزائدية', i: 3 },
          { n: '٤', t: 'التجزيء', i: 4 },
          { n: '٥', t: 'التعويض', i: 5 },
          { n: '٦', t: 'الكسور الجزئية', i: 6 },
          { n: '٧', t: 'إكمال المربع', i: 7 },
          { n: '٨', t: 'الاختزال', i: 8 },
          { n: '٩', t: 'التكامل المحدود', i: 9 },
        ].map(c => (
          <div key={c.i} onClick={() => onNav(c.i)} style={{
            background: 'var(--surface)', border: '1px solid var(--border)',
            borderRadius: '10px', padding: '0.9rem 0.8rem', textAlign: 'center',
            cursor: 'pointer', transition: 'all 0.22s cubic-bezier(0.34,1.56,0.64,1)',
          }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'translateY(-4px)';
              el.style.borderColor = 'var(--accent)';
              el.style.boxShadow = '0 8px 28px rgba(59,130,246,0.2)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = ''; el.style.borderColor = ''; el.style.boxShadow = '';
            }}
          >
            <div style={{
              width: '34px', height: '34px', borderRadius: '9px', background: 'var(--surface2)',
              border: '1px solid var(--border)', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontWeight: 700, fontSize: '0.78rem',
              color: 'var(--text2)', margin: '0 auto 0.45rem',
            }}>{c.n}</div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text2)', lineHeight: 1.4 }}>{c.t}</div>
          </div>
        ))}
      </div>

      <SectionHeading>الجدول القياسي للتفاضلات</SectionHeading>
      <FTable
        headers={['الدالة', 'المشتقة dy/dx']}
        rows={[
          { n: '١', cells: ['y=x^n', 'nx^{n-1}'] },
          { n: '٢', cells: ['y=a^x', 'a^x \\ln a'] },
          { n: '٣', cells: ['y=e^x', 'e^x'] },
          { n: '٤', cells: ['y=\\ln x', '\\dfrac{1}{x}'] },
          { n: '٥', cells: ['y=\\log_a x', '\\dfrac{1}{x\\ln a}'] },
          { n: '٦', cells: ['y=\\sin x', '\\cos x'] },
          { n: '٧', cells: ['y=\\cos x', '-\\sin x'] },
          { n: '٨', cells: ['y=\\tan x', '\\sec^2 x'] },
          { n: '٩', cells: ['y=\\cot x', '-\\csc^2 x'] },
          { n: '١٠', cells: ['y=\\sec x', '\\sec x\\tan x'] },
          { n: '١١', cells: ['y=\\csc x', '-\\csc x\\cot x'] },
          { n: '١٢', cells: ['y=\\sin^{-1}x', '\\dfrac{1}{\\sqrt{1-x^2}}'] },
          { n: '١٣', cells: ['y=\\cos^{-1}x', '\\dfrac{-1}{\\sqrt{1-x^2}}'] },
          { n: '١٤', cells: ['y=\\tan^{-1}x', '\\dfrac{1}{1+x^2}'] },
          { n: '١٥', cells: ['y=\\sinh x', '\\cosh x'] },
          { n: '١٦', cells: ['y=\\cosh x', '\\sinh x'] },
          { n: '١٧', cells: ['y=\\tanh x', '\\operatorname{sech}^2 x'] },
          { n: '١٨', cells: ['y=\\sinh^{-1}x', '\\dfrac{1}{\\sqrt{1+x^2}}'] },
          { n: '١٩', cells: ['y=\\cosh^{-1}x', '\\dfrac{1}{\\sqrt{x^2-1}}'] },
          { n: '٢٠', cells: ['y=\\tanh^{-1}x', '\\dfrac{1}{1-x^2}'] },
        ]}
      />

      <SectionHeading>المتطابقات المثلثية الهامة</SectionHeading>
      <Box type="formula" label="Trigonometric Identities">
        <MathBox tex="\\sin^2 x + \\cos^2 x = 1 \\qquad 1+\\tan^2 x = \\sec^2 x \\qquad 1+\\cot^2 x = \\csc^2 x" />
        <MathBox tex="\\sin^2 x = \\frac{1-\\cos 2x}{2} \\qquad \\cos^2 x = \\frac{1+\\cos 2x}{2} \\qquad \\sin 2x = 2\\sin x\\cos x" />
      </Box>

      <SectionHeading>المتطابقات الزائدية الهامة</SectionHeading>
      <Box type="formula" label="Hyperbolic Identities">
        <MathBox tex="\\cosh^2 x - \\sinh^2 x = 1 \\qquad 1-\\tanh^2 x = \\operatorname{sech}^2 x" />
        <MathBox tex="\\sinh x = \\frac{e^x-e^{-x}}{2} \\qquad \\cosh x = \\frac{e^x+e^{-x}}{2}" />
      </Box>

      <QuizCard chapterIdx={0} onOpen={onQuiz} />
      <PageNav current={0} total={total} onPrev={() => onNav(total - 1)} onNext={() => onNav(1)} />
    </div>
  );
}
