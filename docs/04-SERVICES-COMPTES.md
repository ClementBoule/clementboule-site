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
| **Leonardo AI** | Character training IA (illustrations V2) | app.leonardo.ai | Apprentice 10$/mois — souscrit 16/04/2026, résilie le 16/05/2026 |
| **Midjourney** | Génération d'illustrations (illustrations V2) | midjourney.com | Basic 10$/mois — souscrit 16/04/2026, résilie le 16/05/2026 |

## Domaines

- **Production** : www.clementboule.fr (domaine OVH pointant vers Vercel)
- **Preview Vercel** : clementboule-site.vercel.app
- **Email** : hello@clementboule.com (hébergé chez OVH)

## Notes

- **Resend** : clé API configurée en variable d'environnement sur Vercel (mise en place par Claude)
- **Google Analytics** : code/clé existe dans le projet (à retrouver et paramétrer proprement)
- Tous les services permanents sont en **mode gratuit**
- **Leonardo AI + Midjourney** : abonnements temporaires (~25$ total) pour la production des illustrations V2. Déjà résiliés, fin de service le 16 mai 2026.

## Points restants à clarifier

- [ ] Configuration DNS exacte chez OVH (enregistrements A, CNAME, MX)
- [ ] Retrouver où la clé API Resend est stockée exactement (vérifier env vars Vercel)
- [ ] Paramétrer Google Analytics correctement
- [x] Souscrire Leonardo AI + Midjourney pour illustrations V2 (fait le 16/04/2026)
- [ ] Produire les 15-20 illustrations avant le 16/05/2026 (fin des abonnements)
