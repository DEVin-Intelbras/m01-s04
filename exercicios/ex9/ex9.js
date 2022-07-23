/* Obtem os elementos do html, como está sendo utilizado a função
 * getElementsByTagName que retorna um array precisamos obter a
 * primeira posição do array, pois neste exemplo é nela está o elemento,
 * já que possuímos apenas um elemento com essa tag no html
 */
const input = document.getElementsByTagName('input')[0];
const button = document.getElementsByTagName('button')[0];
const main = document.getElementsByTagName('main')[0];
const h2 = document.getElementsByTagName('h2');

// Função responsável por classificar a idade
function classificarIdade() {
  // Obtem o valor digitado no input
  const idade = parseInt(input.value);

  // Valida se não é um número válido ou é um número negativo
  if (isNaN(idade) || idade < 0) {
    // Chama a funcão para exibir a mensagem ao usuário
    exibeResultado('Idade inválida!');

    // Sai da função, assim não executa nada mais, evitando assim a utilização do else
    return;
  }

  // Valida se a idade informada é menor ou igual a 15
  if (idade <= 15) {
    // Chama a funcão para exibir a mensagem ao usuário
    exibeResultado(`Com ${idade} anos a pessoa é jovem.`);

    // Sai da função, assim não executa nada mais, evitando assim a utilização do else
    return;
  }

  // Valida se a idade informada é maior ou igual a 65
  if (idade >= 65) {
    // Chama a funcão para exibir a mensagem ao usuário
    exibeResultado(`Com ${idade} anos a pessoa é idosa.`);

    // Sai da função, assim não executa nada mais, evitando assim a utilização do else
    return;
  }

  // Só irá executar esse trecho de código abaixo se a idade for maior que 15 e menor que 65
  // Chama a funcão para exibir a mensagem ao usuário
  exibeResultado(`Com ${idade} anos a pessoa é adulta.`);
}

// Função responsável por exibir a mensagem ao usuário
const exibeResultado = (mensagem) => {
  // Valida se o h2 exista, por exemplo após validar um número
  if (h2[0]) {
    // Remove h2 para evitar que fique duplicando itens.
    h2[0].remove();
  }

  // Cria um elemento h2 para exibir o resultado
  const elemento = document.createElement('h2');
  // Adiciona a mensagem recebida por parâmetro na função no elemento h2 criado
  elemento.innerText = mensagem;

  // Adiciona o h2 criado, como filho do elemento main
  main.appendChild(elemento);
};

// Vincula ao evento de click do botão a função classificarIdade
button.onclick = classificarIdade;
