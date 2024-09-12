async function fetchData() {
    try {
        const response = await fetch('https://api.github.com/users/github', {
            method: "GET"
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        }
    } catch (error) {
        console.error("Errore:", error.message);
    }
}

fetchData();
