# Services & comptes externes — clementboule.fr

> Mise à jour : 27 avril 2026

## Services actifs

| Service | Usage | Plan | Notes |
|---------|-------|------|-------|
| **GitHub** | Hébergement du code (`ClementBoule/clementboule-site`, public) | Gratuit | 2FA activée |
| **Vercel** | Hébergement et CI/CD (auto sur push `main`) | Hobby (gratuit) | 2FA activée, Dependabot grouped activé via GitHub |
| **OVH** | Domaine `clementboule.fr` + DNS + mail `hello@clementboule.com` | Payant (domaine annuel) | — |
| **Cloudflare Web Analytics** | Mesure d'audience cookieless RGPD-natif | Gratuit | Token public dans `app/layout.tsx`, recommandation CNIL 2020 |
| **Calendly** | Prise de RDV (lien externe, pas de widget JS) | Gratuit | URL configurée dans `lib/cta-config.ts`. DPA RGPD vérifié |
| **Google Search Console** | Indexation et SEO | Gratuit | Vérifié via meta tag dans `app/layout.tsx` |
| **LinkedIn** | Profil pro (lien externe) | Gratuit | `linkedin.com/in/cl%C3%A9ment-boul%C3%A9/` |
| **Malt** | Profil freelance (lien externe) | Gratuit | `malt.fr/profile/clementboule` |

## Services retirés ou non utilisés

| Service | Pourquoi |
|---------|----------|
| **Resend** | Le formulaire de contact est passé en mode `mailto` (audit sécurité phase 6, commit `156ed62`). Plus de clé API à maintenir. |
| **Formspree** | Idem, remplacé par `mailto` |
| **Cookiebot** | Retiré (politique zéro-cookie respectée, abonnement inutile) |
| **Google Analytics** | Non configuré. Cloudflare Web Analytics fait le job en cookieless |

## Abonnements temporaires (illustrations V2)

| Service | Plan | Coût | Souscrit | Expire | Statut |
|---------|------|------|----------|--------|--------|
| **Midjourney** | Basic | 10 $/mois | 16/04/2026 | 16/05/2026 | Résiliation programmée |
| **Leonardo AI** | Essential | 12 $/mois | 16/04/2026 | 16/05/2026 | Résiliation programmée |

Budget total : 22 $ pour un mois. Voir `memory/illustrations-suivi.md` pour le tracker de production.

## Domaines

- Production : `www.clementboule.fr` (OVH → Vercel via DNS A/CNAME)
- Preview Vercel : `clementboule-site.vercel.app`
- Email pro : `hello@clementboule.com` (OVH)

## Vérifications annuelles

- Renouveler le domaine `.fr` chez OVH
- Renouveler les DPA des sous-traitants (Vercel, Calendly, Cloudflare)
- Auditer les tokens GitHub actifs et révoquer ceux qui ne servent plus
