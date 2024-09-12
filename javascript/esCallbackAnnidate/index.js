function sottrazione(a, b, callback) {
    const risultato = a - b;
    callback(risultato); 
}

function moltiplicazione(c, d, callback) {
    const risultato = c * d;
    callback(risultato); 
}

sottrazione(10, 4, (risultatoSottrazione) => { 
    moltiplicazione(risultatoSottrazione, 2, (risultatoMoltiplicazione) => { 
        console.log("Operazioni completate, risultato finale:" + risultatoMoltiplicazione);
    })});
