function atualizarHora() {
    fetch("/TimeToWork/hora")
    .then(response => response.text())
    .then(data => {
        document.getElementById("hora_atual").innerText = data;
    });
}

setInterval(atualizarHora, 1000);

atualizarHora();