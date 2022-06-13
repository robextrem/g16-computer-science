// https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch

const app = document.querySelector("#app");
const stack = document.querySelector("#stack");
const queue = document.querySelector("#queue");
const pokemonList = document.querySelector("#pokemon-list");
const emptyFavorites = document.querySelector(".empty");

// Obtenemos los pokémones almacenados en el localStorage
const storage = JSON.parse(localStorage.getItem("@favorites"));

// Sí existen pokémones almacenados en el localStorage la variable favorites se iguala a los pokémones almacenados, sino de declara como un Array vacío
const favorites = storage !== null ? storage : [];

const renderList = () => {
  // Renderizamos la lista de los pokémones favoritos
  pokemonList.innerHTML = "";
  favorites.reverse();
  if (favorites.length === 0) {
    emptyFavorites.innerHTML = "¡No has agregado pokémones a tus favoritos!";
    pokemonList.setAttribute("hidden", true);
    emptyFavorites.removeAttribute("hidden");
  } else {
    emptyFavorites.setAttribute("hidden", true);
    pokemonList.removeAttribute("hidden");
  }

  favorites.forEach((pokemon) => {
    let li = document.createElement("li");
    li.innerText = pokemon;
    pokemonList.appendChild(li);
  });

  localStorage.setItem("@favorites", JSON.stringify(favorites));
  reloadHearts();
};

const removeHeart = (id) => {
  // Removemos el corazón de favorito al eliminar por cola o pila
  toggleHeard(document.getElementById(id).childNodes);
};

const reloadHearts = () => {
  // Recargamos los pokémones favoritos almacenados en el localStorage al cargar la aplicación por primera vez
  storage !== null &&
    storage.forEach((id) => {
      let card = Array.from(document.getElementById(id).childNodes);
      card.forEach((child) => {
        if (child.tagName === "I") {
          child.classList.remove("bi-heart");
          child.classList.add("bi-heart-fill");
        }
      });
    });
};

stack.addEventListener("click", () => {
  // Eliminamos elementos del Array favorites por pila
  favorites.reverse();
  let pokemon = favorites.pop();
  removeHeart(pokemon);
  renderList();
});

queue.addEventListener("click", () => {
  // Eliminamos elementos del Array favorites por cola
  favorites.reverse();
  let pokemon = favorites.shift();
  removeHeart(pokemon);
  renderList();
});

const removeFavorite = (id) => {
  // Utilizando el método splice le enviamos el valor del elemento que queremos eliminar y le indicamos que sólo debe ser eliminada una posición
  let deletePokemon = favorites.indexOf(id);
  favorites.splice(deletePokemon, 1);
  renderList();
};

const toggleHeard = (card) => {
  // Recibimos todos los hijos del elemento card y buscamos el elemento de tipo i, para modificar el icono del corazón
  Array.from(card).forEach((child) => {
    if (child.tagName === "I") {
      child.classList.toggle("bi-heart");
      child.classList.toggle("bi-heart-fill");
    }
  });
};

const addFavorites = (e) => {
  favorites.reverse();
  if (favorites.indexOf(e.currentTarget.id) === -1) {
    if (favorites.length < 10) {
      // Agregamos el id detectado en la card que se hizo click
      favorites.push(e.currentTarget.id);
      // Obtenemos los hijos del div con clase card y se lo enviamos toggleHeard para poner o quitar la clase para el icono de corazón vacío o relleno
      toggleHeard(e.currentTarget.childNodes);
      renderList();
    }
  } else if (favorites.indexOf(e.currentTarget.id) !== -1) {
    removeFavorite(e.currentTarget.id);
    toggleHeard(e.currentTarget.childNodes);
  }
};

// Renderizamos todas las card al cargar la aplicación por primera vez
const render = (pokemones) => {
  pokemones.forEach((pokemon) => {
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
    heart.classList.add("bi", "bi-heart");
    card.setAttribute("id", pokemon.number);

    cardContainer.appendChild(card);
    card.appendChild(heart);
    card.appendChild(img);
    card.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    app.appendChild(cardContainer);

    // Click sobre el elemento card que ejecuta la función addFavorites que modifica el valor de la variable favorites
    card.addEventListener("click", (e) => {
      addFavorites(e);
    });
  });
  renderList();
};

// Obtenemos los pokémones almacenados en el archivo pokémones.json
fetch("data/pokemons.json")
  .then((response) => response.json())
  .then((data) => render(data));

window.addEventListener("load", () => {
  renderList();
});

document.addEventListener('onLoad', ()=>{
  console.log('cargando')
})