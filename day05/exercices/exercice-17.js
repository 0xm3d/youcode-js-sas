/**
 * ─────────────────────────────────────────────────────────────
 * Jour 05 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * LE CHIFFRE DE CÉSAR (CRYPTOGRAPHIE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction chiffrerCesar(texte, decalage) qui décale chaque lettre de l'alphabet. Par exemple, avec un décalage de 1, "ABC" devient "BCD".
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day05/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function chiffrerCesar(texte, decalage){
let next = ""
    for(let i = 0; i < texte.length; i++){
        next += String.fromCharCode(texte.charCodeAt(i) + decalage)
    }
    return next
}

console.log(chiffrerCesar("ABCD", 4));
