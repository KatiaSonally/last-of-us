/* 
	OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

    - passo 1 - dar um jeito de pegar o elemento HTML dos botões

	- passo 2 - dar um jeito de identificar o clique do usuário no botão

	- passo 3 - desmarcar o botão selecionado anterior

	- passo 4 - marcar o botão clicado como se estivesse selecionada

	- passo 5 - esconder a imagem de fundo anterior

	- passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
*/

//- passo 1 - dar um jeito de pegar o elemento HTML dos botões

const botoesCarrossel = document.querySelectorAll('.botao');

//- passo 2 - dar um jeito de identificar o clique do usuário no botão
const botao1 = document.getElementById('botao1');
botao1.addEventListener('click', () => {
	//- passo 3 - desmarcar o botão selecionado anterior
	const botaoSelecionado = document.querySelector('.selecionado');
	botaoSelecionado.classList.remove("selecionado")
})