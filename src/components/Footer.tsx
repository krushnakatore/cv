import React from 'react';
import { LucideIcon } from 'lucide-react';
import { ui } from '../styles/ui';

interface FooterProps {
  links: { href: string; icon: LucideIcon; label: string; external: boolean }[];
}

const Footer: React.FC<FooterProps> = ({ links }) => {
  return (
    <footer className={`border-t ${ui.border} font-mono`}>
      <div className="mx-auto w-full max-w-3xl space-y-4 px-4 py-8 text-sm sm:px-6">
        <p className="flex items-center gap-2">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex size-2.5 rounded-full bg-green-500" />
          </span>
          <span className={ui.heading}>Open to opportunities</span>
          <span className={ui.subtext}>— let&apos;s talk.</span>
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map(({ href, icon: Icon, label, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={`${ui.link} flex items-center gap-1.5`}
            >
              <Icon size={14} className="shrink-0" />
              <span className="hidden sm:inline">{label}</span>
            </a>
          ))}
        </div>
        <p className={`text-xs ${ui.subtext}`}>© {new Date().getFullYear()} Krushna Katore</p>
      </div>
    </footer>
  );
};

export default Footer;
