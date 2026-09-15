/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DANS UN TABLEAU D'OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau de candidats (chaque objet a nom et score). Écrivez une fonction qui retourne le nom du candidat ayant le meilleur score.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day06/exercices/exercice-08.js
 */
"use strict";

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

function winner(players) {
    let bestPlayer = players[0];
    for (let player of players) {
        if (player.score > bestPlayer.score) {
            bestPlayer = player;
        }
    }
    return bestPlayer.nom;
}

const players = [
    { nom: "Omar", score: 827 },
    { nom: "Riad", score: 653 },
    { nom: "Med", score: 999 },
    { nom: "Walid", score: 210 },
]

console.log(winner(players));