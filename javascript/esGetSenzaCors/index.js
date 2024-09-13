function getSenzaCors() {
    fetch('/api/dati', {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
}

getSenzaCors();