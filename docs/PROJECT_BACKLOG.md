# PROJECT_BACKLOG — clementboule-site (branche v2-design)

> Fichier de mémoire persistant du projet. À redonner en début de session pour reprendre le contexte immédiatement.
> Dernière mise à jour : 2026-04-16

---

## Stack technique

| Élément | Valeur |
|---|---|
| Framework | Next.js 14.2.3 — App Router |
| React | 18 |
| TypeScript | Oui |
| CSS | Tailwind CSS |
| Branche de travail | v2-design |
| Repo GitHub | ClementBoule/clementboule-site (Capital C et B) |
| Déploiement | Vercel (preview auto sur push v2-design) |
| Email contact | boule.clement@gmail.com |

---

## Fonctionnalités livrées

### Sessions précédentes
- LanguageContext.tsx — 6e formation SpineUp ajoutée (FR + EN)
- FormationModal.tsx — exports PHOTOS, OVERLAYS, GRADIENTS, SHADOW_COLORS, ACCENTS, ILLUSTRATIONS, FORMATION_DETAILS pour 6 formations incl. SpineUp
- Formations.tsx — refonte complète : background images, hover 640px, grille 3+3 pour 6 cartes, useEffect auto-open modal via ?open=N (+ nettoyage URL via history.replaceState)

### Session 2026-04-16
- ChatBot.tsx — réécriture complète (commit 4d017df) :
  - KW_MAP : détection mots-clés en texte libre (13 règles) vers navigation noeud TREE
  - ContactForm : formulaire inline (nom / email / message) avec POST /api/contact + fallback mailto:
  - Barre de saisie texte en bas du chat (inputText + handleTextSend)
  - action form sur tous les noeuds contact (remplace redirect /contact)
  - action formations sur cta_formations vers /#formations
  - Noeud _sent pour confirmation post-envoi
  - showForm state pour basculer formulaire / choix

---

## Fichiers clés et leur rôle

| Fichier | Rôle |
|---|---|
| components/ChatBot.tsx | Chatbot flottant — machine d'état TREE, formulaire inline, saisie libre |
| components/Formations.tsx | Grille 6 formations avec hover, auto-open modal via ?open=N |
| components/FormationModal.tsx | Modal détail formation — exports PHOTOS, OVERLAYS, FORMATION_DETAILS |
| components/LanguageContext.tsx | Contexte i18n FR/EN — contient les 6 formations |
| app/api/contact/route.ts | Route API contact (à vérifier : existe ?) |

---

## Technique d'injection GitHub (éditeur web)

Pour les fichiers volumineux (> 20 Ko), utiliser l'injection base64 en 2 parties.

Point de split : à un multiple de 3 bytes pour éviter les padding = en milieu de fichier.

Décodage : decodeURIComponent(escape(atob(b64)))

Injection Part 1 : document.execCommand selectAll puis insertText dans .cm-content
Injection Part 2 : range.selectNodeContents + range.collapse(false) puis insertText

---

## Structure TREE ChatBot (noeuds principaux)

- start
  - entreprise -> ent_culture / ent_managers / ent_rps / ent_bilingual
  - manager -> mgr_leadership / mgr_change
  - etudiant -> etu_coaching / etu_orientation
  - ecole -> ecole_leadership / ecole_bilingual
  - asso -> asso_formation
  - cta_disc -> action disc (-> /test-disc)
  - cta_formations -> action formations (-> /#formations)
  - tous les noeuds contact -> action form -> ContactForm inline

---

## Backlog — Prochaines tâches

### Priorité haute
- [ ] Vérifier /api/contact — existe dans app/api/contact/route.ts ? Si non, créer (Resend ou Nodemailer)
- [ ] Test end-to-end chatbot — preview Vercel : formulaire, détection mots-clés, ouverture modale formation
- [ ] Tester lien chatbot vers formations?open=2 -> modal SpineUp s'ouvre

### Priorité moyenne
- [ ] Page /test-disc — existe ? À créer ou vérifier
- [ ] SEO / JSON-LD — structured data pour les 6 formations (schema.org Course)
- [ ] GEO Generative Engine Optimization — balises sémantiques pour indexation LLMs

### Priorité basse
- [ ] Animations ScrollReveal — vérifier cohérence sur toutes les sections
- [ ] Performance — audit Core Web Vitals sur preview Vercel (LCP, CLS, INP)
- [ ] A11y — audit WCAG sur le chatbot (focus trap, aria-live)

---

## Bugs connus / Points d'attention

- GitHub username casing : toujours utiliser ClementBoule (capital C et B) — bouleclement retourne 404
- useSearchParams() en App Router nécessite un Suspense boundary -> utiliser window.location.search à la place
- /api/contact : le fallback mailto: dans le catch block du ChatBot assure qu'un envoi échoué ne bloque pas l'UX

---

## État du projet au 2026-04-16

- Branch v2-design : propre, tous commits pushés
- Dernier commit : 4d017df — feat(chatbot): formulaire inline, détection mots-clés, saisie libre
- Vercel preview : build déclenché après commit ChatBot.tsx
