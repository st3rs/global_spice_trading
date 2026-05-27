import React from 'react';

interface FooterProps {
  isDarkBackground?: boolean;
}

export function Footer({ isDarkBackground = false }: FooterProps) {
  const footerBg = isDarkBackground 
    ? "bg-on-primary-fixed border-t border-tertiary-container relative overflow-hidden" 
    : "bg-primary";
    
  return (
    <footer className={`w-full py-20 z-10 ${footerBg}`}>
      {isDarkBackground && <div className="absolute inset-0 wood-texture opacity-50 mix-blend-multiply"></div>}
      
      <div className="relative z-10 max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="col-span-1 md:col-span-2">
          <div className="font-headline-md text-headline-md text-secondary-fixed mb-4">
            Global Hub Trading
          </div>
          <p className={`font-body-md text-body-md ${isDarkBackground ? 'text-primary-fixed' : 'text-on-primary'} opacity-90 max-w-sm`}>
            © 2024 Global Hub Trading Group Ltd. Excellence in Spice Export. Delivering premium Thai agricultural products to global markets with uncompromising quality.
          </p>
        </div>
        
        <div className="col-span-1">
          <h4 className="font-label-md text-label-md text-secondary-fixed mb-4">Company</h4>
          <ul className="space-y-3">
            <li><a href="#" className={`font-label-md text-label-md text-on-primary-container hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100`}>Privacy Policy</a></li>
            <li><a href="#" className={`font-label-md text-label-md text-on-primary-container hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100`}>Terms of Trade</a></li>
          </ul>
        </div>
        
        <div className="col-span-1">
          <h4 className="font-label-md text-label-md text-secondary-fixed mb-4">Global Network</h4>
          <ul className="space-y-3">
            <li><a href="#" className={`font-label-md text-label-md text-on-primary-container hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100`}>Global Offices</a></li>
            <li><a href="#" className={`font-label-md text-label-md text-on-primary-container hover:text-secondary-fixed transition-colors opacity-80 hover:opacity-100`}>Certifications</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
