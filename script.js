const display = document.getElementById("display");


const numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operadores = ["+", "-", "*", "/", " "];

document.addEventListener('keydown', function (event) {
    let tecla = event.key;
    clicarNoBotao(tecla);

});

function deletar() {

    display.textContent = display.textContent.slice(0, -1);

}

function clicarNoBotao(tecla) {
    if (numeros.includes(tecla) || operadores.includes(tecla)) {

        let space = " ";
        if (numeros.includes(tecla)) {
            display.textContent += tecla;
        } else if (operadores.includes(tecla)) {
            display.textContent += space + tecla + space;

        }


    } else if (tecla === 'Backspace') {
        deletar();


    } else if (tecla === 'Enter') {
        calcula();

    }

}

function calcula() {

    let equacao = display.textContent;
    if(operadores.includes(equacao.charAt(0)) || operadores.includes(equacao.charAt(equacao.length - 1)) || operadores.includes(equacao.charAt(equacao.length -1))) {
        alert("Digite uma equação válida");
        return;
    }
    let array = equacao.split(" ");
    while (array.length > 1) {
        for (let i = 0; i < array.length; i++) {
            if (operadores.includes(array[i])) {

                if(array.includes("*")){
                    i = array.indexOf("*")

                }
                else if(array.includes("/")){
                    i = array.indexOf("/");
                }

                if (array[i] == operadores[0]) {
                    let primeiroNumero = parseInt(array[i - 1])
                    let numeroDois = parseInt(array[i + 1])
                    let soma = primeiroNumero + numeroDois;
                    array[i] = soma.toString();
                    array.splice(i + 1, 1);
                    array.splice(i - 1, 1);
                    break;

                } else if (array[i] == operadores[1]) {
                    let primeiroNumero = parseInt(array[i - 1])
                    let numeroDois = parseInt(array[i + 1])
                    let sub = primeiroNumero - numeroDois;
                    array[i] = sub.toString();
                    array.splice(i + 1, 1)
                    array.splice(i - 1, 1);
                    break;

                } else if (array[i] == operadores[2]) {
                    let primeiroNumero = parseInt(array[i - 1])
                    let numeroDois = parseInt(array[i + 1])
                    let multi = primeiroNumero * numeroDois;
                    array[i] = multi.toString();
                    array.splice(i + 1, 1)
                    array.splice(i - 1, 1);
                    break;

                } else if (array[i] == operadores[3]) {
                    let primeiroNumero = parseInt(array[i - 1])
                    let numeroDois = parseInt(array[i + 1])
                    let div = primeiroNumero / numeroDois;
                    array[i] = div.toString();
                    array.splice(i + 1, 1)
                    array.splice(i - 1, 1);
                    break;

                }
            }


        }


    }
    display.textContent = array[0];
}