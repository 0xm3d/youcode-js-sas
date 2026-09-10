/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 10 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * LE DÉTECTEUR DE PALINDROME (LOGIQUE DE BASE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction estPalindrome(mot) (vous pouvez ignorer les majuscules et espaces pour l'instant) qui retourne true si le mot se lit dans les deux sens (ex: "radar").
 * Indice : vous pouvez utiliser une boucle for à l'envers ou comparer les indices.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-10
 * ▶️ Commande : node day03/exercices/exercice-10.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

function estPalindrome(mot) {
    for (let i = 0; i < mot.length / 2; i++) {
        if (mot[i] !== mot[mot.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(estPalindrome("radar"))