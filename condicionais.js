function voto(idade) {
  if (idade === '') {
    return console.log('Informe a idade');
  }

  var idadeFormatada = parseInt(idade);

  if ((!idadeFormatada || idadeFormatada < 0) && idadeFormatada !== 0) {
    return console.log('Idade inválida');
  }

  if (idadeFormatada >= 18 && idadeFormatada <= 69) {
    console.log('Deve votar');
  } else if (idadeFormatada < 16) {
    console.log('Não pode votar');
  } else {
    console.log('Voto opcional');
  }
}
voto(69);

function calculaOperacao(n1, n2, op) {
  var num1 = parseFloat(n1);
  var num2 = parseFloat(n2);
  if ((!num1 && num1 !== 0) || (!num2 && num2 !== 0)) {
    return console.log('Valores inválidos');
  }
  switch (op) {
    case '+':
      console.log(`soma: ${num1 + num2}`);
      break;
    case '-':
      console.log(`subtração: ${num1 - num2}`);
      break;
    case '/':
      console.log(`divisisão: ${num1 / num2}`);
      break;
    case '*':
      console.log(`multiplicação: ${num1 * num2}`);
      break;
    default:
      console.log('Operação inválida');
  }
}
calculaOperacao(0, 10, '+');
calculaOperacao(20, 10, '-');
calculaOperacao(30, 10, '/');
calculaOperacao(50, 10, '*');
calculaOperacao(100, 10, 'as');
calculaOperacao('', 10, 'as');

function validaOpenBar(idade) {
  //Usando ternário
  var openBar = idade >= 18 ? 'Com OpenBar' : 'Sem OpenBar';
  console.log(openBar);

  //Usando If
  var openBar;
  if (idade >= 18) {
    openBar = 'Com OpenBar';
  } else {
    openBar = 'Sem OpenBar';
  }
  console.log(openBar);
}
validaOpenBar(18);
