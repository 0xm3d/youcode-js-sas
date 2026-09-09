# 🏆 Jour 02 — Challenge

[← Exercices pratiques](../03-exercices.md) · [Tableau de bord](../README.md)

## Le Brute-Forcer

> [!IMPORTANT]
> Ce challenge sert à réunir les notions de la journée. Découpe le problème en petites étapes avant de coder.

## 🎯 Mission

**Contexte :**
Vous simulez un programme pour "craquer" un cadenas à 3 chiffres.

**Consignes :**
1. Définissez `codeSecret = 739`.
2. Utilisez des boucles imbriquées (3 boucles `for` imbriquées allant chacune de 0 à 9) pour simuler les roues d'un cadenas de valise.
3. À chaque essai, reconstituez le code testé (ex: `c1 * 100 + c2 * 10 + c3`).
4. Si le code testé est égal au `codeSecret`, arrêtez toutes les boucles et affichez "Code trouvé : 739 après X essais". 
*Note : Réfléchissez à la manière de sortir de plusieurs boucles imbriquées (labels ou vérification de variable booléenne `trouve`).*

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
node day02/challenge/challenge.js
```

## 💾 Sauvegarder

Crée un commit dédié lorsque le challenge fonctionne :

```bash
git add day02/challenge
git commit -m "jour 02 : terminer le challenge"
git push
```

## ✅ Validation

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Un cas normal et un cas limite sont testés.
- [ ] Je peux expliquer ma démarche au formateur.
