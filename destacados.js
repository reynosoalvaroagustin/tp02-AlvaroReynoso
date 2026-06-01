// LISTA DE DESTACADOS

var destacados = [
  { emoji: "🍕", nombre: "Pizza",         descripcion: "Mozzarella y albahaca." },
  { emoji: "🎂", nombre: "Torta",         descripcion: "Con crema y frutillas." },
  { emoji: "🥗", nombre: "Ensalada",      descripcion: "Rúcula y tomates cherry." },
  { emoji: "🍜", nombre: "Sopa",          descripcion: "Caldo con verduras." },
  { emoji: "🧁", nombre: "Cupcake",       descripcion: "Vainilla con crema." },
  { emoji: "🥪", nombre: "Sandwich",      descripcion: "Jamón y queso tostado." },
];

// Variable para llevar la cuenta de seleccionadas
var cantidadSeleccionadas = 0;

// MOSTRAR TARJETAS EN PANTALLA

function mostrarDestacados() {
  var contenedor = document.getElementById("grid-destacados");

  destacados.forEach(function(item) {
    var tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";

    tarjeta.innerHTML =
      "<span class='emoji'>" + item.emoji + "</span>" +
      "<p class='nombre'>" + item.nombre + "</p>" +
      "<p class='descripcion'>" + item.descripcion + "</p>";

    // Evento de clic para seleccionar/deseleccionar
    tarjeta.addEventListener("click", function() {
      // toggle agrega la clase si no está, la quita si ya está
      tarjeta.classList.toggle("seleccionada");

      if (tarjeta.classList.contains("seleccionada")) {
        cantidadSeleccionadas = cantidadSeleccionadas + 1;
      } else {
        cantidadSeleccionadas = cantidadSeleccionadas - 1;
      }

      actualizarContador();
    });

    contenedor.appendChild(tarjeta);
  });
}

// ACTUALIZAR TEXTO DEL CONTADOR

function actualizarContador() {
  var texto = document.getElementById("contador-texto");

  if (cantidadSeleccionadas === 0) {
    texto.textContent = "Ningún destacado seleccionado.";
  } else if (cantidadSeleccionadas === 1) {
    texto.textContent = "1 destacado seleccionado.";
  } else {
    texto.textContent = cantidadSeleccionadas + " destacados seleccionados.";
  }
}

// Mostrar tarjetas al cargar la página
mostrarDestacados();