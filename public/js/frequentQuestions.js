let boton1 = document.querySelector(".q1")
let boton2 = document.querySelector(".q2")
let boton3 = document.querySelector(".q3")
let boton4 = document.querySelector(".q4")
let pregunta1 = document.querySelector(".question-1")
let pregunta2 = document.querySelector(".question-2")
let pregunta3 = document.querySelector(".question-3")
let pregunta4 = document.querySelector(".question-4")

boton1.addEventListener('click', function(event){
    event.preventDefault();
    pregunta2.style.display = 'none';
    pregunta3.style.display = 'none';
    pregunta4.style.display = 'none';
    pregunta1.style.display = 'block';
});

boton2.addEventListener('click', function(event){
    console.log("hola")
    event.preventDefault();
    pregunta1.style.display = 'none';
    pregunta3.style.display = 'none';
    pregunta4.style.display = 'none';
    pregunta2.style.display = 'block';
});

boton3.addEventListener('click', function(event){
    event.preventDefault();
    pregunta1.style.display = 'none';
    pregunta2.style.display = 'none';
    pregunta4.style.display = 'none';
    pregunta3.style.display = 'block';
});

boton4.addEventListener('click', function(event){
    event.preventDefault();
    pregunta1.style.display = 'none';
    pregunta2.style.display = 'none';
    pregunta3.style.display = 'none';
    pregunta4.style.display = 'block';
});