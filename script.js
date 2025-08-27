// Historial de operaciones
let historialArr = [];

function validar(num1, num2 = true) {
if (num2 !== false && (isNaN(num1) || isNaN(Number(num2)))) return false;
if (num2 === false && isNaN(num1)) return false;
return true;
}

function mostrarError(mensaje = "Por favor, ingresa números válidos") {
document.getElementById("resultado").innerText = mensaje;
}

// Función para actualizar historial
function agregarHistorial(texto) {
historialArr.unshift(texto);
const ul = document.getElementById("historial");
ul.innerHTML = "";
historialArr.forEach(item => {
const li = document.createElement("li");
li.innerText = item;
ul.appendChild(li);
});
}

// Limpiar inputs y resultado
function limpiar() {
document.getElementById("num1").value = "";
document.getElementById("num2").value = "";
document.getElementById("resultado").innerText = "Resultado: ";
}

// Operaciones
function sumar() {
let n1 = Number(document.getElementById("num1").value);
let n2 = Number(document.getElementById("num2").value);
if (!validar(n1, n2)) return mostrarError();
let res = (n1 + n2).toFixed(2);
document.getElementById("resultado").innerText = "Resultado: " + res;
agregarHistorial(`${n1} + ${n2} = ${res}`);
}

function restar() {
let n1 = Number(document.getElementById("num1").value);
let n2 = Number(document.getElementById("num2").value);
if (!validar(n1, n2)) return mostrarError();
let res = (n1 - n2).toFixed(2);
document.getElementById("resultado").innerText = "Resultado: " + res;
agregarHistorial(`${n1} - ${n2} = ${res}`);
}

function multiplicar() {
let n1 = Number(document.getElementById("num1").value);
let n2 = Number(document.getElementById("num2").value);
if (!validar(n1, n2)) return mostrarError();
let res = (n1 * n2).toFixed(2);
document.getElementById("resultado").innerText = "Resultado: " + res;
agregarHistorial(`${n1} * ${n2} = ${res}`);
}

function dividir() {
let n1 = Number(document.getElementById("num1").value);
let n2 = Number(document.getElementById("num2").value);
if (!validar(n1, n2)) return mostrarError();
if (n2 === 0) return mostrarError("No se puede dividir por 0");
let res = (n1 / n2).toFixed(2);
document.getElementById("resultado").innerText = "Resultado: " + res;
agregarHistorial(`${n1} / ${n2} = ${res}`);
}

function potencia() {
let n1 = Number(document.getElementById("num1").value);
let n2 = Number(document.getElementById("num2").value);
if (!validar(n1, n2)) return mostrarError();
let res = (n1 ** n2).toFixed(2);
document.getElementById("resultado").innerText = "Resultado: " + res;
agregarHistorial(`${n1} ^ ${n2} = ${res}`);
}

function porcentaje() {
let n1 = Number(document.getElementById("num1").value);
let n2 = Number(document.getElementById("num2").value);
if (!validar(n1, n2)) return mostrarError();
let res = ((n1 * n2)/100).toFixed(2);
document.getElementById("resultado").innerText = "Resultado: " + res;
agregarHistorial(`${n1}% de ${n2} = ${res}`);
}

function raiz() {
let n1 = Number(document.getElementById("num1").value);
if (!validar(n1, false)) return mostrarError();
if (n1 < 0) return mostrarError("No se puede calcular raíz de número negativo");
let res = Math.sqrt(n1).toFixed(2);
document.getElementById("resultado").innerText = "Resultado: " + res;
agregarHistorial(`√${n1} = ${res}`);
}