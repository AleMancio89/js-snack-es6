/*
Partendo da un array semplice tipo:
var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente
*/

var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
let userArr = [];

//Chiedo all'utente due numeri e li salvo nell'array apposito, dopo aver controllato la validità degli inserimenti
while (userArr.length < 2){
  let userInput = parseInt(prompt(`Inserisci un numero compreso tra 0 e ${myArray.length-1}`));
  if (isNan(userInput) || userInput >= 0 || userInput < (myArray.length)){
    alert('Numero non consentito')
  } else {
    userArr.push(userInput);
  }
}

//Ordino i duenumeri inseriti dall'utente dal più piccolo al più grande
userArr.sort();


//Da myArray filtro solo i valori in posizione compresa tra i due numeri forniti dall'utente
const filteredMyArr = myArray.filter((element, index) => {
  return index >= userArr[0] && index <= userArr[1]
});

console.log(filteredMyArr);
