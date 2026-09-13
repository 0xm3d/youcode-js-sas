# 🧭 Jour 05 — Exercices guidés

[← Recherche](./01-recherche.md) · [Tableau de bord](./README.md) · [Exercices pratiques →](./03-exercices.md)

> [!IMPORTANT]
> Lis la mission, ouvre le fichier JavaScript et essaie seul pendant quelques minutes. Les indices restent disponibles si tu bloques.


## 🧩 Guide 01 — Extraire une sous-chaîne

> [!TIP]
> **Fichier à modifier :** [`guides/guide-01.js`](./guides/guide-01.js)

### 🎯 Mission

On vous donne une date au format ISO `"2024-10-15"`. Récupérez uniquement l'année.

<details>
<summary><strong>Besoin d'aide ? Afficher les indices</strong></summary>

### 💡 Indices

Vous connaissez la structure exacte (4 chiffres, tiret, etc.). `.slice(debut, fin)` est idéal.

### 🪜 Démarche pas à pas

1. `let date = "2024-10-15";`
2. L'année commence à l'index 0 et s'arrête juste avant l'index 4.
3. `let annee = date.slice(0, 4); console.log(annee);`

</details>

### ✅ Vérification

- [ ] J'ai essayé avant d'ouvrir les indices.
- [ ] Mon fichier s'exécute sans erreur.
- [ ] Je peux expliquer chaque étape.


---

## 🧩 Guide 02 — Recherche de mot-clé (Sensibilité à la casse)

> [!TIP]
> **Fichier à modifier :** [`guides/guide-02.js`](./guides/guide-02.js)

### 🎯 Mission

Vérifiez si le mot `"javascript"` est présent dans la phrase `"J'apprends le JavaScript à YouCode"`. La recherche doit ignorer les majuscules/minuscules.

<details>
<summary><strong>Besoin d'aide ? Afficher les indices</strong></summary>

### 💡 Indices

Si vous cherchez "javascript" (minuscules) dans "JavaScript" avec `.includes()`, ça renverra faux. Uniformisez tout en minuscules d'abord.

### 🪜 Démarche pas à pas

1. `let phrase = "J'apprends le JavaScript à YouCode";`
2. `let phraseMinuscule = phrase.toLowerCase();`
3. `let contient = phraseMinuscule.includes("javascript");`

</details>

### ✅ Vérification

- [ ] J'ai essayé avant d'ouvrir les indices.
- [ ] Mon fichier s'exécute sans erreur.
- [ ] Je peux expliquer chaque étape.


---

## 🧩 Guide 03 — Remplacement global

> [!TIP]
> **Fichier à modifier :** [`guides/guide-03.js`](./guides/guide-03.js)

### 🎯 Mission

Vous avez une URL mal formatée : `"youcode-safi-2024"`. Remplacez tous les tirets par des espaces.

<details>
<summary><strong>Besoin d'aide ? Afficher les indices</strong></summary>

### 💡 Indices

Attention, `.replace("-", " ")` ne remplacera que le TOUT PREMIER tiret.

### 🪜 Démarche pas à pas

Utilisez `.replaceAll("-", " ")` ou une regex `.replace(/-/g, " ")`.

</details>

### ✅ Vérification

- [ ] J'ai essayé avant d'ouvrir les indices.
- [ ] Mon fichier s'exécute sans erreur.
- [ ] Je peux expliquer chaque étape.


## ✅ Fin de l'étape

- [ ] Les trois fichiers guidés contiennent ma propre solution.
- [ ] Je peux expliquer les notions utilisées sans lire la démarche.
