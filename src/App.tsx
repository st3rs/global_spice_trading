/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageRoute } from './types';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/Home';
import { CatalogPage } from './pages/Catalog';
import { InsightsPage } from './pages/Insights';
import { DashboardPage } from './pages/Dashboard';

import { ContactPage } from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');

  // Home page uses a light header since the hero background is right at the top
  const isDarkNav = false;
  // Let's use dark footer everywhere except dashboard to match mockups generally
  const isDarkFooter = currentPage !== 'dashboard';

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <Navigation currentPage={currentPage} setPage={setCurrentPage} isDarkBackground={isDarkNav} />
      
      <main className="flex-grow flex flex-col">
        {currentPage === 'home' && <HomePage setPage={setCurrentPage} />}
        {currentPage === 'catalog' && <CatalogPage />}
        {currentPage === 'insights' && <InsightsPage />}
        {currentPage === 'dashboard' && <DashboardPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      <Footer isDarkBackground={isDarkFooter} />
    </div>
  );
}

