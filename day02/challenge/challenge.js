/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · CHALLENGE
 * LE BRUTE-FORCER
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte :
 * Vous simulez un programme pour "craquer" un cadenas à 3 chiffres.
 *
 * Consignes :
 * 1. Définissez codeSecret = 739.
 * 2. Utilisez des boucles imbriquées (3 boucles for imbriquées allant chacune de 0 à 9) pour simuler les roues d'un cadenas de valise.
 * 3. À chaque essai, reconstituez le code testé (ex: c1 * 100 + c2 * 10 + c3).
 * 4. Si le code testé est égal au codeSecret, arrêtez toutes les boucles et affichez "Code trouvé : 739 après X essais".
 * Note : Réfléchissez à la manière de sortir de plusieurs boucles imbriquées (labels ou vérification de variable booléenne trouve).
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day02/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
// TODO: écris ta solution ici.

let codeSecret = 739;
let temp = codeSecret;
let a, b, c;

a = temp % 10;
temp = Math.trunc(temp / 10);
b = temp % 10;
temp = Math.trunc(temp / 10);
c = temp % 10;

let d, e, f;
let essais = 0;

for (d = 0; d < 10; d++) {
    for (e = 0; e < 10; e++) {
        for (f = 0; f < 10; f++) {
            essais++;

            if (d == c && e == b && f == a) {
                console.log(`Code trouvé : ${d} ${e} ${f} après ${essais} essais`);
            }
        }
    }
}
