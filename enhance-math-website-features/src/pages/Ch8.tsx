import { ChapterHero, Box, Example, QuizCard, PageNav } from '../components/ui';
import { AutoMath } from '../components/MathRenderer';

interface Props { onQuiz: (i: number) => void; onNav: (i: number) => void; total: number; }

export default function Ch8({ onQuiz, onNav, total }: Props) {
  return (
    <div className="animate-slide-in">
      <ChapterHero eyebrow="الباب الثامن · Chapter 8" title="" highlight="الاختزال المتتالي" />

      <Box type="definition" label="تعريف — Reduction Formula">
        <AutoMath html="<p style='line-height:1.85;font-size:0.92rem;color:var(--text2)'>قانون يُختزل فيه التكامل \(I_n\) إلى تكامل أبسط \(I_{n-2}\) من نفس الصورة لكن أقل درجة، يُنتج بتطبيق التجزيء مراراً.</p>" />
      </Box>

      <Example
        tag="مثال ١" title="اختزال ∫sinⁿ(x)dx"
        questionHtml="اشتق قانون الاختزال لـ \\(I_n = \\displaystyle\\int\\sin^n x\\,dx\\)"
        steps={[
          { n: 1, html: 'نكتب \\(\\sin^n x = \\sin^{n-1}x\\cdot\\sin x\\) ونجزئ: \\(u=\\sin^{n-1}x,\\; dv=\\sin x\\,dx\\)', mathBlock: 'I_n = -\\sin^{n-1}x\\cos x + (n-1)\\int\\sin^{n-2}x\\cos^2 x\\,dx' },
          { n: 2, html: 'نستبدل \\(\\cos^2 x = 1-\\sin^2 x\\) وننقل \\(I_n\\):' },
        ]}
        resultTex="I_n = -\\frac{\\sin^{n-1}x\\cos x}{n}+\\frac{n-1}{n}I_{n-2}"
      />

      <Example
        tag="مثال ٢" title="اختزال ∫secⁿ(x)dx"
        questionHtml="اشتق قانون الاختزال لـ \\(I_n = \\displaystyle\\int\\sec^n x\\,dx\\)"
        steps={[
          { n: 1, html: 'نكتب \\(\\sec^n x = \\sec^{n-2}x\\cdot\\sec^2 x\\) ونجزئ ونستخدم \\(\\tan^2 x=\\sec^2 x-1\\):' },
        ]}
        resultTex="I_n = \\frac{\\sec^{n-2}x\\tan x}{n-1}+\\frac{n-2}{n-1}I_{n-2}"
      />

      <QuizCard chapterIdx={8} onOpen={onQuiz} />
      <PageNav current={8} total={total} onPrev={() => onNav(7)} onNext={() => onNav(9)} />
    </div>
  );
}
