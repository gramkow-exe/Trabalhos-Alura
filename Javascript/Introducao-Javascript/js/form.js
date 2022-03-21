var botaoAdcionar = document.querySelector("#adicionar-paciente")

botaoAdcionar.addEventListener("click",function(){
    event.preventDefault();
    
    var form = document.querySelector("#form-adcionar");
    var paciente = obtemPacienteFormulario(form);
    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagemDeErros(erros);
        return;
    }

    adcionaPacienteTabela(paciente);
    
    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function obtemPacienteFormulario(form){

    var paciente = {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc: calculaIMC(form.peso.value,form.altura.value)
    }
    return paciente;
}

function montaTR(paciente){
    var pacienteTR = document.createElement("tr");
    pacienteTR.classList.add("paciente");
    
    pacienteTR.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTR.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTR.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTR.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTR.appendChild(montaTd(paciente.imc,"info-imc"));

    return pacienteTR;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe)
    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("O nome está em branco!")
    }

    if (!validaPeso(paciente.peso)){
        erros.push("Peso Inválido!");
    }
    
    if (!validaAltura(paciente.altura)){
        erros.push("Altura Inválida!");
    }

    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser nula!")
    }

    if(paciente.peso.length == 0){
        erros.push("O peso não pode ser nulo!")
    }

    if(paciente.altura.length == 0){
        erros.push("A altura não pode ser nula!")
    }

    return erros;
}
function exibeMensagemDeErros(erros){
    var ul = document.querySelector("#mensagens-erro")
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li")
        li.textContent = erro;
        ul.appendChild(li);
    })
}

function adcionaPacienteTabela(paciente){
    var pacienteTR = montaTR(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTR);
}