function somaAntiga(num1, num2) {
  console.log(num1 + num2);
}

somaAntiga(2, 4);

var soma = (num1, num2) => {
  console.log(num1 + num2);
};

soma(2, 4);

(() => {
  console.log('auto chamada');
})();

var numeros = [1, 2, 3, 8, 12, 29, 30];

var impares = numeros.filter((num) => {
  return num % 2 !== 0;
});

var impares2 = numeros.filter((num) => num % 2 !== 0);

var impar = numeros.find(function (num) {
  return num % 2 !== 0;
});

console.log(impares);
console.log(impar);

var arrayEmpty = numeros.filter((num) => false);
console.log(arrayEmpty);

var empty = numeros.find((num) => false);
console.log(empty);

var alunos = [{ nome: 'Leandro' }, { nome: 'Diego' }];
var alunosFiltrados = alunos.filter((aluno) => aluno.nome.toLocaleLowerCase().includes('di'));
console.log(alunosFiltrados);

var divisao = (num1 = 10, num2 = 2) => {
  console.log(num1 / num2);
};
divisao();

function multiplicacao({ num1 = 2, num2 = 3 } = {}) {
  console.log(num1 * num2);
}

multiplicacao({ num2: 4 });

var carro = { nome: 'Fusca' };
var pessoa = { nome: 'Leandro' };

function printNome({ pessoaDaPessoa, carroDaPessoa = carro }) {
  console.log(pessoaDaPessoa?.nome, carroDaPessoa.nome);
}

printNome({ carroDaPessoa: { nome: 'GOl' }, pessoaDaPessoa: pessoa });

var usuario = {
  login: 'login',
  email: 'a@a.com',
  nome: 'Usuario',
  endereco: {
    rua: 'Minha rua',
    numero: 10,
    bairro: 'Teste',
  },
};

// var nome = usuario.nome;
// var endereco = usuario.endereco;

var { nome, endereco } = usuario;
console.log(usuario);
console.log(nome, endereco);

var formataNome = ({ usuario }) => {
  var { nome, email } = usuario;

  if (email && nome) {
    return email + nome;
  }
  if (email) {
    return email;
  }
  if (nome) {
    return nome;
  }

  return '';
};

var resultado = formataNome({ usuario: usuario });
console.log(resultado);

function formataNome({ usuario: { nome, email } }) {
  if (email && nome) {
    return email + nome;
  }
  if (email) {
    return email;
  }
  if (nome) {
    return nome;
  }

  return '';
}

var resultado = formataNome({ usuario });
console.log(resultado);

var pessoas = [{ nome: 'p1' }, { nome: 'p2' }];
var [p1, p2] = pessoas;
console.log(p1);
console.log(p2);

var numeros = [1, 2, 3, 4, 5, 6];
var [p1, p2, p3, ...resto] = numeros;
console.log('p1', p1);
console.log('p2', p2);
console.log('resto', resto);

var { nome, login, ...resto2 } = usuario;
console.log(nome);
console.log(resto2);

// ----------
function imprime({ nome, email, ...resto }) {
  console.log(nome);
  console.log(resto);
}

imprime({
  nome: 'aaa',
  email: 'a@a',
  endereco: { rua: 'test' },
});

//-------------
var valores = [1, 2, 3];
var valores2 = [...valores, 4];
valores2.push(5);

console.log('Original', valores);
console.log('Copia', valores2);

var original = {
  nome: 'Maria',
  idade: 20,
};

var copia = { ...original, email: 'a@a.com' };
// var copia = original;
copia.nome = 'alteração';
delete copia.idade;
console.log('Original', original);
console.log('Copia', copia);

var nome = 'teste';
var user = {
  nome,
};

console.log(user);

var numeros = [1, 2, 2, 3, 3, 4, 4, 4];
var numerosUnicos = new Set(numeros);

numerosUnicos.add(5);
console.log(numerosUnicos);
