// Static page generator for Lunestia content pages.
// Run with: npm run generate  (or: node scripts/generate.mjs)
// Emits plain static HTML into /signes, /compatibilite, /guide + hub pages,
// and regenerates sitemap.xml. No deploy-time build — Vercel serves the output as-is.

import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { renderSign, renderCompat, renderGuide, renderHub, renderCompatMenu } from './lib/render.mjs';
import { SITE } from './lib/layout.mjs';
import { signs, GLYPH, NAME } from './data/signs.mjs';
import { compat, SIGN_ORDER, canonicalSlug, aspectInfo } from './data/compat.mjs';
import { guides } from './data/guides.mjs';
import { SPARKLE_SVG, HEART_SVG } from './lib/icons.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

function write(rel, html) {
  const abs = resolve(ROOT, rel);
  mkdirSync(dirname(abs), { recursive: true });
  writeFileSync(abs, html, 'utf8');
  console.log('  ✓', rel);
}

const ELEMENT_SHORT = (s) => `${s.element} · ${s.dates}`;

// --- Sign pages ---
console.log('Signes :');
for (const s of signs) write(`signes/${s.slug}.html`, renderSign({ ...s, glyph: GLYPH[s.slug] }));

// --- Compatibility pages ---
console.log('Compatibilités :');
for (const c of compat) write(`compatibilite/${c.slug}.html`, renderCompat(c));

// --- Per-sign compatibility menus (/compatibilite/<signe>) ---
// Menus list only couples that already have a page, so they never link to a 404.
const existingCompat = new Set(compat.map((c) => c.slug));
console.log('Menus compatibilité par signe :');
for (const s of SIGN_ORDER) {
  const cards = SIGN_ORDER
    .map((p) => ({ p, slug: canonicalSlug(s, p) }))
    .filter(({ slug }) => existingCompat.has(slug))
    .map(({ p, slug }) => ({
      href: `/compatibilite/${slug}`,
      glyph: GLYPH[p],
      name: p === s ? `${NAME[s]} & ${NAME[s]}` : `${NAME[s]} & ${NAME[p]}`,
      meta: aspectInfo(s, p),
    }));
  write(`compatibilite/${s}.html`, renderCompatMenu({
    slug: s, name: NAME[s], glyph: GLYPH[s],
    metaTitle: `Compatibilité ${NAME[s]} : tous les couples du zodiaque | Lunestia`,
    metaDesc: `Compatibilité amoureuse du ${NAME[s]} avec les 12 signes du zodiaque. Découvrez la dynamique de chaque couple, analysée par l'aspect astrologique réel.`,
    h1Html: `Compatibilité <em>${NAME[s]}</em> avec les 12 signes`,
    leadHtml: `Avec quel signe le ${NAME[s]} s'accorde-t-il vraiment&nbsp;? Voici la compatibilité du ${NAME[s]} avec chacun des douze signes, lue à travers l'aspect zodiacal réel — bien plus juste qu'un simple verdict.`,
    cards,
    ctaH2: `La vraie compatibilité du ${NAME[s]} va plus loin`,
    ctaP: `Ces portraits comparent les signes solaires. Pour votre compatibilité réelle, la synastrie confronte vos deux thèmes natals entiers. Calculez-la dans Lunestia avec Lyra.`,
    related: [
      { href: `/signes/${s}`, glyph: GLYPH[s], label: 'Le signe', name: NAME[s] },
      { href: '/compatibilite', glyph: HEART_SVG, label: 'Explorer', name: 'Tous les signes' },
      { href: '/guide/theme-natal', glyph: SPARKLE_SVG, label: 'Guide', name: 'La synastrie' },
    ],
  }));
}

// --- Guide pages ---
console.log('Guides :');
for (const g of guides) write(`guide/${g.slug}.html`, renderGuide(g));

// --- Hub: /signes ---
write('signes.html', renderHub({
  slug: 'signes', name: 'Signes',
  metaTitle: 'Les 12 signes du zodiaque : portraits astrologiques | Lunestia',
  metaDesc: "Découvrez les 12 signes du zodiaque comme vous ne les avez jamais lus : archétype, ombre, amour et évolution. Des portraits astrologiques profonds, loin des clichés.",
  h1Html: 'Les 12 signes du <em>zodiaque</em>',
  leadHtml: "Chaque signe est un archétype, une manière d'habiter le monde. Voici douze portraits qui vont au-delà des clichés — la psychologie profonde derrière chaque énergie, son ombre et son chemin de lumière.",
  cards: signs.map((s) => ({ href: `/signes/${s.slug}`, glyph: GLYPH[s.slug], name: s.name, meta: ELEMENT_SHORT(s) })),
  ctaH2: "Et vous, quel est votre vrai portrait astral ?",
  ctaP: "Votre signe solaire n'est qu'une pièce du puzzle. Découvrez votre thème natal complet — Lune, Ascendant, maisons — dans Lunestia, et laissez Lyra vous lire au degré près.",
}));

