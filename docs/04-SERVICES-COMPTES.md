# Services & Comptes externes

> Dernière mise à jour : 16 avril 2026

## Services identifiés

| Service | Usage | URL / Détails | Plan |
|---|---|---|---|
| **GitHub** | Hébergement du code source | https://github.com/ClementBoule/clementboule-site | Gratuit |
| **Vercel** | Hébergement / déploiement (CI/CD auto depuis GitHub) | https://clementboule-site.vercel.app | Hobby (gratuit) |
| **OVH** | Nom de domaine + DNS + hébergement mail | clementboule.fr | Payant (domaine) |
| **Resend** | Envoi d'emails transactionnels (formulaire contact) | Clé API configurée par Claude (env var Vercel) | Gratuit (free tier) |
| **Google Search Console** | Indexation et SEO | Vérifié via meta tag dans layout.tsx | Gratuit |
| **Google Analytics** | Suivi du trafic | Code/clé existant mais pas pleinement paramétré | Gratuit |

## Domaines

- **Production** : www.clementboule.fr (domaine OVH pointant vers Vercel)
- **Preview Vercel** : clementboule-site.vercel.app
- **Email** : hello@clementboule.com (hébergé chez OVH)

## Configuration connue

- Site et mail hébergés chez **OVH**
- Clé API **Resend** configurée par Claude dans une session précédente (variable d'environnement Vercel)
- **Google Analytics** : code/clé existe dans le projet (à retrouver et paramétrer proprement)
- Tous les services sont en **mode gratuit**

## Points restants à clarifier

- [ ] Configuration DNS exacte chez OVH (enregistrements A, CNAME, MX)
- [ ] Retrouver où la clé API Resend est stockée exactement (vérifier env vars Vercel)
- [ ] Paramétrer Google Analytics correctement
