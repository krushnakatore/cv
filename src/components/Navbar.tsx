import React from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  toggleTheme: () => void;
  theme: string;
  themeClasses: { [key: string]: string };
}

const Navbar: React.FC<NavbarProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen, toggleTheme, theme, themeClasses }) => {
  const navItems = ['about', 'experience', 'projects', 'education', 'skills'];

  return (
    <nav className={`${themeClasses.card} border-b ${themeClasses.border} font-mono sticky top-0 z-50 transition-colors duration-500`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold tracking-tight">KK</span>
          </div>

          {/* Desktop menu and theme toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`py-2 px-3 rounded-lg font-medium transition-colors duration-200 ${themeClasses.link}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-200 ${themeClasses.link}`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-200 ${themeClasses.link} mr-2`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${themeClasses.subtext} hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-2 px-3 rounded-md text-base font-medium transition-colors duration-200 ${themeClasses.link}`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;