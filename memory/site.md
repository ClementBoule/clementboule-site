# État du projet — clementboule.fr & ORBIT
Dernière mise à jour : 23 avril 2026 — 19:15 (close 2026-04-23T19:15+02:00)

## Site clementboule.fr — état actuel (main, déployé Vercel)

### Pages actives
- `/` (home) — Navbar → Hero → Proof → TopClients → Formations → **MatchQuiz** → Process → HomeFAQ → FinalCTA → Footer
- `/formations` + 6 slugs (RH, posture, RPS, stratégie, soft-skills, spine-up)
- `/a-propos` — parcours complet (4 expériences, 3 formations/certifs, valeurs)
- `/cas-clients` — 4 cas réels + CTA intermédiaire après cas 2
- `/faq` — 4 catégories (Approche, Formats, Tarifs, DISC)
- `/contact` — ContactForm + infos (email, localisation, délai, réseaux)
- `/ressources` — 6 cards (test DISC highlighté, formations, à propos, FAQ, LinkedIn, Malt)
- `/test-disc` — parcours interactif DISC
- `/mentions-legales`, `/politique-de-confidentialite`

### Composants clés
- UI primitives : `components/ui/` (Button, Container, Section, SectionHeader)
- Home : Hero, Proof, Formations, **MatchQuiz (nouveau 23/04)**, Process, HomeFAQ, FinalCTA
- Nav : Navbar (CTA Contactez-moi desktop + mobile), Footer (3 colonnes FR/EN)
- Forms : ContactForm (mailto), Contact.tsx (legacy, non importé mais conservé)

### Build status
Next.js 14.2.3, 19 pages statiques générées, zéro régression, langue par défaut FR.
Home : 25,5 kB First Load JS (+1 kB suite ajout MatchQuiz).

## Session 23/04 après-midi — MatchQuiz V1 livré

Nouvelle section interactive sur la home, entre Formations et Process. Objectif CRO : transformer un visiteur passif en lead qualifié en 30 s via 3 questions chaînées.

**Mécanique** : 3 étapes — audience (CODIR / managers / équipes / moi-même) → sujet (les 6 formations du catalogue) → durée (demi-journée / 1 jour / 2-3 jours / parcours étalé) → card de recommandation → 2 CTA (mailto pré-rempli avec le contexte structuré + lien vers la page formation).

**Inclus dans la V1** :
- Composant client `components/MatchQuiz.tsx` (692 lignes, zéro dépendance externe)
- Bilingue FR/EN via `useLang()` existant
- Palette accent dynamique par formation (prend la couleur du catalogue)
- Animations fade-up natives (CSS keyframes `cbFadeUp`)
- Warning soft si durée choisie < format recommandé de la formation (non-bloquant, encourage le cadrage)
- Persistance `sessionStorage` (clé `cb_matchquiz_v1`, RGPD-exempt art. 82 LIL, pas de cookie)
- Instrumentation analytics multi-vendor (Plausible / Umami / GTM dataLayer) — no-op tant qu'aucun outil n'est branché, zéro requête réseau en attendant

**Commits** :
- `d2557cb` — feat(home): add MatchQuiz section
- `35caf50` — feat(home): wire MatchQuiz between Formations and Process
- `22b28f8` — merge PR #1 sur main (commit de merge)

**PR** : https://github.com/ClementBoule/clementboule-site/pull/1 (mergée, closed)

**Vérifié en live** : section visible sur https://www.clementboule.fr/ — headings « En 3 clics, tu sais par où commencer » et « Qui veux-tu former ? » présents dans le DOM. Si invisible côté utilisateur : cache navigateur (hard refresh Cmd/Ctrl+Shift+R).

**Prochaines itérations possibles (non planifiées)** :
- Remplacer le mailto par un widget Calendly inline une fois le compte créé
- Brancher un analytics RGPD-friendly pour mesurer le drop-off par étape (Umami self-hosted gratuit recommandé)
- Ajouter une vidéo perso 60-90 s dans Process pour humaniser le funnel (hors MatchQuiz)

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
1. **Intégrer vue calendrier ORBIT dans Sheets Orbit 1 via Apps Script** (priorité 1 depuis plusieurs sessions — script `Orbit1_AppsScript.gs` prêt dans outputs Cowork 22/04)
2. Récap mensuel automatique (URSSAF, CA)
3. Google Calendar ← BPF Calendrier sync
4. Veille juridique automatisée (Légifrance, URSSAF, DGEFP)
5. HubSpot signature mail améliorée
6. Facturation électronique B2B (loi ~sept 2027 TPE)

### Backlog site
1. **Sécurité : vérifier variables d'env Vercel suite incident 21/04/2026** (ouvert depuis 2 jours — à prioriser au prochain OPEN)
2. Calendly : créer compte et mettre à jour URL dans CTA slug formation (débloquerait aussi la V2 MatchQuiz avec booking inline)
3. Témoignages : activer `Testimonials.tsx` dès réception verbatims réels
4. Valider ou corriger le nombre d'entreprises clientes affiché
5. Nettoyage code : `Contact.tsx` non importé (ex-ancien composant), à supprimer si confirmé
6. Analytics RGPD-friendly à installer si on veut mesurer le funnel MatchQuiz (Umami self-hosted gratuit recommandé)
7. Supprimer la branche `quiz-match-section` sur GitHub si plus utilisée

### Backlog ORBIT Sheets user-side
8. Compléter SIRET + adresse pro dans onglet Paramètres
9. Vérifier catégorie BPF sur chaque module

### Dette technique flaggée
- **`CLAUDE.md` ligne 56** : ID Airtable de la table « ORBIT - Recap mensuel » corrompu dans le fichier brut du repo (caractère invalide). À corriger au prochain OPEN — Clément doit redonner la vraie valeur depuis l'UI Airtable.
- Message du commit `74f88d8` : typo « non documentescent commits » (concaténation cassée entre « non documentés » et « recent commits »). Historique, non corrigeable.
- PR #1 body : quelques bullets auto-doublés (`- -`) à cause de l'auto-complétion du GitHub web editor. Cosmétique.

## Livrables Cowork outputs (session 23/04 soir)
- `quiz-match-section/MatchQuiz.tsx` (24 KB) — composant standalone
- `quiz-match-section/page.tsx.new` — nouvelle home avec import et insertion
- `quiz-match-section/0001-feat-home-add-MatchQuiz-section.patch` — patch git V1 initial
- `quiz-match-section/README.md` — doc d'application

## Livrables Cowork outputs (session 22/04, persistent)
- `0001-feat-refonte-langage-architecture-conversion.patch` (71 KB) — patch d'origine (déjà appliqué + étendu)
- `clementboule-site-code-changes.tar.gz` (106 KB) — snapshot pré-merge
- `DEPLOY_INSTRUCTIONS.md` — instructions initiales
- `Orbit1_AppsScript.gs` (30 KB) — script Apps Script complet

## Note protocole
Session 23/04 (OPEN → CLOSE) : protocole respecté. Push effectué via Chrome (sandbox sans credentials GitHub). Le merge sur `main` et le déploiement prod Vercel ont été autorisés explicitement par Clément pendant la session. Déploiement prod confirmé READY (dpl_5MjTEi..., commit 22b28f8). Section MatchQuiz visible sur clementboule.fr en live.
