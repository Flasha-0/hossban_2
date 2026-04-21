import { ChapterHero, SectionHeading, Box, MathBox, Example, QuizCard, PageNav } from '../components/ui';
import { AutoMath } from '../components/MathRenderer';

interface Props { onQuiz: (i: number) => void; onNav: (i: number) => void; total: number; }

export default function Ch4({ onQuiz, onNav, total }: Props) {
  return (
    <div className="animate-slide-in">
      <ChapterHero eyebrow="الباب الرابع · Chapter 4" title="" highlight="التكامل بالتجزيء" />

      <Box type="theorem" label="قانون التكامل بالتجزيء — Integration by Parts">
        <AutoMath html="<p style='line-height:1.85;font-size:0.92rem;color:var(--text2)'>من مقرر التفاضل: \(d(u\\cdot v) = u\\,dv + v\\,du\)، بتكامل الطرفين:</p>" />
        <MathBox tex="\\boxed{\\int u\\,dv = uv - \\int v\\,du}" />
      </Box>

      <Box type="note" label="قاعدة LIATE لاختيار u">
        <AutoMath html="<p style='line-height:1.85;font-size:0.92rem;color:var(--text2)'><strong style='color:var(--text)'>L</strong>ogarithmic &rarr; <strong style='color:var(--text)'>I</strong>nverse trig &rarr; <strong style='color:var(--text)'>A</strong>lgebraic &rarr; <strong style='color:var(--text)'>T</strong>rigonometric &rarr; <strong style='color:var(--text)'>E</strong>xponential — اختر \(u\) من الفئة الأعلى في القائمة.</p>" />
      </Box>

      <SectionHeading>أمثلة محلولة</SectionHeading>

      <Example
        tag="مثال ١" title="∫xe^x dx"
        questionHtml="احسب بالتجزيء: \\(\\displaystyle I = \\int xe^x\\,dx\\)"
        steps={[
          { n: 1, html: 'نختار: \\(u=x \\Rightarrow du=dx\\) &nbsp;،&nbsp; \\(dv=e^x dx \\Rightarrow v=e^x\\)', mathBlock: '\\int xe^x\\,dx = xe^x - \\int e^x\\,dx' },
        ]}
        resultTex="e^x(x-1)+c"
      />

      <Example
        tag="مثال ٢" title="∫e^x sin(x)dx — تجزيء مرتين"
        questionHtml="احسب: \\(\\displaystyle I = \\int e^x\\sin x\\,dx\\)"
        steps={[
          { n: 1, html: 'نختار \\(u=\\sin x,\\;dv=e^x dx\\) ونجزئ:', mathBlock: 'I = e^x\\sin x - \\int e^x\\cos x\\,dx' },
          { n: 2, html: 'نجزئ مرة أخرى \\(u=\\cos x\\):', mathBlock: 'I = e^x\\sin x - e^x\\cos x - I' },
          { n: 3, html: 'نجمع \\(I\\) ونقسم على ٢:' },
        ]}
        resultTex="I = \\frac{e^x(\\sin x - \\cos x)}{2}+c"
      />

      <Example
        tag="مثال ٣" title="∫ln(x)dx"
        questionHtml="احسب: \\(\\displaystyle\\int\\ln x\\,dx\\)"
        steps={[
          { n: 1, html: 'نختار \\(u=\\ln x \\Rightarrow du=\\tfrac{1}{x}dx\\) &nbsp;،&nbsp; \\(dv=dx \\Rightarrow v=x\\)', mathBlock: '\\int\\ln x\\,dx = x\\ln x - \\int dx' },
        ]}
        resultTex="x\\ln x - x + c"
      />

      <Example
        tag="مثال ٤" title="∫tan⁻¹(x)dx"
        questionHtml="احسب: \\(\\displaystyle\\int\\tan^{-1}x\\,dx\\)"
        steps={[
          { n: 1, html: 'نختار \\(u=\\tan^{-1}x,\\; dv=dx\\)', mathBlock: '\\int\\tan^{-1}x\\,dx = x\\tan^{-1}x - \\int\\frac{x}{1+x^2}\\,dx' },
        ]}
        resultTex="x\\tan^{-1}x - \\frac{1}{2}\\ln(1+x^2)+c"
      />

      <QuizCard chapterIdx={4} onOpen={onQuiz} />
      <PageNav current={4} total={total} onPrev={() => onNav(3)} onNext={() => onNav(5)} />
    </div>
  );
}
