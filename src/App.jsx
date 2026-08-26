import { useEffect, useState } from 'react';
import HomePage from '@/pages/HomePage';
import DroneArticlePage from '@/pages/DroneArticlePage';

const ARTICLE_HASH = '#artigo-drones-autonomos';

export default function App() {
  const [page, setPage] = useState(() => window.location.hash === ARTICLE_HASH ? 'drone-article' : 'home');

  useEffect(() => {
    const syncPage = () => setPage(window.location.hash === ARTICLE_HASH ? 'drone-article' : 'home');
    window.addEventListener('hashchange', syncPage);
    return () => window.removeEventListener('hashchange', syncPage);
  }, []);

  useEffect(() => {
    if (page === 'drone-article') {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    window.requestAnimationFrame(() => {
      const target = document.querySelector(window.location.hash || '#top');
      target?.scrollIntoView({ behavior: 'auto' });
    });
  }, [page]);

  return page === 'drone-article' ? <DroneArticlePage /> : <HomePage />;
}
