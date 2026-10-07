# Lakshmi Bhargavi — Portfolio

Production portfolio for Lakshmi Bhargavi, built with React, TypeScript, and Vite and configured for Netlify.

## Local development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm audit
```

## Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 22
- Environment variables: none

The deployment configuration and security headers live in `netlify.toml`.

## Content maintenance

- Portfolio content and case studies: `src/data/portfolio.ts`
- Downloadable résumé: `public/lakshmi-bhargavi-resume.pdf`
- SEO and structured data: `index.html`
- Global design system: `src/styles.css`

Replacing the résumé does not require code changes as long as the public filename remains `lakshmi-bhargavi-resume.pdf`.
