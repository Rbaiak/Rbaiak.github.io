const custo = 5196
const botao = document.getElementById("meuBotao")
const resultado = document.getElementById('resultado')
const botao1 = document.getElementById('saiba')
const hidden = document.getElementById('esconder')

botao.addEventListener('click', () => {
    const valorInput = document.getElementById('meuInput').value;

    // Tenta converter o valor de entrada para um número
    const numero = Number(valorInput);

    // Verifica se o valor convertido é NaN (não é um número)
    if (isNaN(numero)) {
        window.alert("Insira apenas números");
    } else {
        resultado.textContent = "Você gastou aproximadamente " + (numero * custo) + " Litros d´água";
    }
    hidden.classList.remove('hidden')
});


