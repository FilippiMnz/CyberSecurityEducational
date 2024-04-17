//função para emular maquina de escrever 
//----------------------> Inicio Maquina de Escrever
function KeyWritring(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() =>
            elemento.innerHTML += letra, 80 * i);
    });
}

const Cyber = document.querySelector('.cyber');
const Educa = document.querySelector('.educa');
KeyWritring(Cyber);
KeyWritring(Educa);

//--------------------> Fim Maquina de Escrever