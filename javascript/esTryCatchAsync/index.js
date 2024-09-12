async function testPromise(isSuccess) {
    try {
        const result = await new Promise((resolve, reject) => {
            if (isSuccess) {
                resolve("La promessa è stata risolta con successo!");
            } else {
                reject(new Error("La promessa è stata rifiutata."));
            }
        });
        console.log(result);
    } catch (error) {
        console.error("Errore:", error.message);
    }
}

