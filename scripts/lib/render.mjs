// Page renderers built on top of layout.mjs primitives.
import {
  SITE, page, breadcrumb, breadcrumbLd, websiteLd, orgLd, articleLd, faqLd,
  faqBlock, relatedBlock, ctaBlock,
} from './layout.mjs';

function paras(arr) {
  return arr.map((t) => `          <p>${t}</p>`).join('\n');
}

function sectionsHtml(sections) {
  return sections.map((s) => {
    const body = s.html != null ? s.html : paras(s.paras);
    if (s.h3) return `          <h3>${s.h3}</h3>\n${body}`;
    if (!s.h2) return body;
    return `          <h2>${s.h2}</h2>\n${body}`;
  }).join('\n');
}

function metaStrip(items) {
  const cells = items.map((i) => `            <div class="sign-meta-item" role="listitem"><span class="sign-meta-label">${i.label}</span><span class="sign-meta-value">${i.value}</span></div>`).join('\n');
  return `          <div class="sign-meta" role="list">\n${cells}\n          </div>`;
}

/** Sign page (Article). */
export function renderSign(s) {
  const url = `${SITE}/signes/${s.slug}`;
  const crumb = [
    { name: 'Accueil', href: '/' },
    { name: 'Signes', href: '/signes' },
    { name: s.name },
  ];
  const main = `    <div class="container">
      <article class="article-wrap">

        ${breadcrumb(crumb)}

        <header class="article-header animate-in">
          <div class="article-glyph" aria-hidden="true">${s.glyph}</div>
          <h1 class="article-title">${s.h1Html}</h1>
          <p class="article-lead">${s.leadHtml}</p>
${metaStrip([
    { label: 'Élément', value: s.element },
    { label: 'Mode', value: s.mode },
    { label: 'Planète', value: s.planet },
    { label: 'Dates', value: s.dates },
  ])}
        </header>

        <div class="article-body">
${sectionsHtml(s.sections)}

          <hr class="article-divider" />

          <h2>Questions fréquentes sur ${s.faqHeadingName || s.name}</h2>
${faqBlock(s.faq)}

${ctaBlock(s.ctaH2, s.ctaP)}

${relatedBlock('À explorer ensuite', s.related)}

        </div>
      </article>
    </div>`;

  return page({
    title: s.metaTitle,
    description: s.metaDesc,
    ogDescription: s.ogDesc,
    canonical: url,
    ogType: 'article',
    mainClass: 'article-shell',
    jsonLd: [
      websiteLd, orgLd,
      articleLd({ headline: s.articleHeadline, description: s.ogDesc }),
      breadcrumbLd(crumb),
      faqLd(s.faq),
    ],
    main,
  });
}

/** Compatibility page (Article). */
export function renderCompat(c) {
  const url = `${SITE}/compatibilite/${c.slug}`;
  const crumb = [
    { name: 'Accueil', href: '/' },
    { name: 'Compatibilité', href: '/compatibilite' },
    { name: c.pairName },
  ];
  const main = `    <div class="container">
      <article class="article-wrap">

        ${breadcrumb(crumb)}

        <header class="article-header animate-in">
          <div class="article-glyph" aria-hidden="true">${c.glyphs}</div>
          <h1 class="article-title">${c.h1Html}</h1>
          <p class="article-lead">${c.leadHtml}</p>
${metaStrip([
    { label: 'Aspect', value: c.aspect },
    { label: c.sign1, value: c.el1 },
    { label: c.sign2, value: c.el2 },
  ])}
        </header>

        <div class="article-body">
${sectionsHtml(c.sections)}

          <hr class="article-divider" />

          <h2>Questions fréquentes sur le couple ${c.sign1}–${c.sign2}</h2>
${faqBlock(c.faq)}

${ctaBlock(c.ctaH2, c.ctaP, 'Calculer notre compatibilité')}

${relatedBlock('À explorer ensuite', c.related)}

        </div>
      </article>
    </div>`;

  return page({
    title: c.metaTitle,
    description: c.metaDesc,
    ogDescription: c.ogDesc,
    canonical: url,
    ogType: 'article',
    mainClass: 'article-shell',
    jsonLd: [
      websiteLd, orgLd,
      articleLd({ headline: c.articleHeadline, description: c.ogDesc }),
      breadcrumbLd(crumb),
      faqLd(c.faq),
    ],
    main,
  });
}

