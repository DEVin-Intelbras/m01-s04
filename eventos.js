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

// TODOS
const todos = [];

const inputTodo = document.getElementById('descricao');
const formTodo = document.getElementById('formTodo');
const list = document.getElementById('list');

const addTodos = (descricao) => {
  const item = document.createElement('li');
  item.textContent = descricao;
  list.appendChild(item);
};

const handleSubmitTodo = (event) => {
  event.preventDefault();
  const input = event.target.descricao;

  const descricao = input.value;
  todos.push(descricao);
  addTodos(descricao);
  input.value = '';
};

const handleFilter = (event) => {
  const descricao = event.target.value;

  const newTodos = todos.filter((todo) =>
    todo.toLocaleLowerCase().includes(descricao.toLocaleLowerCase())
  );

  list.innerHTML = '';
  newTodos.forEach((todo) => {
    addTodos(todo);
  });
};

formTodo.onsubmit = handleSubmitTodo;
inputTodo.onkeyup = handleFilter;
