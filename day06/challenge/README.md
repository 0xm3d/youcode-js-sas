# 🏆 Jour 06 — Challenge

[← Exercices pratiques](../03-exercices.md) · [Tableau de bord](../README.md)

## Le Pokedex (Annuaire de données)

> [!IMPORTANT]
> Ce challenge sert à réunir les notions de la journée. Découpe le problème en petites étapes avant de coder.

## 🎯 Mission

**Contexte :** Vous devez gérer une mini-base de données d'utilisateurs.

**Consignes :**
1. Vous avez un tableau `utilisateurs = []`.
2. Créez une fonction `ajouterUtilisateur(nom, email)` qui crée un objet `{ id, nom, email }` (générez un ID unique simple) et l'ajoute au tableau.
3. Créez une fonction `trouverParEmail(email)` qui retourne l'objet utilisateur correspondant.
4. Créez une fonction `supprimerParId(id)` qui supprime l'utilisateur du tableau.
5. Créez une fonction `afficherAnnuaire()` qui affiche joliment la liste complète dans la console.

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
node day06/challenge/challenge.js
```

## 💾 Sauvegarder

Crée un commit dédié lorsque le challenge fonctionne :

```bash
git add day06/challenge
git commit -m "jour 06 : terminer le challenge"
git push
```

## ✅ Validation

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Un cas normal et un cas limite sont testés.
- [ ] Je peux expliquer ma démarche au formateur.
