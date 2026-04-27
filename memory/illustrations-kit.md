# Kit de production — Illustrations "Clément dessiné" V2

> Date : 17 avril 2026
> Budget : ~$22 (Leonardo AI Essential $12 + Midjourney Basic $10)
> Abonnements souscrits le 16/04/2026 — résiliés, fin de service le 16/05/2026
> Objectif : 18 illustrations finales, style dessin éditorial à la main + ambiances culturelles
> Temps estimé : 3-4 soirées de production

---

## 1. Direction artistique

### Principe : trait unifié + décors culturels

Le personnage "Clément dessiné" garde un trait artistique constant (médium à définir après calibrage A/B/C/D). Ce qui change d'une illustration à l'autre, c'est **l'univers de fond et l'ambiance**, avec des références culturelles assumées :

| Univers | Références | Utilisé pour |
|---|---|---|
| **Lo-fi / Cozy** | Lofi Girl, ambiance study, pluie sur fenêtre, casque, tasse fumante | LAPTOP, COFFEE, FORM-01 |
| **Gaming / RPG** | Character select screen, HUD overlay, barres de stats, pixel touches | DISC, HERO, CELEBRATE, TEAM |
| **Mentor / Fantasy** | Gandalf, Dumbledore, lumière dorée, livres anciens, sagesse | THINK, BOOK, PRESENT |
| **Universitaire / Cinéma** | Good Will Hunting, tableau noir, équations, campus | TEACH, WRITE |
| **Épique / Cinématographique** | Affiche de film, éclairage dramatique, composition héroïque | HERO, TALK |
| **Parisien / Éditorial** | Terrasse de café, urbanisme parisien, magazine illustration | WALK, LEAN, WAVE |

---

## 2. Workflow global

- Phase 0 — Préparer 12-15 photos HD (10 min)
- Phase 1 — Character Training sur Leonardo AI (30 min)
- Phase 2 — Calibrage du style sur Midjourney (1h)
- Phase 3 — Production des 18 poses (2-3h)
- Phase 4 — Sélection finale (30 min)
- Phase 5 — Upload vers Claude pour optimisation web + intégration code

---

## 3. Phase 0 — Préparation des photos

Sélectionne 12-15 photos parmi tes photos pro :

| Type | Quantité | Détail |
|---|---|---|
| Portrait face | 3 | Regard caméra, éclairage différent |
| Portrait 3/4 | 3 | Gauche et droite, avec et sans sourire |
| Portrait profil | 2 | Gauche et droite |
| En pied | 2 | Debout, posture naturelle |
| En situation | 2-3 | En formation, au bureau, décontracté |

Règles : min 512x512px (idéal 1024+), éclairage varié, expressions variées, pas de lunettes de soleil, toi seul sur chaque photo.

Structure de dossier local :

