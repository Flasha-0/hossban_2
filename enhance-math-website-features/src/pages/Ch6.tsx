import { ChapterHero, Box, MathBox, Example, QuizCard, PageNav } from '../components/ui';
import { AutoMath } from '../components/MathRenderer';

interface Props { onQuiz: (i: number) => void; onNav: (i: number) => void; total: number; }

export default function Ch6({ onQuiz, onNav, total }: Props) {
  return (
    <div className="animate-slide-in">
      <ChapterHero eyebrow="الباب السادس · Chapter 6" title="" highlight="الكسور الجزئية" />

      <Box type="note" label="شرط التطبيق">
        <AutoMath html="<p style='line-height:1.85;font-size:0.92rem;color:var(--text2)'>الكسر يجب أن يكون <strong style='color:var(--text)'>حقيقياً</strong> (درجة البسط &lt; درجة المقام). إن لم يكن، نقسم أولاً.</p>" />
      </Box>

      <Box type="theorem" label="الحالة الأولى — عوامل مختلفة من الدرجة الأولى">
        <MathBox tex="\\frac{P(x)}{(x-a_1)(x-a_2)\\cdots(x-a_n)} = \\frac{A_1}{x-a_1}+\\frac{A_2}{x-a_2}+\\cdots+\\frac{A_n}{x-a_n}" />
      </Box>

      <Box type="theorem" label="الحالة الثانية — عوامل مكررة">
        <MathBox tex="\\frac{P(x)}{(x-a)^r} = \\frac{A_1}{x-a}+\\frac{A_2}{(x-a)^2}+\\cdots+\\frac{A_r}{(x-a)^r}" />
      </Box>

      <Box type="theorem" label="الحالة الثالثة — عوامل تربيعية غير قابلة للتحليل">
        <AutoMath html="<p style='line-height:1.85;font-size:0.92rem;color:var(--text2)'>لكل عامل من الصورة \((ax^2+bx+c)\) نخصص كسراً من الصورة:</p>" />
        <MathBox tex="\\frac{Ax+B}{ax^2+bx+c}" />
      </Box>

      <Example
        tag="مثال" title="الحالة الأولى — عوامل مختلفة"
        questionHtml="احسب: \\(\\displaystyle\\int\\frac{3x+1}{(x-1)(x+2)}\\,dx\\)"
        steps={[
          { n: 1, html: 'نكتب: \\(\\dfrac{3x+1}{(x-1)(x+2)}=\\dfrac{A}{x-1}+\\dfrac{B}{x+2}\\)' },
          { n: 2, html: '\\(x=1 \\Rightarrow A=\\dfrac{4}{3}\\) &nbsp;،&nbsp; \\(x=-2 \\Rightarrow B=\\dfrac{5}{3}\\)' },
        ]}
        resultTex="\\frac{4}{3}\\ln|x-1|+\\frac{5}{3}\\ln|x+2|+c"
      />

      <QuizCard chapterIdx={6} onOpen={onQuiz} />
      <PageNav current={6} total={total} onPrev={() => onNav(5)} onNext={() => onNav(7)} />
    </div>
  );
}
