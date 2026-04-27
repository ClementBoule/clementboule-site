# Protocole de copywriting — clementboule.fr

> Référence pour toute production de contenu visible utilisateur sur le site
> et son écosystème (meta SEO, JSON-LD, OG, posts, mails).
> Établi en session du 27/04/2026 après purge complète du langage IA.

## Principe

Tout texte du site doit sonner comme un humain qui parle pro, pas comme un
modèle qui rédige. Sans exception : peu importe la langue (FR, EN), le
format (web, doc, mail, slide, code, post), ou le registre demandé.

La règle prévaut sur toute autre considération de style — y compris pour
copywriting commercial, slides clients, mails, documentation technique.
Pas de dérogation pour cause de « tonalité premium », « positionnement
haut de gamme », « besoin d'impact ». La perception premium vient de la
précision du fond, pas de la performance rhétorique de la forme.

## Patterns à bannir

| Pattern | Exemple typique IA | Correction |
|---------|---------------------|------------|
| Tryptique rythmique pour faire joli | « managers, équipes et dirigeants » | Réduire à 1-2 éléments ou réécrire en énumération naturelle |
| Parallélisme négatif | « X, pas Y » / « X, jamais Y » / « pas X, pas Y » | Reformulation positive ou « plutôt que » |
| Em-dash décoratif | « 8 ans — bilingue — Paris » | Réserver le tiret cadratin aux vraies incises |
| Setup-punchline | « avec un objectif simple : X » / « voici la vérité : Y » | Phrase complète, sans annonce de chute |
| Phrase nominale isolée | « Direct. Sans détour. » | Phrase complète sauf si le sens l'exige |
| Construction miroir | « hier X, aujourd'hui Y » / « pas X, mais Y » | Reformulation linéaire |
| Mots béquilles | « vraiment », « concrètement », « simplement », « véritable », « tout simplement » | Supprimer si la phrase tient sans |
| Vocabulaire consultant | « cadrer », « ancrer », « déployer », « lever les freins », « faire bouger les lignes » | Mot du quotidien si possible |
| Adjectifs marketing en chaîne | « unique, sur-mesure, adapté » | 1 adjectif ou aucun |
| Apostrophes lyriques | « parlons-en », « entrons dans le vif du sujet » | Direct sans interpellation rhétorique |
| Tournure bilan-de-stage | « ce qui s'ancre durablement », « au-delà de la formation » | Factuel ou descriptif |
| Negative space rhetoric | « Pas de X. Pas de Y. Juste Z. » | Reformulation positive |

## Patterns acceptés

- Phrases de longueurs variées, y compris imparfaites.
- Démarrages en « Et », « Mais », « Parce que », « Du coup ».
- Vocabulaire concret au lieu du jargon métier quand un mot du quotidien
  suffit.
- Question banale, fin molle, raccourci.
- Énumérations métier réelles (3 axes RH/management/soft skills, ou
  corps/voix/regard pour la posture). Ce ne sont pas des tryptiques pour
  faire joli, ce sont les vrais axes du métier.

## Test de relecture

Pour chaque phrase produite, deux questions :

1. **Téléphone** : si je dis cette phrase à un prospect au téléphone, ça
   passe ou ça sonne dossier de presse ?
2. **Suppression** : si je retire « vraiment », « simplement »,
   « concrètement », « véritable », est-ce que la phrase perd du sens ?
   Si non, je le retire.

Si la phrase passe le test téléphone et survit aux suppressions, elle
reste. Sinon, on réécrit.

## Exception assumée : la signature de marque

La signature « **made with care, not with templates** » utilise un
parallélisme négatif (« X, not Y ») normalement banni. Elle est
**conservée** comme exception explicite, validée par Clément, à 4
emplacements stratégiques :

- Hero (badge rose pâle font-marker rotaté -2deg sous le H1)
- Footer (signature font-marker text-cb-rose au-dessus du logotype)
- /a-propos (eyebrow tagline sous le H1, font-marker text-cb-cardinal)
- FinalCTA (micro-tag font-marker rose, rotaté -3deg)

Une signature de marque a un statut différent d'une phrase de copy :
elle se répète, elle se mémorise, elle gagne à avoir une structure
rythmique forte. C'est l'exception qui confirme la règle, à condition
qu'elle reste **la seule**. Toute autre formulation de copy doit
respecter strictement les règles ci-dessus.

## Cohérence factuelle stricte

- 8 ans d'expérience (depuis 2018), jamais « 10 ans », « 15 sessions/an »,
  « depuis 2016 ».
- +1 800 personnes formées (cumul réel).
- Bilingue FR/EN.
- 4 domaines : management, soft skills, RH, stratégie.
- 6 formations : RH & marque employeur, posture professionnelle,
  prévention RPS, stratégie d'entreprise, soft skills, Spine'Up.
- Pas de mention auto-entrepreneur côté visiteur (sauf /mentions-legales
  obligatoire LCEN).
- Pas de témoignages fictifs (illégal L121-2 Code conso).
- Pas de stats inventées : chaque chiffre doit être source.

## Workflow de production

1. **Diagnostic phrase par phrase** avec grille 🟢/🟡/🔴.
2. **Réécriture** des 🔴 et 🟡 en respectant les règles ci-dessus.
3. **Vérification de cohérence factuelle** transversale (chiffres,
   références, claims).
4. **Validation** par Clément avant push.
5. **Push** avec commit qui détaille les patterns IA retirés.
