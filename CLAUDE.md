# Memoire de travail - Clement Boule

## Moi
Clement Boule, 32 ans, formateur & consultant independant. Region parisienne (Houilles, 78).
Email : boule.clement@gmail.com (perso) - hello@clementboule.com (pro)

## Projet principal : clementboule.fr
Site vitrine B2B pour convertir des DRH, managers et dirigeants PME en clients directs.

| Info | Valeur |
|------|--------|
| Repo GitHub | ClementBoule/clementboule-site (PUBLIC) |
| Deploiement | Vercel (auto sur push main) |
| Stack | Next.js 14.2.3 App Router, Tailwind CSS, TypeScript |
| Domaine | clementboule.fr |
| Direction artistique | DA-C sauge brutaliste attenuee (refonte 25/04/2026) |

## ATTENTION REPO PUBLIC
Le repo GitHub `ClementBoule/clementboule-site` est public. Ne JAMAIS y stocker :
- Adresse postale personnelle de Clement
- Numero SIRET
- Numero de telephone personnel
- Cles API, tokens, secrets
- Donnees clients sensibles
Ces infos doivent etre demandees a Clement en debut de session quand on en a besoin.

## Decisions structurantes (ne pas remettre en question sans raison)
- Pas d'OPCO / Qualiopi : Clement vend en direct, aucune mention financement public sur le site
- Pas de temoignages fictifs : illegal (L121-2 Code conso). Section Testimonials.tsx en attente de vrais verbatims
- Pas de stats inventees : fidelite factuelle stricte, chaque chiffre doit etre source
- ScrollReveal supprime : remplace par CSS keyframes natifs (cbFadeUp) - plus fiable, meilleur SEO
- DA-C tokens cb-* dans tailwind.config.js (sarcelle, sarcelle-deep, terracotta, cardinal, rose, sauge, sauge-deep, sable, creme, encre, encre-soft)
- Statut auto-entrepreneur cache du site visiteur (Hero, About, Footer) mais OBLIGATOIRE dans /mentions-legales (LCEN art. 6)

## Chiffres reels valides
| Stat | Valeur | Source |
|------|--------|--------|
| Experience | 8 ans | Depuis 2018 (Reel) |
| Participants formes | +1 800 | Cumul reel |
| Langues | Bilingue FR / EN | Reel |

Note : ne plus utiliser "10 ans", "depuis 2016", "15 sessions/an", ni mentions "auto-entrepreneur" cote visiteur.

## ORBIT - Ecosysteme de pilotage

### ORBIT Dashboard (calendrier visuel annuel) - operationnel
Deploye le 21/04/2026.

| Info | Valeur |
|------|--------|
| URL deployee | https://clementboule.github.io/orbit-dashboard/ |
| Repo GitHub | ClementBoule/orbit-dashboard (public, HTML) |
| Stack | HTML/CSS/JS statique - Google Identity Services OAuth2 |
| APIs | Google Calendar (readonly) + Google Tasks (readonly) |
| Client ID OAuth | 809762603017-0on9sai9oth9v65ft4jmqfviejo3kn90.apps.googleusercontent.com |

### Modules ORBIT prevus
1. FAIT : ORBIT Dashboard deploye sur GitHub Pages (calendrier visuel)
2. A FAIRE : Integrer vue calendrier ORBIT dans Google Sheets "Orbit 1 - CRM & Pilotage" (Apps Script)
   - Sheets ID : 1ypHM2H-1t8sUUiAGmazUaP7KkSnlUYsKuveg4GAOA5M
3. A FAIRE : Recap mensuel automatique (URSSAF, CA)
4. A FAIRE : Google Calendar <- BPF Calendrier (sync)
5. A FAIRE : Veille juridique automatisee (Legifrance, URSSAF, DGEFP)
6. A FAIRE : HubSpot signature mail amelioree
7. A FAIRE : Facturation electronique B2B (loi ~sept 2027 pour TPE)

### Note historique
Une integration Airtable (base appcn2qmcqdKL7wgi) avait ete construite en avril 2026. Abandonnee le 25/04/2026 sur decision de Clement. Ne plus s'y referer.

