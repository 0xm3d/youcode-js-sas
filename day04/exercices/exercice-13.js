/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 13 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * COMPARAISON DE TABLEAUX
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction sontEgaux(tab1, tab2) qui vérifie si deux tableaux contiennent exactement les mêmes éléments dans le même ordre. (Rappel: [1] == [1] donne false en JS !).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-13
 * ▶️ Commande : node day04/exercices/exercice-13.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
function sontEgaux(tab1, tab2) {
    if (tab1.length != tab2.length) {
        return "the two arrays are not equal!"
    }
    for(let i = 0; i < tab1.length; i++) {
        if (tab1[i] != tab2[i]) {
            return "the two arrays are not equal!"
        }
    }
    return "the two arrays are equal"
}
console.log(sontEgaux([1, 3, 55, 8, 0, 33], [1, 3, 55, 8, 0, 33]))
console.log(sontEgaux([1, 3, 8, 0, 33], [1, 3, 55, 8, 0, 33]))
console.log(sontEgaux([1, 3, 111, 8, 21, 33], [1, 3, 55, 8, 0, 33]))