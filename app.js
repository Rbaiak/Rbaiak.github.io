const botao = document.querySelector('.botao')
const mensagem = document.querySelector('.conselho')
const loader = document.querySelector('.loader')

let data = ""

const url = `https://api.adviceslip.com/advice`

async function pegaConselho(){
    const resposta =  await fetch(`${url}`)
    data = await resposta.json()
   return data
}
botao.addEventListener('click',()=>{
    exibeConselho()
    loading()
})

async function exibeConselho(){
    await pegaConselho()
    let conselho = data.slip.advice
    mensagem.textContent = `The oracle says: ${conselho}`
}
function loading(){
    if(!botao.classList.contains('abaixo')){
        botao.classList.add('abaixo')
    }
}