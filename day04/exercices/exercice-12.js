/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 12 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * LE DÉDOUBLONNEUR
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction qui prend un tableau avec des doublons [1, 2, 2, 3, 4, 4, 5] et retourne un nouveau tableau sans doublons.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-12
 * ▶️ Commande : node day04/exercices/exercice-12.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function sansDoublons(nombres) {
    const nouveauTableau = [];
    for (let i = 0; i < nombres.length; i++) {
        if (nouveauTableau.includes(nombres[i])) {
            continue;
        }
        nouveauTableau.push(nombres[i]);
    }
    return nouveauTableau;
}
console.log(sansDoublons([1, 1, 2, 3, 4, 4, 5, 6, 5, 8]));