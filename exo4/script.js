"use strict";
// Mode strict obligatoire au tout début du script (slide 52 : let, const, var et mode strict)

// ===== Exercice 4 : Gestion d'un magasin =====
// Les commentaires en JavaScript commencent par // (slide 37 : syntaxe)
// L'affichage se fait uniquement avec console.log (slide 34 : console.log)

// ----- Question 1 : un produit et la valeur de son stock -----
// Un produit est un objet avec les propriétés nom, prix et quantite (slide 40 : les objets)
const produit = {
    nom: "lait",
    prix: 100,
    quantite: 50
};
// Multiplication avec l'opérateur * (slide 42 : les opérateurs)
const valeurStock = produit.prix * produit.quantite;
// Concaténation de chaînes avec + (slide 38)
console.log("Valeur du stock de " + produit.nom + " : " + valeurStock);

// ----- Question 2 : produits dont le prix dépasse le prix moyen -----
// Catalogue de 5 produits : tableau d'objets (slide 41 : tableau d'objets)
const catalogue = [
    { nom: "lait", prix: 100, quantite: 50 },
    { nom: "fromage", prix: 200, quantite: 30 },
    { nom: "pain", prix: 20, quantite: 20 },
    { nom: "sucre", prix: 300, quantite: 25 },
    { nom: "cafe", prix: 70, quantite: 55 }
];

// reduce calcule la somme des prix, avec une fonction fléchée (slide 39 : méthodes utiles, slide 47 : fonction fléchée)
const somme = catalogue.reduce((total, p) => total + p.prix, 0);
// Division avec l'opérateur / (slide 42 : les opérateurs)
const moyenne = somme / catalogue.length;
// filter sélectionne les produits dont le prix est supérieur à la moyenne (slide 39 : méthodes utiles, slide 42 : comparaison >)
const chers = catalogue.filter(p => p.prix > moyenne);

console.log("Prix moyen :", moyenne);
console.log("Produits dont le prix dépasse la moyenne :");
// Boucle forEach pour parcourir le tableau (slide 45 : les boucles)
chers.forEach(p => {
    console.log(p.nom + " : " + p.prix);
});

// ----- Question 3 : nombre d'articles et valeur globale du stock (avec reduce) -----
// reduce avec un accumulateur initialisé à 0 (slide 39 : méthodes utiles)
const valeurGlobale = catalogue.reduce((total, p) => total + p.prix * p.quantite, 0);
const nbArticles = catalogue.reduce((total, p) => total + p.quantite, 0);

console.log("Nombre total d'articles :", nbArticles);
console.log("Valeur globale du stock :", valeurGlobale);

// ----- Question 4 : valeur du stock d'un produit donné (avec une fonction) -----
// Fonction avec un paramètre et une valeur de retour (slide 46 : les fonctions)
function calculerValeurStock(unProduit) {
    return unProduit.prix * unProduit.quantite;
}

// Vérification sur plusieurs produits, accès à un élément du tableau par son indice (slide 39 : les tableaux)
console.log("lait :", calculerValeurStock(catalogue[0]));
console.log("fromage :", calculerValeurStock(catalogue[1]));
console.log("pain :", calculerValeurStock(catalogue[2]));
console.log("sucre :", calculerValeurStock(catalogue[3]));
console.log("cafe :", calculerValeurStock(catalogue[4]));

// ----- Question 5 : appliquer différents traitements au catalogue (callbacks) -----
// traiterCatalogue reçoit une fonction en paramètre : c'est un callback (slide 48 : fonctions de rappel)
function traiterCatalogue(liste, callback) {
    // forEach appelle le callback pour chaque produit (slide 45 : les boucles)
    liste.forEach(callback);
}

// Premier traitement : afficher le nom du produit (slide 46 : les fonctions)
function afficherNom(p) {
    console.log(p.nom);
}

// Deuxième traitement : afficher le prix du produit (slide 46 : les fonctions)
function afficherPrix(p) {
    console.log(p.prix);
}

// On passe les fonctions sans parenthèses : elles seront appelées plus tard par traiterCatalogue (slide 48)
traiterCatalogue(catalogue, afficherNom);
traiterCatalogue(catalogue, afficherPrix);