// LISTA DE PRODUCTOS

var productos = [
  { emoji: "🍊", nombre: "Naranja",    categoria: "fruta",   descripcion: "Rica en vitamina C." },
  { emoji: "🍇", nombre: "Uvas",       categoria: "fruta",   descripcion: "Dulces y frescas." },
  { emoji: "🍓", nombre: "Frutillas",  categoria: "fruta",   descripcion: "Ideales con crema." },
  { emoji: "🍐", nombre: "Pera",       categoria: "fruta",   descripcion: "Suave y dulce." },
  { emoji: "🧇", nombre: "Waffle",     categoria: "dulce",   descripcion: "Con miel y manteca." },
  { emoji: "🍰", nombre: "Budín",      categoria: "dulce",   descripcion: "De limón, muy esponjoso." },
  { emoji: "🥦", nombre: "Brócoli",    categoria: "vegetal", descripcion: "Al vapor, muy saludable." },
  { emoji: "🧆", nombre: "Falafel",    categoria: "salado",  descripcion: "Crocante y especiado." },
];

// MOSTRAR PRODUCTOS EN PANTALLA

function mostrarProductos() {
  var contenedor = document.getElementById("grid-listado");

  productos.forEach(function(item) {
    var tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";

    // Guardamos la categoría en un atributo para poder filtrar después
    tarjeta.setAttribute("data-categoria", item.categoria);

    tarjeta.innerHTML =
      "<span class='emoji'>" + item.emoji + "</span>" +
      "<p class='nombre'>" + item.nombre + "</p>" +
      "<p class='descripcion'>" + item.descripcion + "</p>" +
      "<p class='categoria'>Categoría: " + item.categoria + "</p>";

    contenedor.appendChild(tarjeta);
  });
}

// FILTRAR: MOSTRAR TODOS

function mostrarTodos() {
  var tarjetas = document.querySelectorAll(".tarjeta");

  tarjetas.forEach(function(tarjeta) {
    tarjeta.classList.remove("oculta");
  });

  document.getElementById("info-resultados").textContent =
    "Mostrando todos los productos (" + productos.length + ").";

  // Marcar botón activo
  document.getElementById("btn-todos").classList.add("activo");
  document.getElementById("btn-frutas").classList.remove("activo");
}

// FILTRAR: SOLO FRUTAS

function mostrarSoloFrutas() {
  // Usamos filter para obtener solo las frutas del arreglo
  var soloFrutas = productos.filter(function(item) {
    return item.categoria === "fruta";
  });

  var tarjetas = document.querySelectorAll(".tarjeta");

  // Revisamos cada tarjeta y la ocultamos o mostramos según su categoría
  tarjetas.forEach(function(tarjeta) {
    var categoria = tarjeta.getAttribute("data-categoria");

    if (categoria === "fruta") {
      tarjeta.classList.remove("oculta");
    } else {
      tarjeta.classList.add("oculta");
    }
  });

  document.getElementById("info-resultados").textContent =
    "Mostrando solo frutas (" + soloFrutas.length + ").";

  // Marcar botón activo
  document.getElementById("btn-frutas").classList.add("activo");
  document.getElementById("btn-todos").classList.remove("activo");
}

// EVENTOS DE LOS BOTONES


document.getElementById("btn-todos").addEventListener("click", mostrarTodos);
document.getElementById("btn-frutas").addEventListener("click", mostrarSoloFrutas);

// Mostrar todos al cargar la página
mostrarProductos();
mostrarTodos();