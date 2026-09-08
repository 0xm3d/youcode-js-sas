# 🏆 Jour 01 — Challenge

[← Exercices pratiques](../03-exercices.md) · [Tableau de bord](../README.md)

## Le Simulateur de Prêt Bancaire

> [!IMPORTANT]
> Ce challenge sert à réunir les notions de la journée. Découpe le problème en petites étapes avant de coder.

## 🎯 Mission

Vous allez coder le cœur logique d'une application de crédit bancaire.

**Consignes :**
1. L'utilisateur fournit 3 données (variables) : `montantEmprunte` (ex: 100000), `dureeEnMois` (ex: 24), `revenuMensuel` (ex: 8000).
2. Vérifiez si l'utilisateur est éligible : la mensualité estimée (`montantEmprunte / dureeEnMois`) ne doit pas dépasser 30% de son `revenuMensuel`.
3. S'il est éligible, affichez "Prêt accordé. Mensualité : [X] MAD".
4. S'il n'est pas éligible, mais que son revenu est supérieur à 10000 MAD, proposez d'augmenter la durée. Sinon, affichez "Prêt refusé".

*Exemple de test : montant 100 000, 24 mois (mensualité: 4166.66). 30% de 8000 = 2400. Donc le prêt est refusé, et comme le revenu n'est pas > 10000, "Prêt refusé".*

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
node day01/challenge/challenge.js
```

## 💾 Sauvegarder

Crée un commit dédié lorsque le challenge fonctionne :

```bash
git add day01/challenge
git commit -m "jour 01 : terminer le challenge"
git push
```

## ✅ Validation

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Un cas normal et un cas limite sont testés.
- [ ] Je peux expliquer ma démarche au formateur.
