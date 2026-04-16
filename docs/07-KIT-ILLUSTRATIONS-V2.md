# Kit de production — Illustrations "Clément dessiné" V2

> Date : 16 avril 2026
> Budget : ~25$ (Leonardo AI Apprentice 10$ + Midjourney Basic ~15$)
> Abonnements souscrits le 16/04/2026 — résiliés, fin de service le 16/05/2026
> Objectif : 15-20 illustrations finales, style dessin éditorial à la main
> Temps estimé : 3-4 soirées de production

---

## 1. Workflow global

```
Phase 0 — Préparer 12-15 photos HD (10 min)
Phase 1 — Character Training sur Leonardo AI (30 min)
Phase 2 — Calibrage du style sur Midjourney (1h)
Phase 3 — Production des 18 poses (2-3h)
Phase 4 — Sélection finale (30 min)
Phase 5 — Upload vers Claude pour optimisation web + intégration code
```

---

## 2. Phase 0 — Préparation des photos

Sélectionne 12-15 photos parmi tes photos pro :

| Type | Quantité | Détail |
|---|---|---|
| Portrait face | 3 | Regard caméra, éclairage différent |
| Portrait 3/4 | 3 | Gauche et droite, avec et sans sourire |
| Portrait profil | 2 | Gauche et droite |
| En pied | 2 | Debout, posture naturelle |
| En situation | 2-3 | En formation, au bureau, décontracté |

**Règles** : min 512x512px (idéal 1024+), éclairage varié, expressions variées, pas de lunettes de soleil, toi seul sur chaque photo.

### Structure de dossier local

```
illustrations-clementboule/
├── 00-photos-reference/
├── 01-leonardo-training/
├── 02-calibrage-style/
├── 03-production/
│   ├── HERO-001/
│   ├── QSJ-001/
│   └── ...
├── 04-selection-finale/
└── 05-web-optimise/
```

---

## 3. Phase 1 — Character Training Leonardo AI

1. Connecte-toi sur **app.leonardo.ai**
2. Menu → **Training & Datasets** → **New Dataset**
3. Nom : `clement-boule-ref`
4. Upload tes 12-15 photos
5. **Train Model** → Nom : `clement-boule-v1`, Catégorie : Person
6. Instance prompt : `a photo of sks man`
7. Attends 20-40 min

### Prompts de test Leonardo

**Test ressemblance :**
```
a photo of sks man, professional headshot, studio lighting, neutral background, sharp focus, high quality
```

**Test style illustration :**
```
a hand-drawn editorial illustration of sks man, ink and watercolor style, warm beige paper background, clean confident lines, professional portrait, upper body visible, slight warm smile
```

**Test pose action :**
```
a hand-drawn editorial illustration of sks man, standing and pointing with a pointer stick toward the right, teaching posture, confident expression, full upper body visible, ink and watercolor on warm beige paper
```

### Paramètres de génération Leonardo

| Paramètre | Valeur |
|---|---|
| Guidance Scale | 7-9 |
| Steps | 30-40 |
| Dimensions | 768x1024 (portrait) ou 1024x768 (paysage) |
| Nombre d'images | 4 par génération |
| Negative prompt | `blurry, deformed, extra fingers, low quality, photorealistic, 3d render` |

---

## 4. Phase 2 — Calibrage du style Midjourney

### 4.1 Uploader ta photo de référence
Sur midjourney.com ou Discord : uploade ta meilleure photo portrait HD et copie l'URL.

### 4.2 Lancer 4 tests de style

Remplace `[CREF]` par l'URL de ta photo uploadée.

**Test A — Encre :**
```
/imagine Hand-drawn ink illustration of a 32-year-old French man, professional trainer, editorial sketch style, black ink on warm beige paper, clean confident lines, upper body portrait, slight smile --cref [CREF] --ar 3:4 --s 250
```

**Test B — Aquarelle :**
```
/imagine Watercolor editorial portrait of a 32-year-old French man, soft washes of warm tones, hand-drawn feel, minimalist background, professional but approachable, sketch-like quality --cref [CREF] --ar 3:4 --s 250
```

**Test C — Ligne claire :**
```
/imagine Clean line illustration of a 32-year-old French man, ligne claire style, subtle color palette, warm beige and muted tones, editorial quality, confident posture --cref [CREF] --ar 3:4 --s 250
```

**Test D — Mixed media :**
```
/imagine Mixed media editorial illustration of a 32-year-old French man, ink outlines with watercolor fills, warm earth tones, hand-drawn texture, professional portrait, slight artistic imperfection --cref [CREF] --ar 3:4 --s 250
```

### 4.3 Verrouiller le style
1. Choisis LA meilleure variante parmi les 16 résultats
2. Upscale (U1-U4)
3. Copie l'URL → c'est ta **Style Reference** `[SREF]`
4. Tous les prompts suivants utiliseront : `--cref [CREF] --sref [SREF] --sw 100`

---

## 5. Phase 3 — Catalogue des 18 prompts de production

> Remplace `[CREF]` et `[SREF]` dans CHAQUE prompt avant de lancer.

