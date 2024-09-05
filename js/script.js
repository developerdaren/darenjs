//console.log("hollalallalal",document.querySelector('p'))
const seleccionarNombre = document.getElementById('nombre');
const seleccionarMensaje = document.getElementById('mensaje');

function validarInputNombre (){
    const valorInput = seleccionarNombre.value;

    if (valorInput === '') {
        seleccionarNombre.classList.add('invalido');
        seleccionarNombre.classList.remove('valido');
        seleccionarMensaje.classList.add('d-block');

    } else {
        seleccionarNombre.classList.add('valido');
        seleccionarNombre.classList.remove('invalido');
        seleccionarMensaje.classList.remove('d-block');
    }
}
    

seleccionarNombre.addEventListener('input', validarInputNombre);