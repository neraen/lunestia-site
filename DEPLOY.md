# Déploiement sur Vercel

## Prérequis

- Un compte [Vercel](https://vercel.com)
- La CLI Vercel (optionnel mais pratique) : `npm i -g vercel`
- Un repo Git (GitHub, GitLab ou Bitbucket)

---

## Option 1 — Via GitHub (recommandé, deploy automatique)

### 1. Pousser le projet sur GitHub

```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/TON_USER/lunestia-site.git
git push -u origin main
```

### 2. Importer sur Vercel

1. Va sur [vercel.com/new](https://vercel.com/new)
2. Clique **"Import Git Repository"**
3. Sélectionne ton repo `lunestia-site`
4. Vercel détecte automatiquement Vite — vérifie les settings :
   - **Framework Preset** : `Vite`
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
   - **Install Command** : `npm install`
5. Clique **Deploy**

Ton site est en ligne en ~1 minute.

### 3. Domaine personnalisé

1. Dans le dashboard Vercel → ton projet → **Settings > Domains**
2. Ajoute `lunestia.app`
3. Vercel te donne les enregistrements DNS à configurer chez ton registrar :
   - Type `A` → `76.76.21.21`
   - Type `CNAME` → `cname.vercel-dns.com` (pour `www`)
4. Une fois propagés, le SSL est automatique (Let's Encrypt)

**Chaque `git push` sur `main` déclenche un redéploiement automatique.**

---

## Option 2 — Via la CLI Vercel

```bash
# Login
vercel login

# Deploy depuis la racine du projet
vercel

# Répondre aux questions :
# Set up and deploy? → Y
# Which scope? → ton compte
# Link to existing project? → N
# Project name? → lunestia-site
# Directory? → ./
# Override settings? → N

# Pour la production (pas juste un preview)
vercel --prod
```

---

## Vérifications avant deploy

```bash
# S'assurer que le build passe sans erreur
npm run build

# Vérifier le rendu du build localement
npm run preview
```

---

## Variables d'environnement

Ce site est 100% statique — aucune variable d'environnement n'est nécessaire pour le moment.

Si tu en ajoutes plus tard (clé API, etc.) :
- Vercel Dashboard → **Settings > Environment Variables**
- Ou via CLI : `vercel env add NOM_VARIABLE`

---

## Fichiers Vercel utiles (optionnels)

Si tu as besoin de redirections ou headers custom, crée un `vercel.json` à la racine :

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" }
      ]
    }
  ]
}
```