### Fichier source BPF (reference)
- Google Sheets ID : 1f7svvdD9E1bKjR-FWz1RevrWNBFd4P0q3CKkF1vtVDY
- Feuille maitre : 0Presence (acces via gviz/tq avec credentials:include)

## Etat de la refonte DA-C

### Phase 1 (PR #3 mergee 25/04/2026 - commit 73cd886)
Refonte des 4 composants home restants : Proof, TopClients, HomeFAQ, HomeFab.

### Phase 2 (PR #4 mergee 25/04/2026 - commit f4c6954)
Refonte des pages internes : ContactForm, /contact, /a-propos, /formations, /formations/[slug], /cas-clients, /faq.

### Phase 3 (a venir - prochaine session)
Liste complete des retours et ajustements documentee dans memory/site.md

## Protocoles de session

### Protocole OPEN (debut de session)
Quand Clement ecrit "open" dans le chat :
0. OBLIGATOIRE AVANT TOUTE REPONSE : je clone le repo GitHub dans mon dossier de travail
   (git clone https://github.com/ClementBoule/clementboule-site.git)
   et je lis CLAUDE.md + memory/site.md depuis ce clone frais.
   Je n'ai PAS le droit de me baser sur ma memoire de session, sur le
   system prompt initial, ou sur un contexte en cache pour le recap.
   GitHub est la seule source de verite.
1. Je resume les actions recentes et l'etat du projet a partir des fichiers cloner.
2. Je propose la suite logique et on reprend le travail

### Protocole CLOSE (fin de session)
Quand Clement ecrit "close" dans le chat :
1. Je reponds : "Je me mets a jour et on arrete pour le moment ?"
2. Si oui :
   a. Je mets a jour CLAUDE.md + memory/site.md localement avec toutes les avancees de la session
   b. Je commit avec un message qui inclut un timestamp ISO 8601
   c. Je push sur GitHub (branche main) et je confirme a Clement avec le commit hash
   d. Je ne conclus qu'apres confirmation du push reussi
3. Si non -> je continue sans rien changer

## Preferences de travail
- Tutoiement, ton direct, sans compliments inutiles
- Mentor exigeant : corriger les erreurs de raisonnement, ne pas valider par politesse
- Majuscules francaises : seulement debut de phrase, noms propres, acronymes (RH, DISC, RPS)
- Pas de bullet points excessifs dans les reponses conversationnelles
- Pas de tirets cadratins (em-dash) qui sont un marqueur typique IA
- Code : DRY, KISS, Clean Code, pret a deployer (pas de placeholders)
- Securite : ne jamais prendre de decision financiere/identitaire sans approbation explicite
- Repo public : aucune donnee privee de Clement dans le repo (adresse, SIRET, telephone, secrets)

## Glossaire
| Terme | Sens |
|-------|------|
| CM6 | CodeMirror 6 - editeur GitHub, injection via execCommand |
| Slug | page app/formations/[slug]/page.tsx - page detail d'une formation |
| Proof | Composant chiffres cles + piliers differenciants (home) |
| cbFadeUp | Keyframe CSS maison pour les animations d'apparition sur le site |
| BPF | Bilan Pedagogique et Financier - declaration annuelle obligatoire organisme de formation |
| MAF | Mon Activite Formation - portail gouvernemental (Ministere du Travail) |
| ORBIT | Ecosysteme de pilotage pro de Clement (Dashboard + Sheets + outils connectes) |
| ORBIT Dashboard | Calendrier visuel annuel AM/PM deploye sur GitHub Pages |
| Sheets ORBIT | "Orbit 1 - CRM & Pilotage Clement Boule" - centralise CRM, sessions, calendrier |
| MRPI / EIRRP | Modules ISCOM (Management des RH / EIR Pratique et Internationale) |
| DA-C | Direction artistique sauge brutaliste attenuee (refonte 25/04/2026) |
| cb-* | Prefixe des design tokens Tailwind (cb-sarcelle, cb-sauge, cb-sable, cb-creme...) |
| LCEN | Loi pour la confiance dans l'economie numerique - impose mentions legales editeur |
