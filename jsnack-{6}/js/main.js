/*
dato questo array di obj iniziale:
var arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];
Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array)
una nuova proprietà position che contiene una lettera casuale. non dobbiamo modificare l’array iniziale

*/

var arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];

//Funzione per generazione casuale di una lettera
function randomLetter() {
  let result = '';
  let characters = 'abcdefghijklmnopqrstuvwxyz';
  return result = characters.charAt(Math.floor(Math.random() * characters.length));
}

//Clono nuovo array ed agggiungo nuova chiave position
const newArrayObj = arrayObj.map((element) => ({...element, position: randomLetter()}));

console.log(arrayObj);
console.log(newArrayObj);
