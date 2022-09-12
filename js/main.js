const botaoChute = document.querySelector('.btn-chute');
const numeroAleatorio = parseInt(Math.random() * 11);
const scoreTentativas = document.querySelector('.tentativas');
let tentativas = 3;
scoreTentativas.innerHTML = `Tentativas: ${tentativas}`;

console.log(numeroAleatorio);

const comparaChutes = (event) => {
    event.preventDefault();

    const inputChute = document.querySelector('#valor')
    let chute = inputChute.value;
    const resultado = document.querySelector('.resultado');

    if (chute >= 0 && chute <= 10) {

        if (chute == numeroAleatorio) {
            resultado.innerHTML = `Parabéns! Você acertou o número secreto.`;
            inputChute.outerHTML = `<input type="number" id="valor" disabled/>`;
            scoreTentativas.innerHTML = `Tentativas: 0`;
            return -1;
            
        } else if (chute >= numeroAleatorio) {
            resultado.innerHTML = `O número secreto é menor que ${chute} `;
        } else {
            resultado.innerHTML = `O número secreto é maior que ${chute}`;
        }

        tentativas = tentativas - 1;
        scoreTentativas.innerHTML = `Tentativas: ${tentativas}`;

        if (tentativas == 0 ) {
            resultado.innerHTML = `Fim de Jogo! O número secreto é ${numeroAleatorio}`;
            inputChute.outerHTML = `<input type="number" id="valor" disabled/>`;
            scoreTentativas.innerHTML = `Tentativas: 0`;
            return -1;
        }
    } else {
        resultado.innerHTML = `O número digitado é inválido!Informe um número entre 0 e 10.`;
    }
}


botaoChute.addEventListener('click', comparaChutes);