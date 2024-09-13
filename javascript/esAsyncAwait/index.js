async function ottieniDati() {
try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
    })
    if(response.ok) {
        const dati = await response.json();
        console.log(dati);
    }
} catch (error) {
    console.error(error);
}
}
ottieniDati();
