# 🧭 Jour 04 — Exercices guidés

[← Recherche](./01-recherche.md) · [Tableau de bord](./README.md) · [Exercices pratiques →](./03-exercices.md)

> [!IMPORTANT]
> Lis la mission, ouvre le fichier JavaScript et essaie seul pendant quelques minutes. Les indices restent disponibles si tu bloques.


## 🧩 Guide 01 — Accès et Modification

> [!TIP]
> **Fichier à modifier :** [`guides/guide-01.js`](./guides/guide-01.js)

### 🎯 Mission

Créez un tableau `fruits = ["Pomme", "Banane", "Orange"]`. Changez "Banane" par "Mangue" et affichez le dernier élément du tableau.

<details>
<summary><strong>Besoin d'aide ? Afficher les indices</strong></summary>

### 💡 Indices

Les index commencent à 0. Pour trouver le dernier, on utilise `length - 1`.

### 🪜 Démarche pas à pas

1. L'index de "Banane" est 1. Donc `fruits[1] = "Mangue";`
2. Le dernier élément est `fruits[fruits.length - 1]`.

</details>

### ✅ Vérification

- [ ] J'ai essayé avant d'ouvrir les indices.
- [ ] Mon fichier s'exécute sans erreur.
- [ ] Je peux expliquer chaque étape.


---

## 🧩 Guide 02 — Parcourir avec for...of

> [!TIP]
> **Fichier à modifier :** [`guides/guide-02.js`](./guides/guide-02.js)

### 🎯 Mission

Vous avez `notes = [12, 15, 8, 19]`. Calculez la moyenne des notes en parcourant le tableau.

<details>
<summary><strong>Besoin d'aide ? Afficher les indices</strong></summary>

### 💡 Indices

Pour calculer la moyenne, il faut d'abord calculer la somme de tous les éléments, puis diviser par le nombre d'éléments.

### 🪜 Démarche pas à pas

1. `let somme = 0;`
2. `for (let note of notes) { somme += note; }`
3. `let moyenne = somme / notes.length;`

</details>

### ✅ Vérification

- [ ] J'ai essayé avant d'ouvrir les indices.
- [ ] Mon fichier s'exécute sans erreur.
- [ ] Je peux expliquer chaque étape.


---

## 🧩 Guide 03 — Manipulation (Ajouter et Supprimer)

> [!TIP]
> **Fichier à modifier :** [`guides/guide-03.js`](./guides/guide-03.js)

### 🎯 Mission

Vous avez une file d'attente `file = ["Alice", "Bob", "Charlie"]`. "Alice" est servie (elle sort de la file par l'avant), et "David" rejoint la file (à l'arrière).

<details>
<summary><strong>Besoin d'aide ? Afficher les indices</strong></summary>

### 💡 Indices

Retirer par l'avant = `shift()`. Ajouter par l'arrière = `push()`.

### 🪜 Démarche pas à pas

1. `file.shift();` (Enlève Alice)
2. `file.push("David");` (Ajoute David à la fin)

</details>

### ✅ Vérification

- [ ] J'ai essayé avant d'ouvrir les indices.
- [ ] Mon fichier s'exécute sans erreur.
- [ ] Je peux expliquer chaque étape.


## ✅ Fin de l'étape

- [ ] Les trois fichiers guidés contiennent ma propre solution.
- [ ] Je peux expliquer les notions utilisées sans lire la démarche.
