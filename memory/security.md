# Security posture — clementboule.fr

> Tableau de pilotage sécurité du site et des outils associés.
> Maintenu à jour à chaque modif de stack ou audit.
> Référentiels : NIST CSF 2.0 · ANSSI TPE/PME · OWASP · CNIL.

## État au 27 avril 2026 (v4 · close)

**Score global : A−**

| Métrique | Valeur |
|----------|--------|
| Contrôles OK | 23 / 31 |
| À surveiller | 8 |
| Action requise | 0 |
| Δ depuis v3 | consolidation docs/ -> memory/ (R3), cleanup ressources -890 KB (R1+R2), purge langage IA complète (8 lots). Aucune modif stack/services/conformité. |

> Note : score reste A− et non A car 8 contrôles jaunes restent ouverts (2FA Calendly/LinkedIn/Malt, audit hooks Vercel, monitoring uptime, backup local, routage email, branch protection, PAT en attente d'expiration, CVE résiduelles Next 15.x). Le palier A demande ≤3 jaunes.

## Contrôles par domaine

### 1. Site & application (clementboule.fr)

| Statut | Contrôle | Source / preuve |
|:------:|----------|-----------------|
| 🟢 | CVE Next.js patchées (14.2.35) | `npm audit` |
| 🟡 | CVE résiduelles DoS Next 15.x | non exploitables sur usage actuel |
| 🟢 | Headers HTTP (CSP, X-Frame, HSTS, Permissions, Referrer, X-Content-Type) | `next.config.js` |
| 🟢 | TLS 1.3 + HSTS preload max-age 2 ans | Vercel default |
| 🟢 | Self-host Google Fonts (Anton, Space Grotesk, Permanent Marker) | `next/font/google` dans `app/layout.tsx` |
| 🟢 | EXIF Lightroom strippé du portrait | PIL strip, vérifié 0 tag |

### 2. Code source (GitHub)

| Statut | Contrôle | Source / preuve |
|:------:|----------|-----------------|
| 🟢 | Aucun secret en clair (code + git log complet) | grep + `git log --all -p` |
| 🟢 | 2FA compte GitHub | activé 26/04/2026 |
| 🟡 | PAT actif (cowork-push, scope repo, expire 27/04) | laisser expirer naturellement |
| 🟡 | Branch protection main non configurée | optionnel en mode solo |
| 🟢 | Dependabot alerts + security updates + grouped | activé 26/04/2026 |

### 3. Hébergement (Vercel)

| Statut | Contrôle | Source / preuve |
|:------:|----------|-----------------|
| 🟢 | DPA Vercel (sous-traitant RGPD) | vercel.com/legal/dpa |
| 🟢 | Aucune variable env exposée dans le repo | repo audité |
| 🟢 | 2FA compte Vercel | activé 26/04/2026 |
| 🟡 | Audit deploy hooks & webhooks (à vérifier annuellement) | dashboard Vercel |

### 4. CDN & analytics (Cloudflare)

| Statut | Contrôle | Source / preuve |
|:------:|----------|-----------------|
| 🟢 | Web Analytics cookieless RGPD-natif | recommandation CNIL 2020 |
| 🟢 | Token public uniquement (pas de secret côté client) | `app/layout.tsx` |

### 5. Conformité légale (LCEN · RGPD · CNIL)

| Statut | Contrôle | Source / preuve |
|:------:|----------|-----------------|
| 🟢 | Mentions légales (LCEN art. 6-III-1) | `/mentions-legales` |
| 🟢 | Politique de confidentialité (RGPD art. 13) | 10 articles, cohérent code |
| 🟢 | Pas de cookie tiers (art. 82 LIL) | Cookiebot retiré |
| 🟢 | Cohérence allégations factuelles (llms.txt, claims) | corrigé /cas-clients |

### 6. Outils annexes (Calendly, LinkedIn, Malt, Email)

| Statut | Contrôle | Source / preuve |
|:------:|----------|-----------------|
| 🟢 | Calendly DPA RGPD | calendly.com/dpa |
| 🟡 | 2FA Calendly · LinkedIn · Malt | à vérifier dans chaque outil |
| 🟡 | Routage hello@clementboule.com (probable alias Gmail) | à documenter dans ce fichier |
| 🟢 | Pas de scripts externes chargés (uniquement liens) | code audité |

### 7. Détection & réponse incident

| Statut | Contrôle | Source / preuve |
|:------:|----------|-----------------|
| 🟢 | Notifications déploiement Vercel par email | configuration par défaut |
| 🟢 | Plan de réponse incident formalisé | `memory/RUNBOOK-incident.md` (5 scénarios + contacts CNIL/ANSSI) |
| 🟡 | Monitoring uptime externe (UptimeRobot gratuit possible) | non configuré |

### 8. Sauvegarde & continuité

| Statut | Contrôle | Source / preuve |
|:------:|----------|-----------------|
| 🟢 | Repo GitHub source de vérité, history complet | git log |
| 🟡 | Backup local hors-ligne (clone mensuel sur disque) | à mettre en cadence |
| 🟢 | Vercel rollback 1-clic | historique déploiements |

## Cadence de pilotage

| Fréquence | Action |
|-----------|--------|
| Quotidien | Surveiller emails Vercel (build status) |
| Hebdo | `npm audit` (ou laisser Dependabot ouvrir les PR) |
| Mensuel | Re-checker ce fichier, clone backup local |
| Trimestriel | Re-scan complet (refaire l'audit), revue sous-traitants RGPD, test rollback |
| Annuel | Renouveler tokens, vérifier expiration domaine `.fr`, certifs, contrats DPA |

## Historique des versions

| Date | Version | Δ |
|------|---------|---|
| 2026-04-26 v1 | Audit initial post-fixes Phase 5 | 23/34 OK · score B+ |
| 2026-04-26 v2 | + 2FA GitHub/Vercel + Dependabot + self-host fonts + EXIF strippé + runbook incident | 22/31 OK · score A− |
| 2026-04-26 v3 | Runbook commit + protocoles OPEN/CLOSE intègrent security.md | 23/31 OK · score A− · 0 rouge |
| 2026-04-27 v4 | Consolidation memory/ + cleanup ressources non utilisées + purge langage IA. Aucune modif sécurité opérationnelle. | 23/31 OK · score A− · 0 rouge |

## Glossaire des statuts

- 🟢 **OK** : contrôle conforme, vérifié, pas d'action attendue dans les 90 jours
- 🟡 **À surveiller** : non bloquant mais à durcir ou vérifier ; revue trimestrielle
- 🔴 **Action requise** : risque actif ou non-conformité à traiter sous 7 jours

## Lien avec les autres docs

- [`memory/site.md`](./site.md) — état général du projet (DA-C, contenus, phases)
- [`memory/RUNBOOK-incident.md`](./RUNBOOK-incident.md) — plan de réponse incident détaillé
- [`AUDIT-clementboule.fr-2026-04-26.md`](../AUDIT-clementboule.fr-2026-04-26.md) — rapport d'audit fondateur (rédigé en local, pas dans le repo)
