function removeDefinition(elemento){
    elemento.remove();
}

function cambiarTexto(elemento){
    elemento.innerText = 'Logout';
}
function buttonLike(elemento){
    alert('Ninja was liked');
    elemento.querySelector('span').innerText ++;
}