import { ChapterHero, SectionHeading, Box, MathBox, FTable, Example, QuizCard, PageNav } from '../components/ui';

interface Props { onQuiz: (i: number) => void; onNav: (i: number) => void; total: number; }

export default function Ch3({ onQuiz, onNav, total }: Props) {
  return (
    <div className="animate-slide-in">
      <ChapterHero eyebrow="الباب الثالث · Chapter 3" title="" highlight="تكامل الدوال الزائدية" />

      <Box type="definition" label="تذكير بالتعريفات — Hyperbolic Functions">
        <MathBox tex="\\sinh x = \\frac{e^x-e^{-x}}{2} \\qquad \\cosh x = \\frac{e^x+e^{-x}}{2} \\qquad \\tanh x = \\frac{\\sinh x}{\\cosh x}" />
        <MathBox tex="\\cosh^2 x - \\sinh^2 x = 1 \\qquad 1-\\tanh^2 x = \\operatorname{sech}^2 x" />
      </Box>

      <SectionHeading>الجدول القياسي للتكاملات الزائدية</SectionHeading>
      <FTable
        headers={['التكامل', 'النتيجة']}
        rows={[
          { n: '١', cells: ['\\displaystyle\\int\\sinh x\\,dx', '\\cosh x+c'] },
          { n: '٢', cells: ['\\displaystyle\\int\\cosh x\\,dx', '\\sinh x+c'] },
          { n: '٣', cells: ['\\displaystyle\\int\\operatorname{sech}^2 x\\,dx', '\\tanh x+c'] },
          { n: '٤', cells: ['\\displaystyle\\int\\operatorname{csch}^2 x\\,dx', '-\\coth x+c'] },
          { n: '٥', cells: ['\\displaystyle\\int\\operatorname{sech} x\\tanh x\\,dx', '-\\operatorname{sech} x+c'] },
          { n: '٦', cells: ['\\displaystyle\\int\\frac{dx}{\\sqrt{1+x^2}}', '\\sinh^{-1}x+c'] },
          { n: '٧', cells: ['\\displaystyle\\int\\frac{dx}{\\sqrt{x^2-1}}', '\\cosh^{-1}x+c'] },
          { n: '٨', cells: ['\\displaystyle\\int\\frac{dx}{1-x^2}\\quad(|x|<1)', '\\tanh^{-1}x+c'] },
        ]}
      />

      <SectionHeading>مثال محلول</SectionHeading>
      <Example
        tag="مثال" title="تكامل زائدي مركب"
        questionHtml="احسب: \\(\\displaystyle\\int\\sinh^3 x\\cosh x\\,dx\\)"
        steps={[
          { n: 1, html: 'نلاحظ أن \\(d(\\sinh x) = \\cosh x\\,dx\\)', mathBlock: '\\int\\sinh^3 x\\,d(\\sinh x)' },
        ]}
        resultTex="\\frac{\\sinh^4 x}{4}+c"
      />

      <QuizCard chapterIdx={3} onOpen={onQuiz} />
      <PageNav current={3} total={total} onPrev={() => onNav(2)} onNext={() => onNav(4)} />
    </div>
  );
}
