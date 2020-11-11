/*
Creare un oggetto che rappresenti un triangolo rettangolo,
con le seguenti proprietà: base e altezza.
Calcolare perimetro e area.
*/

let triangolo = {
  'base': 10,
  'altezza': 5
};

let area = (triangolo.base * triangolo.altezza) / 2;

console.log(`L'area è pari a ${area}`);

let perimetro = (Math.sqrt(triangolo.base ** 2 + triangolo.altezza ** 2)) + triangolo.base + triangolo.altezza;

console.log(`Il perimetro è pari a ${Math.floor(perimetro)}`);
