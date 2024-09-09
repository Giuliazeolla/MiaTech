function formattaPersona(persona) {
    const { nome, cognome, età, città } = persona;
    return `
  Nome: ${nome}
  Cognome: ${cognome}
  Età: ${età}
  Città: ${città}
    `;
  }
  
  const personaEsempio = {
    nome: "Mario",
    cognome: "Rossi",
    età: 30,
    città: "Roma"
  };
  
  console.log(formattaPersona(personaEsempio));