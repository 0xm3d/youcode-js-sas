/**
 * ─────────────────────────────────────────────────────────────
 * Jour 05 · EXERCICE 18 · NIVEAU 3 : DÉFI (AVANCÉS)
 * COMPTEUR D'OCCURRENCES DE LETTRE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui compte combien de fois la lettre "e" (minuscule ou majuscule) apparaît dans un long paragraphe.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-18
 * ▶️ Commande : node day05/exercices/exercice-18.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

function counter(paragraphe) {
    let counter = 0;
    for(let i = 0; i < paragraphe.length; i++) {
        if (paragraphe[i] === "e" || paragraphe[i] === "E")
            counter +=1
    }
    return `the letter 'e' appears ${counter} in the given paragraph`
}
let paragraph = "We don't read and write poetry because it's cute. We read and write poetry because we are members of the human race."
console.log(counter(paragraph))