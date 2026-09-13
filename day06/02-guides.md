# 🧭 Jour 06 — Exercices guidés

[← Recherche](./01-recherche.md) · [Tableau de bord](./README.md) · [Exercices pratiques →](./03-exercices.md)

> [!IMPORTANT]
> Lis la mission, ouvre le fichier JavaScript et essaie seul pendant quelques minutes. Les indices restent disponibles si tu bloques.


## 🧩 Guide 01 — Créer un objet et y accéder

> [!TIP]
> **Fichier à modifier :** [`guides/guide-01.js`](./guides/guide-01.js)

### 🎯 Mission

Créez un objet `voiture` avec la marque "Toyota", le modèle "Corolla" et l'année 2020. Affichez la marque.

<details>
<summary><strong>Besoin d'aide ? Afficher les indices</strong></summary>

### 💡 Indices

Utilisez les accolades `{}` pour définir un objet littéral, et les deux-points `:` pour séparer les clés des valeurs.

### 🪜 Démarche pas à pas

1. `let voiture = { marque: "Toyota", modele: "Corolla", annee: 2020 };`
2. `console.log(voiture.marque);`

</details>

### ✅ Vérification

- [ ] J'ai essayé avant d'ouvrir les indices.
- [ ] Mon fichier s'exécute sans erreur.
- [ ] Je peux expliquer chaque étape.


---

## 🧩 Guide 02 — L'accès dynamique

> [!TIP]
> **Fichier à modifier :** [`guides/guide-02.js`](./guides/guide-02.js)

### 🎯 Mission

On vous donne une variable `let cleRecherche = "modele";`. Comment utiliser cette variable pour afficher la valeur correspondante dans l'objet `voiture` ?

<details>
<summary><strong>Besoin d'aide ? Afficher les indices</strong></summary>

### 💡 Indices

`voiture.cleRecherche` cherchera littéralement une propriété nommée "cleRecherche" et retournera undefined. Il faut utiliser les crochets `[]`.

### 🪜 Démarche pas à pas

`console.log(voiture[cleRecherche]);`

</details>

### ✅ Vérification

- [ ] J'ai essayé avant d'ouvrir les indices.
- [ ] Mon fichier s'exécute sans erreur.
- [ ] Je peux expliquer chaque étape.


---

## 🧩 Guide 03 — Parcourir un Objet

> [!TIP]
> **Fichier à modifier :** [`guides/guide-03.js`](./guides/guide-03.js)

### 🎯 Mission

Affichez toutes les clés et leurs valeurs de l'objet `voiture` sous la forme "clé : valeur".

<details>
<summary><strong>Besoin d'aide ? Afficher les indices</strong></summary>

### 💡 Indices

Utilisez la boucle `for...in`.

### 🪜 Démarche pas à pas

```javascript
  for (let cle in voiture) {
      console.log(cle + " : " + voiture[cle]);
  }
  ```

</details>

### ✅ Vérification

- [ ] J'ai essayé avant d'ouvrir les indices.
- [ ] Mon fichier s'exécute sans erreur.
- [ ] Je peux expliquer chaque étape.


## ✅ Fin de l'étape

- [ ] Les trois fichiers guidés contiennent ma propre solution.
- [ ] Je peux expliquer les notions utilisées sans lire la démarche.
