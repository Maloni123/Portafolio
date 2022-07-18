var formulario = document.getElementById("formulario");
var button = document.getElementById("button");
var nombre = document.getElementById("nombre");
var correo = document.querySelector("#email");
var mensaje = document.getElementById("mensaje");
var error_mensaje = document.getElementById("error_mensaje");
var text;

formulario.addEventListener("submit", validando);

function validando(e) {
  e.preventDefault();

  error_mensaje.style.padding = "10px";

  if (nombre.value.length < 5) {
    text = "Nome invalido";
    error_mensaje.innerHTML = text;
    return false;
  }

  if (correo.value.indexOf("@") === -1 || correo.value.length < 10) {
    text = " E-mail incorreto";
    error_mensaje.innerHTML = text;
    return false;
  }

  if (mensaje.value.length < 15) {
    text = "Mensagem insuficiente";
    error_mensaje.innerHTML = text;
    return false;
  }

  return false;
}
