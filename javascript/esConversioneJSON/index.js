const persona = {
    nome: "Giulia",
    cognome: "Zeolla",
    età: 23,
    città: "Benevento"
  };
  
  const jsonString = JSON.stringify(persona);
  
  console.log(jsonString);
  


  const jsonStringa = '{"nome":"Giulia","cognome":"Zeolla","età":23,"città":"Benevento"}';

  const person = JSON.parse(jsonStringa);
  console.log(person);
  