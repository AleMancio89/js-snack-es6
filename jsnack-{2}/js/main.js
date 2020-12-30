/*
jsnack 2 - Updated
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
*/

let bici = [
  {
    'nome': 'Olympia',
    'peso': 15
  },
  {
    'nome': 'Cube',
    'peso': 9
  },
  {
    'nome': 'Scott',
    'peso': 10
  }
];

let bicileggera = bici[0];

//Fattibile anche con un forEach
// bici.forEach((element) => {
//   if(element.peso  < bicileggera.peso){
//     bicileggera = element
//   }
// })

for(let i = 0; i < bici.length; i++){
  if(bici[i].peso < bicileggera.peso){
    bicileggera = bici[i];
  }
}

let {nome, peso} = bicileggera;

document.getElementById('bici').innerHTML = `
 <li>Nome: ${nome}</li>
 <li>Peso: ${peso}</li>
`;

console.log(`La bici più leggera è la ${nome}. Con il peso di: ${peso}`);
