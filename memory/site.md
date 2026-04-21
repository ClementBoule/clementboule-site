# État du projet — clementboule.fr & ORBIT
Dernière mise à jour : 21 avril 2026

## Commits récents (clementboule-site)
| Commit | Description | Date |
|--------|-------------|------|
| 01549f8 | Revise CLAUDE.md for clarity and formatting | 21 avr 2026 |
| b6a1679 | Add CLAUDE.md with project and personal details | 20 avr 2026 |
| DLuvz7dKb | CTA contact direct sur pages formations | 20 avr 2026 |
| BwAdF9hDW | Proof component ajouté à la home | 20 avr 2026 |
| 5nhTHY4mt | Proof component créé (stats + piliers) | 20 avr 2026 |
| CZqYwyBGe | Formations.tsx refactorisé (CSS keyframes) | 20 avr 2026 |

## Structure de la home (app/page.tsx)
Navbar → Hero → Proof → Formations → TopClients → [Testimonials commenté] → CV → Contact → Footer

## Composants créés / modifiés
- components/Formations.tsx — bug fix ScrollReveal, CSS keyframes cbFadeUp
- components/Proof.tsx — NOUVEAU (chiffres réels + 3 piliers différenciants)
- components/Testimonials.tsx — NOUVEAU (en attente verbatims, commenté dans page.tsx)
- app/page.tsx — ajout import Proof
- app/formations/[slug]/page.tsx — ajout section CTA contact direct
- components/formations-data.ts — corrections majuscules FR
- components/LanguageContext.tsx — corrections majuscules FR
- docs/plan-site.md — plan sprints 1-4
- CLAUDE.md (racine repo) — mémoire de travail cross-device

## ORBIT Dashboard — déployé le 21/04/2026
- URL : https://clementboule.github.io/orbit-dashboard/
- Repo : ClementBoule/orbit-dashboard (public, HTML statique)
- Stack : HTML/CSS/JS + Google Identity Services OAuth2
- APIs : Google Calendar (readonly) + Google Tasks (readonly)
- OAuth Client ID : 809762603017-0on9sai9oth9v65ft4jmqfviejo3kn90.apps.googleusercontent.com
- Origines OAuth autorisées : localhost, https://clementboule.github.io
- Vue : grille AM/PM colorée par type, Sept 2025–Août 2026

## Prochaines priorités
1. ORBIT Sheets — intégrer calendrier visuel ORBIT dans "Orbit 1" via Google Apps Script
2. Calendly → créer compte et mettre à jour URL dans slug page
3. Testimonials → activer dès réception vrais verbatims
4. Sécurité → vérifier variables d'env Vercel (incident signalé 21/04/2026)
5. SEO → JSON-LD, meta descriptions, sitemap
6. Performance → audit Core Web Vitals
