const numero = 42;
const stringa = "Ciao, mondo!";
const array = [1, 2, 3, 4, 5];
const oggetto = {
  nome: "Mario",
  cognome: "Rossi",
  età: 30
};

console.log(numero);
console.log(stringa);
console.log(array);
console.log(oggetto);


const stato = "errore";

if (stato === "errore") {
  console.error("Si è verificato un errore!");
} else if (stato === "avviso") {
  console.warn("Attenzione: questo è un avviso!");
} else {
  console.log("Tutto sembra andare bene.");
}



const persone = [
  { nome: "Mario", cognome: "Rossi", età: 30 },
  { nome: "Giulia", cognome: "Zeolla", età: 23 },
  { nome: "Emanuele", cognome: "Sasso", età: 23 }
];

console.table(persone);

console.group("Informazioni sui gruppi");
console.log("Questi sono i dati delle persone:");
console.table(persone);
console.groupEnd();