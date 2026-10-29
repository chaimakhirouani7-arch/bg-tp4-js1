"use strict";

const tableauEtudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

const objetEtudiant = {
    nom: "John",
    prenom: "Doe",
    age: 38
};

const listeEtudiants = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
];

function f1() {
    console.log(tableauEtudiants);
}

function f2() {
    console.log(objetEtudiant);
}

function f3() {
    for (let i = 0; i < listeEtudiants.length; i++) {
        const e = listeEtudiants[i];
        console.log(`${e.nom}-${e.prenom}-${e.age}`);
    }
}