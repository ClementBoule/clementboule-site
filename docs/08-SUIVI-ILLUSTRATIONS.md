# Suivi de production — Illustrations V2 "Clément dessiné"

> Dernière mise à jour : 17 avril 2026
> Deadline : **16 mai 2026** (fin des abonnements Leonardo AI + Midjourney)
> Référence : \`07-KIT-ILLUSTRATIONS-V2.md\` (sur GitHub) pour les prompts et le workflow détaillé

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

Besoin estimé : ~250-300 images (calibrage + 22 poses × ~10 variantes). Marge confortable.

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
| **A** | Encre / Ink | \`Bold ink editorial portrait of a 32-year-old French man, strong black ink strokes, confident stance with arms crossed, hand-drawn feel, minimalist white background, professional but approachable, sketch-like quality --ar 3:4 --s 250\` | ✅ Terminé | 4 variantes générées. Style convaincant, ressemblance partielle. |
| **B** | Aquarelle | \`Watercolor editorial portrait of a 32-year-old French man, soft washes of warm tones, hand-drawn feel, minimalist background, professional but approachable, sketch-like quality --ar 3:4 --s 250\` | ⏳ Soumis | Prompt lancé, résultats non vérifiés. |
| **C** | Ligne claire | \`Clean line editorial portrait of a 32-year-old French man, precise thin ink outlines, minimal shading, Franco-Belgian comic style, professional but approachable --ar 3:4 --s 250\` | ❌ À lancer | — |
| **D** | Mixed media | \`Mixed media editorial portrait of a 32-year-old French man, combining ink lines with watercolor washes and pencil textures, hand-drawn feel, professional but approachable --ar 3:4 --s 250\` | ❌ À lancer | — |

### Note technique importante

> **Omni Reference Midjourney** : la photo de référence se détache après chaque génération. À chaque nouveau prompt :
> 1. Ouvrir le panneau image (icône à gauche de la barre de prompt)
> 2. Aller sur l'onglet Omni Reference
> 3. Cliquer sur la miniature de la photo dans Image Prompts pour la re-sélectionner

---

## 3. Leonardo AI — Consistent Character

| Étape | Statut |
|---|---|
| Accès au blueprint "Consistent Character" | ✅ Trouvé |
| Upload de la photo de référence | ❌ À refaire (perdue après navigation) |
| Description de l'action/pose | ❌ En attente |
| Définition du style | ❌ En attente |
| Première génération test | ❌ En attente |

---

## 4. Direction artistique V2

### Principe : trait unifié + décors culturels

Le personnage garde un trait artistique constant (médium à définir après calibrage). Ce qui change d'une illustration à l'autre, c'est l'univers de fond et l'ambiance, avec des références culturelles assumées :

| Univers | Références | Utilisé pour |
|---|---|---|
| **Lo-fi / Cozy** | Lofi Girl, ambiance study, pluie, casque, tasse | CONT-001, DECO-001, BLOG-004 |
| **Gaming / RPG** | Character select, HUD, barres de stats | HERO-002, DISC-001, CLI-001, BLOG-003 |
| **Mentor / Fantasy** | Gandalf, Dumbledore, lumière dorée, livres anciens | QSJ-001, BLOG-001, BLOG-002, BLOG-005 |
| **Universitaire / Cinéma** | Good Will Hunting, tableau noir, campus | FORM-001, FORM-002 |
| **Épique / Cinématographique** | Affiche de film, éclairage dramatique | HERO-001, FORM-003 |
| **Parisien / Éditorial** | Terrasse de café, Haussmann, magazine | QSJ-002, CONT-002, DECO-002, BLOG-006 |

---

## 5. Catalogue des 22 illustrations (production)

> Ne commence qu'après validation du style. Priorité ★★★ d'abord.
> Prompts détaillés dans \`07-KIT-ILLUSTRATIONS-V2.md\` (section 6).

| # | Code | Pose / Section | Ambiance | Priorité | Statut |
|---|---|---|---|---|---|
| 1 | HERO-001 | Portrait héroïque / Home | Épique / Cinéma | ★★★ | ❌ |
| 2 | HERO-002 | Geste d'accueil gaming / Home | Gaming / RPG | ★★★ | ❌ |
| 3 | QSJ-001 | Pensif, bureau de mentor / Qui suis-je | Mentor / Fantasy | ★★★ | ❌ |
| 4 | FORM-001 | Pointant, Good Will Hunting / Formations | Universitaire / Cinéma | ★★★ | ❌ |
| 5 | DISC-001 | RPG Character Stats / Test DISC | Gaming / RPG | ★★★ | ❌ |
| 6 | CONT-001 | Lo-fi accueil / Contact | Lo-fi / Cozy | ★★★ | ❌ |
| 7 | QSJ-002 | Storytelling terrasse / Qui suis-je | Parisien | ★★☆ | ❌ |
| 8 | FORM-002 | Devant tableau blanc / Formations | Universitaire | ★★☆ | ❌ |
| 9 | FORM-003 | Bras croisés expert / Formations | Épique subtile | ★★☆ | ❌ |
| 10 | CLI-001 | Avec la guilde / Clients | Gaming / RPG | ★★☆ | ❌ |
| 11 | DECO-001 | Lo-fi laptop / Déco | Lo-fi pur | ★★☆ | ❌ |
| 12 | DECO-003 | Clin d'oeil / Déco | Éditorial | ★★☆ | ❌ |
| 13 | DECO-004 | Salut amical / Déco | Minimal | ★★☆ | ❌ |
| 14 | CLI-002 | Poignée de main / Clients | Éditorial / Pro | ★☆☆ | ❌ |
| 15 | CONT-002 | Au téléphone, Paris / Contact | Parisien | ★☆☆ | ❌ |
| 16 | DECO-002 | De dos, Paris / Déco | Parisien / Cinéma | ★☆☆ | ❌ |
| 17 | DISC-002 | Eureka level up / Test DISC | Gaming | ★☆☆ | ❌ |
| 18 | BLOG-001 | Écriture Tolkien / Blog | Mentor / Fantasy | ★☆☆ | ❌ |
| 19 | BLOG-002 | Bibliothèque fantasy / Blog | Mentor / Fantasy | ★☆☆ | ❌ |
| 20 | BLOG-003 | Quest Complete / Blog | Gaming | ★☆☆ | ❌ |
| 21 | BLOG-004 | Podcast lo-fi / Blog | Lo-fi | ★☆☆ | ❌ |
| 22 | BLOG-005 | Classe magique / Blog | Mentor / Fantasy | ★☆☆ | ❌ |

Ordre de production : ★★★ d'abord (6 poses), puis ★★☆ (7 poses), puis ★☆☆ (9 poses) si GPU restant.

### Convention de nommage

\`\`\`
CB-[CODE]-[NUMERO]-[OUTIL].png
\`\`\`

Exemples : \`CB-HERO001-01-MJ.png\`, \`CB-DISC001-03-LEO.png\`, \`CB-HERO001-FINAL.png\`

---

## 6. Pipeline post-production

| Étape | Outil | Statut |
|---|---|---|
| Sélection des meilleures variantes | Manuel (toi + moi) | ❌ |
| Suppression des fonds | remove.bg ou rembg (Python) | ❌ |
| Export WebP optimisé | Sharp (Node.js) | ❌ |
| Redimensionnement responsive | Sharp (Node.js) | ❌ |
| Intégration Next.js (composant \`<Image>\`) | Code | ❌ |
| Commit + déploiement Vercel | GitHub CI/CD | ❌ |

---

## 7. Timeline

| Semaine | Objectif |
|---|---|
| S1 (16-22 avril) | Calibrage style (4 tests) + choix du style final |
| S2 (23-29 avril) | Production poses ★★★ (6 poses × ~10 variantes) |
| S3 (30 avril - 6 mai) | Production poses ★★☆ (7 poses) + ★☆☆ (9 poses) |
| S4 (7-13 mai) | Sélection + post-production + intégration |
| **16 mai** | **Deadline — fin des abonnements** |