\`\`\`
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
\`\`\`

---

## 4. Phase 1 — Character Training Leonardo AI

1. Connecte-toi sur app.leonardo.ai
2. Utilise le blueprint **Consistent Character**
3. Upload ta meilleure photo portrait HD
4. Décris l'action/pose souhaitée
5. Définis le style (ink, watercolor, etc.)
6. Génère et compare

### Paramètres de génération Leonardo

| Paramètre | Valeur |
|---|---|
| Guidance Scale | 7-9 |
| Steps | 30-40 |
| Dimensions | 768x1024 (portrait) ou 1024x768 (paysage) |
| Nombre d'images | 4 par génération |
| Negative prompt | blurry, deformed, extra fingers, low quality, photorealistic, 3d render |

---

## 5. Phase 2 — Calibrage du style Midjourney

### 5.1 Photo de référence

Sur midjourney.com/imagine : ouvrir le panneau image, aller dans Omni Reference, uploader ta photo portrait HD.

**IMPORTANT** : la photo se détache après chaque génération. Il faut la re-sélectionner à chaque nouveau prompt.

### 5.2 Les 4 tests de médium

| Test | Médium | Prompt |
|---|---|---|
| A | Encre | \`Bold ink editorial portrait of a 32-year-old French man, strong black ink strokes, confident stance with arms crossed, hand-drawn feel, minimalist white background, professional but approachable, sketch-like quality --ar 3:4 --s 250\` |
| B | Aquarelle | \`Watercolor editorial portrait of a 32-year-old French man, soft washes of warm tones, hand-drawn feel, minimalist background, professional but approachable, sketch-like quality --ar 3:4 --s 250\` |
| C | Ligne claire | \`Clean line editorial portrait of a 32-year-old French man, precise thin ink outlines, minimal shading, Franco-Belgian comic style, professional but approachable --ar 3:4 --s 250\` |
| D | Mixed media | \`Mixed media editorial portrait of a 32-year-old French man, combining ink lines with watercolor washes and pencil textures, hand-drawn feel, professional but approachable --ar 3:4 --s 250\` |

### 5.3 Verrouiller le style

1. Choisis LA meilleure variante parmi les 16 résultats
2. Upscale (U1-U4)
3. Copie l'URL → c'est ta Style Reference \`[SREF]\`
4. Tous les prompts suivants utiliseront : \`--cref [CREF] --sref [SREF] --sw 100\`

---

## 6. Phase 3 — Catalogue des 22 prompts de production

> Remplace \`[CREF]\` et \`[SREF]\` dans CHAQUE prompt avant de lancer.
> Le \`[STYLE]\` sera remplacé par le médium retenu (ex: "ink and watercolor style" si Test D).

---

### HOME (Hero)

#### HERO-001 — Portrait héroïque ★★★
**Ambiance** : Épique / Cinématographique — affiche de film, le personnage principal face au spectateur
\`\`\`
/imagine [STYLE] editorial illustration of a 32-year-old French man, confident heroic stance, arms slightly crossed, looking directly at viewer, dramatic cinematic lighting from behind, subtle golden particles in the air, movie poster composition, warm tones, professional mentor energy --cref [CREF] --sref [SREF] --sw 100 --ar 3:4 --s 250 --q 1
\`\`\`

#### HERO-002 — Geste d'accueil avec touche gaming ★★★
**Ambiance** : Gaming / RPG — character select screen, léger HUD overlay
\`\`\`
/imagine [STYLE] editorial illustration of a 32-year-old French man, one hand gesturing welcomingly, open posture, friendly professional expression, subtle RPG character select screen composition, faint UI elements in background, warm golden light, upper body visible --cref [CREF] --sref [SREF] --sw 100 --ar 4:5 --s 250 --q 1
\`\`\`

---

### QUI SUIS-JE

#### QSJ-001 — Pensif, bureau de mentor ★★★
**Ambiance** : Mentor / Fantasy — Dumbledore dans son bureau, livres anciens, lumière dorée
\`\`\`
/imagine [STYLE] editorial illustration of a 32-year-old French man, thoughtful expression, hand on chin, looking slightly upward, surrounded by old books and warm golden light, wise mentor study room atmosphere, leather-bound volumes in soft focus background, intellectual warmth --cref [CREF] --sref [SREF] --sw 100 --ar 3:4 --s 250 --q 1
\`\`\`

#### QSJ-002 — Assis storytelling, terrasse parisienne ★★☆
**Ambiance** : Parisien / Éditorial — terrasse de café, Paris illustré
\`\`\`
/imagine [STYLE] editorial illustration of a 32-year-old French man, sitting casually at a Parisian cafe terrace, relaxed posture, storytelling gesture with one hand, warm afternoon light, stylized Haussmann buildings in soft background, coffee cup on small round table --cref [CREF] --sref [SREF] --sw 100 --ar 4:3 --s 250 --q 1
\`\`\`

---

### FORMATIONS

#### FORM-001 — Pointant baguette, Good Will Hunting ★★★
**Ambiance** : Universitaire / Cinéma — tableau noir couvert de schémas, lumière de campus
\`\`\`
/imagine [STYLE] editorial illustration of a 32-year-old French man, holding a pointer stick in right hand, pointing toward the right, standing next to a large chalkboard covered with diagrams and equations, Good Will Hunting university atmosphere, warm classroom lighting, confident teaching posture --cref [CREF] --sref [SREF] --sw 100 --ar 4:5 --s 250 --q 1
\`\`\`

#### FORM-002 — Devant tableau blanc ★★☆
**Ambiance** : Universitaire — session de formation, marqueur en main
\`\`\`
/imagine [STYLE] editorial illustration of a 32-year-old French man, standing next to a whiteboard with colorful diagrams, marker in hand, enthusiastic teaching expression, full body visible, modern training room atmosphere, warm professional lighting --cref [CREF] --sref [SREF] --sw 100 --ar 16:9 --s 250 --q 1
\`\`\`

#### FORM-003 — Bras croisés expert ★★☆
**Ambiance** : Épique subtile — composition confiante, lumière affirmée
\`\`\`
/imagine [STYLE] editorial illustration of a 32-year-old French man, arms crossed confidently, warm professional smile, standing straight, subtle dramatic lighting, expert trainer energy, upper body visible, clean background with faint warm geometric shapes --cref [CREF] --sref [SREF] --sw 100 --ar 3:4 --s 250 --q 1
\`\`\`

---

### TEST DISC

#### DISC-001 — RPG Character Stats ★★★
**Ambiance** : Gaming / RPG — HUD overlay, les 4 couleurs DISC comme attributs de personnage
\`\`\`
/imagine [STYLE] editorial illustration of a 32-year-old French man, holding a translucent circular disc divided in 4 colored quadrants red blue green yellow, subtle RPG stats overlay floating around him, character attribute screen aesthetic, playful but professional expression, gaming HUD elements in soft focus --cref [CREF] --sref [SREF] --sw 100 --ar 3:4 --s 250 --q 1
\`\`\`

#### DISC-002 — Eureka ★☆☆
**Ambiance** : Gaming — level up moment, particules lumineuses
\`\`\`
/imagine [STYLE] editorial illustration of a 32-year-old French man, index finger pointing up in eureka moment, surprised and delighted expression, subtle glowing particles rising around him, level-up energy, achievement unlocked feeling, warm golden light burst --cref [CREF] --sref [SREF] --sw 100 --ar 3:4 --s 250 --q 1
\`\`\`

---

### CLIENTS / TÉMOIGNAGES

#### CLI-001 — Avec la guilde ★★☆
**Ambiance** : Gaming / RPG — groupe d'aventuriers, le party/la guilde
\`\`\`
/imagine [STYLE] editorial illustration of a 32-year-old French man, standing confidently at center of a stylized group of 4-5 diverse professionals, RPG party composition, warm camaraderie energy, team leader posture, faint adventure guild aesthetic, warm tones --cref [CREF] --sref [SREF] --sw 100 --ar 16:9 --s 250 --q 1
\`\`\`

#### CLI-002 — Poignée de main ★☆☆
**Ambiance** : Éditorial / Pro — partenariat, confiance
\`\`\`
/imagine [STYLE] editorial illustration of a 32-year-old French man, extending hand for a handshake toward the right, professional partnership gesture, trustworthy expression, side view upper body, clean warm background --cref [CREF] --sref [SREF] --sw 100 --ar 4:3 --s 250 --q 1
\`\`\`

---

### CONTACT

#### CONT-001 — Lo-fi accueil ★★★
**Ambiance** : Lo-fi / Cozy — lumière chaude, ambiance "installe-toi on discute"
\`\`\`
/imagine [STYLE] editorial illustration of a 32-year-old French man, sitting in a cozy warm-lit space, open welcoming gesture, soft rain visible through a window behind, warm desk lamp glow, steaming cup nearby, lo-fi study aesthetic, inviting and approachable --cref [CREF] --sref [SREF] --sw 100 --ar 3:4 --s 250 --q 1
\`\`\`

#### CONT-002 — Au téléphone ★☆☆
**Ambiance** : Parisien — au téléphone, vue de Paris en fond
\`\`\`
/imagine [STYLE] editorial illustration of a 32-year-old French man, holding a phone to his ear, smiling while talking, stylized Parisian rooftops visible through a window, warm afternoon light, engaged in conversation, professional but casual --cref [CREF] --sref [SREF] --sw 100 --ar 3:4 --s 250 --q 1
\`\`\`

---

### ÉLÉMENTS DÉCORATIFS / POSES TRANSVERSALES

#### DECO-001 — Lo-fi laptop ★★☆
**Ambiance** : Lo-fi pur — Lofi Girl version consultant, fenêtre pluvieuse, casque
\`\`\`
/imagine [STYLE] editorial illustration of a 32-year-old French man, sitting at a desk with laptop open, headphones around neck, rain streaking down a large window behind, warm desk lamp, steaming coffee cup, lo-fi hip hop study girl aesthetic but male consultant version, cozy concentrated atmosphere --cref [CREF] --sref [SREF] --sw 100 --ar 16:9 --s 250 --q 1
\`\`\`

#### DECO-002 — De dos, Paris ★☆☆
**Ambiance** : Parisien / Cinématographique — plan large, marche dans Paris
\`\`\`
/imagine [STYLE] editorial illustration of a 32-year-old French man seen from behind, walking through stylized Parisian streets, hands in pockets, briefcase or messenger bag, Haussmann buildings and warm street lamps, contemplative posture, full body visible, golden hour light --cref [CREF] --sref [SREF] --sw 100 --ar 3:4 --s 250 --q 1
\`\`\`

#### DECO-003 — Clin d'oeil ★★☆
**Ambiance** : Éditorial léger — charme, complicité avec le visiteur
\`\`\`
/imagine [STYLE] editorial illustration of a 32-year-old French man, winking playfully at the viewer, slight smirk, charming and witty, close-up face and shoulders, clean warm background, editorial magazine portrait quality --cref [CREF] --sref [SREF] --sw 100 --ar 1:1 --s 250 --q 1
\`\`\`

#### DECO-004 — Salut amical ★★☆
**Ambiance** : Simple et chaleureux — wave page d'accueil/navigation
\`\`\`
/imagine [STYLE] editorial illustration of a 32-year-old French man, waving hand in friendly greeting, genuine warm smile, approachable and welcoming, upper body visible, clean minimal warm background --cref [CREF] --sref [SREF] --sw 100 --ar 1:1 --s 250 --q 1
\`\`\`

---

### BLOG / PARCOURS (V2.1)

#### BLOG-001 — Écriture, ambiance Tolkien ★☆☆
**Ambiance** : Mentor / Fantasy — bureau d'écrivain, parchemins, plume et encre
\`\`\`
/imagine [STYLE] editorial illustration of a 32-year-old French man, sitting at an old wooden desk writing in a leather journal, surrounded by scattered papers and ink bottles, warm candlelight glow, Tolkien writing study atmosphere, creative focus expression --cref [CREF] --sref [SREF] --sw 100 --ar 16:9 --s 250 --q 1
\`\`\`

#### BLOG-002 — Livre ouvert, bibliothèque fantasy ★☆☆
**Ambiance** : Mentor / Fantasy — bibliothèque imposante, échelle, vieux volumes
\`\`\`
/imagine [STYLE] editorial illustration of a 32-year-old French man, holding an open book toward the viewer, standing in a grand warm library with tall bookshelves, rolling ladder visible, golden light filtering through, sharing knowledge gesture, fantasy library atmosphere --cref [CREF] --sref [SREF] --sw 100 --ar 3:4 --s 250 --q 1
\`\`\`

#### BLOG-003 — Celebrate, Quest Complete ★☆☆
**Ambiance** : Gaming — finish screen, QUEST COMPLETE, confettis
\`\`\`
/imagine [STYLE] editorial illustration of a 32-year-old French man, arms raised in victory celebration, joyful expression, subtle confetti particles, faint RPG quest complete screen aesthetic in background, achievement energy, golden triumphant light --cref [CREF] --sref [SREF] --sw 100 --ar 3:4 --s 250 --q 1
\`\`\`

#### BLOG-004 — Écoute podcast ★☆☆
**Ambiance** : Lo-fi — studio intime, micro, casque
\`\`\`
/imagine [STYLE] editorial illustration of a 32-year-old French man, wearing headphones, leaning forward listening attentively, head slightly tilted, podcast studio microphone in soft focus, warm intimate lighting, engaged and empathetic expression --cref [CREF] --sref [SREF] --sw 100 --ar 3:4 --s 250 --q 1
\`\`\`

#### BLOG-005 — Salle de classe magique ★☆☆
**Ambiance** : Mentor / Fantasy — Poudlard revisité, projecteur magique
\`\`\`
/imagine [STYLE] editorial illustration of a 32-year-old French man, presenting to an implied audience, magical floating holographic slides behind him, warm stone classroom atmosphere, fantasy school aesthetic, enchanted projector glow, confident presenter posture --cref [CREF] --sref [SREF] --sw 100 --ar 16:9 --s 250 --q 1
\`\`\`

#### BLOG-006 — Appuyé mur, street ★☆☆
**Ambiance** : Parisien / Street — mur de briques, street art subtil
\`\`\`
/imagine [STYLE] editorial illustration of a 32-year-old French man, leaning casually against a brick wall, relaxed posture, hands in pockets, subtle street art visible on wall behind, warm urban afternoon light, effortlessly cool and approachable --cref [CREF] --sref [SREF] --sw 100 --ar 3:4 --s 250 --q 1
\`\`\`

---

## 7. Tableau récap des 22 illustrations

| # | Code | Pose | Section | Ambiance | Priorité |
|---|---|---|---|---|---|
| 1 | HERO-001 | Portrait héroïque | Home | Épique / Cinéma | ★★★ |
| 2 | HERO-002 | Geste d'accueil gaming | Home | Gaming / RPG | ★★★ |
| 3 | QSJ-001 | Pensif, bureau de mentor | Qui suis-je | Mentor / Fantasy | ★★★ |
| 4 | FORM-001 | Pointant, Good Will Hunting | Formations | Universitaire / Cinéma | ★★★ |
| 5 | DISC-001 | RPG Character Stats | Test DISC | Gaming / RPG | ★★★ |
| 6 | CONT-001 | Lo-fi accueil | Contact | Lo-fi / Cozy | ★★★ |
| 7 | QSJ-002 | Storytelling terrasse | Qui suis-je | Parisien | ★★☆ |
| 8 | FORM-002 | Devant tableau blanc | Formations | Universitaire | ★★☆ |
| 9 | FORM-003 | Bras croisés expert | Formations | Épique subtile | ★★☆ |
| 10 | CLI-001 | Avec la guilde | Clients | Gaming / RPG | ★★☆ |
| 11 | DECO-001 | Lo-fi laptop | Déco | Lo-fi pur | ★★☆ |
| 12 | DECO-003 | Clin d'oeil | Déco | Éditorial | ★★☆ |
| 13 | DECO-004 | Salut amical | Déco | Minimal | ★★☆ |
| 14 | CLI-002 | Poignée de main | Clients | Éditorial / Pro | ★☆☆ |
| 15 | CONT-002 | Au téléphone, Paris | Contact | Parisien | ★☆☆ |
| 16 | DECO-002 | De dos, Paris | Déco | Parisien / Cinéma | ★☆☆ |
| 17 | DISC-002 | Eureka level up | Test DISC | Gaming | ★☆☆ |
| 18 | BLOG-001 | Écriture Tolkien | Blog | Mentor / Fantasy | ★☆☆ |
| 19 | BLOG-002 | Bibliothèque fantasy | Blog | Mentor / Fantasy | ★☆☆ |
| 20 | BLOG-003 | Quest Complete | Blog | Gaming | ★☆☆ |
| 21 | BLOG-004 | Podcast lo-fi | Blog | Lo-fi | ★☆☆ |
| 22 | BLOG-005 | Classe magique | Blog | Mentor / Fantasy | ★☆☆ |

Ordre de production : ★★★ d'abord (6 poses), puis ★★☆ (7 poses), puis ★☆☆ (9 poses) si GPU restant.

---

## 8. Convention de nommage

\`\`\`
CB-[CODE]-[NUMERO]-[OUTIL].png
\`\`\`

| Exemple | Signification |
|---|---|
| \`CB-HERO001-01-MJ.png\` | Hero pose 1, 1ère génération, Midjourney |
| \`CB-HERO001-03-LEO.png\` | Hero pose 1, 3ème génération, Leonardo |
| \`CB-HERO001-FINAL.png\` | Hero pose 1, version sélectionnée |

---

## 9. Estimation de production

| Phase | Générations estimées |
|---|---|
| Calibrage style (Phase 2) | 50-80 |
| Production 22 poses × ~10 chacune | 180-220 |
| **Total** | **~250-300 images** |

Le plan Basic Midjourney (3,3h GPU rapide) + Leonardo AI Essential (8500 tokens) couvrent ce volume.

---

## 10. Après la production

Upload les illustrations FINAL dans la conversation Claude.
Claude s'occupe de :
- Suppression des fonds (fond transparent)
- Conversion en WebP (performance)
- Redimensionnement pour chaque usage
- Intégration dans le code Next.js du site
- Animations CSS d'apparition

---

## 11. Deadline

Tout doit être produit avant le **16 mai 2026** (fin des abonnements Leonardo + Midjourney).

