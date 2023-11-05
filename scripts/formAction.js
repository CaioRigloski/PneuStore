let params = new URLSearchParams(location.search);

for (const [key, value] of params.entries()) {
    let dado = document.getElementById(key + '-cliente')
    dado.innerText = value
}