### HOME (Hero)

**HERO-001 — Portrait héroïque demi-page** ★★★
```
/imagine Hand-drawn editorial illustration of a 32-year-old French man, confident stance, arms slightly crossed, warm slight smile, upper body and head visible, looking directly at viewer, clean warm beige background, ink and watercolor style, professional trainer energy, editorial magazine quality --cref [CREF] --sref [SREF] --sw 100 --ar 3:4 --s 250 --q 1
```

**HERO-002 — Geste d'accueil** ★★★
```
/imagine Hand-drawn editorial illustration of a 32-year-old French man, one hand gesturing welcomingly toward the right side, open posture, friendly professional expression, upper body visible, clean warm beige background, ink and watercolor style --cref [CREF] --sref [SREF] --sw 100 --ar 4:5 --s 250 --q 1
```

### QUI SUIS-JE

**QSJ-001 — Pensif** ★★★
```
/imagine Hand-drawn editorial illustration of a 32-year-old French man, thoughtful expression, looking slightly upward, hand on chin, intellectual but warm, half body visible, clean warm beige background, ink and watercolor style --cref [CREF] --sref [SREF] --sw 100 --ar 3:4 --s 250 --q 1
```

**QSJ-002 — Assis storytelling** ★★☆
```
/imagine Hand-drawn editorial illustration of a 32-year-old French man, sitting casually on an invisible surface, relaxed posture, legs crossed, storytelling gesture with one hand, warm expression, clean warm beige background, ink and watercolor style --cref [CREF] --sref [SREF] --sw 100 --ar 4:3 --s 250 --q 1
```

### FORMATIONS

**FORM-001 — Pointant avec baguette** ★★★
```
/imagine Hand-drawn editorial illustration of a 32-year-old French man, holding a pointer stick or pen in right hand, pointing toward the right side, teaching posture, confident and engaging expression, upper body visible, clean warm beige background, ink and watercolor style --cref [CREF] --sref [SREF] --sw 100 --ar 4:5 --s 250 --q 1
```

**FORM-002 — Devant tableau** ★★☆
```
/imagine Hand-drawn editorial illustration of a 32-year-old French man, standing next to a simple whiteboard, marker in hand, teaching moment, enthusiastic expression, full body visible, clean warm beige background, ink and watercolor style, minimalist props --cref [CREF] --sref [SREF] --sw 100 --ar 16:9 --s 250 --q 1
```

**FORM-003 — Bras croisés expert** ★★☆
```
/imagine Hand-drawn editorial illustration of a 32-year-old French man, arms crossed confidently, warm professional smile, standing straight, expert trainer energy, upper body visible, clean warm beige background, ink and watercolor style --cref [CREF] --sref [SREF] --sw 100 --ar 3:4 --s 250 --q 1
```

### TEST DISC

**DISC-001 — Clipboard** ★★☆
```
/imagine Hand-drawn editorial illustration of a 32-year-old French man, holding a clipboard or questionnaire, looking at viewer with inviting expression, one eyebrow slightly raised, playful but professional, upper body visible, clean warm beige background, ink and watercolor style --cref [CREF] --sref [SREF] --sw 100 --ar 3:4 --s 250 --q 1
```

**DISC-002 — Eureka** ★☆☆
```
/imagine Hand-drawn editorial illustration of a 32-year-old French man, index finger pointing up in a eureka moment, surprised and delighted expression, lightbulb moment energy, upper body visible, clean warm beige background, ink and watercolor style --cref [CREF] --sref [SREF] --sw 100 --ar 3:4 --s 250 --q 1
```

### CLIENTS / TÉMOIGNAGES

**CLI-001 — Pouce levé** ★★☆
```
/imagine Hand-drawn editorial illustration of a 32-year-old French man, giving a subtle thumbs up, warm genuine smile, pleased expression, professional but approachable, upper body visible, clean warm beige background, ink and watercolor style --cref [CREF] --sref [SREF] --sw 100 --ar 1:1 --s 250 --q 1
```

**CLI-002 — Poignée de main** ★☆☆
```
/imagine Hand-drawn editorial illustration of a 32-year-old French man, extending hand for a handshake toward the right, professional partnership gesture, trustworthy expression, side view upper body, clean warm beige background, ink and watercolor style --cref [CREF] --sref [SREF] --sw 100 --ar 4:3 --s 250 --q 1
```

### CONTACT

**CONT-001 — Main ouverte** ★★☆
```
/imagine Hand-drawn editorial illustration of a 32-year-old French man, open palm gesture inviting the viewer, welcoming warm expression, approachable and friendly, upper body visible, clean warm beige background, ink and watercolor style --cref [CREF] --sref [SREF] --sw 100 --ar 3:4 --s 250 --q 1
```

**CONT-002 — Au téléphone** ★☆☆
```
/imagine Hand-drawn editorial illustration of a 32-year-old French man, holding a phone to his ear, smiling while talking, engaged in conversation, professional but casual, upper body visible, clean warm beige background, ink and watercolor style --cref [CREF] --sref [SREF] --sw 100 --ar 3:4 --s 250 --q 1
```

