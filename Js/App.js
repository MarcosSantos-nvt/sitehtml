var imput = document.getElementById('quantidade');
var botaoincrementa = document.querySelector("#btn-incrementa");
var botaodecrementa = document.querySelector('#btn-decrementa');
botaodecrementa.addEventListener('click', decrementa);
botaoincrementa.addEventListener('click', incrementa);

function incrementa(){
    imput.value++;
}

function decrementa(){
    imput.value--;
}


