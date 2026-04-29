# État du projet — clementboule.fr & ORBIT
Dernière mise à jour : 27 avril 2026 — 14:55 (close 2026-04-27T14:55+02:00)

## Site clementboule.fr — état actuel (main)

**Toutes les pages sont en DA-C sauge brutaliste atténuée.** Refonte complète livrée en 4 phases entre le 25 et 26 avril 2026.

### Pages actives — Toutes en DA-C
- `/` (home) — Navbar (CTA mis en valeur) → Hero (signature rose + hover glow) → MatchQuiz → Proof → TopClients → Formations (hover restauré) → Process (badges + CTA Composer) → HomeFAQ → FinalCTA (signature) → Footer (signature)
- `/formations` + 6 slugs (rh-marque-employeur, posture-professionnelle, prevention-rps, strategie-entreprise, soft-skills, spine-up)
- `/a-propos` — parcours complet, signature eyebrow
- `/cas-clients` — page « En chantier » avec SVG panneau brutaliste
- `/faq` — 4 catégories en cards brutalist polychromes
- `/contact` — ContactForm en card crème + 4 cards info brutalist polychromes
- `/ressources` — 6 cards brutalist polychromes avec hover hover-card
- `/test-disc` — parcours interactif DISC avec tokens DA-C (DISC_COLORS métier préservées)
- `/mentions-legales` — refondu LCEN intégral
- `/politique-de-confidentialite` — refondu RGPD

### Phases DA-C livrées
- **PR #2 mergée** (25/04 soir) : Refonte initiale Hero, MatchQuiz section bg, Formations, Process, FinalCTA, Footer, Navbar, layout, tokens cb-*
- **PR #3 mergée** (25/04, commit 73cd886) : Composants home restants (Proof, TopClients, HomeFAQ, HomeFab)
- **PR #4 mergée** (25/04, commit f4c6954) : Pages internes (ContactForm, /contact, /a-propos, /formations, /formations/[slug], /cas-clients, /faq)
- **PR #5 mergée** (26/04, commit 01b6a9d) : 12 retours (stats 8 ans, Hero glow + signature, Navbar CTA, Process badges/CTA, mentions légales LCEN, politique confidentialité RGPD, /cas-clients en chantier, hover formations, MatchQuiz tokens, signature dispersée, em-dashes)
- **PR #6 mergée** (26/04, commit 58fea03) : /ressources + /test-disc en DA-C (cards brutalist polychromes, 106 remplacements gray-* → cb-*)
- **Audit sécurité v1** (26/04, commit 156ed62) : Next.js 14.2.3 → 14.2.35 (CVE critical fix), Cookiebot retiré, Formspree → mailto, llms.txt corrigé, headers HTTP sécurité (CSP/X-Frame/etc dans next.config.js), webmanifest DA-C, politique §10 localStorage
- **Audit sécurité v2** (26/04, commit 772c6ee) : Self-host Google Fonts via next/font/google, EXIF strippé clement.jpg (-4.7 Mo), docs/RUNBOOK-incident.md créé (5 scénarios), memory/security.md créé (tableau pilotable)
- **Protocoles MAJ** (26/04, commit 663c848) : OPEN/CLOSE intègrent memory/security.md, ajout protocole sécurité continu

## Sécurité — score courant

**Score : A−** (au 26/04/2026 v3, après commit 772c6ee + 2FA GitHub/Vercel + Dependabot)

| Métrique | Valeur |
|----------|--------|
| Contrôles OK | 23 / 31 |
| À surveiller | 8 |
| Action requise | 0 |

Tableau détaillé et historique : `memory/security.md`. Runbook incident : `memory/RUNBOOK-incident.md`.

## Direction artistique DA-C en place

**Palette C — Earth Saturée + sauge** (validée) :
- `--cb-sarcelle: #1FB8B0` — primaire signature
- `--cb-sarcelle-deep: #0F7B75` — accent profond
- `--cb-terracotta: #E85D2F` — chaud signature
- `--cb-cardinal: #C8102E` — accent fort
- `--cb-rose: #FBC8D8` — pastel pour highlights
- `--cb-sauge: #8BA88E` — structure (bordures, ombres)
- `--cb-sauge-deep: #4F6A52` — structure foncée
- `--cb-sable: #FBF4DD` — fond principal (papier crème)
- `--cb-creme: #FCFAF2` — fond frame portrait gravure
- `--cb-encre: #2A2A2A` — texte body
- `--cb-encre-soft: #4A4A4A` — texte secondaire

