// SVG icon library — clean stroke-based astrological glyphs.
// All use viewBox="0 0 24 24", stroke="currentColor", fill="none" (except SPARKLE which is filled).
// stroke-width="1.5" renders well at 20–64 px.

const A = `stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"`;
const svg = (body, extra = '') =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" ${A}${extra}>${body}</svg>`;

// ── Zodiac signs ──────────────────────────────────────────────────────────────

export const ZODIAC_SVG = {
  // Bélier ♈ — ram horns: two outward-bulging arcs meeting at a centre stem
  belier: svg(
    `<path d="M12 20v-7"/><path d="M5 4C2 8 2 14 12 13"/><path d="M19 4C22 8 22 14 12 13"/>`
  ),

  // Taureau ♉ — circle + upward horn arc
  taureau: svg(
    `<circle cx="12" cy="15" r="5"/><path d="M7 15C7 9 17 9 17 15"/>`
  ),

  // Gémeaux ♊ — twin pillars with outward-curving caps
  gemeaux: svg(
    `<line x1="9" y1="7" x2="9" y2="17"/><line x1="15" y1="7" x2="15" y2="17"/>` +
    `<path d="M5 7C5 4 19 4 19 7"/><path d="M5 17C5 20 19 20 19 17"/>`
  ),

  // Cancer ♋ — two opposing circles + S-curve (yin-yang / 69)
  cancer: svg(
    `<circle cx="16" cy="8" r="2.5"/><circle cx="8" cy="16" r="2.5"/>` +
    `<path d="M18.5 8C18.5 15 5.5 9 5.5 16"/>`
  ),

  // Lion ♌ — circle + curling spiral arm
  lion: svg(
    `<circle cx="9" cy="10" r="4.5"/>` +
    `<path d="M13.5 10C17 10 20 12.5 20 15.5A4.5 4.5 0 0 1 11 15.5C11 14 12.5 13 13.5 13"/>`
  ),

  // Vierge ♍ — M-arch + right extension + cross
  vierge: svg(
    `<path d="M5 5v10a3.5 3.5 0 0 0 7 0V5"/>` +
    `<path d="M12 5v10a3.5 3.5 0 0 0 5 3"/>` +
    `<line x1="17" y1="18" x2="17" y2="22"/>` +
    `<line x1="15" y1="20" x2="19" y2="20"/>`
  ),

  // Balance ♎ — scales: semicircle above horizontal bar
  balance: svg(
    `<path d="M7 14a5 5 0 0 0 10 0"/>` +
    `<line x1="4" y1="18" x2="20" y2="18"/>` +
    `<line x1="12" y1="9" x2="12" y2="14"/>`
  ),

  // Scorpion ♏ — three prongs + downward arcs + right arrow
  scorpion: svg(
    `<line x1="5" y1="5" x2="5" y2="14"/>` +
    `<line x1="10" y1="5" x2="10" y2="14"/>` +
    `<line x1="15" y1="5" x2="15" y2="14"/>` +
    `<path d="M5 14a2.5 2.5 0 0 1 5 0"/>` +
    `<path d="M10 14a2.5 2.5 0 0 1 5 0"/>` +
    `<path d="M15 14l4 3-4 3"/>`
  ),

  // Sagittaire ♐ — diagonal arrow with L-head at top-right
  sagittaire: svg(
    `<line x1="5" y1="19" x2="19" y2="5"/>` +
    `<polyline points="12,5 19,5 19,12"/>`
  ),

  // Capricorne ♑ — Aries-like left horn + right horn closes into a loop
  capricorne: svg(
    `<path d="M12 20v-7"/><path d="M5 4C2 8 2 14 12 13"/>` +
    `<path d="M19 4C22 8 20 14 14 14a4 4 0 1 0 0-8"/>`
  ),

  // Verseau ♒ — two wavy lines
  verseau: svg(
    `<path d="M4 9c1.5-2.5 3-2.5 4.5 0s3 2.5 4.5 0 3-2.5 4.5 0 3 2.5 4.5 0"/>` +
    `<path d="M4 15c1.5-2.5 3-2.5 4.5 0s3 2.5 4.5 0 3-2.5 4.5 0 3 2.5 4.5 0"/>`
  ),

  // Poissons ♓ — two opposing arcs + centre bar
  poissons: svg(
    `<path d="M4 12C4 7 8 4 12 4C16 4 20 7 20 12"/>` +
    `<path d="M4 12C4 17 8 20 12 20C16 20 20 17 20 12"/>` +
    `<line x1="8" y1="12" x2="16" y2="12"/>`
  ),
};

