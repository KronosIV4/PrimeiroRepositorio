let listaDeNumerosSorteados = [];
let limiteTentativas = 10;
let numeroAleatorio = geraNumeroAleatorio();
let tentativas = 1;

function geraNumeroAleatorio(){
    let numeroGerado  =  parseInt(Math.random() * limiteTentativas + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == limiteTentativas){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroGerado)){
        
        return geraNumeroAleatorio();

    } else {

        listaDeNumerosSorteados.push(numeroGerado);
        return numeroGerado;
    }

}

function limpaCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function novoJogo(){
    tentativas = 1;
    numeroAleatorio = geraNumeroAleatorio();
    limpaCampo();    
    exibeMensagemInicial()

    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function verificaChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroAleatorio) {
        
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativas';
        let mensagemTentativa = `Você descobriu o número secreto ${numeroAleatorio} com ${tentativas} ${palavraTentativa}!`
            exibeTextoNaTela('p', mensagemTentativa);
            exibeTextoNaTela('h1', 'Parabéns!');
        
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else if(chute > numeroAleatorio){

        exibeTextoNaTela('p', 'O número secreto é menor!');

    } else {

        exibeTextoNaTela('p', 'O número secreto é maior!');
    }

    tentativas +=1;
    limpaCampo();
    
}



function exibeTextoNaTela(elemento, texto){
    let campo = document.querySelector(elemento);
        campo.innerHTML = texto;
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});

}
    exibeTextoNaTela('h1', 'Jogo do número secreto!');
    exibeTextoNaTela('p', 'Escolha um  número entre 1 e 10!');


function exibeMensagemInicial(){
    exibeTextoNaTela('h1', 'Jogo do número secreto!');
    exibeTextoNaTela('p', 'Escolha um  número entre 1 e 10!');
}

