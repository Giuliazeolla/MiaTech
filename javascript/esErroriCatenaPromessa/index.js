function randomPromise() {
    return new Promise((resolve, reject) => {
      const randomValue = Math.random();
      setTimeout(() => {
        if (randomValue > 0.5) {
          resolve("Successo: Numero casuale maggiore di 0.5 (" + randomValue + ")");
        } else {
          reject("Errore: Numero casuale minore o uguale a 0.5 (" + randomValue + ")");
        }
      }, 1000);
    });
  }
  
  randomPromise()
    .then((message) => {
      console.log(message);
      return message + " -> Manipolazione 1 completata.";
    })
    .then((message) => {
      console.log(message);
      return message + " -> Manipolazione 2 completata.";
    })
    .then((finalMessage) => {
      console.log(finalMessage);
    })
    .catch((errorMessage) => {
      console.error("Gestione dell'errore:", errorMessage);
    });