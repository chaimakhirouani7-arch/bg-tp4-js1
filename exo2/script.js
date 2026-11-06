"use strict";
// Mode strict obligatoire au tout début du script (slide 52 : let, const, var et mode strict)

// ===== Exercice 2 - TP4 JavaScript (Partie 1) =====
// Les commentaires en JavaScript commencent par // (slide 37 : syntaxe)

// ----- Données -----
// Tableau de chaînes de caractères (slide 39 : les tableaux)
const tableauEtudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

// Objet avec les propriétés nom, prenom et age (slide 40 : les objets)
const objetEtudiant = {
    nom: "John",
    prenom: "DOE",
    age: 30
};

// Tableau d'objets (slide 41 : tableau d'objets)
const listeEtudiants = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
];

// ----- Fonctions (slide 46 : les fonctions) -----
// L'affichage se fait uniquement avec console.log (slide 34 : console.log)

// f1 : affiche les étudiants du tableau, un par un
function f1() {
    // Boucle for...of pour parcourir le tableau (slide 45 : les boucles)
    for (const etudiant of tableauEtudiants) {
        console.log(etudiant);
    }
}

// f2 : affiche l'objet étudiant
function f2() {
    console.log(objetEtudiant);
}

// f3 : affiche nom-prenom-age pour chaque objet du tableau
function f3() {
    // Boucle for pour parcourir le tableau d'objets (slide 45 : les boucles)
    for (let i = 0; i < listeEtudiants.length; i++) {
        const e = listeEtudiants[i];
        // Affichage formaté avec les backticks et ${} (slide 38)
        console.log(`${e.nom}-${e.prenom}-${e.age}`);
    }
}