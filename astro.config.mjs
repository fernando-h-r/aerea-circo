import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const securityHeaders = {
  'X-DNS-Prefetch-Control': 'on',
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Resource-Policy': 'same-site',
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://api.fontshare.com",
    "font-src 'self' data: https://fonts.gstatic.com https://cdn.fontshare.com",
    "img-src 'self' data: https:",
    "connect-src 'self' ws: http:",
    "frame-src 'none'",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
  ].join('; '),
};

const forjaSsrAdapter = {
  name: 'forja-node-ssr',
  hooks: {
    'astro:config:setup': ({ updateConfig }) => {
      updateConfig({
        vite: {
          build: {
            rolldownOptions: {
              input: 'astro/entrypoints/prerender',
            },
          },
        },
      });
    },
    'astro:config:done': ({ setAdapter }) => {
      setAdapter({
        name: 'forja-node-ssr',
        entrypointResolution: 'auto',
        supportedAstroFeatures: {
          staticOutput: 'stable',
          hybridOutput: 'stable',
          serverOutput: 'stable',
          envGetSecret: 'stable',
          sharpImageService: 'stable',
        },
      });
    },
  },
};

export default defineConfig({
  adapter: forjaSsrAdapter,
  devToolbar: { enabled: false },
  security: {
    checkOrigin: true,
  },
  server: {
    headers: securityHeaders,
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      headers: securityHeaders,
    },
    preview: {
      headers: securityHeaders,
    },
  },
});
