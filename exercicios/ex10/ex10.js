// Obtem elementos do html para utilizar no JS
const input = document.getElementById('data');
const estacao = document.getElementById('estacao');
const imagem = document.getElementById('img');

// Função responsável por atualizar as informações no html
const atualizaEstacao = ({ texto, url }) => {
  // Atualiza o texto do h2 com o nome da estação
  estacao.innerText = texto;
  // Atualiza a imagem com a imagem da estação
  imagem.src = url;
};

// Função responsável por verificar qual é a estação do ano
const verificaEstacao = (event) => {
  /* Converte a string recebida do input em Data,
   * foi adicionado os minutos com 00:00 para evitar problema
   * de utc que deixaria a data como o dia anterior ao
   * selecionado por causa do utc -3
   */
  const dataFormatada = new Date(`${event.target.value} 00:00`);

  // Valida se a data não é válida
  if (!(dataFormatada instanceof Date) || isNaN(dataFormatada)) {
    // Exibe um alerta ao usuário
    alert('Data inválida');
    // Sai fora da função e não executa o código abaixo
    return;
  }

  // Obtem o dia da data
  const dia = dataFormatada.getDate();
  // Obtem o mes da data. Em JS o mes inicia em 0 por isso o + 1
  const mes = dataFormatada.getMonth() + 1;

  /* Valida se a data informada está dentro do periodo do outono
   * 22/03 a 21/06 - Outono;
   */
  if ((dia >= 22 && mes === 3) || mes === 4 || mes === 5 || (dia <= 21 && mes === 6)) {
    // Chama a funcão para atualizar o html passando os parametros referente à estação
    atualizaEstacao({ texto: 'Outono', url: './assets/outono.webp' });
    // Sai fora da função e não executa o código abaixo
    return;
  }

  /* Valida se a data informada está dentro do periodo do outono
   * 22/06 a 21/09 - Inverno;
   */
  if ((dia >= 22 && mes === 6) || mes === 7 || mes === 8 || (dia <= 21 && mes === 9)) {
    // Chama a funcão para atualizar o html passando os parametros referente à estação
    atualizaEstacao({ texto: 'Iverno', url: './assets/inverno.jpeg' });
    // Sai fora da função e não executa o código abaixo
    return;
  }

  /* Valida se a data informada está dentro do periodo do outono
   * 22/09 a 21/12 - Primavera;
   */
  if ((dia >= 22 && mes === 9) || mes === 10 || mes === 11 || (dia <= 21 && mes === 12)) {
    // Chama a funcão para atualizar o html passando os parametros referente à estação
    atualizaEstacao({ texto: 'Primavera', url: './assets/primavera.jpeg' });
    // Sai fora da função e não executa o código abaixo
    return;
  }

  // Caso não for nenhuma das datas a cima só pode ser verão então por isso não tem if validando
  // Chama a funcão para atualizar o html passando os parametros referente à estação
  atualizaEstacao({ texto: 'Verão', url: './assets/verao.webp' });
};

input.onchange = verificaEstacao;
