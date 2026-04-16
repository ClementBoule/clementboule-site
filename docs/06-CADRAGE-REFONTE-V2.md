# Cadrage — Refonte clementboule.fr V2

> Date : 16 avril 2026
> Référence visuelle : ouss.co (Oussama Ammar)
> Vision : site vivant, dessiné, culturellement riche, décalé mais pro

---

## 1. Ce qu'on retient de ouss.co (analyse technique)

### Stack identifiée
- **Framework** : Next.js (App Router) — même techno que ton site actuel
- **Styling** : Tailwind CSS + 1379 CSS custom properties + 26 animations @keyframes
- **Animations** : Aucune librairie externe (pas de GSAP, pas de Framer Motion) — tout en CSS natif
- **Typographie** : Poppins (sans-serif) + une serif pour les titres (style éditorial)
- **SEO** : JSON-LD structuré (schema.org/Person), meta OG complets
- **CMS** : Pas de CMS détecté — contenu statique dans le code

### Choix visuels qui claquent
- **Hero** : illustration portrait dessiné à la main, hyper expressif, format demi-page
- **Illustrations** : style cohérent sur tout le site (chat noir, torii japonais, ASCII art)
- **Palette** : beige/crème chaud, accents rose/rouge, texte sombre — élégant sans être corporate
- **Typographie** : mix serif bold (titres) + sans-serif (corps) — côté éditorial/magazine
- **Navigation** : menu plein écran avec photo réelle + arborescence riche
- **Badges/tags** : petits chips avec icônes pour les titres, certifications, rôles
- **Chiffres clés** : mis en avant dans le hero (1,5Md€, 142 pays, 700+ conférences)
- **Pages en construction** : même les pages vides ont de la personnalité (ASCII art + humour)

### Architecture du site (12 pages)
Home, Qui suis-je, Ventures, Education, Consulting, Les Amis, Mon Histoire, Flâneries, Mes Oeuvres, Bibliothèque, L'Affaire The Family, Dites Bonjour

---

## 2. Vision pour clementboule.fr V2

### Le concept : "Clément dessiné"
Toi, mais en personnage illustré à la main. Réaliste dans les traits, décalé dans la mise en scène. Tu pointes une baguette vers un texte important, tu es assis sur un coin de section, tu regardes le visiteur. Tu es **présent visuellement** sur chaque page sans que ce soit du narcissisme — c'est du storytelling visuel.

### Le ton
- Pro mais pas corporate
- Culturellement riche (références, citations, humour fin)
- Bilingue FR/EN naturellement intégré
- Un site qui donne envie d'être exploré, pas juste lu

---

## 3. Architecture proposée

| Page | Contenu | Priorité |
|---|---|---|
| / (Home) | Hero illustré + pitch + chiffres clés + CTA | V2.0 |
| /qui-suis-je | Parcours, philosophie, méthode de travail | V2.0 |
| /formations | Catalogue détaillé des 6 formations | V2.0 |
| /test-disc | Test DISC interactif (déjà existant, à restyler) | V2.0 |
| /clients | Logos + témoignages | V2.0 |
| /contact | Formulaire + infos | V2.0 |
| /mentions-legales | Légal | V2.0 |
| /politique-de-confidentialite | RGPD | V2.0 |
| /blog | Articles, réflexions (SEO long-tail) | V2.1 |

---

## 4. Outils à mobiliser et coûts

### A. Illustrations — LE poste clé

| Option | Description | Coût estimé |
|---|---|---|
| **IA + retouche manuelle** | Générer via Midjourney/DALL-E à partir de tes photos HD | 0 à 30 EUR/mois |
| **Illustrateur freelance** | Briefer un illustrateur pour créer le personnage et 5-10 poses | 200 à 800 EUR |
| **Hybride (recommandé)** | IA pour les bases + illustrateur pour harmoniser le style | 100 à 300 EUR |

**Recommandation** : Approche hybride. IA pour générer les bases à partir de tes photos pro, illustrateur pour harmoniser.

### B. Stack technique — 0 EUR
Next.js 14, TypeScript, Tailwind CSS, CSS @keyframes natif, Vercel (Hobby), GitHub — on garde tout.

### C. Typographie — 0 EUR
Serif bold pour les titres (Playfair Display, Lora, ou Bitter) + sans-serif pour le corps (Inter, Poppins, DM Sans). Google Fonts gratuit.

### D. SEO / GEO — 0 EUR
JSON-LD (Person, LocalBusiness, Course), Sitemap.xml, robots.txt, Google Search Console, OpenGraph.

### E. Services existants — déjà payés
OVH (domaine+DNS+mail), Resend (free tier), Google Analytics (gratuit).

---

## 5. Budget total estimé

| Poste | Coût |
|---|---|
| Illustrations (hybride IA + retouche) | 100 à 300 EUR |
| Abonnement Midjourney (1-2 mois) | 0 à 60 EUR |
| Stack technique | 0 EUR |
| Hébergement, domaine, email | Déjà payé |
| **TOTAL** | **100 à 360 EUR** |

---

## 6. Plan de travail

### Phase 1 — Direction artistique
1. Moodboard avec éléments visuels de référence
2. Palette de couleurs exacte
3. Duo typographique
4. Premières illustrations IA à partir des photos
5. Validation du style

### Phase 2 — Développement V2
1. Refonte layout (nouvelle structure de pages)
2. Nouveau Hero avec illustration grand format
3. Navigation menu burger plein écran
4. Animations CSS @keyframes
5. Pages formations détaillées
6. Intégration illustrations

### Phase 3 — SEO / GEO / Performance
1. JSON-LD complet
2. Audit Lighthouse
3. Core Web Vitals
4. Google Analytics paramétré

---

## 7. Ce qu'il me faut de ta part

- [ ] Tes photos HD du photographe (variées en poses et expressions)
- [ ] Ton budget max pour les illustrations
- [ ] Tes préférences de couleurs (beige chaud comme ouss.co ou autre ?)
- [ ] Les formations à mettre en avant en priorité
- [ ] Exemples de sites/visuels que tu aimes (en plus d'ouss.co)
- [ ] Ton texte "qui suis-je" — ou on l'écrit ensemble ?
