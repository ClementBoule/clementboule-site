# État du projet — clementboule.fr & ORBIT
Dernière mise à jour : 22 avril 2026 (close 2026-04-22T21:51+02:00)

## Commits récents (clementboule-site)
| Commit | Description | Date |
|--------|-------------|------|
| [à pousser] | feat: refonte langage + architecture conversion (23 fichiers, patch dans outputs) | 22 avr 2026 |
| 1b74210 | chore: durcir protocoles OPEN/CLOSE (clone GitHub obligatoire + push confirmé) | 22 avr 2026 |
| 01549f8 | Revise CLAUDE.md for clarity and formatting | 21 avr 2026 |

## Note session
Le push direct sur main n'a pas été possible via Chrome pour les 23 fichiers en raison de la complexité. Patch livré dans Cowork outputs (.patch + .tar.gz + DEPLOY_INSTRUCTIONS.md). Build testé localement, 19 pages OK.

User applique en 3 commandes :
```
cd /path/to/clementboule-site
git pull origin main
git am /path/to/0001-feat-refonte-*.patch
git push origin main
```

## Travail session 22/04
- Nettoyage em-dashes dans LanguageContext, formations-data, Proof, Hero alts, formations/page, layout
- Nouveaux composants UI (Container, Section, SectionHeader, Button, FAQ accordion)
- Nouvelles sections home (Process, HomeFAQ, FinalCTA)
- Nouvelles pages (/a-propos, /cas-clients, /faq, /contact, /ressources)
- Refonte Navbar + Footer
- sitemap.xml à jour (15 URLs)

## ORBIT Dashboard - 21/04/2026
https://clementboule.github.io/orbit-dashboard/

## ORBIT Sheets (Orbit 1) - 22/04/2026
https://docs.google.com/spreadsheets/d/1ypHM2H-1t8sUUiAGmazUaP7KkSnlUYsKuveg4GAOA5M/edit
12 onglets, calendrier annuel matin/aprem, compteur BPF SUMIFS

## Prochaines priorités
1. Appliquer le patch site (cf commandes ci-dessus)
2. ORBIT Sheets : compléter SIRET/adresse/catégorie BPF modules
3. Intégrer vue calendrier ORBIT dans Sheets Orbit 1 via Apps Script
4. Calendly → créer compte et URL slug page
5. Cas clients site : remplir 3 placeholders
6. Sécurité : variables d'env Vercel (incident 21/04)
