const botao1 = document.getElementById('saiba')
const hidden = document.getElementById('esconder')

botao1.addEventListener('click', ()=>{
    hidden.classList.toggle('hidden')
})
