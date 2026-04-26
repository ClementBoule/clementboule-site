# État du projet — clementboule.fr & ORBIT
Dernière mise à jour : 26 avril 2026 — 09:00 (close 2026-04-26T09:00+02:00)

## Site clementboule.fr — état actuel (main)

Toutes les pages principales sont en DA-C sauge brutaliste atténuée. Phase 3 mergée le 26/04/2026 — commit 01b6a9d.

### Pages actives — Toutes en DA-C
- `/` (home) — Navbar (CTA mis en valeur) → Hero (signature rose + hover glow) → MatchQuiz (tokens DA-C) → Proof → TopClients → Formations (hover restauré) → Process (badges + CTA Composer) → HomeFAQ → FinalCTA (signature) → Footer (signature)
- `/formations` + 6 slugs (rh-marque-employeur, posture-professionnelle, prevention-rps, strategie-entreprise, soft-skills, spine-up)
- `/a-propos` — parcours complet, signature eyebrow
- `/cas-clients` — page « En chantier » avec SVG panneau brutaliste, en attendant les vrais cas clients
- `/faq` — 4 catégories en cards brutalist polychromes
- `/contact` — ContactForm en card crème + 4 cards info brutalist polychromes
- `/mentions-legales` — refondu LCEN intégral (éditeur, statut juridique, adresse, SIRET, téléphone, hébergeur, propriété intellectuelle, droit applicable)
- `/politique-de-confidentialite` — refondu RGPD (Cloudflare cookieless, sessionStorage quiz, mailto, sous-traitants, droits, CNIL)
- `/ressources` — 6 cards (PAS encore en DA-C)
- `/test-disc` — parcours interactif DISC (PAS encore en DA-C)

### Phases DA-C livrées
- **PR #2 mergée** (25/04 soir) : Refonte initiale Hero, MatchQuiz section bg, Formations, Process, FinalCTA, Footer, Navbar, layout, tokens cb-*
- **PR #3 mergée** (25/04, commit 73cd886) : Composants home restants (Proof, TopClients, HomeFAQ, HomeFab)
- **PR #4 mergée** (25/04, commit f4c6954) : Pages internes (ContactForm, /contact, /a-propos, /formations, /formations/[slug], /cas-clients, /faq)
- **PR #5 mergée** (26/04, commit 01b6a9d) : 12 retours appliqués (stats 8 ans, Hero glow + signature, Navbar CTA mis en valeur, Process badges/CTA, mentions légales LCEN, politique confidentialité RGPD, /cas-clients en chantier, hover formations CSS pure, MatchQuiz tokens DA-C, signature dispersée, em-dashes humanisés)

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
- FinalCTA (home) — micro-tag font-marker rose, dans un coin de la section sarcelle, rotaté -3deg
- (Card de reco MatchQuiz : à compléter dans une mini-passe future, optionnel)

## Reste pour les phases ultérieures

- /ressources — 6 cards qui ne sont pas encore en DA-C (à voir si on garde, enrichit, ou supprime)
- /test-disc — 24 KB interactif, le plus complexe — refonte DA-C
- ORBIT : Calendrier dans Sheets « Orbit 1 » (Apps Script)
- Sécurité Vercel : audit env vars (incident global 21/04, Clément non compromis, 2FA active)
- Photos : aquarelles définitives Midjourney à intégrer (déjà générées par Clément avec ses prompts)
- Hover MatchQuiz card de reco : signature en bas de la card de recommandation (optionnel)

## Note protocole
Repo `ClementBoule/clementboule-site` est PUBLIC. Aucune donnée privée de Clément (adresse, SIRET, téléphone, secrets) ne doit être stockée dans le repo. Ces infos sont à redemander en début de session quand on en a besoin.

## Note technique sur le push
Pour les sessions futures qui nécessitent un push direct git (vs Chrome MCP), le token GitHub PAT temporaire s'est avéré 10x plus rapide que le push fichier-par-fichier via Chrome. À reconsidérer pour les gros chantiers.
