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


---

## Vercel quota free — leçon 29/04/2026

> Le plan Hobby a un cap de **100 deploys/jour** (erreur `api-deployments-free-per-day`). Pousser des fichiers un par un sur `main` = un deploy par commit. Pour les batches d'images (LinkedIn LP-XXX, illustrations formations…) : **grouper les uploads** soit via tree commit (multiple fichiers en un seul commit), soit en désactivant temporairement les Production Deploys, soit upload en local + push unique.

### État pending au close du 29/04/2026

- Commits sur `main` non déployés (quota grillé) : `9e0153b` (Hero swap) / `622e832` (Daan→Groupe Alternance) / `210463e` (SEO position 8) / `327d1b4` (touch).
- Files ajoutés : `/public/IMG_9024.jpg` (hero photo, 1.5 Mo) et `/public/logos/client-groupealternance.png` (88 Ko).
- Deploy Hook créé : `https://api.vercel.com/v1/integrations/deploy/prj_sDRQhzbRXc86kGBRjakw2ri9dx6Q/aJ7lq18HPY` (à fire après reset 24h ou laisser le push auto pull au reset).



---

## Session 30 avril 2026 — close

### État final du site live (commit `14e9764`)
- Hero photo navy blazer (IMG_9024.jpg) + tagline FORMATIONS QUI MARCHENT VRAIMENT
- TopClients : 8 logos (EMA, Albert, ISCOM, EDA RH, IHEDREA, Apprentis, Sauvegarde, Groupe Alternance) — Daan Tech retiré, remplacé par Groupe Alternance
- Section Investments live : 3 cards (Daan Tech / Mosa Meat / My Food) avec logos + taglines + lien external. Section "Skin in the game · Aussi actionnaire en direct"
- Metadata OG/Twitter réécrites (purge "Formateur Consultant Coach" → "Formateur entreprise & école"). Description sans empilement SEO.

### Travail commité mais en attente de build (quota Vercel grillé)
- `7f8426b` — overlay produit "à cheval" sur les cards Investments (Bob/burger/serre en bottom-right tilté + mix-blend-mode multiply pour fond blanc invisible)
- `4b362fe` — Next.js 14.2.35 → ^15.1.0 (closes 5 CVE résiduelles, route /formations/[slug] déjà compatible async params)
- `7d6c…` — OG image dynamique via app/opengraph-image.tsx (next/og ImageResponse 1200×630, palette site, FORMATIONS QUI MARCHENT VRAIMENT typo + signature URL)

### Quota Vercel — leçon
- Plan Hobby = 100 deploys/jour. Atteint 2 jours de suite. Reset minuit UTC.
- Cause : trop de commits unitaires (renames de fichiers individuels, fixes itératifs).
- **Protocole batch acquis** : grouper plusieurs modifications en 1 seul commit. Limite drastique du nombre de pushs/jour.
- Deploy Hook URL (à fire après reset si besoin) : `https://api.vercel.com/v1/integrations/deploy/prj_sDRQhzbRXc86kGBRjakw2ri9dx6Q/aJ7lq18HPY`

### Bio LinkedIn — fait
- Headline poussé via auto sur LinkedIn : "Formateur en entreprise · Management, soft skills, stratégie · FR-EN · Petit actionnaire de Daan Tech, Mosa Meat, My Food"
- Section "À propos" : version finale fournie en chat (texte sec, sans em-dash, sans formules LLM, avec coordonnées réelles : hello@clementboule.com / calendly.com/boule-clement/30min / clementboule.fr / malt.fr/profile/clementboule). À coller manuellement par Clément.

### Corpus voix LinkedIn V5 — fait
- `memory/linkedin-voice-corpus.md` consolidé en V5
- Baseline : 5 posts récents Clément analysés (entretien ré-embauche / RH protègent / Back to reality / France usée / iceberg flux contractuel)
- 19 auteurs externes documentés : Luginbuhl, Vannesson, Pezé, Galita, Christophe André, Pierre-Yves Gomez, Dejours, Pascal Chabot, de Gaulejac, Hamant, Mona Chollet, Mathilde Ramadier, Yves Clot, Norbert Alter, François Dupuy, Danièle Linhart, Marie-Anne Dujarier, Daniel Cohen, Cynthia Fleury
- Boîte à outils stylistique mappée par archétype A1-A5 + leviers rhétoriques

