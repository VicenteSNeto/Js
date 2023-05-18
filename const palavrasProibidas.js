const palavrasProibidas = ['porra', 'carai', 'galado'];

var input = document.querySelector("#name");
var texto = input.value;
console.log(texto);

function verificarPalavrasProibidas(texto) {
  for (let i = 0; i < palavrasProibidas.length; i++) {
    if (texto.includes(palavrasProibidas[i])) {
      return true;
    }
  }
  return false;
}

const inputUsuario = 'Insira aqui o texto do usuário';

if (verificarPalavrasProibidas(inputUsuario)) {
  console.log('O texto contém palavras proibidas.');
  // ou faça algo apropriado para sua aplicação, como exibir uma mensagem de erro
} else {
  console.log('O texto está OK.');
  // ou faça algo apropriado para sua aplicação, como enviar o texto para outro serviço ou armazená-lo em um banco de dados
}