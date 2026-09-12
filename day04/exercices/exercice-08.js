/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DU MAXIMUM ET MINIMUM
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui parcourt un tableau de nombres aléatoires et retourne le plus grand et le plus petit nombre, SANS utiliser Math.max ni Math.min.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day04/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function minAndmax(numbers) {
    let max = 0;
    let min = 0;
    for(let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) 
            max = numbers[i]
        if (numbers[i] < min)
            min = numbers[i]
    }
    console.log(`${max} is the greatest number in your array, and ${min} is the smallest number in your array.`)
}
minAndmax([12, 44, 0, 12, 45, 15])