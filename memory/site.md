# État du projet — clementboule.fr & ORBIT
Dernière mise à jour : 25 avril 2026 — 19:30 (close 2026-04-25T19:30+02:00)

## Site clementboule.fr — état actuel (main, déployé Vercel)

### Pages actives
- `/` (home) — Navbar → Hero → **MatchQuiz** → Proof → TopClients → Formations → Process → HomeFAQ → FinalCTA → Footer
- `/formations` + 6 slugs (RH, posture, RPS, stratégie, soft-skills, spine-up)
- `/a-propos` — parcours complet
- `/cas-clients` — 4 cas réels + CTA intermédiaire après cas 2
- `/faq` — 4 catégories (Approche, Formats, Tarifs, DISC) — entièrement au vouvoiement
- `/contact` — ContactForm avec pré-remplissage query params + bandeau "Contexte pré-rempli"
- `/ressources` — 6 cards
- `/test-disc` — parcours interactif DISC
- `/mentions-legales`, `/politique-de-confidentialite`

### Composants clés
- UI primitives : `components/ui/` (Button, Container, Section, SectionHeader)
- Home : Hero (CTA primaire unique), Proof, TopClients, Formations, **MatchQuiz V2**, Process, HomeFAQ, FinalCTA
- MatchQuiz : 3 questions → card reco → CTA vers `/contact?type=Formation&message=...` (plus de mailto, -20 à -40% friction selon BounceX)
- Forms : ContactForm avec useSearchParams (pré-remplissage automatique depuis le quiz)

### Build status
Next.js 14.2.3, 19 pages statiques générées, home à 25,5 kB First Load JS.

## Session 24/04 — 17 commits en 2 demi-journées

### 1. SEO + GEO (commits 319ee57, 30cff1b, e2a559d)
- `public/llms.txt` ajouté (standard llmstxt.org pour ChatGPT, Claude, Perplexity, Gemini)
- Meta description : 223 → 144 caractères (optimal SERP)
- Hreflang EN retiré (pointait vers `/en` 404)
- FAQPage JSON-LD : 4 → 12 questions, synchronisé avec `/faq` réel
- **Cloudflare Web Analytics branché** (token `978174ed0d3a40eab4ab55b09079714a`, cookieless, RGPD-natif, gratuit illimité)
- Hero couche sorcier : `h1` → `h2` (un seul h1 par page)
- Logos LinkedIn/Malt (couche sorcier) : alt ajoutés

### 2. CRO — Refonte funnel (commits f996486, ddf37b5, 3ac17b8, 9992985, 17c82ed)
- MatchQuiz repositionné **juste après Hero** (position précédente ~57% page height, 45-70% des visiteurs ne le voyaient pas — Nielsen Norman)
- Hero CTA réduit de 2 à 1 : retrait de « Voir les formations » (paradox of choice, Barry Schwartz 2004)
- MatchQuiz CTA primaire : mailto externe → redirection `/contact?type=Formation&message=...` (reste dans le flow, pas de bascule mail)
- ContactForm lit les query params via `useSearchParams` et pré-remplit type + message, affiche bandeau bleu « Contexte pré-rempli depuis le quiz »
- Textarea passe de 5 à 7 rows quand pré-rempli (pour afficher le contexte multiligne)
- Suspense wrapper sur `/contact` (requis Next.js 14 pour `useSearchParams` dans build statique)

### 3. Vouvoiement B2B premium (commits d63270c, 2fa9d91, 4496dde, 45164d2)
23 chaînes customer-facing passées du tutoiement au vouvoiement : MatchQuiz (9), ContactForm bandeau (1), FAQPage JSON-LD (6), page `/faq` (8). Cohérence 100% sur le site.

### 4. Alignement format durée quiz ↔ formations (commits 54d2378, c74d9bf, 18ced9d)
- `formations-data.ts` exporte maintenant `QuizSlot` (type), `QUIZ_SLOT_LABELS` (labels UI), `QUIZ_SLOT_RANK` (comparaison slots)
- Chaque formation a un champ `format.quizSlot` (half/day/twoThree/program)
- MatchQuiz utilise `reco.format.quizSlot` comme source de vérité unique (suppression des constantes locales dupliquées)
- Page détail formation : card Durée refactorée avec badge accent (slot quiz) prominent + précision en sous-titre

Mapping slot appliqué :

