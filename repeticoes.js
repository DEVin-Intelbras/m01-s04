// FOR
var numeros = [1, 2, 3, 4, 5, 6];
var dobro = [];

for (let i = 0; i < numeros.length; i++) {
  dobro.push(numeros[i] * 2);
}
console.log(numeros);
console.log(dobro);

// MAP
var test = numeros.map((item) => item * 2);
console.log(numeros);
console.log(test);

// FOREACH
var carros = [
  { id: 1, nome: 'Gol' },
  { id: 2, nome: 'BMW' },
];
carros.forEach((carro, index, array) => {
  console.log(carro, index, array);
});

//WHILE
var sair = false;

while (!sair) {
  var numero = parseInt(prompt('Infome um número. Informe -1 para sair'));

  if (numero === -1) {
    sair = true;
  }

  console.log(numero);
}

// DO WHILE
var sair = false;

do {
  var numero = parseInt(prompt('Infome um número. Informe -1 para sair'));

  if (numero === -1) {
    sair = true;
  }

  console.log(numero);
} while (!sair);
