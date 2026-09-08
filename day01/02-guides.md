# 🧭 Jour 01 — Exercices guidés

[← Recherche](./01-recherche.md) · [Tableau de bord](./README.md) · [Exercices pratiques →](./03-exercices.md)

> [!IMPORTANT]
> Lis la mission, ouvre le fichier JavaScript et essaie seul pendant quelques minutes. Les indices restent disponibles si tu bloques.


## 🧩 Guide 01 — Le Permutateur (Variables)

> [!TIP]
> **Fichier à modifier :** [`guides/guide-01.js`](./guides/guide-01.js)

### 🎯 Mission

Vous avez deux variables `a = 5` et `b = 10`. Vous devez échanger leurs valeurs pour que `a` vaille 10 et `b` vaille 5.

<details>
<summary><strong>Besoin d'aide ? Afficher les indices</strong></summary>

### 💡 Indices

Imaginez que vous avez un verre rempli d'eau (a) et un verre rempli de jus (b). Comment échanger leur contenu sans les mélanger ? Vous avez besoin d'un troisième verre vide.

### 🪜 Démarche pas à pas

1. Créez une variable temporaire : `let temp = a;`
2. Transférez le contenu de b dans a : `a = b;`
3. Transférez le contenu stocké de temp dans b : `b = temp;`

</details>

### ✅ Vérification

- [ ] J'ai essayé avant d'ouvrir les indices.
- [ ] Mon fichier s'exécute sans erreur.
- [ ] Je peux expliquer chaque étape.


---

## 🧩 Guide 02 — Le Détecteur de Types (Types primitifs)

> [!TIP]
> **Fichier à modifier :** [`guides/guide-02.js`](./guides/guide-02.js)

### 🎯 Mission

On vous donne une variable `data = "123"`. Affichez son type, convertissez-la en nombre, puis affichez à nouveau son type.

<details>
<summary><strong>Besoin d'aide ? Afficher les indices</strong></summary>

### 💡 Indices

L'opérateur `typeof` permet de connaître le type. Pour convertir une chaîne en nombre de manière explicite, on peut utiliser la fonction globale `Number()` ou le préfixe unitaire `+`.

### 🪜 Démarche pas à pas

1. Afficher : `console.log(typeof data);` (affichera "string")
2. Convertir : `let dataNumber = Number(data);`
3. Ré-afficher : `console.log(typeof dataNumber);` (affichera "number")

</details>

### ✅ Vérification

- [ ] J'ai essayé avant d'ouvrir les indices.
- [ ] Mon fichier s'exécute sans erreur.
- [ ] Je peux expliquer chaque étape.


---

## 🧩 Guide 03 — Agent de sécurité de l'université (Conditions)

> [!TIP]
> **Fichier à modifier :** [`guides/guide-03.js`](./guides/guide-03.js)

### 🎯 Mission

Créez une variable `age`. Si l'âge est `>= 18`, affichez "Entrée autorisée". Sinon, affichez "Accès refusé".

<details>
<summary><strong>Besoin d'aide ? Afficher les indices</strong></summary>

### 💡 Indices

La structure classique pour un choix binaire est `if (condition) { ... } else { ... }`.

### 🪜 Démarche pas à pas

1. `let age = 16;`
2. `if (age >= 18) { console.log("Entrée autorisée"); }`
3. `else { console.log("Accès refusé"); }`

</details>

### ✅ Vérification

- [ ] J'ai essayé avant d'ouvrir les indices.
- [ ] Mon fichier s'exécute sans erreur.
- [ ] Je peux expliquer chaque étape.


## ✅ Fin de l'étape

- [ ] Les trois fichiers guidés contiennent ma propre solution.
- [ ] Je peux expliquer les notions utilisées sans lire la démarche.
