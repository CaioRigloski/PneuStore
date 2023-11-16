let campoTelefone = document.getElementById('telefone')
let campoEmail = document.getElementById('email')
let campoNome = document.getElementById('nome')
let botaoEnvio =  document.getElementById('enviar-form')
let caixaMensagemErro = document.getElementById('mensagem-erro')
let mensagemErro = document.getElementById('mensagem-erro-texto')

// Monitora no clique no campo de telefone, para mascarar conforme patterns.
campoTelefone.addEventListener('keydown', event => mascaraTelefone(event))

// Monitora o clique no botão de envio do formulário e faz a checagem de patterns, mostrando o erro na tela, caso houver.
botaoEnvio.addEventListener('click', event => {
    let nomeValido = checarNome(campoNome.value)
    let emailValido = checarEmail(campoEmail.value)
    let telefoneValido = checarTelefone(campoTelefone.value)
    console.log(nomeValido, emailValido, telefoneValido)

    if(telefoneValido && emailValido && nomeValido) {
        return true
    } else {
        caixaMensagemErro.style.display = 'block'

        if(!nomeValido) {
            mensagemErro.innerText = "Nome inválido"
        } else if(!emailValido) {
            mensagemErro.innerText = "E-mail inválido"
        } else {
            mensagemErro.innerText = "Telefone inválido"
        }

        setTimeout(() => {
            caixaMensagemErro.style.display = 'none'
        }, 2000)
        event.preventDefault()
    }
})

function mascaraTelefone(event) {
    let tecla = event.key;
    // Regex: 
    // g = não termina verificação enquanto não houver combinação para todos os elementos.
    // \D+ = troca qualquer caractere que não seja um dígito por caracter vazio.
    let telefone = event.target.value.replace(/\D+/g, "");

    // Regex: i = case insensitive.
    // Se Tecla é número, concatena com telefone.
    if (/^[0-9]$/i.test(tecla)) {
        let tamanho = telefone.length;

        if (tamanho > 10) { 
        telefone = telefone.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
        } else if (tamanho > 5) { 
        telefone = telefone.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
        } else if (tamanho > 2) { 
        telefone = telefone.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
        } else {
        telefone = telefone.replace(/^(\d*)/, "($1");
        }

        event.target.value = telefone;
    }

    if (!["Backspace", "Delete", "Tab"].includes(tecla)) {
        return false;
    }
}

// checagens de pattern
function checarTelefone(telefone) {
    return /\(\d{2}\)\s\d{4,5}-\d{4}$/.test(telefone)
}

function checarEmail(email) {
    return /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/.test(email)
}

function checarNome(nome) {
    return /[A-Za-z\W+ ]{2,100}$/.test(nome)
}