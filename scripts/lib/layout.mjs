// Shared layout helpers for Lunestia static page generation.
// Output is 100% static HTML — this script runs locally, not at deploy time.

export const SITE = 'https://lunestia.app';

const FONTS = `<link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,400&family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet" />`;

const FAVICONS = `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />`;

const STAR = `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" /></svg>`;

/** Strip HTML tags, decode the few entities we use, collapse whitespace —
 *  for JSON-LD plain-text values. */
export function stripTags(html) {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&laquo;/g, '«')
    .replace(/&raquo;/g, '»')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Escape a string for safe embedding inside a JSON-LD string value. */
export function jsonText(html) {
  return stripTags(html).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function nav() {
  return `<nav class="nav" aria-label="Navigation principale">
    <div class="container nav-inner">
      <a href="/" class="logo" aria-label="Lunestia — Accueil">${STAR}Lunestia</a>
      <div class="nav-links" id="nav-links" role="list">
        <a href="/signes" class="nav-link" role="listitem">Signes</a>
        <a href="/compatibilite" class="nav-link" role="listitem">Compatibilité</a>
        <a href="/guide" class="nav-link" role="listitem">Guides</a>
        <a href="/#pricing" class="nav-link" role="listitem">Tarifs</a>
      </div>
      <a href="/#download" class="btn btn-primary">Télécharger</a>
      <button class="nav-hamburger" id="nav-toggle" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="nav-links" type="button">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
      </button>
    </div>
  </nav>`;
}

function footer() {
  return `<footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <a href="/" class="logo" aria-label="Lunestia — Accueil">${STAR}Lunestia</a>
          <p class="footer-about">L'astrologie personnelle, calculée au degré près. Pour les curieux du ciel comme pour les habitués des thèmes natals.</p>
        </div>
        <nav aria-label="Explorer">
          <h4 class="footer-col-title">Explorer</h4>
          <ul class="footer-col-list">
            <li><a href="/signes" class="footer-link">Les 12 signes</a></li>
            <li><a href="/compatibilite" class="footer-link">Compatibilités</a></li>
            <li><a href="/guide" class="footer-link">Guides astro</a></li>
            <li><a href="/#features" class="footer-link">Fonctionnalités</a></li>
          </ul>
        </nav>
        <nav aria-label="Ressources">
          <h4 class="footer-col-title">Ressources</h4>
          <ul class="footer-col-list">
            <li><a href="/guide/theme-natal" class="footer-link">Le thème natal</a></li>
            <li><a href="/guide/ascendant" class="footer-link">L'ascendant</a></li>
            <li><a href="/guide/elements" class="footer-link">Les éléments</a></li>
            <li><a href="/#pricing" class="footer-link">Tarifs</a></li>
          </ul>
        </nav>
        <nav aria-label="Informations légales">
          <h4 class="footer-col-title">Entreprise</h4>
          <ul class="footer-col-list">
            <li><a href="/#faq" class="footer-link">FAQ</a></li>
            <li><a href="/mentions-legales" class="footer-link">Mentions légales</a></li>
            <li><a href="/confidentialite" class="footer-link">Confidentialité</a></li>
            <li><a href="/cgu" class="footer-link">CGU</a></li>
            <li><a href="/aide" class="footer-link">Aide &amp; Contact</a></li>
          </ul>
        </nav>
      </div>
      <div class="footer-bottom">
        <div>© 2026 Lunestia · Fait avec attention sous les étoiles.</div>
        <div>Paris · Lisbonne</div>
      </div>
    </div>
  </footer>`;
}

/** Breadcrumb trail. items: [{name, href?}] — last item has no href. */
export function breadcrumb(items) {
  const parts = items.map((it, i) => {
    const last = i === items.length - 1;
    const node = last || !it.href
      ? `<span class="breadcrumb-current">${it.name}</span>`
      : `<a href="${it.href}">${it.name}</a>`;
    return node;
  });
  return `<nav class="breadcrumb" aria-label="Fil d'Ariane">\n          ${parts.join('<span aria-hidden="true">/</span>')}\n        </nav>`;
}

/** BreadcrumbList JSON-LD from the same items. */
export function breadcrumbLd(items) {
  const el = items.map((it, i) => {
    const base = { '@type': 'ListItem', position: i + 1, name: it.name };
    if (it.href) base.item = it.href.startsWith('http') ? it.href : SITE + it.href;
    return base;
  });
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: el };
}

