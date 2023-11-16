let params = new URLSearchParams(location.search);

//recebe os paramêtros da URL e mostra na página os dados do cliente enviados pelo formulário.
for (const [key, value] of params.entries()) {
    let dado = document.getElementById(key + '-cliente')
    dado.innerText = value
}