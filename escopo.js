const comidas = [
  {
    id: 1,
    nome: 'x-tudo',
    valor: 30.0,
  },
  {
    id: 2,
    nome: 'x-bacon',
    valor: 35.0,
  },
  {
    id: 3,
    nome: 'x-salada',
    valor: 20,
  },
];

const exibeMenu = () => {
  comidas.forEach((comida) => {
    console.log(`${comida.id} - ${comida.nome} ............... ${comida.valor}`);
  });
};

const comprar = (itens) => {
  let total = 0;

  itens.forEach((id) => {
    const comida = comidas.find((comida) => comida.id === id);
    total += comida.valor;
  });

  return total;
};

exibeMenu();

const totalAPagar = comprar([3]);
console.log('Total a pagar:', totalAPagar);
