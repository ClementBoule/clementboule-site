# Plan de développement — clementboule.fr
_Audit réalisé le 20 avril 2026 · Mise à jour à chaque sprint_

---

## Executive Summary

Le site est techniquement solide (Next.js, JSON-LD, RGPD, bilingue, Vercel). Le code est propre, le design professionnel, les 6 formations bien décrites. Mais il ne convertit pas encore, parce qu'il manque les 3 piliers qui font qu'un visiteur DRH/manager passe à l'acte : la **preuve sociale**, la **différenciation explicite**, et une **friction réduite au premier contact**. À corriger dans cet ordre.

---

## Matrice Impact / Effort

| Action | Impact client | Effort code | Sprint |
|---|---|---|---|
| 🔴 Fix carousel formations (home) | Critique | Faible | 1 |
| 🔴 Intégrer Calendly (CTA primaire) | Élevé | Faible | 1 |
| 🟠 3 témoignages clients | Élevé | Faible | 2 |
| 🟠 Chiffres clés (hero ou parcours) | Moyen | Faible | 2 |
| 🟠 Section "Ce qui me différencie" | Élevé | Moyen | 2 |
| 🟠 Mention financement OPCO | Moyen | Faible | 2 |
| 🟡 Mini cas client par formation | Élevé | Moyen | 3 |
| 🟡 Hero home — réécriture différenciation | Élevé | Faible | 3 |
| 🟡 Spine'Up — section dédiée ou landing | Élevé | Élevé | 3 |
| 🟢 Blog (2-3 articles SEO) | Moyen | Élevé | 4 |
| 🟢 Page "À propos" storytelling | Moyen | Moyen | 4 |

---

## Sprint 1 — Corrections critiques (Semaine 1)

### 1.1 Bug carousel formations sur la home page
**Problème :** Sur `/`, la section Formations n'affiche qu'une seule card (RH & marque employeur) puis un espace blanc immense. Le composant carousel/slider est cassé. Les 6 formations s'affichent correctement sur `/formations` mais la home est le premier point de contact.

**Action :** Diagnostiquer le composant `Formations.tsx` sur la home. Remplacer le slider défaillant par une grille statique ou un carousel fonctionnel. Si le slider est trop fragile, opter pour une grille 2×3 identique à `/formations` — c'est plus robuste et meilleur pour le SEO.

**Contenu nécessaire :** Aucun (données déjà dans `formations-data.ts`)

---

### 1.2 Intégrer un lien de prise de RDV (Calendly ou équivalent)
**Problème :** Le CTA actuel est "Me contacter" → formulaire → attente. Trop de friction pour un DRH qui compare plusieurs intervenants.

**Action :** Créer un compte Calendly gratuit (ou utiliser Cal.com si tu veux rester souverain). Insérer le lien dans :
- Le bouton principal de la home (`Me contacter` → `Prendre 30 min`)
- Chaque page formation (section format/prix, en bas)
- La page contact (en complément du formulaire)

**Note :** Le lien Calendly est simplement une URL externe — pas besoin d'intégrer le widget JS (qui alourdit le site). Un bouton avec lien `target="_blank"` suffit.

**Contenu nécessaire :** Ton lien Calendly (à me donner)

---

## Sprint 2 — Preuve sociale & différenciation (Semaines 2–3)

### 2.1 Témoignages clients
**Problème :** Zéro verbatim sur le site. C'est le manque le plus critique pour la conversion.

**Action :** Créer une section `Témoignages` sur la home, entre la section formations et le parcours. Format : 3 cartes avec citation + prénom/nom ou initiales + fonction + secteur.

**Contenu nécessaire (à toi de fournir) :**
- 3 témoignages réels (peuvent être anonymisés : "DRH, secteur médico-social")
- Même courts (2-3 phrases), c'est suffisant

---

### 2.2 Chiffres clés
**Problème :** Aucun chiffre visible. Les clients veulent de la preuve quantifiable.

**Action :** Ajouter 3-4 chiffres clés soit dans la hero, soit dans une bandeaux entre deux sections. Exemples :

> **+200** participants formés · **8+** entreprises partenaires · **10 ans** d'expérience · **6** programmes sur-mesure

