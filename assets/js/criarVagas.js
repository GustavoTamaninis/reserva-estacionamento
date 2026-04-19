document.addEventListener("DOMContentLoaded", function() {
    if(localStorage.getItem("estacionamento") === null){
        vagas = [
            {vaga: "01", disponibilidade: "Disponível"},
            {vaga: "02", disponibilidade: "Disponível"},
            {vaga: "03", disponibilidade: "Disponível"},
            {vaga: "04", disponibilidade: "Disponível"},
            {vaga: "05", disponibilidade: "Disponível"},
            {vaga: "06", disponibilidade: "Disponível"},
            {vaga: "07", disponibilidade: "Disponível"},
            {vaga: "08", disponibilidade: "Disponível"},
            {vaga: "09", disponibilidade: "Disponível"},
            {vaga: "10", disponibilidade: "Disponível"}
        ];
        localStorage.setItem("estacionamento", JSON.stringify(vagas));
        // vagasRecuperadas = JSON.parse(localStorage.getItem("estacionamento", vagas));
        // alert(vagasRecuperadas[1].disponibilidade);
    }
});