// https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch

const app = document.querySelector("#app");
const oldPokemon = document.querySelector("#old");
const newPokemon = document.querySelector("#new");
const pokemonList = document.querySelector("#pokemon-list");
const emptyFavorites = document.querySelector(".empty");

const favorites = [];

const renderList = () => {
  pokemonList.innerHTML = "";
  if (favorites.length === 0) {
    emptyFavorites.innerHTML = "No hay favoritos";
    pokemonList.setAttribute("hidden", true);
    emptyFavorites.removeAttribute("hidden");
  } else {
    emptyFavorites.setAttribute("hidden", true);
    pokemonList.removeAttribute("hidden");
  }

  favorites.forEach((f) => {
    let li = document.createElement("li");
    li.innerText = f;
    pokemonList.appendChild(li);
  });
  localStorage.setItem("@favorites", JSON.stringify(favorites));
};

oldPokemon.addEventListener("click", () => {
  favorites.pop();
  renderList();
});

newPokemon.addEventListener("click", () => {
  favorites.shift();
  renderList();
});

const removeFavorite = (id) => {
  let deletePokemon = favorites.indexOf(id);
  favorites.splice(deletePokemon, 1);
  renderList();
};

const toggleHeard = (card) => {
  Array.from(card).forEach((child) => {
    if (child.tagName === "I") {
      child.classList.toggle("bi-heart");
      child.classList.toggle("bi-heart-fill");
    }
  });
};

const addFavorites = (e) => {
  if (favorites.length < 10) {
    if (favorites.indexOf(e.currentTarget.id) === -1) {
      favorites.push(e.currentTarget.id);
      // Obtenemos los hijos del div con clase .card
      toggleHeard(e.currentTarget.childNodes);
      renderList();
    } else if (favorites.indexOf(e.currentTarget.id) !== -1) {
      removeFavorite(e.currentTarget.id);
      toggleHeard(e.currentTarget.childNodes);
    }
  }
};

const render = (pokemons) => {
  pokemons.forEach((pokemon) => {
    let cardContainer = document.createElement("div");
    let card = document.createElement("div");
    let img = document.createElement("img");
    let cardBody = document.createElement("div");
    let cardTitle = document.createElement("h5");
    let heart = document.createElement("i");

    img.setAttribute("src", pokemon.ThumbnailImage);
    cardTitle.innerText = pokemon.name;
    cardContainer.classList.add("col-lg-2", "col-sm-4", "pb-3");
    card.classList.add("card", "bg-dark");
    img.classList.add("card-img-top");
    cardBody.classList.add("card-body");
    cardTitle.classList.add("card-title", "text-light", "text-center", "mb-0");
    heart.classList.add("bi", "bi-heart", "pe-3", "pt-3");
    card.setAttribute("id", pokemon.number);

    cardContainer.appendChild(card);
    card.appendChild(heart);
    card.appendChild(img);
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    app.appendChild(cardContainer);

    card.addEventListener("click", (e) => {
      addFavorites(e);
    });
  });
  renderList();
};

fetch("pokemon.json")
  .then((response) => response.json())
  .then((data) => render(data));