### ÉLÉMENTS DÉCORATIFS

**DECO-001 — Mini assis** ★★☆
```
/imagine Hand-drawn editorial illustration of a small cute version of a 32-year-old French man, sitting on the edge of a surface with legs dangling, chibi-adjacent but not cartoon, reading a book, peaceful expression, clean warm beige background, ink and watercolor style, miniature scale --cref [CREF] --sref [SREF] --sw 100 --ar 1:1 --s 250 --q 1
```

**DECO-002 — De dos** ★☆☆
```
/imagine Hand-drawn editorial illustration of a 32-year-old French man seen from behind, looking toward the distance, contemplative posture, hands in pockets, full body visible, clean warm beige background, ink and watercolor style --cref [CREF] --sref [SREF] --sw 100 --ar 3:4 --s 250 --q 1
```

**DECO-003 — Clin d'oeil** ★★☆
```
/imagine Hand-drawn editorial illustration of a 32-year-old French man, winking playfully at the viewer, slight smirk, one eye closed, charming and witty, close-up face and shoulders, clean warm beige background, ink and watercolor style --cref [CREF] --sref [SREF] --sw 100 --ar 1:1 --s 250 --q 1
```

### BLOG (V2.1)

**BLOG-001 — Écriture** ★☆☆
```
/imagine Hand-drawn editorial illustration of a 32-year-old French man, sitting at a desk writing or typing on a laptop, focused expression, creative workspace energy, coffee cup nearby, upper body and desk visible, clean warm beige background, ink and watercolor style --cref [CREF] --sref [SREF] --sw 100 --ar 16:9 --s 250 --q 1
```

**BLOG-002 — Livre ouvert** ★☆☆
```
/imagine Hand-drawn editorial illustration of a 32-year-old French man, holding an open book toward the viewer, sharing knowledge gesture, enthusiastic expression, upper body visible, clean warm beige background, ink and watercolor style --cref [CREF] --sref [SREF] --sw 100 --ar 3:4 --s 250 --q 1
```

---

## 6. Tableau récap des 18 illustrations

| # | Code | Pose | Section | Priorité |
|---|---|---|---|---|
| 1 | HERO-001 | Portrait héroïque | Home | ★★★ |
| 2 | HERO-002 | Geste d'accueil | Home | ★★★ |
| 3 | QSJ-001 | Pensif | Qui suis-je | ★★★ |
| 4 | QSJ-002 | Assis storytelling | Qui suis-je | ★★☆ |
| 5 | FORM-001 | Pointant baguette | Formations | ★★★ |
| 6 | FORM-002 | Devant tableau | Formations | ★★☆ |
| 7 | FORM-003 | Bras croisés expert | Formations | ★★☆ |
| 8 | DISC-001 | Clipboard | Test DISC | ★★☆ |
| 9 | DISC-002 | Eureka | Test DISC | ★☆☆ |
| 10 | CLI-001 | Pouce levé | Clients | ★★☆ |
| 11 | CLI-002 | Poignée de main | Clients | ★☆☆ |
| 12 | CONT-001 | Main ouverte | Contact | ★★☆ |
| 13 | CONT-002 | Au téléphone | Contact | ★☆☆ |
| 14 | DECO-001 | Mini assis | Déco | ★★☆ |
| 15 | DECO-002 | De dos | Déco | ★☆☆ |
| 16 | DECO-003 | Clin d'oeil | Déco | ★★☆ |
| 17 | BLOG-001 | Écriture | Blog | ★☆☆ |
| 18 | BLOG-002 | Livre ouvert | Blog | ★☆☆ |

**Ordre de production** : ★★★ d'abord, puis ★★☆, puis ★☆☆ si GPU restant.

---

## 7. Convention de nommage

```
CB-[CODE]-[NUMERO]-[OUTIL].png
```

| Exemple | Signification |
|---|---|
| `CB-HERO001-01-MJ.png` | Hero pose 1, 1ère génération, Midjourney |
| `CB-HERO001-03-LEO.png` | Hero pose 1, 3ème génération, Leonardo |
| `CB-HERO001-FINAL.png` | Hero pose 1, version sélectionnée |

---

## 8. Estimation de production

| Phase | Générations estimées |
|---|---|
| Calibrage style (Phase 2) | 50-80 |
| Production 18 poses × ~10 chacune | 150-200 |
| **Total** | **~250-300 images** |

Le plan Basic Midjourney (3,3h GPU rapide) couvre ce volume.

---

## 9. Après la production

1. Upload les 15-20 illustrations FINAL dans la conversation Claude
2. Claude s'occupe de :
   - Suppression des fonds (fond transparent)
   - Conversion en WebP (performance)
   - Redimensionnement pour chaque usage
   - Intégration dans le code Next.js du site
   - Animations CSS d'apparition

---

## 10. Deadline

**Tout doit être produit avant le 16 mai 2026** (fin des abonnements Leonardo + Midjourney).
