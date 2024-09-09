const jsonString = `[
    {"nome": "Emanuele", "cognome": "Sasso", "età": 23, "professione": "Operaio"},
    {"nome": "Giulia", "cognome": "Zeolla", "età": 23, "professione": "Cassiera"},
    {"nome": "Lucia", "cognome": "Tortora", "età": 25, "professione": "Commessa"}
  ]`;
  
  let persone = JSON.parse(jsonString);
  
  persone.push({
    nome: "Marco",
    cognome: "Gilardi",
    età: 24,
    professione: "Parrucchiere"
  });
  
  const jsonStringAggiornata = JSON.stringify(persone, null, 2);  // null, 2 è per formattare in modo leggibile
  
  console.log(jsonStringAggiornata);
  