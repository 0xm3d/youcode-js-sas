/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · CHALLENGE
 * LE POKEDEX (ANNUAIRE DE DONNÉES)
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous devez gérer une mini-base de données d'utilisateurs.
 *
 * Consignes :
 * 1. Vous avez un tableau utilisateurs = [].
 * 2. Créez une fonction ajouterUtilisateur(nom, email) qui crée un objet { id, nom, email } (générez un ID unique simple) et l'ajoute au tableau.
 * 3. Créez une fonction trouverParEmail(email) qui retourne l'objet utilisateur correspondant.
 * 4. Créez une fonction supprimerParId(id) qui supprime l'utilisateur du tableau.
 * 5. Créez une fonction afficherAnnuaire() qui affiche joliment la liste complète dans la console.
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day06/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
// TODO: écris ta solution ici.

const utilisateurs = [];
function ajouterUtilisateur(nom, email) {
    const utilisateur = {
        id: utilisateurs.length + 1,
        nom: nom,
        email: email
    };

    utilisateurs.push(utilisateur);
}
function trouverParEmail(email) {
    return utilisateurs.find(utilisateur => utilisateur.email === email);
}
function supprimerParId(id) {
    const index = utilisateurs.findIndex(utilisateur => utilisateur.id === id);

    if (index !== -1) {
        utilisateurs.splice(index, 1);
    }
}
function afficherAnnuaire() {
    utilisateurs.forEach(utilisateur => {
        console.log(`ID: ${utilisateur.id} | Nom: ${utilisateur.nom} | Email: ${utilisateur.email}`);
    });
}
ajouterUtilisateur("Mohamed", "mohamed@gmail.com");
ajouterUtilisateur("chrollo", "chrollo@gmail.com");
ajouterUtilisateur("Yassine", "med@gmail.com");
console.log(trouverParEmail("chrollo@gmail.com"));
supprimerParId(1);
afficherAnnuaire();
