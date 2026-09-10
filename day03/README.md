# 📅 Jour 03 — Découper un problème avec des Fonctions

> [!IMPORTANT]
> Travaille dans l'ordre, teste chaque solution et crée plusieurs commits pendant la journée.

## 🎯 Objectif de la journée

Jusqu'à présent, notre code s'exécutait de haut en bas, une seule fois. Mais que se passe-t-il si l'on veut réutiliser un bout de code, comme le calcul de la TVA, à plusieurs endroits ? C'est là qu'entrent en jeu les **Fonctions**. Une fonction est comme une "mini-machine" : on lui donne des ingrédients en entrée (paramètres), elle fait un travail, et elle nous retourne un résultat. Savoir diviser un grand problème en petites fonctions est la clé d'un code propre, lisible et maintenable.

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
node day03/exercices/exercice-01.js
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
git add day03
git commit -m "jour 03 : terminer le niveau 1"
git push
```

## ✅ Fin de journée

- [ ] Les questions de recherche ont été traitées.
- [ ] Les trois exercices guidés ont été codés et compris.
- [ ] Les 20 exercices et le challenge contiennent une solution personnelle.
- [ ] `npm test` ne signale plus de fichier vide ni d'erreur de syntaxe.
- [ ] Plusieurs commits avec des messages compréhensibles sont visibles sur GitHub.
- [ ] Le lien du dépôt a été remis dans Google Classroom.
