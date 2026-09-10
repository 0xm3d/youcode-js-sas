# 🏆 Jour 03 — Challenge

[← Exercices pratiques](../03-exercices.md) · [Tableau de bord](../README.md)

## Le Gestionnaire d'Inventaire de l'Aventurier

> [!IMPORTANT]
> Ce challenge sert à réunir les notions de la journée. Découpe le problème en petites étapes avant de coder.

## 🎯 Mission

**Contexte :** Vous devez gérer l'inventaire (sac à dos) d'un héros dans un jeu vidéo, en utilisant uniquement des fonctions pour manipuler la "mémoire" globale.

**Consignes :**
1. Déclarez une variable globale (hors des fonctions) `or = 0`.
2. Créez une fonction `ajouterOr(montant)` qui ajoute à la bourse et affiche "Vous avez ramassé [montant] or. Total: [or]".
3. Créez une fonction `depenserOr(montant)` qui vérifie si le héros a assez d'or. Si oui, déduit l'or et affiche l'achat. Sinon, affiche "Fonds insuffisants".
4. Créez une fonction `combatGagne()` qui appelle `ajouterOr` avec un montant aléatoire entre 10 et 50.
5. Simulez une aventure : gagnez 3 combats, puis tentez d'acheter une épée à 100 or.
*Bonus : Utilisez des closures pour éviter d'avoir `or` en variable globale vulnérable !*

## 📁 Fichier à modifier

[`challenge/challenge.js`](./challenge.js)

## 🪜 Méthode conseillée

1. Liste les données d'entrée.
2. Découpe le problème en sous-problèmes.
3. Teste chaque partie séparément.
4. Assemble la solution complète.
5. Teste au moins un cas normal et un cas limite.

## ▶️ Exécuter

```bash
node day03/challenge/challenge.js
```

## 💾 Sauvegarder

Crée un commit dédié lorsque le challenge fonctionne :

```bash
git add day03/challenge
git commit -m "jour 03 : terminer le challenge"
git push
```

## ✅ Validation

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Un cas normal et un cas limite sont testés.
- [ ] Je peux expliquer ma démarche au formateur.
