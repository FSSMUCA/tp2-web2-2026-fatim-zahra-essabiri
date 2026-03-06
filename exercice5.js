let nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];

for (let i = 0; i < nombres.length; i++) {
    
    switch (true) {
        case Number.isNaN(nombres[i]):
            console.log(nombres[i] + " -> INVALIDE");
            break;
        case nombres[i] === Infinity || nombres[i] === -Infinity:
            console.log(nombres[i] + " -> INFINI");
            break;
        case 1 / nombres[i] === -Infinity:
            console.log(nombres[i] + " -> ZERO NEGATIF");
            break;
        case Number.isInteger(nombres[i]) && Math.abs(nombres[i]) <= Number.MAX_SAFE_INTEGER:
            console.log(nombres[i] + " -> ENTIER SUR");
            break;
        case Number.isInteger(nombres[i]) && Math.abs(nombres[i]) > Number.MAX_SAFE_INTEGER:
            console.log(nombres[i] + " -> ENTIER HORS LIMITES");
            break;
        default:
            console.log(nombres[i] + " -> DECIMAL");
    }
}