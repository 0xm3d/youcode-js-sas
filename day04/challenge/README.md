# 🏆 Jour 04 — Challenge

[← Exercices pratiques](../03-exercices.md) · [Tableau de bord](../README.md)

## Gestion de Panier E-Commerce

> [!IMPORTANT]
> Ce challenge sert à réunir les notions de la journée. Découpe le problème en petites étapes avant de coder.

## 🎯 Mission

**Contexte :** Vous codez la logique du panier d'achat d'une boutique en ligne.

**Consignes :**
1. Vous avez un tableau représentant les ID des articles dans le panier : `panier = [101, 105, 101, 102]`.
2. Créez une fonction `ajouterAuPanier(id)` qui ajoute l'article au tableau.
3. Créez une fonction `retirerDuPanier(id)` qui retire **Toutes les occurrences** de cet ID du panier (ex: retirer 101).
4. (Bonus) Créez une fonction `afficherQuantites()` qui compte et affiche le panier sous forme : `Article 101 : 2 exemplaires, Article 105 : 1 exemplaire...`

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
node day04/challenge/challenge.js
```

## 💾 Sauvegarder

Crée un commit dédié lorsque le challenge fonctionne :

```bash
git add day04/challenge
git commit -m "jour 04 : terminer le challenge"
git push
```

## ✅ Validation

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Un cas normal et un cas limite sont testés.
- [ ] Je peux expliquer ma démarche au formateur.
