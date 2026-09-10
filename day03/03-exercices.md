# 💻 Jour 03 — Les 20 exercices

[← Exercices guidés](./02-guides.md) · [Tableau de bord](./README.md) · [Challenge →](./challenge/README.md)

> [!IMPORTANT]
> Commence par le niveau vert. Ne passe au niveau suivant que lorsque tes programmes s'exécutent correctement.

## 📋 Tableau de progression

| Fait | Nº | Exercice | Niveau | Fichier |
|:---:|---:|---|---|---|
| ☐ | 01 | [Soustraction pure](#exercice-01) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-01.js) |
| ☐ | 02 | [Le multiplicateur](#exercice-02) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-02.js) |
| ☐ | 03 | [Convertisseur de Devise](#exercice-03) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-03.js) |
| ☐ | 04 | [Majorité](#exercice-04) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-04.js) |
| ☐ | 05 | [Périmètre avec valeur par défaut](#exercice-05) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-05.js) |
| ☐ | 06 | [Message d'accueil](#exercice-06) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-06.js) |
| ☐ | 07 | [Fonction dans une fonction](#exercice-07) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-07.js) |
| ☐ | 08 | [Réfracturation (Refactoring)](#exercice-08) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-08.js) |
| ☐ | 09 | [Maximum de trois nombres](#exercice-09) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-09.js) |
| ☐ | 10 | [Le détecteur de Palindrome (Logique de base)](#exercice-10) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-10.js) |
| ☐ | 11 | [Factorielle encapsulée](#exercice-11) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-11.js) |
| ☐ | 12 | [Le Callback basique](#exercice-12) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-12.js) |
| ☐ | 13 | [Générateur de mot de passe factice](#exercice-13) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-13.js) |
| ☐ | 14 | [Calculatrice Modulaire](#exercice-14) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-14.js) |
| ☐ | 15 | [Récursivité (Le concept qui retourne le cerveau)](#exercice-15) | Défi (Avancés) | [Ouvrir le code](./exercices/exercice-15.js) |
| ☐ | 16 | [Closure (Fermeture)](#exercice-16) | Défi (Avancés) | [Ouvrir le code](./exercices/exercice-16.js) |
| ☐ | 17 | [Le Nettoyeur de Données Scrappées](#exercice-17) | Défi (Avancés) | [Ouvrir le code](./exercices/exercice-17.js) |
| ☐ | 18 | [Curryfication (Currying)](#exercice-18) | Défi (Avancés) | [Ouvrir le code](./exercices/exercice-18.js) |
| ☐ | 19 | [Timeout simulé (Callback asynchrone concept)](#exercice-19) | Défi (Avancés) | [Ouvrir le code](./exercices/exercice-19.js) |
| ☐ | 20 | [Mémoïsation (Cache)](#exercice-20) | Défi (Avancés) | [Ouvrir le code](./exercices/exercice-20.js) |

## 🟢 Niveau 1 : Fondations (Débutants)


<a id="exercice-01"></a>

### Exercice 01 — Soustraction pure

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-01.js`](./exercices/exercice-01.js)

#### 🎯 Mission

Créez une fonction `soustraire(a, b)` qui retourne le résultat de `a - b`.



#### ▶️ Tester le programme

```bash
node day03/exercices/exercice-01.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-02"></a>

### Exercice 02 — Le multiplicateur

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-02.js`](./exercices/exercice-02.js)

#### 🎯 Mission

Créez une fonction fléchée `multiplier(a, b)` qui retourne le produit de a et b.



#### ▶️ Tester le programme

```bash
node day03/exercices/exercice-02.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-03"></a>

### Exercice 03 — Convertisseur de Devise

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-03.js`](./exercices/exercice-03.js)

#### 🎯 Mission

Écrivez une fonction `madToEur(mad)` qui prend un montant en dirhams et le convertit en euros (considérez 1 EUR = 10.8 MAD).



#### ▶️ Tester le programme

```bash
node day03/exercices/exercice-03.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-04"></a>

### Exercice 04 — Majorité

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-04.js`](./exercices/exercice-04.js)

#### 🎯 Mission

Créez une fonction `estMajeur(age)` qui retourne `true` si l'âge est `>= 18`, sinon `false`.



#### ▶️ Tester le programme

```bash
node day03/exercices/exercice-04.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-05"></a>

### Exercice 05 — Périmètre avec valeur par défaut

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-05.js`](./exercices/exercice-05.js)

#### 🎯 Mission

Écrivez une fonction `perimetreRectangle(longueur, largeur = 5)`. Si la largeur n'est pas fournie lors de l'appel, elle vaudra 5 par défaut. Testez-la avec `perimetreRectangle(10)`.



#### ▶️ Tester le programme

```bash
node day03/exercices/exercice-05.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-06"></a>

### Exercice 06 — Message d'accueil

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-06.js`](./exercices/exercice-06.js)

#### 🎯 Mission

Créez une fonction `bienvenue(prenom, nom)` qui retourne `"Bienvenue [prenom] [nom]"`.



#### ▶️ Tester le programme

```bash
node day03/exercices/exercice-06.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-07"></a>

### Exercice 07 — Fonction dans une fonction

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-07.js`](./exercices/exercice-07.js)

#### 🎯 Mission

Déclarez une fonction `carre(x)` puis une fonction `sommeDesCarres(a, b)` qui appelle `carre` pour `a` et pour `b`, et retourne la somme de leurs carrés.



#### ▶️ Tester le programme

```bash
node day03/exercices/exercice-07.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.


---

## 🟠 Niveau 2 : Consolidation (Intermédiaires)


<a id="exercice-08"></a>

### Exercice 08 — Réfracturation (Refactoring)

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-08.js`](./exercices/exercice-08.js)

#### 🎯 Mission

Reprenez l'exercice du FizzBuzz du *Day 02* et encapsulez-le dans une fonction `jouerFizzBuzz(max)`. En appelant `jouerFizzBuzz(15)`, ça devrait jouer jusqu'à 15.



#### ▶️ Tester le programme

```bash
node day03/exercices/exercice-08.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-09"></a>

### Exercice 09 — Maximum de trois nombres

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-09.js`](./exercices/exercice-09.js)

#### 🎯 Mission

Sans utiliser `Math.max()`, écrivez une fonction `trouverMax(a, b, c)` qui retourne le plus grand des trois nombres en utilisant des conditions `if/else`.



#### ▶️ Tester le programme

```bash
node day03/exercices/exercice-09.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-10"></a>

### Exercice 10 — Le détecteur de Palindrome (Logique de base)

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-10.js`](./exercices/exercice-10.js)

#### 🎯 Mission

Créez une fonction `estPalindrome(mot)` (vous pouvez ignorer les majuscules et espaces pour l'instant) qui retourne `true` si le mot se lit dans les deux sens (ex: "radar"). 
*Indice : vous pouvez utiliser une boucle for à l'envers ou comparer les indices.*



#### ▶️ Tester le programme

```bash
node day03/exercices/exercice-10.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-11"></a>

### Exercice 11 — Factorielle encapsulée

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-11.js`](./exercices/exercice-11.js)

#### 🎯 Mission

Convertissez votre logique de factorielle (Day 02) en une fonction `calculerFactorielle(n)`. Si `n = 0`, la fonction doit retourner 1.



#### ▶️ Tester le programme

```bash
node day03/exercices/exercice-11.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-12"></a>

### Exercice 12 — Le Callback basique

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-12.js`](./exercices/exercice-12.js)

#### 🎯 Mission

Créez une fonction `executerOperation(a, b, operation)`. `operation` sera une fonction passée en argument. Appelez : `executerOperation(5, 3, multiplier)` (en utilisant la fonction multiplier créée plus tôt).



#### ▶️ Tester le programme

```bash
node day03/exercices/exercice-12.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-13"></a>

### Exercice 13 — Générateur de mot de passe factice

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-13.js`](./exercices/exercice-13.js)

#### 🎯 Mission

Écrivez une fonction `genererMotDePasse(longueur)` qui génère et retourne une chaîne aléatoire contenant `X` fois la lettre "A" ou un chiffre aléatoire. (Utilisez `Math.random()`).



#### ▶️ Tester le programme

```bash
node day03/exercices/exercice-13.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-14"></a>

### Exercice 14 — Calculatrice Modulaire

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-14.js`](./exercices/exercice-14.js)

#### 🎯 Mission

Écrivez une fonction `calculatrice(a, b, signe)`. Utilisez un `switch` sur `signe` pour appeler l'une des 4 opérations de base (+, -, *, /) que vous aurez écrites en tant que fonctions distinctes.



#### ▶️ Tester le programme

```bash
node day03/exercices/exercice-14.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.


---

## 🔴 Niveau 3 : Défi (Avancés)


<a id="exercice-15"></a>

### Exercice 15 — Récursivité (Le concept qui retourne le cerveau)

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-15.js`](./exercices/exercice-15.js)

#### 🎯 Mission

Recréez la fonction `fibonacci(n)` (qui retourne le Nième terme de la suite) en utilisant la *récursivité* (la fonction s'appelle elle-même).
*Condition d'arrêt : Si n <= 1, return n.*



#### ▶️ Tester le programme

```bash
node day03/exercices/exercice-15.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-16"></a>

### Exercice 16 — Closure (Fermeture)

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-16.js`](./exercices/exercice-16.js)

#### 🎯 Mission

Créez une fonction `creerCompteur()`. À l'intérieur, déclarez `let count = 0`. Retournez une fonction qui, lorsqu'elle est appelée, fait `count++` et retourne `count`. Stockez le résultat de `creerCompteur()` dans une variable `monCompteur`, et appelez-la 3 fois. Comprenez pourquoi l'état est conservé !



#### ▶️ Tester le programme

```bash
node day03/exercices/exercice-16.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-17"></a>

### Exercice 17 — Le Nettoyeur de Données Scrappées

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-17.js`](./exercices/exercice-17.js)

#### 🎯 Mission

Créez une fonction `extrairePrixEtConvertir(chaineBrute)` qui reçoit, par exemple, `"   Prix: 15.99 $  "`. La fonction doit nettoyer la chaîne, isoler le chiffre, et retourner le type `Number`. Elle doit gérer les erreurs (retourner `null` si la chaîne ne contient pas de prix exploitable).



#### ▶️ Tester le programme

```bash
node day03/exercices/exercice-17.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-18"></a>

### Exercice 18 — Curryfication (Currying)

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-18.js`](./exercices/exercice-18.js)

#### 🎯 Mission

Créez une fonction `multiplicateur(facteur)` qui retourne une **fonction** prenant un argument `nombre` et retournant `nombre * facteur`. 
Testez avec : `const double = multiplicateur(2); console.log(double(10)); // 20`.



#### ▶️ Tester le programme

```bash
node day03/exercices/exercice-18.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-19"></a>

### Exercice 19 — Timeout simulé (Callback asynchrone concept)

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-19.js`](./exercices/exercice-19.js)

#### 🎯 Mission

Bien que ce ne soit pas spécifique au DOM, utilisez la fonction native `setTimeout(callback, delai)` pour créer une fonction `alarme(message, secondes)` qui affichera le message après X secondes.



#### ▶️ Tester le programme

```bash
node day03/exercices/exercice-19.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-20"></a>

### Exercice 20 — Mémoïsation (Cache)

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-20.js`](./exercices/exercice-20.js)

#### 🎯 Mission

Écrivez une fonction qui simule un long calcul. Ajoutez-y un "cache" (un objet ou une variable externe) qui enregistre les résultats précédents. Si la fonction est rappelée avec le même paramètre, elle retourne le résultat stocké au lieu de refaire le calcul.



#### ▶️ Tester le programme

```bash
node day03/exercices/exercice-20.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.
