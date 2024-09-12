function operazione() {
    const numeratore = 10;
    const divisore = 0;
  
    if (divisore === 0) {
      throw new Error("Divisione per zero non è consentita.");
    }
  
    return numeratore / divisore;
  }
  
  try {
    const risultato = operazione();
    console.log("Risultato dell'operazione:", risultato);
  } catch (errore) {
    console.error("Si è verificato un errore:", errore.message);
  } finally {
    console.log("Operazione completata.");
  }