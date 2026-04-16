# Services & Comptes externes

## Services identifiés

| Service | Usage | URL / Détails |
|---|---|---|
| **GitHub** | Hébergement du code source | https://github.com/ClementBoule/clementboule-site |
| **Vercel** | Hébergement / déploiement (CI/CD auto depuis GitHub) | https://clementboule-site.vercel.app — 153 déploiements au 16/04/2026 |
| **OVH** | Nom de domaine clementboule.fr (DNS) | À confirmer : configuration DNS, redirections |
| **Resend** | Service d'envoi d'emails transactionnels | Utilisé pour le formulaire de contact (hello@clementboule.com) |
| **Google Search Console** | Indexation et SEO | Vérifié via meta tag dans layout.tsx |

## Domaines

- **Production** : www.clementboule.fr (domaine OVH pointant vers Vercel)
- **Preview Vercel** : clementboule-site.vercel.app
- **Email** : hello@clementboule.com (à confirmer : OVH ou autre fournisseur mail)

## Points à clarifier avec Clément

- [ ] Configuration DNS exacte chez OVH (enregistrements A, CNAME, MX)
- [ ] Fournisseur email pour hello@clementboule.com (OVH Mail ? Autre ?)
- [ ] Clé API Resend : où est-elle stockée ? (variable d'environnement Vercel ?)
- [ ] Google Analytics ou autre outil de suivi installé ?
- [ ] Compte Vercel : plan gratuit (Hobby) ou Pro ?
