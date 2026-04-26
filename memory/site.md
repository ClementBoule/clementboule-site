# État du projet — clementboule.fr & ORBIT
Dernière mise à jour : 26 avril 2026 — 09:40 (close 2026-04-26T09:40+02:00)

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
- Sécurité Vercel : audit env vars (incident global 21/04, Clément non compromis, 2FA active)

## Note protocole
Repo `ClementBoule/clementboule-site` est PUBLIC. Aucune donnée privée de Clément (adresse, SIRET, téléphone, secrets) ne doit être stockée dans le repo. Ces infos sont à redemander en début de session quand on en a besoin (notamment pour les mentions légales).

## Note technique sur le push
Push direct git via PAT GitHub temporaire = 10x plus rapide que push fichier-par-fichier via Chrome MCP. Pour les chantiers à forte volumétrie (>10 fichiers), privilégier cette méthode. Ne JAMAIS stocker le token, toujours le révoquer après usage.
