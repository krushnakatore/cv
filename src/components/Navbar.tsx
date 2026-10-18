import React, { useEffect, useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { ui } from '../styles/ui';

const navItems = ['about', 'experience', 'projects', 'education', 'certifications', 'skills', 'achievements'];

const label = (item: string) => item.charAt(0).toUpperCase() + item.slice(1);

// Tracks which section is currently in the middle band of the screen
const useActiveSection = () => {
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = navItems
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="flex justify-between items-center h-16">
          <a href="#top" className="flex-shrink-0 text-xl font-bold tracking-tight" aria-label="Back to top">
            KK
          </a>

          {/* Desktop menu and theme toggle */}
          <div className="hidden lg:flex items-center space-x-1">
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
          <div className="-mr-2 flex items-center lg:hidden">
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
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
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
