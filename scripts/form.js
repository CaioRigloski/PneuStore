let campoTelefone = document.getElementById('telefone')
let campoEmail = document.getElementById('email')
let campoNome = document.getElementById('nome')

campoTelefone.addEventListener('keyup', event => mascaraTelefone(event))
campoEmail.addEventListener('keyup', event => console.log(checarEmail(campoEmail.value)))
campoNome.addEventListener('keyup', event => console.log(checarNome(campoNome.value)))

function mascaraTelefone(event) {
    let tecla = event.key;
    // Regex: 
    // g = não termina verificação enquanto não houver combinação para todos os elementos  
    // \D+ = troca qualquer caractere que não seja um dígito por caracter vazio
    let telefone = event.target.value.replace(/\D+/g, "");
    //let telefone = campoTelefone.value.replace(/\D+/g, "");
    console.log(telefone)
    // Regex: i = case insensitive
    // Se Tecla é número, concatena com telefone
    if (/^[0-9]$/i.test(tecla)) {
        //telefone = telefone + tecla;
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

function checarEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(email)
}

function checarNome(nome) {
    console.log(/^[a-záàâãéèêíïóôõöúçñ ]{2,100}$/i.test(nome))
    return /^[a-záàâãéèêíïóôõöúçñ ]{2,100}$/i.test(nome)
}