/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · CHALLENGE
 * GESTION DE PANIER E-COMMERCE
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous codez la logique du panier d'achat d'une boutique en ligne.
 *
 * Consignes :
 * 1. Vous avez un tableau représentant les ID des articles dans le panier : panier = [101, 105, 101, 102].
 * 2. Créez une fonction ajouterAuPanier(id) qui ajoute l'article au tableau.
 * 3. Créez une fonction retirerDuPanier(id) qui retire Toutes les occurrences de cet ID du panier (ex: retirer 101).
 * 4. (Bonus) Créez une fonction afficherQuantites() qui compte et affiche le panier sous forme : Article 101 : 2 exemplaires, Article 105 : 1 exemplaire...
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day04/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.

const panier = [101, 105, 101, 102, 105]
function ajouterAuPanier(id) {
    panier.push(id)
}
function retierDuPanier(id) {
    for(let i = 0; i < panier.length; i++) {
        if (panier[i] == id) {
            panier.splice(i, 1)
            break
        }
    }
}
function aficherQuantites() {
    const compteurs = {}
    for (const mot of panier) {
        if (compteurs[mot] === undefined) {
            compteurs[mot] = 1
        } else {
            compteurs[mot]++
        }
    }
    return compteurs
}

console.log(panier)
retierDuPanier(101)
ajouterAuPanier(200)
console.log(panier)
ajouterAuPanier(44)
console.log(aficherQuantites(panier))