async function postData() {
    try {
        const dati = {
            nome: "Giulia",
            cognome: "Zeolla",
            anni: 23,
        };

        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dati)
        })
        if (response.ok) {
            const data = await response.json();
        console.log(data);
        }
    } catch (error) {
        console.error("Errore:", error.message);
    }
}

postData();
