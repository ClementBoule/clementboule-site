# Runbook incident — clementboule.fr

> Plan de réponse aux incidents de sécurité et de disponibilité.
> Référentiel : NIST CSF 2.0 (Respond + Recover) · ANSSI guide TPE/PME.
> Dernière mise à jour : 26 avril 2026.

## Avant tout incident — réflexes constants

- Ne jamais paniquer. Lire ce runbook AVANT d'agir.
- Tracer chaque action dans un fichier `incident-YYYY-MM-DD.md` (date, action, résultat).
- Ne pas supprimer de logs ou de traces avant analyse.
- Préserver les preuves (captures d'écran des dashboards, exports email).

## Comptes critiques et points de contrôle

| Service | URL admin | Rôle dans la chaîne |
|---------|-----------|---------------------|
| GitHub | https://github.com/ClementBoule/clementboule-site | Code source, source de vérité |
| Vercel | https://vercel.com/clementboule | Hébergement, déploiement, rollback |
| Cloudflare | https://dash.cloudflare.com | Web Analytics (lecture seule) |
| Registrar domaine `.fr` | (à documenter) | DNS, expiration domaine |
| Email pro | hello@clementboule.com | Canal de contact RGPD |

## Scénario 1 — Site inaccessible (HTTP 5xx ou timeout)

**Détection** : notification Vercel par email, ou test manuel `curl -I https://clementboule.fr`.

| Étape | Action | Délai cible |
|-------|--------|-------------|
| 1 | Vérifier statut Vercel : https://www.vercel-status.com | 1 min |
| 2 | Si Vercel OK → dashboard Vercel → Deployments → identifier le dernier déploiement vert | 2 min |
| 3 | Cliquer "Promote to Production" sur ce déploiement (= rollback 1-clic) | 3 min |
| 4 | Re-tester le site. Si OK : incident résolu, garder trace, investiguer la cause à froid | 5 min |
| 5 | Si rollback ne fixe pas → Vercel Support (chat dashboard) + lever ticket | 15 min |

**À ne pas faire** : redéployer en force avant d'avoir compris la cause. Le rollback est non destructif.

## Scénario 2 — Compromission GitHub suspectée

**Détection** : email GitHub d'un commit, push ou login que tu n'as pas fait. Alerte 2FA déclenchée sans toi.

| Étape | Action | Délai cible |
|-------|--------|-------------|
| 1 | Settings → Developer settings → Personal access tokens → **révoquer tous les PAT** | 2 min |
| 2 | Settings → Sessions → **terminer toutes les sessions actives** sauf la tienne | 1 min |
| 3 | Settings → Password → **changer le mot de passe** (gestionnaire à jour) | 3 min |
| 4 | Settings → 2FA → vérifier les méthodes 2FA enregistrées (retirer ce qui n'est pas à toi) | 2 min |
| 5 | Audit `git log --all --since='30 days ago'` localement → repérer commits inattendus | 10 min |
| 6 | Si commit malveillant : `git revert` du commit + force push avec ton compte propre | 15 min |
| 7 | Auditer GitHub Apps et OAuth Apps autorisées : Settings → Applications → tout retirer sauf Vercel | 5 min |
| 8 | Notifier les clients SI un secret en clair a fuité (RGPD : 72h max) | 72h max |

## Scénario 3 — Fuite de secret accidentelle (token, clé API, credential)

**Détection** : Dependabot secret scanning, GitHub email "secret detected", ou découverte manuelle.

| Étape | Action | Délai cible |
|-------|--------|-------------|
| 1 | **Révoquer le secret** chez l'émetteur immédiatement (Cloudflare, Vercel, etc.) | 5 min |
| 2 | Re-générer un nouveau secret et le mettre à jour dans Vercel env vars (jamais dans le repo) | 10 min |
| 3 | Si le secret est dans l'historique git : `git filter-repo --invert-paths --path <fichier>` puis force push | 30 min |
| 4 | Si le repo est public : considérer que tout l'internet a vu le secret. Révoquer = obligatoire. | — |
| 5 | Documenter l'incident, identifier le commit et l'auteur (souvent toi par inattention) | 15 min |

**Outil utile** : `git secrets --scan-history` pour scan rétroactif, ou `truffleHog`.

## Scénario 4 — RGPD : demande utilisateur (accès, effacement, portabilité)

**Détection** : email à hello@clementboule.com du type "Je demande l'accès à mes données" ou "Je veux que vous effaciez mes données".

| Étape | Action | Délai cible |
|-------|--------|-------------|
| 1 | **Accuser réception sous 72h** (mention article 12 RGPD) | 72h |
| 2 | Identifier les données détenues : emails reçus de la personne (boîte mail Gmail) | 1 jour |
| 3 | Préparer la réponse : export des emails échangés, ou confirmation d'effacement | 3 jours |
| 4 | **Répondre sous 30 jours max** (RGPD art. 12.3) — extensible à 90 jours si demande complexe avec justification | 30 jours |
| 5 | Si effacement demandé : supprimer les emails échangés ET vider la corbeille Gmail | inclus |
| 6 | Tracer la demande dans `incident-rgpd-YYYY-MM-DD.md` (date demande, date réponse, action) | inclus |

**Notice** : conservation max 3 ans après dernier échange (cf. politique de confidentialité §6).

## Scénario 5 — DDoS ou trafic anormal

**Détection** : Cloudflare Analytics → pic de trafic anormal, Vercel → erreur quota.

| Étape | Action | Délai cible |
|-------|--------|-------------|
| 1 | Vercel → Settings → DDoS Protection : vérifier que c'est activé (par défaut sur tous les plans) | 1 min |
| 2 | Cloudflare Analytics : identifier les pays / IP source du trafic | 5 min |
| 3 | Si attaque ciblée : ouvrir ticket Vercel + activer Cloudflare en proxy (couche supplémentaire) | 30 min |
| 4 | Communiquer aux clients impactés si downtime > 1h | inclus |

## Contacts d'urgence

| Service | Canal | Délai réponse typique |
|---------|-------|----------------------|
| Vercel Support | https://vercel.com/help (chat) | 4-24h plan Hobby, plus rapide Pro |
| GitHub Support | https://support.github.com | 1-3 jours plan Free, 8h Premium |
| CNIL (notification violation données) | https://www.cnil.fr/fr/notifier-une-violation-de-donnees-personnelles | 72h obligation déclaration |
| ANSSI CERT-FR (incidents majeurs) | cert-fr.cossi@ssi.gouv.fr | sur demande |

## Post-incident

Pour tout incident, dans les 7 jours :

1. Rédiger un **post-mortem** : `docs/post-mortems/YYYY-MM-DD-<sujet>.md`
2. Format : timeline factuelle, root cause, actions correctives, ce qui aurait évité l'incident
3. Mettre à jour ce runbook si l'incident a révélé un trou dans la procédure
4. Re-scorer le dashboard sécurité (`memory/security.md`)

## Tests réguliers

- **Trimestriel** : exécuter à blanc le scénario 1 (rollback) sur un déploiement test
- **Annuel** : revoir tous les scénarios, mettre à jour les contacts, vérifier les expirations (domaine, certifs, tokens)
