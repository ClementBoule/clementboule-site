# État du projet — clementboule.fr & ORBIT
Dernière mise à jour : 23 avril 2026 (open 2026-04-23T16:37+02:00)

## Site clementboule.fr — état actuel (main, déployé Vercel)

### Pages actives
- `/` (home) — Navbar → Hero → Proof → TopClients → Formations → Process → HomeFAQ → FinalCTA → Footer
- `/formations` + 6 slugs (RH, posture, RPS, stratégie, soft-skills, spine-up)
- `/a-propos` — parcours complet (4 expériences, 3 formations/certifs, valeurs)
- `/cas-clients` — 4 cas réels (business school, PME IdF, association nationale, groupe international) + CTA intermédiaire après cas 2
- `/faq` — 4 catégories (Approche, Formats, Tarifs, DISC)
- `/contact` — ContactForm + infos (email, localisation, délai, réseaux)
- `/ressources` — 6 cards (test DISC highlighté, formations, à propos, FAQ, LinkedIn, Malt)
- `/test-disc` — parcours interactif DISC
- `/mentions-legales`, `/politique-de-confidentialite`

### Composants clés
- UI primitives : `components/ui/` (Button, Container, Section, SectionHeader)
- Home : Hero (toggle pro/sorcier), Proof (4 stats + 3 piliers icônes), Formations, Process (scroll-reveal, palette par step), HomeFAQ (bilingue accordion), FinalCTA (bilingue)
- Nav : Navbar (CTA Contactez-moi desktop + mobile), Footer (3 colonnes FR/EN)
- Forms : ContactForm (mailto), Contact.tsx (legacy, non importé mais conservé)

### Build status
Next.js 14.2.3, 19 pages statiques générées, zéro régression, langue par défaut FR.

## Historique récent (depuis le close 22/04T21:51)

Le patch de refonte (23 fichiers) a été appliqué puis étendu par 25 commits. État au 23/04 matin :

| Commit | Description |
|--------|-------------|
| ce51abe | Process redesign animé : scroll-reveal, palette par step, badges |
| c57ae3b | Cas-clients : CTA intermédiaire après le 2e cas |
| fa68929 | Home : TopClients remonte après Proof |
| 60def75 | Navbar : CTA Contactez-moi desktop + mobile |
| 4893177 | Hero : CTA primaire + secondaire version pro |
| 7ae4b50 | Langue par défaut FR (CRO) |
| 62cd4cd | Page Contact : ContactForm remplace mailto |
| 7b95496 | Nouveau ContactForm (mailto) |
| f9bb2aa | Fix slug page (encoding + SVG icons) |
| 91ca11e | Rewrite politique-de-confidentialite |
| b8b5790 | Proof : icônes globe/sliders/shield-check |
| d61ad49 | Fix globals.css (`@import` avant `@tailwind`) |
| 3c31990 | Process bilingue |
| fdc4873 | FAQ bilingue |
| b950e40 | Styles + language context refactor |
| dcb2b68 | Sitemap.xml mis à jour |
| 52d07d1 | Process + HomeFAQ + FinalCTA ajoutés |
| 6e9d663 | Footer bilingue |
| ba9c35f | Navbar bilingue |
| 3c974bf | Fix string quotes formations-data.ts |
| b6ff990 | Fix export useLang |
| 4b7b568 | SectionHeader |
| b8b3416 | Section |
| a53d8ba | Container |
| 24932eb | Button (variants + sizes) |
| 6cd001c | close session 2026-04-22T21:51 (memory/site.md) |
| 1b74210 | durcir protocoles OPEN/CLOSE |

## ORBIT Dashboard — déployé 21/04/2026
- URL : https://clementboule.github.io/orbit-dashboard/
- Repo : ClementBoule/orbit-dashboard (public, HTML statique)
- Stack : HTML/CSS/JS + Google Identity Services OAuth2
- APIs : Google Calendar + Google Tasks (readonly)
- Client ID : 809762603017-0on9sai9oth9v65ft4jmqfviejo3kn90.apps.googleusercontent.com

## ORBIT Sheets (Orbit 1) — construit 22/04/2026
- URL : https://docs.google.com/spreadsheets/d/1ypHM2H-1t8sUUiAGmazUaP7KkSnlUYsKuveg4GAOA5M/edit
- 12 onglets : Lisez-moi, Paramètres, Clients, Modules, Sessions, Calendrier 25-26, Calendrier 26-27, BPF Récap, Factures, Déclarations, Tâches, Veille
- Calendrier annuel matin/aprem (365 lignes x 2 années)
- Compteur BPF auto via SUMIFS
- Locale en_US (fix FR `;` vs `,`)

## Ce qui reste à faire (par priorité)

### Backlog ORBIT
1. **Intégrer vue calendrier ORBIT dans Sheets Orbit 1 via Apps Script** (priorité 1 depuis plusieurs sessions)
2. Récap mensuel automatique (URSSAF, CA)
3. Google Calendar ← BPF Calendrier sync
4. Veille juridique automatisée (Légifrance, URSSAF, DGEFP)
5. HubSpot signature mail améliorée
6. Facturation électronique B2B (loi ~sept 2027 TPE)

### Backlog site
1. **Sécurité : vérifier variables d'env Vercel suite incident 21/04/2026** (ouvert depuis 2 jours)
2. Calendly : créer compte et mettre à jour URL dans CTA slug formation
3. Témoignages : activer Testimonials.tsx dès réception verbatims
4. Valider ou corriger le nombre d'entreprises clientes affiché
5. Nettoyage code : Contact.tsx non importé (ex-ancien composant), à supprimer si confirmé

### Backlog ORBIT Sheets user-side
6. Compléter SIRET + adresse pro dans onglet Paramètres
7. Vérifier catégorie BPF sur chaque module

## Livrables Cowork outputs (session 22/04, persistent sur poste user)
- `0001-feat-refonte-langage-architecture-conversion.patch` (71 KB) — patch d'origine (déjà appliqué + étendu)
- `clementboule-site-code-changes.tar.gz` (106 KB) — snapshot pré-merge
- `DEPLOY_INSTRUCTIONS.md` — instructions initiales
- `Orbit1_AppsScript.gs` (30 KB) — script Apps Script complet

## Note protocole
Les 25 commits entre 22/04T22h et 23/04T16h n'ont pas été documentés à chaque push (close pas appelé). Ce rattrapage le corrige. Pour la suite, respecter le protocole CLOSE avant chaque sortie de session.
