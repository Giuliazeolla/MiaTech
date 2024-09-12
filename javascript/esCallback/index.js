function OperazioneECallback(a, b, callback) {
    const risultato = a + b;
    console.log("Il risultato della somma è: " + risultato);
        callback(); 
       }

OperazioneECallback(5, 7, () => {
console.log("Callback eseguito!");
});