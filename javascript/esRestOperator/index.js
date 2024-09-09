const numeri = [10, 20, 30, 40, 50];

const [primo, secondo, ...resto] = numeri;

console.log(primo); 
console.log(secondo);
console.log(resto);


const persona = {
    nome: "Giulia",
    cognome: "Zeolla",
    età: 23,
    professione: "Cassiera",
  };
  
  const { nome, età, ...altreProprietà } = persona;
  
  console.log(nome);   
  console.log(età);    
  console.log(altreProprietà);