**Typographie** : Anton (titres caps géants), Space Grotesk (body), Permanent Marker (accents stylo, eyebrows rotés -2deg)

**Skin brutaliste atténué** : bordures 2.5-3px sauge-deep, ombres décalées 5-10px en couleur, micro-rotations -0.6 à +0.6deg sur cards, ticker marquees, caps lock H1/H2.

## Signature de marque

« made with care, not with templates » dispersée à 4 emplacements stratégiques :
- Hero (visible) — badge rose pâle font-marker rotaté -2deg sous H1
- Footer — discret signature, font-marker text-cb-rose au-dessus du logotype Anton
- /a-propos — eyebrow tagline sous H1, font-marker text-cb-cardinal
- FinalCTA (home) — micro-tag font-marker rose, rotaté -3deg

## Reste pour les phases ultérieures

- Photos : aquarelles définitives Midjourney à intégrer dans `public/illustrations/formations/` (déjà générées par Clément avec ses prompts, à uploader)
- Card de reco MatchQuiz : signature « made with care » en bas (optionnel, micro-touche finale)
- ORBIT : Calendrier dans Sheets « Orbit 1 » (Apps Script)
- Sécurité : 5 jaunes à durcir manuellement quand Clément a 30 min (cf. `memory/security.md`) — 2FA Calendly/LinkedIn/Malt, audit hooks Vercel, monitoring uptime, backup local, routage email





## Session 2026-04-27 — purge langage IA + cleanup repo

10 commits successifs sur `main`, `27bb7cb` -> `303a7de`.

### Phase SEO (commit `27bb7cb`)
Refonte meta description racine, OG, Twitter Card, JSON-LD Person,
JSON-LD Service, webmanifest. Retrait des tryptiques rythmiques
(« managers, équipes et dirigeants »), des parallélismes négatifs
(« sur-mesure, jamais de catalogue »), du setup-punchline, et de
l'adjectif marketing « sur-mesure ». Description racine alignée sur
4 domaines (management, soft skills, RH, stratégie).

### Lots 1 à 5 — purge langage IA (8 commits)
- **Lot 1** (`a0a132a`) : Hero, Proof, Formations.tsx, formations-data
  shortDescriptions (6).
- **Lot 2A** (`fca54a0`) : LanguageContext cleanup (-128 lignes de dead
  code mort) + 1 réécriture cv.experiences[0].
- **Lot 2B** (`9f4cc16`) : Process, HomeFAQ, FinalCTA, Footer, MatchQuiz.
- **Lot 3** (`9e83ad8`) : a-propos, contact, ContactForm. Correction
  factuelle critique : « depuis dix ans » -> « depuis huit ans »
  (interdiction explicite dans CLAUDE.md, vérification grep zéro
  occurrence résiduelle).
- **Lot 4A** (`ac9f69b`) : pages formations (liste + détail).
- **Lots 4B-4G** (`0c3ea97`) : data des 6 formations (intro, forWhom,
  outcomes, phases, workshops, tools). Bug factuel corrigé sur Process
  STEPS[2] : badge « Union Européenne » sans rapport avec l'étape ->
  « Adapté en cours ».
- **Lot 5** (`e95880b`) : FAQ (12 remplacements + JSON-LD synchronisé)
  + ressources (1 tag).

Total purge IA : ~85 réécritures, 1 correction factuelle critique.

### Cleanup repo (commits `fced914` et `303a7de`)

**Cleanup ressources non utilisées** (commit `fced914`) :
- 29 logos orphelins supprimés sur 45 -> 16 conservés (-872 KB).
- 6 composants dead code supprimés (CV.tsx, ScrollReveal.tsx,
  components/ui/{Button,Container,Section,SectionHeader}.tsx).
- Section cv.* du LanguageContext retirée (dead code transitif).
- Total libéré : ~890 KB, -616 lignes.

