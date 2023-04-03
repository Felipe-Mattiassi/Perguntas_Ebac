const form = document.getElementById('form-area')
const numeroA = document.getElementById('numero-A')
const numeroB = document.getElementById('numero-B')
const menssagemParaUser = document.getElementById('mensagem')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    if (numeroA.value > numeroB.value) {
        menssagemParaUser.innerHTML = `Esta tudo certo, ${numeroA.value} é maior que ${numeroB.value}`
        numeroA.innerHTML = ''
        numeroB.innerHTML = ''
    }else {
        menssagemParaUser.innerHTML = `Erro: O numero <b>${numeroA.value}</b> é menor ou igual ao numero <b>${numeroB.value}</b>`
    }
    console.log(numeroA.value +' '+ numeroB.value)
})


