function promiseWithMessage() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Promessa risolta dopo 2 secondi");
      }, 2000);
    });
  }
  
  async function asyncFunction() {
    console.log("Attesa della promessa...");
   
    const message = await promiseWithMessage();
   
    console.log(message);
  }
  
  asyncFunction();