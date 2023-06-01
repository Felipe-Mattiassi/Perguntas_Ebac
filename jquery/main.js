
$(document).ready(function(){
    const nomeBeneficiario = $('#nome')
    let nomeEValido = false
    console.log(nomeBeneficiario)
    
    function validaNome(nomeCompleto) {
        const nomeComoArrey = nomeCompleto.split(' ')
        return nomeComoArrey.length >= 2
    }
    
    $('form').on('submit', function(e){
        e.preventDefault()
        console.log(nomeBeneficiario.val().length)
        nomeEValido = validaNome(nomeBeneficiario)
        mensagemSucesso = `A transação foi um sucesso`
        if(nomeEValido) {
            console.log(validaNome(nomeBeneficiario.val()))
        }
        else{
            alert('Nome errado ')
        }

    })
})