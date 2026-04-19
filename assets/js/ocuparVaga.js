function ocuparVaga(cxVaga, vaga){
    estacionamento = JSON.parse(localStorage.getItem("estacionamento"));
    vaga = parseInt(vaga);
    if(vaga == 0){
        alert("Erro! Selecione uma vaga de estacionamento!");
        cxVaga.focus();
        return false;
    }else if(estacionamento[vaga-1].disponibilidade == "Ocupada"){
        alert("Erro! Essa vaga de estacionamento já está ocupada!");
        cxVaga.focus();
        return false;
    }
    estacionamento[vaga-1].disponibilidade = "Ocupada";
    localStorage.setItem("estacionamento", JSON.stringify(estacionamento));
    console.log("A vaga " + vaga + " foi ocupada com sucesso!");
    return true;
}