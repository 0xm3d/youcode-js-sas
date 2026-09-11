/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 14 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * CALCULATRICE MODULAIRE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction calculatrice(a, b, signe). Utilisez un switch sur signe pour appeler l'une des 4 opérations de base (+, -, *, /) que vous aurez écrites en tant que fonctions distinctes.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-14
 * ▶️ Commande : node day03/exercices/exercice-14.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

function addition(a, b) {
    return a + b;
}

function soustraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function calculatrice(a, b, signe) {
    switch (signe) {
        case "+":
            return addition(a, b);

        case "-":
            return soustraction(a, b);

        case "*":
            return multiplication(a, b);

        case "/":
            return division(a, b);

        default:
            return "Opération invalide";
    }
}

console.log(calculatrice(10, 5, "+"));
console.log(calculatrice(10, 5, "-"));
console.log(calculatrice(10, 5, "*"));
console.log(calculatrice(10, 5, "/"));