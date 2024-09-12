function randomPromise() {
    return new Promise((resolve, reject) => {
      const randomValue = Math.random();
      setTimeout(() => {
        if (randomValue > 0.5) {
          resolve("Successo! Numero casuale: " + randomValue);
        } else {
          reject("Errore! Numero casuale troppo basso: " + randomValue);
        }
      }, 1000);
    });
  }
  
  randomPromise()
    .then((message) => {
      console.log(message);
      return "Manipolazione del risultato di successo!";
    })
    .then((manipulatedMessage) => {
      console.log("Risultato finale dopo manipolazione:", manipulatedMessage);
    })
    .catch((error) => {
      console.error("Gestione dell'errore:", error);
    })