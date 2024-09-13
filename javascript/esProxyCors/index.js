function richiestaConProxy() {
    const apiUrl = 'https://example.com/api/dati';
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const urlConProxy = apiUrl + proxyUrl,

    const response = fetch(urlConProxy)
    .then(response => {
        if(response.ok) {
            return response.json();
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
}

