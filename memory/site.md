# État du projet — clementboule.fr

Dernière mise à jour : 20 avril 2026

## Commits récents
| Commit | Description | Date |
|--------|-------------|------|
| b6a1679 | Add CLAUDE.md with project and personal details | 20 avr 2026 |
| DLuvz7dKb | CTA contact direct sur pages formations | 20 avr 2026 |
| BwAdF9hDW | Proof component ajouté à la home | 20 avr 2026 |
| 5nhTHY4mt | Proof component créé (stats + piliers) | 20 avr 2026 |
| CZqYwyBGe | Formations.tsx refactorisé (CSS keyframes) | 20 avr 2026 |
| 3c68f11 | Majuscules corrigées formations-data.ts | 20 avr 2026 |
| 555b803 | Majuscules corrigées LanguageContext.tsx | 20 avr 2026 |

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

## Prochaines priorités (Sprint 2)
1. Calendly → créer compte et mettre à jour URL dans slug page
2. Testimonials → activer dès réception vrais verbatims
3. Section CV / À propos → retravailler avec posture consultant
4. SEO → JSON-LD, meta descriptions, sitemap
5. Performance → audit Core Web Vitals
