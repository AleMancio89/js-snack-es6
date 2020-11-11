/*
Creare un array di oggetti: ogni oggetto descriverà una bici
da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

let bici = [
  {
    'nome': 'olympia',
    'peso': 15
  },
  {
    'nome': 'cube',
    'peso': 10
  },
  {
    'nome': 'scott',
    'peso': 9
  }
];

let bicileggera = bici[0];

for(let i = 0; i < bici.length; i++){
  if(bici[i].peso < bicileggera.peso){
    bicileggera = bici[i];
  }
}

console.log(`La bici più leggera è la ${bicileggera.nome}. Con il peso di: ${bicileggera.peso}`);
