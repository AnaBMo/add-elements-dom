 // Aquí tu código

/* Primero debemos capturar el botón de agregar para crear el evento sobre él */
const agregar = document.getElementById('agregar');

/* Cuando se haga clic en el botón, debe aparecer el prompt para escribir el elemento. */
agregar.addEventListener('click', function() {
    const elemento = prompt("Escribe un elemento: "); // Promt para agregar elementos va DENTRO DEL EVENTO para que ocurra cada vez que se pulse el botón.
    lista.appendChild(document.createElement('li')).innerText = elemento; // cada elemento tiene que sumarse a la lista como hijo. .innerText hace que se agregue como texto.
});
