import React from 'react';
import { Truck } from 'lucide-react';

export function CatalogPage() {
  const products = [
    {
      name: "Bird's Eye Chili",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGvbxuJOUJ3KAap0zH1zzgkgJzhTMfNMhplHffCb6lAOW-R0WQnahzyQZQn7OzPWnt7-7SVunIDO9DyqZn5ugFEnM8BiXaKOZTqJeyEtrYkHkTt9tUz7acL2s1B9BrCfv89P6nheyoReYKh0y_irUx9_KUEamNC5cR7EKYY2JJlM0yuBFSqUWPALximmZCFZOw5LT7ZOC5ZsZwATlIDG2GpvAjLVoJ5uafUn8okJuPS30aPPDu_1iUVHlQC6zA4fyIOM4ggWABrP8",
      tags: ["Origin: Kanchanaburi", "Export Grade A"],
      desc: "Intensely hot and distinctly fruity, these premium dried chilies are essential for authentic Thai flavor profiles. Carefully sun-dried to preserve essential oils."
    },
    {
      name: "Kaffir Lime Leaves",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJxDzdbYGO3rELezGCq1MPBkW7RL-rQxEYjbiN9fZj9zeF6gUULD4dkP0tPqVHm-4xDBx9gBR1SXicY3MA0H0oY3DuM6CHTDu-JsWlykxxjHW-3PM_PDtXNQSS4Bd3KK3RBw8t-vhdfomjR3sU4qQl5OWskd-U8TY5OVDYsKEtxiT0Adka9HO69CpjqZIal5_h9q6f3Fz0RvUo9UnSGEC7GjO4eONY-kjPzcxEhq_tanLBe-e9Qf8HSaJZZEW1K976oFQF4kvz7GM",
      tags: ["Origin: Chiang Mai", "Organic"],
      desc: "Hand-harvested aromatics offering a robust citrus bouquet. Available fresh or flash-dried to retain maximum volatile oil content for manufacturing."
    },
    {
      name: "Premium Lemongrass",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOiIJymFHSmWYuT_SFTziONT-zpEqsuCd81_0gHTTRYU4ghnxFJhw6Z8lzTEFt0PIrZtrJwddc5dIpfx4D5WRUTd9ao6VUIvtDFjnCGg9wtNVJvtrKHmk-p6NnpHvoqOlHtqMtBn3-UDguqzI-_4mj8H9vpoH_HKhHbFDTqkVTSg9QsazRkWrCq_vccZp-Mly2owzltA5V3k_MH7uLWUoRia6A7ql0ApFD7776usKfk_GseoZuEoCWYm-ezaIeysgwoXbHGIyIO5I",
      tags: ["Origin: Chanthaburi", "Global GAP"],
      desc: "Selected for optimal girth and essential oil yield. Provides a clean, sharp lemon flavor perfect for pastes, teas, and culinary extracts."
    },
    {
      name: "Galangal Root",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkdaHV7CjdQH8wfmWvGhuMoSi_KIzuZfFO_9R_MGeZKnswMAT49ZuVGzL0OKv6GpnaOHpjfOUFsHxs3m_Y4IQ8i-Jug8--kyXU3564RF5tTyJG3i3JsCRyfTcNzsJNjMBymEg6pCDwBthmls-YoL_Z9tgS4ui0PLouYTizAu05ERTsqlVus5-AvK1flOedkJvGb15WQTWVV97iocQhgMIrKLnsu2TIwtoHebqDXB-BVBFEJGWly_sIjo5zili4sn-BGAJTXqSSsHU",
      tags: ["Origin: Chiang Rai", "Washed & Sliced"],
      desc: "A cornerstone aromatic offering a sharp, peppery, and almost pine-like profile. Available whole, sliced, or milled to specification."
    }
  ];

  return (
    <div className="relative z-10 pt-[120px] pb-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop min-h-screen">
      <div className="fixed inset-0 texture-overlay z-0"></div>
      
      {/* Page Header */}
      <div className="mb-12 md:mb-16 text-center max-w-2xl mx-auto relative z-10">
        <h1 className="font-display-lg text-display-lg text-primary mb-4">Premium Thai Spices</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Discover our curated selection of export-grade spices, ethically sourced from regions renowned for their agricultural excellence.
        </p>
      </div>

      {/* Filters & Grid */}
      <div className="flex flex-col md:flex-row gap-gutter relative z-10">
        
        {/* Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="plinth p-6 rounded-lg sticky top-28">
            <h2 className="font-headline-md text-headline-md text-primary mb-6 border-b border-outline-variant pb-2">Categories</h2>
            <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant">
              {['All Spices', 'Dried Chilies', 'Aromatics', 'Ground Spices', 'Special Blends'].map((cat, i) => (
                <li key={cat}>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="cat"
                      defaultChecked={i === 0}
                      className="h-5 w-5 text-primary border-outline focus:ring-primary focus:ring-offset-surface rounded-full" 
                    />
                    <span className="group-hover:text-primary transition-colors">{cat}</span>
                  </label>
                </li>
              ))}
            </ul>
            
            <h2 className="font-headline-md text-headline-md text-primary mt-8 mb-6 border-b border-outline-variant pb-2">Origin</h2>
            <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant">
              {['Chiang Mai', 'Kanchanaburi', 'Chanthaburi'].map((origin) => (
                <li key={origin}>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      className="form-checkbox h-5 w-5 text-primary border-outline rounded focus:ring-primary focus:ring-offset-surface" 
                    />
                    <span className="group-hover:text-primary transition-colors">{origin}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {products.map((product, idx) => (
            <article key={idx} className="group relative rounded-lg overflow-hidden plinth transition-all duration-300 hover:shadow-[0_4px_20px_rgba(1,45,29,0.05)] hover:-translate-y-1 bg-surface-container-lowest">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute bottom-0 w-full bg-primary/90 backdrop-blur-sm p-4">
                  <h3 className="font-headline-lg text-headline-lg text-secondary-fixed">{product.name}</h3>
                </div>
              </div>
              <div className="p-5 flex flex-col h-[calc(100%-16rem)] justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-primary-fixed text-primary-container px-2 py-1 rounded font-label-md text-[12px]">{product.tags[0]}</span>
                    <span className="bg-surface-variant text-on-surface-variant px-2 py-1 rounded font-label-md text-[12px]">{product.tags[1]}</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-3">
                    {product.desc}
                  </p>
                </div>
                <button className="w-full font-label-md text-label-md bg-transparent text-primary border border-primary py-2.5 rounded hover:bg-primary hover:text-secondary-fixed transition-colors flex items-center justify-center gap-2 mt-auto">
                  <span>Request Sample</span>
                  <Truck size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
