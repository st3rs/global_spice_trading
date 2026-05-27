import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';

export function InsightsPage() {
  return (
    <div className="flex-grow pt-32 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full burlap-texture">
      <div className="mb-12">
        <h1 className="font-display-lg text-display-lg text-primary mb-4">Spice Industry Insights</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
          Expert analysis, market trends, and harvest reports tailored for global wholesale buyers of premium Thai aromatics.
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-20">
        {/* Main Featured Image */}
        <div className="md:col-span-8 rounded-xl overflow-hidden relative h-[500px] group bg-surface-container-high border border-outline-variant">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhwmxp0h3KuRJZdMEZ1CODHbTUd_b0UJGkQCF2krtdFrlNbTG3Ub9C1O50PIS_VDZdjeQN3-w2a51MaG1IR7UvGxmF8Fa-f-ldMgCfuUmsL9wUNPRgUz-V0nrHW6VAe_P47fkf6bQo5u0JSjpj6qKGIQcYeqAOJMa2hw91RYZ2FEsH0yWbDW0xICW4FWCPhXdvtTITLqKU4InAcn5EXMEmzmDmkxrL5lI30UPx3Bd59f80-Xk2XPlpNNic-KvJzSqV62jDyLD6GpA" 
            alt="Thai aromatics" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute bottom-0 left-0 w-full bg-primary/95 backdrop-blur-sm p-8 text-on-primary">
            <span className="inline-block bg-primary-fixed text-on-primary-fixed-variant font-label-md text-label-md px-2 py-1 rounded mb-3">Market Trends</span>
            <h2 className="font-headline-lg text-headline-lg mb-2">The Evolving Global Demand for Authentic Thai Aromatics</h2>
            <p className="font-body-md text-body-md opacity-90 line-clamp-2 max-w-3xl">As international palates mature, wholesale buyers are shifting focus from generic spice blends to single-origin, traceable Thai ingredients to meet consumer demands for authenticity.</p>
            <a href="#" className="inline-flex items-center mt-4 text-secondary-fixed hover:text-secondary font-label-md text-label-md transition-colors gap-1">
              Read Full Analysis <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Secondary Info */}
        <div className="md:col-span-4 flex flex-col gap-gutter">
          {/* Data Plinth */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex-1 hover:shadow-[0_4px_20px_rgba(1,45,29,0.05)] transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-headline-md text-headline-md text-primary">Q3 Harvest Yields</h3>
              <TrendingUp className="text-outline" size={24} />
            </div>
            <ul className="space-y-4">
              <li className="flex justify-between items-end border-b border-surface-variant pb-2">
                <span className="font-body-md text-body-md text-on-surface-variant">Galangal (A-Grade)</span>
                <span className="font-label-md text-label-md text-primary">+12% YoY</span>
              </li>
              <li className="flex justify-between items-end border-b border-surface-variant pb-2">
                <span className="font-body-md text-body-md text-on-surface-variant">Lemongrass</span>
                <span className="font-label-md text-label-md text-primary">Stable</span>
              </li>
              <li className="flex justify-between items-end pb-2">
                <span className="font-body-md text-body-md text-on-surface-variant">Makrut Lime</span>
                <span className="font-label-md text-label-md text-error">-4% YoY</span>
              </li>
            </ul>
            <a href="#" className="block text-center mt-6 border border-primary text-primary hover:bg-surface-tint/10 font-label-md text-label-md py-2 rounded transition-colors">
              View Full Report
            </a>
          </div>

          {/* Secondary Article */}
          <div className="bg-primary text-on-primary rounded-xl p-6 flex-1 relative overflow-hidden group">
            <div className="absolute inset-0 wood-texture opacity-20"></div>
            <div className="relative z-10">
              <span className="inline-block bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md px-2 py-1 rounded mb-3">Supply Chain</span>
              <h3 className="font-headline-md text-headline-md mb-2 text-secondary-fixed">Navigating Export Logistics in Southeast Asia</h3>
              <p className="font-body-md text-body-md opacity-80 mb-4 line-clamp-3">A comprehensive guide for B2B buyers on mitigating shipping delays and ensuring freshness upon arrival.</p>
              <a href="#" className="text-on-primary hover:text-secondary-fixed font-label-md text-label-md transition-colors underline underline-offset-4">Read Guide</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
