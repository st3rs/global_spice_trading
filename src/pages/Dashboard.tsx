import React, { useState } from 'react';
import { Download, ArrowRight, Headset, Mail, Phone, Calendar, ReceiptText, BadgeCheck, ShoppingCart, X, PackageCheck, Truck, Ship, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export function DashboardPage() {
  const [trackingOrderId, setTrackingOrderId] = useState<string | null>(null);

  return (
    <div className="flex-grow pt-32 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full burlap-texture">
      {/* Dashboard Header */}
      <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="font-display-lg text-display-lg text-primary mb-2">Partner Dashboard</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Welcome back, EuroSpice Imports Ltd. Your verified partner tier is Active.</p>
        </div>
        <button className="font-label-md text-label-md border border-primary text-primary px-6 py-3 rounded hover:border-secondary hover:text-secondary transition-colors flex items-center gap-2">
          <Download size={20} />
          Latest Price List (PDF)
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Active Orders Summary */}
        <section className="plinth rounded-xl p-8 col-span-1 md:col-span-8 soft-lift">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-headline-lg text-headline-lg text-primary">Recent Orders</h2>
            <a href="#" className="font-label-md text-label-md text-secondary hover:underline flex items-center gap-1">
              View All <ArrowRight size={16} />
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-surface-variant text-on-surface-variant font-label-md text-label-md">
                  <th className="pb-4 pr-4 font-normal">Order Ref</th>
                  <th className="pb-4 pr-4 font-normal">Date</th>
                  <th className="pb-4 pr-4 font-normal">Volume</th>
                  <th className="pb-4 pr-4 font-normal">Status</th>
                  <th className="pb-4 font-normal text-right">Value (USD)</th>
                  <th className="pb-4 pl-4 font-normal text-right"></th>
                </tr>
              </thead>
              <motion.tbody 
                className="font-body-md text-body-md"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1, 
                    transition: { staggerChildren: 0.15 } 
                  }
                }}
              >
                <motion.tr 
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  className="border-b border-surface-variant/50 bg-transparent hover:bg-surface-container-lowest relative z-0 hover:z-10 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(1,45,29,0.05)] hover:-translate-y-0.5 cursor-pointer"
                >
                  <td className="py-4 pr-4 font-semibold text-primary">#ORD-992-EU</td>
                  <td className="py-4 pr-4 text-on-surface-variant">Oct 12, 2024</td>
                  <td className="py-4 pr-4">5,000 kg</td>
                  <td className="py-4 pr-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-tertiary-fixed text-on-tertiary-fixed-variant">
                      In Transit
                    </span>
                  </td>
                  <td className="py-4 text-right font-medium">$42,500.00</td>
                  <td className="py-4 pl-4 text-right">
                    <button 
                      onClick={() => setTrackingOrderId('#ORD-992-EU')}
                      className="font-label-md text-label-md bg-secondary-container text-on-secondary-container px-3 py-1.5 rounded hover:bg-secondary-fixed transition-colors whitespace-nowrap inline-flex items-center gap-1"
                    >
                      <Ship size={14} />
                      Track Shipment
                    </button>
                  </td>
                </motion.tr>
                <motion.tr 
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  className="border-b border-surface-variant/50 bg-transparent hover:bg-surface-container-lowest relative z-0 hover:z-10 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(1,45,29,0.05)] hover:-translate-y-0.5 cursor-pointer"
                >
                  <td className="py-4 pr-4 font-semibold text-primary">#ORD-845-EU</td>
                  <td className="py-4 pr-4 text-on-surface-variant">Sep 28, 2024</td>
                  <td className="py-4 pr-4">2,500 kg</td>
                  <td className="py-4 pr-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-surface-variant text-on-surface-variant">
                      Delivered
                    </span>
                  </td>
                  <td className="py-4 text-right font-medium">$18,200.00</td>
                  <td className="py-4 pl-4 text-right"></td>
                </motion.tr>
                <motion.tr 
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  className="border-b border-surface-variant/50 bg-transparent hover:bg-surface-container-lowest relative z-0 hover:z-10 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(1,45,29,0.05)] hover:-translate-y-0.5 cursor-pointer"
                >
                  <td className="py-4 pr-4 font-semibold text-primary">#ORD-711-EU</td>
                  <td className="py-4 pr-4 text-on-surface-variant">Aug 05, 2024</td>
                  <td className="py-4 pr-4">10,000 kg</td>
                  <td className="py-4 pr-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-surface-variant text-on-surface-variant">
                      Delivered
                    </span>
                  </td>
                  <td className="py-4 text-right font-medium">$85,000.00</td>
                  <td className="py-4 pl-4 text-right"></td>
                </motion.tr>
              </motion.tbody>
            </table>
          </div>
        </section>

        {/* Dedicated Support */}
        <section className="plinth rounded-xl p-8 col-span-1 md:col-span-4 bg-primary text-on-primary soft-lift relative overflow-hidden">
          <div className="absolute -right-8 -top-8 opacity-[0.08] pointer-events-none">
            <Headset size={200} />
          </div>
          <h2 className="font-headline-lg text-headline-lg text-secondary-fixed mb-4 relative z-10">Account Manager</h2>
          <p className="font-body-md text-body-md text-primary-fixed-dim mb-6 relative z-10">Your dedicated contact for bulk pricing, logistics, and quality assurance documentation.</p>
          
          <div className="space-y-4 relative z-10">
            <div className="flex items-center gap-4 border-b border-primary-container pb-5 mb-5">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC00GlKbGYmxVtpEZhJqUlUIN_Me_CoH5x71NIaR3WXaE9ebrJQUM_-8ggRh2AZstGci8ikqlfSLL3OzbeIEOpfD6Qd1YXMxY2SUBGJCGfz4fjeNGWcyj4kEYyIKsYZuhIezyEwnnN_ATBE55qSemGYGxOlHT_j07R1SsJ43Yw1cbuHuUFEmGUF7cNSj4sDzvU6u76AVa9PhzFQ-5fJ30mLIHHp7mhATakgNP55OEUfNFaupSSFnOP4xRVYa6Y3DKllCzKisODVUQ8" 
                alt="Sarah Jenkins" 
                className="w-14 h-14 rounded-full object-cover border-2 border-secondary-fixed" 
              />
              <div>
                <p className="font-label-md text-label-md text-on-primary text-lg">Sarah Jenkins</p>
                <p className="font-body-md text-sm text-primary-fixed-dim">Senior Export Specialist</p>
              </div>
            </div>
            
            <a href="mailto:support@globalhub.com" className="flex items-center gap-3 text-on-primary hover:text-secondary-fixed transition-colors font-body-md text-body-md">
              <Mail size={18} />
              s.jenkins@globalhub.com
            </a>
            <a href="tel:+6621234567" className="flex items-center gap-3 text-on-primary hover:text-secondary-fixed transition-colors font-body-md text-body-md">
              <Phone size={18} />
              +66 2 123 4567 (Ext 42)
            </a>
          </div>
          
          <button className="mt-8 w-full font-label-md text-label-md bg-secondary-fixed text-on-secondary-fixed px-4 py-3 rounded hover:bg-secondary-container transition-colors flex justify-center items-center gap-2 relative z-10">
            <Calendar size={18} />
            Schedule Review
          </button>
        </section>

        {/* Quick Actions / Tools */}
        <section className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-gutter mt-4">
          <a href="#" className="plinth rounded-xl p-6 soft-lift group flex flex-col justify-between h-48 border-l-4 border-l-secondary">
            <div>
              <div className="bg-surface-container w-10 h-10 rounded flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <ReceiptText size={20} />
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-1">Invoices & Statements</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Download past financial records.</p>
            </div>
            <div className="flex justify-end text-secondary">
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </div>
          </a>

          <a href="#" className="plinth rounded-xl p-6 soft-lift group flex flex-col justify-between h-48 border-l-4 border-l-secondary">
            <div>
              <div className="bg-surface-container w-10 h-10 rounded flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <BadgeCheck size={20} />
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-1">Certifications</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Access GMP, Organic, & Origin docs.</p>
            </div>
            <div className="flex justify-end text-secondary">
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </div>
          </a>

          <a href="#" className="plinth rounded-xl p-6 soft-lift group flex flex-col justify-between h-48 border-l-4 border-l-secondary relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-5 mix-blend-multiply"></div>
            <div className="relative z-10">
              <div className="bg-primary w-10 h-10 rounded flex items-center justify-center text-on-primary mb-4 group-hover:bg-tertiary-container transition-colors">
                <ShoppingCart size={20} />
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-1">Initiate New Order</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Build a custom container manifest.</p>
            </div>
            <div className="flex justify-end text-secondary relative z-10">
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </div>
          </a>
        </section>
      </div>

      {/* Tracking Modal */}
      {trackingOrderId && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-surface rounded-xl max-w-4xl w-full p-8 shadow-xl border border-outline-variant relative flex flex-col max-h-[90vh]">
            <button 
              onClick={() => setTrackingOrderId(null)}
              className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-container-highest z-10"
            >
              <X size={20} />
            </button>
            
            <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Shipment Tracking</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 border-b border-surface-variant pb-4">Order <span className="font-semibold text-primary">{trackingOrderId}</span> via Ocean Freight</p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 overflow-y-auto pr-2">
              <div className="pl-4">
                <div className="relative border-l-2 border-primary-fixed ml-2 space-y-8 pb-4">
                  
                  <div className="relative pl-8">
                    <div className="absolute -left-[17px] top-0 bg-primary text-secondary-fixed p-1.5 rounded-full shadow-sm"><PackageCheck size={18} /></div>
                    <div className="font-label-md text-primary pt-1">Oct 12 - 08:00 AM</div>
                    <div className="font-body-md text-on-surface-variant text-sm mt-1">Order Processed at Chiang Mai Facility</div>
                  </div>
                  
                  <div className="relative pl-8">
                    <div className="absolute -left-[17px] top-0 bg-primary text-secondary-fixed p-1.5 rounded-full shadow-sm"><Truck size={18} /></div>
                    <div className="font-label-md text-primary pt-1">Oct 14 - 14:30 PM</div>
                    <div className="font-body-md text-on-surface-variant text-sm mt-1">Departed from Origin Port (Laem Chabang)</div>
                  </div>
                  
                  <div className="relative pl-8">
                    <div className="absolute -left-[17px] top-0 bg-secondary text-on-secondary p-1.5 rounded-full shadow-md"><Ship size={18} /></div>
                    <div className="font-label-md text-primary pt-1">Oct 18 - Current Status</div>
                    <div className="font-body-md text-on-surface mt-1 bg-surface-container-high p-3 rounded-md text-sm border border-outline-variant/50 shadow-sm">
                      <span className="font-semibold block mb-1">In Transit - Indian Ocean</span>
                      Estimated arrival at destination port in 12 days. Conditions normal.
                    </div>
                  </div>
                  
                  <div className="relative pl-8 opacity-50">
                    <div className="absolute -left-[17px] top-0 bg-surface-variant text-on-surface-variant p-1.5 rounded-full"><MapPin size={18} /></div>
                    <div className="font-label-md text-primary pt-1">Est. Oct 30</div>
                    <div className="font-body-md text-on-surface-variant text-sm mt-1">Expected Arrival at Destination Port (Rotterdam)</div>
                  </div>

                </div>
              </div>

              {/* Mock Map Display */}
              <div className="bg-[#e5e9ec] rounded-lg overflow-hidden border border-outline-variant h-full min-h-[300px] lg:min-h-full relative shadow-inner">
                {/* Vintage map background */}
                <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-no-repeat bg-[center_top_10%] bg-[length:150%]"></div>
                
                {/* SVG Overlay for Route */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Route Line */}
                  <path d="M 75 40 Q 60 55 45 60 T 20 30" fill="none" stroke="currentColor" className="text-secondary opacity-60" strokeWidth="1.5" strokeDasharray="3 3">
                    <animate attributeName="stroke-dashoffset" from="100" to="0" dur="20s" repeatCount="indefinite" />
                  </path>
                  
                  {/* Origin Marker */}
                  <circle cx="75" cy="40" r="2.5" className="fill-primary" />
                  <text x="75" y="36.5" fontSize="3" className="fill-primary font-bold drop-shadow-sm select-none" textAnchor="middle">Laem Chabang</text>

                  {/* Destination Marker */}
                  <circle cx="20" cy="30" r="2.5" className="fill-primary opacity-50" />
                  <text x="20" y="26.5" fontSize="3" className="fill-primary opacity-70 font-bold select-none" textAnchor="middle">Rotterdam</text>

                  {/* Current Vessel Position */}
                  <g transform="translate(45,60)">
                    <circle cx="0" cy="0" r="6" className="fill-secondary opacity-30">
                      <animate attributeName="r" values="4;10;4" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="0" cy="0" r="2.5" className="fill-secondary drop-shadow-md" />
                  </g>
                </svg>

                {/* Telemetry Overlay */}
                <div className="absolute bottom-4 left-4 right-4 md:right-auto bg-surface/90 backdrop-blur text-xs font-mono p-3 rounded-lg shadow-md border border-outline-variant text-on-surface">
                  <div className="font-semibold text-primary mb-2 border-b border-surface-variant pb-1.5 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                    </span>
                    LIVE TELEMETRY
                  </div>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
                    <div className="text-on-surface-variant">LAT: <span className="text-on-surface font-medium ml-1">02°14.5' N</span></div>
                    <div className="text-on-surface-variant">LON: <span className="text-on-surface font-medium ml-1">078°42.1' E</span></div>
                    <div className="text-on-surface-variant">SPD: <span className="text-on-surface font-medium ml-1">18.5 kts</span></div>
                    <div className="text-on-surface-variant">HDG: <span className="text-on-surface font-medium ml-1">284° WNW</span></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-5 border-t border-surface-variant flex justify-end shrink-0">
              <button 
                onClick={() => setTrackingOrderId(null)}
                className="font-label-md text-label-md text-primary bg-surface-container-high hover:bg-surface-container-highest px-6 py-2.5 rounded transition-colors border border-outline-variant shadow-sm"
              >
                Close Tracking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
