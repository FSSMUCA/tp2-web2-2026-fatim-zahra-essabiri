let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

console.log("----- RAPPORT UTILISATEUR -----");

let nomCorrige = nom.trim();
if(nomCorrige === ""){
    nomCorrige = "Inconnu";
}
console.log('nom              : "' + nomCorrige + '" (corrigé : espaces supprimés)');
let ageCorrige = parseInt(age);
if(isNaN(ageCorrige) || ageCorrige <= 0){
    console.log("age              : valeur invalide");
}else{
    console.log("age              :", ageCorrige , "(valide)");
}
let position = email.indexOf("@");
let emailValide = false;
if(position !== -1){
    let partieApres = email.slice(position);
    if(partieApres.includes(".")){
        emailValide = true;
    }
}
if(emailValide){
    console.log('email            : "' + email + '" (valide)');
}else{
    console.log('email            : "' + email + '" (invalide : pas de point après @)');
}

let score = parseInt(scoreJeu);
if(isNaN(score)){
    score = 0;
}
console.log("scoreJeu         :", score , '(extrait depuis "' + scoreJeu + '")');


let admin;
if(estAdmin === "true"){
    admin = true;
}else{
    admin = false;
}
console.log("estAdmin         :", admin , '(conversion manuelle)');

let connexion = derniereConnexion ?? "Jamais connecté";
console.log('derniereConnexion: "' + connexion + '" (valeur par défaut via ??)');


let nb = Number(nombreConnexions);

if(nb === 0){
    console.log('nombreConnexions : "Aucune connexion" (0 après conversion)');
}else{
    console.log("nombreConnexions :", nb);
}

console.log("----------------------------------");