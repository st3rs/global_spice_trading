import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';

interface HomeProps {
  setPage: (page: PageRoute) => void;
}

export function HomePage({ setPage }: HomeProps) {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[819px] flex items-center bg-surface-container-lowest overflow-hidden plinth">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwDULiCiuCfl0BCKV00f-92abTg0sOYEOTFE-SF8mWGks2Dp5u2VN6rt0ZCBmzYppFUDWoaOgi7IXRgkorx8Tdzctn4usTpm27YGZNBaTRifoELAYmBCxrBxUE8HxliSA4m_24NF6XuMH4OAulAKX6uKRLoxTLreiJgu4oVJGcF8xwd8XL0XHgVTwoUsCq59dvRttqKcfOOJQLE3UdKSg1DSm9-Be_NLnH5k3fNgoP9GjpFfJHwzkBscE0dqK70y8PWIHZVenlnuw" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40"></div>
          <div className="absolute inset-0 burlap-texture"></div>
        </div>
        
        <div className="relative z-10 max-w-container-max mx-auto px-margin-desktop w-full grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-8 lg:col-span-7 flex flex-col justify-center py-20">
            <h1 className="font-display-lg text-display-lg text-on-primary mb-base drop-shadow-md">
              From Thai Fields to Global Tables
            </h1>
            <p className="font-body-lg text-body-lg text-on-primary-container mb-10 max-w-2xl">
              Uncompromising quality in every shipment. We source the finest botanicals directly from sustainable growers in Thailand, delivering pristine flavor profiles to international wholesale markets.
            </p>
            <div className="flex flex-wrap gap-base">
              <button 
                onClick={() => setPage('catalog')}
                className="bg-secondary-container text-on-secondary-container font-label-md text-label-md px-6 py-3 rounded hover:bg-secondary-fixed transition-colors shadow-sm flex items-center gap-2"
              >
                Explore Catalog
                <ArrowRight size={18} />
              </button>
              <button className="bg-transparent border border-secondary-fixed text-secondary-fixed font-label-md text-label-md px-6 py-3 rounded hover:bg-secondary-fixed/10 transition-colors flex items-center gap-2">
                Request Sample
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Catalog (Bento Grid) */}
      <section className="py-[120px] bg-background">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Featured Export Catalog</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Discover our premium selection of raw and processed spices, meticulously graded for international trade.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-gutter h-auto md:h-[600px]">
            {/* Large Feature Card */}
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl bg-surface-container plinth group cursor-pointer" onClick={() => setPage('catalog')}>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwvfHs3K2NQnlIXUJFBiaF2Fbn72TFVi2yHgcNXw8UeBbZGSV9shovbBZydLKaSwI5MqEFeO-5TqEil_kUNn4vQzp4JEhefNmd9dIexx03RKC_pHNKA9rwgm1TvPEJhk4XoSRvfQSwocalde9ZTPwYTtrLLXQQOAEWvDMrFAxNbIyY4Vz1YFBmigxCopqmu_yRwT9PmY-REu_cTckHxnFnGxk0KfehTOHq0TOEeN5XRgyM-HzmGKa8DKMiaxoHl6x4W-CLEimqss0" 
                alt="Chili" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex gap-2 mb-3">
                  <span className="bg-primary-fixed text-on-primary-fixed-variant font-label-md text-[12px] px-2 py-1 rounded-sm uppercase tracking-wider">Premium Grade</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-primary mb-2">Thai Bird's Eye Chili</h3>
                <p className="font-body-md text-body-md text-on-primary-container line-clamp-2">Sun-dried to perfection, delivering intense heat and deep color for spice blends and extractions.</p>
              </div>
            </div>

            {/* Top Right Small Card */}
            <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-xl bg-surface-container plinth cursor-pointer" onClick={() => setPage('catalog')}>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEZ2qrG2kl8aUs433re1QVijVXCBXHIW5m5vnbg0_5KnZadxXoCn5e9IB38kDNZ0ox2tZy5X6kIYph9GISJSiIEtdVIpDM8dNXnwSi_5NzPIEqoh8UScZr0U1uNfzVErKux3CNhPMLU32HmfXY6evxRGtFPg10Euez5rxPhEe6NcmDQI19XNQ7hAP4vrI6Yrd3G5PgeMGp5YT7FGvNgaGwiH2Ig6QmRzlfxWCjc0YgFHzA_AR4JiydVYGHBNyzyHw-wDhrfYFqiTs" 
                alt="Lemongrass" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="font-headline-md text-headline-md text-on-primary mb-1">Fresh Lemongrass</h3>
                <p className="font-body-md text-body-md text-on-primary-container text-sm">Essential aromatic base, exported fresh or dried.</p>
              </div>
            </div>

            {/* Bottom Right Small Card */}
            <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-xl bg-surface-container plinth cursor-pointer" onClick={() => setPage('catalog')}>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC84ICeG7Qoq5ukhPpTWl9A2AD4wa44fhCuwQJusSjw2QDkRFDHHIl0a5saxU7DMcVq_FpA5WyZl0qrNlIIDJJLZOgP98QAvUgXbM4u3d8yUaGWGB5If6KfrLhfdeNJijycEfSI9LeCL3ecWzZNZ450ueikx92Z_pWTCmfd25xcsFtGlmmswg2lQMARU7u669Z4aOGqU0WwxurO2SgbHs4K76kEVUeek_DtZnn5bVDFK94d4o33Bix7oU7Mae3AM-ZcUsmXUHMZ2nM" 
                alt="Galangal" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="font-headline-md text-headline-md text-on-primary mb-1">Grade-A Galangal</h3>
                <p className="font-body-md text-body-md text-on-primary-container text-sm">Distinctive piney notes, meticulously sorted.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
