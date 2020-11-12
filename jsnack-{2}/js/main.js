/*
jsnack 2 - Updated
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
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
  let {peso} = bici[i];
  if(peso < bicileggera.peso){
    bicileggera = bici[i];
  }
}

let {nome, peso} = bicileggera;

console.log(`La bici più leggera è la ${nome}. Con il peso di: ${peso}`);
