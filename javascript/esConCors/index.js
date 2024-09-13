function richiestaGet() {
    const apiUrl = 'https://api.github.com/users/github';

    const response = fetch(apiUrl)
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
        })
}

richiestaGet();