### Anti-patterns explicites (à respecter strictement en rédaction)
- **em-dashes "—" et "–" INTERDITS** — utiliser middot `·`, virgule, ou point selon le rythme
- "Voici les N leçons que j'ai apprises" → interdit
- Triplet narratif fabriqué ("ceux qui voient X / ceux qui vivent Y / ceux qui rencontrent Z") → interdit
- "Mon terrain :" / "Ce qui me distingue :" → interdit
- Citations pseudo-Einstein → interdit
- Humblebrag déguisé en authenticité → interdit
- Listes à puces sans raison de structure → interdit

### À faire J+1 (1 mai 2026)
1. Vérifier que les 3 commits en attente ont buildé après reset quota Vercel
2. Re-run [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) sur clementboule.fr pour que LinkedIn pick up la nouvelle OG image
3. Coller le texte du post LinkedIn dans Buffer ou directement, programmer mardi/jeudi 8h30
4. Une fois publié → 3 points sur le post → Épingler sur le profil
5. Coller manuellement la nouvelle "À propos" sur LinkedIn (ajout section présentation)

### Texte du premier post LinkedIn (prêt)

```
Mon site est en ligne : clementboule.fr

8 ans à former. Jamais pris le temps d'en faire une page propre. Maintenant c'est fait.

Sur le site :
→ Les formats (entreprise, école, accompagnement individuel)
→ Les sujets (management, soft skills, RH, stratégie)
→ Les références (EMA, IHEDREA, ISCOM, Apprentis d'Auteuil, Albert, Groupe Alternance, EDA RH…)
→ Le test DISC gratuit pour qui veut se positionner
→ Email, Calendly, formulaire qui ouvre votre boîte mail (pas de CRM)

Pas de tunnel marketing. Pas de chatbot. Pas de « demandez votre démo ».

Allez voir.

clementboule.fr

#Formation #FormationEntreprise
```

### Banque illustrations LinkedIn
- 244 imgs sur GitHub /public/illustrations/linkedin/
- LP-001 → LP-058 : aquarelles MJ batch 1 (192 imgs, 4 variantes par thème, palette DA-C cohérente)
- LP-059 → LP-064 : 6 imgs Leonardo Lucid Realism / Origin (mix résultats partiels, à reconsidérer)
- LP-065 → LP-076 : 48 imgs MJ Draft batch 3 (prompts narratifs workplace, slugs génériques mj-draft-001 à 012, à renommer après tri)
- Métadonnées partielles dans `metadata.json` (LP-001 → LP-030 seulement). À étendre quand on attaque les vrais posts pour permettre la sélection rapide.

### Stratégie éditoriale LinkedIn — pivot validé en session
- Positionnement cible : **formateur en entreprise** (pas prof). Construire l'image avant que le métier soit pleinement bascule.
- Triple angle différenciant : équipes pédagogiques + apprentis + dirigeants (vu de 3 côtés)
- Ancrage économique : actionnaire en direct de 3 boîtes en transition (Daan Tech, Mosa Meat, My Food). À utiliser parcimonieusement (1 post sur 8-10).
- Posture : praticien terrain qui voit ce que les autres ne voient plus, qui renomme ce que les autres décrivent mal, qui pousse à l'action en rendant le coût de l'inaction tangible.

---

## Session 30 avril 2026 (PM) — extension

**Heure** : ~13h–17h Paris
**État Vercel** : ~13 deploys, tous Ready (sauf 1 ERROR rebuild auto). Quota 100/jour large.

### Livrables session

#### 1) LinkedIn assets — bannière + avatar (Cowork → Documents/linkedin-assets/)

