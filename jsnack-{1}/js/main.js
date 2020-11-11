/* 1A
Creare un oggetto palla che abbia le seguenti proprietà.
Nome = palla
Peso = 10
*/
let palla = {
  'nome': 'palla',
  'peso': 10
};

/* 1B
Attraverso un prompt dare la possibilità all’utente di
modificare il peso della palla.
*/
console.log(palla.peso);
palla.peso = parseInt(prompt('Inserisci il nuovo peso'));
console.log(palla.peso);
