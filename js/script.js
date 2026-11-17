// ===============================
// JavaScript básico - MateFácil
// ===============================

// Función genérica para mostrar alertas
function mostrarAlerta(mensaje) {
  alert(mensaje);
}

// ---------- FORMULARIO DE REGISTRO ----------
function validarFormulario(event) {
  event.preventDefault(); // evita que se recargue la página inmediatamente

  const nombre = document.getElementById("nombre").value.trim();
  const apellidos = document.getElementById("apellidos").value.trim();
  const edad = document.getElementById("edad").value;

  if (nombre === "" || apellidos === "" || edad === "") {
    mostrarAlerta("Por favor completa todos los campos.");
    return;
  }

  if (edad < 10 || edad > 99) {
    mostrarAlerta("La edad debe estar entre 10 y 99 años.");
    return;
  }

  // Alerta de éxito
  mostrarAlerta("¡Registro exitoso!\nBienvenido/a " + nombre + " " + apellidos + ".");

  // Redirigir a la página de confirmación después de 0.5 segundos
  setTimeout(function () {
    window.location.href = "reCurso.html";
  }, 500);
}

// ---------- CALCULADORA PITÁGORAS ----------
function calcularPitagoras() {
  const modo = document.getElementById("modoPitagoras").value;
  const valor1 = parseFloat(document.getElementById("valor1").value);
  const valor2 = parseFloat(document.getElementById("valor2").value);
  const resultado = document.getElementById("resultadoPitagoras");

  if (isNaN(valor1) || isNaN(valor2) || valor1 <= 0 || valor2 <= 0) {
    mostrarAlerta("Ingresa valores numéricos válidos mayores a 0.");
    resultado.textContent = "";
    return;
  }

  let res;

  if (modo === "hipotenusa") {
    // a² + b² = c²  →  c = √(a² + b²)
    res = Math.sqrt(valor1 * valor1 + valor2 * valor2);
    resultado.innerHTML = "Hipotenusa (c) = <strong>" + res.toFixed(2) + "</strong>";
  } else if (modo === "cateto") {
    // a² + b² = c²  →  b = √(c² - a²)
    if (valor2 <= valor1) {
      mostrarAlerta("La hipotenusa debe ser mayor que el cateto.");
      resultado.textContent = "";
      return;
    }
    res = Math.sqrt(valor2 * valor2 - valor1 * valor1);
    resultado.innerHTML = "Cateto faltante = <strong>" + res.toFixed(2) + "</strong>";
  }
}

// ---------- CALCULADORA TALES ----------
function calcularTales() {
  const a = parseFloat(document.getElementById("talesA").value);
  const b = parseFloat(document.getElementById("talesB").value);
  const c = parseFloat(document.getElementById("talesC").value);
  const resultado = document.getElementById("resultadoTales");

  if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    mostrarAlerta("Ingresa los tres valores numéricos válidos mayores a 0.");
    resultado.textContent = "";
    return;
  }

  // Proporción: a / b = c / x  →  x = (b * c) / a
  const x = (b * c) / a;
  resultado.innerHTML = "El valor que falta (x) = <strong>" + x.toFixed(2) + "</strong>";
}

// ---------- CAMBIAR ETIQUETAS SEGÚN MODO PITÁGORAS ----------
function actualizarEtiquetasPitagoras() {
  const modo = document.getElementById("modoPitagoras").value;
  const label1 = document.getElementById("label1");
  const label2 = document.getElementById("label2");

  if (modo === "hipotenusa") {
    label1.textContent = "Cateto a";
    label2.textContent = "Cateto b";
  } else {
    label1.textContent = "Cateto conocido";
    label2.textContent = "Hipotenusa (c)";
  }
}