**Bannière LinkedIn 1584×396** (claim site repris)
- Construite en code Pillow, palette DA-C exacte (sable #FBF4DD, encre #2A2A2A, terracotta #E85D2F, sarcelle-deep #0F7B75, rose #FBC8D8, cardinal #C8102E)
- Fonts : Anton-400 + SpaceGrotesk-700 (récupérées via @fontsource/anton + @fontsource/space-grotesk + @fontsource/permanent-marker, converties woff→ttf via fontTools)
- Layout : eyebrow sarcelle-deep "BILINGUE · PARIS · 8 ANS" top-left + badge rose tilted -2° "made with care, not with templates" en Permanent Marker top-right + claim 2 lignes Anton 118px "FORMATIONS QUI / [MARCHENT] VRAIMENT." (MARCHENT en box terracotta) + URL clementboule.fr underline terracotta bottom-right
- Pad_l = 480px pour respecter zone avatar LinkedIn (jusqu'à 400px diamètre côté gauche du banner)
- **Fichier final** : `Documents/linkedin-assets/banner-A-typo.png` (55 KB, 1584×396)

**Avatar 800×800** (V2 retenue)
- Crop carré de clement-portrait-square.jpg + anneau terracotta 14px épaisseur
- LinkedIn applique son propre crop circulaire de toute façon, l'anneau n'est visible qu'en preview agrandie
- **Fichier final** : `Documents/linkedin-assets/avatar-V2-ring.png` (567 KB, 800×800)

**Anti-pattern à retenir** : ne PAS utiliser le tool `mcp__b3e8125a__generate-design` (Canva IA) pour des designs alignés DA — ça sort du Canva-IA générique pas du tout cohérent avec une DA établie. Préférer :
- Composer en code (Pillow / next/og / HTML+Puppeteer) avec palette extraite live du site
- Récupérer les fonts exactes via npm @fontsource/* puis convert woff→ttf
- Le sandbox bloque fonts.gstatic.com et raw.githubusercontent.com mais pas npmjs.org → toujours passer par npm pour les fonts open source

#### 2) Bug Investments — produits pas au premier plan

**Cause** : les 3 cards (article) ont `position:relative` + `transform: rotate()` ce qui crée un stacking context fermé. L'image produit avec `absolute -bottom-5 -right-5 mix-blend-mode:multiply` débordait visuellement mais le bord du card SUIVANT (border sauge-deep) la recouvrait.

**Fix** :
1. `.map(inv => ...)` → `.map((inv, i) => ...)` + passer `index={i}` à InvestmentCard
2. Type `& { lang: 'fr' | 'en'; index?: number }` ajouté (sinon TS error)
3. `style={{ ..., zIndex: hovered ? 40 : 30 - index * 10 }}` — zigzag décroissant 30/20/10 pour que la card 1 (avec produit qui déborde sur card 2) soit au-dessus

**Cascade de commits** :
- `edfc8d9` 1er fix → ERROR build (Type error: Property 'index' does not exist)
- `82344c3` add `index?: number` au type → READY mais corrompu UTF-8 (caractères é/à/· devenus Â?Â©)
- `01a2e3d` revert au commit propre `27e93b5` puis ré-applique avec TextEncoder/TextDecoder UTF-8 → READY clean

**Anti-pattern à retenir** : pour le round-trip GitHub Contents API en JS browser, NE PAS utiliser `atob()` puis `btoa(unescape(encodeURIComponent()))` — ça double-corrompt l'UTF-8. Toujours :
```js
// Décodage
const bytes = Uint8Array.from(atob(j.content.replace(/\n/g,'')), c => c.charCodeAt(0));
const content = new TextDecoder('utf-8').decode(bytes);
// Encodage
const out = new TextEncoder().encode(content);
let bin = ''; for (let i=0; i<out.length; i++) bin += String.fromCharCode(out[i]);
const encoded = btoa(bin);
```

#### 3) Section À propos — 2 photos cards-en-main hover swap

**Photo coach commitée** : `public/clement-coach.jpg` (478 KB, 1405×1529, drag-drop GitHub upload UI par Clément, renommée via git tree API atomique)

**Composant** : `components/AboutPhotos.tsx` (client component avec useState)
- Layout : 2 cards w-56 h-72 (mobile) → md:w-64 md:h-[22rem] absolute right-0 bottom-0, transformOrigin bottom-right
- Default : costume devant (z-30, rotate +3°, lift -14px, scale 1.03), coach derrière (z-10, rotate -13°, translate -6px gauche)
- Hover swap : onMouseEnter sur l'une → setTop swap z-indices + rotations + ombres + filter brightness/saturate
- Spring easing : `cubic-bezier(0.34, 1.3, 0.64, 1)` 550ms transform + 350ms shadow + 400ms filter
- Ombres réalistes : couleur DA-C (terracotta pour coach, sarcelle pour costume) en step + soft blur shadow noir 18-22px
- Désaturation card non-active : `filter: brightness(0.88) saturate(0.80)` vs active `brightness(1.02) saturate(1.06)`
- Overlay gradient diagonal sur la card en arrière : linear-gradient 135deg rgba(42,42,42,0.22) → transparent à 55%
- Badges Permanent Marker rose réactifs : scale 0.94 + rotation 2° (inactive) ↔ scale 1.06 + rotation -3° (active)
- A11y : tabIndex={0} + onFocus + focus-visible:ring + aria-label

**Page modifiée** : `app/a-propos/page.tsx`
- Retiré ", 32 ans" de la phrase finale du paragraphe d'intro
- Remplacé bloc photo unique (lines 100-108 originales : `{/* Portrait frame creme */}` + div relative w-72 h-72 boxShadow sarcelle + `<img src="/clement.jpg">`) par `<AboutPhotos />`

**Décalage horizontal** (commit `0cd02b1`) : ajout `md:pr-8 lg:pr-12 xl:pr-16` au wrapper flex pour que les cards ne touchent plus le bord droit du viewport (32-64px de marge selon breakpoint).

**Stack commits** :
- `c335891` création (atomic commit via git tree API : nouveau component + page modifiée + rename CHRIS-HASIBEDER_*.jpg → clement-coach.jpg + delete original)
- `be1815c` polish animations (spring + lift + désaturation + overlay diagonal + badges réactifs)
- `0cd02b1` pad-right responsive

### Plan d'action J+1

1. **LinkedIn post** — toujours en pause (texte prêt dans memory/site.md précédent). Hier on attendait le rebuild OG image pour avoir une carte cliquable. À ce stade c'est en place, peut être publié quand tu veux.
2. **Coller le « À propos » LinkedIn** manuellement (texte dans memory/site.md précédent).
3. **Voir si le hover swap satisfait visuellement** sur ta vraie souris — sinon itérer.

### Anti-patterns récurrents (à ajouter au registre)

1. **Canva MCP `generate-design`** = IA générique, pas DA-aware. Ne pas l'utiliser pour des assets alignés sur une DA établie.
2. **GitHub Contents API + UTF-8** : toujours TextDecoder/TextEncoder, JAMAIS `atob()` direct + `btoa(unescape(encodeURIComponent()))`.
3. **Stacking context CSS** : un parent avec `transform` (rotate, scale, translate) crée un nouveau stacking context. Un enfant en `position:absolute z-index:N` reste dans le scope du stacking context du parent — il ne peut pas dépasser un sibling parent placé après dans le DOM.
4. **LinkedIn banner pad_l** : zone gauche jusqu'à x=440 doit être libre de contenu critique (la photo de profil peut atteindre 400px de diamètre).
5. **Cards/photos absolute right-0** : sur des conteneurs alignés `justify-end` à droite de leur grille, ajouter du `pr-` responsive sinon les cards sortent du viewport ou collent au bord.

### État du repo (commits clés sur main, ordre antéchronologique)

- `0cd02b1` fix(about): pad-right responsive
- `be1815c` feat(about): polish 2-photos animation
- `c335891` feat(about): 2-photos cards-en-main hover swap + retire âge + rename clement-coach.jpg
- `01a2e3d` fix(investments): restore UTF-8 + zIndex zigzag
- `82344c3` fix(investments): type props with optional index?: number
- `27e93b5` fix(investments): remove loading=lazy on product overlays (référence "version propre" pour reverts UTF-8)


---

## Session 1er mai 2026 — Web3Forms + Gmail pro

**Heure** : ~14h–17h Paris
**Vercel** : 6 commits, tous Ready (pas d'erreur). Quota 100/jour large.

### Livrable principal : passer de mailto: à Web3Forms POST direct

**Pourquoi** : 30-50% des visiteurs abandonnent au moment où le `mailto:` ouvre Outlook/Gmail/Mail. Avec Web3Forms, le form submit envoie directement le mail depuis le site, le visiteur clique "Envoyer", c'est terminé.

**Service retenu** : Web3Forms — 250 soumissions/mois gratuit, RGPD UE (Allemagne), 0 backend, anti-spam intégré (honeypot + détection auto).

**Clé Web3Forms** : `de99b562-153c-4b39-bce0-81309fdf1635` — destinataire = `boule.clement@gmail.com`. La clé est publique côté client, c'est OK (anti-spam Web3Forms).

**Commits clés** :
- `cf9369d` feat(contact): replace mailto by Web3Forms POST in ContactForm.tsx — état submitting/error, sub-message updated
- `004fce8` fix(csp): whitelist `https://api.web3forms.com` dans `connect-src` (sinon le navigateur bloquait silencieusement le fetch — debugged via Chrome DevTools console)
- `8eb3f85` feat(disc): replace mailto by Web3Forms POST in DiscContactSection.tsx
- `7451d64` fix(contact): update copy "votre client email s'ouvrira" → "le message m'arrive directement, je réponds sous 24-48h"
- `59b58e2` fix(disc): bundle DISC context (profil + scores) into message field — sinon mail body vide car Web3Forms n'affiche que les champs standards (`name`, `email`, `subject`, `message`) dans son template par défaut. Les custom fields étaient ignorés.

### Anti-pattern à retenir : Web3Forms champs standards

Le template par défaut Web3Forms n'affiche correctement QUE :
- `name` (sender display name)
- `email` (sender email)
- `subject` (email subject)
- `message` (email body)

Si tu envoies des champs custom (`nom`, `entreprise`, `format_souhaite`, `profil_disc`...), ils peuvent être ignorés ou mal formatés. Solution : **concat tout le contexte dans le champ `message`** comme un texte multi-lignes structuré. Standard fields seulement.

Exemple format pour le DISC :
```
Profil DISC : D / I (Promoteur)
Scores : D=24  I=18  S=8  C=12

Message du visiteur :
[texte libre du visiteur ou "(pas de message libre)"]
```

### Anti-pattern à retenir : CSP `connect-src` impacte les fetch

La directive `connect-src 'self' https://cloudflareinsights.com` bloque silencieusement TOUS les fetch sortants vers d'autres domaines. Le navigateur retourne `TypeError: Failed to fetch` sans message d'erreur explicite côté UI (sauf à ouvrir la console). À chaque fois qu'on intègre une API tierce (Web3Forms, Resend, Brevo, Google reCAPTCHA, Stripe, Plausible, etc.), il faut whitelister son domaine dans la CSP de `next.config.js`.

### Setup Gmail pro pour boule.clement@gmail.com

**1. Libellé "hello" + filtre auto** (Gmail Settings → Filtres)
- Critère : `to:hello@clementboule.com`
- Action : Apply label "hello"
- Appliqué rétroactivement aux 22 conversations existantes
- → tous les futurs mails envoyés à `hello@` arrivent sur Gmail avec le libellé visible dans la sidebar

**2. Send-As `hello@clementboule.com` configuré** (Gmail Settings → Comptes → Envoyer en tant que)
- Nom affiché : `Clément Boulé`
- SMTP serveur : `ssl0.ovh.net`
- Port : `465` (SSL)
- Username : `hello@clementboule.com`
- Password : password de la boîte mail OVH (= même que webmail OVH, pas le password de l'espace client OVH)
- Validation : code envoyé à hello@, confirmé en saisie ou via lien
- Statut : `vérifié`, peut être mis par défaut

**Résultat** : depuis Gmail, dans Nouveau message, menu déroulant `De :` permet de choisir entre `boule.clement@gmail.com` et `Clément Boulé <hello@clementboule.com>`. La signature DA-C marche sur les deux (déjà configurée).

**Pré-requis OVH non vérifié** : forward `hello@clementboule.com → boule.clement@gmail.com` doit être actif dans l'espace client OVH pour que les mails reçus à hello@ atterrissent automatiquement sur Gmail. Si non actif, les mails restent sur le webmail OVH. À configurer côté Clément si pas déjà fait.

### Anti-patterns récurrents (mis à jour)

1. **Canva MCP `generate-design`** = IA générique, pas DA-aware. À éviter pour assets DA-aligned.
2. **GitHub Contents API + UTF-8** : toujours TextDecoder/TextEncoder, jamais `atob`/`btoa(unescape(encodeURIComponent))`.
3. **Stacking context CSS** : un parent avec `transform` crée un nouveau scope.
4. **LinkedIn banner pad_l** : zone gauche jusqu'à x=440 doit être libre.
5. **Cards/photos absolute right-0** : ajouter `pr-` responsive sinon collage au bord viewport.
6. **NEW — Web3Forms champs standards** : concat tout dans `message`, n'utiliser que `name`/`email`/`subject`/`message`.
7. **NEW — CSP `connect-src`** : whitelister explicitement chaque API tierce, sinon fetch bloqué silencieusement.

### État du repo (commits clés sur main, ordre antéchronologique)

- `59b58e2` fix(disc): bundle DISC context into message field
- `7451d64` fix(contact): update copy direct submission
- `8eb3f85` feat(disc): Web3Forms POST in DiscContactSection
- `004fce8` fix(csp): whitelist api.web3forms.com
- `cf9369d` feat(contact): Web3Forms POST in ContactForm
- (avant) `0d08843a` docs(memory): close 30/04 PM

### J+1 — actions ouvertes

1. **Vérifier que le DISC mail body est complet** (commit 59b58e2 build done — re-tester le test DISC après hard refresh)
2. **Vérifier le forward OVH `hello@ → Gmail`** est actif (sinon configurer dans espace client OVH email)
3. **Publier le post LinkedIn** (texte prêt depuis 30/04, OG image cliquable opérationnelle)
4. **Coller le « À propos » LinkedIn** manuellement (texte dans memory précédent)

