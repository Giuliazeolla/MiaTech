let parole = [];
let parola = [];

for(let i = 0; i < 5; i++) {
    parola = prompt('Inserisci 5 parole:');
    parole.push(parola);
}
console.log(parole);

for (i = 0; i < parole.length; i++) {
    if(parole[i].length % 2 !== 0)
        console.log(parole[i]);
}