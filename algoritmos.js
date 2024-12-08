// Archivo .js para la progrmacion de los 10 algoritmos

// Funcion para determinar si un año es bisiesto
function esAnioBisiesto() {
    // Pedir al usuario que ingrese un año
    let anio = parseInt(prompt("Ingrese el año a evaluar:"));

    // Verificar si el año es bisiesto
    if (anio % 4 === 0 && (anio % 100 !== 0 || anio % 400 === 0)) {
        // Si es bisiesto, mostrar un mensaje indicando que lo es
        alert("El año " + anio + " es bisiesto.");
    } else {
        // Si no es bisiesto, mostrar un mensaje indicando que no lo es
        alert("El año " + anio + " no es bisiesto.");
    }
}

// Funcion para clasificar por edades
function clasificarPorEdades() {
    // Pedir al usuario que ingrese su edad
    let edad = parseInt(prompt("Ingrese su edad actualmente:"));

    // Clasificar la edad en diferentes categorias
    if (edad <= 12) {
        // Si la edad es menor o igual a 12, es un niño
        alert("Tu edad es compatible con un niño.");
    } else if (edad <= 18) {
        // Si la edad es entre 13 y 18, es un adolescente
        alert("Su edad es compatible con un adolescente.");
    } else if (edad <= 35) {
        // Si la edad es entre 19 y 35, es un adulto joven
        alert("Su edad es compatible con un adulto joven.");
    } else if (edad <= 60) {
        // Si la edad es entre 36 y 60, es un adulto
        alert("Su edad es compatible con un adulto.");
    } else {
        // Si la edad es mayor a 60, es un adulto mayor
        alert("Su edad es compatible con un adulto mayor.");
    }
}

// Funcion para calcular el costo total con descuento
function calcularCostoConDescuento() {
    let precio = parseFloat(prompt("Ingresa el costo del producto."));
    let descuento, total;

    if (precio >= 1000) {
        descuento = precio * 0.10;
        total = precio - descuento;
        alert("El total del precio con 10% de descuento es: " + total);
    } else {
        descuento = precio * 0.05;
        total = precio - descuento;
        alert("El total del precio con 5% de descuento es: " + total);
    }
}

// Funcion para calcular el costo total con descuento
function calcularCostoConDescuento() {
    // Solicitar el precio del producto
    let precio = parseFloat(prompt("Ingresa el costo del producto."));
    let descuento, total;

    // Verificar si el precio es mayor o igual a 1000
    if (precio >= 1000) {
        // Aplicar un 10% de descuento
        descuento = precio * 0.10;
        total = precio - descuento;
        alert("El total del precio con 10% de descuento es: " + total);
    } else {
        // Aplicar un 5% de descuento
        descuento = precio * 0.05;
        total = precio - descuento;
        alert("El total del precio con 5% de descuento es: " + total);
    }
}

function calcularPromedio() {
    // Solicitar las 4 calificaciones al usuario
    let cal1 = parseFloat(prompt("Ingrese la primera calificación:"));
    let cal2 = parseFloat(prompt("Ingrese la segunda calificación:"));
    let cal3 = parseFloat(prompt("Ingrese la tercera calificación:"));
    let cal4 = parseFloat(prompt("Ingrese la cuarta calificación:"));

    // Calcular el promedio
    let promedio = (cal1 + cal2 + cal3 + cal4) / 4;

    // Mostrar el promedio al usuario
    alert("La calificación total es: " + promedio);
}

// Funcion para convertir metros a centimetros
function convertirMetrosACentimetros() {
    // Solicitar los metros al usuario
    let metros = parseFloat(prompt("Ingrese los metros que desea convertir a centimetros:"));

    // Convertir metros a centimetros
    let centimetros = metros * 100;

    // Mostrar el resultado
    alert("El valor de " + metros + " metros equivale a: " + centimetros + " centimetros.");
}

