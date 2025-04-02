function conversor() {
    let umWon = 0.0040;

    let wons = parseFloat(document.getElementById("wonsValue").value);

    if (isNaN(wons) || wons <= 0){
        alert("Digite um valor válido!");
        return;
    }

    let valorConvertido = wons * umWon;

    exibirResposta(valorConvertido);
}


function exibirResposta(valorConvertido){
    document.getElementById("showResult").innerText = "Resultado: R$ " + valorConvertido.toFixed(2);
}