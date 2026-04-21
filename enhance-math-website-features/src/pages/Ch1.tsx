import { ChapterHero, SectionHeading, Box, MathBox, FTable, Example, QuizCard, PageNav } from '../components/ui';
import { AutoMath } from '../components/MathRenderer';

interface Props { onQuiz: (i: number) => void; onNav: (i: number) => void; total: number; }

export default function Ch1({ onQuiz, onNav, total }: Props) {
  return (
    <div className="animate-slide-in">
      <ChapterHero eyebrow="الباب الأول · Chapter 1" title="" highlight="التكامل غير المحدود" />

      <Box type="definition" label="تعريف — Indefinite Integral">
        <AutoMath html="<p style='line-height:1.85;font-size:0.92rem;color:var(--text2)'>إذا كانت \(F'(x) = g(x)\)، فإن الدالة \(F\) تُسمى <strong style='color:var(--text)'>دالة مقابلة (تكامل غير محدود)</strong> للدالة \(g\):</p>" />
        <MathBox tex="\\int g(x)\\,dx = F(x) + c" />
        <AutoMath html="<p style='line-height:1.85;font-size:0.92rem;color:var(--text2)'>حيث \(c\) ثابت اختياري يُسمى <strong style='color:var(--text)'>ثابت التكامل</strong>.</p>" />
      </Box>

      <SectionHeading>الجدول القياسي للتكاملات</SectionHeading>
      <FTable
        headers={['القانون']}
        rows={[
          { n: '١', cells: ['\\displaystyle\\int 0\\,dx = c'] },
          { n: '٢', cells: ['\\displaystyle\\int k\\,f(x)\\,dx = k\\int f(x)\\,dx'] },
          { n: '٣', cells: ['\\displaystyle\\int \\bigl[f(x)\\pm g(x)\\bigr]\\,dx = \\int f(x)\\,dx \\pm \\int g(x)\\,dx'] },
          { n: '٤', cells: ['\\displaystyle\\int x^n\\,dx = \\frac{x^{n+1}}{n+1}+c \\quad (n\\neq -1)'] },
          { n: '٥', cells: ['\\displaystyle\\int \\frac{1}{x}\\,dx = \\ln|x|+c'] },
          { n: '٦', cells: ['\\displaystyle\\int e^x\\,dx = e^x+c'] },
          { n: '٧', cells: ['\\displaystyle\\int a^x\\,dx = \\frac{a^x}{\\ln a}+c'] },
          { n: '٨', cells: ['\\displaystyle\\int \\sin x\\,dx = -\\cos x+c'] },
          { n: '٩', cells: ['\\displaystyle\\int \\cos x\\,dx = \\sin x+c'] },
          { n: '١٠', cells: ['\\displaystyle\\int \\sec^2 x\\,dx = \\tan x+c'] },
          { n: '١١', cells: ['\\displaystyle\\int \\csc^2 x\\,dx = -\\cot x+c'] },
          { n: '١٢', cells: ['\\displaystyle\\int \\frac{dx}{\\sqrt{1-x^2}} = \\sin^{-1}x+c'] },
          { n: '١٣', cells: ['\\displaystyle\\int \\frac{dx}{1+x^2} = \\tan^{-1}x+c'] },
          { n: '١٤', cells: ['\\displaystyle\\int \\frac{f\'(x)}{f(x)}\\,dx = \\ln|f(x)|+c'] },
        ]}
      />

      <SectionHeading>المعادلة التفاضلية</SectionHeading>
      <Box type="note" label="Differential Equation">
        <AutoMath html="<p style='line-height:1.85;font-size:0.92rem;color:var(--text2)'>المعادلة التفاضلية من الدرجة الأولى تكون على الصورة:</p>" />
        <MathBox tex="f\\!\\left(x,\\,y,\\,\\frac{dy}{dx}\\right)=0" />
        <AutoMath html="<p style='line-height:1.85;font-size:0.92rem;color:var(--text2)'>لحل المعادلة: نضرب الطرفين في \(dx\) ثم نكامل كلا الطرفين.</p>" />
      </Box>

      <SectionHeading>أمثلة محلولة</SectionHeading>

      <Example
        tag="مثال ١" title="تكامل كثيرة الحدود"
        questionHtml="احسب: \\(\\displaystyle\\int (2x^3 - 4x^2 + x)\\,dx\\)"
        steps={[
          { n: 1, html: 'نوزع التكامل على كل حد بالخاصية الثالثة', mathBlock: '\\int 2x^3\\,dx - \\int 4x^2\\,dx + \\int x\\,dx' },
          { n: 2, html: 'نطبق قانون \\(\\int x^n dx = \\dfrac{x^{n+1}}{n+1}\\) على كل حد' },
        ]}
        resultTex="\\frac{x^4}{2} - \\frac{4x^3}{3} + \\frac{x^2}{2} + c"
      />

      <Example
        tag="مثال ٢" title="تكامل يحتوي جذوراً وكسوراً"
        questionHtml="احسب: \\(\\displaystyle\\int\\!\\left(8x^3 - 6\\sqrt{x} + \\frac{1}{x^2}\\right)dx\\)"
        steps={[
          { n: 1, html: 'نحوّل: \\(\\sqrt{x}=x^{1/2}\\) و \\(\\dfrac{1}{x^2}=x^{-2}\\) ثم نطبق القانون', mathBlock: '8\\cdot\\frac{x^4}{4} \\;-\\; 6\\cdot\\frac{x^{3/2}}{3/2} \\;+\\; \\frac{x^{-1}}{-1} + c' },
        ]}
        resultTex="2x^4 - 4x^{3/2} - \\frac{1}{x} + c"
      />

      <Example
        tag="مثال ٣" title="معادلة تفاضلية"
        questionHtml="أوجد الحل العام: \\(\\dfrac{dy}{dx} = x^2 + 1\\)"
        steps={[
          { n: 1, html: 'نضرب في \\(dx\\): \\(\\;dy = (x^2+1)\\,dx\\)' },
          { n: 2, html: 'نكامل الطرفين' },
        ]}
        resultTex="y = \\frac{x^3}{3} + x + c"
      />

      <QuizCard chapterIdx={1} onOpen={onQuiz} />
      <PageNav current={1} total={total} onPrev={() => onNav(0)} onNext={() => onNav(2)} />
    </div>
  );
}
