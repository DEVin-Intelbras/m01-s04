const clique = () => {
  const mensagem = document.createElement('p');
  mensagem.textContent = 'Clicou no botão';

  document.body.appendChild(mensagem);
};

const removeEvento = () => {
  botao.removeEventListener('click', clique);
};

const botao = document.getElementById('clique');
const botaoRemover = document.getElementById('remove');

botao.addEventListener('click', clique);
botaoRemover.onclick = removeEvento;

//--------

const handleSubmit = (event) => {
  event.preventDefault();

  console.log(event.target.email.value);
  console.log(event.target.senha.value);
};

const formLogin = document.getElementById('formLogin');
formLogin.onsubmit = handleSubmit;

///
const handleEmail = (event) => {
  console.log(event.target.value);
};

const emailInput = document.getElementById('email');
emailInput.onkeyup = handleEmail;
