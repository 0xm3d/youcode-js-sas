# 🧭 Jour 03 — Exercices guidés

[← Recherche](./01-recherche.md) · [Tableau de bord](./README.md) · [Exercices pratiques →](./03-exercices.md)

> [!IMPORTANT]
> Lis la mission, ouvre le fichier JavaScript et essaie seul pendant quelques minutes. Les indices restent disponibles si tu bloques.


## 🧩 Guide 01 — Créer sa première fonction

> [!TIP]
> **Fichier à modifier :** [`guides/guide-01.js`](./guides/guide-01.js)

### 🎯 Mission

Créez une fonction nommée `saluer` qui prend un `nom` en paramètre et qui **retourne** la chaîne de caractères "Bonjour, [nom] !". Testez-la.

<details>
<summary><strong>Besoin d'aide ? Afficher les indices</strong></summary>

### 💡 Indices

Utilisez le mot-clé `function`, définissez le nom, puis les paramètres entre parenthèses, et utilisez `return` dans le bloc.

### 🪜 Démarche pas à pas

1. Déclaration : `function saluer(nom) { ... }`
2. Logique : `return "Bonjour, " + nom + " !";`
3. Appel et test : `console.log(saluer("Yassine"));`

</details>

### ✅ Vérification

- [ ] J'ai essayé avant d'ouvrir les indices.
- [ ] Mon fichier s'exécute sans erreur.
- [ ] Je peux expliquer chaque étape.


---

## 🧩 Guide 02 — Comprendre la Portée (Scope)

> [!TIP]
> **Fichier à modifier :** [`guides/guide-02.js`](./guides/guide-02.js)

### 🎯 Mission

Essayez de déclarer une variable à l'intérieur d'une fonction, et essayez de l'afficher `console.log()` à l'extérieur de la fonction. Que se passe-t-il ?

<details>
<summary><strong>Besoin d'aide ? Afficher les indices</strong></summary>

### 💡 Indices

Les accolades définissent un "bloc". Les variables `let` sont confinées à leur bloc.

### 🪜 Démarche pas à pas

1. `function testScope() { let secret = "123"; }`
2. Exécutez `testScope();`
3. Tapez `console.log(secret);` -> Vous obtiendrez une erreur "secret is not defined". C'est le principe du scope local !

</details>

### ✅ Vérification

- [ ] J'ai essayé avant d'ouvrir les indices.
- [ ] Mon fichier s'exécute sans erreur.
- [ ] Je peux expliquer chaque étape.


---

## 🧩 Guide 03 — La syntaxe moderne (Fonction Fléchée)

> [!TIP]
> **Fichier à modifier :** [`guides/guide-03.js`](./guides/guide-03.js)

### 🎯 Mission

Transformez la fonction classique `function carre(x) { return x * x; }` en sa version la plus courte en fonction fléchée.

<details>
<summary><strong>Besoin d'aide ? Afficher les indices</strong></summary>

### 💡 Indices

Retirez le mot `function`. Ajoutez `=>`. S'il n'y a qu'un paramètre, pas besoin de parenthèses. S'il n'y a qu'un retour, pas besoin d'accolades ni de `return`.

### 🪜 Démarche pas à pas

`const carre = x => x * x;`

</details>

### ✅ Vérification

- [ ] J'ai essayé avant d'ouvrir les indices.
- [ ] Mon fichier s'exécute sans erreur.
- [ ] Je peux expliquer chaque étape.


## ✅ Fin de l'étape

- [ ] Les trois fichiers guidés contiennent ma propre solution.
- [ ] Je peux expliquer les notions utilisées sans lire la démarche.