**Contenu nécessaire :** Tes vrais chiffres (participants formés, entreprises, années d'expérience active en formation)

---

### 2.3 Section "Ce qui me différencie"
**Problème :** La hero dit "Formateur consultant indépendant en Île-de-France" — c'est ce que dit tout le monde sur Malt. Ton profil est en réalité très différenciant mais invisible.

**Action :** Ajouter une section 3 colonnes sur la home avec tes 3 vrais différenciateurs. Proposition :

| Différenciateur | Explication |
|---|---|
| Bilingue FR/EN natif | Interventions en anglais devant des équipes internationales — pas juste "notions d'anglais" |
| Construit sur votre contexte | Pas de PowerPoint recyclé. Chaque programme repart de vos enjeux réels |
| Posture avant le contenu | Formé au coaching comportemental, à l'interculturel (MCI Innsbruck), au coaching sportif — tu travailles autant le "comment" que le "quoi" |

**Contenu nécessaire :** Valider ou reformuler ces 3 axes selon ce que toi tu ressens comme vrais différenciateurs

---

### 2.4 Mention financement OPCO
**Problème :** Aucune mention de financement. Beaucoup de DRH bloquent sur le budget sans savoir que la formation est finançable.

**Action :** Ajouter une ligne simple sur chaque page formation et sur la page catalogue :
> "Formation finançable via votre OPCO. Je vous accompagne dans les démarches si besoin."

**Contenu nécessaire :** Confirmer si tu es bien déclaré organisme de formation (numéro de déclaration d'activité) — sinon c'est à régulariser côté administratif d'abord.

---

## Sprint 3 — Conversion & produit signature (Mois 2)

### 3.1 Mini cas client par formation
**Objectif :** Montrer que ça a marché pour quelqu'un qui ressemble au visiteur.

**Format :** Sur chaque page `/formations/[slug]`, ajouter une section :
> **Cas terrain** · "Intervenu auprès d'une équipe de 12 managers dans une PME du secteur [X]. Objectif : [Y]. Résultat : [Z]."

Peut être anonymisé. 2-3 lignes suffisent.

**Contenu nécessaire :** 1 exemple réel par formation (à toi de rédiger, je mets en forme et intègre)

---

### 3.2 Réécriture hero home — axer sur la différenciation
**Action :** Reformuler le headline pour ne plus parler de ce que tu fais mais du problème que tu résous. Exemple :
> Actuel : "Former des équipes qui changent vraiment"
> Proposition : "Les formations qui tiennent après la salle"

Sous-titre à clarifier aussi : en 2 lignes, ton visiteur doit comprendre pourquoi toi et pas un autre.

---

### 3.3 Spine'Up — traitement différencié
**Objectif :** C'est ton produit signature. Il doit être mis en avant différemment des autres formations — landing page dédiée ou section spéciale sur la home.

**Action :** Créer `/spine-up` comme landing page autonome avec : problème ciblé, programme détaillé, cohorte (dates ou "prochaine session"), bouton d'inscription ou de pré-inscription.

**Contenu nécessaire :** Format (individuel, groupe, présentiel ?), calendrier, prix ou fourchette

---

## Sprint 4 — Autorité & SEO long terme (Mois 3+)

### 4.1 Blog — 2-3 articles piliers
**Thèmes recommandés :**
- "Comment choisir un formateur en management pour son équipe" (capte les recherches de DRH)
- "RPS : les 6 signaux que vos managers ratent" (SEO + preuve d'expertise)
- "Manager sans se dénaturer : ce que le DISC change vraiment" (ancre Spine'Up)

Chaque article doit faire 800-1200 mots, structuré en JSON-LD Article pour le GEO.

---

### 4.2 Page "À propos" storytelling
**Objectif :** Humaniser. Les clients achètent la personne avant le programme.

**Contenu :** Le parcours atypique (sport/Innsbruck/interculturel/management), la raison pour laquelle tu fais ce métier, ce que tu refuses de faire (les formations catalogue), ce en quoi tu crois.

---

## Checklist contenu à me fournir (pour que je code)

| Élément | Statut |
|---|---|
| Lien Calendly (ou Cal.com) | ⏳ À créer |
| 3 témoignages clients | ⏳ À rédiger |
| Tes chiffres clés (participants, entreprises, années) | ⏳ À confirmer |
| Tes 3 différenciateurs validés | ⏳ À valider |
| 1 mini cas terrain par formation | ⏳ À rédiger |
| Confirmation numéro déclaration organisme formation | ⏳ À vérifier |
| Format et calendrier Spine'Up | ⏳ À définir |

---

## Ce que je code dès que tu me donnes le contenu

- Fix carousel formations home (dès maintenant, sans contenu)
- Intégration Calendly (dès que tu as le lien)
- Section témoignages (dès que tu as 3 verbatims)
- Section chiffres clés (dès que tu as les chiffres)
- Section différenciation (dès validation des axes)
- Mini cas clients sur pages formations (dès que tu as les textes)
- Mention OPCO (dès confirmation statut organisme)

---

_Fichier maintenu dans le repo — mise à jour à chaque sprint complété._
