# 📅 Jour 04 — Stocker et parcourir plusieurs valeurs (Tableaux)

> [!IMPORTANT]
> Travaille dans l'ordre, teste chaque solution et crée plusieurs commits pendant la journée.

## 🎯 Objectif de la journée

Jusqu'à présent, une variable = une valeur. Mais comment gérer une liste de 50 notes d'étudiants ? Déclarer `note1`, `note2`, ... `note50` serait un cauchemar. Les **Tableaux (Arrays)** sont des variables spéciales capables de contenir plusieurs éléments à la fois, ordonnés par un "index" (une position). Apprendre à ajouter, supprimer, parcourir et transformer des éléments dans un tableau est une compétence fondamentale en développement.

## 🧭 Parcours

| Étape | Travail | Accès | Validation |
|---:|---|---|:---:|
| 1 | Comprendre les notions | [Questions de recherche](./01-recherche.md) | ☐ |
| 2 | Apprendre avec un exemple | [3 exercices guidés](./02-guides.md) | ☐ |
| 3 | S'entraîner progressivement | [20 exercices pratiques](./03-exercices.md) | ☐ |
| 4 | Mobiliser toutes les notions | [Challenge du jour](./challenge/README.md) | ☐ |

## ▶️ Démarrage rapide

Depuis la racine du dépôt, exécute un exercice avec :

```bash
node day04/exercices/exercice-01.js
```

Remplace `01` par le numéro souhaité. Pour contrôler toute ta progression :

```bash
npm test
```

## 🔁 Méthode de travail

1. **Lire** la mission et repérer les données fournies.
2. **Écrire** une première solution, même imparfaite.
3. **Exécuter** le fichier avec Node.js.
4. **Comparer** le résultat obtenu avec le résultat attendu.
5. **Corriger**, puis expliquer oralement la solution.

## 💾 Sauvegarde Git

Après chaque groupe d'exercices :

```bash
git status
git add day04
git commit -m "jour 04 : terminer le niveau 1"
git push
```

## ✅ Fin de journée

- [ ] Les questions de recherche ont été traitées.
- [ ] Les trois exercices guidés ont été codés et compris.
- [ ] Les 20 exercices et le challenge contiennent une solution personnelle.
- [ ] `npm test` ne signale plus de fichier vide ni d'erreur de syntaxe.
- [ ] Plusieurs commits avec des messages compréhensibles sont visibles sur GitHub.
- [ ] Le lien du dépôt a été remis dans Google Classroom.
