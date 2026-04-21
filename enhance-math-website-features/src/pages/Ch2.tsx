import { ChapterHero, SectionHeading, FTable, Example, QuizCard, PageNav } from '../components/ui';

interface Props { onQuiz: (i: number) => void; onNav: (i: number) => void; total: number; }

export default function Ch2({ onQuiz, onNav, total }: Props) {
  return (
    <div className="animate-slide-in">
      <ChapterHero eyebrow="الباب الثاني · Chapter 2" title="" highlight="تكامل الدوال المثلثية" />

      <SectionHeading>التكاملات المثلثية الأساسية</SectionHeading>
      <FTable
        headers={['التكامل', 'النتيجة']}
        rows={[
          { n: '١', cells: ['\\displaystyle\\int\\sin x\\,dx', '-\\cos x+c'] },
          { n: '٢', cells: ['\\displaystyle\\int\\cos x\\,dx', '\\sin x+c'] },
          { n: '٣', cells: ['\\displaystyle\\int\\sec^2 x\\,dx', '\\tan x+c'] },
          { n: '٤', cells: ['\\displaystyle\\int\\csc^2 x\\,dx', '-\\cot x+c'] },
          { n: '٥', cells: ['\\displaystyle\\int\\sec x\\tan x\\,dx', '\\sec x+c'] },
          { n: '٦', cells: ['\\displaystyle\\int\\csc x\\cot x\\,dx', '-\\csc x+c'] },
          { n: '٧', cells: ['\\displaystyle\\int\\tan x\\,dx', '\\ln|\\sec x|+c'] },
          { n: '٨', cells: ['\\displaystyle\\int\\cot x\\,dx', '\\ln|\\sin x|+c'] },
          { n: '٩', cells: ['\\displaystyle\\int\\sec x\\,dx', '\\ln|\\sec x+\\tan x|+c'] },
          { n: '١٠', cells: ['\\displaystyle\\int\\csc x\\,dx', '\\ln|\\csc x-\\cot x|+c'] },
          { n: '١١', cells: ['\\displaystyle\\int\\sin^2 x\\,dx', '\\dfrac{x}{2}-\\dfrac{\\sin 2x}{4}+c'] },
          { n: '١٢', cells: ['\\displaystyle\\int\\cos^2 x\\,dx', '\\dfrac{x}{2}+\\dfrac{\\sin 2x}{4}+c'] },
          { n: '١٣', cells: ['\\displaystyle\\int\\tan^2 x\\,dx', '\\tan x - x+c'] },
          { n: '١٤', cells: ['\\displaystyle\\int\\cot^2 x\\,dx', '-\\cot x - x+c'] },
        ]}
      />

      <SectionHeading>أمثلة محلولة</SectionHeading>

      <Example
        tag="مثال ١" title="استخدام القانون المباشر"
        questionHtml="احسب: \\(\\displaystyle\\int \\frac{\\sin x}{\\cos^2 x}\\,dx\\)"
        steps={[
          { n: 1, html: 'نكتب الكسر على شكل ضرب دالتين:', mathBlock: '\\int\\frac{\\sin x}{\\cos x}\\cdot\\frac{1}{\\cos x}\\,dx = \\int\\tan x\\cdot\\sec x\\,dx' },
        ]}
        resultTex="\\sec x + c"
      />

      <Example
        tag="مثال ٢" title="باستخدام قاعدة ∫uⁿdu"
        questionHtml="احسب: \\(\\displaystyle\\int\\sin^7(3x)\\cos(3x)\\,dx\\)"
        steps={[
          { n: 1, html: 'نلاحظ أن \\(d(\\sin 3x) = 3\\cos 3x\\,dx\\)، فنكتب:', mathBlock: '\\frac{1}{3}\\int\\sin^7(3x)\\,d(\\sin 3x)' },
        ]}
        resultTex="\\frac{\\sin^8(3x)}{24} + c"
      />

      <Example
        tag="مثال ٣" title="باستخدام متطابقة التضاعف"
        questionHtml="احسب: \\(\\displaystyle\\int\\sin^2 x\\,dx\\)"
        steps={[
          { n: 1, html: 'نستخدم المتطابقة: \\(\\sin^2 x = \\dfrac{1-\\cos 2x}{2}\\)', mathBlock: '\\frac{1}{2}\\int(1-\\cos 2x)\\,dx = \\frac{1}{2}\\left[x - \\frac{\\sin 2x}{2}\\right]' },
        ]}
        resultTex="\\frac{x}{2} - \\frac{\\sin 2x}{4} + c"
      />

      <Example
        tag="مثال ٤" title="إثبات ∫tan(x)dx"
        questionHtml="أثبت أن: \\(\\displaystyle\\int\\tan x\\,dx = \\ln|\\sec x|+c\\)"
        steps={[
          { n: 1, html: 'نكتب \\(\\tan x = \\dfrac{\\sin x}{\\cos x}\\)', mathBlock: '-\\int\\frac{-\\sin x}{\\cos x}\\,dx = -\\int\\frac{d(\\cos x)}{\\cos x} = -\\ln|\\cos x|+c' },
        ]}
        resultTex="\\ln|\\sec x| + c"
      />

      <QuizCard chapterIdx={2} onOpen={onQuiz} />
      <PageNav current={2} total={total} onPrev={() => onNav(1)} onNext={() => onNav(3)} />
    </div>
  );
}
