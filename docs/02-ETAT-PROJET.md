# État du projet — 16 avril 2026

## Résumé

Le site est **en ligne et fonctionnel** sur clementboule.fr depuis le 11 avril 2026. C'est un site vitrine one-page en Next.js 14 / TypeScript / Tailwind, déployé sur Vercel. Le site a accumulé 117 commits et 153 déploiements en 5 jours de développement intensif.

## Ce qui est fait

- Structure complète du site one-page (Hero → Formations → Clients → CV → Contact → Footer)
- 6 formations présentées en cartes interactives
- Section clients avec logos (8 entreprises/institutions)
- Section CV avec expériences et formations académiques
- Formulaire de contact fonctionnel (Resend)
- Test DISC sur page dédiée /test-disc
- Navigation sticky avec changement de style au scroll
- Système bilingue FR/EN (LanguageContext)
- Pages légales (mentions légales, politique de confidentialité)
- SEO de base : OpenGraph image, Apple icon, favicon, Google Search Console
- Web App Manifest (site.webmanifest)
- Animations au scroll (ScrollReveal)
- Liens vers profils LinkedIn et Malt
- Déploiement CI/CD automatique via Vercel + GitHub
- Domaine personnalisé clementboule.fr configuré

## Ce qui est en cours / à vérifier

- Contenu bilingue : le contexte LanguageContext existe mais le contenu EN est-il complet ?
- Test DISC : dernière correction = typo className (14/04). Fonctionnalités complètes ?
- Responsive : testé sur mobile ?
- Performance (Core Web Vitals) : non audité
- Accessibilité (WCAG) : non audité

## Derniers commits notables

| Date | Commit | Description |
|---|---|---|
| 14/04 | 0869f2a | fix: typo className dans page test-disc |
| 13/04 | 81f0f5c | Ajout propriété scale pour client EMA |
| 13/04 | 781869a | Ajout site.webmanifest |
| 13/04 | 8d190a8 | Mise à jour code vérification Google Search Console |
| 13/04 | 4c330f6 | Ajout composant OpenGraph image |
| 13/04 | 7c34edd | Fix Hero : version clean avec logos LinkedIn/Malt |
| 12/04 | 0b1e6a5 | fix: Navbar texte sombre sur hero clair, blanc au scroll |
