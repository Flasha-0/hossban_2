export interface Example {
  id: string;
  tag: string;
  title: string;
  question: string;
  steps: { n: number; text: string; math?: string }[];
  result: string;
}

export interface FormulaRow {
  n: string;
  formula?: string;
  description?: string;
  result?: string;
  col1?: string;
  col2?: string;
  col3?: string;
}

export interface Chapter {
  id: number;
  eyebrow: string;
  title: string;
  titleHighlight: string;
  quizUrl: string;
  navLabel: string;
  navNum: string;
}

export const QUIZ_URLS: Record<number, string> = {
  0: "https://notebooklm.google.com/notebook/4d18c0f9-1aaf-4c52-a731-3579701ac56a/artifact/1471926c-3c73-4cfa-a02d-d440f51d0bb6",
  1: "https://notebooklm.google.com/notebook/4d18c0f9-1aaf-4c52-a731-3579701ac56a/artifact/4559a66c-bc61-4aa1-884d-7a1d60298a69",
  2: "https://notebooklm.google.com/notebook/4d18c0f9-1aaf-4c52-a731-3579701ac56a/artifact/fef96b74-2586-46f3-8537-113642403d57",
  3: "https://notebooklm.google.com/notebook/4d18c0f9-1aaf-4c52-a731-3579701ac56a/artifact/71ab0b0f-779a-43e9-9803-7fe3589dbd74",
  4: "https://notebooklm.google.com/notebook/4d18c0f9-1aaf-4c52-a731-3579701ac56a/artifact/ecf64df8-5f0a-4b37-98c7-6c8ebce1e54f",
  5: "https://notebooklm.google.com/notebook/4d18c0f9-1aaf-4c52-a731-3579701ac56a/artifact/e9b24488-2274-44c6-ab90-352d5e6f86c3",
  6: "https://notebooklm.google.com/notebook/4d18c0f9-1aaf-4c52-a731-3579701ac56a/artifact/5d9dc46f-076f-4d16-8a7a-dbf49e2f133c",
  7: "https://notebooklm.google.com/notebook/4d18c0f9-1aaf-4c52-a731-3579701ac56a/artifact/86e681f0-ac66-47b0-915a-ec607d3b1f7e",
  8: "https://notebooklm.google.com/notebook/4d18c0f9-1aaf-4c52-a731-3579701ac56a/artifact/124b35ee-4089-4e34-ae40-9ced7c60a494",
  9: "https://notebooklm.google.com/notebook/4d18c0f9-1aaf-4c52-a731-3579701ac56a/artifact/f9faa0ce-dfea-41eb-9afa-8744701f240b"
};

export const CHAPTERS: Chapter[] = [
  { id: 0, eyebrow: "المقدمة · Introduction", title: "الجداول القياسية و", titleHighlight: "المتطابقات الأساسية", quizUrl: QUIZ_URLS[0], navLabel: "مقدمة وجداول قياسية", navNum: "م" },
  { id: 1, eyebrow: "الباب الأول · Chapter 1", title: "", titleHighlight: "التكامل غير المحدود", quizUrl: QUIZ_URLS[1], navLabel: "التكامل غير المحدود", navNum: "١" },
  { id: 2, eyebrow: "الباب الثاني · Chapter 2", title: "", titleHighlight: "تكامل الدوال المثلثية", quizUrl: QUIZ_URLS[2], navLabel: "تكامل الدوال المثلثية", navNum: "٢" },
  { id: 3, eyebrow: "الباب الثالث · Chapter 3", title: "", titleHighlight: "تكامل الدوال الزائدية", quizUrl: QUIZ_URLS[3], navLabel: "تكامل الدوال الزائدية", navNum: "٣" },
  { id: 4, eyebrow: "الباب الرابع · Chapter 4", title: "", titleHighlight: "التكامل بالتجزيء", quizUrl: QUIZ_URLS[4], navLabel: "التكامل بالتجزيء", navNum: "٤" },
  { id: 5, eyebrow: "الباب الخامس · Chapter 5", title: "", titleHighlight: "التكامل بالتعويض", quizUrl: QUIZ_URLS[5], navLabel: "التكامل بالتعويض", navNum: "٥" },
  { id: 6, eyebrow: "الباب السادس · Chapter 6", title: "", titleHighlight: "الكسور الجزئية", quizUrl: QUIZ_URLS[6], navLabel: "الكسور الجزئية", navNum: "٦" },
  { id: 7, eyebrow: "الباب السابع · Chapter 7", title: "", titleHighlight: "إكمال المربع", quizUrl: QUIZ_URLS[7], navLabel: "إكمال المربع", navNum: "٧" },
  { id: 8, eyebrow: "الباب الثامن · Chapter 8", title: "", titleHighlight: "الاختزال المتتالي", quizUrl: QUIZ_URLS[8], navLabel: "الاختزال المتتالي", navNum: "٨" },
  { id: 9, eyebrow: "الباب التاسع · Chapter 9", title: "", titleHighlight: "التكامل المحدود", quizUrl: QUIZ_URLS[9], navLabel: "التكامل المحدود", navNum: "٩" },
];

