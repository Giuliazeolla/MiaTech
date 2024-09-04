function somma(...numeri) {
    return numeri.reduce((accumulatore, valoreCorrente) => accumulatore + valoreCorrente, 0);
}

console.log(somma(1,5));
console.log(somma());