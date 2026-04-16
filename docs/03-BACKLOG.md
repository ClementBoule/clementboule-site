# Backlog — clementboule.fr

> Classement par priorité (Impact vs Effort). À mettre à jour à chaque session.
> Dernière mise à jour : 16 avril 2026

## Légende

- CRITIQUE — à faire en premier
- IMPORTANT — forte valeur ajoutée
- NICE-TO-HAVE — améliorations futures

---

## Priorité haute

### BACK-001 — Audit de performance (Core Web Vitals)
- **Quoi** : Tester le site via Lighthouse / PageSpeed Insights, corriger les points bloquants
- **Pourquoi** : Impact direct sur le SEO et l'expérience utilisateur
- **Statut** : À faire

### BACK-002 — Audit d'accessibilité (WCAG 2.1 AA)
- **Quoi** : Vérifier contrastes, navigation clavier, lecteurs d'écran, attributs ARIA
- **Pourquoi** : Conformité légale (directive européenne accessibilité) + qualité pro
- **Statut** : À faire

### BACK-003 — Vérifier le responsive mobile/tablette
- **Quoi** : Tester toutes les sections sur différentes tailles d'écran
- **Pourquoi** : La majorité du trafic est mobile
- **Statut** : À faire

### BACK-004 — SEO technique complet
- **Quoi** : Sitemap.xml, robots.txt, données structurées JSON-LD (LocalBusiness, Person), balises meta complètes par page
- **Pourquoi** : Indexation optimale + GEO (Generative Engine Optimization)
- **Statut** : Partiel (OpenGraph + Search Console OK, reste à compléter)

### BACK-005 — Production des illustrations V2 "Clément dessiné"
- **Quoi** : Générer 18 illustrations IA via Midjourney + Leonardo AI (calibrage style, production, post-production)
- **Pourquoi** : Direction artistique V2 — personnage illustré sur chaque page du site
- **Statut** : En cours — calibrage de style (Test A encre terminé, Test B aquarelle soumis, Tests C/D en attente)
- **Deadline** : 16 mai 2026 (fin des abonnements)
- **Suivi détaillé** : voir 08-SUIVI-ILLUSTRATIONS.md

### BACK-006 — Sécurité : headers HTTP et CSP
- **Quoi** : Configurer Content-Security-Policy, X-Frame-Options, HSTS, etc. dans next.config.js
- **Pourquoi** : Protection contre XSS, clickjacking — standard sécurité pour un site pro
- **Statut** : À faire

---

## Priorité moyenne

### BACK-007 — Contenu bilingue complet (FR/EN)
- **Quoi** : Vérifier et compléter toutes les traductions anglaises
- **Pourquoi** : Le LanguageContext existe déjà, autant l'exploiter (profil international)
- **Statut** : À vérifier

### BACK-008 — Test DISC : audit fonctionnel complet
- **Quoi** : Vérifier le parcours complet du test, les résultats, le partage
- **Pourquoi** : C'est un outil différenciant majeur du site
- **Statut** : À faire

### BACK-009 — Analytics et suivi
- **Quoi** : Mettre en place un outil de suivi respectueux du RGPD (Plausible, Umami, ou Matomo self-hosted)
- **Pourquoi** : Mesurer le trafic sans dépendre de Google Analytics (conformité RGPD)
- **Statut** : À faire
- **Note** : Aucun service payant par usage — privilégier les solutions open-source self-hosted ou gratuites

### BACK-010 — Formulaire de contact : validation et feedback
- **Quoi** : Validation côté client, messages d'erreur, confirmation d'envoi, protection anti-spam
- **Pourquoi** : UX professionnelle + éviter le spam
- **Statut** : À vérifier

### BACK-011 — README du repo GitHub
- **Quoi** : Ajouter un README.md au repo (actuellement absent)
- **Pourquoi** : Documentation de base du projet
- **Statut** : À faire

---

## Nice-to-have

### BACK-012 — Animations et micro-interactions
- **Quoi** : Peaufiner les transitions, hover states, loading states
- **Pourquoi** : Différenciation visuelle, impression de qualité
- **Statut** : Partiel (ScrollReveal existe)

### BACK-013 — Blog / Articles
- **Quoi** : Ajouter une section blog pour publier du contenu (SEO + autorité)
- **Pourquoi** : Content marketing, référencement long-tail
- **Statut** : Non commencé

### BACK-014 — Témoignages clients
- **Quoi** : Section avec citations/avis de clients
- **Pourquoi** : Preuve sociale, conversion
- **Statut** : Non commencé

### BACK-015 — Page dédiée par formation
- **Quoi** : Créer des sous-pages pour chaque formation avec détails, programme, durée
- **Pourquoi** : SEO (pages longues et ciblées) + meilleure conversion
- **Statut** : Non commencé

### BACK-016 — Intégration calendrier / prise de RDV
- **Quoi** : Lien vers Calendly ou équivalent open-source
- **Pourquoi** : Réduire la friction pour la prise de contact
- **Statut** : Non commencé
- **Note** : Pas de service payant — solution gratuite ou open-source uniquement

---

## Historique des tâches terminées

| ID | Description | Date |
|---|---|---|
| — | Création du site one-page complet | 11/04/2026 |
| — | Déploiement Vercel + domaine OVH | 11/04/2026 |
| — | Test DISC v1 | 12-14/04/2026 |
| — | SEO de base (OG, favicon, Search Console) | 13/04/2026 |
| — | Section clients (logos) | 13/04/2026 |
| — | Cadrage refonte V2 (vision, architecture, budget) | 16/04/2026 |
| — | Kit illustrations V2 (prompts, workflow, catalogue 18 poses) | 16/04/2026 |
| — | Souscription Leonardo AI Essential + Midjourney Basic (1 mois) | 16/04/2026 |
| — | Calibrage style Midjourney — Test A encre (4 variantes) | 16/04/2026 |
