# 💻 Jour 06 — Les 20 exercices

[← Exercices guidés](./02-guides.md) · [Tableau de bord](./README.md) · [Challenge →](./challenge/README.md)

> [!IMPORTANT]
> Commence par le niveau vert. Ne passe au niveau suivant que lorsque tes programmes s'exécutent correctement.

## 📋 Tableau de progression

| Fait | Nº | Exercice | Niveau | Fichier |
|:---:|---:|---|---|---|
| ☐ | 01 | [Le profil Utilisateur](#exercice-01) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-01.js) |
| ☐ | 02 | [Mise à jour](#exercice-02) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-02.js) |
| ☐ | 03 | [Suppression](#exercice-03) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-03.js) |
| ☐ | 04 | [Vérification d'existence](#exercice-04) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-04.js) |
| ☐ | 05 | [Extraction des clés](#exercice-05) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-05.js) |
| ☐ | 06 | [Extraction des valeurs](#exercice-06) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-06.js) |
| ☐ | 07 | [Tableau d'objets basique](#exercice-07) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-07.js) |
| ☐ | 08 | [Recherche dans un tableau d'objets](#exercice-08) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-08.js) |
| ☐ | 09 | [Filtrage de données](#exercice-09) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-09.js) |
| ☐ | 10 | [Comptage de valeurs](#exercice-10) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-10.js) |
| ☐ | 11 | [Clonage simple (Spread operator)](#exercice-11) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-11.js) |
| ☐ | 12 | [Méthode d'objet (this)](#exercice-12) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-12.js) |
| ☐ | 13 | [Fusion d'objets](#exercice-13) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-13.js) |
| ☐ | 14 | [Destructuration (Destructuring)](#exercice-14) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-14.js) |
| ☐ | 15 | [Simulation de Parsing JSON](#exercice-15) | Défi (Avancés) | [Ouvrir le code](./exercices/exercice-15.js) |
| ☐ | 16 | [Imbrication complexe (Nested objects)](#exercice-16) | Défi (Avancés) | [Ouvrir le code](./exercices/exercice-16.js) |
| ☐ | 17 | [Nettoyage de Scraping avec des Objets](#exercice-17) | Défi (Avancés) | [Ouvrir le code](./exercices/exercice-17.js) |
| ☐ | 18 | [Comparaison d'objets (Deep Equal concept)](#exercice-18) | Défi (Avancés) | [Ouvrir le code](./exercices/exercice-18.js) |
| ☐ | 19 | [Regroupement (Group By)](#exercice-19) | Défi (Avancés) | [Ouvrir le code](./exercices/exercice-19.js) |
| ☐ | 20 | [Deep Copy vs Shallow Copy](#exercice-20) | Défi (Avancés) | [Ouvrir le code](./exercices/exercice-20.js) |

## 🟢 Niveau 1 : Fondations (Débutants)


<a id="exercice-01"></a>

### Exercice 01 — Le profil Utilisateur

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-01.js`](./exercices/exercice-01.js)

#### 🎯 Mission

Créez un objet `utilisateur` avec les propriétés `nom`, `age`, et `estAdmin`.



#### ▶️ Tester le programme

```bash
node day06/exercices/exercice-01.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-02"></a>

### Exercice 02 — Mise à jour

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-02.js`](./exercices/exercice-02.js)

#### 🎯 Mission

Changez l'âge de l'utilisateur précédent pour l'augmenter de 1, et ajoutez-lui une propriété `email`.



#### ▶️ Tester le programme

```bash
node day06/exercices/exercice-02.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-03"></a>

### Exercice 03 — Suppression

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-03.js`](./exercices/exercice-03.js)

#### 🎯 Mission

Supprimez la propriété `estAdmin` de l'objet `utilisateur`.



#### ▶️ Tester le programme

```bash
node day06/exercices/exercice-03.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-04"></a>

### Exercice 04 — Vérification d'existence

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-04.js`](./exercices/exercice-04.js)

#### 🎯 Mission

Créez une fonction `possedePropriete(obj, cle)` qui retourne `true` si la clé existe dans l'objet, sinon `false`. *(Indice : vous pouvez utiliser l'opérateur `in` ou vérifier si c'est `!== undefined`)*.



#### ▶️ Tester le programme

```bash
node day06/exercices/exercice-04.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-05"></a>

### Exercice 05 — Extraction des clés

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-05.js`](./exercices/exercice-05.js)

#### 🎯 Mission

Utilisez `Object.keys()` sur votre objet utilisateur pour récupérer un tableau contenant toutes ses clés, et affichez sa longueur.



#### ▶️ Tester le programme

```bash
node day06/exercices/exercice-05.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-06"></a>

### Exercice 06 — Extraction des valeurs

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-06.js`](./exercices/exercice-06.js)

#### 🎯 Mission

Utilisez `Object.values()` pour récupérer un tableau contenant toutes les valeurs de l'objet, et affichez-le.



#### ▶️ Tester le programme

```bash
node day06/exercices/exercice-06.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-07"></a>

### Exercice 07 — Tableau d'objets basique

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-07.js`](./exercices/exercice-07.js)

#### 🎯 Mission

Créez un tableau contenant 3 objets représentant des `livres` (titre, auteur). Affichez le titre du 2ème livre.



#### ▶️ Tester le programme

```bash
node day06/exercices/exercice-07.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.


---

## 🟠 Niveau 2 : Consolidation (Intermédiaires)


<a id="exercice-08"></a>

### Exercice 08 — Recherche dans un tableau d'objets

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-08.js`](./exercices/exercice-08.js)

#### 🎯 Mission

Vous avez un tableau de `candidats` (chaque objet a `nom` et `score`). Écrivez une fonction qui retourne le nom du candidat ayant le meilleur score.



#### ▶️ Tester le programme

```bash
node day06/exercices/exercice-08.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-09"></a>

### Exercice 09 — Filtrage de données

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-09.js`](./exercices/exercice-09.js)

#### 🎯 Mission

Dans le même tableau de candidats, écrivez une fonction qui retourne un nouveau tableau contenant uniquement les candidats ayant un score >= 10.



#### ▶️ Tester le programme

```bash
node day06/exercices/exercice-09.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-10"></a>

### Exercice 10 — Comptage de valeurs

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-10.js`](./exercices/exercice-10.js)

#### 🎯 Mission

Vous avez une chaîne de caractères `"abracadabra"`. Créez une fonction qui retourne un objet comptant le nombre d'occurrences de chaque lettre. (ex: `{ a: 5, b: 2, r: 2, c: 1, d: 1 }`).



#### ▶️ Tester le programme

```bash
node day06/exercices/exercice-10.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-11"></a>

### Exercice 11 — Clonage simple (Spread operator)

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-11.js`](./exercices/exercice-11.js)

#### 🎯 Mission

Créez un objet `original = { a: 1, b: 2 }`. Utilisez la syntaxe "spread" (`...`) pour créer une copie `copie` qui n'est pas une référence, puis ajoutez `c: 3` à la copie sans modifier l'original.



#### ▶️ Tester le programme

```bash
node day06/exercices/exercice-11.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-12"></a>

### Exercice 12 — Méthode d'objet (this)

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-12.js`](./exercices/exercice-12.js)

#### 🎯 Mission

Créez un objet `compteBancaire` avec une propriété `solde` et une méthode `deposer(montant)`. La méthode doit utiliser `this.solde` pour augmenter le solde actuel.



#### ▶️ Tester le programme

```bash
node day06/exercices/exercice-12.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-13"></a>

### Exercice 13 — Fusion d'objets

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-13.js`](./exercices/exercice-13.js)

#### 🎯 Mission

Vous avez `infoClient = { nom: "Ali" }` et `infoPaiement = { methode: "Carte" }`. Fusionnez-les en un seul objet en utilisant `Object.assign()` ou le spread operator.



#### ▶️ Tester le programme

```bash
node day06/exercices/exercice-13.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-14"></a>

### Exercice 14 — Destructuration (Destructuring)

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-14.js`](./exercices/exercice-14.js)

#### 🎯 Mission

Soit `let etudiant = { prenom: "Sara", ville: "Rabat", note: 16 }`. En une seule ligne de code, extrayez le prénom et la ville dans deux variables distinctes portant le même nom.



#### ▶️ Tester le programme

```bash
node day06/exercices/exercice-14.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.


---

## 🔴 Niveau 3 : Défi (Avancés)


<a id="exercice-15"></a>

### Exercice 15 — Simulation de Parsing JSON

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-15.js`](./exercices/exercice-15.js)

#### 🎯 Mission

Vous recevez de l'API web la chaîne de caractères (JSON) suivante : 
`'{"id":1, "titre":"Apprendre le JS", "vu":false}'`.
Transformez cette chaîne en véritable objet JavaScript, passez `vu` à `true`, et re-transformez-le en chaîne JSON.



#### ▶️ Tester le programme

```bash
node day06/exercices/exercice-15.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-16"></a>

### Exercice 16 — Imbrication complexe (Nested objects)

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-16.js`](./exercices/exercice-16.js)

#### 🎯 Mission

Créez un objet `entreprise` qui a un `nom`, et une propriété `employes` qui est un tableau d'objets. Affichez le prénom du deuxième employé.



#### ▶️ Tester le programme

```bash
node day06/exercices/exercice-16.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-17"></a>

### Exercice 17 — Nettoyage de Scraping avec des Objets

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-17.js`](./exercices/exercice-17.js)

#### 🎯 Mission

Vous avez scrappé une liste de prix : `[{ article: "PC", prix: "1500$" }, { article: "Souris", prix: "25$" }]`. Écrivez une fonction qui modifie les objets pour que le `prix` devienne un vrai `Number` (enlever le "$").



#### ▶️ Tester le programme

```bash
node day06/exercices/exercice-17.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-18"></a>

### Exercice 18 — Comparaison d'objets (Deep Equal concept)

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-18.js`](./exercices/exercice-18.js)

#### 🎯 Mission

Écrivez une fonction `sontIdentiques(obj1, obj2)` qui vérifie si deux objets littéraux (sans objets imbriqués) ont exactement les mêmes clés et les mêmes valeurs.



#### ▶️ Tester le programme

```bash
node day06/exercices/exercice-18.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-19"></a>

### Exercice 19 — Regroupement (Group By)

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-19.js`](./exercices/exercice-19.js)

#### 🎯 Mission

Vous avez un tableau `[{nom: "A", groupe: 1}, {nom: "B", groupe: 2}, {nom: "C", groupe: 1}]`. Créez une fonction qui retourne un objet regroupant ces données : `{ 1: [{nom: "A"}, {nom: "C"}], 2: [{nom: "B"}] }`.



#### ▶️ Tester le programme

```bash
node day06/exercices/exercice-19.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-20"></a>

### Exercice 20 — Deep Copy vs Shallow Copy

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-20.js`](./exercices/exercice-20.js)

#### 🎯 Mission

Créez un objet contenant un autre objet imbriqué. Clonez-le avec le Spread operator (`...`). Montrez (avec console.log) que modifier l'objet imbriqué dans la copie modifie AUSSI l'original. Expliquez pourquoi en commentaire, et donnez la solution moderne (ex: `structuredClone` ou JSON parse/stringify).



#### ▶️ Tester le programme

```bash
node day06/exercices/exercice-20.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.
