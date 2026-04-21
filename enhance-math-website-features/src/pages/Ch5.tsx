import { ChapterHero, SectionHeading, Box, FTable, Example, QuizCard, PageNav } from '../components/ui';
import { AutoMath } from '../components/MathRenderer';

interface Props { onQuiz: (i: number) => void; onNav: (i: number) => void; total: number; }

export default function Ch5({ onQuiz, onNav, total }: Props) {
  return (
    <div className="animate-slide-in">
      <ChapterHero eyebrow="الباب الخامس · Chapter 5" title="" highlight="التكامل بالتعويض" />

      <Box type="definition" label="الفكرة الأساسية — Substitution">
        <AutoMath html="<p style='line-height:1.85;font-size:0.92rem;color:var(--text2)'>نستبدل المتغير \(x\) بتعبير جديد \(y=g(x)\) لتحويل التكامل إلى صيغة قياسية أبسط. نوعان: <strong style='color:var(--text)'>جبري</strong> و<strong style='color:var(--text)'>مثلثي</strong>.</p>" />
      </Box>

      <SectionHeading>أولاً: التعويضات الجبرية</SectionHeading>

      <Example
        tag="مثال ١" title="إزالة الجذر التربيعي"
        questionHtml="احسب: \\(\\displaystyle\\int\\frac{dx}{(3-x)\\sqrt{x-2}}\\)"
        steps={[
          { n: 1, html: 'نعوِّض \\(y=\\sqrt{x-2}\\) أي \\(y^2=x-2\\)، ومنها \\(2y\\,dy=dx\\)', mathBlock: '\\int\\frac{2y\\,dy}{(1-y^2)\\cdot y} = 2\\int\\frac{dy}{1-y^2}' },
        ]}
        resultTex="2\\tan^{-1}\\!\\sqrt{x-2}+c"
      />

      <Example
        tag="مثال ٢" title="تعويض لتبسيط الأُس"
        questionHtml="احسب: \\(\\displaystyle\\int e^x\\sqrt{1+e^x}\\,dx\\)"
        steps={[
          { n: 1, html: 'نعوِّض \\(y=\\sqrt{1+e^x}\\) أي \\(y^2=1+e^x\\)، ومنها \\(2y\\,dy=e^x dx\\)', mathBlock: '\\int y\\cdot 2y\\,dy = 2\\int y^2\\,dy = \\frac{2y^3}{3}' },
        ]}
        resultTex="\\frac{2}{3}(1+e^x)^{3/2}+c"
      />

      <SectionHeading>ثانياً: التعويضات المثلثية</SectionHeading>
      <FTable
        headers={['الصورة', 'التعويض', 'تبسيط الجذر']}
        rows={[
          { n: '١', cells: ['\\sqrt{a^2-x^2}', 'x=a\\sin\\theta', 'a\\cos\\theta'] },
          { n: '٢', cells: ['\\sqrt{a^2+x^2}', 'x=a\\tan\\theta', 'a\\sec\\theta'] },
          { n: '٣', cells: ['\\sqrt{x^2-a^2}', 'x=a\\sec\\theta', 'a\\tan\\theta'] },
        ]}
      />

      <Example
        tag="مثال ٣" title="تعويض مثلثي √(a²-x²)"
        questionHtml="احسب: \\(\\displaystyle\\int\\frac{dx}{\\sqrt{a^2-x^2}}\\)"
        steps={[
          { n: 1, html: 'نعوِّض \\(x=a\\sin\\theta \\Rightarrow dx=a\\cos\\theta\\,d\\theta\\)', mathBlock: '\\int\\frac{a\\cos\\theta\\,d\\theta}{a\\cos\\theta} = \\int d\\theta = \\theta+c' },
          { n: 2, html: 'نرجع: \\(\\theta = \\sin^{-1}\\dfrac{x}{a}\\)' },
        ]}
        resultTex="\\sin^{-1}\\!\\frac{x}{a}+c"
      />

      <QuizCard chapterIdx={5} onOpen={onQuiz} />
      <PageNav current={5} total={total} onPrev={() => onNav(4)} onNext={() => onNav(6)} />
    </div>
  );
}
