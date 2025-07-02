const pokemones = [
    {
        id: 1,
        nombre: "Bulbasaur",
        tipo: ["Planta", "Veneno"],
        nivel: 5,
        habilidades: ["Placaje", "Látigo Cepa", "Gruñido"],
        stats: { hp: 45, ataque: 49, defensa: 49, velocidad: 45 },
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    {
        id: 4,
        nombre: "Charmander",
        tipo: ["Fuego"],
        nivel: 5,
        habilidades: ["Arañazo", "Ascuas", "Gruñido"],
        stats: { hp: 39, ataque: 52, defensa: 43, velocidad: 65 },
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    },
    {
        id: 7,
        nombre: "Squirtle",
        tipo: ["Agua"],
        nivel: 5,
        habilidades: ["Placaje", "Pistola Agua", "Refugio"],
        stats: { hp: 44, ataque: 48, defensa: 65, velocidad: 43 },
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    },
    {
        id: 10,
        nombre: "Caterpie",
        tipo: ["Bicho"],
        nivel: 3,
        habilidades: ["Disparo Demora", "Placaje"],
        stats: { hp: 45, ataque: 30, defensa: 35, velocidad: 45 },
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
    },
    {
        id: 13,
        nombre: "Weedle",
        tipo: ["Bicho", "Veneno"],
        nivel: 3,
        habilidades: ["Picotazo Veneno", "Disparo Demora"],
        stats: { hp: 40, ataque: 35, defensa: 30, velocidad: 50 },
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"
    },
    {
        id: 16,
        nombre: "Pidgey",
        tipo: ["Normal", "Volador"],
        nivel: 4,
        habilidades: ["Ataque Ala", "Remolino", "Tornado"],
        stats: { hp: 40, ataque: 45, defensa: 40, velocidad: 56 },
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
    },
    {
        id: 19,
        nombre: "Rattata",
        tipo: ["Normal"],
        nivel: 3,
        habilidades: ["Ataque Rápido", "Gruñido"],
        stats: { hp: 30, ataque: 56, defensa: 35, velocidad: 72 },
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
    },
    {
        id: 21,
        nombre: "Spearow",
        tipo: ["Normal", "Volador"],
        nivel: 4,
        habilidades: ["Picotazo", "Ataque Rápido"],
        stats: { hp: 40, ataque: 60, defensa: 30, velocidad: 70 },
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png"
    },
    {
        id: 25,
        nombre: "Pikachu",
        tipo: ["Eléctrico"],
        nivel: 12,
        habilidades: ["Impactrueno", "Placaje", "Onda Trueno", "Ataque Rápido"],
        stats: { hp: 35, ataque: 55, defensa: 40, velocidad: 90 },
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    },
    {
        id: 27,
        nombre: "Sandshrew",
        tipo: ["Tierra"],
        nivel: 6,
        habilidades: ["Arañazo", "Defensa Rizada"],
        stats: { hp: 50, ataque: 75, defensa: 85, velocidad: 40 },
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png"
    },
    {
        id: 29,
        nombre: "Nidoran:signo_femenino:",
        tipo: ["Veneno"],
        nivel: 5,
        habilidades: ["Gruñido", "Doble Bofetón"],
        stats: { hp: 55, ataque: 47, defensa: 52, velocidad: 41 },
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png"
    },
    {
        id: 32,
        nombre: "Nidoran:signo_masculino:",
        tipo: ["Veneno"],
        nivel: 5,
        habilidades: ["Picotazo Veneno", "Gruñido"],
        stats: { hp: 46, ataque: 57, defensa: 40, velocidad: 50 },
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png"
    },
    {
        id: 35,
        nombre: "Clefairy",
        tipo: ["Hada"],
        nivel: 7,
        habilidades: ["Canto", "Puño Drenaje"],
        stats: { hp: 70, ataque: 45, defensa: 48, velocidad: 35 },
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
    },
    {
        id: 37,
        nombre: "Vulpix",
        tipo: ["Fuego"],
        nivel: 8,
        habilidades: ["Ascuas", "Fuego Fatuo"],
        stats: { hp: 38, ataque: 41, defensa: 40, velocidad: 65 },
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png"
    },
    {
        id: 39,
        nombre: "Jigglypuff",
        tipo: ["Normal", "Hada"],
        nivel: 6,
        habilidades: ["Canto", "Rodar", "Doble Bofetón"],
        stats: { hp: 115, ataque: 45, defensa: 20, velocidad: 20 },
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"
    },
    {
        id: 41,
        nombre: "Zubat",
        tipo: ["Veneno", "Volador"],
        nivel: 5,
        habilidades: ["Supersónico", "Mordisco"],
        stats: { hp: 40, ataque: 45, defensa: 35, velocidad: 55 },
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png"
    },
    {
        id: 43,
        nombre: "Oddish",
        tipo: ["Planta", "Veneno"],
        nivel: 6,
        habilidades: ["Absorber", "Derribo"],
        stats: { hp: 45, ataque: 50, defensa: 55, velocidad: 30 },
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png"
    },
    {
        id: 46,
        nombre: "Paras",
        tipo: ["Bicho", "Planta"],
        nivel: 6,
        habilidades: ["Arañazo", "Espora"],
        stats: { hp: 35, ataque: 70, defensa: 55, velocidad: 25 },
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png"
    },
    {
        id: 48,
        nombre: "Venonat",
        tipo: ["Bicho", "Veneno"],
        nivel: 6,
        habilidades: ["Supersónico", "Picotazo Veneno"],
        stats: { hp: 60, ataque: 55, defensa: 50, velocidad: 45 },
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png"
    },
    {
        id: 50,
        nombre: "Diglett",
        tipo: ["Tierra"],
        nivel: 4,
        habilidades: ["Excavar", "Ataque Arena"],
        stats: { hp: 10, ataque: 55, defensa: 25, velocidad: 95 },
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png"
    }
];
//1-Mostrar y Crear todos los Pokémon como tarjetas en el DOM.
//2-Hacer un botón para filtrar por tipo (por ejemplo, solo de tipo fuego).
//3-Agregar una barra de búsqueda por nombre.
//4-Mostrar los detalles al hacer clic en uno.
//5-Usar eventos (click) para actualizar datos.
//6-Recorrer objetos y arrays con forEach.
//7-Estilizar una tarjeta con CSS.

const search = document.getElementById("search");
const btnSearch = document.getElementById("btn-search");

function crearTarjetas(pokemones) {
  const contenedor = document.getElementById("contenedor-pokemones");
  contenedor.innerHTML = "";
  pokemones.forEach(poke => {
    const tarjeta = `
      <div class="card" style="width: 18rem;">
  <img src="${poke.imagen}" class="card-img-top" alt="${poke.nombre}">
  <div class="card-body">
    <p class="card-text">Nombre: ${poke.nombre}</p>
    <p class="card-text">Tipo: ${poke.tipo}</p>
    <p class="card-text">Nivel: ${poke.nivel}</p>
    <p class="card-text">Habilidades: ${poke.habilidades}</p>
    <p class="card-text">Stats: <ul class="list-unstyled">
              <li>❤️ HP: ${poke.stats.hp}</li>
              <li>⚔️ Ataque: ${poke.stats.ataque}</li>
              <li>🛡️ Defensa: ${poke.stats.defensa}</li>
              <li>⚡ Velocidad: ${poke.stats.velocidad}</li>
            </ul></p>
    
  </div>
</div>`;
    contenedor.innerHTML += tarjeta;
  });
}


btnSearch.addEventListener("click", () => {
  const texto = search.value.trim().toLowerCase();
  const pokemonEncontrado = pokemones.find(p => p.nombre.toLowerCase() === texto);

  if (pokemonEncontrado) {
    crearTarjetas([pokemonEncontrado]); 
  } else {
    document.getElementById("contenedor-pokemones").innerHTML = `
      <div class="col-12 text-center text-danger">
        No se encontró ningún Pokémon con ese nombre.
      </div>
    `;
  }
});

search.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    btnSearch.click();
  }
});
crearTarjetas(pokemones);