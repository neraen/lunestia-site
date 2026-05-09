# CLAUDE.md — Lunestia Landing Page

## Projet

Site vitrine pour **Lunestia**, une application mobile d'astrologie personnalisée propulsée par l'IA.
Le site sera déployé sur **Vercel** via un repo Git.
Domaine : `lunestia.app`

## Stack technique

- **React + Vite** (template React TypeScript)
- **CSS Modules** ou **Tailwind CSS** (selon le design de référence)
- **Aucun backend** — site 100% statique
- **Déploiement** : Vercel (static build)

## Principes de développement

### Architecture des composants

- **Chaque composant = 1 fichier** avec son propre fichier de style (CSS Module) ou classes Tailwind
- **Pas de logique métier** dans les composants : c'est un site statique, tout est déclaratif
- **Props typées** avec TypeScript pour chaque composant
- **Composants réutilisables** : Button, FeatureCard, Section, Badge ne doivent pas contenir de contenu en dur
- **Composition over inheritance** : les sections utilisent les composants UI, pas l'inverse
- **Pas de state management** (Redux, Context, etc.) — inutile pour un site vitrine

### Qualité du code

- **TypeScript strict** : `strict: true` dans tsconfig
- **Aucun `any`**
- **Nommage clair** : composants en PascalCase, fichiers en PascalCase, hooks en camelCase
- **Pas de code mort** : aucun composant, import ou style inutilisé
- **Pas de `console.log`** dans le code final

### Performance

- **Images optimisées** : WebP avec fallback, `loading="lazy"` sur tout ce qui est below the fold
- **Fonts** : preload les fonts critiques, `font-display: swap`
- **Code splitting** : pas nécessaire pour un one-pager, mais ne pas importer de librairies lourdes inutilement
- **SVG inline** pour les icônes (pas de icon font)
- **Pas de dépendance inutile** : si c'est faisable en CSS natif, pas de librairie

### Responsive Design

- **Mobile-first** : les styles de base sont pour mobile, les media queries ajoutent pour desktop
- **Breakpoints cohérents** :
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
- **Tester sur** : iPhone SE (petit), iPhone 14 Pro (moyen), iPad, Desktop
- **Pas de scroll horizontal** — jamais
- **Textes lisibles** : minimum 16px sur mobile pour le body text
- **Touch targets** : minimum 44x44px pour les éléments cliquables sur mobile

### Animations

- **Subtiles et purposeful** : animations au scroll pour révéler les sections (fade-in, slide-up)
- **CSS natif** préféré (`@keyframes`, `transition`, `animation`)
- **`prefers-reduced-motion`** : respecter les préférences utilisateur avec une media query
- **Pas d'animations bloquantes** : tout en `transform` et `opacity` pour rester sur le GPU
- **Intersection Observer** pour déclencher les animations au scroll

### Accessibilité (a11y)

- **HTML sémantique** : `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`
- **Alt text** sur toutes les images
- **Contraste** : ratio minimum 4.5:1 pour le texte
- **Focus visible** sur les éléments interactifs
- **`aria-label`** sur les liens d'icônes (App Store, réseaux sociaux)
- **Skip to content** link

### SEO

- **Meta tags** : title, description, Open Graph, Twitter Card
- **`<h1>` unique** sur la page
- **Hiérarchie des headings** respectée (h1 > h2 > h3, pas de saut)
- **`lang="fr"`** sur le `<html>`
- **Sitemap** et **robots.txt** générés au build
- **Structured data** (JSON-LD) : SoftwareApplication schema pour l'app

## Source de vérité

Le fichier `design-reference.html` est la **source unique de vérité** pour tout : design, textes, couleurs, layout, espacement, typographie.

Le travail consiste à :
1. Transformer ce HTML en un projet React + Vite propre
2. Découper intelligemment en composants réutilisables (identifier les patterns répétés : cartes, boutons, sections, etc.)
3. Extraire les styles en CSS Modules ou Tailwind selon ce qui colle le mieux au code existant
4. **Ne modifier aucun texte, aucune couleur, aucun spacing** — le rendu final doit être pixel perfect par rapport au HTML
5. Rendre responsive si ce n'est pas déjà le cas
6. Ajouter les animations au scroll
7. Optimiser les performances
8. Ajouter le SEO (meta tags, Open Graph, JSON-LD SoftwareApplication, sitemap, robots.txt)

## Commandes

```bash
npm run dev      # Dev server
npm run build    # Build production
npm run preview  # Preview du build
```

## Déploiement

Le site est déployé automatiquement sur Vercel via Git.
Le build command est `npm run build`, le output directory est `dist`.
