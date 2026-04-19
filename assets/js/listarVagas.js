document.addEventListener("DOMContentLoaded", function() {
    const lista = document.getElementById("lista");
    reservas = JSON.parse(localStorage.getItem("vagas"));
    if(reservas != null){
        reservas.forEach(reserva => {
            lista.innerHTML += "<tr><td>" + reserva.vaga + "</td>" + "<td>" + reserva.disponibilidade + "</td></tr>";
        });
    }else{
        lista.innerHTML += "<tr><td colspan=2>Não há vagas...</td><tr>";
    }
});