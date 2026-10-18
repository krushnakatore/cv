import React, { useEffect, useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { ui } from '../styles/ui';

const navItems = ['about', 'experience', 'projects', 'education', 'skills'];

// Sections without their own nav link count as the nav item they sit under
const sectionToNavItem: Record<string, string> = {
  about: 'about',
  experience: 'experience',
  projects: 'projects',
  education: 'education',
  certifications: 'education',
  skills: 'skills',
  achievements: 'skills',
};

const label = (item: string) => item.charAt(0).toUpperCase() + item.slice(1);

// Highlights the last section whose top has scrolled up to just below the sticky navbar
const useActiveSection = () => {
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = Object.keys(sectionToNavItem)
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const update = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let current = '';
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 100) current = section.id;
      }
      if (atBottom && sections.length) current = sections[sections.length - 1].id;
      setActive(current ? sectionToNavItem[current] : '');
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return active;
};

const ThemeIcon = () => (
  <>
    <Sun size={22} className="hidden dark:block" />
    <Moon size={22} className="dark:hidden" />
  </>
);

interface NavbarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen, toggleTheme }) => {
  const active = useActiveSection();

  const itemClass = (item: string) =>
    `rounded-lg font-medium transition-colors duration-200 ${ui.link} ${
      active === item ? 'bg-gray-200 dark:bg-gray-700' : ''
    }`;

  return (
    <nav className={`${ui.card} border-b ${ui.border} font-mono sticky top-0 z-50 transition-colors duration-500`}>
      <div className="px-4 sm:px-6 md:px-16">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between">
          <a href="#top" className="flex-shrink-0 text-xl font-bold tracking-tight" aria-label="Back to top">
            KK
          </a>

          {/* Desktop menu and theme toggle */}
          <div className="-mr-2 hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                aria-current={active === item ? 'true' : undefined}
                className={`py-2 px-2.5 text-sm ${itemClass(item)}`}
              >
                {label(item)}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-200 ${ui.link}`}
              aria-label="Toggle theme"
            >
              <ThemeIcon />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-200 ${ui.link} mr-2`}
              aria-label="Toggle theme"
            >
              <ThemeIcon />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${ui.link} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-current`}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-1 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-current={active === item ? 'true' : undefined}
              className={`block py-2 px-3 text-base ${itemClass(item)}`}
            >
              {label(item)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
