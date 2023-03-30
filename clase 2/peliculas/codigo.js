let peliculas = [
    { id: 1, nombre: "El Padrino", anioEstreno: 1972 },
    { id: 2, nombre: "Forrest Gump", anioEstreno: 1994 },
    { id: 3, nombre: "Titanic", anioEstreno: 1997 },
    { id: 4, nombre: "Avatar", anioEstreno: 2009 },
    { id: 5, nombre: "Interstellar", anioEstreno: 2014 }
  ];
  
  // Función para ordenar las películas en orden ascendente por nombre
  function ordenarAscendente() {
    peliculas.sort(function(a, b) {
      let nombreA = a.nombre.toUpperCase(); // Convertir a mayúsculas para ordenar correctamente
      let nombreB = b.nombre.toUpperCase(); // Convertir a mayúsculas para ordenar correctamente
      if (nombreA < nombreB) {
        return -1;
      }
      if (nombreA > nombreB) {
        return 1;
      }
      return 0;
    });
    mostrarPeliculas();
  }
  
  // Función para ordenar las películas en orden descendente por nombre
  function ordenarDescendente() {
    peliculas.sort(function(a, b) {
      let nombreA = a.nombre.toUpperCase(); // Convertir a mayúsculas para ordenar correctamente
      let nombreB = b.nombre.toUpperCase(); // Convertir a mayúsculas para ordenar correctamente
      if (nombreA < nombreB) {
        return 1;
      }
      if (nombreA > nombreB) {
        return -1;
      }
      return 0;
    });
    mostrarPeliculas();
  }
  
  // Función para eliminar una película de la lista en base a su ID
  function eliminarPelicula() {
    let id = parseInt(document.getElementById("id-pelicula").value);
    peliculas = peliculas.filter(function(pelicula) {
      return pelicula.id !== id;
    });
    mostrarPeliculas();
  }
  
// Función para mostrar todas las películas en la tabla
function mostrarPeliculas() {
    
    // Obtener la tabla donde se mostrarán las películas
    let tabla = document.getElementById("tabla-peliculas");
     // Limpiar la tabla antes de agregar las películas
    tabla.innerHTML = "";

    // Agregar cada película a la tabla
    peliculas.forEach(function(pelicula) {
        let fila = document.createElement("tr");
        let celdaId = document.createElement("td");
        celdaId.textContent = pelicula.id;
        let celdaNombre = document.createElement("td");
        celdaNombre.textContent = pelicula.nombre;
        let celdaAnio = document.createElement("td");
        celdaAnio.textContent = pelicula.anioEstreno;
        let celdaEliminar = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = function() {
            peliculas = peliculas.filter(function(p) {
                return p.id !== pelicula.id;
            });
            mostrarPeliculas();
        }
        celdaEliminar.appendChild(botonEliminar);
        fila.appendChild(celdaId);
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaAnio);
        fila.appendChild(celdaEliminar);
        tabla.appendChild(fila);
  });
}