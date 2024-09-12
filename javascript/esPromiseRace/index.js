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
      }, 3000); //
    });
  }
  
  Promise.race([firstPromise(), secondPromise()])
    .then((result) => {
      console.log("La prima promessa che si risolve:", result);
    })
    .catch((error) => {
      console.error("Errore:", error);
  })