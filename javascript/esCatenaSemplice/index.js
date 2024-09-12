function promiseWithNumber() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(5);
      }, 1000);
    });
  }
  
  promiseWithNumber()
    .then((number) => {
      return number * 2;
    })
    .then((number) => {
      return number + 3;
    })
    .then((finalResult) => {
      console.log("Risultato finale:", finalResult);
    });
  