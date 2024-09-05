//console.log("hollalallalal",document.querySelector('p'))
const seleccionarNombre = document.getElementById('nombre');
const seleccionarMensaje = document.getElementById('mensaje');
const seleccionarMesajeExitoso = document.getElementById('mensajeExitoso');

function validarInputNombre (){
    const valorInput = seleccionarNombre.value;

    if (valorInput === '') {
        seleccionarNombre.classList.add('invalido');
        seleccionarNombre.classList.remove('valido');
        seleccionarMensaje.classList.add('d-block');
        seleccionarMesajeExitoso.classList.remove('texto_verde');
    } else {
        seleccionarNombre.classList.add('valido');
        seleccionarNombre.classList.remove('invalido');
        seleccionarMensaje.classList.remove('d-block');
        seleccionarMesajeExitoso.classList.add('texto_verde');
    }
}
    

seleccionarNombre.addEventListener('input', validarInputNombre);