/**
 * ─────────────────────────────────────────────────────────────
 * Jour 05 · EXERCICE 12 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * INVERSION DE MOTS DANS UNE PHRASE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Prenez la phrase "Bonjour le monde" et transformez-la en "monde le Bonjour".
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-12
 * ▶️ Commande : node day05/exercices/exercice-12.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

let phrase = "Bonjour le monde"
let arr = phrase.split(" ")
console.log(`${arr[2]} ${arr[1]} ${arr[0]}`)
