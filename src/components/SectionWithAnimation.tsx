import React, { useRef, useEffect, useState } from 'react';
import { ui } from '../styles/ui';

// 'visible' is the default, so content shows without JS, when printing, and for reduced-motion users.
// Sections still below the fold are hidden on mount and faded in when they scroll into view.
type RevealState = 'visible' | 'hidden' | 'revealed';

const useReveal = () => {
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<RevealState>('visible');

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    setState('hidden');
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setState('revealed');
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return [ref, state] as const;
};

interface SectionWithAnimationProps {
  children: React.ReactNode;
  id?: string;
  title?: string;
}

const SectionWithAnimation: React.FC<SectionWithAnimationProps> = ({ children, id, title }) => {
  const [ref, state] = useReveal();

  return (
    <section
      id={id}
      ref={ref}
      className={`py-6 md:py-8 border-t ${ui.border} font-mono transition-all duration-700 ease-out print:translate-y-0 print:opacity-100 ${
        state === 'hidden' ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
      }`}
    >
      {title && <h2 className={`text-xl font-bold mb-4 ${ui.heading}`}>{title}</h2>}
      <div className="space-y-4">
        {children}
      </div>
    </section>
  );
};

export default SectionWithAnimation;