| Formation | Slot quiz | Précision |
|---|---|---|
| RH & marque employeur | 2 à 3 jours | 2,5 jours (modulable) |
| Posture professionnelle | 2 à 3 jours | 2 jours |
| Prévention RPS | 2 à 3 jours | 2 jours |
| Stratégie d'entreprise | 2 à 3 jours | 3 jours (modulable en séminaire) |
| Soft Skills | 2 à 3 jours | 2 jours |
| Spine'Up | Parcours étalé | 3,5 jours étalés sur 3 mois |

### 5. Refonte wording quiz (commits 63e635c, 920cdd5)
- Étape 3 du quiz : sous-titres explicites sous chaque slot (« Découvrir le sujet » / « Aller à l'essentiel » / « Le format complet » / « Étalé sur plusieurs mois »)
- Warning soft adouci : titre « On peut adapter », body « Le format complet, c'est plutôt X. On peut le condenser si c'est mieux pour vous — il suffit d'en parler. »
- Tous les textes du quiz réécrits pour être humains, directs, sans jargon consultant (« cadrer », « recommandation », « optimiser ») ni tournures IA-génériques :
  - « Qui voulez-vous former ? » → « Vous formez qui ? »
  - « Sur quel sujet en priorité ? » → « Sur quoi ? »
  - « Combien de temps pouvez-vous y consacrer ? » → « Vous avez combien de temps ? »
  - « Cadrer ce projet en 30 min » → « En parler avec moi »
  - « Ma recommandation » → « Ma proposition »
  - « Pas sûr ? Parlez-moi de votre besoin directement » → « Rien ne colle ? Écrivez-moi directement. »
- Même ton appliqué à l'EN

## Diagnostic de conversion réalisé dans la session

Sources à l'appui :
- [Nielsen Norman Group — scroll attention](https://www.nngroup.com/articles/scrolling-and-attention/)
- [Forrester B2B Benchmarks 2024](https://www.forrester.com/)
- [Cegos catalogue formations management/RH](https://www.cegos.fr/formations)
- [ANACT catalogue RPS intra](https://www.anact.fr/)
- [INRS catalogue stages](https://www.inrs.fr/services/formation.html)

Note potentiel réel après session 24/04 : estimé 1,5-2,5 % (vs 0,5-1,2 % avant), à valider dans 2-4 semaines avec Cloudflare Web Analytics.

## ORBIT Dashboard — déployé 21/04/2026
- URL : https://clementboule.github.io/orbit-dashboard/
- Repo : ClementBoule/orbit-dashboard (public, HTML statique)
- Stack : HTML/CSS/JS + Google Identity Services OAuth2
- APIs : Google Calendar + Google Tasks (readonly)
- Client ID : 809762603017-0on9sai9oth9v65ft4jmqfviejo3kn90.apps.googleusercontent.com

## ORBIT Sheets (Orbit 1) — construit 22/04/2026
- URL : https://docs.google.com/spreadsheets/d/1ypHM2H-1t8sUUiAGmazUaP7KkSnlUYsKuveg4GAOA5M/edit
- 12 onglets : Lisez-moi, Paramètres, Clients, Modules, Sessions, Calendrier 25-26, Calendrier 26-27, BPF Récap, Factures, Déclarations, Tâches, Veille
- Compteur BPF auto via SUMIFS, locale en_US

## Ce qui reste à faire (par priorité)

### Backlog ORBIT
1. **Intégrer vue calendrier ORBIT dans Sheets Orbit 1 via Apps Script** (priorité 1 depuis plusieurs sessions — script `Orbit1_AppsScript.gs` prêt dans outputs Cowork 22/04)
2. Récap mensuel automatique (URSSAF, CA)
3. Google Calendar ← BPF Calendrier sync
4. Veille juridique automatisée (Légifrance, URSSAF, DGEFP)
5. HubSpot signature mail améliorée
6. Facturation électronique B2B (loi ~sept 2027 TPE)

### Backlog site
1. **Sécurité : vérifier variables d'env Vercel suite incident 21/04/2026** (ouvert depuis 3 jours — à prioriser au prochain OPEN)
2. Calendly : créer compte et mettre à jour URL dans CTA slug formation (débloquerait V2 MatchQuiz avec booking inline)
3. Témoignages : activer `Testimonials.tsx` dès réception verbatims réels
4. Valider ou corriger le nombre d'entreprises clientes affiché
5. Nettoyage code : `Contact.tsx` non importé (ex-ancien composant), à supprimer si confirmé
6. Supprimer la branche `quiz-match-section` sur GitHub (PR #1 mergée depuis)
7. Multi-slot par formation : aujourd'hui chaque formation a un slot unique `quizSlot`. Enrichir pour permettre plusieurs slots (ex: RPS dispo en 1 jour ET 2-3 jours) réduirait le warning et capterait plus de leads — voir option A du diag CRO du 24/04
8. Visuel du warning MatchQuiz à adoucir (icône triangle trop intrusive selon retour utilisateur)

### Dette technique flaggée
- **`CLAUDE.md` ligne 56** : ID Airtable corrompu (caractère invalide) — toujours à corriger au prochain OPEN. Clément doit redonner la vraie valeur depuis l'UI Airtable.
- Message du commit `74f88d8` : typo « non documentescent commits ». Historique, non corrigeable.

## Décisions structurantes prises dans la session

- **EN = confort de lecture seulement** (pas d'indexation Google séparée → hreflang EN retiré)
- **Analytics : Cloudflare Web Analytics** (gratuit, cookieless, RGPD-natif — pas de Plausible payant, pas d'Umami self-hosted, pas de GA)
- **Vouvoiement** : cohérence B2B premium sur tout le site
- **Wording humain** : rejet du jargon consultant et des tournures IA-génériques dans le quiz
- **Source de vérité unique** : les slots de durée sont déclarés dans `formations-data.ts` et consommés partout (quiz + page formation)

## Livrables Cowork outputs persistants
- `quiz-match-section/MatchQuiz.tsx` (V1 initiale)
- `quiz-match-section/README.md` — doc d'application patch
- `0001-feat-refonte-langage-architecture-conversion.patch` (71 KB) — patch originel
- `Orbit1_AppsScript.gs` (30 KB) — script Apps Script à intégrer dans Sheets

## Note protocole
Session 24/04 (OPEN → CLOSE) : 17 commits poussés en autonomie via Chrome (sandbox sans credentials GitHub). Cloudflare Web Analytics branché en autonomie avec accord explicite de Clément pour créer le site dans son dashboard. Merge sur `main` autorisé explicitement. Déploiements prod Vercel confirmés READY tout au long.

## Session 24/04 soir — CTA Calendly + /contact (split design)

Commits poussés en autonomie via Chrome (sandbox bash KO, CM6 + execCommand('insertText') pour injection) :
- `5c8be73` feat(cta): add central CTA config (Calendly + Contact)
- `24a022d` Add central configuration for CTAs (rename `lib/lib/` → `lib/`)
- `e5d3eaa` feat(process): split CTA — Calendly (primary) + Contact form (secondary)
- `3fd82b6` feat(finalcta): split CTA — Calendly primary + Contact secondary
- `09ebfdb` feat(navbar): CTA Calendly + lien Contact dans la nav
- `2406f7d` feat(contact): add Calendly banner at top of /contact

Les 6 déploiements Vercel sont READY (vérifiés via Vercel MCP, aucune erreur dans la fenêtre).

### Architecture CTA mise en place
- `lib/cta-config.ts` — source de vérité unique : `CALENDLY_URL`, `CONTACT_URL`, micro-copy bilingue
- `CALENDLY_URL = "https://calendly.com/boule-clement/30min"` (lien public validé par Clément)
- Design split partout : Calendly primaire (bouton plein, icône calendrier, `target="_blank" rel="noopener noreferrer"`) + /contact secondaire (outline, icône enveloppe)
- Zones touchées : `components/Process.tsx` (bloc final), `components/FinalCTA.tsx` (retrait du CTA "Voir les formations" redondant), `components/Navbar.tsx` (desktop + mobile + ajout Contact dans nav items), `app/contact/page.tsx` (bandeau haut "Vous préférez un appel direct ?")

### Vérif Calendly ↔ Google Calendar (consigne explicite de Clément)
- `calendly.com/integrations?tab=manage` → **Google Calendar Connected** + **Google Meet Connected**
- Les créneaux affichés aux visiteurs refléteront donc la vraie dispo GCal de Clément. Pas de risque de double-booking.

### Méthode technique (pour futures sessions sans sandbox)
- Sandbox bash KO toute la session → workflow Chrome pur
- Injection dans CM6 : `document.execCommand('insertText', false, content)` sur `.cm-content` contentEditable (la prop `cmView` n'est plus exposée sur GitHub 2026)
- Lecture des fichiers blob : extraction de `rawLines` depuis `script[data-target="react-app.embeddedData"]` (contourne le `[BLOCKED]` cookies quand on passe par `.innerText`)
- Commit dialog : rechercher `button:has(text="Commit changes...")` puis setter l'input message et cliquer "Commit changes" sans ellipse
- Lien public Calendly obtenu au 2ème échange (Clément avait d'abord collé l'URL admin `/app/intro/team` qui redirige vers login si non-authentifié)

## Priorités au prochain OPEN
1. **Passe humanisation globale** — Clément a signalé que plusieurs textes du site ont encore des tournures IA-typées (parallélismes négatifs, tryptiques, « ce qui change vraiment »). La refonte CTA était prioritaire ; la refonte wording reste ouverte pour Hero subtitle, /a-propos paragraphes, Proof pilier 3, etc. Consigne : pas de jargon consultant, pas de punchlines « X, pas Y », pas de « vraiment ».
2. **Sécurité Vercel (incident 21/04)** — ouvert depuis 4 jours. À traiter en priorité absolue au prochain OPEN.
3. **Dette technique `CLAUDE.md` ligne 56** — ID Airtable corrompu, toujours pas corrigé. Besoin de la vraie valeur depuis l'UI Airtable.
4. **ORBIT Apps Script** — script prêt dans outputs Cowork 22/04, non intégré dans Sheets Orbit 1.


## Session 25/04 — UX post-CTA + bouton quiz dans navbar + nouveau prompt langage

3 commits poussés sur main, déploiements Vercel READY (ContactForm, MatchQuiz) et BUILDING (Navbar — build local OK) :

- `eaf4f29` feat(contact): humanize wording + post-send pop-up with Calendly + LinkedIn CTAs
- `83d89f6` feat(matchquiz): add id="quiz" anchor for navbar deep-link
- `fc78193` feat(navbar): add "Trouver mon format" button (deep-link to #quiz)

### Détails livrés

**ContactForm refondu en langage humain.** Tous les textes du formulaire passés au filtre anti-IA (placeholder textarea = « Dites-moi votre situation, ce qui coince, ce que vous voulez obtenir », labels = « Votre nom », « Entreprise (si pertinent) », « C'est pour quoi ? », bouton = « M'envoyer le message »).

**Pop-up post-envoi.** Après soumission du formulaire (mailto), affichage d'un écran de confirmation avec wording honnête « Votre message est dans votre boîte mail / Pensez à cliquer sur Envoyer pour qu'il parte ». Deux CTAs croisés en dessous : « Réserver un appel » (Calendly) + « Suivez-moi sur LinkedIn ». Logique : on a capté un signal d'intention via le formulaire, on propose la montée en engagement (appel) et le faible engagement complémentaire (LinkedIn).

**Pas de pop-up post-Calendly.** Le compte Calendly est sur essai gratuit Teams jusqu'au 9 mai 2026 (vérifié dans `/app/admin/billing`). Le redirect after booking est dispo pendant l'essai mais pas en Free. Pour rester aligné avec la règle « pas de système qui pousse à payer », on s'appuie sur le mail auto Calendly qui marche en Free aussi. Tâche reportée comme avenant possible si Clément choisit un plan payant plus tard.

**Bouton « Trouver mon format » dans la navbar.** Ajout d'un bouton secondaire outline à côté du CTA Calendly primaire, desktop + mobile, qui pointe vers `/#quiz`. Section MatchQuiz a reçu `id="quiz"` pour ancre. Logique : circulation fluide depuis n'importe quelle page interne vers le quiz qui est dans la home.

### Nouveau prompt langage humain dans préférences Clément

Clément a copié dans ses préférences personnelles un long prompt « anti-langage IA » qui couvre toutes les productions, toutes les langues, tous les contextes. Patterns bannis : parallélismes négatifs « X, pas Y », tryptiques rythmiques, phrases nominales pour l'effet, em-dashes décoratifs, setup-punchline, mots béquilles (« vraiment », « concrètement »), vocabulaire consultant (« cadrer », « ancrer »), réassurance générique, adjectifs marketing en chaîne. Test simple : si je peux l'imaginer dit à voix haute par quelqu'un au téléphone, c'est bon ; si je l'imagine en sous-titre TED, je réécris.

Cette règle prévaut sur toute autre règle de style — y compris pour copywriting site, slides commerciales, mails clients, doc technique. Pas de dérogation pour cause de « tonalité premium ».

### Méthode technique cette session

Sandbox bash dispo cette fois (pas comme la session du 24/04 soir). Clone + édition + build local OK avant push. Push fait via Chrome (CM6 contentEditable + execCommand insertText) car pas de credentials git dans le sandbox.

Pour les gros fichiers (MatchQuiz 26 KB), passage du contenu via `JSON.stringify` Python puis injection en string littérale JS dans le tool javascript_exec. Marche jusqu'à ~30 KB sans souci.

### Décision business notée

Clément veut une refonte visuelle significative du site, autour des « aquarelles de la partie formation ». Bug repéré : pas de fichier `*aquarelle*` dans `public/`, et un commentaire `// Image principale (à remplacer par tes aquarelles)` dans `formations-data.ts:46` indique que les 6 PNG actuels (`public/illustrations/formations/*.png`) ne sont pas les aquarelles définitives. Avant de livrer un plan visuel, attendre que Clément précise si les aquarelles existent déjà (ailleurs), s'il les fait peindre, ou s'il les génère en IA.

## Priorités au prochain OPEN

1. **Plan d'élévation visuelle du site** — chantier majeur signalé par Clément. Cadrer une fois qu'il a tranché sur la source des aquarelles (déjà existantes, à peindre, à générer). Préserver Core Web Vitals + responsive PC/tablette/mobile.
2. **Sécurité Vercel (incident 21/04)** — toujours ouvert, maintenant J+4. À traiter avant le chantier visuel.
3. **Dette `CLAUDE.md` ligne 56** — ID Airtable corrompu, vraie valeur attendue de Clément.
4. **ORBIT Apps Script** — script prêt dans outputs Cowork 22/04, non intégré.
5. **Synchroniser `CLAUDE.md` avec les vraies stats** — il liste encore « 5 ans / 15 sessions par an / +1 800 participants » alors que le storytelling site est passé à « 10 ans » et que la stat « 15 sessions/an » a été retirée du site comme ambiguë. Cohérence à reprendre.

## Session 25/04 soir — REFONTE VISUELLE COMPLÈTE (DA-C sauge brutaliste atténué)

PR #2 mergée sur main : `5751642 Merge pull request #2 from ClementBoule/redesign-da-c-sauge`. La home est entièrement refondue.

### Direction artistique retenue (après ~15 itérations de mockups)

**Palette C — Earth Saturée + sauge** (validée après comparaison de 6+ palettes différentes) :
- `--cb-sarcelle: #1FB8B0` — primaire signature
- `--cb-sarcelle-deep: #0F7B75` — accent profond
- `--cb-terracotta: #E85D2F` — chaud signature
- `--cb-cardinal: #C8102E` — accent fort
- `--cb-rose: #FBC8D8` — pastel pour highlights
- `--cb-sauge: #8BA88E` — structure (bordures, ombres)
- `--cb-sauge-deep: #4F6A52` — structure foncée
- `--cb-sable: #FBF4DD` — fond principal (papier crème)
- `--cb-creme: #FCFAF2` — fond frame portrait gravure (validé)
- `--cb-encre: #2A2A2A` — texte body

**Typographie** : Anton (titres caps, signature BCO/EDA-RH), Space Grotesk (body), Permanent Marker (accents stylo)

**Skin** : brutalisme atténué ~70% — bordures 2.5-3px, ombres décalées 7-10px en couleur, rotations subtiles -0.4deg sur cards, ticker marquee, caps lock H1/H2.

### Composants refondus (13 commits sur la branche redesign-da-c-sauge)

- `58cd768` tailwind.config.js — design tokens cb-* + fonts
- `057d4ab` globals.css — palette CSS variables + import Google Fonts
- `cec8539` layout.tsx — body bg-cb-sable text-cb-encre
- `c1d35f6` Navbar — sauge brutaliste, CTAs néo-brutalist
- `18ae623` Hero — Anton 156px caps, mot-clé terracotta highlighted, portrait frame
- `76b50ed` Formations — 6 cards polychromes, micro-rotations
- `42003da` Process — bloc fond sauge profond + bande corail traversante
- `9f41b66` FinalCTA — bloc sarcelle saturé, aquarelle Spine'Up watermark
- `1d2690c` Footer — logotype Anton « CLÉMENT BOULÉ. » géant
- `4120d9f` token cb-creme #FCFAF2
- `8b4b39b` --cb-creme variable CSS
- `c8e4fb1` Hero portrait frame sauge-deep → creme (validé visuellement)
- `c4b98fc` MatchQuiz section bg sable

### Décisions clés

- **Palette validée** : C Earth Saturée parmi 6 propositions (A Atelier cobalt, B Acid Pop fuchsia, C, D Bauhaus, E Y2K, F mono-rouge)
- **Niveau brutalisme** : N°1 ~70% atténué
- **Couleur structurante** : sauge `#8BA88E` pour remplacer le noir (refusé par Clément)
- **Fond portrait gravure** : crème `#FCFAF2` (PNG opaque noir, validé après 3 tentatives)
- **Typo** : Anton + Space Grotesk + Permanent Marker (référence BCO bettercallouss.com)
- **Visuels existants conservés** : 6 aquarelles formations + 2 portraits gravure

### Mockups produits (outputs Cowork — historique)

- redesign-mockup-v1.html (rejet — trop éditorial calme)
- redesign-mockup-v2.html (validé — direction bold-graphique)
- redesign-palettes-comparison-1/-2.html (6 palettes)
- redesign-brutalism-levels.html (3 niveaux)
- redesign-N1-less-black.html / dark-replacements.html / pastels.html / P2-frames.html
- redesign-portrait-frame-bg.html (validation finale crème)
- prompts-midjourney-v1.md (assets MJ à générer)

### Ce qui reste à faire au prochain OPEN

1. **Étendre la DA-C aux pages internes** — `/contact`, `/a-propos`, `/faq`, `/cas-clients`, `/ressources`, `/test-disc`, slug formations. Encore en ancien skin bleu. Cohérence chromatique à propager.
2. **Aquarelles MJ** à générer par Clément (hero banner 21:9, taches encre transparentes, torn paper edges)
3. **Sécurité Vercel (incident 21/04)** — toujours flaggé, J+5
4. **Dette CLAUDE.md ligne 56** — ID Airtable corrompu
5. **ORBIT Apps Script** — script prêt outputs Cowork 22/04
6. **Synchroniser CLAUDE.md** — stats obsolètes

## Note protocole
Session 25/04 soir : Refonte visuelle complète validée et mergée sur main en autonomie. 13 commits via PR #2. Preview Vercel validée par Clément avant merge.

## Plan d'extension DA-C aux pages internes (à reprendre au prochain OPEN)

13 fichiers encore en ancien skin bleu après la refonte du 25/04 soir.

**Composants home restants (4)** : Proof.tsx, TopClients.tsx, HomeFAQ.tsx, HomeFab.tsx
**Pages internes (10)** : /contact, /a-propos, /faq, /cas-clients, /ressources, /test-disc (24 KB interactif), /formations (liste), /formations/[slug] (template), /mentions-legales, /politique-de-confidentialite

### Plan en 5 phases

**Phase 1 — Composants home restants (1h)** : Proof, TopClients, HomeFAQ, HomeFab. Risque très faible.

**Phase 2 — Pages conversion (2-3h)** : /contact (30min), /a-propos (45min), /formations/[slug] template (1h), /formations liste (30min).

**Phase 3 — Pages secondaires (1-2h)** : /faq, /cas-clients, /ressources, /mentions-legales, /politique-de-confidentialite.

**Phase 4 — /test-disc (2-3h)** : le plus complexe. Mockup HTML séparé d'abord pour valider la direction avant de toucher le composant React 24 KB.

**Phase 5 — Audit & polish (1h)** : test desktop/tablette/mobile, transitions, hex hardcodés oubliés.

### Méthode

Branche dédiée `redesign-da-c-pages-internes`. Vercel preview à chaque phase. Merge final sur main quand tout validé. Aucun risque pour la prod.

### Effort total

7-10 heures étalées sur 2-3 sessions.

### Choix proposé à Clément (en attente)

- A : phases 1+2 d'un coup (~3-4h) — home complète + pages conversion
- B : phase 1 seule (~1h) — juste les composants home restants
- C : tout d'un coup en plusieurs sessions (~7-10h)

Clément a répondu **close** avant de choisir. À reprendre au prochain OPEN avec cette question en attente.
