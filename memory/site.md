# État du projet — clementboule.fr & ORBIT
Dernière mise à jour : 25 avril 2026 — 21:00 (close 2026-04-25T21:00+02:00)

## Site clementboule.fr — état actuel (main)

### Pages actives — Toutes en DA-C
- `/` (home) — Navbar → Hero → MatchQuiz → Proof → TopClients → Formations → Process → HomeFAQ → FinalCTA → Footer
- `/formations` + 6 slugs (rh-marque-employeur, posture-professionnelle, prevention-rps, strategie-entreprise, soft-skills, spine-up)
- `/a-propos` — parcours complet
- `/cas-clients` — 4 cas réels + CTA intermédiaire après cas 2
- `/faq` — 4 catégories en cards brutalist polychromes
- `/contact` — ContactForm en card crème + 4 cards info brutalist polychromes
- `/ressources` — 6 cards (PAS encore en DA-C)
- `/test-disc` — parcours interactif DISC (PAS encore en DA-C)
- `/mentions-legales` — bug d'affichage signalé, à reprendre
- `/politique-de-confidentialite` — à mettre à jour

### Phases DA-C livrées
- **PR #2 mergée** (25/04 soir) : Refonte initiale Hero, MatchQuiz section bg, Formations, Process, FinalCTA, Footer, Navbar, layout, tokens cb-*
- **PR #3 mergée** (25/04 ~20h, commit 73cd886) : Composants home restants (Proof, TopClients, HomeFAQ, HomeFab)
- **PR #4 mergée** (25/04 ~20h45, commit f4c6954) : Pages internes (ContactForm, /contact, /a-propos, /formations, /formations/[slug], /cas-clients, /faq)

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

## Phase 3 — Retours Clément à appliquer prochaine session

Liste validée le 25/04/2026 soir, à exécuter en autonomie sur la branche `da-c-ajustements-clement` (ou similaire).

Cadre de merge : Clément a choisi l'**option B** : autorisation de merger sur main directement si build Vercel Ready, tous les retours appliqués, aucun bug détecté.

### 1. Stats globales
- Remplacer "10 ans" par "8 ans d'expérience" partout (Hero, Proof, About, CV, Footer, FAQ JSON-LD)
- Source : depuis 2018 (8 ans en 2026)
- Supprimer toute mention "auto-entrepreneur" / "AE" côté visiteur (Hero, About, Footer, FAQ)
- Préserver le statut juridique dans /mentions-legales (obligation LCEN)

### 2. Hero (home)
- Ajouter signature rose "made with care, not with templates" en font-marker rotaté -2deg, sous le H1
- Hover dynamique sur portrait : glow coloré pulsé alternant sarcelle / terracotta / sauge
- Stats : "8 ans d'expérience"

### 3. Navbar
- Bouton "Trouver mon format" mis en valeur visuellement (bg sarcelle, border 2.5px, contraste plus marqué que les autres liens)

### 4. Process (Comment on démarre)
- Étape 02 Diagnostic : badge "2-3 jours" → "Définir ensemble"
- Étape 03 On démarre : badge "France entière" → "Union Européenne" (statut AE permet UE)
- Ajouter CTA "Composer mon format" qui scroll vers MatchQuiz (#match-quiz)

### 5. Mentions légales — refonte intégrale
Bug d'affichage à diagnostiquer. Wording à humaniser. Conformité LCEN à vérifier :
- Éditeur : Clément Boulé (préciser nom complet)
- Statut juridique : "micro-entrepreneur (régime auto-entrepreneur)"
- Adresse postale : à redemander à Clément (privée, repo public)
- SIRET : à redemander à Clément (privé, repo public)
- Téléphone : à redemander à Clément (privé, repo public)
- TVA : franchise en base (non assujetti)
- Email contact : hello@clementboule.com
- Hébergeur : Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA
- Propriété intellectuelle, droit applicable, etc.

### 6. Politique de confidentialité — refonte
- Mention explicite Cloudflare Web Analytics (cookieless, RGPD-natif art. 82 LIL)
- Mention Calendly (lien externe, leur RGPD prend le relais)
- Mention sessionStorage du quiz (exempté art. 82 LIL)
- Mention formulaire mailto (aucune donnée stockée serveur)
- Note sous formulaire de contact : "Vos coordonnées servent uniquement à cette demande, aucun stockage sur le site."

### 7. Pages formations — placeholders aquarelles
- Ajuster les dimensions du placeholder image pour épouser le format des aquarelles MJ
- Cohérence visuelle entre Formations.tsx (home), /formations (liste), /formations/[slug] (détail)

### 8. Langage IA — humanisation finale
- Supprimer les tirets cadratins partout (marqueur typique IA)
- Remplacer par : virgules, parenthèses, points, deux-points
- Soigner les passages à la ligne dans les paragraphes longs : pas de coupure de phrase au milieu visuellement
- Re-humaniser les tournures qui sonnent encore "consultant assisté par IA"

### 9. Hover formations — restauration
Le hover qui faisait passer la box-shadow de 7px à 12px a été désactivé pour faire passer le build Vercel (Server Component RSC error). À restaurer via composant client extrait (FormationCard.tsx 'use client') qui gère le state hover proprement.

### 10. MatchQuiz — refonte intégrale DA-C (713 lignes)
Le composant utilise encore l'ancien skin bleu en interne (#1A2B4A, #6B7E95, #3D6DB8). Seul le wrapper section a un bg-cb-sable. À refondre intégralement :
- Titres h2 / h3 en font-anton uppercase géant
- Eyebrow "Vous cherchez quel format ?" en font-marker rotaté -2deg cardinal
- Chips de réponse en cards brutalist (border 2.5px sauge-deep + ombre décalée 4-5px), micro-rotations alternées, accent par option
- Card de recommandation finale en bg cb-creme + border 2.5px sauge-deep + ombre décalée 8px accent formation
- Boutons CTA principal et secondaire en style brutalist Anton uppercase
- Warning soft en bg cb-rose + border sauge-deep + ombre cardinal
- Bandeau résumé (audience / durée / tarif) en cards brutalist polychromes
- Focus ring focus:ring-cb-sarcelle/40 focus:border-cb-sarcelle
- Suppression de tous les text-[#1A2B4A], text-[#6B7E95], bg-[#3D6DB8] etc.

### 11. Signature "made with care, not with templates" — placement
Dissémination discrète à 5 emplacements stratégiques :
- Hero (home) — visible, badge rose pâle font-marker rotaté -2deg sous H1
- Footer — discret signature, font-marker text-cb-rose rotaté -1.5deg au-dessus du logotype Anton
- /a-propos — eyebrow tagline sous H1, font-marker text-cb-cardinal
- FinalCTA (home) — micro-tag font-marker rose, dans un coin de la section sarcelle, rotaté -3deg
- Card de reco MatchQuiz — signature personnelle en bas de la card, italique font-marker text-cb-sauge-deep

## Reste pour les phases ultérieures (post Phase 3)

- Pages annexes : /ressources
- /test-disc : 24 KB interactif, le plus complexe — refonte DA-C
- ORBIT : Calendrier dans Sheets "Orbit 1" (Apps Script)
- Sécurité Vercel : audit env vars (incident global 21/04, Clément non compromis, 2FA active)
- Photos : aquarelles définitives Midjourney (déjà générées par Clément avec ses prompts)

## Note protocole
Repo `ClementBoule/clementboule-site` est PUBLIC. Aucune donnée privée de Clément (adresse, SIRET, téléphone, secrets) ne doit être stockée dans le repo. Ces infos sont à redemander en début de session quand on en a besoin (notamment pour les mentions légales).
