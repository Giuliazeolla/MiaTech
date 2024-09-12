async function firstFunction() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Prima funzione completata"), 2000);
    });
}

async function secondFunction() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Seconda funzione completata"), 4000);
    });
}

async function runFunctions() {
    try {
        const firstResult = await firstFunction();
        console.log(firstResult); 
        
        const secondResult = await secondFunction();
        console.log(secondResult); 
    } catch (error) {
        console.error("Errore:", error.message);
    }
}

runFunctions();
