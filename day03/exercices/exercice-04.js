/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 04 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * MAJORITÉ
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction estMajeur(age) qui retourne true si l'âge est >= 18, sinon false.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-04
 * ▶️ Commande : node day03/exercices/exercice-04.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function estMajeur(age) {
    if (age >= 18)
        return true
    else 
        return false
}
console.log(estMajeur(16))