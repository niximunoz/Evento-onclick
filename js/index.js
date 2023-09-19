function removeDefinition(elemento){
    elemento.remove();
}

function cambiarTexto(elemento){
    if(elemento.innerText == 'Login'){
        elemento.innerText = 'Logout';
    }else{
        elemento.innerText = 'Login';
    }
    
}
function buttonLike(elemento){
    alert('Ninja was liked');
    elemento.querySelector('span').innerText ++;
}