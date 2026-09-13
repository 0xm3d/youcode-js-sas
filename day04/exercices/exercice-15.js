/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 15 · NIVEAU 3 : DÉFI (AVANCÉS)
 * FUSION TRIÉE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez deux tableaux DÉJÀ triés : [1, 3, 5] et [2, 4, 6]. Écrivez un algorithme pour les fusionner en un seul tableau trié [1, 2, 3, 4, 5, 6] (sans utiliser .sort()).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-15
 * ▶️ Commande : node day04/exercices/exercice-15.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

const array1 = [1, 3, 5]
const array2 = [2, 4, 6]
const array3 = []
let i = 0;
let j = 0;
while (i < array1.length && j < array2.length) {
    if (array1[i] <= array2[j]) {
        array3.push(array1[i])
        i++
    }
    else {
        array3.push(array2[j])
        j++
    }
}
console.log(array3)

