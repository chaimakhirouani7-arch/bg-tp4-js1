

const produit = {
  nom: "lait",
  prix: 100,
  quantite: 50
};
const valeurStock = produit.prix * produit.quantite;
console.log("Valeur du stock de " + produit.nom + " : " + valeurStock);
 
const catalogue = [
  { nom: "lait", prix: 100, quantite: 50 },
  { nom: "fromage", prix: 200, quantite: 30 },
  { nom: "pain", prix: 20, quantite: 20 },
  { nom: "sucre", prix: 300, quantite: 25 },
  { nom: "cafe", prix: 70, quantite: 55 }
];
 
const somme = catalogue.reduce((total, p) => total + p.prix, 0);
const moyenne = somme / catalogue.length;
const chers = catalogue.filter(p => p.prix > moyenne);
 
console.log("Prix moyen :", moyenne);
console.log("Produits dont le prix dépasse la moyenne :");
chers.forEach(p => {
  console.log(p.nom + " : " + p.prix);
});
 
const valeurGlobale = catalogue.reduce((total, p) => total + p.prix * p.quantite, 0);
const nbArticles = catalogue.reduce((total, p) => total + p.quantite, 0);
 
console.log("Nombre total d'articles :", nbArticles);
console.log("Valeur globale du stock :", valeurGlobale);
 
function calculerValeurStock(unProduit) {
  return unProduit.prix * unProduit.quantite;
}
 
console.log("lait :", calculerValeurStock(catalogue[0]));
console.log("fromage :", calculerValeurStock(catalogue[1]));
console.log("pain :", calculerValeurStock(catalogue[2]));
console.log("sucre :", calculerValeurStock(catalogue[3]));
console.log("cafe :", calculerValeurStock(catalogue[4]));
 
function traiterCatalogue(liste, callback) {
  liste.forEach(callback);
}
 
function afficherNom(p) {
  console.log(p.nom);
}
 
function afficherPrix(p) {
  console.log(p.prix);
}
 
traiterCatalogue(catalogue, afficherNom);
traiterCatalogue(catalogue, afficherPrix);
 

