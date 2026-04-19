function validarForm(){

    const cxPlaca = document.getElementById("placa");
    const cxNome = document.getElementById("nome");
    const cxAptoNum = document.getElementById("aptoNum");
    const cxAptoBloco = document.getElementById("aptoBloco");
    const cxModelo = document.getElementById("modelo");
    const cxCor = document.getElementById("cor");
    const cxVaga = document.getElementById("vaga");

    const placa = cxPlaca.value.trim();
    const nome = cxNome.value.trim();
    const aptoNum = cxAptoNum.value.trim();
    const aptoBloco = cxAptoBloco.value.trim();
    const modelo = cxModelo.value.trim();
    const cor = cxCor.value.trim();
    const vaga = cxVaga.value.trim();

    const regexPlaca = /^[A-Z]{3}-?\d{4}$|^[A-Z]{3}\d[A-Z]\d{2}$/i;
    const regexNome = /^[a-záàâãéèêíïóôõöúçñ\s]{4,40}$/i;
    const regexAptoNum = /^\d{1,4}$/;
    const regexAptoBloco = /^[a-z0-9]{1,10}$/i;
    const regexModelo = /^[a-z0-9\s\-]{2,40}$/i;
    const regexCor = /^[a-záàâãéèêíïóôõöúçñ\s]{3,20}$/i;

    if(!validarCampo(cxPlaca, placa, regexPlaca, "Placa do Veículo")) return false;
    if(!validarCampo(cxNome, nome, regexNome, "Nome do Proprietário")) return false;
    if(!validarCampo(cxAptoNum, aptoNum, regexAptoNum, "Número do Apartamento")) return false;
    if(!validarCampo(cxAptoBloco, aptoBloco, regexAptoBloco, "Bloco do apartamento")) return false;
    if(!validarCampo(cxModelo, modelo, regexModelo, "Modelo do Veículo")) return false;
    if(!validarCampo(cxCor, cor, regexCor, "Cor do Veículo")) return false;
    if(!ocuparVaga(cxVaga, vaga)) return false;

    let c = localStorage.getItem("contador");
    if(c){
        localStorage.setItem("contador", parseInt(c) + 1);
    }else{
        localStorage.setItem("contador", 0);
    }

    cadastrar("placa", placa);
    cadastrar("nome", nome);
    cadastrar("aptoNum", aptoNum);
    cadastrar("aptoBloco", aptoBloco);
    cadastrar("modelo", modelo);
    cadastrar("cor", cor);

    alert("Cadastro realizado com sucesso!");
    return true;
}

function validarCampo(cx, valor, regex, mensagem){
    if(valor == "" || !regex.test(valor)){
        alert("Erro! Preencha corretamente o campo " + mensagem + "!");
        cx.focus();
        return false;
    }
    console.log("Armazenado " + valor + " em " + mensagem);
    return true;
}

function cadastrar(chave, valor){
    localStorage.setItem(chave + localStorage.getItem("contador").toString(), valor);
    return true;
}