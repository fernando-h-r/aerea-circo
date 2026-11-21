import type { APIRoute } from 'astro';

export const prerender = true;

const pageModules = import.meta.glob('/src/pages/**/*.astro');

function fileToRoute(filePath: string): string | null {
  const rel = filePath.replace(/^\/src\/pages/, '').replace(/\.astro$/, '');
  if (rel === '/404' || rel.includes('[')) return null;
  if (rel === '/index') return '/';
  return rel.endsWith('/index') ? rel.slice(0, -'/index'.length) || '/' : rel;
}

export const GET: APIRoute = ({ site, url }) => {
  const origin = (import.meta.env.PUBLIC_SITE_URL || site?.origin || url.origin).replace(/\/$/, '');
  const routes = Object.keys(pageModules)
    .map(fileToRoute)
    .filter((r): r is string => Boolean(r))
    .sort((a, b) => (a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)));

  const urls = routes
    .map((route) => {
      const isHome = route === '/';
      const isLegal = route.includes('privacidad');
      const changefreq = isHome ? 'weekly' : isLegal ? 'monthly' : 'weekly';
      const priority = isHome ? '1.0' : isLegal ? '0.3' : '0.8';
      return `  <url>\n    <loc>${origin}${route}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    status: 200,
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
