// Esperar a que cargue la página
window.onload = function() {
    // Simular tiempo de carga (2 segundos)
    setTimeout(function() {
        // Ocultar loader
        document.querySelector('.loader').style.opacity = '0';
        setTimeout(function() {
            document.querySelector('.loader').style.display = 'none';
        }, 500);

        // Mostrar app con efecto mágico
        document.querySelector('.app').style.opacity = '1';
    }, 2000);
};

// Variables para la calculadora
let operacionActual = '';
let resultadoTemporal = 0;
let historialArr = [];

// Elementos HTML
const displayOperacion = document.getElementById('operacion');
const displayResultadoTemporal = document.getElementById('resultado-temporal');
const historialUl = document.getElementById('historial');

// EventListeners para los botones
document.querySelectorAll('.teclado button').forEach(button => {
    button.addEventListener('click', () => {
        const valor = button.innerText;

        if (button.classList.contains('numero')) {
            agregarNumero(valor);
        } else if (button.classList.contains('operador')) {
            agregarOperador(valor);
        } else if (button.classList.contains('punto')) {
            agregarPunto();
        } else if (button.classList.contains('limpiar')) {
            limpiar();
        } else if (button.classList.contains('igual')) {
            calcular();
        }
    });
});

// Funciones de la calculadora
function agregarNumero(numero) {
    operacionActual += numero;
    actualizarDisplay();
    calcularTemporal();
}

function agregarOperador(operador) {
    // Evitar operadores al principio o repetidos
    if (operacionActual === '' || isNaN(operacionActual.slice(-1))) {
        return;
    }
    operacionActual += ' ' + operador + ' ';
    actualizarDisplay();
}

function agregarPunto() {
    // Evitar puntos repetidos en un mismo número
    const ultimoNumero = operacionActual.split(' ').pop();
    if (ultimoNumero.includes('.')) {
        return;
    }
    if (operacionActual === '') {
        operacionActual = '0.';
    } else {
        operacionActual += '.';
    }
    actualizarDisplay();
}

function limpiar() {
    operacionActual = '';
    resultadoTemporal = 0;
    actualizarDisplay();
    displayResultadoTemporal.innerText = 'Resultadote: 0';
}

function calcularTemporal() {
    try {
        // Evaluar la expresión (con precaución)
        // Reemplazar operadores para eval()
        const expresion = operacionActual.replace(/x/g, '*').replace(/÷/g, '/');
        resultadoTemporal = eval(expresion);
        displayResultadoTemporal.innerText = 'Resultadote: ' + resultadoTemporal.toFixed(2);
    } catch (error) {
        // Ignorar errores durante el cálculo temporal
    }
}

function calcular() {
    try {
        const expresion = operacionActual.replace(/x/g, '*').replace(/÷/g, '/');
        const resultado = eval(expresion);
        operacionActual = resultado.toFixed(2);
        actualizarDisplay();
        displayResultadoTemporal.innerText = '';
        agregarHistorial(`${operacionActual} = ${resultado.toFixed(2)}`);
    } catch (error) {
        displayOperacion.value = 'Error';
    }
}

function actualizarDisplay() {
    displayOperacion.value = operacionActual;
}

function agregarHistorial(texto) {
    historialArr.unshift(texto);
    historialUl.innerHTML = "";
    historialArr.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        historialUl.appendChild(li);
    });
}
