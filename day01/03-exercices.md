# 💻 Jour 01 — Les 20 exercices

[← Exercices guidés](./02-guides.md) · [Tableau de bord](./README.md) · [Challenge →](./challenge/README.md)

> [!IMPORTANT]
> Commence par le niveau vert. Ne passe au niveau suivant que lorsque tes programmes s'exécutent correctement.

## 📋 Tableau de progression

| Fait | Nº | Exercice | Niveau | Fichier |
|:---:|---:|---|---|---|
| ☐ | 01 | [Déclaration basique](#exercice-01) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-01.js) |
| ☐ | 02 | [Salutation formatée](#exercice-02) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-02.js) |
| ☐ | 03 | [Calcul de TVA](#exercice-03) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-03.js) |
| ☐ | 04 | [Les mystères de typeof](#exercice-04) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-04.js) |
| ☐ | 05 | [Le test du Modulo](#exercice-05) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-05.js) |
| ☐ | 06 | [Incrémentation](#exercice-06) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-06.js) |
| ☐ | 07 | [Opérateurs combinés](#exercice-07) | Fondations (Débutants) | [Ouvrir le code](./exercices/exercice-07.js) |
| ☐ | 08 | [Égalité stricte vs souple](#exercice-08) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-08.js) |
| ☐ | 09 | [Logique de connexion (ET / OU)](#exercice-09) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-09.js) |
| ☐ | 10 | [Catégories d'âge (If / Else if / Else)](#exercice-10) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-10.js) |
| ☐ | 11 | [Validation de panier](#exercice-11) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-11.js) |
| ☐ | 12 | [Année Bissextile](#exercice-12) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-12.js) |
| ☐ | 13 | [Calculatrice basique avec Switch](#exercice-13) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-13.js) |
| ☐ | 14 | [Le ternaire](#exercice-14) | Consolidation (Intermédiaires) | [Ouvrir le code](./exercices/exercice-14.js) |
| ☐ | 15 | [Nettoyage de Scraping Monétaire](#exercice-15) | Défi (Avancés) | [Ouvrir le code](./exercices/exercice-15.js) |
| ☐ | 16 | [Formatage de numéro de téléphone (Type Check)](#exercice-16) | Défi (Avancés) | [Ouvrir le code](./exercices/exercice-16.js) |
| ☐ | 17 | [Jeu : Pierre, Papier, Ciseaux](#exercice-17) | Défi (Avancés) | [Ouvrir le code](./exercices/exercice-17.js) |
| ☐ | 18 | [La validité du Triangle](#exercice-18) | Défi (Avancés) | [Ouvrir le code](./exercices/exercice-18.js) |
| ☐ | 19 | [Évaluation booléenne complexe](#exercice-19) | Défi (Avancés) | [Ouvrir le code](./exercices/exercice-19.js) |
| ☐ | 20 | [Le grand ménage (Opérateurs de coalescence)](#exercice-20) | Défi (Avancés) | [Ouvrir le code](./exercices/exercice-20.js) |

## 🟢 Niveau 1 : Fondations (Débutants)


<a id="exercice-01"></a>

### Exercice 01 — Déclaration basique

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-01.js`](./exercices/exercice-01.js)

#### 🎯 Mission

Déclarez une constante `PI` avec la valeur 3.14. Déclarez une variable `rayon` avec la valeur 5. Calculez le périmètre d'un cercle (`2 * PI * rayon`) et stockez-le dans une variable.


#### 🧪 Résultat attendu

> `31.4`


#### ▶️ Tester le programme

```bash
node day01/exercices/exercice-01.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-02"></a>

### Exercice 02 — Salutation formatée

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-02.js`](./exercices/exercice-02.js)

#### 🎯 Mission

Déclarez deux variables : `prenom` ("John") et `nom` ("Doe"). Affichez "Bonjour, je m'appelle John Doe." en utilisant la concaténation (avec `+` ou les backticks ``).



#### ▶️ Tester le programme

```bash
node day01/exercices/exercice-02.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-03"></a>

### Exercice 03 — Calcul de TVA

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-03.js`](./exercices/exercice-03.js)

#### 🎯 Mission

Le prix HT d'un produit est de 200 MAD. La TVA est de 20% (soit 0.20). Calculez et affichez le prix TTC (TTC = HT + (HT * TVA)).


#### 🧪 Résultat attendu

> `240`


#### ▶️ Tester le programme

```bash
node day01/exercices/exercice-03.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-04"></a>

### Exercice 04 — Les mystères de typeof

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-04.js`](./exercices/exercice-04.js)

#### 🎯 Mission

Affichez le résultat de l'opérateur `typeof` pour les valeurs suivantes : `42`, `"YouCode"`, `true`, `undefined`, et `null`. 
*Notez le résultat particulier pour `null`.*



#### ▶️ Tester le programme

```bash
node day01/exercices/exercice-04.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-05"></a>

### Exercice 05 — Le test du Modulo

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-05.js`](./exercices/exercice-05.js)

#### 🎯 Mission

Déclarez une variable `nombre = 15`. Utilisez l'opérateur modulo `%` pour vérifier si le reste de sa division par 2 est égal à 0. Si c'est le cas, affichez "Pair", sinon "Impair".


#### 🧪 Résultat attendu

> `Impair`


#### ▶️ Tester le programme

```bash
node day01/exercices/exercice-05.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-06"></a>

### Exercice 06 — Incrémentation

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-06.js`](./exercices/exercice-06.js)

#### 🎯 Mission

Déclarez une variable `compteur = 0`. Incrémentez-la 3 fois en utilisant l'opérateur `++`. Affichez le résultat final.


#### 🧪 Résultat attendu

> `3`


#### ▶️ Tester le programme

```bash
node day01/exercices/exercice-06.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-07"></a>

### Exercice 07 — Opérateurs combinés

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-07.js`](./exercices/exercice-07.js)

#### 🎯 Mission

Soit un solde de départ `solde = 1000`. Vous retirez 200 MAD (`-=`), puis la banque vous verse 5% d'intérêts sur le solde restant (`*= 1.05`). Affichez le nouveau solde.


#### 🧪 Résultat attendu

> `840`


#### ▶️ Tester le programme

```bash
node day01/exercices/exercice-07.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.


---

## 🟠 Niveau 2 : Consolidation (Intermédiaires)


<a id="exercice-08"></a>

### Exercice 08 — Égalité stricte vs souple

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-08.js`](./exercices/exercice-08.js)

#### 🎯 Mission

Comparez la chaîne `"10"` et le nombre `10` d'abord avec `==` puis avec `===`. Affichez les deux résultats et constatez la différence.



#### ▶️ Tester le programme

```bash
node day01/exercices/exercice-08.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-09"></a>

### Exercice 09 — Logique de connexion (ET / OU)

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-09.js`](./exercices/exercice-09.js)

#### 🎯 Mission

Un utilisateur tente d'accéder au back-office. Déclarez trois variables : `estAdmin = false`, `estModerateur = true`, et `motDePasseValide = true`. L'accès est accordé si l'utilisateur a un mot de passe valide ET qu'il est SOIT admin SOIT modérateur.


#### 🧪 Résultat attendu

> `Accès Accordé`


#### ▶️ Tester le programme

```bash
node day01/exercices/exercice-09.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-10"></a>

### Exercice 10 — Catégories d'âge (If / Else if / Else)

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-10.js`](./exercices/exercice-10.js)

#### 🎯 Mission

Selon l'âge d'une personne, affichez sa catégorie :
- `< 12` : "Enfant"
- `Entre 12 et 17` : "Adolescent"
- `Entre 18 et 64` : "Adulte"
- `>= 65` : "Senior"
*Exemple : `age = 15` -> `Adolescent`*



#### ▶️ Tester le programme

```bash
node day01/exercices/exercice-10.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-11"></a>

### Exercice 11 — Validation de panier

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-11.js`](./exercices/exercice-11.js)

#### 🎯 Mission

Un client achète un panier de `350` MAD. S'il dépasse 200 MAD, la livraison est gratuite. S'il dépasse 500 MAD, il a en plus 10% de réduction. Affichez le coût final du panier et si la livraison est gratuite ou non.


#### 🧪 Résultat attendu

> `Coût final: 350 MAD, Livraison: Gratuite`


#### ▶️ Tester le programme

```bash
node day01/exercices/exercice-11.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-12"></a>

### Exercice 12 — Année Bissextile

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-12.js`](./exercices/exercice-12.js)

#### 🎯 Mission

Une année est bissextile si elle est divisible par 4 MAIS pas par 100, OU BIEN si elle est divisible par 400. Déclarez `annee = 2024`. Écrivez la condition et affichez un message.


#### 🧪 Résultat attendu

> `2024 est une année bissextile.`


#### ▶️ Tester le programme

```bash
node day01/exercices/exercice-12.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-13"></a>

### Exercice 13 — Calculatrice basique avec Switch

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-13.js`](./exercices/exercice-13.js)

#### 🎯 Mission

Déclarez `nombre1 = 10`, `nombre2 = 5` et `operateur = "*"`. Utilisez une instruction `switch` pour gérer l'addition, la soustraction, la multiplication et la division, et affichez le résultat.


#### 🧪 Résultat attendu

> `50`


#### ▶️ Tester le programme

```bash
node day01/exercices/exercice-13.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-14"></a>

### Exercice 14 — Le ternaire

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-14.js`](./exercices/exercice-14.js)

#### 🎯 Mission

Déclarez une variable `note = 14`. Utilisez un opérateur ternaire (`condition ? valeurVrai : valeurFaux`) pour afficher "Réussi" si la note est >= 10, sinon "Échoué".



#### ▶️ Tester le programme

```bash
node day01/exercices/exercice-14.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.


---

## 🔴 Niveau 3 : Défi (Avancés)


<a id="exercice-15"></a>

### Exercice 15 — Nettoyage de Scraping Monétaire

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-15.js`](./exercices/exercice-15.js)

#### 🎯 Mission

Vous avez extrait d'un site e-commerce la chaîne suivante : `prixExtrait = "  349.99 MAD  "`. Utilisez des méthodes de base (que vous pouvez chercher, ex: `trim`, `replace`) pour ne garder que "349.99" et convertissez-le en type Number. Calculez ensuite le prix total pour 2 articles.


#### 🧪 Résultat attendu

> `699.98` (de type Number)


#### ▶️ Tester le programme

```bash
node day01/exercices/exercice-15.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-16"></a>

### Exercice 16 — Formatage de numéro de téléphone (Type Check)

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-16.js`](./exercices/exercice-16.js)

#### 🎯 Mission

Vous attendez un numéro de téléphone sous forme de texte (ex: `"0612345678"`). Écrivez une logique qui vérifie que la valeur fournie est bien de type `string` ET que sa longueur est exactement de 10 caractères. Sinon, affichez "Numéro invalide".



#### ▶️ Tester le programme

```bash
node day01/exercices/exercice-16.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-17"></a>

### Exercice 17 — Jeu : Pierre, Papier, Ciseaux

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-17.js`](./exercices/exercice-17.js)

#### 🎯 Mission

Déclarez deux variables `joueur1 = "Pierre"` et `joueur2 = "Ciseaux"`. En utilisant des conditions, déterminez qui a gagné. (Gérez tous les cas possibles ou utilisez une logique optimisée).


#### 🧪 Résultat attendu

> `Joueur 1 gagne !`


#### ▶️ Tester le programme

```bash
node day01/exercices/exercice-17.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-18"></a>

### Exercice 18 — La validité du Triangle

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-18.js`](./exercices/exercice-18.js)

#### 🎯 Mission

En géométrie, un triangle est valide si la longueur de chaque côté est inférieure à la somme des deux autres. Déclarez 3 longueurs `a = 3`, `b = 4`, `c = 5`. Affichez si le triangle est valide ou non.


#### 🧪 Résultat attendu

> `Triangle valide`


#### ▶️ Tester le programme

```bash
node day01/exercices/exercice-18.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-19"></a>

### Exercice 19 — Évaluation booléenne complexe

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-19.js`](./exercices/exercice-19.js)

#### 🎯 Mission

Déclarez : `hasAccount = false`, `isGuest = true`, `cartValue = 150`, `isBanned = false`.
Un utilisateur peut valider sa commande s'il n'est pas banni, ET (il a un compte OU il est invité avec un panier > 100). Évaluez cette règle.


#### 🧪 Résultat attendu

> `Commande validée`


#### ▶️ Tester le programme

```bash
node day01/exercices/exercice-19.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.

---

<a id="exercice-20"></a>

### Exercice 20 — Le grand ménage (Opérateurs de coalescence)

> [!TIP]
> **Fichier à modifier :** [`exercices/exercice-20.js`](./exercices/exercice-20.js)

#### 🎯 Mission

Vous récupérez des données utilisateur incomplètes : `nom = null`, `pseudo = "NinjaCoder"`. En JavaScript, on peut utiliser l'opérateur de coalescence des nuls (`??`) ou l'opérateur OU (`||`) pour assigner une valeur par défaut. Déclarez `nomAAfficher = nom ?? pseudo ?? "Anonyme"`. Affichez-le.


#### 🧪 Résultat attendu

> `NinjaCoder`


#### ▶️ Tester le programme

```bash
node day01/exercices/exercice-20.js
```

#### ✅ Terminé lorsque

- [ ] Le marqueur `TODO` a été remplacé par mon code.
- [ ] Le programme s'exécute sans erreur.
- [ ] Le résultat obtenu respecte la mission.
- [ ] Je peux expliquer ma solution.
