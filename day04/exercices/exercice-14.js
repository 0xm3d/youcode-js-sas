/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 14 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * ROTATION DE TABLEAU
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Prenez [1, 2, 3]. Décalez tout vers la droite pour obtenir [3, 1, 2]. (Indice : enlevez le dernier et ajoutez-le au début).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-14
 * ▶️ Commande : node day04/exercices/exercice-14.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

const nums = [1, 2, 3];
let element = nums.splice(nums.length - 1, 1)[0];
nums.splice(0, 0, element);
console.log(nums);