//En este array de strings, tenemos todos los colores
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

function changeColor() {
    // 3. Mostrar por consola "Has hecho click en el botón"
    console.log("Has hecho click en el botón");

    // Cambiar el color del tag body a verde.
    // Acordaos que propiedad del objeto teneis que usar para cambiar un estilo en linea

    //document.querySelector('body').style.backgroundColor = "#00FF00";

    // calcular un indice aleatorio de este array y usarlo para obtener el color
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('body').style.backgroundColor = randomColor;
}

// 1. Recuperar el elemento del DOM mdiante el uso de querySelector (ejemplo clase)

const btn = document.querySelector('.btn');

// 2. Asociar el evento 'click' al botón

btn.onclick = changeColor;



