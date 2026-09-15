/**
 * ─────────────────────────────────────────────────────────────
 * Jour 05 · EXERCICE 15 · NIVEAU 3 : DÉFI (AVANCÉS)
 * VÉRIFICATEUR D'ANAGRAMME
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vérifiez si "chien" et "niche" sont des anagrammes (elles contiennent exactement les mêmes lettres, même quantité).
 * Indice : vous pouvez les transformer en tableau, les trier, et les rejoindre.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-15
 * ▶️ Commande : node day05/exercices/exercice-15.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let word1 = "chien"
let word2 = "niche"

function isEqual(word1, word2) {
    const arr1 = word1.split("")
    const arr2 = word2.split("")

    arr1.sort()
    arr2.sort()

    for(let i = 0; i < word1.length; i++) {
        if (arr1[i] !== arr2[i])
            return `the two words don't have the same letters`
    }
    return `"${word1}" and "${word2}" have the same letters and the same number of repeated letters`
}
console.log(isEqual(word1, word2))
