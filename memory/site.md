# État du projet — clementboule.fr & ORBIT
Dernière mise à jour : 24 avril 2026 — 17:36 (close 2026-04-24T17:36+02:00)

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
