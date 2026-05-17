# RhéaEspoir

Site vitrine moderne de l'association RhéaEspoir, reconstruite en Next.js App Router pour un déploiement Vercel.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Site statique avec contenus centralisés dans `src/lib/data.ts`

## Pages

- Accueil
- Qui sommes-nous
- Actualités et articles SEO
- Événements
- Forum en lecture seule
- Contact

## SEO

Le projet inclut :

- métadonnées par page
- Open Graph et Twitter cards
- sitemap dynamique
- robots.txt
- JSON-LD Organization, WebSite, Article, Event et Breadcrumb
- images et textes alternatifs pour les articles

## Développement

```bash
npm install
npm run dev
```

## Vérification

```bash
npm run lint
npm run build
```

## Déploiement

Le projet est prêt pour Vercel. Importer le dépôt GitHub dans Vercel, puis lancer le déploiement avec les paramètres Next.js par défaut.
