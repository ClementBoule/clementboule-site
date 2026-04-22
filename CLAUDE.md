# Memoire de travail - Clement Boule

## Moi
Clement Boule, 32 ans, formateur & consultant independant en autoentreprise. Region parisienne.
Email : boule.clement@gmail.com

## Projet principal : clementboule.fr
Site vitrine B2B pour convertir des DRH, managers et dirigeants PME en clients directs.

| Info | Valeur |
|------|--------|
| Repo GitHub | ClementBoule/clementboule-site |
| Deploiement | Vercel (auto sur push main) |
| Stack | Next.js App Router, Tailwind CSS, TypeScript |
| Domaine | clementboule.fr |

## Decisions structurantes (ne pas remettre en question sans raison)
- Pas d'OPCO / Qualiopi : Clement vend en direct, aucune mention financement public sur le site
- Pas de temoignages fictifs : illegal (L121-2 Code conso). Section Testimonials.tsx en attente de vrais verbatims
- Pas de stats inventees : fidelite factuelle stricte, chaque chiffre doit etre source
- ScrollReveal supprime : remplace par CSS keyframes natifs (cbFadeUp) - plus fiable, meilleur SEO

## Chiffres reels valides
| Stat | Valeur | Source |
|------|--------|--------|
| Participants formes | +1 800 | 25 x 15 sessions x 5 ans |
| Experience | 5 ans | Reel |
| Sessions / an | 15 | Reel |
| Langues | Bilingue FR / EN | Reel |

## ORBIT - Ecosysteme de pilotage (en construction)
Systeme parallele connectant tous les outils pro de Clement. Ne pas modifier les outils existants avant validation.

### ORBIT Dashboard (calendrier visuel annuel)
Deploye le 21/04/2026 - operationnel.

| Info | Valeur |
|------|--------|
| URL deployee | https://clementboule.github.io/orbit-dashboard/ |
| Repo GitHub | ClementBoule/orbit-dashboard (public, HTML) |
| Stack | HTML/CSS/JS statique - Google Identity Services OAuth2 |
| APIs | Google Calendar (readonly) + Google Tasks (readonly) |
| Client ID OAuth | 809762603017-0on9sai9oth9v65ft4jmqfviejo3kn90.apps.googleusercontent.com |
| Origines autorisees | http://localhost, http://localhost:8080, https://clementboule.github.io |
| Vue | Grille AM/PM Sept 2025 - Aout 2026, coloree par type d'activite |
A FAIRE : Integrer vue calendrier ORBIT dans Google Sheets "Orbit 1 - CRM & Pilotage"
- Sheets ID : 1ypHM2H-1t8sUUiAGmazUaP7KkSnlUYsKuveg4GAOA5M
- Onglet source : "Calendrier 25-26" (Date | Jour | Matin | Aprem | Notes)
- Vue souhaitee : grille annuelle mois/jours, AM/PM colore par type d'activite
- Technologie : Google Apps Script

### Airtable (base appcn2qmcqdKL7wgi)
| Table | ID | Role |
|-------|----|------|
| ORBIT - Sessions | tblxxg0sM1NzukU6D | Journal BPF - 1 ligne par session |
| ORBIT - Recap mensuel | tbl\�mBpamyOWKABN | CA par client + suivi URSSAF |

### Donnees importees
- 65 sessions 2026 importees (jan-20 avr), CA total 13 222.50 EUR, 192.5h
- ISCOM : 11 197.50 EUR | Yvelines Alternance : 2 025 EUR
- IDs dupliques resolus avec suffixes -1/-2/-3 (sessions demi-journee)

### Logique tarifaire
| Regle | Tarif |
|-------|-------|
| Module BMA | 50 EUR/h -> Yvelines Alternance |
| Groupes 3x (3E, 3F...) | 60 EUR/h -> ISCOM Bachelor |
| Reste | 75 EUR/h -> ISCOM Master |

ATTENTION: Client EDA-RH non encore identifie dans les sessions - a valider avec Clement

### Fichier source BPF
- Google Sheets ID : 1f7svvdD9E1bKjR-FWz1RevrWNBFd4P0q3CKkF1vtVDY
- Feuille maitre : 0Presence (acces via gviz/tq avec credentials:include)
- Le calendrier BPF (0Calendrier) est le master agenda - sync Google Calendar a faire

