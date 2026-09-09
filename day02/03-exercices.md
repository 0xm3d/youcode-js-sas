# 💻 Jour 02 — Les 20 exercices

[← Exercices guidés](./02-guides.md) · [Tableau de bord](./README.md) · [Challenge →](./challenge/README.md)

> [!IMPORTANT]
> Commence par le niveau vert. Ne passe au niveau suivant que lorsque tes programmes s'exécutent correctement.

## 📋 Tableau de progression

| Fait | Nº | Exercice | Niveau | Fichier |
|:---:|---:|---|---|---|
| ☐ | 01 | [Compte à rebours](#exercice-01) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-01.js) |
| ☐ | 02 | [Nombres pairs uniquement](#exercice-02) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-02.js) |
| ☐ | 03 | [La table de multiplication](#exercice-03) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-03.js) |
| ☐ | 04 | [Somme des N premiers nombres](#exercice-04) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-04.js) |
| ☐ | 05 | [Saisie sécurisée (Simulation avec Do...While)](#exercice-05) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-05.js) |
| ☐ | 06 | [Break simple](#exercice-06) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-06.js) |
| ☐ | 07 | [Alphabet en code ASCII](#exercice-07) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-07.js) |
| ☐ | 08 | [L'art de l'esquive (Continue)](#exercice-08) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-08.js) |
| ☐ | 09 | [Le célèbre FizzBuzz](#exercice-09) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-09.js) |
| ☐ | 10 | [La factorielle](#exercice-10) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-10.js) |
| ☐ | 11 | [Puissance manuelle](#exercice-11) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-11.js) |
| ☐ | 12 | [Nombre premier](#exercice-12) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-12.js) |
| ☐ | 13 | [Suite de Fibonacci](#exercice-13) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-13.js) |
| ☐ | 14 | [Le plus petit carré parfait supérieur](#exercice-14) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-14.js) |
| ☐ | 15 | [La Pyramide de Mario](#exercice-15) | Défi (Avancés) | [Ouvrir le code](./exercices/exercice-15.js) |
| ☐ | 16 | [Sapin centré](#exercice-16) | Défi (Avancés) | [Ouvrir le code](./exercices/exercice-16.js) |
| ☐ | 17 | [Simulation de Scraping : Extraction paginée](#exercice-17) | Défi (Avancés) | [Ouvrir le code](./exercices/exercice-17.js) |
| ☐ | 18 | [Conjecture de Syracuse (Collatz)](#exercice-18) | Défi (Avancés) | [Ouvrir le code](./exercices/exercice-18.js) |
| ☐ | 19 | [L'échiquier](#exercice-19) | Défi (Avancés) | [Ouvrir le code](./exercices/exercice-19.js) |
| ☐ | 20 | [Chasseur de Nombres d'Armstrong](#exercice-20) | Défi (Avancés) | [Ouvrir le code](./exercices/exercice-20.js) |

## 🟢 Niveau 1 : Fondations (Débutants)


<a id="exercice-01"></a>

### Exercice 01 — Compte à rebours

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-01.js`](./exercices/exercice-01.js)

#### 🎯 Mission

Utilisez une boucle `for` pour afficher un compte à rebours de 10 jusqu'à 0, puis affichez "Décollage !".



#### ▶️ Tester le programme

```bash
node day02/exercices/exercice-01.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-02"></a>

### Exercice 02 — Nombres pairs uniquement

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-02.js`](./exercices/exercice-02.js)

#### 🎯 Mission

Affichez tous les nombres pairs entre 0 et 20. (Astuce : incrémentez de 2 en 2, ou utilisez un `if` avec le modulo `%`).



#### ▶️ Tester le programme

```bash
node day02/exercices/exercice-02.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-03"></a>

### Exercice 03 — La table de multiplication

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-03.js`](./exercices/exercice-03.js)

#### 🎯 Mission

Affichez la table de multiplication par 7 (de 1x7 à 10x7).



#### ▶️ Tester le programme

```bash
node day02/exercices/exercice-03.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-04"></a>

### Exercice 04 — Somme des N premiers nombres

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-04.js`](./exercices/exercice-04.js)

#### 🎯 Mission

Calculez la somme des 50 premiers entiers naturels (1 + 2 + 3 + ... + 50) à l'aide d'une boucle.


#### 🧪 Résultat attendu

> 1275


#### ▶️ Tester le programme

```bash
node day02/exercices/exercice-04.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-05"></a>

### Exercice 05 — Saisie sécurisée (Simulation avec Do...While)

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-05.js`](./exercices/exercice-05.js)

#### 🎯 Mission

Étant donné `let motDePasse = "faux"`, créez une boucle `do...while` qui afficherait "Veuillez entrer le mot de passe" et mettez manuellement `motDePasse = "secret"` à l'intérieur de la boucle au premier passage pour qu'elle s'arrête.



#### ▶️ Tester le programme

```bash
node day02/exercices/exercice-05.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-06"></a>

### Exercice 06 — Break simple

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-06.js`](./exercices/exercice-06.js)

#### 🎯 Mission

Faites une boucle allant de 1 à 100. Dès que la boucle atteint 7, arrêtez-la immédiatement avec `break`.



#### ▶️ Tester le programme

```bash
node day02/exercices/exercice-06.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-07"></a>

### Exercice 07 — Alphabet en code ASCII

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-07.js`](./exercices/exercice-07.js)

#### 🎯 Mission

La méthode `String.fromCharCode(i)` transforme un code (ex: 65) en lettre ("A"). Utilisez une boucle de 65 à 90 pour afficher l'alphabet majuscule.



#### ▶️ Tester le programme

```bash
node day02/exercices/exercice-07.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.


---

## 🟠 Niveau 2 : Consolidation (Intermédiaires)


<a id="exercice-08"></a>

### Exercice 08 — L'art de l'esquive (Continue)

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-08.js`](./exercices/exercice-08.js)

#### 🎯 Mission

Affichez les nombres de 1 à 20, mais ignorez (ne loguez pas) les multiples de 3 en utilisant le mot-clé `continue`.



#### ▶️ Tester le programme

```bash
node day02/exercices/exercice-08.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-09"></a>

### Exercice 09 — Le célèbre FizzBuzz

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-09.js`](./exercices/exercice-09.js)

#### 🎯 Mission

Écrivez un programme qui affiche les nombres de 1 à 50. 
- Si le nombre est multiple de 3, affichez "Fizz".
- S'il est multiple de 5, affichez "Buzz".
- S'il est multiple de 3 ET de 5, affichez "FizzBuzz".
- Sinon, affichez le nombre.



#### ▶️ Tester le programme

```bash
node day02/exercices/exercice-09.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-10"></a>

### Exercice 10 — La factorielle

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-10.js`](./exercices/exercice-10.js)

#### 🎯 Mission

Calculez la factorielle de 6 (écrit 6! = 6 * 5 * 4 * 3 * 2 * 1) avec une boucle.


#### 🧪 Résultat attendu

> 720


#### ▶️ Tester le programme

```bash
node day02/exercices/exercice-10.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-11"></a>

### Exercice 11 — Puissance manuelle

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-11.js`](./exercices/exercice-11.js)

#### 🎯 Mission

Calculez 2 à la puissance 10 en utilisant une boucle `for` (sans utiliser `Math.pow` ni `**`).


#### 🧪 Résultat attendu

> 1024


#### ▶️ Tester le programme

```bash
node day02/exercices/exercice-11.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-12"></a>

### Exercice 12 — Nombre premier

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-12.js`](./exercices/exercice-12.js)

#### 🎯 Mission

Un nombre est premier s'il n'est divisible que par 1 et par lui-même. Prenez `let nb = 29`. Bouclez de 2 jusqu'à 28 pour voir si un nombre le divise. Si ce n'est pas le cas, affichez "29 est un nombre premier".



#### ▶️ Tester le programme

```bash
node day02/exercices/exercice-12.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-13"></a>

### Exercice 13 — Suite de Fibonacci

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-13.js`](./exercices/exercice-13.js)

#### 🎯 Mission

Générez et affichez les 10 premiers nombres de la suite de Fibonacci. (La suite commence par 0, 1. Ensuite, chaque nombre est la somme des deux précédents : 0, 1, 1, 2, 3, 5, 8, 13...).



#### ▶️ Tester le programme

```bash
node day02/exercices/exercice-13.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-14"></a>

### Exercice 14 — Le plus petit carré parfait supérieur

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-14.js`](./exercices/exercice-14.js)

#### 🎯 Mission

Trouvez et affichez le plus petit carré parfait (ex: 4, 9, 16) strictement supérieur à 1000 en utilisant un `while`.



#### ▶️ Tester le programme

```bash
node day02/exercices/exercice-14.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.


---

## 🔴 Niveau 3 : Défi (Avancés)


<a id="exercice-15"></a>

### Exercice 15 — La Pyramide de Mario

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-15.js`](./exercices/exercice-15.js)

#### 🎯 Mission

Générez dans la console une demi-pyramide d'étoiles de 5 lignes :
```text
*
**
***
****
*****
```



#### ▶️ Tester le programme

```bash
node day02/exercices/exercice-15.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-16"></a>

### Exercice 16 — Sapin centré

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-16.js`](./exercices/exercice-16.js)

#### 🎯 Mission

Allez plus loin, dessinez une pyramide centrée de 5 lignes :
```text
    *
   ***
  *****
 *******
*********
```



#### ▶️ Tester le programme

```bash
node day02/exercices/exercice-16.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-17"></a>

### Exercice 17 — Simulation de Scraping : Extraction paginée

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-17.js`](./exercices/exercice-17.js)

#### 🎯 Mission

Imaginez que vous "scrappez" des pages web numérotées. Vous avez un `totalItems = 45`, et chaque page affiche `10` éléments. Écrivez une boucle `while` qui affiche : "Scraping page 1 (10 items)", "Scraping page 2 (10 items)", jusqu'à la dernière page ("Scraping page 5 (5 items)").



#### ▶️ Tester le programme

```bash
node day02/exercices/exercice-17.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-18"></a>

### Exercice 18 — Conjecture de Syracuse (Collatz)

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-18.js`](./exercices/exercice-18.js)

#### 🎯 Mission

Prenez `N = 15`. 
- Si N est pair, on le divise par 2. 
- Si N est impair, on le multiplie par 3 et on ajoute 1.
Répétez jusqu'à ce que N vaille 1. Comptez le nombre d'étapes (itérations) nécessaires pour arriver à 1.



#### ▶️ Tester le programme

```bash
node day02/exercices/exercice-18.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-19"></a>

### Exercice 19 — L'échiquier

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-19.js`](./exercices/exercice-19.js)

#### 🎯 Mission

Générez une chaîne de caractères représentant une grille 8x8 avec des `#` et des espaces alternés (façon damier/échiquier). 
*Astuce : Si l'index `i+j` est pair, ajoutez un espace, sinon ajoutez `#`.*



#### ▶️ Tester le programme

```bash
node day02/exercices/exercice-19.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-20"></a>

### Exercice 20 — Chasseur de Nombres d'Armstrong

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-20.js`](./exercices/exercice-20.js)

#### 🎯 Mission

Un nombre d'Armstrong à 3 chiffres est égal à la somme des cubes de ses chiffres (ex: 153 = 1³ + 5³ + 3³). Utilisez une boucle allant de 100 à 999 pour trouver et afficher TOUS les nombres d'Armstrong.



#### ▶️ Tester le programme

```bash
node day02/exercices/exercice-20.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.