export const websiteLd = { '@context': 'https://schema.org', '@type': 'WebSite', name: 'Lunestia', url: SITE + '/', description: 'Astrologie personnalisée — thème natal, compatibilité et horoscope quotidien', inLanguage: 'fr' };
export const orgLd = { '@context': 'https://schema.org', '@type': 'Organization', name: 'Lunestia', url: SITE + '/', logo: SITE + '/favicon.svg' };

export function articleLd({ headline, description, datePublished = '2026-06-11', dateModified = '2026-06-11' }) {
  return {
    '@context': 'https://schema.org', '@type': 'Article', headline, description,
    image: SITE + '/og-image.jpg',
    author: { '@type': 'Organization', name: 'Lunestia' },
    publisher: { '@type': 'Organization', name: 'Lunestia', logo: { '@type': 'ImageObject', url: SITE + '/favicon.svg' } },
    datePublished, dateModified, inLanguage: 'fr',
  };
}

export function faqLd(faq) {
  return {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: stripTags(f.q), acceptedAnswer: { '@type': 'Answer', text: stripTags(f.a) } })),
  };
}

/** Render the FAQ <details> block (first item open). */
export function faqBlock(faq) {
  const items = faq.map((f, i) => `            <details class="faq-item"${i === 0 ? ' open' : ''}>
              <summary>${f.q}</summary>
              <p class="faq-answer">${f.a}</p>
            </details>`).join('\n');
  return `          <div class="article-faq">\n${items}\n          </div>`;
}

/** Related cards. cards: [{href, glyph, label, name}] */
export function relatedBlock(title, cards) {
  const inner = cards.map((c) => `              <a href="${c.href}" class="related-card"><span class="related-card-glyph" aria-hidden="true">${c.glyph}</span><span class="related-card-text"><span class="related-card-label">${c.label}</span><span class="related-card-name">${c.name}</span></span></a>`).join('\n');
  return `          <div class="related">
            <h3 class="related-title">${title}</h3>
            <div class="related-grid">
${inner}
            </div>
          </div>`;
}

export function ctaBlock(h2, p, btn = 'Découvrir mon thème natal') {
  return `          <div class="article-cta">
            <h2>${h2}</h2>
            <p>${p}</p>
            <a href="/#download" class="btn btn-primary">${btn}</a>
          </div>`;
}

/**
 * Full page shell.
 * @param {object} o
 * @param {string} o.title  <title> + og:title
 * @param {string} o.description meta description + og/twitter
 * @param {string} o.ogDescription optional shorter OG description
 * @param {string} o.canonical absolute URL
 * @param {string} o.ogType website|article
 * @param {object[]} o.jsonLd array of JSON-LD objects
 * @param {string} o.main inner HTML of <main>
 * @param {string} o.mainClass class on <main>
 */
export function page(o) {
  const ld = JSON.stringify(o.jsonLd, null, 2);
  const ogDesc = o.ogDescription || o.description;
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- SEO -->
  <title>${o.title}</title>
  <meta name="description" content="${o.description}" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="${o.canonical}" />

  <!-- Open Graph -->
  <meta property="og:type" content="${o.ogType || 'website'}" />
  <meta property="og:url" content="${o.canonical}" />
  <meta property="og:title" content="${o.title}" />
  <meta property="og:description" content="${ogDesc}" />
  <meta property="og:image" content="${SITE}/og-image.jpg" />
  <meta property="og:locale" content="fr_FR" />
  <meta property="og:site_name" content="Lunestia" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${o.title}" />
  <meta name="twitter:description" content="${ogDesc}" />
  <meta name="twitter:image" content="${SITE}/og-image.jpg" />

  <!-- Favicon -->
  ${FAVICONS}

  <!-- Fonts -->
  ${FONTS}

  <!-- Styles -->
  <link rel="stylesheet" href="/css/style.css" />
  <noscript><style>.animate-in { opacity: 1 !important; transform: none !important; }</style></noscript>

  <!-- Structured Data -->
  <script type="application/ld+json">
${ld}
  </script>
</head>
<body>

  <a href="#main-content" class="skip-link">Aller au contenu principal</a>

  ${nav()}

  <main id="main-content"${o.mainClass ? ` class="${o.mainClass}"` : ''}>
${o.main}
  </main>

  ${footer()}

  <script src="/js/main.js" defer></script>
</body>
</html>
`;
}
