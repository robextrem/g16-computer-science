// https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch

const app = document.querySelector("#app");
const render = (data) => {
  let card = document.createElement("div");
  let img = document.createElement("img");
  let cardBody = document.createElement("div");
  let cardTitle = document.createElement("h5");

  img.setAttribute(
    "src",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png"
  );
  cardTitle.innerText = "Charizard";

  card.classList.add("card");
  card.setAttribute("style", "width: 18rem;");
  img.classList.add("card-img-top");
  cardBody.classList.add("card-body");
  cardTitle.classList.add("card-title");

  card.appendChild(img);
  card.appendChild(cardBody);
  cardBody.appendChild(cardTitle);
  app.appendChild(card);
};

fetch("pokemon.json")
  .then((response) => response.json())
  .then((data) => render(data));