// --- Hub: /compatibilite ---
write('compatibilite.html', renderHub({
  slug: 'compatibilite', name: 'Compatibilité',
  metaTitle: 'Compatibilité amoureuse des signes du zodiaque | Lunestia',
  metaDesc: "La compatibilité amoureuse entre signes, analysée par l'aspect zodiacal réel — pas un score sur 10. Découvrez la dynamique profonde de chaque couple astrologique.",
  h1Html: 'Compatibilité <em>amoureuse</em> des signes',
  leadHtml: "Oubliez les scores sur dix. Chaque couple raconte une dynamique unique, lue à travers l'aspect réel qui relie les deux signes. Choisissez un signe pour voir sa compatibilité avec les douze autres.",
  cards: SIGN_ORDER.map((s) => ({ href: `/compatibilite/${s}`, glyph: GLYPH[s], name: NAME[s], meta: 'Ses 12 compatibilités' })),
  ctaH2: "Votre vraie compatibilité va plus loin que les signes solaires",
  ctaP: "La synastrie compare vos deux thèmes natals entiers, pas seulement vos signes du Soleil. Calculez votre compatibilité réelle dans Lunestia avec Lyra.",
}));

// --- Hub: /guide ---
write('guide.html', renderHub({
  slug: 'guide', name: 'Guides',
  metaTitle: 'Guides d\'astrologie : comprendre votre thème natal | Lunestia',
  metaDesc: "Ascendant, thème natal, maisons, planètes, éléments, Mercure rétrograde : nos guides d'astrologie expliquent les concepts essentiels pour lire votre carte du ciel.",
  h1Html: 'Comprendre votre <em>ciel</em>',
  leadHtml: "L'astrologie est un langage. Ces guides en expliquent la grammaire — l'ascendant, les maisons, les éléments, les transits — pour que vous puissiez lire votre propre thème natal avec profondeur.",
  cards: guides.map((g) => ({ href: `/guide/${g.slug}`, glyph: g.glyph, name: g.name, meta: g.hubMeta })),
  ctaH2: "Mettez ces concepts en pratique sur votre thème",
  ctaP: "Rien ne vaut la lecture de votre propre carte du ciel. Découvrez votre thème natal complet dans Lunestia et posez vos questions à Lyra, votre astrologue IA.",
}));

// --- Sitemap ---
const today = '2026-06-11';
const urls = [
  { loc: `${SITE}/`, pri: '1.0', freq: 'monthly' },
  { loc: `${SITE}/signes`, pri: '0.8', freq: 'monthly' },
  { loc: `${SITE}/compatibilite`, pri: '0.8', freq: 'monthly' },
  { loc: `${SITE}/guide`, pri: '0.8', freq: 'monthly' },
  ...signs.map((s) => ({ loc: `${SITE}/signes/${s.slug}`, pri: '0.7', freq: 'monthly' })),
  ...SIGN_ORDER.map((s) => ({ loc: `${SITE}/compatibilite/${s}`, pri: '0.7', freq: 'monthly' })),
  ...compat.map((c) => ({ loc: `${SITE}/compatibilite/${c.slug}`, pri: '0.6', freq: 'monthly' })),
  ...guides.map((g) => ({ loc: `${SITE}/guide/${g.slug}`, pri: '0.6', freq: 'monthly' })),
  { loc: `${SITE}/mentions-legales`, pri: '0.3', freq: 'yearly' },
  { loc: `${SITE}/confidentialite`, pri: '0.3', freq: 'yearly' },
  { loc: `${SITE}/cgu`, pri: '0.3', freq: 'yearly' },
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.freq}</changefreq>
    <priority>${u.pri}</priority>
  </url>`).join('\n')}
</urlset>
`;
write('sitemap.xml', sitemap);

console.log(`\nDone — ${signs.length} signes, ${compat.length} compatibilités, ${guides.length} guides, ${urls.length} URLs au sitemap.`);
