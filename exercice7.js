let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;
let sousTotal = prix * quantite;
console.log("le Sous-total est :", sousTotal);
let reduction = 0;
if (codePromo != null && estMembre) {
    reduction = sousTotal * reductionPourcentage / 100;
}

console.log("Réduction :", reduction);
let total = sousTotal - reduction;
console.log("Total :", total);
let statut;
if (soldeCompte >= total) {
    statut = "le paiement est accepté";
} else {
    statut = "le solde est insuffisant";
}
console.log("Statut :", statut);
if (statut === "le paiement est accepté") {
    soldeCompte = soldeCompte - total;
}
console.log("\n------ RÉCAPITULATIF ------");
console.log("Produit   :", nomProduit);
console.log("Quantité  :", quantite);
console.log("Prix unit.:", prix, "DH");
console.log("Sous-total:", sousTotal, "DH");
console.log("Réduction :", reduction, "DH");
console.log("Total     :", total, "DH");
console.log("Statut    :", statut);
console.log("Solde     :", soldeCompte, "DH");
console.log("--------------------------");