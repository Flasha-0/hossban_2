import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import BrowserPanel from './components/BrowserPanel';
import { QUIZ_URLS, CHAPTERS } from './data/chapters';
import Ch0 from './pages/Ch0';
import Ch1 from './pages/Ch1';
import Ch2 from './pages/Ch2';
import Ch3 from './pages/Ch3';
import Ch4 from './pages/Ch4';
import Ch5 from './pages/Ch5';
import Ch6 from './pages/Ch6';
import Ch7 from './pages/Ch7';
import Ch8 from './pages/Ch8';
import Ch9 from './pages/Ch9';
import FormulasPage from './pages/FormulasPage';
import QuestionsPage from './pages/QuestionsPage';

type Page = 'main' | 'formulas' | 'questions';

const CHAPTER_COMPONENTS = [Ch0, Ch1, Ch2, Ch3, Ch4, Ch5, Ch6, Ch7, Ch8, Ch9];

export default function App() {
  const [page, setPage] = useState<Page>('main');
  const [chapterIdx, setChapterIdx] = useState(0);
  const [quizUrl, setQuizUrl] = useState<string | null>(null);

  const handleQuizOpen = (idx: number) => {
    const url = QUIZ_URLS[idx];
    if (url) setQuizUrl(url);
  };

  const handleChapterNav = (idx: number) => {
    setChapterIdx(idx);
    setQuizUrl(null);
    // scroll to top
    const scroll = document.getElementById('content-scroll');
    if (scroll) scroll.scrollTop = 0;
  };

  const handlePageNav = (p: Page) => {
    setPage(p);
    setQuizUrl(null);
    const scroll = document.getElementById('content-scroll');
    if (scroll) scroll.scrollTop = 0;
  };

  const ChapterComp = CHAPTER_COMPONENTS[chapterIdx];

  return (
    <div className="grid-bg" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
      <Header currentPage={page} onNav={handlePageNav} />

      <div style={{ display: 'flex', flex: 1, height: 'calc(100vh - 145px)', position: 'relative', overflow: 'hidden' }}>
        {/* Sidebar — only on main page */}
        {page === 'main' && (
          <Sidebar current={chapterIdx} onNav={handleChapterNav} />
        )}

        {/* Content area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>

          {/* Quiz browser overlay */}
          {quizUrl && (
            <BrowserPanel url={quizUrl} onClose={() => setQuizUrl(null)} />
          )}

          {/* Scrollable content */}
          <div
            id="content-scroll"
            style={{ flex: 1, overflowY: 'auto', display: quizUrl ? 'none' : 'block' }}
          >
            {page === 'main' && (
              <div style={{ padding: '1.8rem 2.2rem', maxWidth: '880px' }}>
                <ChapterComp
                  onQuiz={handleQuizOpen}
                  onNav={handleChapterNav}
                  total={CHAPTERS.length}
                />
              </div>
            )}
            {page === 'formulas' && <FormulasPage />}
            {page === 'questions' && <QuestionsPage />}
          </div>
        </div>
      </div>
    </div>
  );
}
