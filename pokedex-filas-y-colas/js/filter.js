const formPokemon = document.querySelector("#search-pokemon");
const reload = document.querySelector("#reload");

const filterByName = (allPokemons, searching) =>
  allPokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase() 
    === searching.toLowerCase() 
    ;
  });

const search = (searching) => {
  // Obtenemos los pokémones almacenados en el archivo pokémones.json
  fetch("data/pokemons.json")
    .then((response) => response.json())
    .then((allPokemons) => {
      let byName = filterByName(allPokemons, searching);
      console.log(byName);
      render(byName);
    });
};

const reloadPokemons = () => {
  // Obtenemos los pokémones almacenados en el archivo pokémones.json
  fetch("data/pokemons.json")
    .then((response) => response.json())
    .then((allPokemons) => {
      render(allPokemons);
    });
};

formPokemon.addEventListener("submit", (e) => {
  e.preventDefault();
  search(e.target.pokemon.value);
});

reload.addEventListener("click", (e) => {
  reloadPokemons();
});