### Modules ORBIT prevus
1. FAIT : Sessions BPF -> Airtable (65 sessions 2026 importees)
2. FAIT : ORBIT Dashboard deploye sur GitHub Pages (calendrier visuel)
3. A FAIRE : Integrer calendrier ORBIT dans Google Sheets "Orbit 1" (Apps Script)
4. A FAIRE : Recap mensuel automatique (URSSAF, CA)
5. A FAIRE : Google Calendar <- BPF Calendrier (sync)
6. A FAIRE : Veille juridique automatisee (Legifrance, URSSAF, DGEFP)
7. A FAIRE : HubSpot signature mail amelioree
8. A FAIRE : Facturation electronique B2B (loi ~sept 2027 pour TPE)

## Ce qui reste a faire
- ORBIT : Calendrier dans Sheets "Orbit 1" (Apps Script) - prochaine priorite
- ORBIT : Recap mensuel auto + sync Google Calendar + veille juridique
- Site : Calendly - creer le compte, mettre a jour l'URL dans CTA formation
- Site : Temoignages - fournir vrais verbatims (SMS/email client suffit)
- Site : Valider ou corriger le nombre d'entreprises clientes
- Securite : Verifier variables d'env Vercel suite incident securite (email recu 21/04/2026)

## Protocoles de session

### Protocole OPEN (debut de session)
Quand Clement ecrit "open" dans le chat :
0. OBLIGATOIRE AVANT TOUTE REPONSE : je clone le repo GitHub dans mon dossier de travail
   (git clone https://github.com/ClementBoule/clementboule-site.git)
   et je lis CLAUDE.md + memory/site.md depuis ce clone frais.
   Je n'ai PAS le droit de me baser sur ma memoire de session, sur le
   system prompt initial, ou sur un contexte en cache pour le recap.
   GitHub est la seule source de verite. Si le clone echoue, j'explique
   l'erreur a Clement avant de continuer.
1. Je resume les actions recentes et l'etat du projet a partir des fichiers cloner.
2. Je propose la suite logique et on reprend le travail

### Protocole CLOSE (fin de session)
Quand Clement ecrit "close" dans le chat :
1. Je reponds : "Je me mets a jour et on arrete pour le moment ?"
2. Si oui :
   a. Je mets a jour CLAUDE.md + memory/site.md localement avec toutes les avancees de la session
   b. Je commit avec un message qui inclut un timestamp ISO 8601
      (ex: "close 2026-04-22T15:30+02:00 - <resume court>")
   c. Je push sur GitHub (branche main) et je confirme a Clement avec le commit hash
   d. Je ne conclus qu'apres confirmation du push reussi
3. Si non -> je continue sans rien changer

## Preferences de travail
- Tutoiement, ton direct, sans compliments inutiles
- Mentor exigeant : corriger les erreurs de raisonnement, ne pas valider par politesse
- Majuscules francaises : seulement debut de phrase, noms propres, acronymes (RH, DISC, RPS)
- Pas de bullet points excessifs dans les reponses conversationnelles
- Code : DRY, KISS, Clean Code, pret a deployer (pas de placeholders)
- Securite : ne jamais prendre de decision financiere/identitaire sans approbation explicite

## Glossaire
| Terme | Sens |
|-------|------|
| CM6 | CodeMirror 6 - editeur GitHub, injection via execCommand |
| Slug | page app/formations/[slug]/page.tsx - page detail d'une formation |
| Proof | Composant chiffres cles + piliers differenciants (home) |
| cbFadeUp | Keyframe CSS maison pour les animations d'apparition sur le site |
| BPF | Bilan Pedagogique et Financier - declaration annuelle obligatoire organisme de formation |
| MAF | Mon Activite Formation - portail gouvernemental (Ministere du Travail) |
| ORBIT | Ecosysteme de pilotage pro de Clement (Airtable + Dashboard + Sheets + outils connectes) |
| ORBIT Dashboard | Calendrier visuel annuel AM/PM deploye sur GitHub Pages |
| Sheets ORBIT | "Orbit 1 - CRM & Pilotage Clement Boule" - centralise CRM, sessions, calendrier |
| MRPI / EIRRP | Modules ISCOM (Management des RH / EIR Pratique et Internationale) |
