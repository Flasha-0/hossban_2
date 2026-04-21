import { ChapterHero, SectionHeading, Box, MathBox, Example, QuizCard, PageNav } from '../components/ui';
import { AutoMath } from '../components/MathRenderer';

interface Props { onQuiz: (i: number) => void; onNav: (i: number) => void; total: number; }

export default function Ch9({ onQuiz, onNav, total }: Props) {
  return (
    <div className="animate-slide-in">
      <ChapterHero eyebrow="الباب التاسع · Chapter 9" title="" highlight="التكامل المحدود (المُعيَّن)" />

      <Box type="theorem" label="قاعدة باروو — Barrow's Rule">
        <AutoMath html="<p style='line-height:1.85;font-size:0.92rem;color:var(--text2)'>إذا كان \(F'(x)=f(x)\) وكانت \(f\) متصلة على \([a,b]\):</p>" />
        <MathBox tex="\\int_a^b f(x)\\,dx = \\Bigl[F(x)\\Bigr]_a^b = F(b)-F(a)" />
      </Box>

      <SectionHeading>خواص التكامل المحدود</SectionHeading>
      <Box type="formula" label="النظريات الأساسية">
        <MathBox tex="\\text{(١)}\\;\\int_a^b c\\,dx = c(b-a) \\qquad \\text{(٢)}\\;\\int_a^b cf\\,dx = c\\int_a^b f\\,dx" />
        <MathBox tex="\\text{(٣)}\\;\\int_a^b [f\\pm g]\\,dx = \\int_a^b f\\,dx \\pm \\int_a^b g\\,dx" />
        <MathBox tex="\\text{(٤)}\\;f\\!\\geq\\!0 \\Rightarrow \\int_a^b f\\,dx\\geq 0 \\qquad \\text{(٥)}\\;\\int_a^b f\\,dx = \\int_a^c f\\,dx + \\int_c^b f\\,dx" />
      </Box>

      <SectionHeading>أمثلة محلولة</SectionHeading>

      <Example
        tag="مثال ١" title="تكامل مباشر"
        questionHtml="احسب: \\(\\displaystyle\\int_1^3 x^3\\,dx\\)"
        steps={[
          { n: 1, html: 'نطبق قاعدة باروو:', mathBlock: '\\left[\\frac{x^4}{4}\\right]_1^3 = \\frac{81}{4} - \\frac{1}{4} = \\frac{80}{4}' },
        ]}
        resultTex="20"
      />

      <Example
        tag="مثال ٢" title="تكامل مثلثي محدود"
        questionHtml="احسب: \\(\\displaystyle\\int_0^{\\pi/2}(3\\cos 4x + 7)\\,dx\\)"
        steps={[
          { n: 1, html: 'نطبق:', mathBlock: '\\left[\\frac{3}{4}\\sin 4x + 7x\\right]_0^{\\pi/2} = \\left(\\frac{3}{4}\\sin 2\\pi + \\frac{7\\pi}{2}\\right)-(0)' },
        ]}
        resultTex="\\frac{7\\pi}{2}"
      />

      <Example
        tag="مثال ٣" title="محدود بالتجزيء"
        questionHtml="احسب: \\(\\displaystyle\\int_0^1 xe^{2x}\\,dx\\)"
        steps={[
          { n: 1, html: 'التجزيء: \\(u=x,\\; dv=e^{2x}dx\\) يعطي \\(\\int xe^{2x}dx = \\dfrac{xe^{2x}}{2}-\\dfrac{e^{2x}}{4}\\)', mathBlock: '\\left[\\frac{xe^{2x}}{2}-\\frac{e^{2x}}{4}\\right]_0^1 = \\left(\\frac{e^2}{2}-\\frac{e^2}{4}\\right)-\\left(0-\\frac{1}{4}\\right)' },
        ]}
        resultTex="\\frac{e^2+1}{4}"
      />

      <QuizCard chapterIdx={9} onOpen={onQuiz} />
      <PageNav current={9} total={total} onPrev={() => onNav(8)} onNext={() => {}} />
    </div>
  );
}
