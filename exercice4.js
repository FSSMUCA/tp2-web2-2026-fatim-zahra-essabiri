const paires = [
  [0, ""],
  [0, "0"],
  [0, false],
  ["", false],
  [null, undefined],
  [null, false],
  [NaN, NaN],
  [1, "1"],
  [" \t\n ", 0]
];

let compteur = 0;

for (let i = 0; i < paires.length; i++) {
  let a = paires[i][0];
  let b = paires[i][1];

  let egal2 = (a == b);
  let egal3 = (a === b);

  console.log(String(a) + " == " + String(b) + " -> " + egal2 +
              " | " + String(a) + " === " + String(b) + " -> " + egal3);

  if (egal2 !== egal3) {
    compteur++;
  }
}

console.log("---");
console.log(compteur + " paires où == et === sont différents");