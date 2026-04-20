# Mémoire de travail — Clément Boulé

## Moi
**Clément Boulé**, 32 ans, formateur & consultant indépendant en autoentreprise.
Région parisienne. Email : boule.clement@gmail.com

## Projet principal : clementboule.fr
Site vitrine B2B pour convertir des DRH, managers et dirigeants PME en clients directs.

| Info | Valeur |
|------|--------|
| Repo GitHub | ClementBoule/clementboule-site |
| Déploiement | Vercel (auto sur push main) |
| Stack | Next.js App Router, Tailwind CSS, TypeScript |
| Domaine | clementboule.fr |

## Décisions structurantes (ne pas remettre en question sans raison)
- **Pas d'OPCO / Qualiopi** : Clément vend en direct, aucune mention financement public sur le site
- **Pas de témoignages fictifs** : illégal (L121-2 Code conso). Section Testimonials.tsx en attente de vrais verbatims
- **Pas de stats inventées** : fidélité factuelle stricte, chaque chiffre doit être sourcé
- **ScrollReveal supprimé** : remplacé par CSS keyframes natifs (cbFadeUp) — plus fiable, meilleur SEO
- **Injection GitHub via CM6** : technique pour pousser du code via l'éditeur GitHub en browser

## Chiffres réels validés
| Stat | Valeur | Source |
|------|--------|--------|
| Participants formés | +1 800 | 25 × 15 sessions × 5 ans |
| Expérience | 5 ans | Réel |
| Sessions / an | 15 | Réel |
| Langues | Bilingue FR / EN | Réel |

## Ce qui reste à faire (voir TASKS.md pour le détail)
1. Calendly — créer le compte et mettre à jour l'URL dans le CTA formation
2. Témoignages — fournir vrais verbatims (même SMS/email client suffit)
3. Chiffres — valider ou corriger le nombre d'entreprises clientes

## Préférences de travail
- Tutoiement, ton direct, sans compliments inutiles
- Mentor exigeant : corriger les erreurs de raisonnement, ne pas valider par politesse
- Majuscules françaises : seulement début de phrase, noms propres, acronymes (RH, DISC, RPS)
- Pas de bullet points excessifs dans les réponses conversationnelles
- Code : DRY, KISS, Clean Code, prêt à déployer (pas de placeholders)
- Sécurité : ne jamais prendre de décision financière/identitaire sans approbation explicite

## Glossaire
| Terme | Sens |
|-------|------|
| CM6 | CodeMirror 6 — éditeur GitHub, injection via `cmView.view.dispatch()` |
| Slug page | app/formations/[slug]/page.tsx — page détail d'une formation |
| Proof | Composant chiffres clés + piliers différenciants (home, entre Hero et Formations) |
| ScrollReveal | Ancien composant d'animation — supprimé, remplacé par cbFadeUp CSS |
| cbFadeUp | Keyframe CSS maison pour les animations d'apparition sur le site |

## Protocoles de session (mots-clés absolus)

Ces protocoles prennent priorité sur toute tâche en cours. Ils sont déclenchés par des mots-clés exacts écrits par l'utilisateur (seuls ou en début de phrase). Toute instance Claude lisant ce fichier doit les respecter strictement.

### Protocole "open" — reprise de session

Déclencheur : l'utilisateur écrit **"open"**.

Actions Claude :
1. Lire `memory/site.md` (état projet, commits récents, composants, next steps)
2. Lire `CLAUDE.md` (contexte permanent, décisions structurantes)
3. Livrer un récap structuré à l'utilisateur :
   - Où on en est (dernière date, dernières actions)
   - Commits récents significatifs
   - Composants actifs / fichiers clés
   - Next steps prioritaires
4. Proposer un point de reprise concret (ex: "On reprend sur le sprint SEO ? Ou tu veux que je lance autre chose ?")

### Protocole "close" — fin de session

Déclencheur : l'utilisateur écrit **"close"**.

Actions Claude :
1. Répondre exactement : *"Je mets à jour la mémoire et on arrête pour le moment ? (oui/non)"*
2. Attendre la réponse :
   - **"oui"** → Mettre à jour `memory/site.md` (nouvelle date, commits de la session, composants modifiés/créés, next steps mis à jour). Commit + push sur main. Confirmer "mémoire à jour, session close".
   - **"non"** → Ne rien faire, continuer la session normalement.
   - Autre réponse → Demander clarification.
