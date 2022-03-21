console.log("Carregado de um arquivo externo!")

var titulo = document.querySelector(".titulo")

titulo.textContent = "Aparecida Nutricionista"


var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i ++){
    
    paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdIMC = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!pesoValido){
        console.log("Peso inválido!")
        pesoValido = false;
        tdPeso.textContent = "Peso inválido";
        tdIMC.textContent = "Peso inválido!"
        paciente.classList.add("paciente_invalido")
        
    }
    if (!alturaValida){
        console.log("Altura inválida!")
        alturaValida = false;
        tdAltura.textContent = "Altura inválida"
        tdIMC.textContent = "Altura inválida!"
        paciente.classList.add("paciente_invalido")
        
    }
    
    if (pesoValido && alturaValida){
        var imc = calculaIMC(peso,altura);
        tdIMC.textContent = imc;
    }else if(!pesoValido && !alturaValida){
        tdIMC.textContent = "Peso e Altura inválidas";
    }
}


function calculaIMC(peso,altura){
    var imc = 0;

    imc = peso / altura**2;

    return imc.toFixed(2);
}

function validaPeso(peso){
    if (peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}
function validaAltura(altura){
    if (altura>=0 && altura<3.00){
        return true;
    }else{
        return false;
    }
}