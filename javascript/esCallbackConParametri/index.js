function Operazione(a, b, callback) {
    const risultato = a - b;
    callback(risultato);
}

Operazione(5, 7, (risultato) => {
  console.log(risultato);
});