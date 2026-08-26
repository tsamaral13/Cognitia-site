import { useEffect, useState } from 'react';
import HomePage from '@/pages/HomePage';
import DroneArticlePage from '@/pages/DroneArticlePage';
import ArenaSecurityArticlePage from '@/pages/ArenaSecurityArticlePage';
import IndustrialSafetyArticlePage from '@/pages/IndustrialSafetyArticlePage';

const pagesByHash = {
  '#artigo-drones-autonomos': 'drone-article',
  '#seguranca-arenas-eventos': 'arena-security-article',
  '#seguranca-industrial-inteligente': 'industrial-safety-article',
};

const getPage = () => pagesByHash[window.location.hash] || 'home';

export default function App() {
  const [page, setPage] = useState(getPage);

  useEffect(() => {
    const syncPage = () => setPage(getPage());
    window.addEventListener('hashchange', syncPage);
    return () => window.removeEventListener('hashchange', syncPage);
  }, []);

  useEffect(() => {
    if (page !== 'home') {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    window.requestAnimationFrame(() => {
      const target = document.querySelector(window.location.hash || '#top');
      target?.scrollIntoView({ behavior: 'auto' });
    });
  }, [page]);

  if (page === 'drone-article') return <DroneArticlePage />;
  if (page === 'arena-security-article') return <ArenaSecurityArticlePage />;
  if (page === 'industrial-safety-article') return <IndustrialSafetyArticlePage />;
  return <HomePage />;
}
