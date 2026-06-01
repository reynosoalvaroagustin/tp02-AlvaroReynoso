// LISTA DE MERIENDAS

var meriendas = [
  { emoji: "🥐", nombre: "Medialuna",    descripcion: "Mantecosa y esponjosa.",       categoria: "panadería" },
  { emoji: "🍎", nombre: "Manzana",      descripcion: "Fresca y crujiente.",           categoria: "fruta" },
  { emoji: "🍫", nombre: "Alfajor",      descripcion: "Relleno de dulce de leche.",    categoria: "dulce" },
  { emoji: "🧀", nombre: "Tostada",      descripcion: "Con queso y manteca.",          categoria: "salado" },
  { emoji: "🍌", nombre: "Banana",       descripcion: "Energética y dulce.",           categoria: "fruta" },
  { emoji: "🥜", nombre: "Mix de nueces",descripcion: "Almendras y castañas.",         categoria: "saludable" },
];

// MOSTRAR MERIENDAS EN PANTALLA

function mostrarMeriendas() {
  var contenedor = document.getElementById("lista-meriendas");

  meriendas.forEach(function(item) {
    var tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";

    tarjeta.innerHTML =
      "<span class='emoji'>" + item.emoji + "</span>" +
      "<p class='nombre'>" + item.nombre + "</p>" +
      "<p class='descripcion'>" + item.descripcion + "</p>" +
      "<p class='categoria'>" + item.categoria + "</p>";

    contenedor.appendChild(tarjeta);
  });
}

// CONTAR MERIENDAS AL HACER CLIC

function contarMeriendas() {
  var total = meriendas.length;
  var texto = document.getElementById("resultado");
  texto.textContent = "Hay " + total + " meriendas en el menú de hoy.";
}

// Asignar el evento al botón
document.getElementById("btn-contar").addEventListener("click", contarMeriendas);

// Llamar a la función para mostrar las meriendas al cargar la página
mostrarMeriendas();