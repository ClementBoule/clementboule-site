# Suivi de production — Illustrations V2 "Clément dessiné"

> Dernière mise à jour : 16 avril 2026
> Deadline : **16 mai 2026** (fin des abonnements Leonardo AI + Midjourney)
> Référence : `07-KIT-ILLUSTRATIONS-V2.md` (sur GitHub) pour les prompts et le workflow détaillé

---

## 1. Outils et abonnements

| Outil | Plan | Coût/mois | Souscrit le | Fin le | Statut |
|---|---|---|---|---|---|
| **Midjourney** | Basic | $10 | 16/04/2026 | 16/05/2026 | Actif (résiliation programmée) |
| **Leonardo AI** | Essential | $12 | 16/04/2026 | 16/05/2026 | Actif (résiliation programmée) |

**Budget total illustrations : $22/mois (un seul mois)**

### Capacité estimée

| Outil | Crédit disponible | Coût par image | Capacité estimée |
|---|---|---|---|
| Midjourney | 3h20 GPU fast | ~6s/image | ~1100-2000 images |
| Leonardo AI | 8 500 Fast Tokens | ~20-30 tokens/image | ~280-425 images |
| **Total** | — | — | **~1400-2400 images** |

Besoin estimé : ~600-700 images (30-50 variations × 18 poses). Marge confortable.

---

## 2. Phase actuelle : Calibrage de style Midjourney

Objectif : tester 4 styles artistiques avec la même photo de référence, puis choisir le meilleur pour la production.

### Photos de référence

- **Dossier** : Google Drive > photo pro
- **Premier set** : 9 photos studio (3000-6000px) — fond neutre, buste, expressions variées
- **Deuxième set** : 10 photos événement EDA Groupe + WhatsApp (1600-1920px) — profil, pied, scène
- **12 photos recommandées** pour le training (mix des deux sets)

### Tests A/B/C/D

| Test | Style | Prompt | Statut | Résultat |
|---|---|---|---|---|
| **A** | Encre / Ink | Bold ink editorial portrait... --ar 3:4 --s 250 | Terminé | 4 variantes générées. Style convaincant, ressemblance partielle. |
| **B** | Aquarelle | Watercolor editorial portrait... --ar 3:4 --s 250 | Soumis | Prompt lancé, résultats non vérifiés. |
| **C** | Ligne claire | Clean line editorial portrait... --ar 3:4 --s 250 | À lancer | — |
| **D** | Mixed media | Mixed media editorial portrait... --ar 3:4 --s 250 | À lancer | — |

### Note technique importante

> **Omni Reference Midjourney** : la photo de référence se détache après chaque génération. À chaque nouveau prompt :
> 1. Ouvrir le panneau image (icône à gauche de la barre de prompt)
> 2. Aller sur l'onglet Omni Reference
> 3. Cliquer sur la miniature de la photo dans Image Prompts pour la re-sélectionner

---

## 3. Leonardo AI — Consistent Character

| Étape | Statut |
|---|---|
| Accès au blueprint "Consistent Character" | Trouvé |
| Upload de la photo de référence | À refaire (perdue après navigation) |
| Description de l'action/pose | En attente |
| Définition du style | En attente |
| Première génération test | En attente |

---

## 4. Catalogue des 18 poses (production)

> Ne commence qu'après validation du style. Priorité 3 étoiles d'abord.

| # | Code | Pose / Section | Priorité | Statut |
|---|---|---|---|---|
| 1 | HERO | Debout confiant, bras croisés ou main sur menton | Haute | En attente |
| 2 | POINT | Pointe du doigt vers la droite (CTA) | Haute | En attente |
| 3 | FORM-01 | Assis décontracté, tourne la tête vers le visiteur | Haute | En attente |
| 4 | DISC | Tient un cercle DISC coloré / roue des couleurs | Haute | En attente |
| 5 | TEACH | Debout devant tableau blanc, marqueur en main | Haute | En attente |
| 6 | LAPTOP | Assis avec laptop ouvert, sourire concentré | Moyenne | En attente |
| 7 | TALK | En train de parler sur scène, micro-cravate | Moyenne | En attente |
| 8 | WAVE | Salut amical de la main (page contact) | Moyenne | En attente |
| 9 | THINK | Main sur le menton, regard pensif (section méthode) | Moyenne | En attente |
| 10 | TEAM | Debout avec groupe stylisé (section clients) | Moyenne | En attente |
| 11 | BOOK | Lit un livre ouvert (section parcours) | Basse | En attente |
| 12 | COFFEE | Tient une tasse, pose détendue (section à propos) | Basse | En attente |
| 13 | WALK | Marche de profil, sacoche en main | Basse | En attente |
| 14 | WRITE | Écrit dans un carnet (section blog) | Basse | En attente |
| 15 | CELEBRATE | Bras levés, expression de victoire | Basse | En attente |
| 16 | LISTEN | Écoute attentive, tête légèrement penchée | Basse | En attente |
| 17 | PRESENT | Présente un écran/slide derrière lui | Basse | En attente |
| 18 | LEAN | Appuyé décontracté contre un mur/cadre | Basse | En attente |

### Convention de nommage

CB-[CODE]-[NUMERO]-[OUTIL].png

Exemples : CB-HERO-001-MJ.png, CB-DISC-003-LEO.png

---

## 5. Pipeline post-production

| Étape | Outil | Statut |
|---|---|---|
| Sélection des meilleures variantes | Manuel | En attente |
| Suppression des fonds | remove.bg ou rembg (Python) | En attente |
| Export WebP optimisé | Sharp (Node.js) | En attente |
| Redimensionnement responsive | Sharp (Node.js) | En attente |
| Intégration Next.js (composant Image) | Code | En attente |
| Commit + déploiement Vercel | GitHub CI/CD | En attente |

---

## 6. Timeline

| Semaine | Objectif |
|---|---|
| S1 (16-22 avril) | Calibrage style (4 tests) + choix du style final |
| S2 (23-29 avril) | Production poses haute priorité (5 poses x 30-50 variantes) |
| S3 (30 avril - 6 mai) | Production poses moyenne + basse priorité |
| S4 (7-13 mai) | Sélection + post-production + intégration |
| **16 mai** | **Deadline — fin des abonnements** |
