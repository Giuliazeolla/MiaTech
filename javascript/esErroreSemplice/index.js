const numeratore = 10;
const divisore = 0;

try {
  if (divisore === 0) {
    throw new Error("Divisione per zero non è consentita.");
  }
  const risultato = numeratore / divisore;
console.log(risultato);
} catch (errore) {
  console.error("Si è verificato un errore:", errore.message);
}