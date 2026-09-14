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
    return panier
}
function retierDuPanier(id) {
    for(let i = panier.length -1; i >= 0; i--) {
        if (panier[i] == id)
            panier.splice(i, 1)
    }
    return panier
}
function afficherQuantites(panier) {
    const compteurs = {}
    for (const article of panier) {
        if (compteurs[article] === undefined) {
            compteurs[article] = 1
        } else {
            compteurs[article]++
        }
    }
    let resultat = ""
    for (const article in compteurs) {
        resultat += `Article ${article} : ${compteurs[article]} exemplaire${compteurs[article] > 1 ? "s" : ""}, `
    }
    return resultat
}

console.log(panier)
console.log(afficherQuantites(panier))
retierDuPanier(101)
console.log(panier)
console.log(afficherQuantites(panier))
ajouterAuPanier(123)
console.log(afficherQuantites(panier))