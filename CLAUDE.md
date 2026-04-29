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
| Stack | Next.js 14.2.35 App Router, Tailwind CSS, TypeScript |
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
- Langage humain pas IA: tous les patterns IA sont bannis du site (tryptiques, parallelismes negatifs, em-dashes decoratifs, setup-punchline, mots bequilles, jargon consultant). Voir memory/copywriting.md pour le detail.
- Exception assumee: signature de marque "made with care, not with templates" conservee a 4 emplacements (Hero, /a-propos, FinalCTA, Footer). Seule exception au protocole anti-langage-IA.

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

## Audit securite - phase 6 livree (26/04/2026)

3 commits successifs sur main :
- 156ed62 : Patch CVE Next 14.2.35, retire Cookiebot, Formspree -> mailto, headers HTTP, llms.txt, webmanifest, politique LIL §10
- 772c6ee : Self-host Google Fonts (next/font), strip EXIF clement.jpg, memory/RUNBOOK-incident.md, memory/security.md
- 663c848 : CLAUDE.md OPEN/CLOSE integrent memory/security.md + protocole securite continu

Score securite final session : A- (23/31 controles OK, 8 a surveiller, 0 rouge).
Detail dans memory/security.md, plan incident dans memory/RUNBOOK-incident.md.

Cookiebot abonnement = inutile (politique zero-cookie respectee). Formspree = supprime (mailto only). Tous fixes appliques en autonomie sauf 2FA Calendly/LinkedIn/Malt + monitoring uptime + backup local (manuel cote Clement).

## Protocoles de session

