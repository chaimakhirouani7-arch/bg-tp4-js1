"use strict";
// Mode strict obligatoire au tout début du script (slide 52 : let, const, var et mode strict)

// ===== Exercice 3 - TP4 JavaScript (Partie 1) =====
// Les commentaires en JavaScript commencent par // (slide 37 : syntaxe)

// ----- Données -----
// Tableau d'objets Students : un objet par étudiant (slide 40 : les objets, slide 41 : tableau d'objets)
const Students = [
    { id: 1000, nom: "JOHN", prenom: "DOE", note: 14, valeur: 5 },
    { id: 2000, nom: "BOB", prenom: "CARLTON", note: 7, valeur: 1 },
    { id: 3000, nom: "RAYANE", prenom: "SMITH", note: 13, valeur: 3 }
];

// ----- Fonction B -----
// Fonction avec un seul paramètre et une valeur de retour (slide 46 : les fonctions)
// Le type float de l'énoncé correspond au type number en JavaScript (slide 38 : types primitifs)
function B(note) {
    // Opérateur de comparaison >= (slide 42 : les opérateurs) : le résultat est un booléen (slide 38)
    return note >= 10;
}

// ----- Fonction A -----
// A appelle B pour chaque étudiant (slide 46 : les fonctions)
function A() {
    // Boucle for pour parcourir le tableau (slide 45 : les boucles)
    for (let i = 0; i < Students.length; i++) {
        // Condition if...else selon le résultat de B (slide 43 : les conditions)
        if (B(Students[i].note)) {
            // Affichage uniquement avec console.log (slide 34), concaténation avec + (slide 38)
            console.log(Students[i].id + ": ADMIS");
        } else {
            console.log(Students[i].id + ": AJOURNÉ");
        }
    }
}