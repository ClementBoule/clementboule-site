# Stack technique & Architecture

## Stack

- **Framework** : Next.js 14.2.3 (App Router)
- **Langage** : TypeScript (97.9%)
- **Styling** : Tailwind CSS 3.3.x + PostCSS + Autoprefixer
- **React** : v18
- **Node types** : @types/node ^20

## Repo GitHub

- **URL** : https://github.com/ClementBoule/clementboule-site
- **Branche principale** : `main`
- **Visibilité** : Public
- **Commits** : 117 (au 16/04/2026)
- **Contributeur** : ClementBoule (seul)

## Structure du repo

```
clementboule-site/
├── app/
│   ├── mentions-legales/page.tsx
│   ├── politique-de-confidentialite/page.tsx
│   ├── test-disc/page.tsx
│   ├── apple-icon.tsx
│   ├── globals.css
│   ├── icon.tsx
│   ├── layout.tsx          ← Layout principal (meta, Google Search Console)
│   ├── opengraph-image.tsx
│   └── page.tsx            ← Page d'accueil
├── components/
│   ├── CV.tsx              ← Section parcours/expériences
│   ├── Contact.tsx         ← Formulaire de contact
│   ├── Footer.tsx
│   ├── Formations.tsx      ← Catalogue des formations
│   ├── Hero.tsx            ← Bloc d'en-tête principal
│   ├── LanguageContext.tsx  ← Gestion FR/EN (contexte React)
│   ├── Navbar.tsx          ← Navigation sticky
│   ├── ScrollReveal.tsx    ← Animations au scroll
│   └── TopClients.tsx      ← Carrousel logos clients
├── public/                 ← Assets statiques (images, manifest)
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Pages du site

| Route | Description | État |
|---|---|---|
| `/` | Page d'accueil (one-page : Hero, Formations, Clients, CV, Contact) | En ligne |
| `/test-disc` | Test DISC interactif | En ligne |
| `/mentions-legales` | Mentions légales | En ligne |
| `/politique-de-confidentialite` | Politique de confidentialité | En ligne |

## Sections de la page d'accueil

1. **Hero** — Présentation, CTA "Faire le test DISC", liens LinkedIn/Malt
2. **Formations** — 6 cartes : RH & Marque Employeur, Posture Pro, Prévention RPS, Stratégie d'Entreprise, Soft Skills, Spine'Up (Leadership Managérial)
3. **Clients** — Logos : EMA, Albert, ISCOM, EDA RH, IHEDREA, Apprentis, Sauvegarde, Daan
4. **CV/Parcours** — Expériences (Formateur indépendant, Co-fondateur Mantractif, Coach sportif Innsbruck) + Formation (ESSEC, Excellence Formation, VAE BPJEPS, MCI Innsbruck, Rennes SB)
5. **Contact** — Formulaire (nom, email, message) + email hello@clementboule.com
6. **Footer** — Liens légaux, email, copyright
