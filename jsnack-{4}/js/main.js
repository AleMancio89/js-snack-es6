/* 4A
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà:
nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre
saranno tutte settate a 0.
*/

let squadre = [
  {
    'nome': 'Juventus',
    'punti': 0,
    'falliSubiti': 0
  },
  {
    'nome': 'Inter',
    'punti': 0,
    'falliSubiti': 0
  },
  {
    'nome': 'Milan',
    'punti': 0,
    'falliSubiti': 0
  },
  {
    'nome': 'Roma',
    'punti': 0,
    'falliSubiti': 0
  }
];

/*4b
Generare numeri random al posto degli 0 nelle proprietà:
punti fatti e falli subiti
*/
const randomNumber = (min, max) => Math.floor((Math.random() * (max - min)) + min);


for(let i = 0; i < squadre.length; i++){
  squadre[i].punti = randomNumber(0, 100);
  squadre[i].falliSubiti = randomNumber(0, 100);
}

console.log(squadre);
