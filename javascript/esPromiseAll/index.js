function firstPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Prima promessa risolta dopo 2 secondi");
      }, 2000);
    });
  }
  
  function secondPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Seconda promessa risolta dopo 3 secondi");
      }, 3000);
    });
  }
  
  Promise.all([firstPromise(), secondPromise()])
    .then((results) => {
      console.log("Entrambe le promesse sono risolte:");
      console.log(results);
    })
    .catch((error) => {
      console.error("Errore:", error);
    });