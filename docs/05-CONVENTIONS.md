# Conventions de travail

## Git

- **Branche principale** : main (déploiement auto sur Vercel)
- **Format de commit** : type: description courte en anglais
  - Exemples : fix:, feat:, refactor:, style:, docs:, chore:
- **Pas de branche de développement** identifiée pour l'instant (tout se fait sur main)

## Code

- **Langage** : TypeScript strict
- **Composants** : Functional components React (pas de classes)
- **Styling** : Tailwind CSS utility-first (pas de CSS modules, pas de styled-components)
- **Structure** :
  - app/ → Pages (App Router Next.js 14)
  - components/ → Composants réutilisables
  - public/ → Assets statiques

## Nommage

- **Fichiers composants** : PascalCase (ex: Hero.tsx, TopClients.tsx)
- **Fichiers pages** : page.tsx dans un dossier kebab-case (ex: app/test-disc/page.tsx)
- **Routes** : kebab-case en français (ex: /mentions-legales, /politique-de-confidentialite)

## Sécurité (rappel)

- Aucun service payant (API pay-per-use, abonnements) sans validation explicite de Clément
- Pas de secrets dans le code source (clés API dans les variables d'environnement Vercel)
- Conformité RGPD obligatoire pour tout traitement de données
