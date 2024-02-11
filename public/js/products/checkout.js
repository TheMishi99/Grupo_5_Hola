let botonEnvio = document.querySelector(".shipping")
let botonRetiro = document.querySelector(".pick-up")
let formEnvio = document.querySelector(".shipping-form")
let inputRetiro = document.querySelector(".input-pick-up")
let gifGato = document.querySelector(".catGif")
let botonConfirm = document.querySelector(".confirm-button")

botonEnvio.addEventListener('click', function(event){
    inputRetiro.style.display = 'none';
    formEnvio.style.display = 'block';
    gifGato.style.display = 'block';
    botonRetiro.style.backgroundColor="white"
    botonEnvio.style.backgroundColor="rgb(217, 118, 82)";
    event.preventDefault();
});

botonRetiro.addEventListener('click', function(event){
    formEnvio.style.display = 'none';
    gifGato.style.display = 'none';
    inputRetiro.style.display = 'block';
    botonEnvio.style.backgroundColor="white"
    botonRetiro.style.backgroundColor="rgb(217, 118, 82)";
    event.preventDefault();
});

function mostrarVentana() {
    // Crear un elemento div para la ventana emergente
    var ventanaEmergente = document.createElement('div');
    ventanaEmergente.className = 'ventana-emergente';

    // Crear el contenido de la ventana emergente
    var contenido = document.createElement('div');
    contenido.className = 'contenido';
    contenido.innerHTML = '<p>¡Compra realizada con éxito!</p>';

    // Crear un botón para cerrar la ventana emergente
    var botonCerrar = document.createElement('button');
    botonCerrar.textContent = 'Cerrar';
    botonCerrar.onclick = function() {
        // Remover la ventana emergente cuando se hace clic en el botón "Cerrar"
        document.body.removeChild(ventanaEmergente);
        // Redireccionar al inicio de la página
        window.location.href = "/";
    };

    // Agregar el contenido y el botón de cierre a la ventana emergente
    ventanaEmergente.appendChild(contenido);
    ventanaEmergente.appendChild(botonCerrar);

    // Agregar la ventana emergente al cuerpo del documento
    document.body.appendChild(ventanaEmergente);
    
    // event.preventDefault();
}