// ── Planets ───────────────────────────────────────────────────────────────────

export const PLANET_SVG = {
  // Soleil ☉ — circle with radiating lines
  soleil: svg(
    `<circle cx="12" cy="12" r="4"/>` +
    `<path d="M12 2v3M12 19v3M2 12h3M19 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M16.3 7.7l2.1-2.1M5.6 18.4l2.1-2.1"/>`
  ),

  // Lune ☽ — crescent
  lune: svg(
    `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`
  ),

  // Mercure ☿ — circle + cross below + small arc above
  mercure: svg(
    `<circle cx="12" cy="10" r="4"/>` +
    `<line x1="12" y1="14" x2="12" y2="19"/>` +
    `<line x1="9" y1="19" x2="15" y2="19"/>` +
    `<path d="M8.5 8a4 4 0 0 0 7 0"/>`
  ),

  // Vénus ♀ — circle + cross below
  venus: svg(
    `<circle cx="12" cy="8" r="5"/>` +
    `<line x1="12" y1="13" x2="12" y2="19"/>` +
    `<line x1="9" y1="16" x2="15" y2="16"/>`
  ),

  // Mars ♂ — circle + arrow upper-right
  mars: svg(
    `<circle cx="10" cy="14" r="5"/>` +
    `<line x1="14" y1="10" x2="20" y2="4"/>` +
    `<polyline points="16,4 20,4 20,8"/>`
  ),

  // Jupiter ♃ — stylised 4-shape
  jupiter: svg(
    `<path d="M17 5C17 5 9 10 9 16s4 4 4 4"/>` +
    `<line x1="4" y1="13" x2="20" y2="13"/>` +
    `<line x1="13" y1="9" x2="13" y2="22"/>`
  ),

  // Saturne ♄ — h-shape with cross
  saturne: svg(
    `<path d="M13 4v13c0 2-1.5 3.5-4 3.5"/>` +
    `<line x1="9" y1="10" x2="17" y2="10"/>` +
    `<line x1="17" y1="4" x2="17" y2="10"/>`
  ),

  // Neptune ♆ — trident
  neptune: svg(
    `<line x1="12" y1="3" x2="12" y2="20"/>` +
    `<line x1="8" y1="20" x2="16" y2="20"/>` +
    `<path d="M5 8l7 5 7-5"/>` +
    `<line x1="5" y1="4" x2="5" y2="8"/>` +
    `<line x1="19" y1="4" x2="19" y2="8"/>`
  ),

  // Uranus ♅ — H with circle
  uranus: svg(
    `<line x1="7" y1="4" x2="7" y2="14"/>` +
    `<line x1="17" y1="4" x2="17" y2="14"/>` +
    `<line x1="7" y1="9" x2="17" y2="9"/>` +
    `<circle cx="12" cy="18" r="3"/>`
  ),
};

// ── Special glyphs ────────────────────────────────────────────────────────────

// ✦ Sparkle — filled 4-pointed star (for guide cards)
export const SPARKLE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">` +
  `<path d="M12 2L13.8 10.2 22 12 13.8 13.8 12 22 10.2 13.8 2 12 10.2 10.2Z"/></svg>`;

// ♥ Heart — for compatibility cards
export const HEART_SVG = svg(
  `<path d="M12 21C12 21 4 15 4 9a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 6-8 12-8 12z"/>`
);
