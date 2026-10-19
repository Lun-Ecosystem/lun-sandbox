# Lun'Sandbox

Dépôt jetable pour l'essai à blanc de la méthode lun-docs : cadrage, plan, agents par niveau, garde,
PR. Aucun code utile ; il sera archivé après l'essai.

**Rôle dans l'écosystème** : aucun (hors registre).

## Démarrer en local

```bash
npm test
```

Aucune dépendance au NAS : tout tourne sur le poste.

## Essai à blanc

Ce dépôt vérifie que la méthode lun-docs tient de bout en bout sur un vrai chantier :

- **Agents par niveau** : l'étiquette `niveau:*` de l'issue choisit l'agent de dev (`dev-haiku`,
  `dev-sonnet`, `dev-opus`), selon la grille de [lun-docs](https://github.com/Lun-Ecosystem/lun-docs).
- **Garde** : rien ne part directement sur `main`. Le hook de garde du plugin `lun` bloque le merge
  de PR, le push vers `main` et le push forcé ; `.claude/settings.json` les interdit aussi à Claude ;
  le hook [`hooks/pre-push`](hooks/pre-push) refuse le push vers `main`
  (activer avec `git config core.hooksPath hooks`).
- **PR mergée par CrOliX** : le travail arrive par une PR avec critères de fin et preuves ; seul
  CrOliX merge.

## Documentation

- [`docs/`](docs/) : ce que fait le projet aujourd'hui.
- Règles communes : [lun-docs](https://github.com/Lun-Ecosystem/lun-docs).

## Contribuer

Une branche, une PR avec critères de fin et preuves, CI verte. Seul CrOliX merge.