// ملخص القوانين لكل باب
export const ALL_FORMULAS = [
  {
    chapterTitle: "الجداول القياسية",
    color: "teal" as const,
    items: [
      { label: "التفاضل الأساسي", formula: "\\frac{d}{dx}(x^n) = nx^{n-1}" },
      { label: "تفاضل الأسي", formula: "\\frac{d}{dx}(e^x) = e^x" },
      { label: "تفاضل اللوغاريتم", formula: "\\frac{d}{dx}(\\ln x) = \\frac{1}{x}" },
      { label: "تفاضل الجيب", formula: "\\frac{d}{dx}(\\sin x) = \\cos x" },
      { label: "تفاضل التمام", formula: "\\frac{d}{dx}(\\cos x) = -\\sin x" },
      { label: "تفاضل الظل", formula: "\\frac{d}{dx}(\\tan x) = \\sec^2 x" },
      { label: "تفاضل قاطع التمام", formula: "\\frac{d}{dx}(\\sec x) = \\sec x\\tan x" },
      { label: "متطابقة مثلثية ١", formula: "\\sin^2 x + \\cos^2 x = 1" },
      { label: "متطابقة مثلثية ٢", formula: "1 + \\tan^2 x = \\sec^2 x" },
      { label: "التضعيف ١", formula: "\\sin^2 x = \\frac{1-\\cos 2x}{2}" },
      { label: "التضعيف ٢", formula: "\\cos^2 x = \\frac{1+\\cos 2x}{2}" },
      { label: "زائدية أساسية", formula: "\\cosh^2 x - \\sinh^2 x = 1" },
    ]
  },
  {
    chapterTitle: "التكامل غير المحدود",
    color: "blue" as const,
    items: [
      { label: "قاعدة الأس", formula: "\\int x^n\\,dx = \\frac{x^{n+1}}{n+1}+c \\quad (n\\neq -1)" },
      { label: "تكامل ١/x", formula: "\\int \\frac{1}{x}\\,dx = \\ln|x|+c" },
      { label: "تكامل الأسي", formula: "\\int e^x\\,dx = e^x+c" },
      { label: "تكامل أسي عام", formula: "\\int a^x\\,dx = \\frac{a^x}{\\ln a}+c" },
      { label: "تكامل الجيب", formula: "\\int \\sin x\\,dx = -\\cos x+c" },
      { label: "تكامل التمام", formula: "\\int \\cos x\\,dx = \\sin x+c" },
      { label: "قاعدة f'/f", formula: "\\int \\frac{f'(x)}{f(x)}\\,dx = \\ln|f(x)|+c" },
      { label: "تكامل ١/√(1-x²)", formula: "\\int \\frac{dx}{\\sqrt{1-x^2}} = \\sin^{-1}x+c" },
      { label: "تكامل ١/(1+x²)", formula: "\\int \\frac{dx}{1+x^2} = \\tan^{-1}x+c" },
    ]
  },
  {
    chapterTitle: "الدوال المثلثية",
    color: "purple" as const,
    items: [
      { label: "تكامل الظل", formula: "\\int \\tan x\\,dx = \\ln|\\sec x|+c" },
      { label: "تكامل الظل التمام", formula: "\\int \\cot x\\,dx = \\ln|\\sin x|+c" },
      { label: "تكامل قاطع التمام", formula: "\\int \\sec x\\,dx = \\ln|\\sec x+\\tan x|+c" },
      { label: "تكامل sin²x", formula: "\\int \\sin^2 x\\,dx = \\frac{x}{2}-\\frac{\\sin 2x}{4}+c" },
      { label: "تكامل cos²x", formula: "\\int \\cos^2 x\\,dx = \\frac{x}{2}+\\frac{\\sin 2x}{4}+c" },
      { label: "تكامل tan²x", formula: "\\int \\tan^2 x\\,dx = \\tan x - x+c" },
    ]
  },
  {
    chapterTitle: "الدوال الزائدية",
    color: "orange" as const,
    items: [
      { label: "تعريف sinh", formula: "\\sinh x = \\frac{e^x-e^{-x}}{2}" },
      { label: "تعريف cosh", formula: "\\cosh x = \\frac{e^x+e^{-x}}{2}" },
      { label: "تكامل sinh", formula: "\\int \\sinh x\\,dx = \\cosh x+c" },
      { label: "تكامل cosh", formula: "\\int \\cosh x\\,dx = \\sinh x+c" },
      { label: "تكامل sech²", formula: "\\int \\operatorname{sech}^2 x\\,dx = \\tanh x+c" },
      { label: "تكامل ١/√(1+x²)", formula: "\\int \\frac{dx}{\\sqrt{1+x^2}} = \\sinh^{-1}x+c" },
    ]
  },
  {
    chapterTitle: "التكامل بالتجزيء",
    color: "green" as const,
    items: [
      { label: "القانون الأساسي", formula: "\\int u\\,dv = uv - \\int v\\,du" },
      { label: "LIATE: u = لوغاريتم → عكسي → جبري → مثلثي → أسي", formula: "" },
      { label: "مثال: تجزيء الأسي", formula: "\\int xe^x\\,dx = e^x(x-1)+c" },
      { label: "مثال: تجزيء اللوغاريتم", formula: "\\int \\ln x\\,dx = x\\ln x - x + c" },
      { label: "مثال: تجزيء مرتين", formula: "\\int e^x\\sin x\\,dx = \\frac{e^x(\\sin x-\\cos x)}{2}+c" },
    ]
  },
  {
    chapterTitle: "التكامل بالتعويض",
    color: "red" as const,
    items: [
      { label: "تعويض √(a²-x²)", formula: "x = a\\sin\\theta \\Rightarrow \\sqrt{a^2-x^2}=a\\cos\\theta" },
      { label: "تعويض √(a²+x²)", formula: "x = a\\tan\\theta \\Rightarrow \\sqrt{a^2+x^2}=a\\sec\\theta" },
      { label: "تعويض √(x²-a²)", formula: "x = a\\sec\\theta \\Rightarrow \\sqrt{x^2-a^2}=a\\tan\\theta" },
      { label: "نتيجة", formula: "\\int \\frac{dx}{\\sqrt{a^2-x^2}} = \\sin^{-1}\\frac{x}{a}+c" },
    ]
  },
  {
    chapterTitle: "الكسور الجزئية",
    color: "teal" as const,
    items: [
      { label: "عوامل مختلفة", formula: "\\frac{P(x)}{(x-a)(x-b)} = \\frac{A}{x-a}+\\frac{B}{x-b}" },
      { label: "عوامل مكررة", formula: "\\frac{P(x)}{(x-a)^2} = \\frac{A}{x-a}+\\frac{B}{(x-a)^2}" },
      { label: "عامل تربيعي", formula: "\\frac{P(x)}{ax^2+bx+c} \\Rightarrow \\frac{Ax+B}{ax^2+bx+c}" },
    ]
  },
  {
    chapterTitle: "إكمال المربع",
    color: "blue" as const,
    items: [
      { label: "الصيغة", formula: "ax^2+bx+c = a\\left[\\left(x+\\frac{b}{2a}\\right)^2 + \\frac{c}{a}-\\frac{b^2}{4a^2}\\right]" },
      { label: "∫dy/(y²+A²)", formula: "\\int \\frac{dy}{y^2+A^2} = \\frac{1}{A}\\tan^{-1}\\frac{y}{A}+c" },
      { label: "∫dy/√(y²+A²)", formula: "\\int \\frac{dy}{\\sqrt{y^2+A^2}} = \\sinh^{-1}\\frac{y}{A}+c" },
      { label: "∫dy/√(A²-y²)", formula: "\\int \\frac{dy}{\\sqrt{A^2-y^2}} = \\sin^{-1}\\frac{y}{A}+c" },
    ]
  },
  {
    chapterTitle: "الاختزال المتتالي",
    color: "purple" as const,
    items: [
      { label: "اختزال sinⁿ", formula: "\\int \\sin^n x\\,dx = -\\frac{\\sin^{n-1}x\\cos x}{n}+\\frac{n-1}{n}\\int \\sin^{n-2}x\\,dx" },
      { label: "اختزال cosⁿ", formula: "\\int \\cos^n x\\,dx = \\frac{\\cos^{n-1}x\\sin x}{n}+\\frac{n-1}{n}\\int \\cos^{n-2}x\\,dx" },
      { label: "اختزال secⁿ", formula: "\\int \\sec^n x\\,dx = \\frac{\\sec^{n-2}x\\tan x}{n-1}+\\frac{n-2}{n-1}\\int \\sec^{n-2}x\\,dx" },
    ]
  },
  {
    chapterTitle: "التكامل المحدود",
    color: "green" as const,
    items: [
      { label: "قاعدة باروو", formula: "\\int_a^b f(x)\\,dx = F(b)-F(a)" },
      { label: "الخاصية الأولى", formula: "\\int_a^b c\\,dx = c(b-a)" },
      { label: "الخاصية الثانية", formula: "\\int_a^b cf\\,dx = c\\int_a^b f\\,dx" },
      { label: "الخاصية الثالثة", formula: "\\int_a^b [f\\pm g]\\,dx = \\int_a^b f\\,dx \\pm \\int_a^b g\\,dx" },
      { label: "الخاصية الخامسة", formula: "\\int_a^b f\\,dx = \\int_a^c f\\,dx + \\int_c^b f\\,dx" },
    ]
  },
];

