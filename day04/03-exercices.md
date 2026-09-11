# 💻 Jour 04 — Les 20 exercices

[← Exercices guidés](./02-guides.md) · [Tableau de bord](./README.md) · [Challenge →](./challenge/README.md)

> [!IMPORTANT]
> Commence par le niveau vert. Ne passe au niveau suivant que lorsque tes programmes s'exécutent correctement.

## 📋 Tableau de progression

| Fait | Nº | Exercice | Niveau | Fichier |
|:---:|---:|---|---|---|
| ☐ | 01 | [Déclaration et Accès](#exercice-01) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-01.js) |
| ☐ | 02 | [Ajout dynamique](#exercice-02) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-02.js) |
| ☐ | 03 | [Suppression](#exercice-03) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-03.js) |
| ☐ | 04 | [Parcourir avec un `for` classique](#exercice-04) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-04.js) |
| ☐ | 05 | [Chercher une valeur (Includes)](#exercice-05) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-05.js) |
| ☐ | 06 | [Fusion de tableaux](#exercice-06) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-06.js) |
| ☐ | 07 | [Tableau inversé](#exercice-07) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-07.js) |
| ☐ | 08 | [Recherche du Maximum et Minimum](#exercice-08) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-08.js) |
| ☐ | 09 | [Filtrage manuel (Les pairs)](#exercice-09) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-09.js) |
| ☐ | 10 | [Retirer des éléments (Splice)](#exercice-10) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-10.js) |
| ☐ | 11 | [Échantillonnage (Slice)](#exercice-11) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-11.js) |
| ☐ | 12 | [Le Dédoublonneur](#exercice-12) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-12.js) |
| ☐ | 13 | [Comparaison de tableaux](#exercice-13) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-13.js) |
| ☐ | 14 | [Rotation de tableau](#exercice-14) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-14.js) |
| ☐ | 15 | [Fusion Triée](#exercice-15) | Défi (Avancés) | [Ouvrir le code](./exercices/exercice-15.js) |
| ☐ | 16 | [Scraping : Extraction de données mixtes](#exercice-16) | Défi (Avancés) | [Ouvrir le code](./exercices/exercice-16.js) |
| ☐ | 17 | [Occurrences](#exercice-17) | Défi (Avancés) | [Ouvrir le code](./exercices/exercice-17.js) |
| ☐ | 18 | [Aplatie (Flatten)](#exercice-18) | Défi (Avancés) | [Ouvrir le code](./exercices/exercice-18.js) |
| ☐ | 19 | [Recherche Binaire (Concept de base)](#exercice-19) | Défi (Avancés) | [Ouvrir le code](./exercices/exercice-19.js) |
| ☐ | 20 | [Générateur de combinaisons](#exercice-20) | Défi (Avancés) | [Ouvrir le code](./exercices/exercice-20.js) |

## 🟢 Niveau 1 : Fondations (Débutants)


<a id="exercice-01"></a>

### Exercice 01 — Déclaration et Accès

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-01.js`](./exercices/exercice-01.js)

#### 🎯 Mission

Déclarez un tableau contenant vos 5 couleurs préférées. Affichez la première et la troisième couleur.



#### ▶️ Tester le programme

```bash
node day04/exercices/exercice-01.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-02"></a>

### Exercice 02 — Ajout dynamique

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-02.js`](./exercices/exercice-02.js)

#### 🎯 Mission

Créez un tableau vide `invites = []`. Ajoutez-y successivement "Yassine", "Sara", puis "Amine" en utilisant des méthodes de tableau.



#### ▶️ Tester le programme

```bash
node day04/exercices/exercice-02.js
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

Prenez le tableau précédent. Retirez le dernier invité (Amine) et affichez le tableau mis à jour.



#### ▶️ Tester le programme

```bash
node day04/exercices/exercice-03.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-04"></a>

### Exercice 04 — Parcourir avec un `for` classique

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-04.js`](./exercices/exercice-04.js)

#### 🎯 Mission

Créez `nombres = [10, 20, 30, 40]`. Utilisez une boucle `for` (avec `i = 0` jusqu'à `length`) pour afficher chaque nombre multiplié par 2.



#### ▶️ Tester le programme

```bash
node day04/exercices/exercice-04.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-05"></a>

### Exercice 05 — Chercher une valeur (Includes)

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-05.js`](./exercices/exercice-05.js)

#### 🎯 Mission

Vérifiez si "Marrakech" est présent dans le tableau `villes = ["Rabat", "Casablanca", "Tanger"]`. Affichez `true` ou `false`.



#### ▶️ Tester le programme

```bash
node day04/exercices/exercice-05.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-06"></a>

### Exercice 06 — Fusion de tableaux

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-06.js`](./exercices/exercice-06.js)

#### 🎯 Mission

Vous avez `groupe1 = ["A", "B"]` et `groupe2 = ["C", "D"]`. Fusionnez-les pour obtenir `["A", "B", "C", "D"]`.



#### ▶️ Tester le programme

```bash
node day04/exercices/exercice-06.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-07"></a>

### Exercice 07 — Tableau inversé

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-07.js`](./exercices/exercice-07.js)

#### 🎯 Mission

Prenez un tableau `[1, 2, 3, 4, 5]` et inversez son ordre pour qu'il devienne `[5, 4, 3, 2, 1]`. *(Astuce: la méthode `.reverse()` existe).*



#### ▶️ Tester le programme

```bash
node day04/exercices/exercice-07.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.


---

## 🟠 Niveau 2 : Consolidation (Intermédiaires)


<a id="exercice-08"></a>

### Exercice 08 — Recherche du Maximum et Minimum

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-08.js`](./exercices/exercice-08.js)

#### 🎯 Mission

Créez une fonction qui parcourt un tableau de nombres aléatoires et retourne le plus grand et le plus petit nombre, SANS utiliser `Math.max` ni `Math.min`.



#### ▶️ Tester le programme

```bash
node day04/exercices/exercice-08.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-09"></a>

### Exercice 09 — Filtrage manuel (Les pairs)

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-09.js`](./exercices/exercice-09.js)

#### 🎯 Mission

Créez une fonction qui prend un tableau de nombres, par exemple `[1, 2, 3, 4, 5, 6]`, et retourne un NOUVEAU tableau ne contenant que les nombres pairs.



#### ▶️ Tester le programme

```bash
node day04/exercices/exercice-09.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-10"></a>

### Exercice 10 — Retirer des éléments (Splice)

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-10.js`](./exercices/exercice-10.js)

#### 🎯 Mission

Vous avez `mois = ["Jan", "Fev", "MARS_EN_TROP", "Avril"]`. Utilisez `.splice()` pour retirer "MARS_EN_TROP" sans toucher aux autres.



#### ▶️ Tester le programme

```bash
node day04/exercices/exercice-10.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-11"></a>

### Exercice 11 — Échantillonnage (Slice)

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-11.js`](./exercices/exercice-11.js)

#### 🎯 Mission

À partir d'un grand tableau de 100 éléments, utilisez `.slice()` pour extraire les 10 premiers (la première page).



#### ▶️ Tester le programme

```bash
node day04/exercices/exercice-11.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-12"></a>

### Exercice 12 — Le Dédoublonneur

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-12.js`](./exercices/exercice-12.js)

#### 🎯 Mission

Écrivez une fonction qui prend un tableau avec des doublons `[1, 2, 2, 3, 4, 4, 5]` et retourne un nouveau tableau sans doublons.



#### ▶️ Tester le programme

```bash
node day04/exercices/exercice-12.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-13"></a>

### Exercice 13 — Comparaison de tableaux

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-13.js`](./exercices/exercice-13.js)

#### 🎯 Mission

Créez une fonction `sontEgaux(tab1, tab2)` qui vérifie si deux tableaux contiennent exactement les mêmes éléments dans le même ordre. (Rappel: `[1] == [1]` donne false en JS !).



#### ▶️ Tester le programme

```bash
node day04/exercices/exercice-13.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-14"></a>

### Exercice 14 — Rotation de tableau

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-14.js`](./exercices/exercice-14.js)

#### 🎯 Mission

Prenez `[1, 2, 3]`. Décalez tout vers la droite pour obtenir `[3, 1, 2]`. (Indice : enlevez le dernier et ajoutez-le au début).



#### ▶️ Tester le programme

```bash
node day04/exercices/exercice-14.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.


---

## 🔴 Niveau 3 : Défi (Avancés)


<a id="exercice-15"></a>

### Exercice 15 — Fusion Triée

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-15.js`](./exercices/exercice-15.js)

#### 🎯 Mission

Vous avez deux tableaux DÉJÀ triés : `[1, 3, 5]` et `[2, 4, 6]`. Écrivez un algorithme pour les fusionner en un seul tableau trié `[1, 2, 3, 4, 5, 6]` (sans utiliser `.sort()`).



#### ▶️ Tester le programme

```bash
node day04/exercices/exercice-15.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-16"></a>

### Exercice 16 — Scraping : Extraction de données mixtes

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-16.js`](./exercices/exercice-16.js)

#### 🎯 Mission

Vous avez "scrappé" une page mal codée et obtenu ce tableau : `["Prix", 15.5, null, "Quantite", 3, undefined, "Total", 46.5]`. Écrivez une fonction qui filtre ce tableau pour ne garder QUE les nombres valides.



#### ▶️ Tester le programme

```bash
node day04/exercices/exercice-16.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-17"></a>

### Exercice 17 — Occurrences

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-17.js`](./exercices/exercice-17.js)

#### 🎯 Mission

Créez une fonction qui prend un tableau de mots `["pomme", "banane", "pomme", "orange", "banane", "pomme"]`. Comptez combien de fois chaque élément apparaît. (Vous pouvez afficher : "pomme: 3, banane: 2, orange: 1").



#### ▶️ Tester le programme

```bash
node day04/exercices/exercice-17.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-18"></a>

### Exercice 18 — Aplatie (Flatten)

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-18.js`](./exercices/exercice-18.js)

#### 🎯 Mission

Vous avez un tableau à 2 dimensions (une grille) : `[[1, 2], [3, 4], [5, 6]]`. Transformez-le en un tableau à 1 dimension : `[1, 2, 3, 4, 5, 6]`.



#### ▶️ Tester le programme

```bash
node day04/exercices/exercice-18.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-19"></a>

### Exercice 19 — Recherche Binaire (Concept de base)

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-19.js`](./exercices/exercice-19.js)

#### 🎯 Mission

Contrairement à la recherche linéaire (parcourir tout le tableau un par un), la recherche binaire cherche un élément dans un tableau TRIÉ en coupant l'espace de recherche en deux à chaque fois. Essayez de comprendre et d'implémenter ce concept pour trouver l'index de `45` dans `[10, 20, 30, 40, 45, 50, 60]`.



#### ▶️ Tester le programme

```bash
node day04/exercices/exercice-19.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-20"></a>

### Exercice 20 — Générateur de combinaisons

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-20.js`](./exercices/exercice-20.js)

#### 🎯 Mission

Étant donné un tableau de 3 couleurs `["Rouge", "Vert", "Bleu"]`, générez toutes les paires possibles : `["Rouge-Vert", "Rouge-Bleu", "Vert-Rouge", ...]`.



#### ▶️ Tester le programme

```bash
node day04/exercices/exercice-20.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.
