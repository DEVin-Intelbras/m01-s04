// Cria array de clientes simulando um banco de dados
let contasClientes = [
  {
    id: 1,
    nome: 'Cliente 01',
    saldo: 500,
    senha: '1234',
  },
  {
    id: 2,
    nome: 'Cliente 02',
    saldo: 3000,
    senha: '12345',
  },
  {
    id: 3,
    nome: 'Cliente 03',
    saldo: 5000,
    senha: '123456',
  },
];

// Cria constante de tipos de erro
const MESSAGE_TYPE = {
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
};

// Cria contante para armazenar as operacões
const OPERACAO_CONTA = {
  SACAR: 1,
  DEPOSITAR: 2,
};

// Obtem elementos do html para utilizar no JS
const selectConta = document.getElementById('conta');
const strongMensagem = document.getElementById('mensagem');
const form = document.getElementById('form');
const body = document.body;

// Função responsável por criar uma opção e retornar ela, essa função recebe como parametro o valor e o texto para criar a opção
const adicionaOpcao = (value, text) => {
  // Cria opção
  const option = document.createElement('option');

  // Adiciona o valor
  option.value = value;

  // Adiciona o texto
  option.textContent = text;

  // Adiciona id à option
  option.id = value;

  // Adiciona opção criada no select
  selectConta.appendChild(option);
};

// Função responsável por popular o select
const populaSelect = () => {
  // Limpa opções do select
  selectConta.innerHTML = '';

  //Adiciona opção selecione no select
  adicionaOpcao('0', '(Selecione)');

  // Cria as opções do select
  contasClientes.forEach((conta) => {
    // Adiciona a opção no select
    adicionaOpcao(conta.id, conta.nome);
  });
};

// Adiciona a chamada para a função populaSelectContas ao evento de load do body
body.onload = populaSelect;

// Função responsável por exibir mensagens
const exibirMensagem = (mensagem, type = MESSAGE_TYPE.ERROR) => {
  // Adiciona texto da mensagem
  strongMensagem.textContent = mensagem;

  // Adiciona classe para estilização de acordo com o tipo
  strongMensagem.className = type === MESSAGE_TYPE.ERROR ? 'error' : 'success';
};

// Função responsável por validar se o valor é valido
const validarValor = (valor) => {
  // Verifica se não é um número ou se esse número é menor ou igual a 0 retorna false
  if (isNaN(valor) || valor <= 0) {
    return false;
  }

  //Caso seja um número e ele for mais que 0 retorna true
  return true;
};

// Função responsável por atualizar o saldo do array original
const atualizaSaldo = (contaAtual, saldo) => {
  // Obtem novo array sem a conta atual
  const contasSemContaAtual = contasClientes.filter((c) => c.id !== contaAtual.id);

  // Cria uma nova conta a cópia da conta original e atualiza o saldo
  const contaAtualizada = { ...contaAtual, saldo };

  // Cria um novo array com as contas sem a conta atual + a conta atual com saldo atualizado
  const contasAtualizadas = [...contasSemContaAtual, contaAtualizada];

  // Atribuiu a variável contasClientes o array novo array com saldo atualizado
  contasClientes = contasAtualizadas;
};

// Função responsável por validar se o valor é valido
const validarSaldo = (valor, saldo) => {
  // Verifica se o valor é maior que o saldo, se for retorna false
  if (valor > saldo) {
    return false;
  }

  //Caso seja menor retorna true
  return true;
};

// Função responsável por obter a conta
const obterConta = (contaId) => {
  return contasClientes.find((conta) => conta.id === contaId);
};

// Função responável por sacar o valor de uma conta X
const sacar = (contaAtual, valor) => {
  // Valida se o valor não é valido e exibe mensagem saindo da função
  if (!validarValor(valor)) {
    exibirMensagem('Valor inválido. Verifique e tente novamente!');
    return;
  }

  // Valida se o saldo é insuficiente e exibe mensagem saindo da função
  if (!validarSaldo(valor, contaAtual.saldo)) {
    exibirMensagem(`Saldo insuficiente. Saldo atual: ${contaAtual.saldo}`);
    return;
  }

  // Verifica Saldo após o saque
  const novoSaldo = contaAtual.saldo - valor;

  // Chama função que executa a atualização do saldo no array original
  atualizaSaldo(contaAtual, novoSaldo);

  // Exibe mensagem que o saque foi efetuado com sucesso
  exibirMensagem(`Saque efetuado com sucesso! Saldo atual: ${novoSaldo}.`, MESSAGE_TYPE.SUCCESS);
};

// Função responável por depositar o valor de uma conta X
const depositar = (contaAtual, valor) => {
  // Valida se o valor não é valido e exibe mensagem saindo da função
  if (!validarValor(valor)) {
    exibirMensagem('Valor inválido. Verifique e tente novamente!');
    return;
  }

  // Verifica Saldo após o saque
  const novoSaldo = contaAtual.saldo + valor;

  // Chama função que executa a atualização do saldo no array original
  atualizaSaldo(contaAtual, novoSaldo);

  // Exibe mensagem que o saque foi efetuado com sucesso
  exibirMensagem(`Deposito efetuado com sucesso! Saldo atual: ${novoSaldo}.`, MESSAGE_TYPE.SUCCESS);
};

// Função chamada no clique do botão confirmar
const realizarOperacao = (event) => {
  // Evita o refresh da página e não executa as funcionalidades default do evento de submit do form
  event.preventDefault();

  // Obtem os valores selecionados no form
  const contaId = parseInt(event.target.conta.value);
  const valor = parseFloat(event.target.valor.value);
  const operacao = parseInt(event.target.operacao.value);
  const senha = event.target.senha.value;

  // Valida se tem algum valor não informado e exibe mensagem
  if (!validarValor(contaId) || !validarValor(valor) || !validarValor(operacao)) {
    exibirMensagem('Campos inválidos. Verifique e tente novamente.');
    return;
  }

  if (!senha) {
    exibirMensagem('Informe a senha!');
    return;
  }

  // Obtem a conta atual do array através do id
  const contaAtual = obterConta(contaId);

  // Valida se a conta não existe e exibe mensagem
  if (!contaAtual) {
    exibirMensagem('Conta não encontrada. Verifique e tente novamente.');
    return;
  }

  // Valida se as senhas são diferentes e exibe mensagem
  if (contaAtual.senha !== senha) {
    exibirMensagem('Senha inválida!');
    return;
  }

  // Valida operações e chama função corrreta de acordo com a operação selecionada no select
  switch (operacao) {
    case OPERACAO_CONTA.SACAR:
      sacar(contaAtual, valor);
      break;
    case OPERACAO_CONTA.DEPOSITAR:
      depositar(contaAtual, valor);
      break;
    default:
      exibirMensagem('Operação inválida. Verifique e tente novamente.');
      break;
  }
};

// Adiciona a chamada para a função realizarOperacao ao evento de onsubmit do form
form.onsubmit = realizarOperacao;
