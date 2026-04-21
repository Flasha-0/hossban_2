import { ChapterHero, SectionHeading, Box, MathBox, FTable, Example, QuizCard, PageNav } from '../components/ui';


interface Props { onQuiz: (i: number) => void; onNav: (i: number) => void; total: number; }

export default function Ch7({ onQuiz, onNav, total }: Props) {
  return (
    <div className="animate-slide-in">
      <ChapterHero eyebrow="الباب السابع · Chapter 7" title="" highlight="إكمال المربع" />

      <Box type="definition" label="متى نستخدمه؟">
        <MathBox tex="\\int\\frac{dx}{ax^2+bx+c} \\qquad \\int\\frac{dx}{\\sqrt{ax^2+bx+c}} \\qquad \\int\\sqrt{ax^2+bx+c}\\,dx" />
      </Box>

      <Box type="formula" label="خطوات إكمال المربع">
        <MathBox tex="ax^2+bx+c = a\\!\\left[\\left(x+\\frac{b}{2a}\\right)^{\\!2} + \\frac{c}{a}-\\frac{b^2}{4a^2}\\right] = a\\bigl[(y)^2 \\pm A^2\\bigr]" />
      </Box>

      <SectionHeading>الصيغ القياسية الناتجة</SectionHeading>
      <FTable
        headers={['الصيغة', 'النتيجة']}
        rows={[
          { n: '١', cells: ['\\displaystyle\\int\\frac{dy}{\\sqrt{y^2+A^2}}', '\\sinh^{-1}\\dfrac{y}{A}+c'] },
          { n: '٢', cells: ['\\displaystyle\\int\\frac{dy}{\\sqrt{y^2-A^2}}', '\\cosh^{-1}\\dfrac{y}{A}+c'] },
          { n: '٣', cells: ['\\displaystyle\\int\\frac{dy}{\\sqrt{A^2-y^2}}', '\\sin^{-1}\\dfrac{y}{A}+c'] },
          { n: '٤', cells: ['\\displaystyle\\int\\frac{dy}{y^2+A^2}', '\\dfrac{1}{A}\\tan^{-1}\\dfrac{y}{A}+c'] },
        ]}
      />

      <Example
        tag="مثال" title="إكمال المربع ثم التكامل"
        questionHtml="احسب: \\(\\displaystyle\\int\\frac{dx}{x^2+4x+13}\\)"
        steps={[
          { n: 1, html: 'نكمل المربع: \\(x^2+4x+13 = (x+2)^2+9\\)' },
          { n: 2, html: 'نعوِّض \\(y=x+2\\):', mathBlock: '\\int\\frac{dy}{y^2+9} = \\frac{1}{3}\\tan^{-1}\\!\\frac{y}{3}+c' },
        ]}
        resultTex="\\frac{1}{3}\\tan^{-1}\\!\\frac{x+2}{3}+c"
      />

      <QuizCard chapterIdx={7} onOpen={onQuiz} />
      <PageNav current={7} total={total} onPrev={() => onNav(6)} onNext={() => onNav(8)} />
    </div>
  );
}
