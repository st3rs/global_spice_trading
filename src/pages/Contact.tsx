import React from 'react';
import { MapPin, Phone, Mail, Building } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="flex-grow pt-32 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full burlap-texture">
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <h1 className="font-display-lg text-display-lg text-primary mb-4">Contact Us</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Connect with our global network. Whether you're an international buyer or a partner, our team is ready to assist you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter mb-20 relative z-10">
        
        {/* Contact Form Section */}
        <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 shadow-sm">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Send an Inquiry</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-2">First Name</label>
                <input 
                  type="text" 
                  className="w-full bg-surface-container-low border border-outline-variant rounded p-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Last Name</label>
                <input 
                  type="text" 
                  className="w-full bg-surface-container-low border border-outline-variant rounded p-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            
            <div>
              <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Company Email</label>
              <input 
                type="email" 
                className="w-full bg-surface-container-low border border-outline-variant rounded p-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                placeholder="name@company.com"
              />
            </div>
            
            <div>
              <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Subject</label>
              <select className="w-full bg-surface-container-low border border-outline-variant rounded p-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors">
                <option>Request a Quote</option>
                <option>Sample Request</option>
                <option>Partnership Inquiry</option>
                <option>General Support</option>
              </select>
            </div>

            <div>
              <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-surface-container-low border border-outline-variant rounded p-3 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                placeholder="How can we assist you?"
              ></textarea>
            </div>
            
            <button 
              type="button" 
              className="w-full font-label-md text-label-md bg-primary text-secondary-fixed py-3 rounded hover:bg-primary-container transition-colors shadow-sm"
            >
              Submit Inquiry
            </button>
          </form>
        </section>

        {/* Global Offices Section */}
        <section className="flex flex-col gap-gutter">
          
          <div className="bg-primary text-on-primary rounded-xl p-8 relative overflow-hidden h-full flex flex-col justify-between">
            <div className="absolute inset-0 wood-texture opacity-20 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center p-3 bg-tertiary-container rounded-full mb-6 text-tertiary-fixed">
                <Building size={24} />
              </div>
              <h2 className="font-headline-lg text-headline-lg text-secondary-fixed mb-2">London Office</h2>
              <p className="font-body-md text-primary-fixed-dim border-b border-primary-container pb-6 mb-6">
                Our European headquarters managing wholesale import and distribution networks.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-secondary-fixed mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-label-md text-label-md text-on-primary mb-1">Address</h3>
                    <address className="font-body-md text-primary-fixed-dim not-italic space-y-1">
                      <p>167-169 Great Portland Street</p>
                      <p>5th Floor</p>
                      <p>London</p>
                      <p>W1W 5PF</p>
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="text-secondary-fixed mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-label-md text-label-md text-on-primary mb-1">Phone</h3>
                    <p className="font-body-md text-primary-fixed-dim">+44 20 7946 0958</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="text-secondary-fixed mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-label-md text-label-md text-on-primary mb-1">Email</h3>
                    <p className="font-body-md text-primary-fixed-dim">europe@globalhub.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 mt-12 bg-surface-tint/20 rounded p-4 border border-surface-tint/30 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-tertiary-fixed"></span>
              </span>
              <span className="font-label-md text-label-md text-tertiary-fixed-dim">Currently open for business.</span>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
}
