import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    katex: unknown;
    renderMathInElement: (el: HTMLElement, opts: unknown) => void;
  }
}

const KATEX_OPTS = {
  delimiters: [
    { left: "\\[", right: "\\]", display: true },
    { left: "\\(", right: "\\)", display: false },
    { left: "$$", right: "$$", display: true },
    { left: "$", right: "$", display: false },
  ],
  throwOnError: false,
  trust: true,
  strict: false,
};

function waitForKatex(cb: () => void): () => void {
  if (typeof window.katex !== 'undefined') { cb(); return () => {}; }
  const t = setInterval(() => {
    if (typeof window.katex !== 'undefined') { cb(); clearInterval(t); }
  }, 80);
  return () => clearInterval(t);
}

function waitForRender(cb: () => void): () => void {
  if (typeof window.renderMathInElement !== 'undefined') { cb(); return () => {}; }
  const t = setInterval(() => {
    if (typeof window.renderMathInElement !== 'undefined') { cb(); clearInterval(t); }
  }, 80);
  return () => clearInterval(t);
}

// Renders a block of raw LaTeX (display mode)
export function LatexBlock({ tex, className = '' }: { tex: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    return waitForKatex(() => {
      if (!ref.current) return;
      try {
        (window.katex as { render: (tex: string, el: HTMLElement, opts: unknown) => void }).render(
          tex, ref.current, { throwOnError: false, displayMode: true, trust: true }
        );
      } catch (e) { /* ignore */ }
    });
  }, [tex]);
  return <div ref={ref} className={`math-block-wrap ${className}`} />;
}

// Renders a span of raw LaTeX (inline mode)
export function LatexInline({ tex, className = '' }: { tex: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    return waitForKatex(() => {
      if (!ref.current) return;
      try {
        (window.katex as { render: (tex: string, el: HTMLElement, opts: unknown) => void }).render(
          tex, ref.current, { throwOnError: false, displayMode: false, trust: true }
        );
      } catch (e) { /* ignore */ }
    });
  }, [tex]);
  return <span ref={ref} className={`math-ltr ${className}`} />;
}

// Auto-renders all math in a container (html may contain \( \) or \[ \])
export function AutoMath({ html, className = '' }: { html: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    return waitForRender(() => {
      if (!ref.current) return;
      ref.current.innerHTML = html;
      window.renderMathInElement(ref.current, KATEX_OPTS);
    });
  }, [html]);
  return <div ref={ref} className={className} />;
}
