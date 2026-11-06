"use strict";
// Mode strict obligatoire au tout début du script (slide 52 : let, const, var et mode strict)

// ===== Exercice 1 - TP4 JavaScript (Partie 1) =====
// Les commentaires en JavaScript commencent par // (slide 37 : syntaxe)

// ----- Variables et constantes -----
// Les valeurs sont des constantes déclarées avec const (slide 52)
const nom = "John";      // type string : chaîne de caractères (slide 38 : types primitifs)
const prenom = "Doe";    // type string (slide 38)
const age = 30;          // type number : entier (slide 38)
const note = 15;         // type number (slide 38)
const pi = 3.14;         // type number : réel (slide 38)

// ----- Fonctions -----
// Chaque fonction est appelée par le clic sur un bouton (slide 46 : les fonctions)
// L'affichage se fait uniquement avec console.log (slide 34 : console.log)

// f1 : affiche le nom
function f1() {
    console.log(nom);
}

// f2 : affiche le prénom
function f2() {
    console.log(prenom);
}

// f3 : affiche le nom et le prénom séparés par un tiret
function f3() {
    // Concaténation de chaînes avec l'opérateur + (slide 38)
    console.log(nom + "-" + prenom);
}

// f4 : affiche l'âge
function f4() {
    console.log(age);
}

// f5 : affiche la note
function f5() {
    console.log(note);
}

// f6 : affiche la valeur de pi
function f6() {
    console.log(pi);
}