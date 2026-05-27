import React from 'react';
import { User, Globe } from 'lucide-react';
import { PageRoute } from '../types';

interface NavigationProps {
  currentPage: PageRoute;
  setPage: (page: PageRoute) => void;
  isDarkBackground?: boolean;
}

export function Navigation({ currentPage, setPage, isDarkBackground = false }: NavigationProps) {
  const navItems: { label: string; id: PageRoute }[] = [
    { label: 'Products', id: 'catalog' },
    { label: 'Wholesale', id: 'dashboard' },
    { label: 'Blog', id: 'insights' },
    { label: 'Contact', id: 'contact' },
  ];

  const headerBgClass = isDarkBackground 
    ? "bg-primary border-primary-container" 
    : "bg-surface border-outline-variant";

  const brandTextClass = isDarkBackground
    ? "text-secondary-fixed"
    : "text-primary";

  const linkClassActive = isDarkBackground
    ? "text-secondary-fixed border-secondary-fixed"
    : "text-secondary border-secondary";

  const linkClassInactive = isDarkBackground
    ? "text-on-primary-fixed-variant hover:text-on-primary"
    : "text-on-surface-variant hover:text-primary";

  const buttonClass = isDarkBackground
    ? "bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-container"
    : "bg-primary text-secondary-fixed hover:bg-primary-container";

  return (
    <header className={`fixed top-0 w-full z-50 border-b transition-colors duration-300 ${headerBgClass}`}>
      <div className="max-w-container-max mx-auto px-margin-desktop flex items-center justify-between h-20">
        <button 
          onClick={() => setPage('home')}
          className={`font-headline-md text-headline-md font-semibold ${brandTextClass}`}
        >
          Global Hub Trading
        </button>
        
        <nav className="hidden md:flex items-center space-x-gutter">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`font-label-md text-label-md pb-1 transition-colors duration-200 ${
                currentPage === item.id 
                  ? `border-b-2 ${linkClassActive}` 
                  : linkClassInactive
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-base">
          <button onClick={() => setPage('dashboard')} className={`hidden md:flex font-label-md text-label-md px-6 py-2 rounded scale-95 transition-transform duration-150 ${buttonClass}`}>
            Wholesale Portal
          </button>
          
          <div className={`flex items-center space-x-2 ${isDarkBackground ? 'text-on-primary' : 'text-primary'}`}>
            <button className="p-2 hover:bg-surface-variant/20 rounded-full transition-colors">
              <User size={20} />
            </button>
            <button className="p-2 hover:bg-surface-variant/20 rounded-full transition-colors">
              <Globe size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
