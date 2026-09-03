import type { MetadataRoute } from 'next';

const routes = [
  '',
  '/solucoes/seguranca-operacional',
  '/solucoes/drones-automatizados',
  '/solucoes/software-sob-medida',
  '/cases/usemetta',
  '/sobre',
  '/privacidade',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-09-02');
  const entries: MetadataRoute.Sitemap = [];

  routes.forEach((route, index) => {
    const changeFrequency: 'monthly' | 'yearly' =
      index === 0 ? 'monthly' : 'yearly';
    const priority =
      index === 0 ? 1 : route.includes('/solucoes/') ? 0.9 : 0.7;

    entries.push({
      url: `https://cognitiasolucoes.com${route}`,
      lastModified,
      changeFrequency,
      priority,
    });
  });

  return entries;
}
