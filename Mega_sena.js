function sorteio(megaSena){
    var sorteio = [];
    for(var i = 0; i < 6; i++){
        sorteio.push(getRandomInt(0,60)) //criando array com 6 números inteiros
    }
    if (megaSena == sorteio){ // testando se o sorteio anteior deu o mesmo valor
        sorteio();
    }
    return sorteio
}

function getRandomInt(min, max){ //randomização de números inteiros
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var megaSena = [];

megaSena = sorteio(megaSena);

console.log(`Números sorteados: [${megaSena}] \nParabéns!!!`)








