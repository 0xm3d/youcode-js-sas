/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RÉFRACTURATION (REFACTORING)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Reprenez l'exercice du FizzBuzz du *Day 02* et encapsulez-le dans une fonction jouerFizzBuzz(max). En appelant jouerFizzBuzz(15), ça devrait jouer jusqu'à 15.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day03/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

function jouerFizzBuzz(max) {
    for (let a = 1; a <= max; a++) {
    if (a % 3 == 0 && a % 5 != 0)
        console.log("Fizz")
    else if (a % 5 == 0 && a % 3 != 0) 
        console.log("Buzz")
    else if (a % 3 == 0 && a % 5 == 0)
        console.log("FizzBuzz")
    else
        console.log(a)
}
}

jouerFizzBuzz(15)


