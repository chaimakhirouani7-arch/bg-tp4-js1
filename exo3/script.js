"use strict";

const Students = [
    { id: 1000, nom: "JOHN", prenom: "DOE", note: 14, appreciation: 5 },
    { id: 2000, nom: "BOB", prenom: "CARLTON", note: 7, appreciation: 1 },
    { id: 3000, nom: "RAYANE", prenom: "SMITH", note: 13, appreciation: 3 }
];

function B(note) {
    return note >= 10;
}

function A() {
    for (let i = 0; i < Students.length; i++) {
        const s = Students[i];
        const estAdmis = B(s.note);
        console.log(`${s.id} : ${s.nom} - Admis : ${estAdmis}`);
    }
}