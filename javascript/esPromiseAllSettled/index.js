function firstPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Prima promessa risolta");
      }, 2000);
    });
  }
  
  function secondPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Seconda promessa risolta");
      }, 3000);
    });
  }
  
  function thirdPromise() {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject("Terza promessa rifiutata");
      }, 1000);
    });
  }
  
  Promise.allSettled([firstPromise(), secondPromise(), thirdPromise()])
    .then((results) => {
      console.log("Risultati di tutte le promesse:");
      console.log(results);
    });