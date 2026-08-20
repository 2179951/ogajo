const ope1 = document.getElementById("op1"); // apanhar por id
const ope2 = document.getElementById("op2");
const resultado = document.getElementById("resultado");
//const botao = document.querySelector("button") //não é necessário, pois cada botão tem o seu próprio evento
//botao.addEventListener("click", calcular);

function calcular(operacao) {
    let op1 = parseFloat(ope1.value);
    let op2 = parseFloat(ope2.value);
    let resultadoFinal;

    switch (operacao) { //Como passo um valor para a função calcular, posso usar um switch para determinar qual operação realizar
        case 1: // Multiplicação
            resultadoFinal = op1 * op2;
            break;
        case 2: // Adição
            resultadoFinal = op1 + op2;
            break;
        case 3: // Subtração
            resultadoFinal = op1 - op2;
            break;
        case 4: // Divisão
            if (op2 !== 0) {
                resultadoFinal = op1 / op2;
            } else {
                resultadoFinal = "Erro: Divisão por zero";
            }
            break;
        default:
            resultadoFinal = "Operação inválida";
    }

    resultado.innerHTML = "Resultado: " + resultadoFinal;
}