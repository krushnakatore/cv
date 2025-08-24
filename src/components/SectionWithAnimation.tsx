import React, { useRef, useEffect, useState, Ref } from 'react';

const useInView = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [options]);

  return [ref, inView];
};

interface SectionWithAnimationProps {
  children: React.ReactNode;
  id?: string;
  title?: string;
  themeClasses: { [key: string]: string };
}

const SectionWithAnimation: React.FC<SectionWithAnimationProps> = ({ children, id, title, themeClasses }) => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      id={id}
      ref={ref as Ref<HTMLElement> | undefined}
      className={`py-6 md:py-8 border-t ${themeClasses.sectionBorder} font-mono transition-all duration-700 ease-out transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {title && <h2 className={`text-xl font-bold mb-4 ${themeClasses.heading}`}>{title}</h2>}
      <div className="space-y-4">
        {children}
      </div>
    </section>
  );
};

export default SectionWithAnimation;