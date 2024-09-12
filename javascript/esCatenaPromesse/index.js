function promiseWithNumber() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(7);
      }, 1000);
    });
  }
  
  promiseWithNumber()
    .then((number) => {
      if (number % 2 === 0) {
        console.log(number + " è pari, lo divido per 2.");
        return number / 2;
      } else {
        console.log(number + " è dispari, lo moltiplico per 3 e aggiungo 1.");
        return number * 3 + 1;
      }
    })
    .then((result) => {
      console.log("Risultato finale:", result);
    });
  