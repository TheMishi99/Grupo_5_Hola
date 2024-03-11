let botonEnviar = document.querySelector(".confirm-button")

botonEnviar.addEventListener('click', function(event){
    event.preventDefault();
    console.log("Hola")
});

function mostrarVentana() {
    // Crear un elemento div para la ventana emergente
    var ventanaEmergente = document.createElement('div');
    ventanaEmergente.className = 'ventana-emergente';

    // Crear el contenido de la ventana emergente
    var contenido = document.createElement('div');
    contenido.className = 'contenido';
    contenido.innerHTML = '<p>¡Gracias por el comentario!</p>';

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
    
    event.preventDefault();
}