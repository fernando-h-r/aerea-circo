import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = ({ site, url }) => {
  const origin = (import.meta.env.PUBLIC_SITE_URL || site?.origin || url.origin).replace(/\/$/, '');
  const body = `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`;
  return new Response(body, {
    status: 200,
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
