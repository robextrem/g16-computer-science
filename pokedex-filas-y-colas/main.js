// https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch

const app = document.querySelector("#app");
const oldPokemon = document.querySelector("#old");
const newPokemon = document.querySelector("#new");
const pokemonList = document.querySelector("#pokemon-list");

const favorites = [];

const renderList = () => {
  pokemonList.innerHTML = "";
  favorites.forEach((f) => {
    let li = document.createElement("li");
    li.innerText = f;
    pokemonList.appendChild(li);
  });
  localStorage.setItem('@favorites', JSON.stringify(favorites))
};

oldPokemon.addEventListener("click", () => {
  favorites.pop();
  renderList();
});

newPokemon.addEventListener("click", () => {
  favorites.shift();
  renderList();
});

const addFavorites = (e) => {
  if (favorites.length < 10) {
    favorites.push(e.currentTarget.id);
    renderList();
  }
};

const render = (pokemons) => {
  pokemons.forEach((pokemon) => {
    let card = document.createElement("div");
    let img = document.createElement("img");
    let cardBody = document.createElement("div");
    let cardTitle = document.createElement("h5");
    let heart = document.createElement("i");

    img.setAttribute("src", pokemon.ThumbnailImage);
    cardTitle.innerText = pokemon.name;
    card.classList.add("card", "col-lg-2", "col-sm-4", "bg-dark");
    img.classList.add("card-img-top");
    cardBody.classList.add("card-body");
    cardTitle.classList.add("card-title", "text-light", "text-center");
    heart.classList.add("bi", "bi-heart", "text-light");
    card.setAttribute("id", pokemon.number);

    card.appendChild(img);
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(heart);
    app.appendChild(card);

    card.addEventListener("click", (e) => {
      addFavorites(e);
    });
  });
};

fetch("pokemon.json")
  .then((response) => response.json())
  .then((data) => render(data));
