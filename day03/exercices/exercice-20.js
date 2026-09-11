/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 20 · NIVEAU 3 : DÉFI (AVANCÉS)
 * MÉMOÏSATION (CACHE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction qui simule un long calcul. Ajoutez-y un "cache" (un objet ou une variable externe) qui enregistre les résultats précédents. Si la fonction est rappelée avec le même paramètre, elle retourne le résultat stocké au lieu de refaire le calcul.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-20
 * ▶️ Commande : node day03/exercices/exercice-20.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.


const cache = {}; // to store the previous value

function longCalculation(number) {
 
    // if I gave my function the same number as I did before it will return that the number already found then print it
    if (cache[number] !== undefined) {
        console.log("Result found in cache!");
        return cache[number];
    }
    // if my I give my function a the number for the first time it will do the calculation then store it in cache
    console.log("Doing the long calculation"); // telling me that my func in running

    let result = number * number;

    cache[number] = result; // store the long of the given number into cach

    return result;
}

console.log(longCalculation(5));
console.log(longCalculation(5)); 
console.log(longCalculation(10)); 
console.log(longCalculation(10)); 
console.log(longCalculation(5));