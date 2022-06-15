const formPokemon = document.querySelector("#search-pokemon");
const reload = document.querySelector("#reload");

const filterByAbilities = (allPokemons, searching) =>
  allPokemons.filter((pokemon) => {
    console.log(pokemon.abilities.map((ability) => ability.toLowerCase()));
    return pokemon.abilities
      .map((ability) => ability.toLowerCase())
      .includes(searching.toLowerCase());
  });

const filterByWords = (allPokemons, searching) =>
  allPokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searching.toLowerCase());
  });

const filterByNumber = (allPokemons, searching) =>
  allPokemons.filter((pokemon) => {
    return pokemon.number === searching;
  });

const search = (searching) => {
  // Obtenemos los pokémones almacenados en el archivo pokémones.json
  fetch("data/pokemons.json")
    .then((response) => response.json())
    .then((allPokemons) => {
      let byWords = filterByWords(allPokemons, searching);
      let byAbilities = filterByAbilities(allPokemons, searching);
      let byNumber = filterByNumber(allPokemons, searching);
      let unique = new Set([...byWords, ...byAbilities, ...byNumber]);
      render(unique);
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

reload.addEventListener("click", () => {
  reloadPokemons();
});
