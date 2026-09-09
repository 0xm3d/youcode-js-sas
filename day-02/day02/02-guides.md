# 🧭 Jour 02 — Exercices guidés

[← Recherche](./01-recherche.md) · [Tableau de bord](./README.md) · [Exercices pratiques →](./03-exercices.md)

> [!IMPORTANT]
> Lis la mission, ouvre le fichier JavaScript et essaie seul pendant quelques minutes. Les indices restent disponibles si tu bloques.


## 🧩 Guide 01 — Répéter une action simple (Boucle for)

> [!TIP]
> **Fichier à modifier :** [`guides/guide-01.js`](./guides/guide-01.js)

### 🎯 Mission

Affichez les nombres de 1 à 5 dans la console.

<details>
<summary><strong>Besoin d'aide ? Afficher les indices</strong></summary>

### 💡 Indices

Vous savez exactement combien de fois vous voulez répéter l'action. La boucle `for` est donc le meilleur choix.

### 🪜 Démarche pas à pas

1. Structure : `for (let i = 1; i <= 5; i++) { ... }`
2. Action : Dans les accolades, placez `console.log(i);`.

</details>

### ✅ Vérification

- [ ] J'ai essayé avant d'ouvrir les indices.
- [ ] Mon fichier s'exécute sans erreur.
- [ ] Je peux expliquer chaque étape.


---

## 🧩 Guide 02 — Attendre un événement (Boucle while)

> [!TIP]
> **Fichier à modifier :** [`guides/guide-02.js`](./guides/guide-02.js)

### 🎯 Mission

On vous donne un nombre `N = 100`. Divisez ce nombre par 2 en boucle jusqu'à ce qu'il soit strictement inférieur à 1. Comptez combien de divisions ont été nécessaires.

<details>
<summary><strong>Besoin d'aide ? Afficher les indices</strong></summary>

### 💡 Indices

Vous ne savez pas à l'avance combien de fois il faudra diviser. La boucle `while` est parfaite ici.

### 🪜 Démarche pas à pas

1. Initialisez `let N = 100; let compteur = 0;`
2. Écrivez la condition : `while (N >= 1) { ... }`
3. Dans la boucle, divisez N : `N = N / 2;`
4. Toujours dans la boucle, incrémentez le compteur : `compteur++;`
5. Après la boucle, affichez le compteur.

</details>

### ✅ Vérification

- [ ] J'ai essayé avant d'ouvrir les indices.
- [ ] Mon fichier s'exécute sans erreur.
- [ ] Je peux expliquer chaque étape.


---

## 🧩 Guide 03 — Les boucles imbriquées (Grille)

> [!TIP]
> **Fichier à modifier :** [`guides/guide-03.js`](./guides/guide-03.js)

### 🎯 Mission

Affichez un carré de 3 lignes et 3 colonnes rempli d'étoiles `*`.

<details>
<summary><strong>Besoin d'aide ? Afficher les indices</strong></summary>

### 💡 Indices

La boucle externe gère les lignes (sauts de ligne). La boucle interne gère les colonnes d'une ligne spécifique.

### 🪜 Démarche pas à pas

1. `for (let i = 0; i < 3; i++) { ... }` (Pour chaque ligne)
2. À l'intérieur, déclarez une variable `let ligne = "";`
3. Ajoutez une boucle interne : `for (let j = 0; j < 3; j++) { ligne += "*"; }`
4. Sous la boucle interne, affichez la ligne compilée : `console.log(ligne);`

</details>

### ✅ Vérification

- [ ] J'ai essayé avant d'ouvrir les indices.
- [ ] Mon fichier s'exécute sans erreur.
- [ ] Je peux expliquer chaque étape.


## ✅ Fin de l'étape

- [ ] Les trois fichiers guidés contiennent ma propre solution.
- [ ] Je peux expliquer les notions utilisées sans lire la démarche.