// ملخص الأسئلة لكل باب
export const ALL_QUESTIONS = [
  {
    chapterTitle: "المقدمة والجداول القياسية",
    color: "teal" as const,
    questions: [
      { q: "ما هو مشتق \\(\\sin^{-1}x\\)؟", a: "\\dfrac{1}{\\sqrt{1-x^2}}" },
      { q: "ما هو مشتق \\(\\tanh x\\)؟", a: "\\operatorname{sech}^2 x" },
      { q: "ما قيمة \\(\\sin^2 x + \\cos^2 x\\)؟", a: "1" },
      { q: "ما هو مشتق \\(\\cosh^{-1}x\\)؟", a: "\\dfrac{1}{\\sqrt{x^2-1}}" },
    ]
  },
  {
    chapterTitle: "التكامل غير المحدود",
    color: "blue" as const,
    questions: [
      { q: "احسب \\(\\displaystyle\\int (2x^3 - 4x^2 + x)\\,dx\\)", a: "\\dfrac{x^4}{2} - \\dfrac{4x^3}{3} + \\dfrac{x^2}{2} + c" },
      { q: "احسب \\(\\displaystyle\\int\\!\\left(8x^3 - 6\\sqrt{x} + \\frac{1}{x^2}\\right)dx\\)", a: "2x^4 - 4x^{3/2} - \\dfrac{1}{x} + c" },
      { q: "احسب \\(\\displaystyle\\int e^{3x}\\,dx\\)", a: "\\dfrac{e^{3x}}{3}+c" },
      { q: "أوجد الحل العام لـ \\(\\dfrac{dy}{dx} = x^2 + 1\\)", a: "y = \\dfrac{x^3}{3} + x + c" },
    ]
  },
  {
    chapterTitle: "الدوال المثلثية",
    color: "purple" as const,
    questions: [
      { q: "احسب \\(\\displaystyle\\int \\frac{\\sin x}{\\cos^2 x}\\,dx\\)", a: "\\sec x + c" },
      { q: "احسب \\(\\displaystyle\\int\\sin^7(3x)\\cos(3x)\\,dx\\)", a: "\\dfrac{\\sin^8(3x)}{24} + c" },
      { q: "احسب \\(\\displaystyle\\int\\sin^2 x\\,dx\\)", a: "\\dfrac{x}{2} - \\dfrac{\\sin 2x}{4} + c" },
      { q: "أثبت أن \\(\\displaystyle\\int\\tan x\\,dx = \\ln|\\sec x|+c\\)", a: "-\\int\\frac{d(\\cos x)}{\\cos x} = -\\ln|\\cos x| = \\ln|\\sec x|+c" },
    ]
  },
  {
    chapterTitle: "الدوال الزائدية",
    color: "orange" as const,
    questions: [
      { q: "احسب \\(\\displaystyle\\int\\sinh^3 x\\cosh x\\,dx\\)", a: "\\dfrac{\\sinh^4 x}{4}+c" },
      { q: "احسب \\(\\displaystyle\\int\\operatorname{sech}^2(2x)\\,dx\\)", a: "\\dfrac{\\tanh(2x)}{2}+c" },
      { q: "ما قيمة \\(\\cosh^2 x - \\sinh^2 x\\)؟", a: "1" },
      { q: "احسب \\(\\displaystyle\\int\\frac{dx}{\\sqrt{1+x^2}}\\)", a: "\\sinh^{-1}x+c" },
    ]
  },
  {
    chapterTitle: "التكامل بالتجزيء",
    color: "green" as const,
    questions: [
      { q: "احسب \\(\\displaystyle\\int xe^x\\,dx\\)", a: "e^x(x-1)+c" },
      { q: "احسب \\(\\displaystyle\\int\\ln x\\,dx\\)", a: "x\\ln x - x + c" },
      { q: "احسب \\(\\displaystyle\\int\\tan^{-1}x\\,dx\\)", a: "x\\tan^{-1}x - \\dfrac{1}{2}\\ln(1+x^2)+c" },
      { q: "احسب \\(\\displaystyle\\int e^x\\sin x\\,dx\\)", a: "\\dfrac{e^x(\\sin x - \\cos x)}{2}+c" },
    ]
  },
  {
    chapterTitle: "التكامل بالتعويض",
    color: "red" as const,
    questions: [
      { q: "احسب \\(\\displaystyle\\int\\frac{dx}{(3-x)\\sqrt{x-2}}\\)", a: "2\\tan^{-1}\\!\\sqrt{x-2}+c" },
      { q: "احسب \\(\\displaystyle\\int e^x\\sqrt{1+e^x}\\,dx\\)", a: "\\dfrac{2}{3}(1+e^x)^{3/2}+c" },
      { q: "احسب \\(\\displaystyle\\int\\frac{dx}{\\sqrt{a^2-x^2}}\\)", a: "\\sin^{-1}\\!\\dfrac{x}{a}+c" },
    ]
  },
  {
    chapterTitle: "الكسور الجزئية",
    color: "teal" as const,
    questions: [
      { q: "احسب \\(\\displaystyle\\int\\frac{3x+1}{(x-1)(x+2)}\\,dx\\)", a: "\\dfrac{4}{3}\\ln|x-1|+\\dfrac{5}{3}\\ln|x+2|+c" },
      { q: "احسب \\(\\displaystyle\\int\\frac{dx}{x^2-1}\\)", a: "\\dfrac{1}{2}\\ln\\left|\\dfrac{x-1}{x+1}\\right|+c" },
    ]
  },
  {
    chapterTitle: "إكمال المربع",
    color: "blue" as const,
    questions: [
      { q: "احسب \\(\\displaystyle\\int\\frac{dx}{x^2+4x+13}\\)", a: "\\dfrac{1}{3}\\tan^{-1}\\!\\dfrac{x+2}{3}+c" },
      { q: "احسب \\(\\displaystyle\\int\\frac{dx}{\\sqrt{x^2+6x+10}}\\)", a: "\\sinh^{-1}(x+3)+c" },
    ]
  },
  {
    chapterTitle: "الاختزال المتتالي",
    color: "purple" as const,
    questions: [
      { q: "اشتق قانون اختزال \\(I_n = \\displaystyle\\int\\sin^n x\\,dx\\)", a: "I_n = -\\dfrac{\\sin^{n-1}x\\cos x}{n}+\\dfrac{n-1}{n}I_{n-2}" },
      { q: "اشتق قانون اختزال \\(I_n = \\displaystyle\\int\\sec^n x\\,dx\\)", a: "I_n = \\dfrac{\\sec^{n-2}x\\tan x}{n-1}+\\dfrac{n-2}{n-1}I_{n-2}" },
    ]
  },
  {
    chapterTitle: "التكامل المحدود",
    color: "green" as const,
    questions: [
      { q: "احسب \\(\\displaystyle\\int_1^3 x^3\\,dx\\)", a: "20" },
      { q: "احسب \\(\\displaystyle\\int_0^{\\pi/2}(3\\cos 4x + 7)\\,dx\\)", a: "\\dfrac{7\\pi}{2}" },
      { q: "احسب \\(\\displaystyle\\int_0^1 xe^{2x}\\,dx\\)", a: "\\dfrac{e^2+1}{4}" },
    ]
  },
];
