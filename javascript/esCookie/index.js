//funzione per salvare il cookie

const setCookie = (name, value) => {
    const d = new Date ();
    d.setTime (d.getTime() + 24*60*60*1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + "; path=/";
}

setCookie ("mio-dato-locale", "COOKIE");

console.log("Cookies", document.cookie);

//funzione per recuperare un cookie

const getCookie = (name) => {
    let cookies = document.cookie;
    let nameCookie = name + "="; 
    let cookiesList = cookies.split(';');
    for(let i= 0; i<cookiesList.length; i++) {
        let cookie = cookiesList[i].trim();
        if(cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return null;
}

let value = getCookie ("mio-dato-locale");
console.log(value);

//funzione per rimuovere un cookie

const deleteCookie = (name) => {
    document.cookie = name + "=; expires=Thu, 01 jan 1970 00:00:00 UTC; path=/;";
}

deleteCookie("mio-dato-locale");