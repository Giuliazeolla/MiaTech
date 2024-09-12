
const stringa = "Hello, World!";

try {
  const carattere = stringa.charAt(20);
  if (typeof stringa !== 'string') {
    throw new TypeError("La variabile non è una stringa.");
  }

  console.log("Carattere alla posizione 20:", carattere);
} catch (errore) {
  if (errore instanceof TypeError) {
    console.error("Errore di tipo:", errore.message);
  } else {
    console.error("Errore generico:", errore.message);
  }
}