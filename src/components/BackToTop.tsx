import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#top"
      aria-label="Back to top"
      className={`fixed bottom-5 right-5 z-40 rounded-full bg-blue-600 p-3 text-white shadow-lg transition-opacity duration-300 hover:bg-blue-500 dark:bg-cyan-600 dark:hover:bg-cyan-500 print:hidden ${
        show ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <ArrowUp size={18} />
    </a>
  );
};

export default BackToTop;
