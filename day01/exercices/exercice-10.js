/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 01 · EXERCICE 10 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * CATÉGORIES D'ÂGE (IF / ELSE IF / ELSE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Selon l'âge d'une personne, affichez sa catégorie :
 * - < 12 : "Enfant"
 * - Entre 12 et 17 : "Adolescent"
 * - Entre 18 et 64 : "Adulte"
 * - >= 65 : "Senior"
 * Exemple : age = 15 -> Adolescent
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-10
 * ▶️ Commande : node day01/exercices/exercice-10.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.


let age = 33;

if (age < 12) {
    console.log("Enfant");
} else if (age >= 12 && age <= 17) {
    console.log("Adolescent");
} else if (age >= 18 && age >= 64) {
    console.log("Adulte")
} else {
    console.log("Adolescent");
}
