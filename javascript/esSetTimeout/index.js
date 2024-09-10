function stampaMessaggio() {
    console.log("Questo messaggio viene stampato dopo 3 secondi.");
}

setTimeout(stampaMessaggio, 3000);



/*function stampaMessaggio() {
    console.log('Questo messaggio viene stampato ogni 2 secondi.');
}

setInterval(stampaMessaggio, 2000);*/


function stampaMessaggio() {
    console.log("Questo messaggio viene stampato ogni secondo.");
  }
  
  const intervallo = setInterval(stampaMessaggio, 1000);
  
  setTimeout(() => {
    clearInterval(intervallo);
    console.log("L'intervallo è stato interrotto.");
  }, 5000);