/** Guide page (Article). */
export function renderGuide(g) {
  const url = `${SITE}/guide/${g.slug}`;
  const crumb = [
    { name: 'Accueil', href: '/' },
    { name: 'Guides', href: '/guide' },
    { name: g.name },
  ];
  const main = `    <div class="container">
      <article class="article-wrap">

        ${breadcrumb(crumb)}

        <header class="article-header animate-in">
          <div class="article-glyph" aria-hidden="true">${g.glyph}</div>
          <h1 class="article-title">${g.h1Html}</h1>
          <p class="article-lead">${g.leadHtml}</p>
        </header>

        <div class="article-body">
${sectionsHtml(g.sections)}

          <hr class="article-divider" />

          <h2>Questions fréquentes sur ${g.faqHeadingName || g.name}</h2>
${faqBlock(g.faq)}

${ctaBlock(g.ctaH2, g.ctaP)}

${relatedBlock('À explorer ensuite', g.related)}

        </div>
      </article>
    </div>`;

  return page({
    title: g.metaTitle,
    description: g.metaDesc,
    ogDescription: g.ogDesc,
    canonical: url,
    ogType: 'article',
    mainClass: 'article-shell',
    jsonLd: [
      websiteLd, orgLd,
      articleLd({ headline: g.articleHeadline, description: g.ogDesc }),
      breadcrumbLd(crumb),
      faqLd(g.faq),
    ],
    main,
  });
}

/** Per-sign compatibility menu: lists the sign's couples (one card per partner). */
export function renderCompatMenu(m) {
  const url = `${SITE}/compatibilite/${m.slug}`;
  const crumb = [
    { name: 'Accueil', href: '/' },
    { name: 'Compatibilité', href: '/compatibilite' },
    { name: m.name },
  ];
  const cards = m.cards.map((c) => `              <a href="${c.href}" class="hub-card">
                <span class="hub-card-glyph" aria-hidden="true">${c.glyph}</span>
                <span class="hub-card-name">${c.name}</span>
                <span class="hub-card-meta">${c.meta}</span>
              </a>`).join('\n');
  const main = `    <div class="container">
      <article class="article-wrap">

        ${breadcrumb(crumb)}

        <header class="article-header animate-in">
          <div class="article-glyph" aria-hidden="true">${m.glyph}</div>
          <h1 class="article-title">${m.h1Html}</h1>
          <p class="article-lead">${m.leadHtml}</p>
        </header>

        <div class="hub-grid">
${cards}
        </div>

        <div class="article-body">
${ctaBlock(m.ctaH2, m.ctaP, 'Calculer notre compatibilité')}

${relatedBlock('Le signe en détail', m.related)}
        </div>
      </article>
    </div>`;

  return page({
    title: m.metaTitle,
    description: m.metaDesc,
    canonical: url,
    ogType: 'website',
    mainClass: 'article-shell',
    jsonLd: [websiteLd, orgLd, breadcrumbLd(crumb)],
    main,
  });
}

/** Hub / listing page. */
export function renderHub(h) {
  const url = `${SITE}/${h.slug}`;
  const crumb = [
    { name: 'Accueil', href: '/' },
    { name: h.name },
  ];
  const cards = h.cards.map((c) => `              <a href="${c.href}" class="hub-card">
                <span class="hub-card-glyph" aria-hidden="true">${c.glyph}</span>
                <span class="hub-card-name">${c.name}</span>
                <span class="hub-card-meta">${c.meta}</span>
              </a>`).join('\n');
  const main = `    <div class="container">
      <article class="article-wrap">

        ${breadcrumb(crumb)}

        <header class="article-header animate-in">
          <h1 class="article-title">${h.h1Html}</h1>
          <p class="article-lead">${h.leadHtml}</p>
        </header>

        <div class="hub-grid">
${cards}
        </div>

        <div class="article-body">
${ctaBlock(h.ctaH2, h.ctaP)}
        </div>
      </article>
    </div>`;

  return page({
    title: h.metaTitle,
    description: h.metaDesc,
    canonical: url,
    ogType: 'website',
    mainClass: 'article-shell',
    jsonLd: [websiteLd, orgLd, breadcrumbLd(crumb)],
    main,
  });
}