### Protocole OPEN (debut de session)
Quand Clement ecrit "open" dans le chat :
0. OBLIGATOIRE AVANT TOUTE REPONSE : je clone le repo GitHub dans mon dossier de travail
   (git clone https://github.com/ClementBoule/clementboule-site.git)
   et je lis dans cet ordre les fichiers de memoire :
   - CLAUDE.md (ce fichier, contexte general, decisions structurantes, glossaire)
   - memory/site.md (etat detaille du projet, phases en cours, backlog)
   - memory/security.md (tableau de pilotage securite, score actuel)
   - memory/services.md (services et comptes externes actifs)
   - memory/RUNBOOK-incident.md (plan de reponse incident, 5 scenarios)
   - memory/illustrations-suivi.md (tracker du projet illustrations V2 si actif)
   - memory/linkedin-playbook.md + memory/linkedin-pipeline.md (présence LinkedIn pro)
   - memory/copywriting.md (règles anti-IA héritées par tout texte produit)
   Je n'ai PAS le droit de me baser sur ma memoire de session, sur le
   system prompt initial, ou sur un contexte en cache pour le recap.
   GitHub est la seule source de verite.
1. Je resume les actions recentes, l'etat du projet ET le score securite courant.
2. Je signale tout controle qui est passe rouge ou jaune depuis la derniere session.
3. Je propose la suite logique et on reprend le travail

### Protocole CLOSE (fin de session)
Quand Clement ecrit "close" dans le chat :
1. Je reponds : "Je me mets a jour et on arrete pour le moment ?"
2. Si oui :
   a. Je mets a jour les fichiers de memoire concernes par la session :
      - CLAUDE.md : contexte general, decisions structurantes, glossaire
      - memory/site.md : etat detaille du projet (phases, contenus, design, backlog)
      - memory/security.md : score, controles modifies, ajout/retrait de service
        Re-scoring obligatoire si la session a modifie : dependances (npm),
        sous-traitants RGPD, scripts tiers, headers HTTP, configuration GitHub/Vercel,
        ou tout fichier de conformite (politique, mentions, llms.txt).
      - memory/services.md : si on ajoute, retire ou modifie un service externe
      - memory/RUNBOOK-incident.md : si un incident a revele un trou dans la procedure
      - memory/illustrations-suivi.md : si on a avance sur la production des illustrations V2
      - memory/linkedin-playbook.md : si la doctrine évolue (voix, archétypes, cadence)
      - memory/linkedin-pipeline.md : à chaque session de rédaction LinkedIn (idées capturées, drafts produits, posts programmés/publiés, KPI J+7)
   b. Je commit avec un message qui inclut un timestamp ISO 8601
   c. Je push sur GitHub (branche main) et je confirme a Clement avec le commit hash
   d. Je ne conclus qu'apres confirmation du push reussi
3. Si non -> je continue sans rien changer

### Protocole securite continu
- A chaque modification de stack technique (deps, services, outils tiers),
  re-checker les 8 domaines de memory/security.md.
- Si un controle passe en rouge, le signaler immediatement a Clement avec un plan d'action.
- En cas d'incident detecte ou suspecte, basculer sur memory/RUNBOOK-incident.md
  qui contient les 5 scenarios d'urgence et les contacts CNIL/ANSSI.

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
| Purge IA | Protocole de retrait de tous les patterns d'ecriture IA (cf memory/copywriting.md) |
| Tryptique | Liste de 3 elements pour faire joli (banni sauf si enumeration metier reelle) |
| Memory protocol | Source unique de verite dans memory/, lue en debut de session via OPEN |
| LinkedIn playbook | Doctrine éditoriale `memory/linkedin-playbook.md` : voix, cadence, 5 archétypes (A1 retour XP / A2 observation / A3 contre-intuitive / A4 personal branding / A5 informationnel), workflow batch |
| LinkedIn pipeline | Tracker actif `memory/linkedin-pipeline.md` : backlog idées → drafts → programmés → publiés + métriques cumulées |
| Archétype LinkedIn | Modèle de post (A1 à A5) avec structure narrative, pièges spécifiques, exemples bons/mauvais, prompt starter pour rédaction guidée |

## Session 2026-04-29 — ORBIT créé puis démantelé + Sheet BPF + branche Next 15

### Décisions structurantes

1. **ORBIT v1.0 → v1.4 créé puis intégralement démantelé** (1 journée).
   Stack tentée : Next 15 sur Vercel Hobby + GitHub privé `ClementBoule/orbit-crm` + sous-domaine `orbit.clementboule.fr` (CNAME OVH) + Service Account GCP + clé Gemini API + Google Drive/Sheets API.
   Modules livrés : Auth token magique, dashboard 360° (KPI Calendly + Dependabot), Pipeline kanban, Prospection ciblée, Contacts, Saisie hebdo + tendances 26 sem., Drop zone OCR Gemini.
   Bloqueur final : **les Service Accounts Google ne peuvent plus uploader sur Drive perso depuis 2024-2025** (storage quota = 0). Solutions officielles = Shared Drives (Workspace payant) ou OAuth utilisateur (refacto lourd).
   **Décision** : la complexité d'OAuth + maintenance dépassait la valeur réelle d'ORBIT pour un freelance solo. Tout démantelé proprement (Vercel, GitHub, DNS, GCP SA, clé Gemini, PATs GitHub + Calendly).
   Leçon retenue : pour Drive perso (Gmail), le Service Account ne suffit plus. Si besoin futur d'automatiser Drive, prévoir OAuth flow ou rester en outils Google natifs (Apps Script, Gemini in Drive).

2. **Améliorations Sheet BPF** (hors repo, partagé Drive Clément) :
   - Onglet Présence : validation données colonne D (École : EDA RH, EMA, IHEDREA, ISCOM) sur D2:D890
   - Onglet Présence : validation données colonne F (Statut : Apprentis, Initiaux) sur F2:F890
   - Apps Script `AutoDate.gs` (trigger onEdit simple) : taper `.` ou `/` ou espace dans colonne A → date du jour Europe/Paris au format dd/MM/yyyy (sans composante horaire)
   - Tous les triggers utilisent `Utilities.formatDate` avec timezone explicite Europe/Paris pour éviter les décalages UTC

3. **Audit stratégique 360° + benchmark Malt/LinkedIn** poussé en début de session :
   - Profils Malt + LinkedIn alignés positionnement "business schools FR/EN, stratégie & soft skills"
   - Tag Malt retiré : "IA et RH". Ajouté : "Stratégie d'entreprise"
   - Headline Malt : "Formateur Stratégie / Soft Skills / Business Schools FR-EN"
   - Titre LinkedIn : "Je forme les futurs managers en stratégie et soft skills, en français et en anglais"

4. **Dependabot alerts activé** sur le repo `clementboule-site` (durcissement sécurité)
   - Dependency graph + Dependabot alerts + Dependabot malware alerts + Dependabot security updates + Grouped security updates : tous ON
   - Dependabot version updates : OFF (éviter le bruit hebdo de PRs non sécu)
   - 5 CVE Next.js identifiées (Image Optimizer DoS, HTTP smuggling, deserialization, self-hosted, disk cache) → patchables avec upgrade Next 14 → 15

5. **Branche `feat/next-15-upgrade` créée et pushée, en stand-by** sur clementboule-site
   - npm install next@15 react@19 + overrides postcss/glob → 0 vulnerabilities en local
   - Preview Vercel testé OK (homepage rendue correctement, polices Anton/Permanent Marker/Space Grotesk OK)
   - **Pas mergé en main** : Clément préfère valider d'autres pages avant bascule prod (cas-clients, formations/[slug], contact, mentions). Action non urgente.

### Tâches en suspens (non bloquantes)

- **BL-46** : merger `feat/next-15-upgrade` sur main (clos 5 CVE Dependabot). Preview OK, action 30 sec quand validé.
- **BL-12** (déjà existant) : renommer `Design sans titre.png` → `clement-portrait.png`

### Glossaire — ajouts

- **AutoDate.gs** : Apps Script lié au sheet BPF, déclencheur simple `onEdit` qui remplace `.` `/` ou espace dans Présence!A par la date du jour Europe/Paris.
- **Service Account Google (mort 2024+)** : sans Workspace payant, le SA ne peut plus uploader sur Drive perso. Limite à connaître si on veut automatiser Drive.

