# 🏆 Jour 05 — Challenge

[← Exercices pratiques](../03-exercices.md) · [Tableau de bord](../README.md)

## Le Filtre à Insultes / Censure

> [!IMPORTANT]
> Ce challenge sert à réunir les notions de la journée. Découpe le problème en petites étapes avant de coder.

## 🎯 Mission

**Contexte :** Vous développez le système de chat d'un jeu vidéo en ligne pour YouCode.

**Consignes :**
1. Vous avez une liste (tableau) de mots interdits : `["noob", "idiot", "nul"]`.
2. Créez une fonction `filtrerMessage(message)` qui reçoit le message tapé par le joueur.
3. Si le message contient un des mots interdits (peu importe s'il y a des majuscules, ex: "nOOb"), il doit être remplacé par des astérisques de la même longueur (ex: "****").
4. Retournez le message censuré.

*Exemple de test :*
`filtrerMessage("Tu es vraiment un GROS NooB et un idiot !!")`
-> Résultat attendu : `"Tu es vraiment un GROS **** et un ***** !!"`

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
node day05/challenge/challenge.js
```

## 💾 Sauvegarder

Crée un commit dédié lorsque le challenge fonctionne :

```bash
git add day05/challenge
git commit -m "Jour 05 : terminer le challenge"
git push
```

## ✅ Validation

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Un cas normal et un cas limite sont testés.
- [ ] Je peux expliquer ma démarche au formateur.