// Funcion para convertir dolares a pesos
function convertirDolaresAPesos() {
    // Solicitar los dolares al usuario
    let dolares = parseFloat(prompt("Escribe la cantidad de dólares que quieres convertir:"));

    // Convertir dolares a pesos (según tasa actual)
    let pesos = dolares * 19.89;

    // Mostrar el resultado
    alert(dolares + " dólares equivale a " + pesos + " pesos.");
}

// Funcion para calcular el perimetro de un rectangulo
function calcularPerimetroRectangulo() {
    // Solicitar la longitud y el ancho del rectangulo
    let long = parseFloat(prompt("Ingrese la longitud del rectángulo:"));
    let anc = parseFloat(prompt("Ingrese el ancho del rectángulo:"));

    // Calcular el perimetro
    let p = (2 * long) + (2 * anc);

    // Mostrar el resultado
    alert("El perímetro del rectángulo es: " + p);
}

// Funcion para calcular la hipotenusa
function calcularHipotenusa() {
    // Solicitar los valores de base y altura
    let base = parseFloat(prompt("Digite el valor de la base:"));
    let altura = parseFloat(prompt("Digite el valor de la altura:"));

    // Calcular la hipotenusa usando el teorema de Pitágoras
    let hipo = Math.sqrt((base * base) + (altura * altura));

    // Mostrar el resultado
    alert("El valor de la hipotenusa es: " + hipo);
}

// Funcion para determinar la nota
function determinarNota() {
    // Solicitar la calificacion del estudiante
    let cal = parseInt(prompt('Ingrese la calificación del estudiante:'));

    // Verificar el rango de la calificación y mostrar la nota correspondiente
    if (cal >= 90) {
        alert('Obtuviste una A.');
    } else if (cal >= 80) {
        alert('Obtuviste una B.');
    } else if (cal >= 70) {
        alert('Obtuviste una C.');
    } else if (cal >= 60) {
        alert('Obtuviste una D.');
    } else {
        alert('Obtuviste una F.');
    }
}

// Funcion para determinar el signo zodiacal
function obtenerSignoZodiacal() {
    // Solicitar el día y mes de nacimiento
    let dia = parseInt(prompt("Ingrese su día de nacimiento:"));
    let mes = parseInt(prompt("Ingresa tu mes de nacimiento:"));

    // Verificar el signo zodiacal basado en el día y mes
    if ((mes === 12 && dia >= 22 && dia <= 31) || (mes === 1 && dia <= 19)) {
        alert("El signo es Capricornio.");
    } else if ((mes === 1 && dia >= 20 && dia <= 31) || (mes === 2 && dia <= 18)) {
        alert("El signo es Acuario.");
    } else if ((mes === 2 && dia >= 19 && dia <= 28) || (mes === 3 && dia <= 20)) {
        alert("El signo es Piscis.");
    } else if ((mes === 3 && dia >= 21 && dia <= 31) || (mes === 4 && dia <= 19)) {
        alert("El signo es Aries.");
    } else if ((mes === 4 && dia >= 20 && dia <= 30) || (mes === 5 && dia <= 20)) {
        alert("El signo es Tauro.");
    } else if ((mes === 5 && dia >= 21 && dia <= 31) || (mes === 6 && dia <= 20)) {
        alert("El signo es Géminis.");
    } else if ((mes === 6 && dia >= 21 && dia <= 30) || (mes === 7 && dia <= 22)) {
        alert("El signo es Cáncer.");
    } else if ((mes === 7 && dia >= 23 && dia <= 31) || (mes === 8 && dia <= 22)) {
        alert("El signo es Leo.");
    } else if ((mes === 8 && dia >= 23 && dia <= 31) || (mes === 9 && dia <= 22)) {
        alert("El signo es Virgo.");
    } else if ((mes === 9 && dia >= 23 && dia <= 30) || (mes === 10 && dia <= 22)) {
        alert("El signo es Libra.");
    } else if ((mes === 10 && dia >= 23 && dia <= 31) || (mes === 11 && dia <= 21)) {
        alert("El signo es Escorpio.");
    } else if ((mes === 11 && dia >= 22 && dia <= 30) || (mes === 12 && dia <= 21)) {
        alert("El signo es Sagitario.");
    }
}