document.addEventListener("DOMContentLoaded", function() {
    const lista = document.getElementById("lista");
    estacionamento = JSON.parse(localStorage.getItem("estacionamento"));
    if(estacionamento != null){
        estacionamento.forEach(estacionamento => {
            lista.innerHTML += "<tr><td>" + estacionamento.vaga + "</td>" + "<td>" + estacionamento.disponibilidade + "</td></tr>";
        });
    }else{
        lista.innerHTML += "<tr><td colspan=2>Não há vagas no estacionamento...</td><tr>";
    }
});