**Consolidation docs/ -> memory/** (commit `303a7de`) :
- Suppression complète du dossier docs/ (8 fichiers, dont 6 obsolètes).
- Migration de RUNBOOK-incident.md, 07-KIT-ILLUSTRATIONS-V2.md,
  08-SUIVI-ILLUSTRATIONS.md vers memory/ (git mv préserve l'historique).
- Création de memory/services.md (refonte de docs/04-SERVICES-COMPTES.md
  mise à jour : Resend retiré, Cloudflare Web Analytics ajouté, Calendly
  intégré, abonnements Leonardo/Midjourney avec dates).
- Backlog consolidé dans memory/site.md (items extraits de docs/03 et
  docs/plan-site.md, filtrés pour ne garder que ce qui n'est pas livré).
- Protocoles OPEN/CLOSE de CLAUDE.md élargis aux 6 fichiers memory/.

### Nouveau fichier de référence
`memory/copywriting.md` créé pour documenter le protocole de purge IA
(patterns à bannir, patterns acceptés, test téléphone, exception slogan,
cohérence factuelle stricte). Référence pour toute future production
de contenu.

### Score sécurité (re-check)

Score inchangé : **A−** (23/31 contrôles OK, 8 jaunes, 0 rouge).
Aucune modif sur dépendances npm, sous-traitants RGPD, scripts tiers,
headers HTTP, configuration GitHub/Vercel ou fichiers de conformité.
Cf `memory/security.md` v4 pour le détail.

## Session 2026-04-27 PM — signature email harmonisée DA-C

Création et déploiement d'une signature email pro pour harmoniser
HubSpot et Gmail avec la DA-C du site.

### Itérations design (5 rounds dans le chat)
- 3 variantes initiales (A portrait + barre sarcelle, B monogramme cb,
  C card sauge brutaliste) → A retenue.
- 3 variantes A plus légères (A1 minimaliste, A2 aéré, A3 editorial).
- 3 variantes A boutons chauds (terracotta, cardinal, rose pastel) →
  terracotta retenu.
- 3 variantes A boutons discrets (lien texte, outline fin terracotta,
  pill sable) → outline fin terracotta retenu.
- Texte du sous-titre arrêté : « J'accompagne ceux qui pilotent des
  équipes, des apprentis aux dirigeants. » (option narrative, pas de
  triptyque, cohérent avec le quiz audiences du site).

### Photo de signature
- Clément a uploadé une photo carrée 1200x1200 dans le repo via
  GitHub web : `public/Design sans titre.png`.
- À renommer en `clement-portrait.png` à la prochaine occasion (URL
  encodée en %20 fonctionne mais c'est moche).
- Tentatives data-URI inline rejetées par HubSpot, hack
  background-image mal calibré dans Gmail. Solution finale = vraie
  image carrée hostée + `<img border-radius:50%>`. Compatible
  Gmail / HubSpot / Outlook / Apple Mail.

### Configuration finale
- HTML signature 150x150 photo ronde + barre sarcelle 4px + nom Anton
  fallback Helvetica 900 24px caps + sous-titre + email/site sarcelle
  deep + bouton Réserver outline terracotta + LinkedIn/Malt sauge.
- Déployée dans HubSpot (modal Préférences > E-mail > Gérer les
  signatures) et Gmail (Paramètres > Général > Signature « Pro »).
- URL Calendly officielle : https://calendly.com/boule-clement/30min
  (extraite de `lib/cta-config.ts`).

### Bug à corriger plus tard
`app/formations/[slug]/page.tsx:413` pointe encore vers l'ancien lien
`https://calendly.com/clementboule` qui n'existe pas. À remplacer par
`https://calendly.com/boule-clement/30min` lors d'une session contenu.

### Score sécurité (re-check)
Inchangé : **A−** (23/31 contrôles OK, 8 jaunes, 0 rouge). Cette
Session 2026-04-29 a touché : Dependabot alerts activé sur le repo
(durcissement), branche `feat/next-15-upgrade` pushée et preview testée
mais NON mergée. Stack du site en main inchangée. Re-scoring sécurité
appliqué dans memory/security.md (24/31 OK · score A-).

## Backlog priorise

> Items extraits de l'ancien `docs/03-BACKLOG.md` et `docs/plan-site.md`,
> filtres pour ne garder que ce qui n'est pas deja livre. A jour 27/04/2026.

### Priorite haute (impact / effort favorable)

| ID | Action | Statut |
|----|--------|--------|
| BL-01 | Recolter 3 vrais temoignages clients verbatims, integrer dans `Testimonials.tsx` (composant existe en attente) | A faire |
| BL-02 | Mini cas client par formation (page detail), 1-2 paragraphes, sans inventer | A faire |
| BL-03 | Audit Lighthouse Core Web Vitals + corrections bloquantes | A faire |
| BL-04 | Audit accessibilite WCAG 2.1 AA (contrastes, clavier, ARIA) | A faire |
| BL-05 | README.md du repo GitHub (actuellement absent) | A faire |
| BL-46 | Merger `feat/next-15-upgrade` (Next 14→15 + React 18→19, ferme 5 CVE Dependabot) | Preview testé OK, en attente validation pages internes |
| BL-47 | Lancer le rythme LinkedIn 2 posts/sem (mar+jeu 8h30) selon `memory/linkedin-playbook.md`. Première session batch à programmer. | Doctrine livrée le 29/04, première salve à produire |

### Priorite moyenne

| ID | Action | Statut |
|----|--------|--------|
| BL-06 | Landing page dediee Spine'Up (formation signature) | A faire |
| BL-07 | Sitemap.xml + robots.txt (JSON-LD complet deja livre) | A faire |
| BL-08 | Verifier le contenu EN des pages (apres purge IA Lots 1-5, version FR a jour, EN a verifier en passe complete) | A faire |
| BL-12 | Renommer `public/Design sans titre.png` en `clement-portrait.png` + mettre à jour signatures HubSpot/Gmail + bug calendly slug | A faire |

### Priorite basse / nice-to-have

| ID | Action | Statut |
|----|--------|--------|
| BL-09 | Section blog (SEO long-tail, autorite) | Non commence |
| BL-10 | Page A propos enrichie en storytelling | Partiel (page actuelle OK mais peut grossir) |
| BL-11 | Refacto DRY : centraliser `EXPERIENCES` (a-propos vs LanguageContext, dette identifiee Lot 3) | A faire |

### Items livres recemment (avril 2026)

- Refonte DA-C complete (PR #2 a #6, commits 73cd886 a 58fea03)
- Audit securite phase 6 (commits 156ed62, 772c6ee, 663c848)
- Headers HTTP CSP/HSTS/X-Frame (next.config.js)
- Self-host Google Fonts via next/font/google
- EXIF strippe sur clement.jpg
- Cookiebot retire (politique zero-cookie)
- Formspree retire (formulaire en mailto)
- Pages detail formations (`/formations/[slug]`) avec JSON-LD Course
- Mentions legales LCEN, politique RGPD
- Calendly integre (lien externe, pas de widget JS)
- Section differenciation home (composant `Proof.tsx` avec 3 piliers)
- Cloudflare Web Analytics RGPD-natif
- Bug carousel formations corrige (Formations.tsx en grille)
- Purge langage IA complete site (8 commits, ~85 reecritures, voir derniers commits)
- Cleanup ressources non utilisees (29 logos orphelins, 6 composants dead code, -890 KB)
- Signature email harmonisee DA-C deployee sur HubSpot et Gmail (photo ronde 150x150, bouton Reserver outline terracotta, sous-titre narratif)

### Items livres recemment (29 avril 2026)

- Audit stratégique 360° LinkedIn / Malt / site + benchmark 15 profils Malt + 20 missions
- Profils Malt + LinkedIn alignés positionnement "business schools FR/EN, stratégie & soft skills" (S1 plan 90j livré)
- Sheet BPF (hors repo) : validation colonnes D et F + Apps Script AutoDate.gs (taper `.` colonne A → date du jour)
- Activation Dependabot alerts + malware alerts + security updates sur le repo (durcissement)
- Branche `feat/next-15-upgrade` créée + preview Vercel testée OK (en attente merge)
- ORBIT CRM créé puis démantelé proprement (cf CLAUDE.md session 2026-04-29 pour le pourquoi)
- LinkedIn playbook + pipeline créés (`memory/linkedin-playbook.md`, `memory/linkedin-pipeline.md`) : doctrine éditoriale 5 archétypes, cadence 2/sem, workflow batch, programmation native LinkedIn, tracker pipeline. Hérite de `memory/copywriting.md` pour les règles anti-IA.

## Note protocole
Repo `ClementBoule/clementboule-site` est PUBLIC. Aucune donnée privée de Clément (adresse, SIRET, téléphone, secrets) ne doit être stockée dans le repo. Ces infos sont à redemander en début de session quand on en a besoin (notamment pour les mentions légales).

## Note technique sur le push
Push direct git via PAT GitHub temporaire = 10x plus rapide que push fichier-par-fichier via Chrome MCP. Pour les chantiers à forte volumétrie (>10 fichiers), privilégier cette méthode. Ne JAMAIS stocker le token, toujours le révoquer après usage.
